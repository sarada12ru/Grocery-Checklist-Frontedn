import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  allProducts: any;
  host = environment.host;

  constructor(
    private apiService: ApiService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    
    this.getProductList();

  }

  getProductList() {

    this.apiService.getAllProducts()
      .subscribe( result => {
        
        if( result['success'] ) {

          this.allProducts = result['data'];

        }
        else {

          this.allProducts = [];

          alert( result['message'] )

        }

      }, ( err ) => {

        console.error( err )

      } )

  }

  addToChecklist( item: any ) {

    this.apiService.addProductToChecklist( item )
      .subscribe( result => {

        if( result['success'] ) {

          this.appService.addToChecklist( item );

        }
        else {

          alert( result['message'] )

        }

      }, ( err ) => {

        console.error( err )

      } )

  }

  addToBucket( item ) {

    this.apiService.addProductToBucket( item )
    .subscribe( result => {

      if( result['success'] ) {

        this.appService.addToBucketList( item );

      }
      else {

        alert( result['message'] )

      }

    }, ( err ) => {

      console.error( err )

    } )

  }

}
