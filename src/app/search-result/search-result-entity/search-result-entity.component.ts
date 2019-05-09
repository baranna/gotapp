import {Component, Input, OnInit} from '@angular/core';
import {Entity} from '../../model/entity';
import {SearchService} from '../../services/search.service';
import {Character} from '../../model/character';
import {Book} from '../../model/book';
import {House} from '../../model/house';

@Component({
  selector: 'app-search-result-entity',
  templateUrl: './search-result-entity.component.html',
  styleUrls: ['./search-result-entity.component.css']
})
export class SearchResultEntityComponent implements OnInit {

  @Input() entity: Entity;
  public detailsLink: string;
  public detail: string;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    const entityType = this.searchService.type;
    this.searchService.getById(entityType, this.entity.id).subscribe(
      result => {
        this.entity = new Entity(result.id, result.url, result.name);
        this.detailsLink = this.searchService.type + 'details';
      }
    );
    switch (this.searchService.type) {
      case 'characters':
        if ((<Character>this.entity).born)
          this.detail = 'Born ' + (<Character>this.entity).born;
        break;
      case  'books':
        if ((<Book>this.entity).released)
          this.detail = 'Released: ' + Book.formatDate((<Book>this.entity).released);
        break;
      case 'houses':
        if ((<House>this.entity).words)
          this.detail = (<House>this.entity).words;
        break;
    }

  }

}
