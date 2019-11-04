import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { AllcustomersPage } from '../allcustomers/allcustomers';

/**
 * Generated class for the ModifclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifcliente',
  templateUrl: 'modifcliente.html',
})
export class ModifclientePage {
  all= AllcustomersPage;
  myForm: FormGroup;
  apiUrl="http://gymdb/";
  x =0;  // variable para el usuario
  dir={
    'dir': ''
  };
  cliente={};
  comprobar={};

  funcion={
    "funcion": "getNombre"
  }
  constructor(public navCtrl: NavController, 
    private http: HttpClient,
    public loadigCtrl: LoadingController,
    public alert:AlertController,
    public cl: FormBuilder ,
    public navParams: NavParams) {
      this.cliente = this.navParams.get('cliente');  // obtenemos el parametro que le enviamos
      console.log(JSON.stringify(this.cliente));
      this.myForm = this.cl.group({             // declaramos formulario
        
        nombre: [this.cliente['nombre'], [Validators.required]],
        gender: [this.cliente['genero'], [Validators.required]],
        apellidoP:  [this.cliente['apellido_p'], [Validators.required]],
        apellidoM:  [this.cliente['apellido_m'], [Validators.required]],
        telefono:  [this.cliente['telefono'], [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        fechanac:  [this.cliente['fecha_nacimiento'], [Validators.required]],
        foto:  [this.cliente['foto'], [Validators.required]],
        calle:  [this.cliente['calle'], [Validators.required]],
        numero:  [this.cliente['numero_calle'], [Validators.required]],
        numeroint:  [this.cliente['numero_interior']],
        colonia:  [this.cliente['colonia_str'], [Validators.required]],
        cp:  [this.cliente['cp_str'], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        password: [this.cliente['password'], [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        reppass: [this.cliente['password'],[Validators.required]],
        user: [this.cliente['user'],[Validators.required]]
      });
      
      console.log("log");
      this.dir['path']=this.cliente['foto'];        // direccion path stock

      this.comprobar={    ///  se utiliza para comprobar y ver si hubo cambio en los datos
        "nombre": this.cliente['nombre'],
        "gender": this.cliente['genero'],
        "apellidoP":this.cliente['apellido_p'],
        "apellidoM": this.cliente['apellido_m'],
        "telefono": this.cliente['telefono'],
        "fechanac": this.cliente['fecha_nacimiento'],
        "foto": this.cliente['foto'],
        "calle": this.cliente['calle'],
        "numero": this.cliente['numero_calle'],
        "numeroint": this.cliente['numero_interior'],
        "colonia": this.cliente['colonia_str'],
        "cp":this.cliente['cp_str'],
        "password": this.cliente['password'],
        "reppass": this.cliente['password'],
        "user": this.cliente['user']
      }
    }
    
    
  saveData(){
    let form_invalido = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'Ya se enviarion los datos modificados!!',
      buttons: ['Aceptar']
      
    });

    if(this.cliente['id_cliente']==''){
      form_invalido.present();
    }
    else{
      let repetido = this.alert.create({
        title: 'OPERACION CANCELADA',
        message: 'No se han modificado datos!!',
        buttons: ['Aceptar']
        
      });
  
  
      if(JSON.stringify(this.comprobar) != JSON.stringify(this.myForm.value)){  // compara si se hizo algun cambio
        console.log("son desiguales");
        //alertas
      let miAlerta = this.alert.create({
        title: 'OPERACION CANCELADA',
        message: 'La contraseña no coincide!!',
        buttons: ['Aceptar']
        
      });
      let idRep = this.alert.create({
        title: 'OPERACION CANCELADA',
        message: 'Ya existe ese usuario!!',    
        buttons: ['Aceptar']
        
      });
      let success = this.alert.create({
        title: 'OPERACION EXITOSA',
        message: 'Agregado correctamente!!',
        buttons: ['Aceptar']
        
      });
      
      //alert(JSON.stringify(this.myForm.value));
  
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion']='actualizarCliente';
        obj['id_access']=this.cliente['id_access'];
        obj['id_cliente']=this.cliente['id_cliente'];
       // this.cleanForm();
        
        
        for (var i in obj) {
          if(i=="password" || i=="reppass" || i=="funcion" || i=="foto" || i=="user" || i=="id_access"){
            
          }
          else{
            obj[i]=obj[i].toUpperCase(); // convierte los datos a mayúscula
            
          }
        }
        if(obj['password'] == obj['reppass']){  //verifica las contraseñas
          console.log(JSON.stringify(obj));
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
                this.dir['path']='stock.png';
                this.cliente['id']='';
                this.navCtrl.push(this.all);
              }
            }
           console.log(res);
             }, error=>{
               console.log(error);
             }
          );
        }
        else{ //si las contraseñas no coinciden aborta la operacion
          console.log(JSON.stringify(obj));
          miAlerta.present();
        }
      }
      else{
        repetido.present();
      }
    }
    
  }
  
  // funcion que verifica la existencia de la imagen en el servidor
  ver(){
    
    if(this.dir['dir']!=""){  //verifica si se ha ingresado una direccion
      let funcion2 = { 
        'funcion': 'existImg',  
      };
      // alerta de error de archivo
      let error_file = this.alert.create({
        title: 'ERROR',
        message: 'El archivo no se encuentra en la carpeta del servidor!!',
        buttons: ['Aceptar']
        
      });
      
      let cadena: string= this.dir['dir'];
      let resultado: string="";
  
      // obtiene solo el path de la url adquirida
      for(var i=12; i<cadena.length;i++){
        resultado= resultado.concat(cadena[i]); // resultado contiene el path de la imagen
      }
      
      funcion2['path']=resultado;
      console.log(funcion2);

      //manda la informacion al servidor para verificar la existencia de la imagen
      this.http.post(this.apiUrl, JSON.stringify(funcion2)) //envia los datos
      .subscribe(res=>{
        console.log(res);
        if(res=="no existe"){  // si la imagen no se encuentra
          error_file.present();
        }
        else if(res=="existe"){ // si se encuentra
          this.dir['path']=resultado;  // le asigna el valor del path
          this.myForm.controls['foto'].setValue(resultado); // asigna al campo 'foto' del form el nuevo path
        }
         }
      );
  
      console.log(JSON.stringify(this.dir));  // muestra la direccion
    }
    
   }

}
