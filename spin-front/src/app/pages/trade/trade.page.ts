import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

import { TabsComponent } from 'src/app/component/tabs/tabs.component';
import { HeaderComponent } from 'src/app/component/header/header.component';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.page.html',
  styleUrls: ['./trade.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    TabsComponent,
  ]
})
export class TradePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
