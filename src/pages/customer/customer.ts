import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {LoginPage } from '../login/login';

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  
  login = LoginPage;
  
  constructor(public navCtrl: NavController, 
    public menu:MenuController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }
  openMenu(){
    this.menu.open();
  }
  logout(){
    this.navCtrl.push(this.login);
  }
  
  
  closeMenu(){
    this.menu.close();
  }

}
