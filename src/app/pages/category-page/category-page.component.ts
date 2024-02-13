import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ComponentsModule } from "../../components/components.module";

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [ComponentsModule, CommonModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {

}
