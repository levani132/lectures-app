import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeminarService {
  seminarFinishedSubject = new Subject<boolean>();
}
