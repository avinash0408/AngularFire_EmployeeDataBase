import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Item} from '../models/Item';
import 'rxjs/add/operator/map';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template'; 
import {MatSnackBar} from '@angular/material/snack-bar'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  itemsCollection:AngularFirestoreCollection<Item>;
  items:Observable<Item[]>;
  itemDoc:AngularFirestoreDocument<Item>;
  constructor(public afs:AngularFirestore,public snackbar:MatSnackBar) {
    this.itemsCollection=this.afs.collection('Employees');
    // this.items=this.afs.collection('Employees').valueChanges();
    this.items=this.itemsCollection.snapshotChanges().map(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as Item;
        data.id=a.payload.doc.id;
        return data;
      });
    });
   }
   number:number=2000;
   getItems(){
     return this.items;
   }
   addEmp(employee:Item){
     this.snackbar.open("Employee Added",'Dismiss',{duration:1000});
     return this.itemsCollection.add(employee);

   }
   deleteEmp(employee:Item){
     this.itemDoc=this.afs.doc('Employees/'+employee.id);
     this.snackbar.open("Employee Deleted",'Dismiss',{duration:1000});
     return this.itemDoc.delete();
   }
   UpdateEmp(employee:Item,edit:Item){
    this.itemDoc=this.afs.doc('Employees/'+employee.id);
      employee.name=edit.name;
      employee.email=edit.email;
      this.itemDoc.update(employee);
      this.snackbar.open("Employee Details Updated",'Dismiss',{duration:1000});
    
  }

  }


