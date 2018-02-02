import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../pages/login/login';
import { PlatformCommonModule } from '../../platform-common';

const appRoutes: Routes = [
  { path: 'login', component: LoginPage }
];

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    PlatformCommonModule
  ],
  providers: [],
  bootstrap: []
})
export class PlatformLoginModule { }
