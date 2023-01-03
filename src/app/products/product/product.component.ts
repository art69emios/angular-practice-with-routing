import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.server';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  categories:Array<string>|undefined = []
  products = this.prodServ.getProduct() 

  constructor(private prodServ:ProductService, private router:Router, private activatedRouter:ActivatedRoute){}

  

ngOnInit(): void {
  this.getCategory()
  let category: string | null = null
  this.activatedRouter.params.forEach(item => category === item['category'])
  if(category) {
    this.products = this.prodServ.products.filter((item)=> item.category === category)
    console.log(category);

  }
}
getCategory(){
  console.log(this.products);
  this.products.forEach(item => {
    if(!this.categories?.includes(item.category)){
      this.categories?.push(item.category)
    }
  })
}
filter(category:string){
  this.products = this.prodServ.products.filter((item)=> item.category === category)
  this.router.navigate(['product', category]);
}

}
