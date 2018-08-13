import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FridgeMonitorPage } from '../pages/monitor/monitor';
import { FilterPage } from '../pages/filter/filter';
import { StatusPage } from '../pages/status/status';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { keys } from '../config/firebase';
import { GlobalStateProvider } from '../providers/global-state/global-state';

import { SelectSearchableModule } from 'ionic-select-searchable';
import { GroceryProvider } from '../providers/grocery/grocery';

@NgModule({
  declarations: [
    MyApp,
    FridgeMonitorPage,
    FilterPage,
    StatusPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'ios',
      pageTransition: 'ios-transition',
      tabsPlacement: 'bottom'
    }),
    SelectSearchableModule,
    AngularFireModule.initializeApp(keys),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FridgeMonitorPage,
    FilterPage,
    StatusPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GlobalStateProvider,
    GroceryProvider
  ]
})
export class AppModule { }
