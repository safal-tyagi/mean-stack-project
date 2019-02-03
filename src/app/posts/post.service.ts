import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'}) // dependency injection
// other option: put in Provider[] in app.module
export class PostService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  // http
  constructor(private http: HttpClient) {}

  getPosts() {
    // return [...this.posts];
    // return this.posts;
    this.http
    .get<{message: string, posts: Post[]}>(
      'http://localhost:3000/api/posts'
      )
    .pipe(map())
    .subscribe((postData) => {
        this.posts = postData.posts;
        // this.message = postData.message;
    });
  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) { // post: Post
    const post: Post = { id: null, title: title, content: content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
    .subscribe((respData) => {
      // console display the post data
      console.log(respData.message);
      this.posts.push(post);
      // make copy of post array and publish for external access
      this.postUpdated.next([...this.posts]);
    });
  }
}
