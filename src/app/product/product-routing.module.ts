import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BucketComponent } from './bucket/bucket.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ProductComponent } from './product.component';


const routes: Routes = [
  {
    path:'',
    component: ProductComponent
  },
  {
    path:'checklist',
    component: ChecklistComponent
  },
  {
    path:'bucket',
    component: BucketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
