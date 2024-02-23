import { Component } from '@angular/core';

//product form component
import { ProductFormComponent } from "../../components/product-form/product-form.component";

//header component
import { HeaderComponent } from "../../shared/header/header.component";
@Component({
  selector: 'app-product-sign-up-page',
  standalone: true,
  imports: [ProductFormComponent,HeaderComponent],
  templateUrl: './product_signUp-page.component.html',
  styleUrl: './product_signUp-page.component.css'
})
export class ProductSignUpPageComponent {

}
