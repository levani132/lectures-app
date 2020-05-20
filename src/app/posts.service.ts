import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createPost(title: string, content: string) {
    const post = {
      title, content
    };
    this.http
      .put<{ id: number }>('https://bog-angular-course-api.herokuapp.com/lectures-api/posts', post)
      .subscribe(response => {
        console.log(response);
      }, error => {
        this.error.next(error.error);
      });
  }

  fetchPosts() {
    return this.http.get<Post[]>('https://bog-angular-course-api.herokuapp.com/lectures-api/posts')
      .pipe(
        map((data) => {
          data.forEach(item => {
            item.validated = true;
          });
          return data;
        })
      );
  }

  deletePost() {
    return this.http.delete('https://bog-angular-course-api.herokuapp.com/lectures-api/posts');
  }
}
