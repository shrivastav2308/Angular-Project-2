import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from '../auth-response';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  public username!: string;
  public email!: string;
  public password!: string;
  isLoading = false;
  error!: string;
  constructor(private router: Router,
    private authService: AuthService) {}

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    const type = 'user';

    let authObs: Observable<AuthResponse>;

    authObs = this.authService.login(username, email, password, type);
    console.log(form.value);
    form.reset();

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
    },
    errorMsg => {
      console.log(errorMsg);
      this.error = errorMsg;
      this.isLoading = false;
    })
  }
}