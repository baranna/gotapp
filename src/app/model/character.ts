import {Entity} from './entity';
import {House} from './house';
import {Book} from './book';

export class Character extends Entity{
  constructor(public  url: string,
              public  name: string,
              public  gender: string,
              public  culture: string,
              public  born: string,
              public  died: string,
              public  titles: string[],
              public  aliases: string[],
              public  father: Character,
              public  mother: Character,
              public  spouse: Character,
              public  allegiances: House[],
              public  books: Book[],
              public  povBooks: Book[],
              public  tvSeries: string[],
              public  playedBy: string[],
              public id: string
  ) {
    super(id, url, name);
  }
}
