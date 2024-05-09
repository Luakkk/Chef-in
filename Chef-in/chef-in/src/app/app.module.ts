// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { AppRoutingModule } from './app.routes';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    SearchComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule, // BrowserModule should only be imported once in the AppModule
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule // Import CommonModule instead of BrowserModule in feature modules
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
