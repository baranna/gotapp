import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Character} from '../../model/character';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  /* TODO linkek ezekre + név is kéne valahogy
  - father
  - mother
  - spouse
  - allegiances
  - books
  - povbooks
   */

  public character: Character;
  public observableCharacter: Observable<Character>;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.observableCharacter = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.searchService.getCharacterbyId(params.get('id')))
    );
    this.observableCharacter.subscribe(
      result => {
        this.character = result;
        this.character.id = this.character.url.split('/')[5];
        console.log(result);
      }
    );
  }

}
