import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SaludoComponent } from './saludo.component';
import { SumaComponent } from './suma/suma.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
