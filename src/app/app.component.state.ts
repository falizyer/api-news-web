import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";

import {IAppComponentState, Locales} from "models/app.model";

export class UpdateAppLocale {
  static readonly type = "[AppComponentState] UpdateAppLocale";

  constructor(public payload: { locale: Locales }) {
  }
}

@State<IAppComponentState>({
  name: "ApplicationComponent",
  defaults: {
    locale: Locales.EN_US,
  }
})
@Injectable()
export class AppComponentState {

  @Action(UpdateAppLocale)
  updateLocale(ctx: StateContext<IAppComponentState>, payload: { locale: Locales }): void {
    let stored = ctx.getState();

    if (stored.locale === payload.locale) {
      return;
    }
    ctx.patchState(payload)
  }
}
