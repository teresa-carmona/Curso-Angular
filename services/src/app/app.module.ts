import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceConsumerComponent } from './service-consumer/service-consumer.component';
import { DiceService } from './dice-service.service';
import { LicencePlateAuthorizationService } from './licencePlateAuthorization.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServiceConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DiceService, LicencePlateAuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
