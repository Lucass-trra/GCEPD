import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ComponentsModule } from "./components/components.module";
//shared components
import { SharedModule } from "../../shared/shared.module";
import { category } from '../../../types';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [ComponentsModule,CommonModule, SharedModule],
  templateUrl: './stockPlus-page.component.html',
  styleUrl: './stockPlus-page.component.css'
})
export class StockPlus_PageComponent {
  totalStock: number = 2000;
  totalcosts: number = 1000
  totalProducts: number = 90;

  category: category = {
    name: 'General',
    category_id: 0,
    user_id: 0
  }

  catchCategory(event: category) {
    if(event) this.category = event
  }
}
