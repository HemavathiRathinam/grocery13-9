import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserApiService } from 'src/app/SignupLogin/user-api.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  term:any;
  public userdetails:User[] = [];
  userForm:any={
    id:"",
    username:"",
    mobile:"",
    email:"",
    address:"",
    city:"",
    state:""

   }
 
  constructor(private api:UserApiService) { }
  
  
 
  public getUsers():void{
    this.api.getUser().subscribe(
      (response: User[]) => {
       this.userdetails=response;
      },(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  displayStyle="none";
  openPopup(pro:any) {
    this.displayStyle = "block";
    this.userForm=pro;
  }
  close()
  {
    this.displayStyle = "none";
  }
  get totalRows(): number {
    return this.userdetails.length;
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
    this.getUsers();
  }

}