import {Entity} from './entity';
import {Character} from './character';

export class House extends Entity {
  constructor(public	url:	string,
              public	name:	string,
              public	region:	string,
              public	coatOfArms:	string,
              public	words:	string,
              public	titles:	string[],
              public	seats:	string[],
              public  currentLord: Character,
              public  heir: Character,
              public  overlord: House,
              public	founded:	string,
              public  founder: Character,
              public	diedOut:	string,
              public	ancestralWeapons:	string[],
              public  cadetBranches: House[],
              public  swornMembers: Character[],
              public id: string
  ){
    super(id, url, name);
  }
}
