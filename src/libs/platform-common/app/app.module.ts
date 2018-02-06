import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnfoundPage } from '../pages/unfound/unfound';
import { EmptyPage } from '../pages/empty/empty';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    UnfoundPage,
    EmptyPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: []
})
export class PlatformCommonModule { }
