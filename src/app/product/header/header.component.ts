import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public appService: AppService, private apiService: ApiService ) { }

  ngOnInit(): void {
    
    this.getCommonData();

  }

  getCommonData() {

    this.apiService.getChecklistAndBucketlist()
      .subscribe( result => {

        if( result['success'] ) {

          let data = result['data'];

          this.appService.bucketlist = data['bucketList'];
          this.appService.checklist = data['checklist'];

        }
        else {

          alert( result['message'] )

        }

      }, ( err ) => {

        console.error( err )

      } )

  }

}
