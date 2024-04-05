import { NgModule } from '@angular/core';

import { PrimaryInfoComponent } from "./primary-info/primary-info.component";
import { SecundaryInfoComponent } from "./secundary-info/secundary-info.component"
import { TertiaryInfoComponent } from "./tertiary-info/tertiary-info.component";
import { PrimaryInfoGeneralComponent } from "./primary-info-general/primary-info-general.component";



@NgModule({
  declarations: [],
  imports: [
    PrimaryInfoComponent,
    SecundaryInfoComponent,
    TertiaryInfoComponent,
    PrimaryInfoGeneralComponent
  ],

  exports: [
    PrimaryInfoComponent,
    SecundaryInfoComponent,
    TertiaryInfoComponent,
    PrimaryInfoGeneralComponent
  ]
})
export class ComponentsModule { }
