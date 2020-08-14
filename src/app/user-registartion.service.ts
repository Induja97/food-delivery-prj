
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './Customer';
import { Restaurant } from './Restaurant';
import { DeliveryBoy } from './DeliveryBoy';
import { Observable} from 'rxjs';
import { MenuItem } from './MenuItem';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }


  public doRestaurantRegistration(restaurant: Restaurant){
    return this.http.post("http://localhost:8090/registerRest",restaurant);
  }

  public doCustomerRegistration(customer: Customer){
    return this.http.post("http://localhost:8090/registerCust",customer);
  }

  public doDeliveryBoyRegistration(deliveryBoy: DeliveryBoy){
    return this.http.post("http://localhost:8090/registerDeliveryBoy",deliveryBoy);
  }

  public addItem(menuItem : MenuItem)
  {
    return this.http.post("http://localhost:8090/addMenuItem",menuItem);
  }

  public getUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }

  public getUserByEmail(email){
    return this.http.get("http://localhost:9090//findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
}