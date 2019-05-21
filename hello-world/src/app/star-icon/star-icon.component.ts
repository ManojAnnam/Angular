import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-star-icon",
  templateUrl: "./star-icon.component.html",
  styleUrls: ["./star-icon.component.css"]
})
export class StarIconComponent implements OnInit {
  @Input('is-Empty') isEmptyIcon: boolean;

  constructor() {}

  ngOnInit() {}

  onIconClick() {
    debugger;
    this.isEmptyIcon = !this.isEmptyIcon;
  }
}
