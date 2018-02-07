import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../platform-core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'page-platform-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginPage implements OnInit {

  input: any = {};
  errMsg: string = '';
  isSubmit: boolean = false;

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {
    this.input = {
      username: localStorage.getItem('pbiUsername') ? localStorage.getItem('pbiUsername') : '',
      password: '',
      isRemember: localStorage.getItem('pbiUsername')
    };
  }

  ngOnInit(): void {}

  // 关闭错误提示
  closeErrMsg(): void {
    this.errMsg = '';
  }

  // 选择记住用户名变化事件
  isRememberChange(): void {
    if (!this.input.isRemember) {
      localStorage.removeItem('pbiUsername');
    }
  }

  // 监控键盘按键事件
  keyup(event: any): void {
    if (event.keyCode === 13) {
      this.login();
    }
  }

  // 登录
  login(): void {
    if (this.input.username === '' || this.input.password === '') {
      this.errMsg = '必须填写用户名和密码！';
      return;
    }
    this.isSubmit = true;
    let params: Object = {username: this.input.username, pwd: this.input.password};
    this.http.post('/auth/login', params, {responseType: 'text'}).subscribe((data: string) => {
      this.isSubmit = false;
      this.userService.login(data);
      if (this.input.isRemember) {
        localStorage.setItem('pbiUsername', this.input.username);
      }
      this.router.navigate(['/home/bi-board/dashboard']);
    }, (err: HttpErrorResponse) => {
      this.isSubmit = false;
      this.errMsg = err.error;
    });
  }
}
