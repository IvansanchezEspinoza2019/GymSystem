import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CustomerPayPage } from '../customer-pay/customer-pay';
import { CustomerAsistPage } from '../customer-asist/customer-asist'
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  
pay = CustomerPayPage;
asist = CustomerAsistPage;
login = LoginPage;

cliente = {}
  
  constructor(public navCtrl: NavController, 
    public alert: AlertController,
    public navParams: NavParams) {
     
      this.cliente = this.navParams.get('cliente');
      console.log(this.cliente);

      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

  exit(){

    let exit= this.alert.create({
    title: 'SALIR',
    message: '¿Seguro que desea cerrar sesion?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: data=>{
          console.log("Operacion cancelada");
        }
      },
      {
        text: 'Aceptar',
        role: 'aceptar',
        handler: data=>{
          this.logout()
        }
      }
    ]
  });
    exit.present();
  }

  logout(){
    this.navCtrl.push(this.login);
  }
  
  pagos(){
    this.navCtrl.push(this.pay, {cliente : this.cliente});
  }

  asistencias(){
    this.navCtrl.push(this.asist, {cliente : this.cliente});
  }
  

}
