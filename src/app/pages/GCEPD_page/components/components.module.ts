import { NgModule } from '@angular/core';

//components
import { AsideCategoryComponent } from "./aside-category/aside-category.component";
import { CategoryTitleComponent } from "./category-title/category-title.component";
import { ProductCardComponent } from "./product-card/product-card.component";


@NgModule({
  declarations: [],
  imports: [
    AsideCategoryComponent,
    CategoryTitleComponent,
    ProductCardComponent
  ],

  exports: [
    AsideCategoryComponent,
    CategoryTitleComponent,
    ProductCardComponent
  ]
})
export class ComponentsModule { }
