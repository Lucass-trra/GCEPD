import { NgModule } from '@angular/core';

//components
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ButtonTemplateComponent } from "./button-template/button-template.component";
import { CategoryTitleComponent } from "./category-title/category-title.component";


@NgModule({
  imports: [
    SignUpFormComponent,
    ProductCardComponent,
    ButtonTemplateComponent,
    CategoryTitleComponent

  ],

  exports: [
    SignUpFormComponent,
    ProductCardComponent,
    ButtonTemplateComponent,
    CategoryTitleComponent
  ]
})
export class ComponentsModule { }
