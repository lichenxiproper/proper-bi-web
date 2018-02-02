import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../pages/home/home';
import { PlatformCommonModule } from '../../platform-common';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    RouterModule,
    MalihuScrollbarModule.forRoot(),
    PlatformCommonModule
  ],
  providers: [],
  bootstrap: []
})
export class PlatformHomeModule { }
