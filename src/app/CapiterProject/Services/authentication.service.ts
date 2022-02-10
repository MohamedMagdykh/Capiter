import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ConceptsService } from './concepts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,private router:Router) { }
   LogIn(mail:any,pass:any) :Observable<any>
  {
    var data = {
      "email": mail,
      "password":pass
    }
    return this.http.post(ConceptsService.Domain_Url + 'api/login',data,
    {
       headers:ConceptsService.getHeader()
    }).pipe(
      map((res:any)=>
        {
          
          localStorage.setItem('token',res)
          this.isLoggedIn
        }
       
         ),
        catchError((error: Response) => {
          return throwError(error);
        })
       
    )
  }

  get isLoggedIn(): boolean {
    const  token  =  localStorage.getItem('token')
  
    if(token!=null){
      return true;
    }
    else{
      return false;
    }
    
  }
}
