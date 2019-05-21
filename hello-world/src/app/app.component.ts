import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular-Learning";
  post: object = {
    isEmpty: false
  };
  Notify(isEmptyValue) {
    console.log("Empty Value:",isEmptyValue);
  }
}
