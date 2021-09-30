import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  categories:any = [];
  imageLink: any = '';

  pAddForm = new FormGroup({
    productName: new FormControl('', [Validators.required,Validators.minLength(3)]),
    shortDescription: new FormControl('', [Validators.required,Validators.minLength(5)]),
    description: new FormControl('', [Validators.required,Validators.minLength(10)]),
    origionalPrice: new FormControl('', [Validators.required]),
    netSellingPrice: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  })

  constructor( private apiService: ApiService, private router: Router ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {

    this.apiService.getCategories()
      .subscribe( result => {

        if( result['success'] ) {

          this.categories = result['data'];

        }
        else {

          this.categories = [];
          alert( result['data'] );

        }

      }, ( err ) => {

        console.error( err )

      } )

  }

  get f(){
    return this.pAddForm.controls;
  }

  onSubmit(){

    if(this.pAddForm.status == 'VALID'){
      
      console.log(this.pAddForm.value);

      let data = {

        productDetails : this.pAddForm.value

      }

      this.apiService.addNewProduct( data )
        .subscribe( result => {

          if( result['success'] ) {

            alert( 'Product Added Successfully' );

            this.router.navigate( ['/admin/products'] )

          }
          else {

            alert( result['message'] )

          }

        }, ( err ) => {

          console.error( err );

        } )

    }
    else{
      alert("Please fill up the form correctly");
    }

  }

  uploadImage( event: any ) {

    if (event.target.files.length > 0) {
     
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);

      this.apiService.uploadImage( formData )
        .subscribe( result => {

          if( result['success'] ) {

            this.pAddForm.controls['image'].setValue( result['data'].imgUrl );

          }
          else {

            alert( result['message'] );

          }

        } )

    }

  }

}
