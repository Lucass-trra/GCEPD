import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from "@angular/common";

//components
import { SharedModule } from "../../shared/shared.module";
import { CardTemplateComponent } from "./components/card-template/card-template.component";

//types
import { ImageInfo } from "../../../types";


@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [SharedModule,CardTemplateComponent,CommonModule],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css'
})

export class ProductDetailsPageComponent implements AfterViewInit {
  bigImage:ImageInfo = {
    id: 1,
    src:'https://picsum.photos/id/1020/600/400',
    alt:'principal image on product details page'
  };

  smallImages:ImageInfo[] = [
    {
      id:2,
      src:'https://picsum.photos/id/1076/600/400',
      alt:'principal image on product details page'
    },

    {
      id: 3,
      src:'https://picsum.photos/id/642/600/400',
      alt:'principal image on product details page'
    },

    {
      id: 4,
      src:'https://picsum.photos/id/30/600/400',
      alt:'principal image on product details page'
    },

    {
      id: 5,
      src:'https://picsum.photos/id/112/600/400',
      alt:'principal image on product details page'
    },

    {
      id: 6,
      src:'https://picsum.photos/id/111/600/400',
      alt:'principal image on product details page'
    },

    {
      id: 7,
      src:'https://picsum.photos/id/670/600/400',
      alt:'principal image on product details page'
    },

    {
      id: 8,
      src:'https://picsum.photos/id/1068/600/400',
      alt:'principal image on product details page'
    },
    {
      id: 9,
      src:'https://picsum.photos/id/564/600/400',
      alt:'principal image on product details page'
    },

    {
      id: 10,
      src:'https://picsum.photos/id/1025/600/400',
      alt:'principal image on product details page'
    },

    {
      id: 11,
      src:'https://picsum.photos/id/870/600/400',
      alt:'principal image on product details page'
    },

    {
      id: 12,
      src:'https://picsum.photos/id/1040/600/400',
      alt:'principal image on product details page'
    },
  ];
  
  @ViewChild('principalPhotoReference', { static: false }) principalPhotoReference?: ElementRef<HTMLImageElement>;

  @ViewChild('secundaryPhotosReference', {static: false}) secundaryPhotosReference?: ElementRef<HTMLDivElement>
  
  principalPhotoHTML?: HTMLImageElement
  secundaryPhotosHTML?: HTMLDivElement


  ngAfterViewInit(): void {
    if(this.principalPhotoReference  && this.secundaryPhotosReference) {
      this.principalPhotoHTML = this.principalPhotoReference.nativeElement
      this.secundaryPhotosHTML = this.secundaryPhotosReference.nativeElement

    }else {
      console.error('sorry, these elements was not loaded');
    }
  }

  substituteImage(id:number) {
    if (id) {
      const principalPhoto: ImageInfo = this.bigImage;
      const secundaryPhoto:ImageInfo | undefined = this.smallImages.find((i)=> i.id === id)

      if (secundaryPhoto) {
        this.smallImages = this.smallImages.filter(i => i.id !== id); 
        this.bigImage = secundaryPhoto

      } else {
        console.error('sorry, the secundary photo does not exist or is invalid')
      }

      this.smallImages.push(principalPhoto)
    }else {
      console.error('the image for principalPhoto and src are invalid or does not exist')
    }


  } 

  scrollPhotosList(whichPosition: number) {
    if (this.secundaryPhotosHTML) {
      whichPosition === 1 ? this.secundaryPhotosHTML.scrollBy({left: -100,behavior: 'smooth'}) : console.log('the position left was sent incorrectly')

      whichPosition === 2 ? this.secundaryPhotosHTML.scrollBy({left: 100,behavior: 'smooth'}) : console.log('the position rigth was sent incorrectly');
    
    } else {
      console.error('this secundary photos container was not loaded or does not exist');
    }
  }

}
