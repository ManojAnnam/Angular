import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../courses.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  public courses: string[];
  constructor(public courseService: CoursesService) {
    debugger;
    this.courses = courseService.getAllCourses();
    console.log(this.courses);
  }

  ngOnInit() {}
  public title: string = "hai Manoj";
}
