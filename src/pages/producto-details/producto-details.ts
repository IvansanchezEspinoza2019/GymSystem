import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-producto-details',
  templateUrl: 'producto-details.html',
})

export class ProductoDetailsPage {
  
  product={};
  status={};

  constructor(public navCtrl: NavController, 
    private http: HttpClient,
    public navParams: NavParams) {
      this.product = this.navParams.get('producto');

      if(this.product['activo'] =='1'){
        this.status['inf'] = "ACTIVO";
      }
      else{
        this.status['inf'] = "INACTIVO";
      }

      console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoDetailsPage');
  }

}
