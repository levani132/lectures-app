import { Component, OnInit } from '@angular/core';
import { FifthService } from './fifth.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'bg-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {
  people: string[];

  constructor(private fifthService: FifthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.people = data['fifth'];
      }
    )
  }

}
