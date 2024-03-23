import { Component } from '@angular/core';

import { SignUpFormComponent } from "./components/sign-up-form/sign-up-form.component";
//modules
import { SharedModule } from "../../shared/shared.module";
import { HomeModule } from "./components/home-module.module";


//json
import * as featureData from './components/card-feature/features.json';
import * as creatoData from './components/creator-card/creators.json';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [SharedModule,HomeModule,SignUpFormComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  featureInfo = featureData.features;
  creatorInfo = creatoData.creators;

  smoothAnimationAnchor() {
    
  }
}
