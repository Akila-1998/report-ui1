import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


import {MainScreenComponent} from "./main-screen/main-screen.component";


const appRoutes: Routes = [
  {
    path: '',
    component:MainScreenComponent
  },


];

//----------------------------------------

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
})

export class AppRoutes{}
