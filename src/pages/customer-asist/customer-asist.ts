import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Asist_7Page } from '../asist-7/asist-7';
import { Asist_15Page } from '../asist-15/asist-15';
import { Asist_30Page } from '../asist-30/asist-30';

@IonicPage()
@Component({
  selector: 'page-customer-asist',
  templateUrl: 'customer-asist.html',
})
export class CustomerAsistPage {

  cliente = {}

  semana = Asist_7Page;
  semanas = Asist_15Page;
  mes = Asist_30Page; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cliente = this.navParams.get('cliente');
    console.log(this.cliente);

  }

  reportSemana() {
    
    this.navCtrl.push(this.semana, { cliente : this.cliente});
  }

  reportSemanas() {
    
    this.navCtrl.push(this.semanas, { cliente : this.cliente});
  }

  reportMes() {
    
    this.navCtrl.push(this.mes, { cliente : this.cliente});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerAsistPage');
  }

}
