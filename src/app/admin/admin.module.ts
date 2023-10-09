import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OrderManagementComponent,
    ProductManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
