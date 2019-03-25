import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
/*Incorporar la libreta de contactos, nuevo contacto y acerca de*/
import { LibretaContactosPage } from '../pages/libreta-contactos/libreta-contactos';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { NuevoContactoPage } from '../pages/nuevo-contacto/nuevo-contacto';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const fireBaseConfig={
  apiKey: "AIzaSyA8wzNOrGnhkYNywIuJaHtdiZIuavm59lU",
  authDomain: "agenda-microp-6.firebaseapp.com",
  databaseURL: "https://agenda-microp-6.firebaseio.com",
  projectId: "agenda-microp-6",
  storageBucket: "agenda-microp-6.appspot.com",
  messagingSenderId: "1043189111446"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LibretaContactosPage,
    AcercaDePage,
    NuevoContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LibretaContactosPage,
    AcercaDePage,
    NuevoContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider
  ]
})
export class AppModule {}

