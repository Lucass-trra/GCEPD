import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-template',
  standalone: true,
  imports: [],
  templateUrl: './card-template.component.html',
  styleUrl: './card-template.component.css'
})
export class CardTemplateComponent implements OnChanges {
  @Input() imageCard: string  = '';
  @Input() titleCard:string = '';
  @Input() infoCard: string = '';

  image:string = '';
  title:string = '';
  info:string = ''; 
  
  ngOnChanges(): void {
    this.image = this.imageCard;
    this.title = this.titleCard;
    this.info = this.infoCard;
  }
}
