import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon, IonAvatar } from "@ionic/angular/standalone";
import { HeaderComponent } from 'src/app/component/header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonIcon, IonButton, IonLabel, IonItem, IonList, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    HeaderComponent,
    RouterOutlet,
    RouterLink,
  ]
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
