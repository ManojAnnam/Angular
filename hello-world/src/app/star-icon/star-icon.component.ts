import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-star-icon",
  templateUrl: "./star-icon.component.html",
  styleUrls: ["./star-icon.component.css"]
})
export class StarIconComponent implements OnInit {
  @Input("is-Empty") isEmptyIcon: boolean;
  @Output("change") clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onIconClick() {
    this.isEmptyIcon = !this.isEmptyIcon;
    this.clicked.emit(this.isEmptyIcon);
  }
}
