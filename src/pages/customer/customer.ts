import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { CustomerPayPage } from '../customer-pay/customer-pay';
import { CustomerAsistPage } from '../customer-asist/customer-asist'

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  
pay = CustomerPayPage;
asist = CustomerAsistPage;

cliente = {}
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
     
      this.cliente = this.navParams.get('cliente');
      console.log(this.cliente);

      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }
  
  pagos(){
    this.navCtrl.push(this.pay, {cliente : this.cliente});
  }

  asistencias(){
    this.navCtrl.push(this.asist, {cliente : this.cliente});
  }
  

}
