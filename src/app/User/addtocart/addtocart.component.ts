import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { addtocart } from '../addtocart';
import { AddcartService } from '../service/addcart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  pro:any;
  name:any;
  id:any;

  constructor(private addcartservice:AddcartService,private route:Router,private sharedservice:SharedService) { }
  displayStyle = "block";
  cartdetails!:addtocart;
  close()
  {
    this.route.navigate(['user/home']);
  }
  go(){
		this.route.navigate(['user/home']); 
	}
  public onAddProducttocart(addForm: NgForm): void{
    this.go();
    this.addcartservice.addProducttocart(addForm.value).subscribe(
      (response: addtocart)=>{
        alert("added to the cart successfully!!");
        console.log(response);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
  }
  onIncrement(cartdetails: addtocart){
    // console.log(tempProduct);
    console.log(cartdetails.prodquantity+=1);
    //this.updateCart(value, tempProduct);
  }

  onDecrement(cartdetails: addtocart){
    cartdetails.prodquantity-=1;
    //this.updateCart(value, tempProduct);
  }
  ngOnInit(): void {
    this.name=sessionStorage.getItem('uname');
    this.id=sessionStorage.getItem('uid');
    this.pro=this.sharedservice.getPro();
    
  }

}
