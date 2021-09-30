import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  checklist: any = [];
  bucketlist: any = [];

  constructor() { }

  addToChecklist( item ) {

    this.checklist.push( item );

  }
  
  addToBucketList( item ) {

    this.bucketlist.push( item );

  }

}
