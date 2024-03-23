import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-arrow-down-button',
  standalone: true,
  imports: [],
  templateUrl: './arrow-down-button.component.html',
  styleUrl: './arrow-down-button.component.css'
})
export class ArrowDownButtonComponent implements OnChanges {
  @Input() hrefAnchor: string = ''
  
  hrefAnchorLoaded:string = ''
  
  ngOnChanges(): void {
    this.hrefAnchorLoaded = this.hrefAnchor;
  }

  smoothAnimationAnchor() {

  }
}
