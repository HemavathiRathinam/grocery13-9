import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './Admin/category-form/category-form.component';
import { CategoryComponent } from './Admin/category/category.component';
import { OrdersComponent } from './Admin/orders/orders.component';
import { ProductFormComponent } from './Admin/product-form/product-form.component';
import { ProductsComponent } from './Admin/products/products.component';
import { UsersComponent } from './Admin/users/users.component';
import { AdminLoginComponent } from './SignupLogin/admin-login/admin-login.component';
import { AdminSignupComponent } from './SignupLogin/admin-signup/admin-signup.component';
import { LoginComponent } from './SignupLogin/login/login.component';
import { SignupComponent } from './SignupLogin/signup/signup.component';
import { AddtocartComponent } from './User/addtocart/addtocart.component';
import { CartComponent } from './User/cart_details/cart.component';
import { HomeComponent } from './User/home/home.component';
import { PaymentComponent } from './User/payment/payment.component';
import { ProfileComponent } from './User/profile/profile.component';

const routes: Routes = [
  {
  path:'admin',
  children:[
    {
      path:'products',
      component:ProductsComponent
    },{
      path:'addproduct',
      component:ProductFormComponent
    },{
      path:'category',
      component:CategoryComponent
    },{
      path:'addcategory',
      component:CategoryFormComponent
    },{
      path:'signup',
      component:AdminSignupComponent
    },{
      path:'login',
      component:AdminLoginComponent
    },{
      path:'orders',
      component:OrdersComponent
    },{
      path:'users',
      component:UsersComponent
    }
  ]
  },
  {
    path:'user',
    children:[
      {
        path:'home',
        component:HomeComponent
      },{//from net reference
        path:'cart',
        component:CartComponent
      },{
        path:'addtocart',
        component:AddtocartComponent
      },{
        path:'signup',
        component:SignupComponent
      },{
        path:'login',
        component:LoginComponent
      },{
        path:'profile',
        component:ProfileComponent
      },{
        path:'payment',
        component:PaymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
