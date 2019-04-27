export class Entity{
  constructor(public id: string, public url: string, public name: string) {
    this.id = this.url.split('/')[5];
  }
}
