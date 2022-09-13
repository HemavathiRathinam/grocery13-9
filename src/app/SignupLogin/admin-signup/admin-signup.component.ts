import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminApiService } from '../admin-api.service';
import { Admin } from 'src/app/Admin/admin';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  "adminSignupForm": FormGroup;
  constructor(private formBuilder:FormBuilder , private http:HttpClient, private router:Router,private api:AdminApiService) {
    this.adminSignupForm = formBuilder.group({
     email: new FormControl(),
     username:new FormControl(),
     mobile: new FormControl(),
     password: new FormControl(),
   })

   this.adminSignupForm = formBuilder.group({
     email: ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
     username:['',Validators.required],
     mobile:['',Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
     password: ['',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')])]
   })
  }

  ngOnInit(): void {
  }
  resetForm(){
    this.adminSignupForm.reset();
  }
  get emailId(){
    return this.adminSignupForm.get('email');
  }
  get username(){
    return this.adminSignupForm.get('username');
  }
  get mobile(){
    return this.adminSignupForm.get('mobile');
  }
  get password(){
    return this.adminSignupForm.get('password');
  }
  

  postData(){
      this.api.addAdmin(this.adminSignupForm.value)    
      .subscribe({
        next:(response:Admin)=>{
          console.log(response);
          alert("User added successfully");
          this.adminSignupForm.reset();
          this.router.navigate(['/admin/login'])
          
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
