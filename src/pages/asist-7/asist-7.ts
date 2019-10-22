import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-asist-7',
  templateUrl: 'asist-7.html',
})
export class Asist_7Page {

  apiUrl= "http://gymdb/";

  cliente = {}
  asistencia = []
  funcion = {}

  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public navParams: NavParams) {

    this.cliente = this.navParams.get('cliente');

      this.funcion={
        "funcion": "customerAsist7",
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
    console.log('ionViewDidLoad Asist_7Page');
  }

}
