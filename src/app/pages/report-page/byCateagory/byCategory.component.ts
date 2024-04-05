import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../components/components.module";

import { category, productInfoReportPage } from "../../../../types";

@Component({
  selector: 'app-report-page-by-category',
  standalone: true,
  imports: [ComponentsModule,CommonModule],
  templateUrl: './byCategory.component.html',
  styleUrl: './byCategory.component.css'
})
export class ByCategoryComponent {
  totalAmountSpent: number = 0
  mostExpensiveProduct: productInfoReportPage = { product: "product", numeric: 0};
  CheapestProduct: productInfoReportPage = { product: "product", numeric: 0};

  totalStock: number = 0
  largesttStock: productInfoReportPage = { product: "product", numeric: 0};
  lowerStock: productInfoReportPage = { product: "product", numeric: 0};

  totalProducts:number = 0
  moreDistantValidity: productInfoReportPage = { product: "product", numeric: 0};
  earliestExpirationdate: productInfoReportPage = { product: "product", numeric: 0};

  categoryBudget: number = 0

  listOfColor: string[] = ['red','red','red','yellow','yellow','blue','pink','PINK','PINK'];
  listOfBrand: string[] = [];
  listOfModel: string[] = [];
  listOfManufacturer: string[] = [];
  listOfLength: number[] = [];



  @ViewChild('unOrderList', {static:false}) unOrderList?: ElementRef<HTMLUListElement>

  isContainerShow:boolean = false;
  isFigureShow:boolean = true;  

  categoriesList: category[] = [
    {
      category_id: 2,
      name: "eletrodomesticos",
      user_id: 34
    },

    {
      category_id: 2,
      name: "alimentos",
      user_id: 39
    },

    {
      category_id: 2,
      name: "limpeza",
      user_id: 30
    },

    {
      category_id: 2,
      name: "eletronicos",
      user_id: 33
    },

    {
      category_id: 2,
      name: "moveis",
      user_id: 31
    },
  ]  
  categoryName: string = '';

  scrollList(position:number) {
    if (this.unOrderList) {
      position === 1 
      ? this.unOrderList.nativeElement.scrollBy({left:-100, behavior:"smooth"})
      : this.unOrderList.nativeElement.scrollBy({left: 100, behavior:"smooth"})

    } else {
      console.error("the unOrderList was not loaded, or does not exist");
    }
    
  }

  showProductsByCategory(category:category) {
    //get products by category in database with the id
    
    // if exist products in this category, show the products, if no products show the ng-template[
    
    if (category) {
      this.isContainerShow = true;
      this.categoryName = category.name;
    } else {
      this.isContainerShow = false;
      this.isFigureShow = false;
    }

    //verify which figure to show for user, and which message too

    
  }
}
