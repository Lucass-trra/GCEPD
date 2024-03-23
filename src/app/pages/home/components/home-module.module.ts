import { NgModule } from '@angular/core';

import { ArrowDownButtonComponent } from "./arrow-down-button/arrow-down-button.component";
import { CardFeatureComponent } from "./card-feature/card-feature.component";
import { CreatorCardComponent } from "./creator-card/creator-card.component";
import { SectionTitleComponent } from "./section-title/section-title.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";

@NgModule({
  declarations: [],
  imports: [
    ArrowDownButtonComponent,
    CardFeatureComponent,
    CreatorCardComponent,
    SectionTitleComponent,
    SignUpFormComponent
  ],

  exports: [ 
    ArrowDownButtonComponent,
    CardFeatureComponent,
    CreatorCardComponent,
    SectionTitleComponent,
    SignUpFormComponent
  ]
})
export class HomeModule { }
