import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SettingsComponent } from './settings/settings.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'admin-login', component: LoginComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'products', component: ManageProductsComponent},
  {path: 'error', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
