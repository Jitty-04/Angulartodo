import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { ViewtodoComponent } from './viewtodo/viewtodo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRouter:Routes=[
  {
    path:"",
    component:AddtodoComponent
  },
  {
    path:"view",
    component:ViewtodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    ViewtodoComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
