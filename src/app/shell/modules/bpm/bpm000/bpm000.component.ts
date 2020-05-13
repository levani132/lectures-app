import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bg-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss']
})
export class Bpm000Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoadSto004() {
    // complex logics
    this.router.navigate(['/sto004']);
  }

}
