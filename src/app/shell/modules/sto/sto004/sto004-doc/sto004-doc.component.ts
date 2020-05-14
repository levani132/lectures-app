import { Component, OnInit } from '@angular/core';
import { Sto004Service } from '../sto004.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bg-sto004-doc',
  templateUrl: './sto004-doc.component.html',
  styleUrls: ['./sto004-doc.component.scss']
})
export class Sto004DocComponent implements OnInit {
  document = { name: 'some name', status: 'some status' };

  constructor(private sto004Service: Sto004Service, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.document = this.sto004Service.getDocument(+this.route.snapshot.params.id);
    this.route.params.subscribe(params => {
      this.document = this.sto004Service.getDocument(+params.id);
    });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
