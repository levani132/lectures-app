import { Component, OnInit, OnDestroy } from '@angular/core';

import { SeminarService } from './seminar.service';
import { Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showCongratulations = false;
  subscription: Subscription;

  constructor(private seminarService: SeminarService) {}

  ngOnInit() {
    // TODO: აქ დაწერეთ თქვენი interval observable-ის კოდი.
    const timeout = time => new Observable((observer: Observer<number>) => {
      setTimeout(() => {
        observer.next(time);
        observer.complete();
      }, time);
    });

    timeout(2000).
      pipe(map((value: number) => {
        return 'ფუნქციის გამოძახება მოხდა ' + value + ' მილი წამის შემდეგ';
      }))
      .subscribe(value => {
        console.log(value);
      });

    this.subscription = this.seminarService.subj.subscribe(value => {
      this.showCongratulations = value;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
