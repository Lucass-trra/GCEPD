import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-primary-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-info.component.html',
  styleUrl: './primary-info.component.css'
})
export class PrimaryInfoComponent implements OnChanges {
  isDivActive:boolean = true;
  isTextActive:boolean = true;
  
  @Input() totalProducts:number = 2000;
  @Input() budget: number  = 0;
  @Input() totalExpense: number = 0;
  @Input() moreDistantValidity: string = "";
  @Input() earliestValidity: string = "";


  finalResult:number = 0; 
  
  ngOnChanges(): void {
    const finalResult:number = this.budget - this.totalExpense;

    if(finalResult > 0) this.defineWhichCardShow(finalResult,true, true)

    if(finalResult === 0) this.defineWhichCardShow(finalResult,true, false)

    if(finalResult < 0) this.defineWhichCardShow(finalResult * -1 ,false, false)
  }
  
  defineWhichCardShow(
    finalResult:number, 
    isDivActive:boolean,
    isTextActive:boolean 
    ) {
    this.finalResult = finalResult
    this.isDivActive = isDivActive
    this.isTextActive = isTextActive
  }
  




}
