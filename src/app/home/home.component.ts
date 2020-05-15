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
      }, num);
    });

    this.subscription = ourInterval(1000).subscribe(count => {
      console.log(count);
    });

    // this.subscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
