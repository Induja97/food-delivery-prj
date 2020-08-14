import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../MenuItem';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {

  constructor(private router: Router,public dialog:MatDialog,private httpclient:HttpClient) { }
  itemArray:any=[];
  searchName:string="";
  tableref: HTMLTableElement;
  ngOnInit(): void {
    let response = this.httpclient.get("http://localhost:8090/getAllRestaurantUsers");
    response.subscribe((data)=>
    {
      this.itemArray=data;
    });
  }
  goBackToRegister()
  {
    this.router.navigate(['/register']);
  }
  openDialog()
  {
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      width: '600px;',
      height:'300px'
    });
    dialogRef.componentInstance.submitClicked.subscribe(result => {
      this.itemArray.push(result);
      console.log(result);
      dialogRef.close();
  });
 // dialogRef.close();
}
performDelete(item)
{
  
  let response =this.httpclient.delete("http://localhost:8090/deleteMenuItem/"+item.id);
    response.subscribe((data)=>
    {
      this.itemArray=data;
    });
  }
  performUpdate(item)
  {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '600px;',
      height:'300px',
      data: item
    });
    dialogRef.componentInstance.updateClicked.subscribe(result => {
      let resp = this.httpclient.get("http://localhost:8090/getAllRestaurantUsers");
      resp.subscribe((data)=>
    {
      this.itemArray=data;
    });
    console.log(result);
      dialogRef.close();
  });
}
      // this.itemArray.forEach(element => {
      //   if(element.id === item.id)
      //   {
      //     this.itemArray.splice(this.itemArray.indexOf(element),1);
      //   }
      // });
      
      


}
