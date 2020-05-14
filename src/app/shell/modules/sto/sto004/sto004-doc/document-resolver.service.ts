import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Sto004Service } from '../sto004.service';

interface Document {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class DocumentResolver implements Resolve<Document> {

  constructor(private sto004Service: Sto004Service) {}

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Document> | Promise<Document> | Document {
    return this.sto004Service.getDocument(+activatedRoute.params.id);
  }
}
