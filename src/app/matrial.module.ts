import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

const sharedModules = [
  NoopAnimationsModule, 
  MatButtonModule
];
@NgModule({
  declarations: [],
  imports: [...sharedModules],
  exports: [...sharedModules],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MatrialModule {}
