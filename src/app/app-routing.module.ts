import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Header/home/home.component';
import { FeaturedProductsComponent } from './Header/featured-products/featured-products.component';
import { HotSaleComponent } from './Header/hot-sale/hot-sale.component';
import { AboutUsComponent } from './Header/about-us/about-us.component';
import { LoginComponent } from './Header/login/login.component';
import { RegisterComponent } from './Header/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GeneralComponent } from './HOMEVIEW/general/general.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderManagementComponent } from './admin/order-management/order-management.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';

const routes: Routes = [
  // {path: "home" , component: HomeComponent,
  // children: [
  //   {
  //     path: 'general', // The path of the child route
  //     component: GeneralComponent, // The component for the child route
  //   }]},
    {path: 'dashboard' , component: DashboardComponent},
  {path: "featured-products" , component: FeaturedProductsComponent},
  {path: "hot-sale" , component: HotSaleComponent},
  {path: "about-us" , component: AboutUsComponent},
  {path: "login" , component: LoginComponent},
  {path: "register" , component: RegisterComponent},
  {path: "**" , component: NotFoundComponent},
  { path: 'admin', component: DashboardComponent },
  { path: 'admin/orders', component: OrderManagementComponent },
  { path: 'admin/products', component: ProductManagementComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
