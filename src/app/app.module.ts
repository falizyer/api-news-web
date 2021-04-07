import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxsModule} from "@ngxs/store";

import {MatSidenavModule} from "@angular/material/sidenav";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {MainHeaderModule} from "./components/main-header/main-header.module";
import {MainFooterModule} from "./components/main-footer/main-footer.module";
import {AppComponentState} from "./app.component.state";
import {HttpClientModule} from "@angular/common/http";

import {environment} from "environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Store
    NgxsModule.forRoot([
      AppComponentState,
    ], {
      developmentMode: !environment.production
    }),

    // UI Components
    MatSidenavModule,

    // APP Components
    MainHeaderModule,
    MainFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
