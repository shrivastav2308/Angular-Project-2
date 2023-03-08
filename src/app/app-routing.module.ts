import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginComponent } from './login/login.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SettingsComponent } from './settings/settings.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'admin-login', component: LoginComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'home-screen', component: HomeScreenComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'products-details', component: ProductsDetailsComponent},
  {path: 'create-product', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
