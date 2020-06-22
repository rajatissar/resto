import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/native-date';
// import { MatMomentDateModule } from '@angular/material/moment-date';
import { MatSelectModule } from '@angular/material/select';
// import { MatOptionModule } from '@angular/material/option';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    // MatNativeDateModule,
    // MatMomentDateModule,
    MatSelectModule,
    // MatOptionModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    // MatNativeDateModule,
    // MatMomentDateModule,
    MatSelectModule,
    // MatOptionModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
