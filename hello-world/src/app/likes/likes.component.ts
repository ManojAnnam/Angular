import { Component, OnInit,Input } from "@angular/core";

@Component({
  selector: "app-likes",
  templateUrl: "./likes.component.html",
  styleUrls: ["./likes.component.css"]
})
export class LikesComponent implements OnInit {
  @Input()  likesCount: number = 0;
  @Input() isActive: boolean = false;

  constructor() {}

  ngOnInit() {}

  onHeartClicked() {
    this.isActive = !this.isActive;
    this.likesCount = this.isActive ? ++this.likesCount : --this.likesCount;
  }
}
