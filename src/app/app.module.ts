import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Employee/search/search.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/Router';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceService,
    Router
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
