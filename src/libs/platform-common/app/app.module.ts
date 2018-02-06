import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnfoundPage } from '../pages/unfound/unfound';
import { EmptyPage } from '../pages/empty/empty';

@NgModule({
  declarations: [
    UnfoundPage,
    EmptyPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class PlatformCommonModule { }
