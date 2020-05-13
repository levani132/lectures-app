import { Component, OnInit } from '@angular/core';

import { Sto004Service } from './sto004.service';

@Component({
  selector: 'bg-sto004',
  templateUrl: './sto004.component.html',
  styleUrls: ['./sto004.component.scss']
})
export class Sto004Component implements OnInit {
  public documents: { id: number, name: string, status: string }[] = [];

  constructor(private sto004Service: Sto004Service) { }

  ngOnInit(): void {
    this.documents = this.sto004Service.getDocuments();
  }

}
