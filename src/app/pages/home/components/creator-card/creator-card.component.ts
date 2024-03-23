import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CreatorSocialLinks } from "../../../../../types";

@Component({
  selector: 'app-creator-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creator-card.component.html',
  styleUrl: './creator-card.component.css'
})

export class CreatorCardComponent implements AfterViewInit,OnChanges {
    @Input() rowRverseStyle?: boolean;
    hasButtonScroll:boolean = false;

    @Input() creatorName: string = '';
    @Input() creatorPhoto: string = '';
    @Input() creatorDescription:string = '';
    @Input() creatorSocialLinks: CreatorSocialLinks = [];


    ngOnChanges(): void {}
    
    @ViewChild('unOderList', {static:false}) unOderListReference?: ElementRef<HTMLUListElement>
    
    @ViewChild('creatorContainer', {static:false}) creatorContainerReference?: ElementRef<HTMLElement>

  

    ngAfterViewInit(): void {
      
      if (this.unOderListReference && this.creatorContainerReference) {

        if(this.rowRverseStyle) this.defineStyle();

        setTimeout(() => {
          this.checkOverFlowX();
        });
        
      } else {
        console.error('the HTML reference for unOderList does not exist or it was not loaded');
      }
    }
    
  checkOverFlowX() {
      let totalWidthLinks:number = 0
      const ulWidth: number  = this.unOderListReference!.nativeElement.offsetWidth;

      this.unOderListReference!.nativeElement.querySelectorAll('a').forEach((link)=> {
        totalWidthLinks += link.offsetWidth
      })

      totalWidthLinks > ulWidth ? this.hasButtonScroll = true : this.hasButtonScroll = false 

      console.log(`total width from <a/>: ${totalWidthLinks} | total width from <ul/>: ${ulWidth}`)
  }
  
  scrollButton(scroll:number) {
    if (this.unOderListReference) {
      scroll === 1 
      ? this.unOderListReference.nativeElement.scrollBy({left:-100, behavior:'smooth'}) 
      : this.unOderListReference.nativeElement.scrollBy({left:100, behavior:'smooth'}) 

    } else {
      console.error('the HTML element unOderList does not exist or it was not loaded ');
    }
  }

  defineStyle() {
    const creatorContainerHTML = this.creatorContainerReference!.nativeElement;
    creatorContainerHTML.style.flexDirection = 'row-reverse';
  }  
  
}
