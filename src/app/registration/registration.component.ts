import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../Restaurant';
import { Customer } from '../Customer';
import { DeliveryBoy } from '../DeliveryBoy';
import { UserRegistrationService } from '../user-registartion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  restaurantNav:boolean=true;
  customerNav:boolean=false;
  deliveryBoyNav:boolean=false;
  restaurant: Restaurant=new Restaurant;
  customer: Customer = new Customer;
  deliveryBoy: DeliveryBoy = new DeliveryBoy;
  message:string;
  registeringType:string = "Restaurant";
  restaurantCondition:boolean = true;
  deliveryBoyCondition:boolean = false;
  customerCondition:boolean = false;
  restaurantName:string;
  customerName:string;
  customerAddress:string;
  customerTel:number;
  delBoyName:string;
  delBoyTel:number;

  constructor(private service:UserRegistrationService,private router: Router) { }

  ngOnInit() {
  }
  

  public registerNow(){
    if(this.registeringType === "Restaurant")
    {
     this.restaurant.restaurantName = this.restaurantName;
     let resp=this.service.doRestaurantRegistration(this.restaurant);
     resp.subscribe((data)=>this.message=this.restaurant.restaurantName +" successfully registered");
    }
    else if(this.registeringType === "Customer")
    {
      this.customer.customerName = this.customerName;
      this.customer.customerTel = this.customerTel;
      this.customer.custAddress = this.customerAddress;
     let resp=this.service.doCustomerRegistration(this.customer);
     resp.subscribe((data)=>this.message=this.customer.customerName +" successfully registered");
    // resp.subscribe((data)=>this.message=data);
    }
    else{
      this.deliveryBoy.delContactNo = this.delBoyTel;
      this.deliveryBoy.deliveryBoyName = this.delBoyName;
      let resp=this.service.doDeliveryBoyRegistration(this.deliveryBoy);
      resp.subscribe((data)=>this.message=this.deliveryBoy.deliveryBoyName +" successfully registered");
      //resp.subscribe((data)=>this.message=data);
    }
  }

  onSelectChange(event)
  {
    if(event.currentTarget.value === "Customer")
    {
      this.registeringType = "Customer";
      this.customerCondition=true;
      this.deliveryBoyCondition=false;
      this.restaurantCondition=false;
      this.restaurantNav=false;
      this.customerNav=true;
      this.deliveryBoyNav=false;
    }
    else if(event.currentTarget.value === "Restaurant")
    {
      this.registeringType = "Restaurant";
      this.restaurantCondition=true;
      this.customerCondition=false;
      this.deliveryBoyCondition=false;
      this.restaurantNav=true;
      this.customerNav=false;
      this.deliveryBoyNav=false;
    }
    else if(event.currentTarget.value === "Delivery")
    {
      this.registeringType = "DeliveryBoy";
      this.deliveryBoyCondition= true;
      this.customerCondition=false;
      this.restaurantCondition=false;
      this.restaurantNav=false;
      this.customerNav=false;
      this.deliveryBoyNav=true;
    }
  }
  goToRestaurantPage()
  {
    this.router.navigate(['/restaurant']);
  }
  goToCustomerPage()
  {
    this.router.navigate(['/customer']);
  }
  goToDeliveryBoyPage()
  {
    this.router.navigate(['/deliveryExec']);
  }
}