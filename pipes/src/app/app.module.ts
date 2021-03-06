import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TimePipe } from './app.pipe.time';
import { CapitalizePipe } from './capitalize.pipe';

import { CapitalizeService } from './capitalize.service';

@NgModule({
  declarations: [
    AppComponent,
    TimePipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CapitalizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
