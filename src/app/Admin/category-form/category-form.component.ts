import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { category } from '../category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  constructor(private categoryservice:CategoryService,private route:Router) { }
  go(){
		this.route.navigate(['admin/category']); 
	}
  public onAddCategory(addForm: NgForm): void{
    this.go();
    this.categoryservice.addCategory(addForm.value).subscribe(
      (response: category)=>{
        console.log(response);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
  }

  ngOnInit(): void {
  }

}
