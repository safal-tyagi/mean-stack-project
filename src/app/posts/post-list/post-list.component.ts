import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  posts = [
    {title: 'Post 1', content: 'Post 1 Content'},
    {title: 'Post 2', content: 'Post 2 Content'},
    {title: 'Post 3', content: 'Post 3 Content'}
  ];
}
