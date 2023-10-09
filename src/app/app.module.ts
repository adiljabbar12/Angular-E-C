import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Header/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Header/home/home.component';
import { FeaturedProductsComponent } from './Header/featured-products/featured-products.component';
import { HotSaleComponent } from './Header/hot-sale/hot-sale.component';
import { AboutUsComponent } from './Header/about-us/about-us.component';
import { LoginComponent } from './Header/login/login.component';
import { RegisterComponent } from './Header/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { GeneralComponent } from './HOMEVIEW/general/general.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FeaturedProductsComponent,
    HotSaleComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    GeneralComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
