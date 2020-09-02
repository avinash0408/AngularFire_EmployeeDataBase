import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import { Item } from '../models/Item';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-emp-detail-dialog',
  templateUrl: './emp-detail-dialog.component.html',
  styleUrls: ['./emp-detail-dialog.component.css']
})
export class EmpDetailDialogComponent implements OnInit {
  constructor(public employeeServices:EmployeeService,@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  item:Item={
    id:'',
    name:'',
    email:'',
  }
  ngOnInit(): void {
    if(this.data.new==undefined)
    {
      this.data.new=this.item;
    }
    if(this.data.name && this.data.id && this.data.email){
    this.item.id=this.data.id;
    this.item.name=this.data.name;
    this.item.email=this.data.email;}
    
  }
  onSubmit(){
    if(this.data.check &&this.data.new.name!='' && this.data.new.email!='')
      this.employeeServices.UpdateEmp(this.item,this.data.new);
      if(!this.data.check &&this.data.new.name!='' && this.data.new.email!=''){
        this.employeeServices.addEmp(this.data.new);
    }
    }
    
    }

  