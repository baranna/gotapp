import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HouseDetailsComponent} from './house-details/house-details.component';
import {MatCardModule, MatDividerModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {OverlayModule} from '@angular/cdk/overlay';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [HouseDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    RouterModule,
    OverlayModule,
    ScrollingModule
  ]
})
export class HouseDetailsModule { }
