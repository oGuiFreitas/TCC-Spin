import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import { HeaderComponent } from 'src/app/component/header/header.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    HeaderComponent,
  ]
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
