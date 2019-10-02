import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-pack-details',
  templateUrl: 'pack-details.html',
})
export class PackDetailsPage {

  pack={};
  status={};
  
  constructor(public navCtrl: NavController, 
    private http: HttpClient,
    public navParams: NavParams) {
      this.pack = this.navParams.get('pack');

      if(this.pack['activo'] =='1'){
        this.status['inf'] = "ACTIVO";
      }
      else{
        this.status['inf'] = "INACTIVO";
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackDetailsPage');
  }

}
