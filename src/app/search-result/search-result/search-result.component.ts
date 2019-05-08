import {Entity} from '../../model/entity';
import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
// TODO több találat miatt visszagomb a kereséshez

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
