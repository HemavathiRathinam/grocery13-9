import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { category } from '../category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  term:any;
  public categorydetails: category[] = [];
 categoryupdate:any={
  categoryId:"",
  categoryName: "",
  parentCategory: ""
 }
 get totalRows(): number {
  return this.categorydetails.length;
}
 

  constructor(private categoryservice: CategoryService) { }

  public getCategory():void{
    this.categoryservice.getCategory().subscribe(
      (response: category[]) => {
       this.categorydetails=response;
      },(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  /* public getRechargeByName(key: string):void{
    const result:plan[]=[];
    for(const pl of this.plandetails){
      if(pl.name.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
      pl.email.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
      pl.mobile.toLowerCase().indexOf(key.toLowerCase())!== -1){
        result.push(pl);
      }
    }
    this.plandetails=result;
    if(result.length==0 || !key){
      this.getRecharge();
    }
  } */

  displayStyle="none";
  openPopup(data:any) {
    this.displayStyle = "block";
    this.categoryupdate=data;
  }
  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.categoryservice.updateCategory(this.categoryupdate).subscribe(data=>
      {
        console.log(data);
        
      })
  }
  delete(Addon:any)
  {
    this.categoryservice.deleteByid(Addon.categoryId).subscribe(
      (data)=>
      {
          console.log("Succesfully deleted");
          this.getCategory();
      })
  }

  ngOnInit(): void {
    this.getCategory();
  }


}
