import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'bg-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  message: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.message = this.route.snapshot.data.message;
    this.route.data.subscribe(
      (data: Data) => {
        this.message = data.message;
      }
    );
  }

}
