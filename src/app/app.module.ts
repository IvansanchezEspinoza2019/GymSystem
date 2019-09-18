import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CustomerPage } from '../pages/customer/customer';

import { EmployeePage } from '../pages/employee/employee';
import { AdminPage } from '../pages/admin/admin';
import { AddClientePage } from 'c:/Users/acer/Desktop/GymSystem/GymSystem/src/pages/add-cliente/add-cliente';
import { ListcustomersPage } from 'c:/Users/acer/Desktop/GymSystem/GymSystem/src/pages/listcustomers/listcustomers';
import { InfoClientePage } from '../pages/info-cliente/info-cliente';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CustomerPage,
    AdminPage,
    EmployeePage,
    AddClientePage,
    InfoClientePage,
    ListcustomersPage,
    
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CustomerPage,
    AdminPage,
    EmployeePage,
    AddClientePage,
    InfoClientePage,
    ListcustomersPage,
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
