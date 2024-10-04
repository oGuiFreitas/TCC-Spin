import { register } from 'swiper/element/bundle';

import { Component, ElementRef, OnInit,ViewChild,AfterViewInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';


import {
  IonButton,
  IonButtons,
  IonImg,
  IonToolbar
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';


import {Swiper} from 'swiper';
import { IonicModule } from '@ionic/angular';




@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss'],
  standalone: true,
  imports: [
    SideMenuComponent,
    IonToolbar,
    IonButtons,
    IonButton,
    IonImg,
    RouterLink,
    NgFor,
    IonicModule,
    CommonModule
    
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AnunciosComponent implements AfterViewInit {



swiper_images=[ '../../../assets/anuncioteste2.jpg',
  '../../../assets/anuncioteste.jpg'
]

@ViewChild("swiperEx") swiperEx?: ElementRef<{swiper :Swiper}>


  ngAfterViewInit(): void{
register();
  }

  onSlideChange(){
    console.log(this.swiperEx?.nativeElement.swiper.activeIndex);
  }



  constructor() {
   
  }



  ngOnInit() {
    
  }






   
}

