import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FifthService {
  private people = [
    'ლევანი',
    'გიორგი',
    'მარიამი',
    'დიმიტრი',
    'დათო'
  ];

  getPeople() {
    return this.people;
  }
}
