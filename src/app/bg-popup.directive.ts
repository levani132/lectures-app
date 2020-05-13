import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[bgBgPopup]'
})
export class BgPopupDirective {
  @HostBinding('class.open') isVisible = false;
  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('document:click', ['$event']) myClick(event){
    if(this.el.nativeElement.contains(event.target)){
      this.isVisible = !this.isVisible;
    }else{
      this.isVisible = false;
    }
    
    
  }

}
