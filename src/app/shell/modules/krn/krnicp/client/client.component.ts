import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  client: { id: number, name: string };

  constructor() { }

  ngOnInit(): void {
  }

}
