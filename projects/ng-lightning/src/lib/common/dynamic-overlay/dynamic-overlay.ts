import { OverlayPositionBuilder, Overlay, ScrollStrategyOptions, OverlayKeyboardDispatcher } from '@angular/cdk/overlay';
import { Location, DOCUMENT } from '@angular/common';
import { ComponentFactoryResolver, Injectable, Injector, NgZone, Inject } from '@angular/core';
import { DynamicOverlayContainer } from './dynamic-overlay-container';
import { Directionality } from '@angular/cdk/bidi';

@Injectable()
export class DynamicOverlay extends Overlay {

  private dynamicOverlayContainer: DynamicOverlayContainer;

  constructor(scrollStrategies: ScrollStrategyOptions, overlayContainer: DynamicOverlayContainer,
    componentFactoryResolver: ComponentFactoryResolver, positionBuilder: OverlayPositionBuilder,
    keyboardDispatcher: OverlayKeyboardDispatcher, injector: Injector, ngZone: NgZone,
    @Inject(DOCUMENT) document: any, directionality: Directionality, location?: Location | undefined) {

    super(scrollStrategies, overlayContainer, componentFactoryResolver, positionBuilder,
      keyboardDispatcher, injector, ngZone, document, directionality, location);

    this.dynamicOverlayContainer = overlayContainer;
  }

  public setContainerElement(containerElement: HTMLElement): void {
    this.dynamicOverlayContainer.setContainerElement(containerElement);
  }
}
