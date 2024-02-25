import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { HeaderComponent } from "../../shared/header/header.component";
import { DateInformations } from '../../../types';
@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css'
})
export class ProductDetailsPageComponent implements AfterViewInit {

  @ViewChild('templateDateInformations') templateDateInformations?: ElementRef<HTMLTemplateElement>;

  @ViewChild('dateAndDescription') dateAndDescription?: ElementRef;

  dateInformations: DateInformations[] = [
    {
      img: "src/assets/shopping-cart.png",
      DateTitle: "purchased_in",
      dateInformation: "01/01/2024"
    },
    {
      img: "src/assets/last_change_icon.png",
      DateTitle: "last_change",
      dateInformation: "01/01/2024"
    },
    {
      img: "src/assets/product_validity.png",
      DateTitle: "validity",
      dateInformation: "01/01/2024"
    },
  ];

  constructor() { }

  ngAfterViewInit(): void {

  }
}
