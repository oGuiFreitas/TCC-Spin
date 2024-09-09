import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonApp,IonLabel,IonInput,IonButton} from '@ionic/angular/standalone';

import { RouterModule, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonApp,IonLabel,IonInput,IonButton,RouterLink,RouterModule]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
