import {Component, OnInit} from '@angular/core';
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

  public character: Character;
  public observableCharacter: Observable<Character>;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
  }

  /*
  Gets the Character's id through route parameter
  calls the searchService to get the Character's data
  subscribes for the returned observable object
  */
  ngOnInit() {
    this.observableCharacter = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.searchService.getCharacterById(params.get('id')))
    );
    this.observableCharacter.subscribe(
      result => {
        this.character = result;
      }
    );
  }

}
