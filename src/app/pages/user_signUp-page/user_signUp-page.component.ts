import { Component } from '@angular/core';

import { SignUpFormComponent } from "./components/sign-up-form/sign-up-form.component";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [SignUpFormComponent,SharedModule],
  templateUrl: './user_signUp-page.component.html',
  styleUrl: './user_signUp-page.component.css'
})
export class SignUpPageComponent {
  
}
