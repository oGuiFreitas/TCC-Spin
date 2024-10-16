import { Component, Input, OnInit } from '@angular/core';
import  {
  IonAvatar,
  IonButton,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonText,
  IonButtons, IonFooter } from "@ionic/angular/standalone";


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports:[
    IonMenu,
    IonContent,
    IonMenuToggle,
    IonButton,
    IonImg,
    IonMenuButton,
    IonAvatar,
    IonItem,
    IonLabel,
    IonText,
    IonButtons,
    IonFooter,
  ]
})
export class SideMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() main_content2!: boolean;
  @Input() main_content1!: boolean;
}
