import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatExpansionModule,
  MatInputModule
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { SummaryPipe } from "./pipes/summary.pipe";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { TitleCaseConverterComponent } from "./title-case-converter/title-case-converter.component";
import { StarIconComponent } from "./star-icon/star-icon.component";
import { BootstrapPanelComponent } from "./bootstrap-panel/bootstrap-panel.component";
import { LikesComponent } from "./likes/likes.component";
import { DirectivesUsageComponent } from "./directives-usage/directives-usage.component";
import { InputFormatDirective } from "./input-format.directive";
import { AssignmentZippyComponent } from "./assignment-zippy/assignment-zippy.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    TitleCaseConverterComponent,
    StarIconComponent,
    BootstrapPanelComponent,
    LikesComponent,
    DirectivesUsageComponent,
    InputFormatDirective,
    AssignmentZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CoursesComponent]
})
export class AppModule {}
