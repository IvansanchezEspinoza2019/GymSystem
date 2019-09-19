import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})

export class PayPage {
  paquetes: any;
  usuario: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http:HttpClient,
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad PayPage');
    this.getPaquete();
  }

  apiUrl="http://gymdb:8080"
  datos={}
  pago={}

  getPaquete(){
    let funcion={
      'funcion':'getPaquete'
    };
    this.http.post(this.apiUrl, JSON.stringify(funcion))
    .subscribe(res=>{
      console.log(res);
      this.paquetes=res;
    });
  }

  selectPaquete(paquete){
    console.log(paquete);
    //document.getElementById("pack").setAttribute('value',paquete.id);
    document.getElementsByTagName("input")[2].value=paquete.id;
    document.getElementsByTagName("input")[3].value=paquete.precio;
  }

  getUsuario(){

    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Ingresa nombre correcto del usuario',
      buttons: ['OK']
    });

    let alertInformation = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Solo se puede ver informacion de clientes',
      buttons: ['OK']
    });


    this.datos['funcion']='getUsuario'; //funcion logearse

    console.log(JSON.stringify(this.datos));
    this.http.post(this.apiUrl, JSON.stringify(this.datos))
    .subscribe(res=>{
    console.log(res);
      if(res == "-1"){
       alert.present();
        
      }
      else{
        console.log(res); // ya tiene los datos
        if(res['tipo']=="1"){

          let alertUser = this.alertCtrl.create({
            title: res['id'],
            subTitle: res['user'],
            buttons: ['OK']
          });

          alertUser.present();
        }
        else if(res['tipo']=="2"){
          alertInformation.present();
        }
        else if(res['tipo']=="3"){
          alertInformation.present();          }
        } 
    }
    );
  }

}
