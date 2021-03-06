import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  categories$;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router) { 
    this.categories$ = this.categoryService.getCategories()
  }

  save(product: any){
    console.log(product)
    this.productService.create(product)
    this.router.navigate(['/admin/products'])
  }

  ngOnInit(): void {
  }

}
