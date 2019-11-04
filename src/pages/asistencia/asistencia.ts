import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';

import { AsistenciaListPage } from '../asistencia-list/asistencia-list'


@IonicPage()
@Component({
  selector: 'page-asistencia',
  templateUrl: 'asistencia.html',
})
export class AsistenciaPage {

  constructor(public navCtrl: NavController,
    private http: HttpClient,
    public alerta:AlertController, public navParams: NavParams) {
  }

  apiUrl="http://gymdb/"
  datos={}
  info={}
  nota=""

  lista = AsistenciaListPage;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AsistenciaPage');
  }

  asist() {

    let invalido= this.alerta.create({
      title: 'ERROR',
      message: 'Cliente inexistente',
      buttons: ['OK']     
    });

    let inactivo= this.alerta.create({
      title: 'ERROR',
      message: 'Cliente inactivo',
      buttons: ['OK']     
    });

    let paquete= this.alerta.create({
      title: 'ERROR',
      message: 'Cliente no ha comprado un paquete',
      buttons: ['OK']     
    });

    let exito= this.alerta.create({
      title: 'EXITO',
      message: this.nota,
      buttons: ['OK']     
    });
    
    let funcion = { 
      'funcion': 'asistencia',
      'id_usuario': this.datos['id']
    } 
    
    console.log(JSON.stringify(funcion));
    this.http.post(this.apiUrl, JSON.stringify(funcion))
    .subscribe(res=>{

      this.info = res;

      if(this.info== "Cliente Invalido"){
        this.datos['usuario'] = "";
        this.datos['activo'] = "";
        this.datos['vencimiento'] = "";
        
        invalido.present();
      }

      else if(this.info == "Cliente Inactivo"){
        this.datos['usuario'] = "";
        this.datos['activo'] = "";
        this.datos['vencimiento'] = "";
        
        inactivo.present();
      }

      else if(this.info == "Cliente Pago"){
        this.datos['usuario'] = "";
        this.datos['activo'] = "";
        this.datos['vencimiento'] = "";
        
        paquete.present();
      }

      else{

        this.datos['usuario'] = this.info[0]['id_cliente'];
        this.datos['activo'] = "Activo";
        this.datos['vencimiento'] = this.info[0]['fecha_vencimiento'];

        this.nota = "Proxima fecha de vencimiento: " + this.datos['vencimiento'] ;

        exito.present();

      }
  
      console.log(res); 
    }
    );

    
  }

  list(){
    this.navCtrl.push(this.lista);
  }
 
}
