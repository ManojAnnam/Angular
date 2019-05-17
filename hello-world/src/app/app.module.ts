import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { SummaryPipe } from "./pipes/summary.pipe";
import { AngularFontAwesomeModule } from "angular-font-awesome";

@NgModule({
  declarations: [AppComponent, CoursesComponent, SummaryPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CoursesComponent]
})
export class AppModule {}
