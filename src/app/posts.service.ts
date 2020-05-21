import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

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
      .post<{ id: number }>('https://bog-angular-course-api.herokuapp.com/lectures-api/posts', post, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Custom-Header': 'customHeaderValue' })
      })
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
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  deletePost(id) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('id', id);
    httpParams = httpParams.append('someSecondParam', 'someSecondValue');
    return this.http.delete('https://bog-angular-course-api.herokuapp.com/lectures-api/posts', {
      // params: new HttpParams().set('id', id),
      params: httpParams
    });
  }
}
