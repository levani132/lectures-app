import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FifthService } from './fifth.service';


@Injectable()
export class FifthResolver implements Resolve<string[]> {
    constructor(private fifth: FifthService) {}

    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> | Promise<string[]> | string[] {
        return this.fifth.getPeople();
    }
}