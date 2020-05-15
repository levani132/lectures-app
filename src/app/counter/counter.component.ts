import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count = 0
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.count = this.route.snapshot.queryParams.count ? this.route.snapshot.queryParams.count : 0;
    this.route.queryParams.subscribe(
      params => {
        this.count = +params.count || 0;
      }
    );
  }

  onClick(){
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: {count: this.count + 1}});
  }



}
