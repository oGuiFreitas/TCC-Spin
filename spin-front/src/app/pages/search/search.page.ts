import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
  IonToolbar,
  IonImg,
  IonButtons,
  IonContent,
  IonButton,
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonToolbar,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    
    IonImg,
    IonBackButton,
    IonButtons,
    IonContent,
    IonButton
  ]
})


export class SearchPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
 public data = [
      'Tênis para correr',
      'Buenos Aires',
      'Cairo',
      'Geneva',
      'Hong Kong',
      'Istanbul',
      'London',
      'Madrid',
      'New York',
      'Panama City',
    ];
  
    public results = [...this.data];
  
    handleInput(event: any) {
      const query = event.target.value.toLowerCase();
      this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
    }

}
