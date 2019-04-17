import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacterByName(name: string) {
    return this.http.get('https://anapioficeandfire.com/api/characters?name=Jaime Lannister');
  }
}
