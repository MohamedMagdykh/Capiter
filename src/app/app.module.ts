import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMatrialModule } from './CapiterProject/Moduls/angular-matrial/angular-matrial.module';
import { LoginComponent } from './CapiterProject/Components/Authentication/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    AngularMatrialModule,
    ReactiveFormsModule ,
    HttpClientModule,
    ToastrModule.forRoot()
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
