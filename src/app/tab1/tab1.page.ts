import { Component } from "@angular/core";
import { Product } from "./product.model";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  public productList: Product[] = [
    new Product(
      "p1",
      "Delhi Mansion",
      "In the heart of India",
      "https://images-na.ssl-images-amazon.com/images/I/61a6xwJfETL._UL1500_.jpg",
      2000
    ),
    new Product(
      "p2",
      "Hyderabad Mansion",
      "In the heart of Telangana",
      "https://m.economictimes.com/thumb/msid-71771669,width-1200,height-900,resizemode-4,imgsize-257346/hyderabad-getty.jpg",
      20000
    ),
  ];
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.productList = [...this.productList, this.productList[0]];
      i++;
    }
  }
}
