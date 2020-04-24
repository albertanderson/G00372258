import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {IonicStorageModule} from '@ionic/storage'; // Storage import
import {FormsModule} from '@angular/forms'; // For two way data binding
import { Flashlight } from '@ionic-native/flashlight/ngx';// Import for flashlight


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,//imports that can be used from angular
  HttpClientModule,IonicStorageModule.forRoot(),FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,// Has the ability to use flashlight
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
