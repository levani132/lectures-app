import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  @HostListener('document:click', ['$event']) toggleOpen($event) {
    this.isOpen = this.elementRef.nativeElement.contains($event.target) ? !this.isOpen : false;
  }

}
