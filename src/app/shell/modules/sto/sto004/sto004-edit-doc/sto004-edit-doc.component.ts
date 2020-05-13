import { Component, OnInit } from '@angular/core';
import { Sto004Service } from '../sto004.service';

@Component({
  selector: 'bg-sto004-edit-doc',
  templateUrl: './sto004-edit-doc.component.html',
  styleUrls: ['./sto004-edit-doc.component.scss']
})
export class Sto004EditDocComponent implements OnInit {
  document: { id: number, name: string, status: string };
  documentName = '';
  documentStatus = '';

  constructor(private sto004Service: Sto004Service) { }

  ngOnInit(): void {
    this.document = this.sto004Service.getDocument(1);
    this.documentName = this.document.name;
    this.documentStatus = this.document.status;
  }

  onUpdateDocument() {
    this.sto004Service.updateDocument(this.document.id, { name: this.documentName, status: this.documentStatus });
  }

}
