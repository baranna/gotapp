import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchResultModule} from './search-result/search-result.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SearchService} from './services/search.service';
import {CharacterDetailsModule} from './character-details/character-details.module';
import {HouseDetailsModule} from './house-details/house-details.module';
import {BookDetailsModule} from './book-details/book-details.module';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {environment} from '../environments/environment';
import {ApiBaseUrlInterceptor} from './ApiBaseUrlInterceptor';

//TODO: KOMMENTEZÉS

/*
TODO: platformspecifikus megoldások
 Együttműködés natív JavaScript függvényekkel egyedi típusdefiníciós fájlokkal,
 böngésző local storage api használata, architekturális elemek komplex használata (pl. összetett,
 több modulon átívelő routing szabályok)
*/

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
  providers: [
    SearchService,
    {provide: 'API_BASE_URL', useValue: environment.apiBaseUrl},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiBaseUrlInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
