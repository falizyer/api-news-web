import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgxsModule} from "@ngxs/store";

import {MatCardModule} from "@angular/material/card";

import {NewsRoutingModule} from "./news-routing.module";
import {NewsComponent} from "./news.component";
import {NewsComponentState} from "./news.component.state";
import {NewsState} from "./store/news.state";

@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,

    // Store
    NgxsModule.forFeature([
      NewsComponentState,
      NewsState,
    ]),

    // Material UI Components
    MatCardModule,
  ]
})
export class NewsModule {
}
