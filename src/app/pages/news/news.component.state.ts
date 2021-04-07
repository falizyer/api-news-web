import {Injectable} from "@angular/core";
import {State} from "@ngxs/store";

import {INewsComponentState} from "models/news.model";

@State<INewsComponentState>({
  name: "NewsComponent",
  defaults: {}
})
@Injectable()
export class NewsComponentState {
}
