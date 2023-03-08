import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Database, set, ref, update } from '@angular/fire/database';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  public username!: string;
  public password!: string;
  public email!: string;
  public accounttype!: string;

  isLoading = false;
  error!: string;

  constructor(private authService: AuthService,
    public Database: Database){}

  registerUser(form: NgForm, value: any) {
    //console.log(form.value);
    if(!form.valid) {
      return;
    }
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    const accounttype = form.value.accounttype;

    this.isLoading = true;

    this.authService.signUp(username, email, password, accounttype).subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
    },
    errorMsg => {
      console.log(errorMsg);
      this.error = errorMsg;
      this.isLoading = false;
    });
    form.reset();

    set(ref(this.Database, 'users/' + value.username), {
      username: value.username,
      email: value.email,
      password: value.password,
      accounttype: value.accounttype
    });
    console.log('database updated!');
    
}

}
