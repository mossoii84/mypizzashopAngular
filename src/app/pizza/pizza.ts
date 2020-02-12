export class Pizza {
  id: number;
  name: string;
  size: string;
  price: number;
  image: File;


  constructor(id: number, name: string, size: string, price: number, image: File) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.price = price;
    this.image = image;
      }
}
