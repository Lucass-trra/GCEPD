import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SignUpFormComponent } from "./components/sign-up-form/sign-up-form.component";
//modules
import { SharedModule } from "../../shared/shared.module";
import { HomeModule } from "./components/home-module.module";



//json
import * as featureData from './components/card-feature/features.json';
import * as creatoData from './components/creator-card/creators.json';

type values = 'alternative' | 'default';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [CommonModule,SharedModule,HomeModule,SignUpFormComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  featureInfo = featureData.features;
  creatorInfo = creatoData.creators;
  
  headerSytle: values = 'default';

  @HostListener('window:scroll',['$event'])
  onWindowScroll() {
   if (window.scrollY === 0) {
    this.headerSytle = 'default';

   } else {
    this.headerSytle = 'alternative';
   }
  }
  
  smoothAnimationAnchor() {
  
  }
  
  ngOnInit(): void {
  
  }
  
}
