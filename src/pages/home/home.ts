import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { AdminPage } from '../admin/admin';
<<<<<<< HEAD
import { InfClientePage   } from '../inf-cliente/inf-cliente';
import { HttpClient }  from '@angular/common/http';
=======
import { PayPage } from '../pay/pay'
>>>>>>> 5f62258fca5f8c7dcb9f5d968b5ebc9f58e95091

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {


  loginP = LoginPage;
  admin = AdminPage;
<<<<<<< HEAD
  ju = InfClientePage;


  server="http://gymdb/";
  constructor(public navCtrl: NavController,
    private http: HttpClient) {
=======
  payPage = PayPage;
  constructor(public navCtrl: NavController) {
>>>>>>> 5f62258fca5f8c7dcb9f5d968b5ebc9f58e95091

  }
  datos={}

   mayus(e) {
    e.value = e.value.toUpperCase();
  }
  aceptar(){
    console.log(JSON.stringify(this.datos));
    this.navCtrl.push(this.ju);
  }
  login(){
    console.log('contact');
    this.navCtrl.push(this.admin);
    
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
