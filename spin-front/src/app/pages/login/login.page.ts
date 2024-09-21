import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators ,FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonApp,IonLabel,IonInput,IonButton} from '@ionic/angular/standalone';

import { RouterModule, RouterLink } from '@angular/router'; 
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonApp,IonLabel,IonInput,IonButton,RouterLink,RouterModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})

  
export class LoginPage implements OnInit {

  ngOnInit(){}


    login = new FormGroup({
      nome: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    });

    validarFormulario() {
      if (this.login.valid) {
        console.log('Formulário válido!');
    
        // Aqui você pode adicionar a lógica para enviar o formulário ou realizar outras ações
      } else {
        console.log('Formulário inválido!');
        this.login.markAllAsTouched(); // Marca todos os controles como tocados para exibir as mensagens de erro
      }
    }

  }


