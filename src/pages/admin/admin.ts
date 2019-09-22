import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
<<<<<<< HEAD
import { AddClientePage } from 'c:/Users/acer/Desktop/GymSystem/GymSystem/src/pages/add-cliente/add-cliente';
import { AllcustomersPage } from '../allcustomers/allcustomers';
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
=======
import { AddClientePage } from '../add-cliente/add-cliente';
import { ListcustomersPage } from '../listcustomers/listcustomers';
import { PayPage } from '../pay/pay';
import {ListPayPage} from '../list-pay/list-pay'
>>>>>>> 5f62258fca5f8c7dcb9f5d968b5ebc9f58e95091

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  addCliente = AddClientePage;
<<<<<<< HEAD
  listCustomers = AllcustomersPage;

=======
  listCustomers = ListcustomersPage;
  payPage = PayPage;
  listPayPage = ListPayPage;
>>>>>>> 5f62258fca5f8c7dcb9f5d968b5ebc9f58e95091



  constructor(public navCtrl: NavController,
    private http: HttpClient,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  apiUrl = "http://gymdb:8080/";
  agregarCLiente(){
    this.navCtrl.push(this.addCliente);




  }
  mostrar(){
    let funcion = { 
      'funcion': 'mostrar'  
    } 

    console.log(JSON.stringify(funcion));
    this.http.post(this.apiUrl, JSON.stringify(funcion))
    .subscribe(res=>{
      console.log(res);
    }
    );

  }
  
  allCustomers(){
      this.navCtrl.push(this.listCustomers);
  }

  pay(){
    this.navCtrl.push(this.payPage);
}

  listPay(){
    this.navCtrl.push(this.listPayPage);
  }

}