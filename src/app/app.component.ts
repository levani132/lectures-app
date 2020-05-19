import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filterText = '';
  shouldFilter = true;
  accounts = [
    {
      owner: 'ლევან ბეროშვილი',
      status: 'Pending',
      createdAt: new Date(2019, 5, 12)
    },
    {
      owner: 'მარიამ ავალიანი',
      status: 'Active',
      createdAt: new Date(2019, 5, 12)
    },
    {
      owner: 'დიმიტრი ბედინაძე',
      status: 'Inactive',
      createdAt: new Date(2019, 5, 12)
    },
    {
      owner: 'გიორგი კილტავა',
      status: 'Active',
      createdAt: new Date(2019, 5, 12)
    }
  ];

  addAccount() {
    this.accounts.push({
      owner: 'გიორგი კილტავა',
      status: 'Active',
      createdAt: new Date(2019, 5, 12)
    });
  }
}
