import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-title-case-converter",
  templateUrl: "./title-case-converter.component.html",
  styleUrls: ["./title-case-converter.component.css"]
})
export class TitleCaseConverterComponent implements OnInit {
  title: string;

  constructor() {}

  ngOnInit() {}
}
