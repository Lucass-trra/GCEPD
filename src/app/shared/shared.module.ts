import { NgModule } from '@angular/core';

//components

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";



@NgModule({
  imports: [
    FooterComponent,
    HeaderComponent
  ],

  exports: [ 
    FooterComponent,
    HeaderComponent
  ]

})
export class SharedModule { }
