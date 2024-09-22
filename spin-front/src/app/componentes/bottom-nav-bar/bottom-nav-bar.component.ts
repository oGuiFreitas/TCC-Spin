import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonApp,IonLabel,IonInput,IonButton,IonText, IonButtons, IonSearchbar ,IonMenu,IonMenuButton, IonTabButton,IonTabs,IonTabBar, IonIcon, IonFooter,IonItem ,IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
  standalone: true,
  imports: [IonFooter, IonIcon, IonTabButton, IonSearchbar, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent,IonApp,IonLabel,IonInput,IonButton,IonText,IonMenu,IonMenuButton,IonTabs,IonTabBar,IonFooter,IonItem,IonThumbnail],
})
export class BottomNavBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
