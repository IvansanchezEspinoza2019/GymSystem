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

import { AdminPage } from '../pages/admin/admin';
import { AddClientePage } from '../pages/add-cliente/add-cliente';
import { InfClientePage } from '../pages/inf-cliente/inf-cliente';
import { AllcustomersPage } from '../pages/allcustomers/allcustomers';
import { ModifclientePage } from '../pages/modifcliente/modifcliente';


//import { AddClientePage } from '../pages/add-cliente/add-cliente';
//import { ListcustomersPage } from '../pages/listcustomers/listcustomers';
//import { InfoClientePage } from '../pages/info-cliente/info-cliente';
//import { PayPage } from '../pages/pay/pay';
import { ListPayPage } from '../pages/list-pay/list-pay';
import { RecibePayPage } from '../pages/recibe-pay/recibe-pay';
import { AddAparatosPage } from '../pages/add-aparatos/add-aparatos';
import { AllaparatosPage } from '../pages/allaparatos/allaparatos';
import { ModifaparatoPage } from '../pages/modifaparato/modifaparato';
import { AddEmpleadoPage } from '../pages/add-empleado/add-empleado';
import { PackDetailsPage } from '../pages/pack-details/pack-details';
import { PackPage } from '../pages/pack/pack';
import { ListPackPage } from '../pages/list-pack/list-pack';
import { ModifyPackPage } from '../pages/modify-pack/modify-pack';
import { ModifyPayPage } from '../pages/modify-pay/modify-pay';
import { AllEmployeesPage } from '../pages/all-employees/all-employees';
import { InfoEmpleadoPage } from '../pages/info-empleado/info-empleado';
import { ModifEmpleadoPage } from '../pages/modif-empleado/modif-empleado';
import { AsistenciaListPage } from '../pages/asistencia-list/asistencia-list';
import { AsistenciaPage } from '../pages/asistencia/asistencia';
import { PayPage } from '../pages/pay/pay';
import { HistorialAparatosPage } from '../pages/historial-aparatos/historial-aparatos';
import { File } from '@ionic-native/file/ngx';
import { ReportesPage } from '../pages/reportes/reportes';
import { CustomerPayPage } from '../pages/customer-pay/customer-pay';
import { CustomerAsistPage } from '../pages/customer-asist/customer-asist';
import { CustomerRecibePage } from '../pages/customer-recibe/customer-recibe';
import { Asist_15Page } from '../pages/asist-15/asist-15';
import { Asist_7Page } from '../pages/asist-7/asist-7';
import { Asist_30Page } from '../pages/asist-30/asist-30';
import { AddProductoPage } from '../pages/add-producto/add-producto';
import { ModifProductPage } from '../pages/modif-product/modif-product';
import { AllProductsPage } from '../pages/all-products/all-products';
import { VentaPage } from '../pages/venta/venta';
import { AdminProfilePage } from '../pages/admin-profile/admin-profile';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CustomerPage,
    AdminPage,
    AddClientePage,
    InfClientePage,
    AllcustomersPage,
    ModifclientePage,
    PayPage,
    ListPayPage,
    RecibePayPage,
    AddAparatosPage,
    AllaparatosPage,
    ModifaparatoPage,
    AddEmpleadoPage,
    PackDetailsPage,
    PackPage,
    ListPackPage,
    ModifyPackPage,
    ModifyPayPage,
    AllEmployeesPage,
    InfoEmpleadoPage,
    ModifEmpleadoPage,
    AsistenciaListPage,
    AsistenciaPage,
    HistorialAparatosPage,
    ReportesPage,
    CustomerPayPage,
    CustomerAsistPage,
    CustomerRecibePage,
    Asist_15Page,
    Asist_7Page,
    Asist_30Page,
    AddProductoPage,
    ModifProductPage,
    AllProductsPage,
    VentaPage,
    AdminProfilePage,
    //AddClientePage,
    
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
    
    InfClientePage,
    AllcustomersPage,
    ModifclientePage,
    PayPage,
    ListPayPage,
    RecibePayPage,
    AddAparatosPage,
    AllaparatosPage,
    ModifaparatoPage,
    AddEmpleadoPage,
    PackDetailsPage,
    PackPage,
    ListPackPage,
    ModifyPackPage,
    ModifyPayPage,
    AllEmployeesPage,
    InfoEmpleadoPage,
    ModifEmpleadoPage,
    AsistenciaListPage,
    AsistenciaPage,
    HistorialAparatosPage,
    ReportesPage,
    CustomerPayPage,
    CustomerAsistPage,
    CustomerRecibePage,
    Asist_15Page,
    Asist_7Page,
    Asist_30Page,
    AddProductoPage,
    ModifProductPage,
    AllProductsPage,
    VentaPage,
    AdminProfilePage,
    AddClientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
