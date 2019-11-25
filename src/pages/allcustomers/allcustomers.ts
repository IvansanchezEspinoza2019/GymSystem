import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { InfClientePage } from '../inf-cliente/inf-cliente';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController, LoadingController} from 'ionic-angular';
import { ModifclientePage } from '../modifcliente/modifcliente';
  /**
 * Generated class for the AllcustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allcustomers',
  templateUrl: 'allcustomers.html',
})

export class AllcustomersPage {
  //constructor
  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public actionsheet: ActionSheetController,
    public alert: AlertController,
    public loading: LoadingController,
    public navParams: NavParams) {
      this.filtro.val="1";      //inicializa el filtro
      this.filtro_aux="1";      //no servira para comprobar si hay un cambio de filtro
      this.actualizar();    // funcion que obtiene los datos de la base de datos
      
    }



    infocliente = InfClientePage;  // pagina para detalles del cliente
    modif = ModifclientePage;   // pagina para modificar
    apiUrl= "http://gymdb/";      //direccion del servidor
    clientes=[];             //lista de clientes
    items=[];               //lista auxiliar
    datos_extra={};   //se guardan los datos de las llaves foraneas, y el nombre por separado
  
    filtro={      //controla el filtro por el cual se va a buscar 
      val: null
    }

    filtro_aux="";
    funcion={
      "funcion": "getAllCustomers"      //funcoin 
    }

    // obtiene los datos de las llaves foraneas, y el nombre por sepa
   

    // obtiene los registros de la base de datos
    actualizar(){
      this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        //console.log(res);
        this.clientes = res['clientes'];
        //this.items=this.clientes;  // inicializa la lista auxiliar
        this.initializeItems();   // lla,a a la funcion de inicializar, para que muestre segun el filtro
        
        console.log(JSON.stringify(this.clientes));

      }, error=>{
        console.log(JSON.stringify(error))
      });
    }
    

      //alertas
      success = this.alert.create({
        title: 'OPERACION EXITOSA',
        message: 'La operación se realizó con éxito!!',
       buttons: ['Aceptar']
    
        
      });
      op_cancel = this.alert.create({
        title: 'ERROR',
        message: 'Hubo problemas al realizar la operación!!',
        buttons: ['Aceptar']
        
      });

      // alerta de carga
    presentLoading() {
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 100
    });
    loader.present();
  }
  
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad ListcustomersPage');
    }
    initializeItems() {
    
      if(this.filtro.val=="0"){ // todos los clientes
        this.items = this.clientes;
      }
      else if(this.filtro.val=="1"){ //todos los activos
        this.inicializarActivos();
      }
      else if(this.filtro.val=="2"){ //todos los inactivos
        this.inicializarInactivos();
      }
    }
    inicializarActivos(){           //inicializa la lista auxiliar con los clientes que estan inaactivos
      this.items = this.clientes.filter(cliente => {
        console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
        return  cliente.activo=='1';
      });
      console.log(JSON.stringify(this.items));
    }

    inicializarInactivos(){     //inicializa la lista auxiliar con los clientes que estan inactivos
      this.items = this.clientes.filter(cliente => {
        console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
        return  cliente.activo=='0';
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
      this.items = this.items.filter(cliente => {
          console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
          return  cliente.Nombre.includes(val);
        });
      
      console.log(JSON.stringify(this.clientes));
    }

    // funcion de modificar cliente
    modificar(cliente){
      this.navCtrl.pop();
      this.navCtrl.push(this.modif, {cliente : cliente}); // envia los datos para modificarse
      
    }

    // funcion de eliminar cliente
    eliminar(cliente){
      let elim = this.alert.create({
        title: 'ADVERTENCIA',
        message: '¿Seguro que desea eliminarlo?',
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
              cliente['funcion']="eliminarCliente";
              this.http.post(this.apiUrl,JSON.stringify(cliente))
              .subscribe(res =>{
                console.log(res);
                if(res=="exito"){
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
    activarCliente(cliente){
      let act = this.alert.create({
        title: 'ADVERTENCIA',
        message: '¿Activar cliente?',
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
              cliente['funcion']="activarCliente";
              this.http.post(this.apiUrl,JSON.stringify(cliente))
              .subscribe(res =>{
                console.log(res);
                if(res=="exito"){
                    this.actualizar();
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

    // muestra un menu para clientes activos
    presentActionSheetAct(cliente) {
      const action = this.actionsheet.create({
        title: 'Options',
        buttons: [
          {
            text: 'Detalles',
            role: 'detalles',
            handler: () => {
              console.log('Detalles clicked');
              
              this.navCtrl.push(this.infocliente, {cliente : cliente});
            }
          },
          {
            text: 'Modificar',
            role: 'detalles',
            handler: () => {
              console.log('modificar clicked');
              this.modificar(cliente);    // llama a la funcion de modificar
            }
          },
          {
            text: 'Eliminar',
            role: 'eliminar',
            handler: () => {
              console.log('Eliminar clicked');
              this.eliminar(cliente);
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

    // muestra un menu para clientes inactivos
    presentActionSheetInact(cliente) {
      const action = this.actionsheet.create({
        title: 'Options',
        buttons: [
          {
            text: 'Detalles',
            role: 'detalles',
            handler: () => {
              console.log('Detalles clicked');
              
              this.navCtrl.push(this.infocliente, {cliente : cliente});
            }
          },
          {
            text: 'Activar',
            role: 'activar',
            handler: () => {
              console.log('activar clicked');
              this.activarCliente(cliente);
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
    }

    // menu desplegable
    actionSheet(cliente){
      console.log("action sheet");
      if(cliente.activo=='0'){ // si el cliente esta inactivo
        this.presentActionSheetInact(cliente);
      }
      else{ // si el cliente esta activo
        this.presentActionSheetAct(cliente);
      }


    }
    verFiltro(){
      if(this.filtro.val!=this.filtro_aux){
        this.presentLoading();
        this.filtro_aux=this.filtro.val;
        this.initializeItems();     // funcion que inicializa la lista auxiliar segun el caso
      }
    }
    
  }
