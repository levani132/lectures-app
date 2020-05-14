import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanDeactivateComponent {
  canDeactivate(): Promise<boolean> | Observable<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(component: CanDeactivateComponent,
                currentRoute: ActivatedRouteSnapshot,
                state: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
    return component.canDeactivate();
  }
}
