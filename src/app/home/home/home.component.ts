import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public type = "characters";

  constructor(public router: Router, private searchService: SearchService) {
  }

  ngOnInit() {
  }

  /*
  Called when clicked on the search button
  sets the entity's information on the searchService
  navigates to the results page
   */
  searchEntity(name: string, type: string) {
    this.searchService.setSearchEntitiesByName(name, type);
    this.router.navigateByUrl('/searchresult');
  }
}
