import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, private characterService: SearchService) { }

  ngOnInit() {
  }

  // TODO filterezés - lehet nem is kell
  searchEntity(name: string, type: string) {
    this.characterService.setSearchEntitiesByName(name, type);
    this.router.navigateByUrl('/searchresult');
  }
}
