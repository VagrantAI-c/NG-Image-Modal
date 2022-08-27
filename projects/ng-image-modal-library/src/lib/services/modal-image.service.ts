import { DOCUMENT } from '@angular/common';
import { ApplicationRef, createComponent, Inject, Injectable, Injector, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { ZoomableImageComponent } from '../../public-api';
import { ZOOMABLE_IMAGE_CONFIG } from '../constants/zoomable-image-config.const';
import { ZOOMABLE_IMAGE_LOADER } from '../constants/zoomable-image-loader.const';
import { ModalImageConfig } from '../models/modal-image-config.interface';
import { ModalImageRef } from '../models/modal-image-ref.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalImageService {

  private componentRef: Type<ZoomableImageComponent> | null = null;
  private activeImage: ModalImageRef | null = null;

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  /**
   * Opens zoomable image in an overlay. Only one image can be opened at once.
   *
   * @returns image ref or null if another image is already opened.
   */
  open(config: ModalImageConfig): ModalImageRef | null {
    if (this.activeImage) {

      return null;
    }
    const isStable = new Subject<void>();
    this.activeImage = {
      isStable: isStable.asObservable(),
    };
    if (!this.componentRef) {
      ZOOMABLE_IMAGE_LOADER().then((componentRef: Type<ZoomableImageComponent>) => {
        this.componentRef = componentRef;
        this.render(this.componentRef);
      });
    } else {
      this.render(this.componentRef);
    }

    return this.activeImage;
  }

  private render(componentRef: Type<ZoomableImageComponent>): void {
    const componentInstance = createComponent(componentRef, {
      environmentInjector: this.applicationRef.injector,
      hostElement: this.document.body,
      elementInjector: Injector.create({
        providers: [
          {
            provide: ZOOMABLE_IMAGE_CONFIG,
            useValue: {

            },
          },
        ],
        name: 'Zoomable image injector',
        parent: this.injector,
      })
    });
  }

}
