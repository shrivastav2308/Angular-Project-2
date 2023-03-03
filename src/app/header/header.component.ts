import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  basicNavbar: any;
  //private userSub: Subscription | undefined;

  constructor(
  ) {}

  ngOnInit() {
    
  }

  onSaveData() {
    alert("Function works!")
  }

  onFetchData() {
    alert("Function works!!")
  }

  onLogout() {
    alert("Logout!!")
  }

  ngOnDestroy() {
    //
  }
}
