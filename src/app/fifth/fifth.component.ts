import { Component, OnInit } from '@angular/core';
import { FifthService } from './fifth.service';

@Component({
  selector: 'bg-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {
  people: string[];

  constructor(private fifthService: FifthService) { }

  ngOnInit(): void {
    this.people = this.fifthService.getPeople();
  }

}
