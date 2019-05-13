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
  public isActive: boolean = true;

  onSave(event) {
    console.log("Button Clicked", event);
    /*we can stop event bubbling in this way*/
    event.stopPropagation();
  }

  onSaveDiv(event) {
    console.log("Div Clicked", event);
  }
}
