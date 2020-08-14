import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserRegistrationService } from '../user-registartion.service';
import { MenuItem } from '../MenuItem';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.css']
})
export class ItemDialogComponent implements OnInit {

  @Output() submitClicked = new EventEmitter<any>();

  constructor(private service:UserRegistrationService) { }
  priceVal:number;
  descVal:string;
  nameVal:string;
  menuItem:MenuItem = new MenuItem;

  ngOnInit(): void {
  }
  submitItem(){
    this.menuItem.itemDesc = this.descVal;
    this.menuItem.itemName = this.nameVal;
    this.menuItem.itemPrice = this.priceVal;
    let resp=this.service.addItem(this.menuItem);
     resp.subscribe((data)=>
     {
      this.submitClicked.emit(data);
  });
  
  }
}
