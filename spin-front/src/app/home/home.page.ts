import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonApp,IonLabel,IonInput,IonButton,IonText, IonButtons, IonSearchbar ,IonMenu,IonMenuButton, IonTabButton,IonTabs,IonTabBar, IonIcon, IonFooter,IonItem ,IonThumbnail } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { library } from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFooter, IonIcon, IonTabButton, IonSearchbar, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent,IonApp,IonLabel,IonInput,IonButton,IonText,IonMenu,IonMenuButton,IonTabs,IonTabBar,IonFooter,IonItem,IonThumbnail],
})
export class HomePage {
  constructor() {
      addIcons({});
      
      
       }
}
