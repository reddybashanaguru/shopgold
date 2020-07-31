import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../tab1/product.model";

@Component({
  selector: "app-explore-container",
  templateUrl: "./explore-container.component.html",
  styleUrls: ["./explore-container.component.scss"],
})
export class ExploreContainerComponent implements OnInit {
  @Input() product: Product;
  url =
    "https://images-na.ssl-images-amazon.com/images/I/61a6xwJfETL._UL1500_.jpg";

  constructor() {}

  ngOnInit() {}
}
