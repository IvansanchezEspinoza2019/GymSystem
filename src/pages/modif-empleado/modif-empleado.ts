import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient }  from '@angular/common/http';
import { AllEmployeesPage } from '../all-employees/all-employees';
/**
 * Generated class for the ModifEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-empleado',
  templateUrl: 'modif-empleado.html',
})
export class ModifEmpleadoPage {

  myForm: FormGroup;

  hidePuesto=true;    // variables que controlarán opciones del form
  hideOtro=true;
  hideCuenta=true;

  all = AllEmployeesPage;

  empleado ={};
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
  comprobar={};

  constructor(public navCtrl: NavController, private http: HttpClient,
    public loadigCtrl: LoadingController,
    public alert:AlertController,
    public cl: FormBuilder ,
    public navParams: NavParams) {
      this.empleado = this.navParams.get('empleado');     // obtiene el registro a modificar
      this.iniciarForm(); // crea el form

    
    console.log(JSON.stringify(this.empleado));
    this.obtenerPuestos();   // obtiene los puestos disponibles

  }

  iniciarForm(){
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
    this.dir['path']=this.empleado['foto'];  // path de la foto de perfil del empleado
   
  }
  setValuesForm(){
    this.myForm.controls['nombre'].setValue(this.empleado['nombre']);
    this.myForm.controls['gender'].setValue(this.empleado['genero']);
    this.myForm.controls['apellidoP'].setValue(this.empleado['apellido_p']);
    this.myForm.controls['apellidoM'].setValue(this.empleado['apellido_m']);
    this.myForm.controls['telefono'].setValue(this.empleado['telefono']);
    this.myForm.controls['puesto'].setValue(this.empleado['id_puesto']);
    this.myForm.controls['fechanac'].setValue(this.empleado['fecha_nacimiento']);
    this.myForm.controls['foto'].setValue(this.empleado['foto']);
    this.myForm.controls['calle'].setValue(this.empleado['calle']);
    this.myForm.controls['numero'].setValue(this.empleado['numero_calle']);
    this.myForm.controls['numeroint'].setValue(this.empleado['numero_interior']);
    this.myForm.controls['colonia'].setValue(this.empleado['colonia']);
    this.myForm.controls['cp'].setValue(this.empleado['codigo']);

    this.comprobar={    ///  se utiliza para comprobar y ver si hubo cambio en los datos
      "nombre": this.empleado['nombre'],
      "gender": this.empleado['genero'],
      "apellidoP":this.empleado['apellido_p'],
      "apellidoM": this.empleado['apellido_m'],
      "telefono": this.empleado['telefono'],
      "puesto": this.empleado['id_puesto'],
      "otro": '',
      "sueldo": '',
      "fechanac": this.empleado['fecha_nacimiento'],
      "foto": this.empleado['foto'],
      "calle": this.empleado['calle'],
      "numero": this.empleado['numero_calle'],
      "numeroint": this.empleado['numero_interior'],
      "colonia": this.empleado['colonia'],
      "cp":this.empleado['codigo'],
      "admin":'0',
      "user": '',
      "password": '',
      "reppass": '',
      
    }
    

    if(this.empleado['user']=="0"){
      this.myForm.controls['admin'].setValue('0');    // si el cliente no tiene cuenta de administrador
      this.cuenta['val']='0'; // 'NO'= si no es administrador
      this.setDefaultValue('111111111');    // pone un valor aleatorio por defecto, ya que no importa
      this.comprobar['user']="111111111";
      this.comprobar['password']="111111111";
      this.comprobar['reppass']="111111111";
    }
    else{
      this.myForm.controls['admin'].setValue('1');    // si tiene cuenta de administrador
      this.cuenta['val']='1'; // 'SI'= si es administrador
      this.myForm.controls['user'].setValue(this.empleado['user']);
      this.myForm.controls['password'].setValue(this.empleado['password']);
      this.myForm.controls['reppass'].setValue(this.empleado['password']);
      this.hideCuenta=false;

      //llena los valores para un registro que sirve para comprobar 
      this.comprobar['admin']='1';    // si tiene cuenta de administrador
      this.comprobar['user']=this.empleado['user'];
      this.comprobar['password']=this.empleado['password'];
      this.comprobar['reppass']=this.empleado['password'];


    }

    
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
       //this.myForm.controls['puesto'].setValue('0');  // 
       
     }
     this.setValuesForm();
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
      this.myForm.controls['user'].setValue(this.empleado['user']);
      this.myForm.controls['password'].setValue(this.empleado['password']);
      this.myForm.controls['reppass'].setValue(this.empleado['password']);
      this.cuenta['val']='1'; // 'SI'= si es administrador
    }
    else{
      this.cuenta['val']='0'; // '0'=NO  es admministrador
      this.setDefaultValue("111111111"); // llama a la funcion que inicializa la cuenta 
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifEmpleadoPage');
  }
  saveData(){
    let miAlerta = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'Campo categoria vacio!!',
      buttons: ['Aceptar']
      
    });
    let alerta = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'No se han modificado datos!!',
      buttons: ['Aceptar']
      
    });
    //console.log("1");
    //console.log(JSON.stringify(this.comp));
    //console.log("2");
   // console.log(JSON.stringify(this.myForm.value))
    if(JSON.stringify(this.comprobar) == JSON.stringify(this.myForm.value)){ // comprueba si se modificó algún dato
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
        message: 'Modificado correctamente!!',
        buttons: ['Aceptar']
        
      });
      
      //alert(JSON.stringify(this.myForm.value));
  
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion']='actualizarEmpleado';
        obj['id_access']=this.empleado['id_acceso'];
        obj['id_empleado']=this.empleado['id_empleado'];
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
  








    
    
  


