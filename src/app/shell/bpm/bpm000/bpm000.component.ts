import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../posts.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'bg-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss']
})
export class Bpm000Component implements OnInit {
  posts = [];
  isLoading = false;
  error;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onDeletePost(id) {
    this.postsService.deletePost(id)
      .pipe(obs => this.loader(obs))
      .subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== id);
      }, error => {
        this.error = error.error;
      });
  }

  private fetchPosts() {
    this.postsService.fetchPosts()
      .pipe(obs => this.loader(obs))
      .subscribe(posts => this.posts = posts);
  }

  private loader<T>(observable: Observable<T>): Observable<T> {
    this.isLoading = true;
    return observable.pipe(finalize(() => this.isLoading = false));
  }

}
