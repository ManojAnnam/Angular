import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];
  url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {
    http.get(this.url).subscribe((response: any[]) => {
      this.posts = response;
    });
  }

  ngOnInit() {}

  createPost(titleValue: HTMLInputElement) {
    let post: any = {
      title: titleValue.value
    };
    titleValue.value = "";
    this.http.post(this.url, post).subscribe(response => {
      post["id"] = response["id"];
      this.posts.splice(0, 0, post);
    });
  }
}
