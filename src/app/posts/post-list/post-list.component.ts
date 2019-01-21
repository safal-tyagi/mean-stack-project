import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'Post 1', content: 'Post 1 Content'},
  //   {title: 'Post 2', content: 'Post 2 Content'},
  //   {title: 'Post 3', content: 'Post 3 Content'}
  // ];

  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  postSub: Subscription;

  // public to initialize the property directly
  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    // accept the copy of posts data
    this.postSub = this.postService.getPostUpdatedListener()
              .subscribe((posts: Post[]) => {this.posts = posts; });
  }

  // unsubscribe to destroy the copy of data
  ngOnDestroy () {
    this.postSub.unsubscribe();
  }
}
