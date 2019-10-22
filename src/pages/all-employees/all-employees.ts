import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController, LoadingController, AlertController} from 'ionic-angular';
import { InfoEmpleadoPage } from '../info-empleado/info-empleado';
import { ModifEmpleadoPage } from '../modif-empleado/modif-empleado';
/**
 * Generated class for the AllEmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-employees',
  templateUrl: 'all-employees.html',
})
export class AllEmployeesPage {
  // paginas
  info_empleado = InfoEmpleadoPage;
  modif = ModifEmpleadoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http:HttpClient,
    public actionsheet: ActionSheetController,
    public alert: AlertController,
    public loading: LoadingController) {
      //modificaciones
      this.filtro.val="1";      //inicializa el filtro
      this.filtro_aux="1";     //no servira para comprobar si hay un cambio de filtro
      this.actualizar();    // funcion que obtiene los datos de la base de datos
  }
  apiUrl= "http://gymdb/";      //direccion del servidor
    empleados=[];             //lista de empleados
    items=[];               //lista auxiliar
    datos_extra={};   //se guardan los datos de las llaves foraneas, y el nombre por separado
  
    filtro={      //controla el filtro por el cual se va a buscar 
      val: null
    }

    filtro_aux="";
    funcion={
      "funcion": "getAllEmployees"      //funcoin 
    }
    presentLoading() {
      const loader = this.loading.create({
        content: "Please wait...",
        duration: 100
      });
      loader.present();
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllEmployeesPage');
  }
   //alertas
   success = this.alert.create({
    title: 'OPERACION EXITOSA',
    message: 'LA OPERACION SE REALIZO CON EXITO',
    buttons: ['ACEPTAR']
    
  });
  op_cancel = this.alert.create({
    title: 'ERROR',
    message: 'HUBO PROBLEMAS AL REALIZAR LA OPERACION',
    buttons: ['ACEPTAR']
    
  });




  actualizar(){
    this.http.post(this.apiUrl,JSON.stringify(this.funcion))
    .subscribe(res=>{
      //console.log(res);
      this.empleados = res['empleados'];
      //this.items=this.clientes;  // inicializa la lista auxiliar
      this.initializeItems();   // llama a la funcion de inicializar, para que muestre segun el filtro
      
      console.log(JSON.stringify(this.empleados));

    }, error=>{
      console.log(JSON.stringify(error))
    });
  }
  initializeItems() {
    
    if(this.filtro.val=="0"){ // todos los clientes
      this.items = this.empleados;
    }
    else if(this.filtro.val=="1"){ //todos los activos
      this.inicializarActivos();
    }
    else if(this.filtro.val=="2"){ //todos los inactivos
      this.inicializarInactivos();
    }
  }
  inicializarActivos(){           //inicializa la lista auxiliar con los clientes que estan inaactivos
    this.items = this.empleados.filter(empleado => {
      console.log(JSON.stringify(JSON.stringify(empleado.Nombre)));
      return  empleado.activo=='1';
    });
    console.log(JSON.stringify(this.items));
  }

  inicializarInactivos(){     //inicializa la lista auxiliar con los clientes que estan inactivos
    this.items = this.empleados.filter(empleado => {
      console.log(JSON.stringify(JSON.stringify(empleado.Nombre)));
      return  empleado.activo=='0';
    });
    console.log(JSON.stringify(this.items));
  }

  // barra de busqueda
  getItems(ev: any) {

    this.initializeItems(); // inicializa la lista auxiliar segun  el caso de filtro
    console.log(ev.target.value);
    let val = ev.target.value;
    if(val!=''){
       val = ev.target.value.toUpperCase();
    }
    this.items = this.items.filter(empleado => {
        console.log(JSON.stringify(JSON.stringify(empleado.Nombre)));
        return  empleado.Nombre.includes(val);
      });
    
    console.log(JSON.stringify(this.empleados));
  }
  verFiltro(){
    if(this.filtro.val==this.filtro_aux){
        console.log("NO hay cambio");
    }else{
        this.presentLoading();
        this.filtro_aux=this.filtro.val;
        console.log("SI hay cambio");
        this.initializeItems();     // funcion que inicializa la lista auxiliar segun el caso
    }
    
  }
  // obtiene los datos de las llaves foraneas, y el nombre por sepa
  getElements(empleado){
    this.datos_extra={
      'id_access': empleado['id_acceso'],
      'funcion': 'getAccesoEmployee'
     }
     
     if(this.datos_extra['id_access']){   // si tiene cuenta de administrador
      this.http.post(this.apiUrl, JSON.stringify(this.datos_extra))
      .subscribe(res=>{
        console.log(res); 
        this.datos_extra['user']=res['user'];
        this.datos_extra['password']=res['password'];
        console.log("Datos: ");
        console.log(JSON.stringify(this.datos_extra));
      }, error=>{
        console.log(error);
      }
      );
     }
     else{  /// si no tiene cuenta
      this.datos_extra['user']='0';
      this.datos_extra['password']='0';
     }
    
  }
  // funcion de modificar cliente
  modificar(empleado){
    empleado['user']=this.datos_extra['user'];
    empleado['password']=this.datos_extra['password'];
    
    console.log(JSON.stringify(empleado));
    
    this.navCtrl.push(this.modif, {empleado : empleado}); // envia los datos para modificarse
    //this.actualizar();
  }

  // funcion de eliminar cliente
  eliminar(empleado){
    let elim = this.alert.create({
      title: 'ADVERTENCIA',
      message: '¿SEGURO QUE DESEA ELIMINARLO?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data=>{
            console.log("Operacion cancelada");
          }
        },
        {
          text: 'Aceptar',
          role: 'aceptar',
          handler: data=>{
            console.log("eliminado");
            empleado['funcion']="eliminarEmpleado";
            this.http.post(this.apiUrl,JSON.stringify(empleado))
            .subscribe(res =>{
              console.log(res);
              if(res=="exito"){
                  //this.success.present();
                  this.actualizar(); // actualiza los datos
              }
              else{
                  this.op_cancel.present();
              }
            },error=>{
              console.log(error);
            });

          }
        }
      ]
    });
    elim.present();
  }

  // activa un cliente que ha sido eliminado
  activarEmpleado(empleado){
    let act = this.alert.create({
      title: 'ADVERTENCIA',
      message: '¿ACTIVAR EMPLEADO?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data=>{
            console.log("Operacion cancelada");
          }
        },
        {
          text: 'Aceptar',
          role: 'aceptar',      // si esta desactivado, lo activara
          handler: data=>{
            console.log("activado");
            empleado['funcion']="activarEmpleado";
            this.http.post(this.apiUrl,JSON.stringify(empleado))
            .subscribe(res =>{
              console.log(res);
              if(res=="exito"){
                  //this.success.present();
                  this.actualizar();
                  //this.presentLoading();
              }
              else{
                  this.op_cancel.present();
              }
            },error=>{
              console.log(error);
            });

          }
        }
      ]
    });
    act.present();
  }
   // muestra un menu para clientes inactivos
   presentActionSheetInact(empleado) {
    const action = this.actionsheet.create({
      title: 'Options',
      buttons: [
        {
          text: 'Detalles',
          role: 'detalles',
          handler: () => {
            console.log('Detalles clicked');
            empleado['user']=this.datos_extra['user'];
            empleado['password']=this.datos_extra['password'];
            this.navCtrl.push(this.info_empleado, {empleado : empleado});
          }
        },
        {
          text: 'Activar',
          role: 'activar',
          handler: () => {
            console.log('activar clicked');
            this.activarEmpleado(empleado);
            
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
   action.present();
  }// muestra un menu para clientes activos
  presentActionSheetAct(empleado) {
    const action = this.actionsheet.create({
      title: 'Options',
      buttons: [
        {
          text: 'Detalles',
          role: 'detalles',
          handler: () => {
            console.log('Detalles clicked');
            empleado['user']=this.datos_extra['user'];
            empleado['password']=this.datos_extra['password'];
            this.navCtrl.push(this.info_empleado, {empleado : empleado});
          }
        },
        {
          text: 'Modificar',
          role: 'detalles',
          handler: () => {
            console.log('modificar clicked');
            this.modificar(empleado);    // llama a la funcion de modificar
          }
        },
        {
          text: 'Eliminar',
          role: 'eliminar',
          handler: () => {
            console.log('Eliminar clicked');
            this.eliminar(empleado);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
   action.present();
  }

  // menu desplegable
  actionSheet(empleado){
    console.log("action sheet");
    
   this.getElements(empleado);
    if(empleado.activo=='0'){ // si el cliente esta inactivo
      this.presentActionSheetInact(empleado);
    }
    else{ // si el cliente esta activo
      this.presentActionSheetAct(empleado);
    }
    
    //this.presentLoading();
    //this.actualizar();   // actualiza los datos 
  }
}
