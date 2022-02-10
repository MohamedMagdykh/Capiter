import { Component } from '@angular/core';
import { AuthenticationService } from './CapiterProject/Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'capiter';
  public isAuthenticated:boolean = false;
  constructor(private auth :AuthenticationService)
  {}
  ngOnInit(): void {
   console.log(this.auth.isLoggedIn)
  }
 
  ngDoCheck()	
{ this.isAuthenticated=this.auth.isLoggedIn}


  public logout(): void {
  localStorage.removeItem("token")
  }
}
