import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { AddClientePage } from 'c:/Users/acer/Desktop/GymSystem/GymSystem/src/pages/add-cliente/add-cliente';
import { ListcustomersPage } from 'c:/Users/acer/Desktop/GymSystem/GymSystem/src/pages/listcustomers/listcustomers';
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
  addCliente = AddClientePage;
  listCustomers = ListcustomersPage;




  constructor(public navCtrl: NavController,
    private http: HttpClient,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  apiUrl = "http://gymdb/";
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

}