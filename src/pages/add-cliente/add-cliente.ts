import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';


/**
 * Generated class for the AddClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-cliente',
  templateUrl: 'add-cliente.html',
})
export class AddClientePage {

  @ViewChild('myForm') formValues;
  myForm: FormGroup;
  x =0;  // variable para el usuario
  constructor(public navCtrl: NavController, 
    private http: HttpClient,
    public loadigCtrl: LoadingController,
    public alert:AlertController,
    public cl: FormBuilder ,
    public navParams: NavParams) {
      this.myForm = this.cl.group({
        nombre: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        apellidoP:  ['', [Validators.required]],
        apellidoM:  ['', [Validators.required]],
        telefono:  ['', [Validators.required]],
        fechanac:  ['', [Validators.required]],
        foto:  ['', [Validators.required]],
        calle:  ['', [Validators.required]],
        numero:  ['', [Validators.required]],
        numeroint:  [''],
        colonia:  ['', [Validators.required]],
        cp:  ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        reppass: ['',[Validators.required]],
        user: ['']
      });
    }

    presentLoading() {
      const loader = this.loadigCtrl.create({
        content: "Please wait...",
        duration: 200
      });
      loader.present();
    }
    

  apiUrl = "http://gymdb:8080/";
  

  functionsetId():void{
    let funcion = { 
      'funcion': 'getLastId'
    };
    
    this.http.post(this.apiUrl, JSON.stringify(funcion))
    .subscribe(res=>{
    console.log(res);
    if(res['max(id_cliente)']){
      this.x = Number(res['max(id_cliente)']); //obtiene el ultimo id de clientes
      this.x = this.x+1;  //lo incrementa
    }
    else{
      this.x=1;
    }
    console.log(this.x.toString());
    this.myForm.setValue({
        nombre: '',
        gender: '',
        apellidoP: '',
        apellidoM: '',
        telefono: '',
        fechanac: '',
        foto: '',
        calle: '',
        numero: '',
        numeroint: '',
        colonia: '',
        cp: '',
        password:'',
        reppass: '',
        user: this.x.toString()});
     document.getElementById("usercliente").setAttribute('value',this.x.toString());
      //document.getElementsByTagName('input')[12].disabled=true;
      //document.getElementsByTagName('input')[12].setAttribute('value',this.x.toString());
      //console.log("fin de documento")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClientePage');
    this.functionsetId();
 
    }
   
  saveData(){
    

    let miAlerta = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'LA CONTRASEÑA NO COINCIDE!',
      buttons: ['ACEPTAR']
      
    });
    let idRep = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'YA EXISTE ESE USUARIO!',    //alertas
      buttons: ['ACEPTAR']
      
    });
    let success = this.alert.create({
      title: 'OPERACION EXITOSA',
      message: 'AGREGADO CORRECTAMENTE',
      buttons: ['ACEPTAR']
      
    });
    
    //alert(JSON.stringify(this.myForm.value));

      var obj = JSON.parse(JSON.stringify(this.myForm.value));
      obj['funcion']='addCliente';
     // this.cleanForm();
      
      
      for (var i in obj) {
        if(i=="password" || i=="reppass" || i=="funcion" || i=="foto"){
          
        }
        else{
          obj[i]=obj[i].toUpperCase(); // convierte los datos a mayúscula
          
        }
      }
      if(obj['password'] == obj['reppass']){  //verifica las contraseñas
        
        this.http.post(this.apiUrl, JSON.stringify(obj)) //envia los datos
        .subscribe(res=>{
          if(res=="id_rep"){ //si el usuario es repetido muestra  un mensaje de error
              idRep.present();
          }
          else if(res=="exito"){ //si la operacion fue exitosa
            if(this.myForm.valid){
              console.log("form enviado");
              success.present();
              this.myForm.reset();
              this.functionsetId();
            }
              //success.present();
              //t//his.myForm.reset(true);
             // this.myForm.controls.reset;
              //this.functionsetId();  
          }
         console.log(res);
           }
        );
      }
      else{ //si las contraseñas no coinciden aborta la operacion
        console.log(JSON.stringify(obj));
        miAlerta.present();
        console.log(obj['fechanac']);
      }
  }
}
