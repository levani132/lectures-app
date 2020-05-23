import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SeminarService } from './seminar.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showCongratulations = false;
  tm: number = 1000;
  
  private timeoutSubscription: Subscription;
  private seminarSubscription: Subscription;

  constructor(private seminarService: SeminarService) {}

  ngOnInit() {
    // TODO: აქ დაწერეთ თქვენი interval observable-ის კოდი.
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(this.tm);
        if (this.showCongratulations) {
          observer.complete('complete');
        }
        count++;
      }, this.tm)
    });

    this.timeoutSubscription = customObservable.pipe(map((tm: number) => {
      return `ფუნქციის გამოძახება მოხდა ${tm} მილი წამის შემდეგ`; 
    })).subscribe((tm: number) => {
      console.log(tm);
    }, error => {
      console.log('მოხდა ერორი');
    }, () => {
      console.log('დასრულებულია');
    })

    this.seminarSubscription = this.seminarService.seminarFinishedSubject.subscribe(showMessage => {
      this.showCongratulations = showMessage;
    })
  }

  ngOnDestroy() {
    this.timeoutSubscription.unsubscribe();
    this.seminarSubscription.unsubscribe();
  }
}
