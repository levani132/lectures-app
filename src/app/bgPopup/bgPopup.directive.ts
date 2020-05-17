import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[bgPopup]'
})
export class bgPopupDirective {
    @HostBinding('class.open') isOpen = false;

    constructor(private elementRef: ElementRef) {}
    
    @HostListener('document:click', ['$event']) onClick($event) {
        this.isOpen = this.elementRef.nativeElement.contains($event.target) ? !this.isOpen : false;
    }
}