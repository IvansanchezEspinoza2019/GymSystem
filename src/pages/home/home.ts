import { Component } from '@angular/core';
import { NavController, Row } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { AdminPage } from '../admin/admin';
import { PayPage } from '../pay/pay';
import { HttpClient }  from '@angular/common/http';

import { VentaPage } from '../venta/venta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  
  loginP = LoginPage;
  admin = AdminPage;
  payPage = PayPage;

  //venta
  venta = VentaPage;

  apiUrl ="http://gymdb/";

  constructor(public navCtrl: NavController,
    public http: HttpClient,
    ) {

  }
  
  //viejo
  
  datos={}
  server="http://gymdb/";
   mayus(e) {
    e.value = e.value.toUpperCase();
  }
  
  login(){
    console.log('contact');
    this.navCtrl.push(this.loginP);
   // this.navCtrl.push(this.venta,{ id: '1'});
    
  }


  
}
