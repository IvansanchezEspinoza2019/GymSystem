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
      "funcion": "getAllCustomers"
    }
    // obtiene los datos de las llaves foraneas, y el nombre por sepa
    getElements(cliente){
      this.datos_extra={
        'id_cliente': cliente['id_cliente'],
        'id_access': cliente['id_access'],
        'id_col': cliente['id_colonia'],
        'id_cp': cliente['id_cp'],
        'funcion': 'getForeignDataModif'
       }
      this.http.post(this.apiUrl, JSON.stringify(this.datos_extra))
      .subscribe(res=>{
        //console.log(res); 
        this.datos_extra['user']=res[0]['user'];
        this.datos_extra['colonia']=res[1]['user'];
        this.datos_extra['cp']=res[2]['user'];
        this.datos_extra['password']=res[3]['user'];
        this.datos_extra['nombre']=res[4]['user'];
        this.datos_extra['apellido_p']=res[5]['user'];
        this.datos_extra['apellido_m']=res[6]['user'];
       // console.log(JSON.stringify(this.datos_extra));
      }, error=>{
        console.log(error);
      }
      );
  
    }

    // obtiene los registros de la base de datos
    actualizar(){
      this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        //console.log(res);
        this.clientes = res['clientes'];
        
        
        this.items=this.clientes;  // inicializa la lista auxiliar
        
        console.log(JSON.stringify(this.clientes));

      }, error=>{
        console.log(JSON.stringify(error))
      });
    }


    //constructor
    constructor(public navCtrl: NavController,
      private http:HttpClient,
      public actionsheet: ActionSheetController,
      public alert: AlertController,
      public loading: LoadingController,
      public navParams: NavParams) {
        this.actualizar();    // funcion que obtiene los datos de la base de datos
        this.filtro.val="0";      //inicializa el filtro
        this.filtro_aux="0";      //no servira para comprobar si hay un cambio de filtro
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
      // barra de loading
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

    inicializarInactivos(){     //inicializa la lista auxiliar con los clientes que estan inaactivos
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
              cliente['colonia_str']=this.datos_extra['colonia'];
              cliente['cp_str']=this.datos_extra['cp'];
              cliente['user']=this.datos_extra['user'];
              cliente['password']=this.datos_extra['password'];
              cliente['nombre']=this.datos_extra['nombre'];
              cliente['apellido_p']=this.datos_extra['apellido_p'];
              cliente['apellido_m']=this.datos_extra['apellido_m'];
              console.log(JSON.stringify(cliente));
              
              this.navCtrl.push(this.modif, {cliente : cliente}); // envia los datos para modificarse
            }
          },
          {
            text: 'Eliminar',
            role: 'eliminar',
            handler: () => {

              console.log('Eliminar clicked');
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
                      cliente['funcion']="eliminarCliente";
                      this.http.post(this.apiUrl,JSON.stringify(cliente))
                      .subscribe(res =>{
                        console.log(res);
                        if(res=="exito"){
                            //this.success.present();
                            this.actualizar();
                            this.filtro.val="0";      //inicializa el filtro
                            this.filtro_aux="0";      //no servira para comprobar si hay un cambio de filtro

                        }
                        else{
                            //this.op_cancel.present();
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
              let act = this.alert.create({
                title: 'ADVERTENCIA',
                message: '¿ACTIVAR CLIENTE?',
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
                            //this.success.present();
                            this.actualizar();
                            this.filtro.val="0";      //inicializa el filtro
                            this.filtro_aux="0";      //no servira para comprobar si hay un cambio de filtro


                            //this.presentLoading();
                        }
                        else{
                            //this.op_cancel.present();
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
      this.getElements(cliente);
      if(cliente.activo=='0'){ // si el cliente esta inactivo
        this.presentActionSheetInact(cliente);
      }
      else{ // si el cliente esta activo
        this.presentActionSheetAct(cliente);
      }
      
      //this.presentLoading();
      //this.actualizar();   // actualiza los datos 

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
    // pasos para el fitro de busqueda
   /*
    pasos


    1. comprobar si hay cambios de filtro
    2. si lo hay, 
      - inicializar lista auxiliar dependiendo del filtro
      inicializar(){
          getItems('0'){  // o el valor del filtro '1'
           this.items = this.items.filter(cliente => {
          //console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
          return  cliente.Activo.includes('0');
        });
        }
      }
      -mostrar barra de loading
      -
      getItems(ev: any) {
  
      this.initializeItems(); // inicializa toda la lista dependiendo de que caso es, activo o no
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
    

    */
  }
