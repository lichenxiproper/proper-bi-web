import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './appRouting.module';
import { PlatformCoreModule } from '../libs/platform-core';
import { coreConstant } from './constants/core.constant';
import { PlatformCommonModule } from '../libs/platform-common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PlatformCoreModule.forRoot(coreConstant),
    PlatformCommonModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
