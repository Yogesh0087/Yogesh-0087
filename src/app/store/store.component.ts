import { Router } from '@angular/router';
import { Cart } from './cart.model';
import { Product } from './../../Model/product.model';
import { ProductRepository } from './../../Model/product.repository';
import { Component, OnInit } from '@angular/core';
 


@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository : ProductRepository, private cart : Cart, private router : Router )
   { }
  ngOnInit(): void {
  }

  get products() : Product[]
  {

    let pageIndex =   (this.selectedPage - 1) * this.productsPerPage;

    return this.repository.getProducts(this.selectedCategory)
    //for only 4 products per page next 4 on nxt page   
      //.slice(pageIndex,pageIndex + this.productsPerPage);
  }

  get categories() : string[]
  {
    return this.repository.getCategories();
  }

  changeCategory (newCategory?:string) //cat array k lia dia a html mei to show n number of categories
  //Function overloading for no parameter ani ek parameter 
  {
    this.selectedCategory = newCategory;
  }


  addProductToCart(Product : Product )
  {
    
    this.cart.addLine(Product);
    this.router.navigateByUrl("cart");
    

  }
// changePage(newPage : number)
//{
  //this.selectedPage = newPage;
//}

//changePageSize(newSize : number )
//{
  //this.productsPerPage = Number(newSize);
  //this.changeCategory(1);
//}


//get pageNumber() : number[]
//{
  //return Array (Math.ceil(this.repository)
//}

}
