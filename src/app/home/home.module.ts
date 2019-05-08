import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class HomeModule { }
