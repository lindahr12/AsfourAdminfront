import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategorieService } from 'src/app/services/categorie.service';
import { Categorie } from '../../../models/categorie.model'
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})

export class AddCatComponent implements OnInit {
  categories: Categorie[] = [];
  form: any;


  constructor(private categorieservice: CategorieService ,private formbuilder: FormBuilder, private dialog:MatDialog,private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.categorieservice.getcategorie().subscribe((data)=>{
     this.categories = data
     console.log(this.categories)
    } ,(error)=>{
      console.log(error)
    });
    this.form = this.formbuilder.group(
      {
        nom: ['', [Validators.required]],
        parent: [''],
        propriete:['']

      }
    )
  }
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 4000,
      });
    }
    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.log(this.form.value);
      this.categorieservice.save(this.form.value).subscribe((data)=>{

        console.log(data)

       } ,(error)=>{
         console.log(error)
       });
    }

}
