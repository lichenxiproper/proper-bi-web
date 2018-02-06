import { Component, OnInit, ElementRef, Optional, OnDestroy } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
