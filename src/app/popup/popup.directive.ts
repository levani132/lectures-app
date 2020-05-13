import { Directive, OnInit, HostBinding, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[bgPopup]'
})

export class PopupDirective implements OnInit, AfterViewInit {

    @HostBinding('class.open') addElementClass = false;

    constructor(private elRef: ElementRef<HTMLElement>) { }

    popup;

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.popup = this.elRef.nativeElement.querySelector('.popup');
    }

    @HostListener('document:click', ['$event']) changeElementClass(event) {
        console.log(this.popup.outerHTML);
        if (this.elRef.nativeElement.contains(event.target) && !this.popup.contains(event.target)) {
            this.addElementClass = !this.addElementClass;
        }
        else {
            if (!this.elRef.nativeElement.contains(event.target)) {
                this.addElementClass = false;
            }
        }
    }

}
