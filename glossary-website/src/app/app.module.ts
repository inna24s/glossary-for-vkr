import {NgModule} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SideNavOuterToolbarModule, SideNavInnerToolbarModule} from './layouts';
import {ScreenService, AppInfoService} from './shared/services';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    AppRoutingModule
  ],
  providers: [
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
