import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { AdminPage } from '../admin/admin';
import { PayPage } from '../pay/pay';
import { HttpClient }  from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {


  loginP = LoginPage;
  admin = AdminPage;
  payPage = PayPage;
  constructor(public navCtrl: NavController,
    public http: HttpClient) {

  }
  datos={}
  server="http://gymdb/";
   mayus(e) {
    e.value = e.value.toUpperCase();
  }
  
  login(){
    console.log('contact');
    this.navCtrl.push(this.loginP);
    
  }


  sendData(){
    let funcion={
        'funcion': 'hola'
    }
    console.log("hola");
    this.http.post(this.server, JSON.stringify(JSON.stringify(funcion)))
    .subscribe(res=>{
      console.log(res); 
    },error=>{
      console.log(error);
    }
    );

  }
}
