import { Component} from '@angular/core';
import { CommonModule } from "@angular/common";

import { TutorialLinks } from "../../../types";

//button component
import { ButtonTemplateComponent } from "../../components/button-template/button-template.component";

@Component({
  selector: 'app-tutorial-form',
  standalone: true,
  imports: [ButtonTemplateComponent,CommonModule],
  templateUrl: './tutorial-form.component.html',
  styleUrl: './tutorial-form.component.css'
})
export class TutorialFormComponent {
  tutorialLinksVector: TutorialLinks[] = []
  deleteFormOrNot:boolean = true;

  constructor() {
    
  }
  inputIdList: number[] = []

  addMoreOneInput(placeHolder: string) {
    debugger
    let inputId: number;
    do {
        inputId = Math.floor(Math.random() * 100);
    } while (this.inputIdList.includes(inputId));

    this.inputIdList.push(inputId);
    
    this.tutorialLinksVector.push({
        id: inputId,
        placeHolder: placeHolder
    });

    // console.log(this.inputIdList)
}


  eraseInput(id:number) {
    const elementFoundIndex = this.tutorialLinksVector.findIndex((element)=> element.id === id)

    if (elementFoundIndex !== -1) {
      this.tutorialLinksVector.splice(elementFoundIndex, 1);
    }
  }

  deleteForm() {
    this.deleteFormOrNot = false
  }
}
