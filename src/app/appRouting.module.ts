import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../libs/platform-core';
import { PlatformHomeModule, HomePage } from '../libs/platform-home';
import { PlatformLoginModule } from '../libs/platform-login';
import { UnfoundPage, EmptyPage } from '../libs/platform-common';

const appChildRoutes: Routes = [
 { path: '', component: EmptyPage },
 { path: '**', component: UnfoundPage }
];

const routes: Routes = [
  { path: 'home', component: HomePage, canActivate: [AuthGuard], children: appChildRoutes },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    PlatformHomeModule,
    PlatformLoginModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
