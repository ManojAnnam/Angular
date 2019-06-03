import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  log(x) {
    console.log(x);
  }

  submitForm(f) {
    console.log(f);
  }
}
