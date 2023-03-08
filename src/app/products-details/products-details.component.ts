import { Component } from '@angular/core';
import { CreateProductComponent } from '../create-product/create-product.component';
import { Database, set, ref, update, push, child, onValue } from '@angular/fire/database';
import * as $ from 'jquery';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

  constructor(public createProduct: CreateProductComponent,
    public Database: Database) {}
  
  getData(){
    $('#details td').remove();
    var rowNum = 0; 
    const dbRef = ref(this.Database, 'createProduct/');

    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
      //const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      rowNum += 1; 
      var row = "<tr><td>" + childData.pName + "</td><td>" + childData.quantity + "</td><td>" + childData.expiry + "</td><td>" + childData.description + "</td><td>" + childData.heading + "</td></tr>"

      $(row).appendTo('#details');
      
      });
    }, {
       onlyOnce: true
    });
};
}
