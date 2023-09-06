export class Recipe {
  getRequest() {
    throw new Error('Method not implemented.');
  }
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, dics: string, imagePath: string) {
    this.name = name;
    this.description = dics;
    this.imagePath = imagePath;
  }
}
