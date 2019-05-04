import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Entity} from '../model/entity';
import {Character} from '../model/character';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {House} from '../model/house';
import {Book} from '../model/book';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  // TODO: url kiszervezés
  // TODO: refactor
  // TODO: betöltések külön függvényekbe
  // TODO: id beállítások
  // FIXME: redirect a home-ra ha ezek undefined
  public type: string;
  public name: string;

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

  getCharacterById(id: string): Observable<Character> {
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

          if (response.father) {
            let id = (<string><unknown>response.father).split('/')[5];
            this.getById('characters', id).subscribe(result => {
              response.father = result;
              response.father.id = id;
            });
          }

          if (response.mother) {
            let id = (<string><unknown>response.mother).split('/')[5];
            this.getById('characters', id).subscribe(result => {
              response.mother = result;
              response.mother.id = id;
            });
          }

          for (let i = 0; i < response.books.length; i++) {
            let id = (<string><unknown>response.books[i]).split('/')[5];
            this.getById('books', id).subscribe(result => {
              response.books[i] = result;
              response.books[i].id = id;
            });
          }

          for (let i = 0; i < response.povBooks.length; i++) {
            let id = (<string><unknown>response.povBooks[i]).split('/')[5];
            this.getById('books', id).subscribe(result => {
              response.povBooks[i] = result;
              response.povBooks[i].id = id;
            });
          }


        response.id = response.url.split('/')[5];
        return response;
      })
    );
  }

  getHouseById(id: string): Observable<House> {
    return this.http.get<House>(`https://anapioficeandfire.com/api/houses/${id}`).pipe(
      map<House, any>(response => {
          if (response.founder) {
            let id = (<string><unknown>response.founder).split('/')[5];
            this.getById('characters', id).subscribe(result => {
              response.founder = result;
              response.founder.id = id;
            });
          }

          if (response.overlord) {
            let id = (<string><unknown>response.overlord).split('/')[5];
            this.getById('houses', id).subscribe(result => {
              response.overlord = result;
              response.overlord.id = id;
            });
          }

          if (response.heir) {
            let id = (<string><unknown>response.heir).split('/')[5];
            this.getById('characters', id).subscribe(result => {
              response.heir = result;
              response.heir.id = id;
            });
          }

          if (response.currentLord) {
            let id = (<string><unknown>response.currentLord).split('/')[5];
            this.getById('characters', id).subscribe(result => {
              response.currentLord = result;
              response.currentLord.id = id;
            });
          }

          for (let i = 0; i < response.swornMembers.length; i++) {
            let id = (<string><unknown>response.swornMembers[i]).split('/')[5];
            this.getById('characters', id).subscribe(result => {
              response.swornMembers[i] = result;
              response.swornMembers[i].id = id;
            });
          }

          for (let i = 0; i < response.cadetBranches.length; i++) {
            let id = (<string><unknown>response.cadetBranches[i]).split('/')[5];
            this.getById('houses', id).subscribe(result => {
              response.cadetBranches[i] = result;
              response.cadetBranches[i].id = id;
            });
          }

          return response;
        }
      )
    );
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`https://anapioficeandfire.com/api/books/${id}`).pipe(
      map<Book, any>(response => {

        for (let i = 0; i < response.povCharacters.length; i++) {
          let id = (<string><unknown>response.povCharacters[i]).split('/')[5];
          this.getById('characters', id).subscribe(result => {
            response.povCharacters[i] = result;
            response.povCharacters[i].id = id;
          });
        }
        return response;
      })
    );
  }
}
