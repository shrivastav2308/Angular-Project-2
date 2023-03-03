import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  public username!: string;
  public password!: string;
  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  logInUser() {
    if(this.username == "user" && this.password == "user123") {
      alert("Login Successful");
      this.router.navigate(['/user-login']);
    }
    else {
      alert("Unauthorized user");
    }
  }
}