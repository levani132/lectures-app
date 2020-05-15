import { Component, OnInit } from '@angular/core';

import { SeminarService } from './seminar.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showCongratulations = false;

  constructor(private seminarService: SeminarService) {}

  ngOnInit() {
    // TODO: აქ დაწერეთ თქვენი interval observable-ის კოდი.
  }
}
