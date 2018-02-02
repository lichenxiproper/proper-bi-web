import { Injectable } from '@angular/core';

const TOKEN: string = 'peaToken';

@Injectable()
export class UserService {

  constructor() {}

  // 用户是否登录
  isLogin(): boolean {
    if (sessionStorage.getItem(TOKEN) != null && sessionStorage.getItem(TOKEN) !== '') {
      return true;
    } else {
      return false;
    }
  }

  // 用户登录
  login(token: string): void {
    sessionStorage.setItem(TOKEN, token);
  }

  // 退出登录
  logout(): void {
    sessionStorage.removeItem(TOKEN);
  }

  // 取得token
  getToken(): string {
    return sessionStorage.getItem(TOKEN);
  }
}
