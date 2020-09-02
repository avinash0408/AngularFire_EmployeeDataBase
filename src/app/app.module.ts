import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { EmpDetailDialogComponent } from './emp-detail-dialog/emp-detail-dialog.component'; 
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {EmployeeService} from './services/employee.service';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { FormsModule }   from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { map, filter, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import {MatSnackBarModule} from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpDetailDialogComponent,

  ],
  entryComponents:[EmpDetailDialogComponent],
  imports: [MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,FormsModule,MatInputModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent,HomeComponent]
})
export class AppModule { }
