import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-title',
  standalone: true,
  imports: [],
  templateUrl: './category-title.component.html',
  styleUrl: './category-title.component.css'
})
export class CategoryTitleComponent {
  @Input() categoryName:string = ""
}
