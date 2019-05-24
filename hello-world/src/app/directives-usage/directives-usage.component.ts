import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives-usage",
  templateUrl: "./directives-usage.component.html",
  styleUrls: ["./directives-usage.component.css"]
})
export class DirectivesUsageComponent implements OnInit {
  courses: number[] = [1, 2];

  constructor() {}

  ngOnInit() {}
}
