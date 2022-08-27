import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ZOOMABLE_IMAGE_CONFIG } from '../../constants/zoomable-image-config.const';
import { ZoomableImageConfig } from '../../models/zoomable-image-config.interface';

@Component({
  standalone: true,
  selector: 'ng-zoomable-image',
  templateUrl: './zoomable-image.component.html',
  styleUrls: ['./zoomable-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ZoomableImageComponent {

  readonly background = this.config.background || 'rgba(0,0,0,.5)';

  constructor(
    @Inject(ZOOMABLE_IMAGE_CONFIG) private config: ZoomableImageConfig,
  ) {
  }

}
