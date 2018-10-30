import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceConsumerComponent } from './service-consumer/service-consumer.component';
import { DiceService } from './dice-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
