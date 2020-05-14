import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (!isNaN(params.count)) {
        this.count = +params.count;
      }
    });
  }

  onCount() {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { count: this.count + 1 } });
  }

}
