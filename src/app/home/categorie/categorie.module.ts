import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { AddCatComponent } from './add-cat/add-cat.component';
import { ListeCatComponent } from './liste-cat/liste-cat.component';
import { MaterialModule } from 'src/app/material-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';


@NgModule({
  declarations: [
    AddCatComponent,
    ListeCatComponent,
    ConfirmationDialogComponent,
    UpdateCatComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CategorieModule { }
