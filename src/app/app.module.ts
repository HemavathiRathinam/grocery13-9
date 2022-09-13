import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Admin/products/products.component';
import { ProductFormComponent } from './Admin/product-form/product-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './Admin/category/category.component';
import { CategoryFormComponent } from './Admin/category-form/category-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './User/home/home.component';
import { LoginComponent } from './SignupLogin/login/login.component';
import { SignupComponent } from './SignupLogin/signup/signup.component';
import { CartComponent } from './User/cart_details/cart.component';
import { AddtocartComponent } from './User/addtocart/addtocart.component';
import { UserNavComponent } from './User/user-nav/user-nav.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { PaymentComponent } from './User/payment/payment.component';
import { UsersComponent } from './Admin/users/users.component';
import { OrdersComponent } from './Admin/orders/orders.component';
import { AdminLoginComponent } from './SignupLogin/admin-login/admin-login.component';
import { AdminSignupComponent } from './SignupLogin/admin-signup/admin-signup.component';
import { ProfileComponent } from './User/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFormComponent,
    CategoryComponent,
    CategoryFormComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AddtocartComponent,
    UserNavComponent,

    AdminNavComponent,
    PaymentComponent,
    UsersComponent,
    AdminNavComponent,
    OrdersComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
