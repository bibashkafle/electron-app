import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestScenarioService } from './test-scenario.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule
  ],
  providers: [TestScenarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
