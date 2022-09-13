import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Payment } from 'src/app/Payment';
import { User } from 'src/app/user';
import { PaymentService } from 'src/app/User/service/payment.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  user!:User;
  term:any;
  public orderdetails:Payment[] = [];
  orderForm:any={
    id: "",
    username: "",
    userEmail: "",
    amount: "",
    orderDate:""

   }
  userProfile!: FormGroup;
 
  constructor(private api:PaymentService,private formBuilder:FormBuilder) { }
  
  
 
  public getUsers():void{
    this.api.getOrders().subscribe(
      (response: Payment[]) => {
       this.orderdetails=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  displayStyle="none";
  openPopup(pro:any) {
    this.displayStyle = "block";
    this.orderForm=pro;
  }
  close()
  {
    this.displayStyle = "none";
  }
  get totalRows(): number {
    return this.orderdetails.length;
  }
 /* register()
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
          console.log("Succesfully deleted");
          this.getProducts();
      })
  }*/

  ngOnInit(): void {
    this.userProfile=this.formBuilder.group({
      id:[''],
      username:[''],
      email:[''],
      mobile:[''],
      password:[''],
      address:[''],
      city:[''],
      state:['']
      
    });
    this.getUsers();
  }


}
