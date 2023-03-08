import { Component } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  
  constructor(public Database: Database) {}

  public pName!: string;
  public expiry!: Date;
  public quantity!: number;
  public heading!: string;
  public subheading!: string;
  public description!: string

  createProd(form: NgForm, value: any) {
    set(ref(this.Database, 'createProduct/' + value.pName), {
      pName: value.pName,
      expiry: value.expiry,
      quantity: value.quantity,
      heading: value.heading,
      subheading: value.subheading,
      description: value.description
    });
    console.log('database updated!');
    form.reset();
  }
}
