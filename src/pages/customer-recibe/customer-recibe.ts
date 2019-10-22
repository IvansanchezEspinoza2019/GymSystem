import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-customer-recibe',
  templateUrl: 'customer-recibe.html',
})
export class CustomerRecibePage {

  pago = {}
  cliente = {}
  nota = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pago= this.navParams.get('pago');
    console.log(this.pago);

    if(this.pago['monto'] == '0'){
      this.nota['info'] = "PAGO ELIMINADO";
    }
    else{
      this.nota['info'] = " ";
    }

    this.cliente= this.navParams.get('cliente');
    console.log(this.cliente);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerRecibePage');
  }

}
