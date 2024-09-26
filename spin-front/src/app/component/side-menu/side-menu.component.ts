import { Component, OnInit } from '@angular/core';
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
  IonButtons,
} from "@ionic/angular/standalone";


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
    IonButtons
  ]
})
export class SideMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
