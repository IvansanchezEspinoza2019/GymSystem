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


  myForm: FormGroup;
  
  dir={           
    'dir': ''
  };
  puestos=[]        // ccontiene los puestos disponibles
  dato={    
    'id': '0',
    'puesto': 'OTRO'
  };
  cuenta={
    'val': '0'
  }

  apiUrl = "http://gymdb:/";   // servidor

  constructor(public navCtrl: NavController,  
    private http: HttpClient,
    public loadigCtrl: LoadingController,
    public alert:AlertController,
    public cl: FormBuilder ,
    public navParams: NavParams) {

      this.myForm = this.cl.group({     // inicializa el form
        nombre: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        apellidoP:  ['', [Validators.required]],
        apellidoM:  ['', [Validators.required]],
        telefono:  ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        puesto: ['',[Validators.required]],
        otro: [''],
        sueldo: [''],
        fechanac:  ['', [Validators.required]],
        foto:  ['stock.png', [Validators.required]],
        calle:  ['', [Validators.required]],
        numero:  ['', [Validators.required]],
        numeroint:  [''],
        colonia:  ['', [Validators.required]],
        cp:  ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        admin: ['0'],
        user: ['',[Validators.pattern(/^[a-z0-9_-]{4,15}$/)]],
        password: ['', [Validators.pattern(/^[a-z0-9_-]{8,15}$/)]],
        reppass: ['',[Validators.required]],
        
      });
      this.dir['path']='stock.png';  // path por default de las imagenes
      this.obtenerPuestos();  // lama a la funcio de obtener puestos

  }

  // funcion que valida si hay o no hay puestos 
  validar(){
    if(this.puestos.length>1){
     // console.log(this.datos.length);
        this.hidePuesto=false;
        this.hideOtro=true;
     }
     else{
       this.hideOtro=false;
       this.hidePuesto=true;
       this.myForm.controls['puesto'].setValue('0');
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

  // funcion que controla las opciones del puesto
  onChange(ev: any){
    console.log(ev);
    if(ev==0){  // si se eligio la opcion 'OTRO'
      this.hideOtro=false;  // hace visible el ion-list de puesto
    }
    else{
      this.hideOtro=true;  // lo esconde
    }
  }

  // controla el ion-list segun si el empleado va a ser administrador o no, si es administrador necesitará crearse una cuenta de usuario admin
  cuentaChange(ev: any){
    console.log(ev);
    if(ev==1){
      this.myForm.controls['user'].setValue('');    // inicializa la cuenta
      this.myForm.controls['password'].setValue('');
      this.myForm.controls['reppass'].setValue('');
      this.cuenta['val']='1';
    }
    else{
      this.cuenta['val']='0';
      this.myForm.controls['user'].setValue('11111');     // pone un valor por defecto
      this.myForm.controls['password'].setValue('111111111');
      this.myForm.controls['reppass'].setValue('1111111111');
    }
  }

  // funcion que verifica varios campos antes de enviar el formulario
  savaData(){
    let miAlerta = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'LA INFORMACION DE PUESTO DETRABAJO ESTA INCOMPLETA!',
      buttons: ['ACEPTAR']
      
    });
    if(this.hideOtro==false){   // si agreaga una nueva categoria
        if(this.myForm.controls['otro'].value=='' || this.myForm.controls['sueldo'].value==''){  // si ese campo esta vacio
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

// evia el formulario
enviarForm(){
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
    obj['funcion']='LALAIO';
   // this.cleanForm();
    
    
    for (var i in obj) {
      if(i=="password" || i=="reppass" || i=="funcion" || i=="foto" || i=="user"){
        
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
            
            this.dir['path']='stock.png';
          }
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


// funcion que verifica la existencia de la imagen en el servidor
ver(){
    
  if(this.dir['dir']!=""){  //verifica si se ha ingresado una direccion
    let funcion2 = { 
      'funcion': 'existImg2',  
    };
    // alerta de error de archivo
    let error_file = this.alert.create({
      title: 'ERROR',
      message: 'EL ARCHIVO NO SE ENCUANTRA EN LA CARPETA DEL SERVIDOR',
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
