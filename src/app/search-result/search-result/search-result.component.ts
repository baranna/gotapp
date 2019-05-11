import {Entity} from '../../model/entity';
import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {

  public result: Entity[];
  public resultCount: number;


  constructor(private searchService: SearchService, private router: Router) {
  }

  /*
  Calls the searchService to get the result entities
  saves their quantity so we can display a message if there're no results
  */
  ngOnInit() {
    this.searchService.search().subscribe(
      result => {
        this.result = result;
        this.resultCount = this.result.length;
      }
    );

  }

}
