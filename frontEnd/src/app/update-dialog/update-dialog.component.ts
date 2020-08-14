import { Component, OnInit, Optional, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuItem } from '../MenuItem';
import { UserRegistrationService } from '../user-registartion.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {
  @Output() updateClicked = new EventEmitter<any>();

  constructor(private service: UserRegistrationService,public dialogRef: MatDialogRef<UpdateDialogComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data:any){
    if(data!=null)
    {
    this.nameVal = data["itemName"];
    this.descVal = data["itemDesc"];
    this.priceVal = data["itemPrice"];
    this.id = data["id"];
    }
  }
  nameVal:string;
  descVal:string;
  priceVal:number;
  id:number;
  menuItem : MenuItem = new MenuItem;
 
    ngOnInit(): void {

    }
    updateItem()
    {
    this.menuItem.itemDesc = this.descVal;
    this.menuItem.itemName = this.nameVal;
    this.menuItem.itemPrice = this.priceVal;
    this.menuItem.id = this.id;
    let resp=this.service.addItem(this.menuItem);
     resp.subscribe((data)=>
     {
     this.updateClicked.emit(data);
  });
    }

}
