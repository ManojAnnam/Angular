import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import { AppError } from "../Common/app-error";
import { NotFoundError } from "../Common/not-found-error";

@Injectable({
  providedIn: "root"
})
export class PostService {
  private url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, post);
  }

  updatePost(updateUrlString: string, data) {
    let updateUrl = this.url + updateUrlString;
    return this.http.patch(updateUrl, data);
  }

  deletePost(deleteUrlString: string) {
    let deleteUrl = this.url + deleteUrlString;
    return this.http.delete(deleteUrl).catch((error: Response) => {
      if (error.status === 400) {
        return Observable.throw(new NotFoundError());
      }
      return Observable.throw(new AppError());
    });
  }
}
