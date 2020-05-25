import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  createPost(title: string, content: string) {
    return this.http.post<{ id: number }>('lectures-api/posts', { title, content });
  }

  fetchPosts() {
    return this.http.get<Post[]>('lectures-api/posts');
  }

  deletePost(id) {
    return this.http.delete('lectures-api/posts', { params: new HttpParams().set('id', id) });
  }
}
