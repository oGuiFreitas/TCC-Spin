import { Component, OnInit } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import {
  IonButton,
  IonButtons,
  IonImg,
  IonToolbar
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    SideMenuComponent,
    IonToolbar,
    IonButtons,
    IonButton,
    IonImg,
    RouterLink  

  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
