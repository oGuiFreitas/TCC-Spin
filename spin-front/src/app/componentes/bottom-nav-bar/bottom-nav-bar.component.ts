import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonApp,IonLabel,IonInput,IonButton,IonText, IonButtons, IonSearchbar ,IonMenu,IonMenuButton, IonTabButton,IonTabs,IonTabBar, IonIcon, IonFooter,IonItem ,IonThumbnail, IonFabButton, IonImg, IonFab } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
  standalone: true,
  imports: [IonFab, IonImg, IonFabButton, IonFooter, IonIcon, IonTabButton, IonSearchbar, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent,IonApp,IonLabel,IonInput,IonButton,IonText,IonMenu,IonMenuButton,IonTabs,IonTabBar,IonFooter,IonItem,IonThumbnail,CommonModule],
})
export class BottomNavBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
 
  activeTab: string = 'home';

  toggleButtonState(tab: string) {
    this.activeTab = tab;
  }

  }
