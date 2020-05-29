import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloadingService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route?.data?.preload ? load() : of(null);
  }
}
