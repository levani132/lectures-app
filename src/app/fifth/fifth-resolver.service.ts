import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FifthService } from './fifth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FifthResolver implements Resolve<string[]> {
  constructor(private fifthService: FifthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.fifthService.getPeople();
  }
}
