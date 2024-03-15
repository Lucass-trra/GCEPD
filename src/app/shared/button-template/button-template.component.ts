import { Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-button-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-template.component.html',
  styleUrl: './button-template.component.css'
})
export class ButtonTemplateComponent implements OnChanges {
  @Input() buttonName:string = "button name"
  @Input() buttonFunction:string = ""

  @Output() showInput: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() addMoreOneInput: EventEmitter<string> = new EventEmitter<string>()


  ngOnChanges(): void {
  }
  
  decideWhichTaskExecute() {
    switch (this.buttonFunction) {
      case 'new_category':
        this.showInput.emit(true)
      break;
      
      case 'tutorialForm-addOneMoreInput':
        this.addMoreOneInput.emit("ex: https://example.com")
      break;
      
      default:
      break;
    }
  }
  

}
