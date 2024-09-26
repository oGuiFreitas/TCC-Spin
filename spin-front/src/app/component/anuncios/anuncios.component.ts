import { Component, NgModule, OnInit } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import {
  IonButton,
  IonButtons,
  IonImg,
  IonToolbar
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Swiper, SwiperOptions ,SwiperModule} from 'swiper/types';


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
    RouterLink ,
    

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnunciosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  config: SwiperOptions = {
    autoplay: {
      delay: 1000, 
      disableOnInteraction: false 
    },
    loop: true
  };

}
