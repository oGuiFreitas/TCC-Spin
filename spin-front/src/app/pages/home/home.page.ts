import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader,
  IonTitle, 
  IonToolbar 
} from '@ionic/angular/standalone';
import { TabsComponent } from 'src/app/component/tabs/tabs.component';
import { HeaderComponent } from 'src/app/component/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    TabsComponent,
    HeaderComponent,
  ]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
