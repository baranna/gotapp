import {Entity} from './entity';
import {Character} from './character';
import * as moment from 'moment';

export class Book extends Entity{
  constructor(public url: string,
              public name: string,
              public isbn: string,
              public authors: string[],
              public numberOfPages: number,
              public publisher: string,
              public country: string,
              public mediaType: string,
              public released: string,
              public characters: string[],
              public povCharacters: Character[],
              public id: string
  ){
    super(id, url, name);
  }

  public static formatDate(date: string): string {
    return moment(date).format('MMMM DD, YYYY');
  }
}
