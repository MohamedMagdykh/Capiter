import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/CapiterProject/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;

  title = 'Login';
  formGroup: FormGroup|any;
  constructor(private formBuilder: FormBuilder,public toastr: ToastrService,private auth :AuthenticationService,public  router:  Router) { }
  
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }




  onSubmitLogin(post:any) {
  
    this.auth.LogIn(post.username,post.password).subscribe(res=>
      {
        this.toastr.success("Login")
        this.router.navigate(["/Users"]);
      
      }
      ,(err:any)=>
      {
        console.log(err.error.error)
        this.toastr.error(err.error.error)
      }
      )
  }

}
