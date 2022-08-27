import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { ModalImageDirective } from '../../directives/modal-image.directive';

@Component({
  standalone: true,
  selector: 'ng-modal-image',
  templateUrl: 'modal-image.component.html',
  styleUrls: ['modal-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    ModalImageDirective,
  ],
})
export class ModalImageComponent {

  @Input() ngModalImageSrc?: string | null = null;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
  ) { }

  open(): void {
    const src = this.ngModalImageSrc || (this.elementRef.nativeElement.querySelector('img[src]') as HTMLImageElement)?.src;
    if (!src) {

      return;
    }
  }

}
