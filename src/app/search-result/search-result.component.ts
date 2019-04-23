import {Component, OnInit} from '@angular/core';
import {SearchService} from '../services/search.service';
import {Observable} from 'rxjs';
import {Entity} from '../model/entity';
import {Character} from '../model/character';
import {Book} from '../model/book';
import {House} from '../model/house';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
// TODO részletes infók
// TODO navigálás

export class SearchResultComponent implements OnInit {

  public result: Entity[];
  public resultCount: number;
  public detailsLink: string;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.search().subscribe(
      result => {
        this.result = result;
        this.resultCount = this.result.length;
        this.detailsLink = this.searchService.type + 'details';
      }
    );

  }

}
