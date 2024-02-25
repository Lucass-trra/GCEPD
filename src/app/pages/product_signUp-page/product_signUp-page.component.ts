import { Component } from '@angular/core';

//components module
import { ComponentsModule } from "./components/components.module";

//header component
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-product-sign-up-page',
  standalone: true,
  imports: [ComponentsModule,SharedModule],
  templateUrl: './product_signUp-page.component.html',
  styleUrl: './product_signUp-page.component.css'
})
export class ProductSignUpPageComponent {

}
