import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
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
import {ApiBaseUrlInterceptor} from './helpers/ApiBaseUrlInterceptor';
import {ApiErrorHandler} from './helpers/ApiErrorHandler';
import {MatSnackBarModule} from '@angular/material';


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
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [
    SearchService,
    {
      provide: 'API_BASE_URL',
      useValue: environment.apiBaseUrl
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiBaseUrlInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ApiErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
