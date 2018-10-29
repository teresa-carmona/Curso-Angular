import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SaludoComponent } from './saludo.component';
import { SumaComponent } from './suma/suma.component';
import { DomComponent } from './dom/dom.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    SumaComponent,
    DomComponent,
    HeroListComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
