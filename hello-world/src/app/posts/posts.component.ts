import { Component, OnInit } from "@angular/core";
import { PostService } from "./post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response: any[]) => {
      this.posts = response;
    });
  }

  createPost(titleValue: HTMLInputElement) {
    let post: any = {
      title: titleValue.value
    };
    titleValue.value = "";
    this.service.createPost(post).subscribe(response => {
      post["id"] = response["id"];
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post) {
    this.service
      .updatePost( "/" + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.service.deletePost( "/" + post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
