import { Component, Input, OnInit } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import {
  IonButton,
  IonButtons,
  IonImg,
  IonToolbar, IonText, IonHeader, IonTitle, 
  IonMenuToggle} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonTitle, IonHeader, IonText, 
    SideMenuComponent,
    IonToolbar,
    IonButtons,
    IonButton,
    IonImg,
    RouterLink ,
    IonTitle,
    IonMenuToggle,

  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() title!: string;
  @Input() search!: boolean;
  @Input() sideMenuWithTitle!: boolean;
}
