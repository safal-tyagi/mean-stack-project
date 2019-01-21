import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'}) // dependency injection
// other option: put in Provider[] in app.module
export class PostService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
    // return this.posts;
  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) { // post: Post
    const post = { title: title, content: content};
    this.posts.push(post);
    // make copy of post array and publish for external access
    this.postUpdated.next([...this.posts]);
  }
}
