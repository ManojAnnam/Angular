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
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((response: any[]) => {
      this.posts = response;
    });
  }

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

  updatePost(post) {
    this.http
      .patch(this.url + "/" + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.http.delete(this.url + "/" + post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
