import { Component, OnInit, OnDestroy } from '@angular/core';

import { SeminarService } from './seminar.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showCongratulations = false;
  subscription: Subscription;
  subjSubscription: Subscription;

  constructor(private seminarService: SeminarService) {}

  ngOnInit() {
    // TODO: აქ დაწერეთ თქვენი interval observable-ის კოდი.
    const timeout = num => new Observable<number>(observer => {
      setTimeout( () => {
        observer.next(num / 1000);
        observer.complete();
      }, num);
    });

    this.subscription = timeout(900)
    .pipe(
      map( time => {
        return time + 's has passed';
      })
    )
    .subscribe(response => {
      console.log(response);
    }, e => {
      console.log('this should not be shown');
      }, () => {
      console.log('completed');
    });

    // Subject subscription below this line
    this.subjSubscription = this.seminarService.subject.subscribe( show => {
      this.showCongratulations = show;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subjSubscription.unsubscribe();
  }
}
