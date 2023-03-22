import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor(private _products: ProductsService) {}

  @ViewChild('id') id!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('quantity') quantity!: ElementRef;
  isEditMode: boolean = false;
  editIndex!: number;
  dataTitle = this._products.getDataTitle();
  isFetching = false;
  products =[
    {
      id: null,
      name: null,
      quantity: null
    }
  ]


ngOnInit() {
  this.fetchProduct();
}

saveProduct() {
  this._products.saveProducts(this.products).subscribe(
    (response) => console.log(response),
    (err) => console.log(err)
  );
}

fetchProduct() {
  this.isFetching = true;
  this._products.fetchProducts().subscribe(
    (response) => {
      this.products = JSON.parse(JSON.stringify(response));
      this.isFetching = false;
    },
    (err) => console.log(err)
  );
}

addProduct(id: { value: any; }, name: { value: any; }, quantity: { value: any; }) {
  if(this.isEditMode) {
    this.products[this.editIndex] = {
      id: id.value,
      name: name.value,
      quantity: quantity.value
    }
    this.isEditMode = false;
    this.id.nativeElement.value = ''
    this.name.nativeElement.value = '';
    this.quantity.nativeElement.value = '';
    this.saveProduct();
  }
  else {
    this.products.push({
      id: id.value,
      name: name.value,
      quantity: quantity.value
    });
    this.id.nativeElement.value = ''
    this.name.nativeElement.value = '';
    this.quantity.nativeElement.value = '';
    this.saveProduct();
  }
}

onEditProduct(index: number) {
  this.isEditMode = true;
  this.editIndex = index;
  console.log(this.products[index]);
  this.id.nativeElement.value = this.products[index].id;
  this.name.nativeElement.value = this.products[index].name;
  this.quantity.nativeElement.value = this.products[index].quantity;
}

onDeleteProduct(id: number) {
  if(confirm('Do you want to delete this product?')) {
    this.products.splice(id,1);
    this.saveProduct();
  }
}


}
