import { Component } from '@angular/core';
// import { EventEmitter, Output } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component ({
    selector: 'app-post-create',
    styleUrls: ['./post-create.component.css'],
    templateUrl: './post-create.component.html'
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  // @Output() postCreated = new EventEmitter<Post>();
  // dependency injection
  constructor(public postService: PostService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) { return; }
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    // this.postCreated.emit(post);

    // using dependency injection
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
