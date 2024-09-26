import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonApp } from '@ionic/angular/standalone';
import { TabsComponent } from '../../componentes/tabs/tabs.component';
import { LoginPage } from "../login/login.page";
import { MenuLateralComponent } from "../../componentes/menu-lateral/menu-lateral.component";
import { TopNavBarsComponent } from "../../componentes/top-nav-bars/top-nav-bars.component";
import { BottomNavBarComponent } from "../../componentes/bottom-nav-bar/bottom-nav-bar.component";



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    TabsComponent, LoginPage, MenuLateralComponent, TopNavBarsComponent, BottomNavBarComponent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
