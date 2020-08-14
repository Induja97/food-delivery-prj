import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { DeliveryPageComponent } from './delivery-page/delivery-page.component';

const routes: Routes = [
  {path:"register",component:RegistrationComponent},
  {path:"restaurant",component:RestaurantPageComponent},
  {path:"customer",component:CustomerPageComponent},
  {path:"deliveryExec",component:DeliveryPageComponent},
  {path:"",component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
