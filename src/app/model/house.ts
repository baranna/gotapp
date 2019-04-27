import {Entity} from './entity';

export class House extends Entity {
  constructor(public	url:	string,
              public	name:	string,
              public	region:	string,
              public	coatOfArms:	string,
              public	words:	string,
              public	titles:	string[],
              public	seats:	string[],
              public	currentLord:	string,
              public	heir:	string,
              public	overlord:	string,
              public	founded:	string,
              public	founder:	string,
              public	diedOut:	string,
              public	ancestralWeapons:	string[],
              public	cadetBranches:	string[],
              public	swornMembers:	string[],
              public id: string
  ){
    super(id, url, name);
  }
}
