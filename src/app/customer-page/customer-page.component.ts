import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  constructor(private httpclient:HttpClient,private router:Router) { }
  restaurants:any=[];

  ngOnInit(): void {
      let response = this.httpclient.get("http://localhost:8090/getAllRestaurants");
      response.subscribe((data)=>
      {
        this.restaurants=data;
      });
  }
  goBackToRegister()
  {
    this.router.navigate(['/register']);
  }
}
