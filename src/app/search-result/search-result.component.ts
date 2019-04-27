
import {SearchService} from '../services/search.service';
import {Entity} from '../model/entity';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
// TODO több találat miatt lehetne néven kívül plusz infó pl born

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
