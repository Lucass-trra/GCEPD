import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productName:string = "product 1"
  @Input() validity:string = "3/9/2022"
  @Input() brand:string = "brand"
  @Input() img:string = "https://picsum.photos/id/1020/600/400"
  @Input() quantity:string = "6"
}
