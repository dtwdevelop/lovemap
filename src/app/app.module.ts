import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {NgAutoCompleteModule} from "ng-auto-complete";
import {LovemapService} from './lovemap.service'
import {MyUserServService} from './ip.service'
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //NgbModule.forRoot(),
    //MatButtonModule,
    //MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3fiie1AoGkZxnfh4kdgnr0V2rS2BA2pY'
    }),
    NgAutoCompleteModule,
      Ng2AutoCompleteModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database


  ],
  providers: [LovemapService,MyUserServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
