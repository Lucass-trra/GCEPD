import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { 
  ReactiveFormsModule,
  FormGroup, 
  FormBuilder, 
  Validators 
}from "@angular/forms";

//shared components
import { SharedModule } from "../../../../shared/shared.module";
//tutorial form component 
import { TutorialFormComponent } from "../tutorial-form/tutorial-form.component";

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,TutorialFormComponent,SharedModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  showTutorialFormOrNot:boolean = false
  showSpanOrNot:boolean = true
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['',Validators.required],//bloco 1
      productColor: ['',Validators.maxLength(50)],// bloco 1
      description: ['',Validators.maxLength(500)],// bloco 1
      category: ['',Validators.required, Validators.maxLength(150)],//bloco 1

      brand: ['',Validators.required],//bloco 2
      model: ['',Validators.required],//bloco 2
      manufacturer: ['',Validators.maxLength(50)],// bloco 2
      price: ['',Validators.required],//bloco 2

      purchased_in: ['',Validators.required],//bloco 3
      validity: ['',Validators.required],//bloco 3
      length: ['',Validators.maxLength(50)],// bloco 3
      quantity: ['',Validators.required],// bloco 3

      image: ['',Validators.required],//bloco 4
    })
  }

  handleFileSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files; // Obter os arquivos selecionados no input

    if (files && files.length > 0) {
        const file = files[0]; // Obter o primeiro arquivo (assumindo que seja apenas um)
        const reader = new FileReader(); // Criar um objeto FileReader

        // Definir a função de callback para quando a leitura do arquivo estiver completa
        reader.onload = (e: any) => {
            const imageUrl = e.target.result; // URL de dados da imagem
            // Exibir a imagem em um container usando o imageUrl
            const imageContainer = document.getElementById("image");
            const labelToPutImage = document.getElementById("labelToPutImage")
            if (imageContainer) {
                imageContainer.setAttribute("src",imageUrl)
                labelToPutImage?.setAttribute("class", "labelWithUserImg")
                this.showSpanOrNot = false

            }
        };

        // Ler o conteúdo do arquivo como uma URL de dados
        reader.readAsDataURL(file);
    }
}


showTuturialForm() {
  this.showTutorialFormOrNot = true
}

eraseTuturialForm() {
  this.showTutorialFormOrNot = false
}

  onSubmit() {

  }

}
