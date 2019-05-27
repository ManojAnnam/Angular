import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives-usage",
  templateUrl: "./directives-usage.component.html",
  styleUrls: ["./directives-usage.component.css"]
})
export class DirectivesUsageComponent implements OnInit {


  constructor() {}

  ngOnInit() {}

  courses: object[];

  loadCourses() {
    this.courses = [
      { id: 1, name: "m1" },
      { id: 2, name: "m2" },
      { id: 3, name: "m3" }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
