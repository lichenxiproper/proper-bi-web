import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { CoreConfig } from './configs/core.config';
import { UserService } from './services/user.service';
import { MyHttpInterceptor } from './interceptors/http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: []
})
export class PlatformCoreModule {

  constructor (@Optional() @SkipSelf() parentModule: PlatformCoreModule) {
    if (parentModule) {
      throw new Error('PlatformCoreModule只能注入到根模块下！');
    }
  }

  static forRoot(config: CoreConfig): ModuleWithProviders {
    return {
      ngModule: PlatformCoreModule,
      providers: [
        { provide: CoreConfig, useValue: config },
        { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }
      ]
    };
  }
}
