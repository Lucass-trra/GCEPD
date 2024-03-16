import { Component, Input, OnChanges } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

//services

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges {
  @Input() signUpButton: boolean = true;
  @Input() newProduct: boolean = true;
  
  hasSignUpButton:boolean = true;
  hasNewProductButton:boolean = true

  constructor() {

  }

  ngOnChanges(): void {
    this.hasNewProductButton = this.newProduct;
    this.hasSignUpButton = this.signUpButton
  }



}
