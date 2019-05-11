import {Component, OnInit} from '@angular/core';

import {SearchService} from '../../services/search.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Book} from '../../model/book';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public book: Book;
  private observableBook: Observable<Book>;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
  }

  /**
  Gets the Book's id through route parameter
  calls the searchService to get the Book's data
  subscribes for the returned observable object
  */
  ngOnInit() {
    this.observableBook = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.searchService.getBookById(params.get('id')))
    );
    this.observableBook.subscribe(
      result => {
        this.book = result;
      }
    );
  }

}
