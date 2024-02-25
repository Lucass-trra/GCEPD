import { Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, FormGroup, FormBuilder,Validators,ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent implements OnInit {
  showOrNotForm:boolean = true  
   signUpForm!: FormGroup
  
  constructor(
    private formBuilder: FormBuilder,
    ) {

  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(5), Validators.maxLength(16)]
    })
  }

  showLoginForm() {
    this.showOrNotForm = true;
    this.signUpForm.reset();
  }
  
  showSignUpForm() {
    this.showOrNotForm = false;
    this.signUpForm.reset();    
  }

  onSubmit() {

  }
  
}
