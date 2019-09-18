import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { AdminPage } from '../admin/admin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {


  loginP = LoginPage;
  admin = AdminPage;
  constructor(public navCtrl: NavController) {

  }
  datos={}

   mayus(e) {
    e.value = e.value.toUpperCase();
  }
  aceptar(){
    console.log(JSON.stringify(this.datos));
  }
  login(){
    console.log('contact');
    this.navCtrl.push(this.loginP)
    
  }

}
