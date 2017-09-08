import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route } from './app.routing';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './slider/slider.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
    SliderComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule, Route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
