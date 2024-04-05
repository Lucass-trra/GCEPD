import { Component} from '@angular/core';
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "./components/components.module";
import { SharedModule } from "../../shared/shared.module";
import { ByCategoryComponent } from "./byCateagory/byCategory.component";

import { productInfoReportPage } from "../../../types";
import { ReportFunctions } from './ReportFunctions';

@Component({
  selector: 'app-report-page',
  standalone: true,
  imports: [CommonModule,SharedModule,ByCategoryComponent,ComponentsModule],
  templateUrl: './report-page.component.html',
  styleUrl: './report-page.component.css'
})
export class ReportPageComponent extends ReportFunctions {
  totalAmountSpent: number = 0
  mostExpensiveProduct: productInfoReportPage = { product: "product", numeric: 0};
  CheapestProduct: productInfoReportPage = { product: "product", numeric: 0};

  totalStock: number = 0
  largesttStock: productInfoReportPage = { product: "product", numeric: 0};
  lowerStock: productInfoReportPage = { product: "product", numeric: 0};

  totalProducts:number = 0
  moreDistantValidity: productInfoReportPage = { product: "product", numeric: 0};
  earliestExpirationdate: productInfoReportPage = { product: "product", numeric: 0};

  isContainerActive: boolean = true;

  listOfColor: string[] = [];
  listOfBrand: string[] = [];
  listOfModel: string[] = [];
  listOfManufacturer: string[] = [];
  listOfLength: number[] = [];

  showGeneralInfo() {
    this.isContainerActive  = true;
  }

  showByCategoryInfo() {
    this.isContainerActive = false
  }
}
