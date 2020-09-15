import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { StoreComponent } from './store/store.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';

const routes: Routes = [];

@NgModule({
  imports: [ BrowserModule, StoreModule , RouterModule.forRoot(
    [
      { path: " **", redirectTo:"/store" }, // Default Not Working 
        { path: "store"  ,component: StoreComponent},
        { path: "cart"  ,component: CartDetailsComponent },
        { path : "checkout" , component: CheckoutComponent},

        { path: "admin" ,
          loadChildren : "./Admin/admin.module #AdminModule",
           //LAzy Loadin as i am creating new module for admin 
         
        },
       

    ]
  )],
  exports: [RouterModule]


})
export class AppRoutingModule { }
