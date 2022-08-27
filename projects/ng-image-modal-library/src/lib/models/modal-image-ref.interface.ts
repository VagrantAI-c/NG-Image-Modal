import { Observable } from 'rxjs';

export interface ModalImageRef {
  /** Emits once as soon as zoomable image is rendered */
  isStable: Observable<void>;
}
