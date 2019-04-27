import {Entity} from './entity';

export class Book extends Entity{
  constructor(public url: string,
              public name: string,
              public isbn: string,
              public authors: string[],
              public numberOfPages: number,
              public publisher: string,
              public country: string,
              public mediaType: string,
              public released: Date,
              public characters: string[],
              public povCharacters: string[],
              public id: string
  ){
    super(id, url, name);
  }
}
