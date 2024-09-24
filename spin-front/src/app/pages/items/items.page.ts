import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TabsComponent } from 'src/app/component/tabs/tabs.component';
import { HeaderComponent } from 'src/app/component/header/header.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
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
export class ItemsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
