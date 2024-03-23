import { Component, Input, OnChanges, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-card-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-feature.component.html',
  styleUrl: './card-feature.component.css'
})
export class CardFeatureComponent implements OnChanges, AfterViewInit {
  textExample:string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas hic non reprehenderit suscipit enim adipisci excepturi provident officia porro eveniet blanditiis nisi inventore neque amet eius natus, dolor dolorem.Quas, fugiat perferendis alias officiis aliquam facilis eligendi non nulla, magni mollitia provident hic! Neque eveniet excepturi, ex modi illum eum deserunt voluptas? Non aperiam maiores sunt temporibus reiciendis dolorem.'

  //content inputs
  @Input() title:string = 'feature name';
  @Input() text:string = this.textExample;
  @Input() imgPresentation:string = '';
  @Input() imgFigure:string = '../../../../../assets/profile-picture.png';
  @Input() hasFigureAside: boolean = true;

  @Input() title2:string = 'feature name';
  @Input() text2:string = this.textExample; 
  @Input() imgPresentation2:string = '../../../../../assets/profile-picture.png';

  //content inputs loaded after view init
  titleLoaded:string = 'feature name';
  title2Loaded:string = 'feature name';
 
  //style inputs
  @Input() backgroundWhite:boolean = false;
  @Input() titleBlue:boolean = false;

  //conditional view variables
  showDivOrNot:boolean = true;
  
  @ViewChild('resourcesGroup', {static: false}) resourcesGroupReference?:ElementRef<HTMLDivElement>;

  @ViewChild('title', {static: false}) titleReference?:ElementRef<HTMLParagraphElement>;

  @ViewChild('title2', {static: false}) title2Reference?:ElementRef<HTMLParagraphElement>;

  ngOnChanges(): void {
    this.titleLoaded = this.title;
    this.title2Loaded = this.title2;
   

    this.hasFigureAside === true ? this.showDivOrNot = true : this.showDivOrNot = false
  }
  
  ngAfterViewInit(): void {
    if (
      this.resourcesGroupReference && 
      this.titleReference 
      ) {

      if(this.backgroundWhite) this.defineStyleProps('backgroundWhite')
      
      if(this.titleBlue) this.defineStyleProps('titleBlue') 
      
    } else {
      console.error('the HTML reference for resourcesGroup and title was not loaded or does not exist in template')
    }
  }

  defineStyleProps(style:string) {
    if (
      this.resourcesGroupReference && 
      this.titleReference && 
      this.title2Reference
      ) {
      
      if (style === 'backgroundWhite') this.resourcesGroupReference.nativeElement.style.backgroundColor = 'white'

      if (style === 'titleBlue') this.titleReference.nativeElement.style.color = 'var(--color_default_darkBlue)'

      if (style === 'titleBlue') this.title2Reference.nativeElement.style.color = 'var(--color_default_darkBlue)'

    } else {
      console.error('the HTML elements resourcesGroup and title was not loaded or does not exist in template')
    }
  }



}
