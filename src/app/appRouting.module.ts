import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from '../libs/platform-core';
import { PlatformHomeModule, HomePage } from '../libs/platform-home';
import { PlatformLoginModule } from '../libs/platform-login';
import { UnfoundPage, EmptyPage } from '../libs/platform-common';
import { BiBoardModule, DashboardPage } from '../libs/bi-board';

const appChildRoutes: Routes = [
  { path: 'bi-board', children: [
    { path: 'dashboard', component: DashboardPage }
  ]},
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
    BiBoardModule,
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
