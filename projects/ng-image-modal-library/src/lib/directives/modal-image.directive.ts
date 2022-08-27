import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  exportAs: 'ngModalImage',
  selector: 'button[ngModalImage]',
})
export class ModalImageDirective {

  @Input() ngModalImageSrc?: string | null = null;

  @HostListener('click') processClick(): void {
    this.open();
  }

  constructor(

  ) {
  }

  open(): void {

  }

}
