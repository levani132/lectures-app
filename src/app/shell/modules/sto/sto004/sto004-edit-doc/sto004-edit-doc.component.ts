import { Component, OnInit } from '@angular/core';
import { Sto004Service } from '../sto004.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bg-sto004-edit-doc',
  templateUrl: './sto004-edit-doc.component.html',
  styleUrls: ['./sto004-edit-doc.component.scss']
})
export class Sto004EditDocComponent implements OnInit {
  document: { id: number, name: string, status: string };
  documentName = '';
  documentStatus = '';
  allowEdit = false;

  constructor(private sto004Service: Sto004Service, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allowEdit = !!+this.route.snapshot.queryParams.allowEdit;
    this.route.queryParams.subscribe(queryParams => {
      this.allowEdit = !!+queryParams.allowEdit;
    });
    this.document = this.sto004Service.getDocument(+this.route.snapshot.params.id);
    this.documentName = this.document.name;
    this.documentStatus = this.document.status;
    this.route.params.subscribe(params => {
      this.document = this.sto004Service.getDocument(+params.id);
      this.documentName = this.document.name;
      this.documentStatus = this.documentStatus;
    });
  }

  onUpdateDocument() {
    this.sto004Service.updateDocument(this.document.id, { name: this.documentName, status: this.documentStatus });
  }

}
