import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Character} from '../../model/character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  public character: Character;

  constructor(private searchService: SearchService) {
    this.searchService.searchCharacter(957).subscribe(
      result => {
        this.character = result;
        console.log(result);
      }
    );
  }

  ngOnInit() {


  }

}
