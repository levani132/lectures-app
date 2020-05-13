import { Component, OnInit, Input } from '@angular/core';
import { countsService } from '../counts.service';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  isActive: boolean = true;

  constructor(public counterService: countsService) { 
  }

  ngOnInit(): void {
  }
}
