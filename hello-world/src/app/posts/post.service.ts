import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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

  updatePost(updateUrlString:string,data){
    let updateUrl = this.url+updateUrlString;
    return this.http.patch(updateUrl,data);
  }

  deletePost(deleteUrlString:string){
    let deleteUrl = this.url+deleteUrlString;
      return this.http.delete(deleteUrl);
  }
}
