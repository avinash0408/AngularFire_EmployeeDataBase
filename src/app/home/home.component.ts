import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'; 
import { EmpDetailDialogComponent } from '../emp-detail-dialog/emp-detail-dialog.component';
import {EmployeeService} from '../services/employee.service';
import {Item} from '../models/Item';
import {MatButtonModule} from '@angular/material/button'; 
import { onErrorResumeNext } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  employees:Item[];
  itemtoEdit:Item;
  none:Item={
    id:'',
    name:'',
    email:'',
  }
  toUpdate:boolean=false;
  constructor(public dialog:MatDialog,public employeeServices:EmployeeService) {
   }
 
openDialo(toUpdate:boolean,record?,edit?){
  this.dialog.open(EmpDetailDialogComponent,{data:{
    id: record.id,
  name:record.name,email:record.email, 
    new:edit,check:toUpdate
    }});
}
  ngOnInit(){
    this.employeeServices.getItems().subscribe(employees=>{
      this.employees=employees;
    })
  }
  delEmp(item:Item){
    this.employeeServices.deleteEmp(item);
  }
  update(item:Item){
    this.toUpdate=true;
    this.itemtoEdit=item;
    this.openDialo(this.toUpdate,item,this.itemtoEdit);
  }

}
