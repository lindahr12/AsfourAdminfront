import { Fournisseur} from '../../models/fournisseur.model';
import { FournisseurService } from '../../services/fournisseur.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../categorie/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent  implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: string[] = ['id','name','edit','delete'];
  dataSource!: MatTableDataSource<Fournisseur>;
  fournisseurs:Fournisseur[]=[];
  catid:string='';
  constructor(private fournisseurservice: FournisseurService , private dialog:MatDialog,private snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
   this.fournisseurservice.getallFour().subscribe((data)=>{
    this.fournisseurs = data
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(this.fournisseurs)
   } ,(error)=>{
     console.log(error)
   });  }
  /***Update product */
  updateProduct(cat:string){
    const DialogConfig = new MatDialogConfig();
    DialogConfig.disableClose = true;
    DialogConfig.autoFocus = true;
    DialogConfig.width ="60%";
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
    const snack = this.snackBar.open('you are going to delete an item','', {
      duration: 2000,
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.snackBar.open('saved', 'exit', {
          duration: 2000,
        });
      }
    });
  }

}


