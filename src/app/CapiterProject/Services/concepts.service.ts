import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConceptsService {

  constructor() { }
  public static Domain_Url="https://reqres.in/"
  // public static imageUrlProfile = "https://avicenna.pina-app.com/storage/";

   

  static getHeader() : HttpHeaders
  {
    let contentHeader =new HttpHeaders().set('Accept', 'application/json');
    return contentHeader 
  }
  static getHeaderwithContentTkn():HttpHeaders{
    console.log(localStorage.getItem('token'))
    const contentHeaders = new HttpHeaders().append('Authorization',"token");
    // contentHeaders.append('Authorization',localStorage.getItem('token'));
    return contentHeaders;
   }
}
