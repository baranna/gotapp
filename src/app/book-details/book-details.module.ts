import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';
import {MatCardModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    RouterModule
  ]
})
export class BookDetailsModule { }
