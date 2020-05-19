import { Component, OnInit, OnDestroy } from '@angular/core';

import { SeminarService } from './seminar.service';
import { Subscription, Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showCongratulations = false;

  subsctiption: Subscription;
  constructor(private seminarService: SeminarService) {}

  ngOnInit() {
    // TODO: აქ დაწერეთ თქვენი interval observable-ის კოდი.
        const timeout = num => new Observable<number>(observer =>{
          setTimeout(() => {
            observer.next(num++);
            observer.complete();
          }, num)
        }) 
    

    timeout(1000)
    .pipe(
      map(data=> {
        return "ფუნქციის გამოძახება მოხდა " + data + " მილი წამის შემდეგ"
      })
    )
    .subscribe(text =>{
      console.log(text);
    })
    
    this.subsctiption = this.seminarService.subject.subscribe(value => {
      this.showCongratulations = value;
    })

  }

  ngOnDestroy(){
    this.subsctiption.unsubscribe();
  }
}
