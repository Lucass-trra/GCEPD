import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";

type StringContent = {
  value:string
  count:number
}

@Component({
  selector: 'app-tertiary-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tertiary-info.component.html',
  styleUrl: './tertiary-info.component.css'
})
export class TertiaryInfoComponent implements OnChanges {
  @ViewChild('unOrderList', {static:false}) unOrderList?: ElementRef<HTMLUListElement>

  alternativeAlignStyle:string ="row-reverse"
  defaultAlignStyle:string ="row"
  
  @Input() isalternativeStyle: boolean = false;

  @Input() title: string = 'default title';

  stringItens: StringContent[] = []
  @Input() listOfStrings?: string[] = []

  numberItens: number[] = []
  @Input() listOfNumbers?: number[] = []


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listOfStrings'] && this.listOfStrings) {
      this.stringItens = [];
      this.sortItensInAscendingOrder(this.listOfStrings);
    }
    
    if (changes['listOfNumbers'] && this.listOfNumbers) {
      this.numberItens = [];
      this.numberItens = this.defineLengthInAscendingOrder(this.listOfNumbers);
    }
  }
  
  scrollDirection(direction:number) {
    if(this.unOrderList) {
      direction === 1 
      ? this.unOrderList.nativeElement.scrollBy({left: -100, behavior:'smooth'})
      : this.unOrderList.nativeElement.scrollBy({left: 100, behavior:'smooth'})
  
    }else {
      console.error('the ul list does not exist or was not loaded in template yet')
    }
    
  
  }
  sortItensInAscendingOrder(strings: string[]) {
    strings.forEach((string) => {
      const stringCount: number = strings.filter((item) => item.toLowerCase() === string.toLowerCase()).length;
  
      const existingItem = this.stringItens.find(item => item.value.toLowerCase() === string.toLowerCase());
      if (!existingItem) {
        this.stringItens.push({ value: string, count: stringCount });
      }
    });
  
    this.stringItens.sort((a, b) => b.count - a.count);
  }
  
  defineLengthInAscendingOrder(numbers: number[]):number[] {
    return numbers.sort((a,b)=> a - b)
  }
  
}
