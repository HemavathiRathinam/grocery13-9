import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { UserApiService } from 'src/app/SignupLogin/user-api.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  id:any;
  user!:User[];
  userData!:User;
  userProfile!:FormGroup;
  constructor(private api:UserApiService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem('uid');
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
    this.showData();

  }
  public updateProfile(): void{
    this.api.updateUser(this.id,this.userProfile.value)
    .subscribe({
      next:(response:User)=>{
        console.log(response);
        this.showData();
      
      },
      error:()=>{
        alert("Error while adding records")
      }
    });


  }
enable(){
  this.userProfile.enable()
}
   showData(){
  this.api.getUserData(this.id).subscribe({
    next:(response:User)=>{
      console.log(response);
      this.userData=response;
      this.userProfile.setValue(response);
      this.userProfile.disable()


},
error:()=>{
  alert("Error while fetching records")
}
});
 }
  
}
