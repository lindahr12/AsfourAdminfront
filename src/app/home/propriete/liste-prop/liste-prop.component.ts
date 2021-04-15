import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Propriete} from 'src/app/models/propreite.model';
import { ProprieteService } from 'src/app/services/propriete.service';
import { ConfirmationDialogComponent } from '../../categorie/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-liste-prop',
  templateUrl: './liste-prop.component.html',
  styleUrls: ['./liste-prop.component.css']
})
export class ListePropComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: string[] = ['id','unite','libelle','value_prop'];
  dataSource!: MatTableDataSource<Propriete>;
  proprieties:Propriete[]=[];
  catid:string='';
  constructor(private proprieteservice: ProprieteService , private dialog:MatDialog,private snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
   this.proprieteservice.getpropriete().subscribe((data)=>{
    this.proprieties = data
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(this.proprieties);
   } ,(error)=>{
     console.log(error)
   });  }
  /***Update product */
  updateProp(cat:string){
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

