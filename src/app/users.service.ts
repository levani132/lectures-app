import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsersService {
  activeUsers = ['ლევანი', 'დიმა'];
  inactiveUsers = ['მარიამი', 'გიორგი'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(...this.activeUsers.splice(id, 1));
  }

  onSetToActive(id: number) {
    this.activeUsers.push(...this.inactiveUsers.splice(id, 1));
  }
}
