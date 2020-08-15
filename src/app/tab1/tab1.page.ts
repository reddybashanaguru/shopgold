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
      "Gold Chain",
      "Lorem Ipsum is simply dummy text",
      "https://cfcdn19.candere.com/media/catalog/product/cache/1/image/1020x1020/9df78eab33525d08d6e5fb8d27136e95/k/m/kmuch502-0a.jpg?v=1548066614",
      14900
    ),
    new Product(
      "p2",
      "Gold Ring Yellow",
      "In the heart of Telangana",
      "https://charujewelsonline.com/wp-content/uploads/2019/10/CJLR2353-Y1.jpg",
      259900
    ),
    new Product(
      "p2",
      "Gold Biscuit",
      "In the heart of Telangana",
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/07/30/916398-gold-file.jpg",
      345900
    ),
  ];
  constructor() {
    for (let i = 0; i < 10000; i++) {
      this.productList = [...this.productList, this.productList[0]];
      i++;
    }
  }
}
