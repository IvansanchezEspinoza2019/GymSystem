import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';

import { CustomerRecibePage } from '../customer-recibe/customer-recibe';

@IonicPage()
@Component({
  selector: 'page-customer-pay',
  templateUrl: 'customer-pay.html',
})

export class CustomerPayPage {

  apiUrl = "http://gymdb/";
  recibe = CustomerRecibePage;

  cliente = {}
  funcion = {}
  pagos = []
  items = []
  
  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public alert: AlertController,
    public navParams: NavParams) {

    this.cliente = this.navParams.get('cliente');
    console.log(this.cliente);

    this.funcion={
      "funcion": "getCostumerPays",
      "id": this.cliente['id_cliente']
    }

    this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        console.log(res);
        this.pagos = res['pagos'];

       this.initializeItems();
        
      }, error=>{
        console.log(JSON.stringify(error))
      });
  }

  initializeItems() {
    this.items = this.pagos;
  }

  getItems(ev: any) {

    this.initializeItems();
    console.log(ev.target.value);

    let val = ev.target.value;
    this.items = this.items.filter(pago => {
        console.log(JSON.stringify(JSON.stringify(pago.fecha_pago)));
        return  pago.fecha_pago.includes(val);
      });
    
    console.log(JSON.stringify(this.pagos));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPayPage');
  }

  recibo(pago) {
    
    this.navCtrl.push(this.recibe, {pago : pago, cliente : this.cliente});
  }

}
