import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store, Select} from "@ngxs/store";
import {Observable, Subscription} from "rxjs";

import {INewsModel} from "models/news.model";
import {NewsState} from "./store/news.state";

@Component({
  selector: "section[apn-news]",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();

  @Select(NewsState) private $news: Observable<INewsModel[]>;

  news: INewsModel[];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.subscriptions.add(this.$news.subscribe(news => this.news = news));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
