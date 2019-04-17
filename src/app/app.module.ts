import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterFilterComponent } from './character-filter/character-filter.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import {HomeModule} from './home/home.module';
import {CharacterFilterModule} from './character-filter/character-filter.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchResultModule} from './search-result/search-result.module';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characterfilter', component: CharacterFilterComponent },
  { path: 'searchresult', component: SearchResultComponent }
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
    CharacterFilterModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    SearchResultModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
