import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { AdminApiService } from '../admin-api.service';
import { UserApiService } from '../user-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userData!:User[]
    user!:User
    public loginForm!:FormGroup
    showError: boolean = false;
  Token: any;
  Auth: any;
    constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private api:UserApiService,private api1:AdminApiService) {
      this.loginForm = formBuilder.group({
        username: new FormControl(),
        password: new FormControl()
      })
  
      this.loginForm = formBuilder.group({
        username:['',Validators.required],
        password: ['',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')])]
   
      })
     }

  ngOnInit(): void {
  }
  resetForm(){
    this.loginForm.reset();
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  post=false;









  postData(){
       this.http.get<any>("http://localhost:8082/users/all")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        sessionStorage.setItem('uname',a.username);
        sessionStorage.setItem('uid',a.id);
        sessionStorage.setItem('uemail',a.email);
        return a.username===this.loginForm.value.username && a.password===this.loginForm.value.password
        
      });
      
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['/user/home'])
        console.log(sessionStorage.getItem('uid'));
      }
      else{
        alert("Invalid credentials");
        this.loginForm.reset();
      }
    },err=>{
      alert("Something went wrong");
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
