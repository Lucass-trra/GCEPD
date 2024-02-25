import { NgModule } from '@angular/core';

//components

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ButtonTemplateComponent } from "./button-template/button-template.component";


@NgModule({
  imports: [
    FooterComponent,
    HeaderComponent,
    ButtonTemplateComponent
  ],

  exports: [ 
    FooterComponent,
    HeaderComponent,
    ButtonTemplateComponent
  ]

})
export class SharedModule { }
