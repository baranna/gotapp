import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchResultComponent} from './search-result/search-result.component';
import {MatCardModule, MatExpansionModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    RouterModule
  ]
})
export class SearchResultModule { }
