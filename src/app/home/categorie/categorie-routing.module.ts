import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatComponent } from './add-cat/add-cat.component';
import { ListeCatComponent } from './liste-cat/liste-cat.component';

const routes: Routes = [
  { path:'', component: ListeCatComponent  },
  { path:'add-cat', component: AddCatComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
