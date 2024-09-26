import { Component, OnInit } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent ,IonApp,IonLabel,IonInput,IonButton,IonText, IonButtons, IonSearchbar ,IonMenu,IonMenuButton, IonTabButton,IonTabs,IonTabBar, IonIcon, IonFooter,IonItem ,IonThumbnail, IonImg } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { library } from "ionicons/icons";


@Component({
  selector: 'app-top-nav-bars',
  templateUrl: './top-nav-bars.component.html',
  styleUrls: ['./top-nav-bars.component.scss'],
  standalone: true,
  imports: [IonImg, IonFooter, IonIcon, IonTabButton, IonSearchbar, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent,IonApp,IonLabel,IonInput,IonButton,IonText,IonMenu,IonMenuButton,IonTabs,IonTabBar,IonFooter,IonItem,IonThumbnail],
})
export class TopNavBarsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
