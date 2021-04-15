import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropComponent } from './add-prop/add-prop.component';
import { ListePropComponent } from './liste-prop/liste-prop.component';

const routes: Routes = [
  {path:'', component: ListePropComponent },
  {path:'add', component: AddPropComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprieteRoutingModule { }
