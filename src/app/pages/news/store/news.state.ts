import {Injectable} from "@angular/core";
import {Action, State, Selector, StateContext} from "@ngxs/store";

import {INewsModel, INewsComponentState} from "models/news.model";

export class UpdateNews {
  static readonly type = "[NewsState] UpdateNews";

  constructor(public payload: { news: INewsModel[] }) {
  }
}

@State<INewsModel[]>({
  name: "news",
  defaults: [
    {
      title: "The Shiba",
      subtitle: "The Shiba The Shiba The Shiba",
      avatar: "https://material.angular.io/assets/img/examples/shiba1.jpg",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageText:  "Photo of a Shiba Inu",
      content: `
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
      `,
    },
    {
      title: "The Shiba",
      subtitle: "The Shiba The Shiba The Shiba",
      avatar: "https://material.angular.io/assets/img/examples/shiba1.jpg",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageText:  "Photo of a Shiba Inu",
      content: `
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
      `,
    }
  ]
})
@Injectable()
export class NewsState {

  @Action(UpdateNews)
  updateNews(ctx: StateContext<INewsComponentState>, payload: { news: INewsModel[] }): void {
    ctx.patchState(payload)
  }
}
