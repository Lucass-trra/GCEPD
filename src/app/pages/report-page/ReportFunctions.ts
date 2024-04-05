import { productInfoReportPage } from "../../../types";

export abstract class ReportFunctions { 

  calculateTotalAmountSpent():number {
    return 0
  }
  calculateMostExpensiveProduct(): productInfoReportPage {
    return { product: "product", numeric: 0};
  }
  calculateCheapestProduct(): productInfoReportPage{
    return { product: "product", numeric: 0};
  }

  calculateTotalStock(): number {
    return 0
  }
  calculateLargesttStock():productInfoReportPage {
    return { product: "product", numeric: 0};
  }
  calculateLowerStock(): productInfoReportPage {
    return { product: "product", numeric: 0};
  }

  calculateTotalProducts():number {
    return 0
  }
  calculateMoreDistantValidity():productInfoReportPage {
    return { product: "product", numeric: 0};
  }
  calculateEarliestValidity(): productInfoReportPage {
    return { product: "product", numeric: 0};
  }
}