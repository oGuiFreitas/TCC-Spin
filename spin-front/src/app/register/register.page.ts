import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonApp,IonLabel,IonInput,IonButton,IonIcon,IonText } from '@ionic/angular/standalone';
import { RouterModule, RouterLink } from '@angular/router';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonApp,IonLabel,IonInput,IonButton,IonIcon,IonText ,RouterModule,RouterLink]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
