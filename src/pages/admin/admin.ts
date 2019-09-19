import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { PayPage } from '../pay/pay';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  pay = PayPage;
  constructor(public navCtrl: NavController,
    private http: HttpClient,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  apiUrl = "http://gymdb:8080/";
  
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

  pagar(){
    console.log('pay');
    this.navCtrl.push(this.pay);
  }
}
