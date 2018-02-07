import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../platform-core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-platform-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomePage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {}

  // 退出登录
  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
