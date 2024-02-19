import { NgModule } from '@angular/core';

//components
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { ButtonTemplateComponent } from "./button-template/button-template.component";
import { CategoryTitleComponent } from "./category-title/category-title.component";
import { TutorialFormComponent } from "./tutorial-form/tutorial-form.component";
import { AsideCategoryComponent } from "../components/aside-category/aside-category.component";


@NgModule({
  imports: [
    SignUpFormComponent,
    ProductCardComponent,
    ButtonTemplateComponent,
    CategoryTitleComponent,
    ProductFormComponent,
    TutorialFormComponent,
    AsideCategoryComponent

  ],

  exports: [
    SignUpFormComponent,
    ProductCardComponent,
    ButtonTemplateComponent,
    CategoryTitleComponent,
    ProductFormComponent,
    TutorialFormComponent,
    AsideCategoryComponent
  ]
})
export class ComponentsModule { }
