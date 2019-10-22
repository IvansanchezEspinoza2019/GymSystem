import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
/**
 * Generated class for the HistorialAparatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial-aparatos',
  templateUrl: 'historial-aparatos.html',
})
export class HistorialAparatosPage {
  apiUrl="http://gymdb/";


  historial=[];   // lista que contendrá todo el historial de modificaciones de aparatos 

  constructor(public navCtrl: NavController,private http: HttpClient, public navParams: NavParams) {
    this.getHistorial();   // obtiene todos los registros de la base de datos
  }

  getHistorial(){
    let funcion={
      'funcion': 'getHistorial'
    }
    this.http.post(this.apiUrl,JSON.stringify(funcion))
    .subscribe(res=>{console.log(res); this.historial=res['historial']; console.log(this.historial);},error=>{console.log(error)});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialAparatosPage');
  }

}
