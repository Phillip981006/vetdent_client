import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { BoardComponent } from './board/board.component';



const routes: Routes = [
  { path: '' , component:LandingComponent },
  { path: 'login_register' , component:AuthComponent },
  { path: 'board' , component:BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
