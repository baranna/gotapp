import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import {MatCardModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    RouterModule
  ]
})
export class CharacterDetailsModule { }
