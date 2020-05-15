import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'bg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const ourInterval = num => new Observable<number>(observer => {
      let counter = 0;
      setInterval(() => {
        observer.next(counter++);
        if (counter > 2) {
          observer.complete();
        }
        if (counter > 3) {
          observer.error(new Error('Counter can\'t be more than 3'));
        }
      }, num);
    });

    this.subscription = ourInterval(1000)
      .subscribe(count => {
        console.log(count);
      }, e => {
        console.log(e);
      }, () => {
        console.log('completed');
      });

    // this.subscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
