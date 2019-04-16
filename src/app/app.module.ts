import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterFilterComponent } from './filter/character-filter.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material';


const appRoutes: Routes = [
  { path: 'character', component: CharacterFilterComponent },
  { path: '', component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterFilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
