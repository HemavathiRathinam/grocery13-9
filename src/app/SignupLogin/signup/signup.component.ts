import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserApiService } from '../user-api.service';
import { User } from 'src/app/user';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  "signupForm": FormGroup;
  constructor(private formBuilder:FormBuilder , private http:HttpClient, private router:Router,private api:UserApiService) {
    this.signupForm = formBuilder.group({
     email: new FormControl(),
     username:new FormControl(),
     mobile: new FormControl(),
     password: new FormControl(),
   })

   this.signupForm = formBuilder.group({
     email: ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
     username:['',Validators.required],
     mobile:['',Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
     password: ['',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')])],
     address:['',Validators.required],
     city:['',Validators.required],
     state:['',Validators.required]
   })
  }

  ngOnInit(): void {
  }
  resetForm(){
    this.signupForm.reset();
  }
  get emailId(){
    return this.signupForm.get('email');
  }
  get username(){
    return this.signupForm.get('username');
  }
  get mobile(){
    return this.signupForm.get('mobile');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get address(){
    return this.signupForm.get('address');
  }
  get city(){
    return this.signupForm.get('city');
  }
  get state(){
    return this.signupForm.get('state');
  }

  postData(){
      this.api.addUser(this.signupForm.value)    
      .subscribe({
        next:(response:User)=>{
          console.log(response);
          alert("User added successfully");
          this.signupForm.reset();
          this.router.navigate(['/user/login'])
          
        },
        error:()=>{
          alert("Error while adding records")
        }
      });
}
  /*postData(){

    if(this.signupForm.value.adminuser==="User"){
    this.http.post<any>("http://localhost:8080/users/add",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup successful"+"\n\n"+"Type : "+ this.signupForm.value.adminuser+"\n"+"Email : "+ this.signupForm.value.email+"\n"+"User Name : "+ this.signupForm.value.username+"\n"+"Mobile Number : "+ this.signupForm.value.mobile+"\n"+"State: "+this.signupForm.value.state);
      this.resetForm();
      this.router.navigate(['login'])
    },err=>{
      alert("Something went wrong");
    })
  }
  else{
    this.http.post<any>("http://localhost:8080/admins/add",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup successful"+"\n\n"+"Type : "+ this.signupForm.value.adminuser+"\n"+"Email : "+ this.signupForm.value.email+"\n"+"User Name : "+ this.signupForm.value.username+"\n"+"Mobile Number : "+ this.signupForm.value.mobile);
      this.resetForm();
      this.router.navigate(['login'])
    },err=>{
      alert("Something went wrong");
    })
  }
    
  }*/

}
