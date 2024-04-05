import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from "@angular/common";

type CardContent = {
  h3: string
  span:number
}

@Component({
  selector: 'app-secundary-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secundary-info.component.html',
  styleUrl: './secundary-info.component.css'
})
export class SecundaryInfoComponent implements OnChanges {
  @Input() isAlternativeStyle:boolean = false;

  @Input() bigCardContent: CardContent = {
    h3: 'big card title',
    span:5000,
  }

  @Input() mediumCardContent: CardContent[] = [
    {
      h3: 'medium card title',
      span:4000
    },

    {
      h3: 'medium card title',
      span:4000
    },
  ]
  
  alignSectionAlternativeStyle:string = "row-reverse";
  alignSectionDefaultStyle:string = "row";

  colorSpanAlternativeStyle:string = "lightgreen";
  colorSpanDefaultStyle:string = "ligthcoral"

  colorH3DefaultStyle:string = "var(--color_default_mediumBlue)";
  colorH3AlternativeStyle:string  = "var(--color_default_white)";
  
  colorContainerDefaultStyle:string = "var(--color_default_white)"
  colorContainerAlternativeStyle:string = "var(--color_default_mediumBlue)";
  
  
  ngOnChanges(): void {
    
  }
  
}
