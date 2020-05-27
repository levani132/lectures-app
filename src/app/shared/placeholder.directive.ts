import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bgPlaceholder]',
})
export class PlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
