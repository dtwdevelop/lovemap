import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import {LovemapService} from './lovemap.service'
import {MyUserServService} from './ip.service'
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3fiie1AoGkZxnfh4kdgnr0V2rS2BA2pY'
    }),
    Ng2AutoCompleteModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
      RouterModule,
  ],
  providers: [LovemapService , MyUserServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
