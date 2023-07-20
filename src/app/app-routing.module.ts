import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Other routes go here

  // Lazy-loaded module route
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  // Redirect to a default route if no other route matches
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
