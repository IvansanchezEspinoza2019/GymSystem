import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  apiUrl= "http://gymdb/";
  clientes=[];
  items=[];
  paquetes:any;

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

      this.myForm = this.cl.group({
        id_usuario: ['', [Validators.required, , Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        paquete: ['', [Validators.required]],
        modo:  ['', [Validators.required]],
        monto:  ['', [Validators.required, , Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
      });

    }

  initializeItems() {
    this.items = this.clientes;
  }

  name = ''
  price = ''
  setPack(pack){
    this.name=pack['nombre'];
    this.price=pack['precio'];
    console.log(this.name);

    this.myForm.setValue({
      id_usuario: '',
      paquete: this.name.toString(), 
      modo:  '',
      monto:  this.price.toString(), 
    });
    document.getElementById("paquete").setAttribute('value',this.name.toString());
    document.getElementById("monto").setAttribute('value',this.price.toString());
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

    let pagoAlerta = this.alert.create({
      title: 'Pago Existoso',
      message: 'Gracias por su preferencia',
      buttons: ['Ok']     
    });
    
      var obj = JSON.parse(JSON.stringify(this.myForm.value));
      obj['funcion']='addPago';

      for (var i in obj) {
        if(i=="funcion"){
          
        }
        else{
          obj[i]=obj[i].toUpperCase(); 
        }
      }

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

        else if(res=="Pago exitoso"){ 
          pagoAlerta.present();
          if(this.myForm.valid){
              console.log("form enviado");
              this.myForm.reset();
          }
        }
        
        console.log(res);
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

}
