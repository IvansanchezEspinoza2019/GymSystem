import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
/**
 * Generated class for the InfClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inf-cliente',
  templateUrl: 'inf-cliente.html',
})
export class InfClientePage {
  cliente={};
  cuenta={};

  apiUrl ="http://gymdb/";

  constructor(public navCtrl: NavController,
    private http: HttpClient,
    public navParams: NavParams) {

    this.cliente = this.navParams.get('cliente');

    this.cuenta={
        'id_access': this.cliente['id_access'],
        'id_col': this.cliente['id_colonia'],
        'id_cp': this.cliente['id_cp'],
        'funcion': 'getForeignData'
    }

    console.log('cliente');
    

    this.http.post(this.apiUrl, JSON.stringify(this.cuenta))
    .subscribe(res=>{
      console.log(res); 


      this.cuenta['user']=res[0]['user'];
      this.cuenta['colonia']=res[1]['user'];
      this.cuenta['cp']=res[2]['user'];

     // console.log(JSON.stringify(this.cuenta));
    }, error=>{
      console.log(error);
    }
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfClientePage');
  }

}
