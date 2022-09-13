import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { product } from '../product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 term:any;
 length!:number;
//  pr={} as product;
public productdetails:product[]=[];
  productsupdate:any={
    prodId:"",
    prodName:"",
    prodPrice:"",
    prodDiscount:"",
    prodWeight:"",
    prodImg:"",
    prodCategory:""

   }
 
  constructor(private productservice:ProductsService) { }
  
  
 
  public getProducts():void{
    this.productservice.getProducts().subscribe(
      (response: product[]) => {
        // localStorage.setItem('id',response.prodId)
       this.productdetails=response;
 
      },(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  displayStyle="none";
  openPopup(pro:any) {
    this.displayStyle = "block";
    this.productsupdate=pro;
  }
  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.productservice.updateProduct(this.productsupdate).subscribe(data=>
      {
        console.log(data);
      })
  }
  get totalRows(): number {
    return this.productdetails.length;
  }
  delete(pro:any)
  {
    this.productservice.deleteByid(pro.prodId).subscribe(
      (data)=>
      {   
          //console.log(this.productservice.getProductbyid(pro.prodId));
          //localStorage.setItem('id',pro.prodId);
          console.log("Succesfully deleted");
          this.getProducts();
      })
  }

  ngOnInit(): void {
    this.getProducts();
    //console.log(localStorage.getItem('id'));
  }

}
