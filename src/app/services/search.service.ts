import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entity} from '../model/entity';
import {Character} from '../model/character';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {House} from '../model/house';
import {Book} from '../model/book';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  /**
  The type (Character/House/Book) and name
  of the entity to be searched
  */
  public type: string;
  public name: string;

  setSearchEntitiesByName(name: string, type: string) {
    this.type = type;
    this.name = name;
  }

  /**
   Searches for the set entity based on its name by calling the API
   with the name as parameter,
   multiple search results are expected, sets their id before returning
   * @return {Observable<any>} the fetched entity data
   */
  search(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${this.type}?name=${this.name}`).pipe(
      map<Entity[], any>(response => {
          response.forEach(entity => entity.id = this.getIdFromUrl(entity.url));
          return response;
        }
      ));
  }

  /**
   Gets all types of entity from the API by its id
   sets its id before returning
   * @param entityType the type of the entity
   * @param id the id of the entity
   * @return {Observable<any>} the fetched entity data
   */
  getById(entityType: string, id: string): Observable<any> {
    return this.http.get<any>(`${entityType}/${id}`).pipe(
      map<Entity, any>(response => {
        response.id = id;
        return response;
      })
    );
  }

  /**
   Gets a character from the API by its id
   related entities are also downloaded if exist
   in order to show their names, enable navigation to their details page
   * @param id the Character's id
   * @return {Observable<any>} the fetched Character data
   */
  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`characters/${id}`).pipe(

      map<Character, any>(
        response => {

          if (response.spouse) {
            let id = this.getIdFromUrl(<string><unknown>response.spouse);
            this.getById('characters', id).subscribe(result =>
              response.spouse = result
            );
          }

          for (let i = 0; i < response.allegiances.length; i++) {
            let id = this.getIdFromUrl(<string><unknown>response.allegiances[i]);
            this.getById('houses', id).subscribe(result => {
              response.allegiances[i] = result;
            });
          }

          if (response.father) {
            let id = this.getIdFromUrl(<string><unknown>response.father);
            this.getById('characters', id).subscribe(result => {
              response.father = result;
            });
          }

          if (response.mother) {
            let id = this.getIdFromUrl(<string><unknown>response.mother);
            this.getById('characters', id).subscribe(result => {
              response.mother = result;
            });
          }

          for (let i = 0; i < response.books.length; i++) {
            let id = this.getIdFromUrl(<string><unknown>response.books[i]);
            this.getById('books', id).subscribe(result => {
              response.books[i] = result;
            });
          }

          for (let i = 0; i < response.povBooks.length; i++) {
            let id = this.getIdFromUrl(<string><unknown>response.povBooks[i]);
            this.getById('books', id).subscribe(result => {
              response.povBooks[i] = result;
            });
          }

          response.id = id;
          return response;
        })
    );
  }

  /**
   * Gets a house from the API by its id
   * related entities are also downloaded if exist
   * in order to show their names, enable navigation to their details page
   * @param id the House's id
   * @return {Observable<any>} the fetched House data
   */
  getHouseById(id: string): Observable<House> {
    return this.http.get<House>(`houses/${id}`).pipe(
      map<House, any>(
        response => {

          if (response.founder) {
            let id = this.getIdFromUrl(<string><unknown>response.founder);
            this.getById('characters', id).subscribe(result => {
              response.founder = result;
            });
          }

          if (response.overlord) {
            let id = this.getIdFromUrl(<string><unknown>response.overlord);
            this.getById('houses', id).subscribe(result => {
              response.overlord = result;
            });
          }

          if (response.heir) {
            let id = this.getIdFromUrl(<string><unknown>response.heir);
            this.getById('characters', id).subscribe(result => {
              response.heir = result;
            });
          }

          if (response.currentLord) {
            let id = this.getIdFromUrl(<string><unknown>response.currentLord);
            this.getById('characters', id).subscribe(result => {
              response.currentLord = result;
            });
          }

          /**
          Getting the related sworn members,
          some of them don't have data (a name) we filter these
           */
          if (response.swornMembers) {
            const membersToFetch: Character[] = response.swornMembers;
            response.swornMembers = [];
            for (let i = 0; i < membersToFetch.length; i++) {
              let id = this.getIdFromUrl(<string><unknown>membersToFetch[i]);
              this.getById('characters', id).subscribe(result => {
                if (result.name.length != 0) {
                  response.swornMembers = [...response.swornMembers, result];
                }
              });
            }
          }

          for (let i = 0; i < response.cadetBranches.length; i++) {
            let id = this.getIdFromUrl(<string><unknown>response.cadetBranches[i]);
            this.getById('houses', id).subscribe(result => {
              response.cadetBranches[i] = result;
            });
          }

          response.id = id;
          return response;
        }
      )
    );
  }

  /**
   Gets a book from the API by its id
   related entities are also downloaded if exist
   in order to show their names, enable navigation to their details page
   also formats the released date
   * @param id the Book's id
   * @return {Observable<any>} the fetched Book data
   */
  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`books/${id}`).pipe(
      map<Book, any>(
        response => {

        for (let i = 0; i < response.povCharacters.length; i++) {
          let id = this.getIdFromUrl(<string><unknown>response.povCharacters[i]);
          this.getById('characters', id).subscribe(result => {
            response.povCharacters[i] = result;
          });
        }

          response.released = Book.formatDate(response.released);
          response.id = id;
        return response;
      })
    );
  }

  /**
   The API does not provide the entities' id, it is needed for navigation
   this function extracts it from their URL
   * @param url the entity's url
   * @return {string} the entity's id
   */
  getIdFromUrl(url: string): string {
    return url.split('/')[5];
  }
}
