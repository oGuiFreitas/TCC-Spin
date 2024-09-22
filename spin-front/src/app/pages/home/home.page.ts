import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonApp,IonLabel,IonInput,IonButton,IonText, IonButtons, IonSearchbar ,IonMenu,IonMenuButton, IonTabButton,IonTabs,IonTabBar, IonIcon, IonFooter,IonItem ,IonThumbnail } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { library } from "ionicons/icons";
import { MenuLateralComponent } from "../../componentes/menu-lateral/menu-lateral.component";
import { TopNavBarsComponent } from "../../componentes/top-nav-bars/top-nav-bars.component";
import { BottomNavBarComponent } from "../../componentes/bottom-nav-bar/bottom-nav-bar.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFooter, IonIcon, IonTabButton, IonSearchbar, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonApp, IonLabel, IonInput, IonButton, IonText, IonMenu, IonMenuButton, IonTabs, IonTabBar, IonFooter, IonItem, IonThumbnail, MenuLateralComponent,TopNavBarsComponent,BottomNavBarComponent],
})
export class HomePage {
  constructor() {
      addIcons({});
      
      
       }
}
