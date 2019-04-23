import { Component, OnInit } from '@angular/core';

import {SearchService} from '../../services/search.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public book: Book;
  private bookUrl: string;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
    this.bookUrl = this.route.snapshot.paramMap.get('url');
  }


  ngOnInit() {
    this.searchService.getByUrl(this.bookUrl).subscribe(
      result => {
        this.book = result;
        console.log(result);
      }
    );
  }

}
