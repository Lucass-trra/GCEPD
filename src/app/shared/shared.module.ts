import { NgModule } from '@angular/core';

//components
import { AsideCategoryComponent } from "./aside-category/aside-category.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";



@NgModule({
  imports: [
    AsideCategoryComponent,
    FooterComponent,
    HeaderComponent
  ],

  exports: [ 
    AsideCategoryComponent,
    FooterComponent,
    HeaderComponent
  ]

})
export class SharedModule { }
