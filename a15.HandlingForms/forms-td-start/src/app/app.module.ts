import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgForm } from '@angular/forms';


import { AppComponent } from './app.component';
import { ToyComponent } from './toys/toy/toy.component';
import { ToysComponent } from './toys/toys.component';

const appRoutes: Routes = [
  { path: '', component: ToyComponent },
  { path: 'NewToy', component: ToysComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ToyComponent,
    ToysComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
