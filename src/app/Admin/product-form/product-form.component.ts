import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { product } from '../product';
import { ProductsService } from '../service/products.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 

  constructor(private productservice:ProductsService,private route:Router) { }
  go(){
		this.route.navigate(['admin/products']); 
	}
  public onAddProduct(addForm: NgForm): void{
    this.go();
    this.productservice.addProduct(addForm.value).subscribe(
      (response: product)=>{
        console.log(response);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
  }
//   readUrl(event:any) {
//     if (event.target.files && event.target.files[0]) {
//         var reader = new FileReader();

//         reader.onload = (event:any) => {
//             this.prodImg= event.target.result;
//         }

//         reader.readAsDataURL(event.target.files[0]);
//     }
// }


  ngOnInit(): void {
  }

}
