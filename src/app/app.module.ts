import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { ProductService } from './products/productList/product.service';
import { ProductListComponent } from './products/productList/product.component';
import {ProductDetailComponent} from './products/productDetail/product.detail.component';
import {AppComponent} from './app.component';
import {CategoryListComponent} from './category/categories.component';
import {BasketBtn} from './basket/btn/basket.btn.component';
import {OrderServiceUtil} from './utils/order/order.service.util';
import {LoginComponent} from "./login/login.component";
import {AuthenticationService} from "./login/authentication.service";
import {UserCabinetComponent} from "./cabinet/user.cabinet.component";
import {CanActivateAuthGuard} from "./login/can-activate.authguard";
import {UserService} from "./cabinet/user.service";
import {OrderService} from "./order/order.service";
import {OrderComponent} from "./order/order.component";
import {CreateNewUserComponent} from "./login/newuser/new.user.component";
import {SmartMenuComponent} from "./left_menu/smart.menu.component";
import {SmartHeaderComponent} from "./headers/smart/smart.header";
import {ProductDescriptionComponent} from "./products/description/product.description";


const appRoutes: Routes = [
  { path: 'category/:id', component: ProductListComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'product/offer/:id', component: ProductDescriptionComponent },
  { path: 'product/:id',      component: ProductDetailComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'cabinet',      component: UserCabinetComponent, canActivate: [CanActivateAuthGuard]},
  { path: 'order',      component: OrderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductDetailComponent,
    BasketBtn,
    LoginComponent,
    UserCabinetComponent,
    OrderComponent,
    CreateNewUserComponent,
    SmartMenuComponent,
    SmartHeaderComponent,
    ProductDescriptionComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ProductService,
    //CategoriesService,
    OrderServiceUtil,
    AuthenticationService,
    CanActivateAuthGuard,
    UserService,
    OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
