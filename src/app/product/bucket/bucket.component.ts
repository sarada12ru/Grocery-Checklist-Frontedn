import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  host = environment.host;

  constructor( public appService: AppService, private apiService: ApiService ) { }

  ngOnInit(): void {

  }

  removeProduct( id, index ) {  

    this.apiService.removeProductFromBucket( id )
      .subscribe( result => {

        if( result['success'] ) {

          this.appService.bucketlist.splice( index, 1 );

          alert( result['message'] );

        }
        else {

          alert( result['message'] )

        }

      } )

  }

}
