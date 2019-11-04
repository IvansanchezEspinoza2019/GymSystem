import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient }  from '@angular/common/http';

/**
 * Generated class for the AddEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-empleado',
  templateUrl: 'add-empleado.html',
})
export class AddEmpleadoPage {

  hidePuesto=true;    // variables que controlarán opciones del form
  hideOtro=true;
  hideCuenta=true;


  myForm: FormGroup;    // instancia de formgroup
  
  dir={       // guarda la direccion de la imagen de perfil     
    'dir': ''
  };
  puestos=[]        // ccontiene los puestos disponibles

  dato={        // es la opcion 'OTRO' en case de que no elija las otras opciones
    'id': '0',
    'puesto': 'OTRO'
  };

  cuenta={      // controla si el empleado que se va a agreagar tendrá permisos de administrador   '1'=SI, '0'=NO
    'val': '0'
  }

  apiUrl = "http://gymdb:/";   // servidor local

  // constructor
  constructor(public navCtrl: NavController,  
    private http: HttpClient,
    public loadigCtrl: LoadingController,
    public alert:AlertController,
    public cl: FormBuilder ,
    public navParams: NavParams) {

      this.myForm = this.cl.group({     // inicializa el formulario
        nombre: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        apellidoP:  ['', [Validators.required]],
        apellidoM:  ['', [Validators.required]],
        telefono:  ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]], // expresion regular
        puesto: ['',[Validators.required]],
        otro: [''],
        sueldo: [''],
        fechanac:  ['', [Validators.required]],
        foto:  ['stock.png', [Validators.required]],
        calle:  ['', [Validators.required]],
        numero:  ['', [Validators.required]],
        numeroint:  [''],
        colonia:  ['', [Validators.required]],
        cp:  ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]], // expresion regular
        admin: ['0'],
        user: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]], // expresion regular
        password: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(15)]], // expresion regular
        reppass: ['',[Validators.required]],
        
      });
      this.dir['path']='stock.png';  // path por default de las imagenes
      this.obtenerPuestos();  // llama a la funcio de obtener puestos
      this.setDefaultValue('111111111');  // pone un valor aleatorio a la cuenta, podría ser cualquiera 

  }

  // pone un valor a la cuenta del empleado, mas que nada para que cumpla con el requisito minimo de caracteres
  setDefaultValue(val: string){
    this.myForm.controls['user'].setValue(val);     // pone un valor por defecto
      this.myForm.controls['password'].setValue(val);
      this.myForm.controls['reppass'].setValue(val);
  }

  // funcion que valida si hay o no hay puestos 
  validar(){
    if(this.puestos.length>1){
        this.hidePuesto=false;
        this.hideOtro=true;
     }
     else{
       this.hideOtro=false;
       this.hidePuesto=true;
       this.myForm.controls['puesto'].setValue('0');  // la opcion '0'= OTRO, ya que no hay mas opciones
     }
    }

  // obtiene los puestos disponibles para empleados
  obtenerPuestos(){
    let funcion={
      'funcion': 'getPuestos'
    }

    this.http.post(this.apiUrl,JSON.stringify(funcion))
    .subscribe(res=>{
      console.log(res);
        this.puestos=res['puestos'];   //  arreglo que contiene los puestos
        this.puestos.push(this.dato);   // agrega la opcion 'OTRO'
        ///console.log(this.puestos.length);
        this.validar();
        console.log(JSON.stringify(this.puestos));

    }, error=>{
      console.log(error);
    });


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmpleadoPage');
  }

  // barra de carga
  presentLoading() {
    const loader = this.loadigCtrl.create({
      content: "Please wait...",
      duration: 200
    });
    loader.present();
  }

  // funcion que controla las opciones del puesto, se le envia un evento
  onChange(ev: any){
    console.log(ev);
    if(ev==0){  // si se eligio la opcion 'OTRO'
      this.hideOtro=false;  // hace visible el ion-list de puesto
    }
    else{
      this.hideOtro=true;  // lo esconde
    }
  }

  // controla el ion-list segun si el empleado va a ser administrador o no, 
  //si es administrador necesitará crearse una cuenta de usuario administrador, recibe un evento de parametro
  cuentaChange(ev: any){
    console.log(ev);
    if(ev==1){
      this.setDefaultValue(''); // llama a la funcion que inicializa la cuenta 
      this.cuenta['val']='1'; // 'SI'= si es administrador
    }
    else{
      this.cuenta['val']='0'; // '0'=NO  es admministrador
      this.setDefaultValue("111111111"); // llama a la funcion que inicializa la cuenta 
    }
  }

  // funcion que verifica varios campos antes de enviar el formulario
  saveData(){
    let miAlerta = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'La informacion sobre "puesto" está incompleta!!',
      buttons: ['Aceptar']
      
    });
    if(this.hideOtro==false){   // si agrega un puesto nuevo
        if(this.myForm.controls['otro'].value=='' || this.myForm.controls['sueldo'].value==''){  // si ese campo esta vacio muestra una alerta
          miAlerta.present();
          return;  // retorna
        }
        else{
          this.enviarForm();  //envia formulario
          return; //retorna
        }
      }
      this.enviarForm(); // envia formulario
  }

// envia el formulario
enviarForm(){
  let miAlerta = this.alert.create({
    title: 'OPERACION CANCELADA',
    message: 'La contraseña no coincide!!',
    buttons: ['Aceptar']
    
  });
  let idRep = this.alert.create({
    title: 'OPERACION CANCELADA',
    message: 'Ya existe ese usuario!!',    //alertas
    buttons: ['Aceptar']
    
  });
  let success = this.alert.create({
    title: 'OPERACION EXITOSA',
    message: 'Agregado correctamente!!',
    buttons: ['Aceptar']
    
  });
  

    var obj = JSON.parse(JSON.stringify(this.myForm.value));   // obtiene los datos del form
    obj['funcion']='addEmpleado';          
   
    
    
    for (var i in obj) {
      if(i=="password" || i=="reppass" || i=="funcion" || i=="foto" || i=="user" || i=="sueldo"){
        
      }
      else{
        obj[i]=obj[i].toUpperCase(); // convierte los datos a mayúscula
        
      }
    }

    if(obj['password'] == obj['reppass']){  //verifica las contraseñas
      console.log("Form antes de enviar: ");
      console.log(JSON.stringify(obj));
      this.http.post(this.apiUrl, JSON.stringify(obj)) //envia los datos
      .subscribe(res=>{
        if(res=="id_rep"){ //si el usuario es repetido muestra un mensaje de error
            idRep.present();
        }
        else if(res=="exito"){ //si la operacion fue exitosa
          if(this.myForm.valid){
            console.log("form enviado");
            success.present();
            this.myForm.reset();
            this.obtenerPuestos();
            
            this.dir['path']='stock.png';   // inicializa la imagen de perfil
          }
        }
       console.log(res);
         }, error=>{
           console.log(error);   // muestra mensaje de error
         }
      );
    }
    else{ //si las contraseñas no coinciden aborta la operacion
      miAlerta.present();
    }
}


// funcion que verifica la existencia de la imagen de perfil en el servidor
ver(){
    
  if(this.dir['dir']!=""){  //verifica si se ha ingresado una direccion
    let funcion2 = { 
      'funcion': 'existImg2',  
    };
    // alerta de error de archivo
    let error_file = this.alert.create({
      title: 'ERROR',
      message: 'El archivo no se encuentra en la carpeta del servidor!!',
      buttons: ['ACEPTAR']
      
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
