import { OrderComponent } from './pages/order/order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenBoxComponent } from './pages/login/open-box/open-box.component';
import { RegisterPlateComponent } from './pages/register-plate/register-plate.component';

const routes: Routes = [
  {
    component: OpenBoxComponent,
    path: 'login'
  },
  {
    component:RegisterPlateComponent,
    path: 'register'
  },
  {
    component: OrderComponent,
    path: 'order'
  },
  {
    path: '**',
    redirectTo: 'order'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
