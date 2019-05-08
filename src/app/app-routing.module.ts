import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {SearchResultComponent} from './search-result/search-result/search-result.component';
import {CharacterDetailsComponent} from './character-details/character-details/character-details.component';
import {HouseDetailsComponent} from './house-details/house-details/house-details.component';
import {BookDetailsComponent} from './book-details/book-details/book-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SearchGuard} from './helpers/search.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'searchresult', component: SearchResultComponent, canActivate: [SearchGuard]},
  { path: 'charactersdetails/:id', component: CharacterDetailsComponent},
  { path: 'housesdetails/:id', component: HouseDetailsComponent},
  { path: 'booksdetails/:id', component: BookDetailsComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
