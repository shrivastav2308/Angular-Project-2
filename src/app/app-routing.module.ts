import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'admin-login', component: LoginComponent},
  {path: 'user-login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
