import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-admin-profile',
  templateUrl: 'admin-profile.html',
})
export class AdminProfilePage {

  admin = {};

  constructor(public navCtrl: NavController,
    private http: HttpClient,
    public navParams: NavParams) {
    this.admin = this.navParams.get('admin');
      console.log(this.admin);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminProfilePage');
  }

}
