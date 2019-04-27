import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Entity} from '../model/entity';
import {Character} from '../model/character';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {House} from '../model/house';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  // FIXME: redirect a home-ra ha ezek undefined
  public type: string = 'characters';
  public name: string = 'Jon Snow';

  setSearchEntitiesByName(name: string, type: string) {
    this.type = type;
    this.name = name;
  }

  search(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`https://anapioficeandfire.com/api/${this.type}?name=${this.name}`).pipe(
      map<Entity[], any>(response => {
        response.forEach( entity => entity.id = entity.url.split('/')[5]);
        return  response;
      }
    ));
  }

  getById(entityType: string, id: string): Observable<any> {
    return this.http.get<any>(`https://anapioficeandfire.com/api/${entityType}/${id}`).pipe(
      map<Entity, any>(response => {
        response.id = response.url.split('/')[5];
        return response;
      })
    );
  }

  getCharacterbyId(id: string): Observable<Character> {
    return this.http.get<Character>(`https://anapioficeandfire.com/api/characters/${id}`).pipe(
      map<Character, any>(
        response => {

        var spouseUrl = <string><unknown>response.spouse;
        if (spouseUrl) {
          this.getById("characters", spouseUrl.split('/')[5]).subscribe(
            result => response.spouse = result
          );
        }

        for (let i = 0; i < response.allegiances.length; i++) {
          let id = (<string><unknown>response.allegiances[i]).split('/')[5];
          this.getById('houses', id).subscribe( result => {
            response.allegiances[i] = result;
            response.allegiances[i].id = id;
          });
        }

        response.id = response.url.split('/')[5];
        return response;
      })
    );
  }

  getHouseId(id: string): Observable<House> {
    return this.http.get<House>(`https://anapioficeandfire.com/api/houses/${id}`);
  }
}
