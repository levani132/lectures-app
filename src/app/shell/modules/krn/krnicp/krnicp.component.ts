import { Component } from '@angular/core';

@Component({
  selector: 'bg-krnicp',
  templateUrl: './krnicp.component.html',
  styleUrls: ['./krnicp.component.scss']
})
export class KrnicpComponent {
  clients = [
    {
      id: 1,
      name: 'ლევანი'
    },
    {
      id: 2,
      name: 'მარიამი'
    },
    {
      id: 3,
      name: 'გიორგი'
    },
    {
      id: 4,
      name: 'დიმიტრი'
    }
  ];
}
