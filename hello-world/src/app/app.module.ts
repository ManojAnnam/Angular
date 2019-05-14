import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { SummaryPipe } from "./pipes/summary.pipe";

@NgModule({
  declarations: [AppComponent, CoursesComponent, SummaryPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CoursesComponent]
})
export class AppModule {}
