import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterFilterComponent } from './filter/character-filter.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import {HomeModule} from './home/home.module';
import {FilterModule} from './filter/filter.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path: 'character', component: CharacterFilterComponent },
  { path: '', component: HomeComponent },
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
    FilterModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
