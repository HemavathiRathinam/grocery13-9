import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { product } from 'src/app/Admin/product';
import { ProductsService } from 'src/app/Admin/service/products.service';
import { SharedService } from 'src/app/shared.service';

import { addtocart } from '../addtocart';
import { AddcartService } from '../service/addcart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  term:any;
  public productdetails:product[] = [];
  productsupdate:any={
    prodId:"",
    prodName:"",
    prodPrice:"",
    prodDiscount:"",
    prodWeight:"",
    prodImg:"",
    prodCategory:""

   }

 
  constructor(private productservice:ProductsService,private addcartservice:AddcartService,private router:Router,
    private sharedservice:SharedService) { }
  public getProducts():void{
    this.productservice.getProducts().subscribe(
      (response: product[]) => {
       this.productdetails=response;
      },(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  
  displayStyle="none";
  openPopup(pro: any) {
    this.displayStyle = "block";
    this.productsupdate=pro;
    this.sharedservice.setPro(this.productsupdate);
    this.router.navigate(['user/addtocart']);
    
  }
  
  get totalRows(): number {
    return this.productdetails.length;
  }
  delete(pro:any)
  {
    this.productservice.deleteByid(pro.prodId).subscribe(
      (data)=>
      {
          console.log("Succesfully deleted");
          this.getProducts();
      })
  }




  ngOnInit(): void {
    this.getProducts();
  }

}
