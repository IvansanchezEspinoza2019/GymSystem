import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from 'C:/Users/acer/Desktop/GymSystem/GymSystem/src/pages/login/login'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {


  loginP = LoginPage;
  constructor(public navCtrl: NavController) {

  }

  login(){
    console.log('contact');
    this.navCtrl.push(this.loginP)
    
  }

}
