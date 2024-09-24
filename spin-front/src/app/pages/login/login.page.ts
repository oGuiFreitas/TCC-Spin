import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent,
  IonImg,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', '../../../global.scss'],
  standalone: true,
  imports: [
    IonContent, 
    CommonModule, 
    FormsModule,
    IonImg,
    IonLabel,
    IonInput,
    IonButton,
    RouterLink,
    RouterModule,
  ]
})
export class LoginPage implements OnInit {
  
  readonly errorText: string = "Ta errado fi"
  
  constructor() { }

  ngOnInit() {
  }

}
