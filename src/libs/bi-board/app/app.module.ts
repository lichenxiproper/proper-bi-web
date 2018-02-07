import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformCommonModule } from '../../platform-common';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { DashboardPage } from '../pages/dashboard/dashboard';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardPage }
];

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    PlatformCommonModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: []
})
export class BiBoardModule { }
