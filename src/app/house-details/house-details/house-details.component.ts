import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {ActivatedRoute} from '@angular/router';
import {House} from '../../model/house';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  public house: House;
  private houseUrl: string;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
    this.houseUrl = this.route.snapshot.paramMap.get('url');
  }


  ngOnInit() {
    this.searchService.getByUrl(this.houseUrl).subscribe(
      result => {
        this.house = result;
        console.log(result);
      }
    );
  }
}
