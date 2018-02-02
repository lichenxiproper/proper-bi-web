import { Injectable, Optional } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { CoreConfig } from '../configs/core.config';
import { UserService } from '../services/user.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor(@Optional() private config: CoreConfig, private userService: UserService) {}

  // 拦截器
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const myReq = req.clone({
      url: this.needContextPrefix(req.url) ? this.config.context + req.url : req.url,
      headers: req.headers.set('X-PEP-TOKEN', 'Bearer ' + this.userService.getToken())
    });
    return next.handle(myReq).do(() => { }, (err) => {
      if (err.status === -1 || err.status === 0) {
        err.error = '网络异常，请稍后再试';
      } else if (err.status === 401) {
        err.error = null;
      } else if (err.status === 404) {
        err.error = '资源未找到';
      } else if (err.status === 502) {
        err.error = '网络异常';
      } else if (err.status === 503) {
        err.error = '连接数过多，请稍后...';
      } else if (err.status === 504) {
        err.error = '网络异常';
      } else {
        if (err.error != null && /\w+[\s\.]\w+/.test(err.error)) {
          err.error = '系统异常';
        }
      }
    });
  }

  // 判断是否改变url地址
  needContextPrefix(url: string): boolean {
    return !(url.indexOf('./assets') === 0 || url.indexOf('http') === 0);
  }
}
