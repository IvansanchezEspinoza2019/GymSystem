import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-recibe-pay',
  templateUrl: 'recibe-pay.html',
})
export class RecibePayPage {

  pago={};
  info_paquete={};
  info_cliente={};
  cuenta={};
  nota={};

  apiUrl ="http://gymdb/";

  constructor(public navCtrl: NavController, 
    private http: HttpClient,
    public navParams: NavParams) {

      this.pago = this.navParams.get('pago');

      this.info_paquete={
        'id_paquete': this.pago['id_paquete'],
        'funcion': 'getRecibe'
      }

      this.info_cliente={
        'id_cliente': this.pago['id_cliente'],
        'funcion': 'getClientePay'
      }

      if(this.pago['monto'] == '0'){
        this.nota['info'] = "PAGO ELIMINADO";
      }
      else{
        this.nota['info'] = " ";
      }

      //Informacion del paquete
      this.http.post(this.apiUrl, JSON.stringify(this.info_paquete))
    .subscribe(res=>{
      console.log(res); 

      this.info_paquete['nombre'] = res[0]['nombre'];
      this.info_paquete['descripcion'] = res[0]['descripcion'];
      this.info_paquete['precio'] = res[0]['precio'];

    }, error=>{
      console.log(error);
    }
    );

    //Informacion del cliente
    this.http.post(this.apiUrl, JSON.stringify(this.info_cliente))
    .subscribe(res=>{
      console.log(res); 

      this.info_cliente['nombre'] = res[0]['nombre'];
      this.info_cliente['apellido_p'] = res[0]['apellido_p'];
      this.info_cliente['apellido_m'] = res[0]['apellido_m'];
      this.info_cliente['id_cp'] = res[0]['id_cp'];
      this.info_cliente['id_colonia'] = res[0]['id_colonia'];
      this.info_cliente['calle'] = res[0]['calle'];
      this.info_cliente['numero_calle'] = res[0]['numero_calle'];
      this.info_cliente['numero_interior'] = res[0]['numero_interior'];
      this.info_cliente['telefono'] = res[0]['telefono'];

      this.cuenta={
        'id_access': this.pago['id_cliente'],
        'id_col': this.info_cliente['id_cp'],
        'id_cp': this.info_cliente['id_colonia'],
        'funcion': 'getForeignData'
      }

      //Informacion contenida en otras tablas
      this.http.post(this.apiUrl, JSON.stringify(this.cuenta))
      .subscribe(res=>{
      console.log(res); 

      this.cuenta['user']=res[0]['user'];
      this.cuenta['colonia']=res[1]['user'];
      this.cuenta['cp']=res[2]['user'];

      }, error=>{
      console.log(error);
      }
      );

    }, error=>{
      console.log(error);
    }
    );

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecibePayPage');
  }

}
