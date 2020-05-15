import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'bg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
