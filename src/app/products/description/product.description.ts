import {IProduct} from '../product';
import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../../menus/categories.sercice';
import {ProductService} from "../productList/product.service";

@Component({
  selector: 'product-desc',
  providers:[CategoriesService],
  templateUrl: './product.description.html',
})

export class ProductDescriptionComponent{
  private product: IProduct;
  private sub: any;

  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.service.get(id).subscribe(p => this.product = p);
    });
  }



}
