import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  host = environment.host;
  
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    
    this.apiService.getAllProducts()
      .subscribe( result => {

        if( result['success'] ) {

          this.products = result['data'];

        }
        else {

          this.products = [];

        }

      }, ( err ) => {

        console.error( err );

      } )
    
  }

  removeProduct( id: any, index: any ) {

    this.apiService.removeProduct( id )
      .subscribe( result => {

        if( result['success'] ) {

          this.products.splice( index, 1 );

          alert( result['message'] )

        }
        else {

          alert( result['message'] )

        }

      }, ( err ) => {

        console.error( err );

      } )

  }

}
