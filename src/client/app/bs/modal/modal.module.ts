import { NgModule, ModuleWithProviders } from '@angular/core';

import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalDirective } from './modal.component';
import { PositioningService } from './.';
import { ComponentLoaderFactory } from './.';

@NgModule({
  declarations: [ModalBackdropComponent, ModalDirective],
  exports: [ModalBackdropComponent, ModalDirective],
  entryComponents: [ModalBackdropComponent]
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: ModalModule, providers: [ComponentLoaderFactory, PositioningService]};
  }
}
