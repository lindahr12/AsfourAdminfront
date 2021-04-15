import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprieteRoutingModule } from './propriete-routing.module';
import { AddPropComponent } from './add-prop/add-prop.component';
import { ListePropComponent } from './liste-prop/liste-prop.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [
    AddPropComponent,
    ListePropComponent
  ],
  imports: [
    CommonModule,
    ProprieteRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProprieteModule { }
