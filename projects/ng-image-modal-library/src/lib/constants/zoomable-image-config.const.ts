import { InjectionToken } from '@angular/core';
import { ZoomableImageConfig } from '../models/zoomable-image-config.interface';

export const ZOOMABLE_IMAGE_CONFIG = new InjectionToken<ZoomableImageConfig>('Zoomable image config');
