import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: "app-new-courses",
  templateUrl: "./new-courses.component.html",
  styleUrls: ["./new-courses.component.css"]
})
export class NewCoursesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  form = new FormGroup({
    topics: new FormArray([])
  });
  addTopic(topic: HTMLInputElement) {
    (this.form.get("topics") as FormArray).push(new FormControl(topic.value));
    topic.value = "";
  }
  removeTopic(topic: FormControl) {
    let index = (this.form.get("topics") as FormArray).controls.indexOf(topic);
    (this.form.get("topics") as FormArray).removeAt(index);
  }
}
