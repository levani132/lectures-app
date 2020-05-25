import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = 0;

  startLoading() {
    this.isLoading++;
  }

  endLoading() {
    this.isLoading = Math.max(this.isLoading - 1, 0);
  }

  useLoader = <T>(obs: Observable<T>): Observable<T> => {
    this.startLoading();
    return obs.pipe(finalize(() => this.endLoading()));
  }
}
