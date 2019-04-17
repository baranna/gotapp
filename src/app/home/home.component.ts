import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CharacterService} from '../services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, private characterService: CharacterService) { }

  ngOnInit() {
  }

  searchCharacter(name: string) {
    this.characterService.searchCharacterByName(name).subscribe(
      result => {
        console.log(result);
      }
    );
  }
}
