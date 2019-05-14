import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class CoursesService {
  public courses: string[];
  getAllCourses() {
    return ["Manoj-Annam", "Annam-Manoj", "Sai-Manoj"];
  }
}
