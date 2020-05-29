import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class MyPreloadService implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>) {
        return route.data && route.data.preload ? load() : of(null);
    }
}
