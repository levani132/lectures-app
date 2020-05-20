import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  createPost(title: string, content: string) {
    const post = {
      title, content
    };
    this.http
      .post<{ id: number }>('https://bog-angular-course-api.herokuapp.com/lectures-api/posts', post)
      .subscribe(response => {
        console.log(response);
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
