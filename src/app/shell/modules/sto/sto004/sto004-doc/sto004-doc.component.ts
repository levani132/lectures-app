import { Component, OnInit } from '@angular/core';
import { Sto004Service } from '../sto004.service';

@Component({
  selector: 'bg-sto004-doc',
  templateUrl: './sto004-doc.component.html',
  styleUrls: ['./sto004-doc.component.scss']
})
export class Sto004DocComponent implements OnInit {
  document = { name: 'some name', status: 'some status' };

  constructor(private sto004Service: Sto004Service) { }

  ngOnInit(): void {
    this.document = this.sto004Service.getDocument(1);
  }

}
