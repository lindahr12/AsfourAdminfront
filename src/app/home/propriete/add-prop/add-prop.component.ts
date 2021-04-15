import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Propriete} from 'src/app/models/propreite.model';
import { ProprieteService } from 'src/app/services/propriete.service';

@Component({
  selector: 'app-add-prop',
  templateUrl: './add-prop.component.html',
  styleUrls: ['./add-prop.component.css']
})
export class AddPropComponent implements OnInit {

  proprietes: Propriete[] = [];
  form: any;
  constructor(private proprieteservice: ProprieteService ,private formbuilder: FormBuilder, private dialog:MatDialog,private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.proprieteservice.getpropriete().subscribe((data)=>{
     this.proprietes = data
     console.log(this.proprietes)
    } ,(error)=>{
      console.log(error)
    });
    this.form = this.formbuilder.group(
      {
        unite: ['', [Validators.required]],
        libelle: [''],
        value_prop:['']
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
      this.proprieteservice.save(this.form.value).subscribe((data)=>{

        console.log(data)

       } ,(error)=>{
         console.log(error)
       });
    }

}

