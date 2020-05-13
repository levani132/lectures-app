import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Sto004Service {
  private documents = [
    {
      id: 1,
      name: 'სესხისთვის',
      status: 'active'
    },
    {
      id: 2,
      name: 'სახლისთვის',
      status: 'inactive'
    },
    {
      id: 3,
      name: 'მანქანისთვის',
      status: 'inactive'
    }
  ];

  getDocuments() {
    return this.documents;
  }

  getDocument(id: number) {
    return this.documents.find(d => d.id === id);
  }

  updateDocument(id: number, newDocument: { name: string, status: string }) {
    const document = this.documents.find(d => d.id === id);
    if (document) {
      document.name = newDocument.name;
      document.status = newDocument.status;
    }
  }
}
