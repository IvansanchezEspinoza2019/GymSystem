import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController } from 'ionic-angular';
import { ListPayPage } from '../list-pay/list-pay';


@IonicPage()
@Component({
  selector: 'page-modify-pay',
  templateUrl: 'modify-pay.html',
})
export class ModifyPayPage {

  apiUrl= "http://gymdb/";
  clientes=[];
  items=[];
  paquetes:any;

  pago={};
  comprobar={};
  nombre='';

  list = ListPayPage;

  funcion={
    "funcion": "getAllCustomers"
  }

  @ViewChild('myForm') formValues;
  myForm: FormGroup;


  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public actionsheet: ActionSheetController,
    public alert:AlertController,
    public cl: FormBuilder,
    public navParams: NavParams) {

      this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        console.log(res);
        this.clientes = res['clientes'];

        this.paquete();
        
        console.log(JSON.stringify(this.clientes));

      }, error=>{
        console.log(JSON.stringify(error))
      });

      this.pago = this.navParams.get('pago');
      console.log(this.pago);

      this.paqueteNombre();

      this.myForm = this.cl.group({
        id_usuario: [this.pago['id_cliente'], [Validators.required]],
        paquete: [this.pago['id'], [Validators.required]],
        modo:  [this.pago['modo'], [Validators.required]],
        monto:  [this.pago['monto'], [Validators.required]]
      });

      this.comprobar={
        "id_usuario": this.pago['id_cliente'],
        "paquete": this.pago['id'],
        "modo": this.pago['modo'],
        "monto": this.pago['monto']
      }

    }

  initializeItems() {
    this.items = this.clientes;
  }

  paquete(){

    let funcion={
      "funcion": "getPaquete"
    }

    this.http.post(this.apiUrl,JSON.stringify(funcion))
      .subscribe(res=>{
        console.log(res);
        this.paquetes = res;
        
        
        console.log(JSON.stringify(this.paquetes));

      }, error=>{
        console.log(JSON.stringify(error))
      });
  }

  paqueteNombre(){

    let funcion={
      "funcion": "paqueteNombre",
      "id_paquete": this.pago['id_paquete']
    }

    this.http.post(this.apiUrl,JSON.stringify(funcion))
      .subscribe(res=>{
        console.log(res);
        this.nombre = res[0]["nombre"];
         
        console.log(JSON.stringify(this.nombre));

      }, error=>{
        console.log(JSON.stringify(error))
      });
  }

  cleanItems() {
    this.items = [];
  }

  getItems(ev: any) {

    this.initializeItems();
    console.log(ev.target.value);

    let val = ev.target.value.toUpperCase();
    this.items = this.items.filter(cliente => {
        console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
        return  cliente.Nombre.includes(val);
      });
    
    console.log(JSON.stringify(this.clientes));
  }

  pagar(){

  if(JSON.stringify(this.comprobar) != JSON.stringify(this.myForm.value))
  {  
    let paqueteAlerta = this.alert.create({
      title: 'Paquete invalido',
      message: 'Escribe el nombre correcto del paquete',
      buttons: ['Ok']     
    });

    let paqueteInactivoAlerta = this.alert.create({
      title: 'Paquete no disponible',
      message: 'Verifica situacion del paquete',
      buttons: ['Ok']     
    });

    let clienteAlerta = this.alert.create({
      title: 'Cliente invalido',
      message: 'Escribe id de un cliente valido',
      buttons: ['Ok']     
    });

    let clienteInactivoAlerta = this.alert.create({
      title: 'Cliente inactivo',
      message: 'Verifica situacion del cliente',
      buttons: ['Ok']     
    });

    let pagoAlerta = this.alert.create({
      title: 'Cambio existoso',
      message: 'Ya puedes consultar tu recibo modificado',
      buttons: ['Ok']     
    });

      var obj = JSON.parse(JSON.stringify(this.myForm.value));
      obj['funcion']='addCambioPago';
      obj['id']=this.pago['id_pago'];

      console.log(obj);
        
      this.http.post(this.apiUrl, JSON.stringify(obj)) 
      .subscribe(res=>{
        if(res=="Paquete Invalido"){ 
          paqueteAlerta.present();
        }

        if(res=="Paquete Inactivo"){ 
          paqueteInactivoAlerta.present();
        }

        if(res=="Cliente Invalido"){ 
          clienteAlerta.present();
        }

        if(res=="Cliente Inactivo"){ 
          clienteInactivoAlerta.present();
        }

        else if(res=="Pago exitoso"){ 
          pagoAlerta.present();
          if(this.myForm.valid){
              console.log("form enviado");
              this.myForm.reset();
              this.navCtrl.push(this.list);
          }
        }
        
        console.log(res);
        }
      );
    } 
    else{

      let noCambiosAlerta = this.alert.create({
        title: 'No se han realizado cambios',
        message: 'Informacion igual',
        buttons: ['Ok']     
      });
      
      noCambiosAlerta.present();
    }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyPayPage');
  }

}
