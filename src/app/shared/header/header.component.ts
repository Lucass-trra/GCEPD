import { Component, Input, OnChanges } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

//button component
import { ButtonTemplateComponent } from "../../components/button-template/button-template.component";

//services

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonTemplateComponent,CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges {
  @Input() signUpButton: boolean = false;
  @Input() newProduct: boolean = true;
  
  hasSignUpButton:boolean = false;
  hasNewProductButton:boolean = true

  constructor() {

  }

  ngOnChanges(): void {
    this.hasNewProductButton = this.newProduct;
    this.hasSignUpButton = this.signUpButton
  }



}
