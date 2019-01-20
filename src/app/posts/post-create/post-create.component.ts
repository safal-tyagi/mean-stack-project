import { Component } from '@angular/core';

@Component ({
    selector: 'app-post-create',
    styleUrls: ['./post-create.component.css'],
    templateUrl: './post-create.component.html'
})

export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NO CONENT';
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
