import { Component, OnInit } from '@angular/core';

import { SeminarService } from '../seminar.service';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private seminarService: SeminarService) {}

  ngOnInit(): void {
  }

  onEndSeminar() {
  }

}
