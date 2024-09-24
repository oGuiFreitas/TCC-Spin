import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import  {
  IonFab,
  IonFabButton,
  IonImg,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/angular/standalone";

import { SideMenuComponent } from '../side-menu/side-menu.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports:[
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonImg,
    IonFab,
    IonFabButton,
    NgClass,
    NgIf,
   SideMenuComponent,
   HeaderComponent,
  ]
})


export class TabsComponent  implements OnInit {
  selectedTab: any;

  constructor() { }

  ngOnInit() {}

  setCurrentTab(event: any) {
    this.selectedTab = event.tab;

  }
}
