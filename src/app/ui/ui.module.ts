import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiDrawerComponent } from './ui-drawer/ui-drawer.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';

const Components = [
  UiDrawerComponent,
  UiModalComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: Components,
  exports: Components
})
export class UiModule { }
