import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, ModalController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NuevoLugarPage} from "../pages/nuevo-lugar/nuevo-lugar";
import {LugaresService} from "../services/places.service";
import {HttpModule} from "@angular/http";
import {Geolocation} from "@ionic-native/geolocation";
import {LugarPage} from "../pages/lugar/lugar";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NuevoLugarPage,
    LugarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBFt6MSFMohozFOuPIVrs_1hZFwyqpyPTo'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NuevoLugarPage,
    LugarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresService,
    Storage,
    Geolocation,
    ModalController
  ]
})
export class AppModule {}
