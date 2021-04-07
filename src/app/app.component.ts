import {Component, OnInit} from "@angular/core";
import {Store} from "@ngxs/store";

@Component({
  selector: "main[apn-root]",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit() {

  }
}
