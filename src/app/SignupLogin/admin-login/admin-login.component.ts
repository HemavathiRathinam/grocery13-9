import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Admin/admin';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin!:Admin
  public adminLoginForm!:FormGroup
  showError: boolean = false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private api:AdminApiService) {
    this.adminLoginForm = formBuilder.group({
      email: new FormControl(),
      password: new FormControl()
    })

    this.adminLoginForm = formBuilder.group({
      email: ['',Validators.compose([Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password: ['',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')])]
 
    })
   }

ngOnInit(): void {
}
resetForm(){
  this.adminLoginForm.reset();
}
get emailId(){
  return this.adminLoginForm.get('email');
}
get password(){
  return this.adminLoginForm.get('password');
}
post=false;


postData(){
  this.http.get<any>("http://localhost:8082/admins/all")
  .subscribe(res=>{
    const user=res.find((a:any)=>{
      return a.email===this.adminLoginForm.value.email && a.password===this.adminLoginForm.value.password
    });
    if(user){
      alert("Login Success");
      this.adminLoginForm.reset();
      this.router.navigate(['/admin/products'])
    }
    else{
      alert("Invalid credentials")
      this.adminLoginForm.reset();
    }
  },err=>{
    alert("Something wwent wrong");
  })
}

/*this.http.get<any>("http://localhost:8080/admins/all")
.subscribe(res=>{
  const user=res.find((a:any)=>{
    return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
  });
  if(user){
    alert("Login Success");
    this.loginForm.reset();
    this.router.navigate(['admin'])
  }
},err=>{
  alert("Something wwent wrong");
}) */

}
