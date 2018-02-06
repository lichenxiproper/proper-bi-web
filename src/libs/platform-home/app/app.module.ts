import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../pages/home/home';
import { PlatformCommonModule } from '../../platform-common';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    RouterModule,
    PlatformCommonModule
  ],
  providers: [],
  bootstrap: []
})
export class PlatformHomeModule {}
