import { Component, OnInit } from "@angular/core";
import { PostService } from "./post.service";
import { AppError } from "../Common/app-error";
import { NotFoundError } from "../Common/not-found-error";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(
      (response: any[]) => {
        this.posts = response;
      },
      error => {
        alert("An unexpected Error occured");
        console.log(error);
      }
    );
  }

  createPost(titleValue: HTMLInputElement) {
    let post: any = {
      title: titleValue.value
    };
    titleValue.value = "";
    this.service.createPost(post).subscribe(
      response => {
        post["id"] = response["id"];
        this.posts.splice(0, 0, post);
      },
      error => {
        alert("An unexpected Error occured");
        console.log(error);
      }
    );
  }

  updatePost(post) {
    this.service
      .updatePost("/" + post.id, JSON.stringify({ isRead: true }))
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          alert("An unexpected Error occured");
          console.log(error);
        }
      );
  }

  deletePost(post) {
    this.service.deletePost("/" + post.id).subscribe(
      response => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("The post is not found");
        } else {
          alert("An unexpected Error occured");
          console.log(error);
        }
      }
    );
  }
}
