import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import {RouterModule} from "@angular/router";
import { AppRoutes } from "./app.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
