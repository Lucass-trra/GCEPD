import { Component } from '@angular/core';

import { SignUpFormComponent } from "../../components/sign-up-form/sign-up-form.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [SignUpFormComponent,HeaderComponent],
  templateUrl: './user_signUp-page.component.html',
  styleUrl: './user_signUp-page.component.css'
})
export class SignUpPageComponent {
  
}
