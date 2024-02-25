import { Component,Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() id: number = 9
  @Input() productName:string = "product 1"
  @Input() validity:string = "3/9/2022"
  @Input() brand:string = "brand"
  @Input() img:string = "https://picsum.photos/id/1020/600/400"
  @Input() quantity:string = "6"
}
