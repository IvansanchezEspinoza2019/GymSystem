import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pack',
  templateUrl: 'pack.html',
})

export class PackPage {

  apiUrl= "http://gymdb/";

  @ViewChild('myForm') formValues;
  myForm: FormGroup;

  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public actionsheet: ActionSheetController,
    public alert:AlertController,
    public cl: FormBuilder,
    public navParams: NavParams){

  this.myForm = this.cl.group({
    nombre: ['', [Validators.required]],
    descripcion:  ['', [Validators.required]],
    precio:  ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    duracion:  ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  });

  }

  pack(){

    let paqueteDuracion = this.alert.create({
      title: 'Duracion de paquete invalida',
      message: 'La duracion maxima es de 365 dias',
      buttons: ['Ok']     
    });

    let paqueteNombre = this.alert.create({
      title: 'Nombre de paquete invalido',
      message: 'Puede que el nombre de paquete sea repetido',
      buttons: ['Ok']     
    });

    let paqueteAgregado = this.alert.create({
      title: 'Exito',
      message: 'Paquete agregado correctamente',
      buttons: ['Ok']     
    });

    var obj = JSON.parse(JSON.stringify(this.myForm.value));
    obj['funcion']='addPaquete';

    for (var i in obj) {
      if(i=="duracion" || i=="precio" || i=="funcion"){
        
      }
      else{
        obj[i]=obj[i].toUpperCase(); 
      }
    }

    console.log(obj);
      
    this.http.post(this.apiUrl, JSON.stringify(obj)) 
    .subscribe(res=>{

      if(res=="Duracion Invalida"){ 
        paqueteDuracion.present();
      }

      if(res=="Nombre Invalido"){ 
        paqueteNombre.present();
      }

      else if(res=="Paquete Exitoso"){ 
        paqueteAgregado.present();

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
    console.log('ionViewDidLoad PackPage');
  }

}
