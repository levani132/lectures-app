import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counterService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter = 0;

  constructor(public counterService: CounterService, private router: Router) { }

  ngOnInit(): void {
  }

  counterButtonClicked(){
    this.router.navigate(['/counter'], {queryParams: {++this.counter}});
  }

}
