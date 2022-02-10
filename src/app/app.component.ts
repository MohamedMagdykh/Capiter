import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './CapiterProject/Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'capiter';
  public isAuthenticated:boolean = false;
  constructor(private auth :AuthenticationService,public  router:  Router)
  {}
  ngOnInit(): void {
   console.log(this.auth.isLoggedIn)
  }
 
  ngDoCheck()	
{ this.isAuthenticated=this.auth.isLoggedIn}


  public logout(): void {
  localStorage.removeItem("token")
  this.router.navigate(["/Login"]);
  }
}
