import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
/**
 * Generated class for the InfClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inf-cliente',
  templateUrl: 'inf-cliente.html',
})
export class InfClientePage {
  cliente={};
  cuenta={};

  apiUrl ="http://gymdb/";

  constructor(public navCtrl: NavController,
    private http: HttpClient,
    public navParams: NavParams) {

    this.cliente = this.navParams.get('cliente');
    console.log(this.cliente);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfClientePage');
  }

}
