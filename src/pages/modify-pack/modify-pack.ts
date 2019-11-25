import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController } from 'ionic-angular';

import { ListPackPage } from '../list-pack/list-pack';


@IonicPage()
@Component({
  selector: 'page-modify-pack',
  templateUrl: 'modify-pack.html',
})
export class ModifyPackPage {

  apiUrl= "http://gymdb/";

  pack={};
  comprobar={};

  list = ListPackPage;

  @ViewChild('myForm') formValues;
  myForm: FormGroup;

  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public actionsheet: ActionSheetController,
    public alert:AlertController,
    public cl: FormBuilder,
    public navParams: NavParams){

  this.pack = this.navParams.get('pack');
  console.log(this.pack);

  this.myForm = this.cl.group({
    nombre: [this.pack['nombre'], [Validators.required]],
    descripcion:  [this.pack['descripcion'], [Validators.required]],
    precio:  [this.pack['precio'], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    duracion:  [this.pack['duracion'], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  });

  this.comprobar = {
   "nombre": this.pack['nombre'], 
    "descripcion":  this.pack['descripcion'], 
    "precio":  this.pack['precio'], 
    "duracion":  this.pack['duracion']
  }
  
}

  edit(){
    if(JSON.stringify(this.comprobar) != JSON.stringify(this.myForm.value))
    {
      
      let paqueteDuracion = this.alert.create({
        title: 'DURACION INVALIDA',
        message: 'La duracion maxima es de 365 dias',
        buttons: ['Ok']     
      });
  
      let paqueteNombre = this.alert.create({
        title: 'PAQUETE INVALIDO',
        message: 'Puede que el nombre de paquete sea repetido',
        buttons: ['OK']     
      });
  
      let paqueteEditado = this.alert.create({
        title: 'EXITO',
        message: 'Paquete editado correctamente',
        buttons: ['OK']     
      });

      var obj = JSON.parse(JSON.stringify(this.myForm.value));
      
      obj['id']= this.pack['id'];

      if(JSON.stringify(this.comprobar['nombre']) == JSON.stringify(this.myForm.value['nombre'].toUpperCase())){
        obj['funcion']='addCambioPack';
      }

      if(JSON.stringify(this.comprobar['nombre']) != JSON.stringify(this.myForm.value['nombre'].toUpperCase())){ //En caso que se requiera modificar el nombre
        obj['funcion']='addCambioPack2';
      }

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
        paqueteEditado.present();
        
        if(this.myForm.valid){
            console.log("form enviado");
            this.myForm.reset();
            this.navCtrl.pop();
            this.navCtrl.push(this.list);
        }
      }
      
      console.log(res);
      }
    );
  }
    else{

      let noCambiosAlerta = this.alert.create({
        title: 'PAQUETE SIN CAMBIOS',
        message: 'No se han realizado cambios',
        buttons: ['OK']     
      });
      
      noCambiosAlerta.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyPackPage');
  }

}
