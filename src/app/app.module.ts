import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchResultModule} from './search-result/search-result.module';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './services/search.service';
import {CharacterDetailsModule} from './character-details/character-details.module';
import {HouseDetailsModule} from './house-details/house-details.module';
import {BookDetailsModule} from './book-details/book-details.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//TODO: KOMMENTEZÉS

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
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
