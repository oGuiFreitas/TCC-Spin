import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonContent,
  IonLabel,
  IonInput,
  IonButton,
  IonImg,
  IonText,
} from '@ionic/angular/standalone';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss','../../../global.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonLabel,
    IonInput,
    IonButton,
    IonHeader,
    IonImg,
    RouterLink,
    RouterModule,
    IonText
  ]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
