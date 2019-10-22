import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-asist-15',
  templateUrl: 'asist-15.html',
})
export class Asist_15Page {

  apiUrl= "http://gymdb/";

  cliente = {}
  asistencia = []
  funcion = {}

  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public navParams: NavParams) {

    this.cliente = this.navParams.get('cliente');

      this.funcion={
        "funcion": "customerAsist15",
        "id": this.cliente['id_cliente']
      }

    this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        console.log(res);
        this.asistencia = res['asistencia'];
        
        console.log(JSON.stringify(this.asistencia));

      }, error=>{
        console.log(JSON.stringify(error))
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Asist_15Page');
  }

}
