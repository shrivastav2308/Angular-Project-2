import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  public username!: string;
  public password!: string;
  public email!: string;
  public type!: string;

  isLoading = false;
  error!: string;

  constructor(private authService: AuthService){}

  registerUser(form: NgForm) {
    //console.log(form.value);
    if(!form.valid) {
      return;
    }
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    const type = form.value.type;

    this.isLoading = true;

    this.authService.signUp(username, email, password, type).subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
    },
    errorMsg => {
      console.log(errorMsg);
      this.error = errorMsg;
      this.isLoading = false;
    });
    form.reset();
}

}
