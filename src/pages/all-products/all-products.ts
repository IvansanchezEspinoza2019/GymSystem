import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModifProductPage } from '../modif-product/modif-product';
import { HttpClient }  from '@angular/common/http';
/**
 * Generated class for the AllProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-products',
  templateUrl: 'all-products.html',
})
export class AllProductsPage {

  //modificar producto
  modif_product= ModifProductPage;
  apiUrl="http://gymdb/";       // servidor
  

  constructor(public navCtrl: NavController, private http: HttpClient, public navParams: NavParams) {
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllProductsPage');
  }


}
