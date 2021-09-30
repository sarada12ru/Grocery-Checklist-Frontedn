import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host = environment.host + 'api';

  constructor(private httpClient: HttpClient) { }

  //Category Module

  getCategories() {

    return this.httpClient.get( `${ this.host }/v1/category/list` );

  }

  //Product Module
  
  getAllProducts() {

    return this.httpClient.get( `${ this.host }/v1/product/list` );

  }

  addNewProduct( data: any ) {

    return this.httpClient.post( `${ this.host }/v1/product/add`, data );

  }

  removeProduct( id: any ) {

    return this.httpClient.delete( `${ this.host }/v1/product/remove/${ id }` )

  }

  uploadImage( formData: any ) {

    return this.httpClient.post( `${ this.host }/v1/product/upload/image`, formData);

  }

  //Bucket Module
  
  getBucketList() {

    let userId = 1;

    return this.httpClient.get( `${ this.host }/v1/bucket/list/${ userId }` );

  }

  addProductToBucket( item: any ) {

    let data = {

      "bucketProductDetails" : { 

        productId: item.id

      },
      userId : 1

    }

    return this.httpClient.post( `${ this.host }/v1/bucket/add`, data );

  }

  removeProductFromBucket( id: any ) {

    let userId = 1;

    return this.httpClient.delete( `${ this.host }/v1/bucket/remove/${ id }/${ userId }` );

  }

  //Checklist Module

  getCheckList() {

    let userId = 1;

    return this.httpClient.get( `${ this.host }/v1/checklist/list/${ userId }` );

  }

  addProductToChecklist( item: any ) {

    let data = {

      "checklistProductDetails" : { 

        productId: item.id

      },
      userId : 1

    }

    return this.httpClient.post( `${ this.host }/v1/checklist/add`, data );

  }

  removeProductFromChecklist( id: any ) {

    let userId = 1;

    return this.httpClient.delete( `${ this.host }/v1/checklist/remove/${ id }/${ userId }` );

  }

  //Categories Module

  getCategoriesList() {

    return this.httpClient.get( `${ this.host }/v1/categories/list` );

  }

  //Common Module

  getChecklistAndBucketlist() {

    const userId = 1;

    return this.httpClient.get( `${ this.host }/v1/common/${ userId }` );

  }

}
