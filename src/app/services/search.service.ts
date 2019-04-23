import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entity} from '../model/entity';
import {Character} from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  public type: string = 'characters';
  public name: string = 'Jon Snow';

  setSearchEntitiesByName(name: string, type: string) {
    this.type = type;
    this.name = name;
  }
  search(): Observable<Entity[]> {
    return this.http.get<Entity[]>('https://anapioficeandfire.com/api/' + this.type + '?name=' + this.name);
  }

  getByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

}
