import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {House} from '../../model/house';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  public house: House;
  private observableHouse: Observable<House>;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.observableHouse = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.searchService.getHouseById(params.get('id')))
    );
    this.observableHouse.subscribe(
      result => {
        this.house = result;
        this.house.id = this.house.url.split('/')[5];
      }
    );
  }
}
