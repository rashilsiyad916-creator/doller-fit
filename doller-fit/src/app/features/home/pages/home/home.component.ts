import { Component, OnInit } from '@angular/core';
import{Product}from 'src/app/shared/models/product.model';
import{ProductService} from 'src/app/core/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomepageComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private productService : ProductService){}

  ngOnInit(): void {
    const allProducts=this.productService.getProducts();
    this.featuredProducts=allProducts.slice(0,5);
  }

}
