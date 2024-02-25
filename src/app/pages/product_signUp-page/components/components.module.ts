import { NgModule } from '@angular/core';

//components
import { ProductFormComponent } from "./product-form/product-form.component";
import { TutorialFormComponent } from "./tutorial-form/tutorial-form.component";

@NgModule({
  declarations: [],
  imports: [
    ProductFormComponent,
    TutorialFormComponent
  ],
  exports: [
    ProductFormComponent,
    TutorialFormComponent
  ]
})
export class ComponentsModule { }
