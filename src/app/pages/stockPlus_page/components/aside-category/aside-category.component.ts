import { Component, ViewChild, ElementRef, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';

import { category } from '../../../../../types';



@Component({
  selector: 'app-aside-category',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './aside-category.component.html',
  styleUrl: './aside-category.component.css'
})

export class AsideCategoryComponent implements AfterViewInit {
  @Output() emitCategory: EventEmitter<category> = new EventEmitter();

  btnAddCategoryHTML?: HTMLButtonElement;
  @ViewChild('btnAddCategory', {static: false}) btnAddCategory?: ElementRef<HTMLButtonElement>;

  userCategoriesHTML?: HTMLElement;
  @ViewChild('userCategories', {static:false}) userCategories?: ElementRef<HTMLElement>;

  
  inputValue:string = '';
  isInputVisible:boolean = false;
  buttonContent:boolean  = true;

  categoriesList:Array<category> = [];

  showInputToAddCategory(result: boolean) {
    this.isInputVisible = result
  };

  addItenToList() {
    if (this.inputValue.trim() !== '') {
      const idCategory:number = Math.floor(Math.random() * 3) + 1

      this.categoriesList.push({
        name: this.inputValue.trim(),
        category_id: idCategory,
        user_id:2
      })
    
      this.isInputVisible = false
      this.inputValue = ''
    }
  };

  sendCategoryToStockPlusPage(category:category) {
    this.emitCategory.emit(category)
  }

  scrollLeft() {
    if (this.userCategoriesHTML) {
      this.userCategoriesHTML.scrollBy({left: -100, behavior:'smooth'})

    } else {
      console.error()
    }
  }

  scrollRigth() {
    if (this.userCategoriesHTML) {
       this.userCategoriesHTML.scrollBy({left: 100, behavior:'smooth'})
    } else {
      console.error()
    }
  }

  ngAfterViewInit(): void {
    if (this.btnAddCategory && this.userCategories) {
      this.btnAddCategoryHTML = this.btnAddCategory.nativeElement;
      this.userCategoriesHTML = this.userCategories.nativeElement;

    } else {
      console.error('The btnAddCategory or the userCategoriesHTML was not loaded or it does not exist in template');
    }
  }



}
