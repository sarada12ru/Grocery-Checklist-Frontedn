import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  host = environment.host;

  constructor( public appService: AppService, private apiService: ApiService ) { }

  ngOnInit(): void {


  }

  removeProduct( id, index ) {

    console.log( id, index )

    this.apiService.removeProductFromChecklist( id )
      .subscribe( result => {

        if( result['success'] ) {

          this.appService.checklist.splice( index, 1 );

          alert( result['message'] );

        }
        else {

          alert( result['message'] )

        }

      } )

  }

}
