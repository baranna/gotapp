export class Character {
  constructor(public  url: string,
              public  name: string,
              public  gender: string,
              public  culture: string,
              public  born: string,
              public  died: string,
              public  titles: string[],
              public  aliases: string[],
              public  father: string,
              public  mother: string,
              public  spouse: string,
              public  allegiances: string[],
              public  books: string[],
              public  povBooks: string[],
              public  tvSeries: string[],
              public  playedBy: string[]
  ) {
  }
}
