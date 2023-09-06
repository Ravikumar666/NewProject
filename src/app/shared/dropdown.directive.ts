import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen: boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    console.log(event);
    this.isOpen = this.elRef.nativeElement.innerText ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
