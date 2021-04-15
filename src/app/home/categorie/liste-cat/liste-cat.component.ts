import { Categorie } from './../../../models/categorie.model';
import { CategorieService } from './../../../services/categorie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-liste-cat',
  templateUrl: './liste-cat.component.html',
  styleUrls: ['./liste-cat.component.css']
})
export class ListeCatComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: string[] = ['id','name','edit','delete'];
  dataSource!: MatTableDataSource<Categorie>;
  categories:Categorie[]=[];
  catid:string='';
  constructor(private categorieservice: CategorieService , private dialog:MatDialog,private snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
   this.categorieservice.getcategorie().subscribe((data)=>{
    this.categories = data
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(this.categories)
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
