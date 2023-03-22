import { Component, Injectable, Input } from '@angular/core';
import { Database, set, ref, update, push, child, onValue } from '@angular/fire/database';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  filteredString: string = '';
  products = [];
  constructor(public Database: Database){}

  getData(){
    
      $('#products td').remove();
      var rowNum = 0; 
      const dbRef = ref(this.Database, 'createProduct/');
  
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();

        rowNum += 1; 
        var row = "<tr><td>" + '' + "</td><td>" + childData.pName + "</td><td>" + childData.quantity + "</td><td>" + childData.expiry + "</td><td>" + childData.description + "</td><td>" + childData.heading + "</td></tr>"
  
        $(row).appendTo('#products');
        
        });
      }, {
         onlyOnce: true
      });
  };

}
