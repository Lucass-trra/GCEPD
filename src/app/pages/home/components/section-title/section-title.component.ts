import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ArrowDownButtonComponent } from "../arrow-down-button/arrow-down-button.component";

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [ArrowDownButtonComponent],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent implements OnChanges {
  
  titleLoaded:string = 'features';
  @Input() title:string = 'features';

  hrefLoaded:string = ''
  @Input() href:string = '';

  
  ngOnChanges(): void {
    this.titleLoaded = this.title;
    this.hrefLoaded = this.href;
  }

}
