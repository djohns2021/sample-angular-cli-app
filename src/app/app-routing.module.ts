import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from 'src/app/components/home/home.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
