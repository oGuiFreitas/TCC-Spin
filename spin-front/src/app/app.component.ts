import { Component ,EnvironmentInjector } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonLabel, IonButton, IonInput, } from '@ionic/angular/standalone';
import { RouterModule, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonInput, IonButton, IonLabel, IonContent, IonApp, IonRouterOutlet,RouterLink],
  
})
export class AppComponent {
  constructor() {}
}
