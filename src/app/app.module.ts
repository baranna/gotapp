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
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    HomeModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    SearchResultModule,
    HttpClientModule,
    CharacterDetailsModule,
    BookDetailsModule,
    HouseDetailsModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
