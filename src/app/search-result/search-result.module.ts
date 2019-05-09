import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchResultComponent} from './search-result/search-result.component';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {SearchResultEntityComponent} from './search-result-entity/search-result-entity.component';
import {HomeModule} from '../home/home.module';

@NgModule({
  declarations: [SearchResultComponent, SearchResultEntityComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    RouterModule,
    HomeModule,
    MatButtonModule
  ]
})
export class SearchResultModule { }
