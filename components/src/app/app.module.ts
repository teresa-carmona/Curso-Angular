import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SayHiComponent } from './say-hi/say-hi.component';
import { SayHi2Component } from './say-hi2/say-hi2.component';
import { SuperheroChildComponent } from './superhero-child/superhero-child.component';

@NgModule({
  declarations: [
    AppComponent,
    SayHiComponent,
    SayHi2Component,
    SuperheroChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
