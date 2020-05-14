import { Component, OnInit } from '@angular/core';
import { Sto004Service } from '../sto004.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanDeactivateComponent } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bg-sto004-edit-doc',
  templateUrl: './sto004-edit-doc.component.html',
  styleUrls: ['./sto004-edit-doc.component.scss']
})
export class Sto004EditDocComponent implements OnInit, CanDeactivateComponent {
  document: { id: number, name: string, status: string };
  documentName = '';
  documentStatus = '';
  allowEdit = false;
  isSaved = false;

  constructor(private sto004Service: Sto004Service, private route: ActivatedRoute, private router: Router) { }

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
    this.isSaved = true;
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.isSaved || this.documentName === this.document.name && this.documentStatus === this.document.status) {
      return true;
    }
    return confirm('თქვენ გაქვთ შეუნახავი ცვლილებები ნამდვილად გსურთ გასვლა?');
  }

}
