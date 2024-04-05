import { Component, Input } from '@angular/core';

import { productInfoReportPage } from "../../../../../types";

@Component({
  selector: 'app-primary-info-general',
  standalone: true,
  imports: [],
  templateUrl: './primary-info-general.component.html',
  styleUrl: './primary-info-general.component.css'
})
export class PrimaryInfoGeneralComponent {
  @Input() totalProducts:number = 2000;
  
  @Input() biggerValidity: productInfoReportPage = {product: 'product name', numeric: "10/10/2023"}

  @Input() lowestValidity: productInfoReportPage = {product: 'product name', numeric: "01/02/2025"}
}
