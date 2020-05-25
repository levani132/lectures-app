import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';
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
      .post<{ id: number }>('posts', post, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Custom-Header': 'customHeaderValue' }),
        observe: 'response'
      })
      .subscribe(response => {
        console.log(response);
      }, error => {
        this.error.next(error.error);
      });
  }

  fetchPosts() {
    return this.http.get<Post[]>('posts');
  }

  deletePost(id) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('id', id);
    httpParams = httpParams.append('someSecondParam', 'someSecondValue');
    return this.http.delete('posts', {
      // params: new HttpParams().set('id', id),
      params: httpParams,
      observe: 'events',
      responseType: 'text'
    }).pipe(
      tap(res => {
        console.log(res);
        if (res.type === HttpEventType.Sent) {
          // ...
        }
        if (res.type === HttpEventType.Response) {
          console.log(res.body);
        }
      })
    );
  }
}
