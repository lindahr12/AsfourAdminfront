import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseursComponent } from './home/fournisseurs/fournisseurs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '' ,component: HomeComponent ,
  children:
  [
    { path: 'fourni', component: FournisseursComponent },
    { path: 'cat', loadChildren: () => import('./home/categorie/categorie.module').then(m => m.CategorieModule) },
    { path: 'prop', loadChildren: () => import('./home/propriete/propriete.module').then(m => m.ProprieteModule) },
  ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
