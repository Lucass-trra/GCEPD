import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';

import { ButtonTemplateComponent } from "../../components/button-template/button-template.component";
import { category } from '../../../types';

@Component({
  selector: 'app-aside-category',
  standalone: true,
  imports: [ButtonTemplateComponent,CommonModule,FormsModule,RouterLink],
  templateUrl: './aside-category.component.html',
  styleUrl: './aside-category.component.css'
})

export class AsideCategoryComponent {
  inputValue:string = ''
  isInputVisible:boolean = false

  categoriesList:Array<category> = []

  showInputToAddCategory(result: boolean) {
    this.isInputVisible = result
  }

  addItenToList() {
    if (this.inputValue.trim() !== '') {
      const idCategory:number = Math.floor(Math.random() * 3) + 1

      this.categoriesList.push({
        name: this.inputValue.trim(),
        link: "asasasasa",
        id: idCategory
      })
    
      this.isInputVisible = false
      this.inputValue = ''
    }
  }

  deleteCategory(id:number) {
    const categoryIndex:number = this.categoriesList.findIndex((c) => c.id == id)

    this.categoriesList.splice(categoryIndex,1)
  }

}
