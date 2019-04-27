import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import {HomeModule} from './home/home.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchResultModule} from './search-result/search-result.module';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './services/search.service';
import {CharacterDetailsComponent} from './character-details/character-details/character-details.component';
import {CharacterDetailsModule} from './character-details/character-details.module';

import {HouseDetailsComponent} from './house-details/house-details/house-details.component';

import {HouseDetailsModule} from './house-details/house-details.module';
import {BookDetailsComponent} from './book-details/book-details/book-details.component';
import {BookDetailsModule} from './book-details/book-details.module';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'searchresult', component: SearchResultComponent },
  {path: 'charactersdetails/:id', component: CharacterDetailsComponent},
  {path: 'housesdetails/:id', component: HouseDetailsComponent},
  {path: 'booksdetails/:id', component: BookDetailsComponent},
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    HomeModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    SearchResultModule,
    HttpClientModule,
    CharacterDetailsModule,
    BookDetailsModule,
    HouseDetailsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
