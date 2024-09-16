import { Component, OnInit } from '@angular/core';
import {  } from '@ionic/angular';
import {  } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonApp,IonLabel,IonInput,IonButton,IonText, IonButtons, IonSearchbar ,IonMenu,IonMenuButton, IonTabButton,IonTabs,IonTabBar, IonIcon, IonFooter,IonItem ,IonThumbnail,IonMenuToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'ronaldo',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [IonFooter, IonIcon, IonTabButton, IonSearchbar, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent,IonApp,IonLabel,IonInput,IonButton,IonText,IonMenu,IonMenuButton,IonTabs,IonTabBar,IonFooter,IonItem,IonThumbnail,IonMenuToggle ],
})
export class SideMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
