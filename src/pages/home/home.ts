import { Component } from '@angular/core';
import { NavController, Row } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { AdminPage } from '../admin/admin';
import { PayPage } from '../pay/pay';
import { HttpClient }  from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';

import  pdfMake  from 'pdfmake/build/pdfMake';
import  pdfFonts  from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  
  loginP = LoginPage;
  admin = AdminPage;
  payPage = PayPage;

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
    
  }


  
}
