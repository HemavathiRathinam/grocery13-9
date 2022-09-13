import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { addtocart } from '../addtocart';
import { AddcartService } from '../service/addcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartdetails:addtocart[]=[];
  cartupdate:any={
    cartId:"",
    prodName:"",
    prodPrice:"",
    prodWeight:"",
    prodImg:"",
    prodquantity:"",
    subtotal:""

   }
   name:any;
   dummy:any;
  id:any;
  amt:any;
  constructor(private addcartservice:AddcartService,private sharedservice:SharedService) { }
   total=0;

update(qua:any,price:number){
  console.log("updating...");
this.cartupdate.subtotal=qua*price;
  const pr=this.cartupdate.subtotal;
  console.log(price);
return price;

}
  
  public getProducts():void{
    this.addcartservice.getUserData(this.id).subscribe(
      (response: addtocart[]) => {
       this.cartdetails=response;
       for(let p of this.cartdetails) {
              this.total=this.total+ p.subtotal;
        console.log("inside",this.total);
        }
       const amt=this.total;
       //sessionStorage.setItem('t',this.amt); 
       this.sharedservice.setTot(this.total);
       console.log(amt);
       console.log(response);
  
      },(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  
  displayStyle="none";
  openPopup(pro:any) {
    this.displayStyle = "block";
    this.cartupdate=pro;
  }

  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.addcartservice.updateProduct(this.cartupdate).subscribe(data=>
      {
        console.log(data);
      })
  }
  // get totalRows(): number {
  //   return this.productdetails.length;
  // }
  delete(pro:any)
  {
    this.addcartservice.deleteByid(pro.prodId).subscribe(
      (data)=>
      {   
          //console.log(this.productservice.getProductbyid(pro.prodId));
          //localStorage.setItem('id',pro.prodId);
          console.log("Succesfully deleted");
          this.getProducts();
      })
  }
  onIncrement(cartdetails: addtocart){
    // console.log(tempProduct);
    console.log(cartdetails.prodquantity+=1);
    // // let value = cartdetails.prodquantity;
    // // value++;
    // this.cartupdate.prodquantity = cartdetails.prodquantity;
    // this.register();
  }

  onDecrement(cartdetails: addtocart){
    cartdetails.prodquantity-=1;
    // this.updateCart(value, tempProduct);
    // let value = cartdetails.prodquantity;
    // value--;
    // this.cartupdate.prodquantity = cartdetails.prodquantity;
    // this.register(cartdetails.prodquantity);
  }
  filterData() {
    
    
  }

  ngOnInit(): void {
    this.name=sessionStorage.getItem('uname');
    this.id=sessionStorage.getItem('uid');

    this.getProducts();
  }

}
