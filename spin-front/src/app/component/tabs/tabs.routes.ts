import { Routes } from "@angular/router";
import { TabsComponent } from "./tabs.component";

export const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('../../pages/home/home.page').then(m => m.HomePage)
            },
            {
                path: 'trade',
                loadComponent: () => import('../../pages/trade/trade.page').then(m => m.TradePage)
            },
            {
                path: 'items',
                loadComponent: () => import('../../pages/items/items.page').then( m => m.ItemsPage)
              },
              {
                path: 'perfil',
                loadComponent: () => import('../../pages/perfil/perfil.page').then( m => m.PerfilPage)
              },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
              },
        ]
    },  {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
];