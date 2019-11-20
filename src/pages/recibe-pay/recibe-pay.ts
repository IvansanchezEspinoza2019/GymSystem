import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-recibe-pay',
  templateUrl: 'recibe-pay.html',
})
export class RecibePayPage {

  pago={};
  nota={};

  apiUrl ="http://gymdb/";

  constructor(public navCtrl: NavController, 
    private http: HttpClient,
    public navParams: NavParams) {

      this.pago = this.navParams.get('pago');
      console.log(this.pago);

      if(this.pago['monto'] == '0'){
        this.nota['info'] = "PAGO ELIMINADO";
      }
      else{
        this.nota['info'] = " ";
      }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecibePayPage');
  }

}
