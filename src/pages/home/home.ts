import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { AdminPage } from '../admin/admin';
import { InfClientePage   } from '../inf-cliente/inf-cliente';
import { HttpClient }  from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {


  loginP = LoginPage;
  admin = AdminPage;
  ju = InfClientePage;


  server="http://gymdb/";
  constructor(public navCtrl: NavController,
    private http: HttpClient) {

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
    this.navCtrl.push(this.loginP)
    
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
