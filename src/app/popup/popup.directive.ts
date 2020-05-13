import { Directive, OnInit, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[bgPopup]'
})

export class PopupDirective implements OnInit {

    @HostBinding('class.open') addElementClass = false;

    constructor(private elRef: ElementRef<HTMLElement>) { }

    ngOnInit() {

    }

    @HostListener('document:click', ['$event']) changeElementClass(event) {
        if (this.elRef.nativeElement === event.target) {
            this.addElementClass = !this.addElementClass;
        }
        else {
            if (event.target.parentElement !== this.elRef.nativeElement){
                this.addElementClass = false;
            }
        }
    }

}
