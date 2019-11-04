import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient }  from '@angular/common/http';
import { AllaparatosPage } from '../allaparatos/allaparatos';
/**
 * Generated class for the ModifaparatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifaparato',
  templateUrl: 'modifaparato.html',
})
export class ModifaparatoPage {
  myForm: FormGroup;

  id_admin={};
  

  back= AllaparatosPage;  // pagina de aparatos
  aparato={}   // almacena registro que se envia por parametro
  datos=[]  //almacena las categorias dispoibles
  hideCategoria=true;   //variables que sirven para controlar partes del form
  hideOtro=true;

  apiUrl="http://gymdb/"; // server
  dat={   // es una opcion del ion-select
    'id': '0',
    'nombre': 'OTRO'
  };
  comp={} /// servira para comprobar si se ha hecho algun cambio 

  constructor(public navCtrl: NavController, 
    private cl: FormBuilder,
    private http: HttpClient,
    public alert: AlertController,
    public navParams: NavParams) {
      this.id_admin = this.navParams.get('id');   // obtiene el id del empleado que opera en este momento

      this.aparato=this.navParams.get('aparato');  // obtiene el registro enviado
     console.log("id aADMOININIINI");
      console.log(this.id_admin);
      this.myForm = this.cl.group({       // llena el formulario
        categoria: [this.aparato['nombre'], [Validators.required]],
        otro: [''],
        descripcion:  [this.aparato['descripcion'],[Validators.required]],
        estado:  [this.aparato['estado'], [Validators.required]],
      });
      this.obtenerCat(); // obtiene categorias de aparatos
      this.comp={
        'categoria': this.aparato['id_categoria'],
        'otro': '',
        'descripcion': this.aparato['descripcion'],
        'estado': this.aparato['estado']
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifaparatoPage');
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

  obtenerCat(){ // obtiene las categorias que existen en la base de datos
    let funcion={
      'funcion': 'getCategoria'
    }
    this.http.post(this.apiUrl,JSON.stringify(funcion))
    .subscribe(res=>{
      console.log(res);
        this.datos=res['categoria'];
        this.datos.push(this.dat);
        //console.log(this.datos.length);
        this.validar();
        this.myForm.controls['categoria'].setValue(this.aparato['id_categoria']);
        console.log(JSON.stringify(this.datos));

    }, error=>{
      console.log(error);
    });
  }
  // funcion que siempre que haya un cambio en el form hace un cambio
  onChange(ev: any){
    console.log(ev);
    if(ev==0){  // si la categoria de las opciones no se encuentra
      this.hideOtro=false;  // hace vicible un input
    }
    else{
      this.hideOtro=true;  // lo esconde
    }
  }

  // funcion de guardar
  saveData(){
    let miAlerta = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'Campo categoria vacio!!',
      buttons: ['Aceptar']
      
    });
    let alerta = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'No se han modificado los datos!!',
      buttons: ['Aceptar']
      
    });
    
    if(JSON.stringify(this.comp) == JSON.stringify(this.myForm.value)){ // comprueba si se modificó algún dato
      alerta.present();
    }
    else{
      
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
      this.enviarForm(); // envia formulario*/
    }
    
  }
  enviarForm(){
    let success = this.alert.create({
      title: 'OPERACION EXITOSA',
      message: 'Operacion realizada con exito!!',
      buttons: ['Aceptar']
      
    });
    var mayus = this.myForm.controls['otro'].value;
    if(mayus!=null){
      mayus = mayus.toUpperCase();
      this.myForm.controls['otro'].setValue(mayus);   // covierte a mayuscula la categoria
    }
    var desc = this.myForm.controls['descripcion'].value;
    if(desc!=null){
      desc = desc.toUpperCase();
      this.myForm.controls['descripcion'].setValue(desc);   // covierte a mayuscula la categoria
    }
     
    console.log((this.myForm.value));
    var obj = JSON.parse(JSON.stringify(this.myForm.value));

    obj['funcion']='modifAparato';  //funcion de modificar 
    obj['id']=this.aparato['id'];   // agrega el id del aparato
    obj['id_admin']=this.id_admin;  // administrador que realiza la operacion
    obj['accion']='2';    // '2'= modificar
    console.log(obj);

    this.http.post(this.apiUrl,JSON.stringify(obj))
    .subscribe(res=>{
      console.log(res);
      if(res=="exito"){
        success.present();
        this.navCtrl.push(this.back, {id: obj['id_admin'], filtro: this.aparato['filtro']});  // regresa a la pagina anterior, le envia el id del admin como parametro 
      }
    }, error=>{
      console.log(error);
    });
  }

  
}
