import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Capiter/Components/Authentication/users/users.component';
import { LoginComponent } from './CapiterProject/Components/Authentication/login/login.component';

const routes: Routes = [
  {path:"Login" , component:LoginComponent},
  {path:"Users" , component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
