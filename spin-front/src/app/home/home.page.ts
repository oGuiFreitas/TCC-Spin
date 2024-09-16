import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonApp,IonLabel,IonInput,IonButton,IonText, IonButtons, IonSearchbar ,IonMenu,IonMenuButton, IonTabButton,IonTabs,IonTabBar, IonIcon, IonFooter,IonItem ,IonThumbnail, IonMenuToggle } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { library } from "ionicons/icons";
import { SideMenuComponent } from '../teste/side-menu/side-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent,IonHeader, IonToolbar,IonButtons,IonMenuButton,IonSearchbar, SideMenuComponent,IonApp,IonMenuToggle, IonMenu,IonTitle,IonButton],
})
export class HomePage {
  constructor() {
      addIcons({});
      
      
       }
}
