import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { BucketComponent } from './bucket/bucket.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ProductComponent,
    ChecklistComponent,
    BucketComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
