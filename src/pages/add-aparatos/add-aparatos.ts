import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient }  from '@angular/common/http';
/**
 * Generated class for the AddAparatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-aparatos',
  templateUrl: 'add-aparatos.html',
})
export class AddAparatosPage {

  myForm: FormGroup;
  datos=[];
  hideCategoria=true;
  hideOtro=true;    
  apiUrl="http://gymdb/";       // servidor

  dat={     
    'id': '0',
    'nombre': 'OTRO'
  };

  constructor(public navCtrl: NavController, 
    public cl: FormBuilder,
    private http: HttpClient,
    public alert: AlertController,
    public navParams: NavParams) {
    this.myForm = this.cl.group({
      categoria: ['', [Validators.required]],
      otro: [''],
      descripcion:  ['',[Validators.required]],
      estado:  ['', [Validators.required]],
    });
    this.obtenerCat();  //obtiene categorias

    }

    validar(){
    if(this.datos.length>1){
     // console.log(this.datos.length);
        this.hideCategoria=false;
        this.hideOtro=true;
     }
     else{
       this.hideOtro=false;
       this.hideCategoria=true;
       this.myForm.controls['categoria'].setValue('0');
     }
    }

  obtenerCat(){
    let funcion={
      'funcion': 'getCategoria'
    }
    this.http.post(this.apiUrl,JSON.stringify(funcion))
    .subscribe(res=>{
      console.log(res);
        this.datos=res['categoria'];
        this.datos.push(this.dat);
        console.log(this.datos.length);
        this.validar();
        console.log(JSON.stringify(this.datos));

    }, error=>{
      console.log(error);
    });
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAparatosPage');
  }

  onChange(ev: any){
    console.log(ev);
    if(ev==0){  // si la categoria de las opciones no se encuentra
      this.hideOtro=false;  // hace vicible un input
    }
    else{
      this.hideOtro=true;  // lo esconde
    }
  }

  saveData(){
    let miAlerta = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'CAMPO CATEGORIA VACIO!',
      buttons: ['ACEPTAR']
      
    });
    if(this.hideOtro==false){   // si agreaga una nueva categoria
        if(this.myForm.controls['otro'].value==''){  // si ese campo esta vacio
          miAlerta.present();
          return;
        }
        else{
          this.enviarForm();  //envia formulario
          return;
        }
      }
      this.enviarForm(); // envia formulario
  }

  enviarForm(){
    let success = this.alert.create({
      title: 'OPERACION EXITOSA',
      message: 'AGREGADO CORRECTAMENTE',
      buttons: ['ACEPTAR']
      
    });



      var mayus = this.myForm.controls['otro'].value;
      if(mayus!=null){
        mayus = mayus.toUpperCase();
        this.myForm.controls['otro'].setValue(mayus);   // covierte a mayuscula la categoria
      }
     
    
    
    console.log((this.myForm.value));
    var obj = JSON.parse(JSON.stringify(this.myForm.value));
    obj['funcion']='addMaquina';

    console.log(obj);

    this.http.post(this.apiUrl,JSON.stringify(obj))
    .subscribe(res=>{
      console.log(res);
      if(res=="exito"){
        success.present();
        this.reiniciarForm();
      }

    }, error=>{
      console.log(error);
    });
  }
  
// reinicia formulario
  reiniciarForm(){
    this.myForm.reset();
    this.obtenerCat();
  }
}
