import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Character} from '../../model/character';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  public character: Character;
  private characterUrl: string;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
    this.characterUrl = this.route.snapshot.paramMap.get('url');
  }


  ngOnInit() {
    this.searchService.getByUrl(this.characterUrl).subscribe(
      result => {
        this.character = result;
        console.log(result);
      }
    );
  }

}
