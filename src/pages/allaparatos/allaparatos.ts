import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController, LoadingController, AlertController} from 'ionic-angular';
import { ModifaparatoPage } from '../modifaparato/modifaparato';
import { HistorialAparatosPage } from '../historial-aparatos/historial-aparatos';

/**
 * Generated class for the AllaparatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allaparatos',
  templateUrl: 'allaparatos.html',
})

export class AllaparatosPage {

  historial = HistorialAparatosPage;
  id_empleado ={};
  constructor(public navCtrl: NavController, 
    private http:HttpClient,
    public action: ActionSheetController,
    public loading: LoadingController, 
    public alert: AlertController,
    public navParams: NavParams) {
      this.filtro.val=this.navParams.get('filtro');      //inicializa el filtro
      this.filtro_aux=this.navParams.get('filtro');      //no servira para comprobar si hay un cambio de filtro
      this.actualizar();    // funcion que obtiene los datos de la base de datos
      this.id_empleado = this.navParams.get('id');
      
  }
  apiUrl= "http://gymdb/";      //direccion del servidor
  aparatos=[];             //lista de clientes
  items=[];               //lista auxiliar
  modificar = ModifaparatoPage;
  
  filtro={      //controla el filtro por el cual se va a buscar 
   val: null
  }
  filtro_aux="";
    funcion={
      "funcion": "getInfoAparato"      //funcoin 
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllaparatosPage');
  }
  _historial(){
    this.navCtrl.push(this.historial);
  }

// obtiene los registros de la base de datos
actualizar(){
  this.http.post(this.apiUrl,JSON.stringify(this.funcion))
  .subscribe(res=>{
    //console.log(res);
    this.aparatos = res['aparatos'];
    
    this.initializeItems();   // lla,a a la funcion de inicializar, para que muestre segun el filtro
   
    console.log(JSON.stringify(this.aparatos));

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


  initializeItems() {
    
    if(this.filtro.val=="1"){ // todos los clientes
      this.inicializarActivos();
    }
    else if(this.filtro.val=="2"){ //todos los activos
      this.inicializarMant();
    }
    else if(this.filtro.val=="3"){ //todos los inactivos
      this.inicializarInact();
    }
  }


  inicializarActivos(){           //inicializa la lista auxiliar con los clientes que estan inaactivos
    this.items = this.aparatos.filter(aparato => {
      //console.log(JSON.stringify(JSON.stringify(aparato.Nombre)));
      return  aparato.estado=='1';
    });
    console.log(JSON.stringify(this.items));
  }

  inicializarMant(){     //inicializa la lista auxiliar con los clientes que estan inactivos
    this.items = this.aparatos.filter(aparato => {
      //console.log(JSON.stringify(JSON.stringify(aparato.Nombre)));
      return  aparato.estado=='2';
    });
    console.log(JSON.stringify(this.items));
  }
  inicializarInact(){     //inicializa la lista auxiliar con los clientes que estan inactivos
    this.items = this.aparatos.filter(aparato => {
      //console.log(JSON.stringify(JSON.stringify(aparato.Nombre)));
      return  aparato.estado=='3';
    });
    console.log(JSON.stringify(this.items));
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
  getItems(ev: any) {
  
    this.initializeItems(); // inicializa la lista auxiliar segun  el caso de filtro
    console.log(ev.target.value);
    let val = ev.target.value;
    if(val!=''){
       val = ev.target.value.toUpperCase();
    }
    this.items = this.items.filter(aparato => {
       // console.log(JSON.stringify(JSON.stringify(aparato.Nombre)));
        return  aparato.nombre.includes(val);
      });
    
    console.log(JSON.stringify(this.aparatos));
  }
  actionSheet(aparato){
    console.log("action sheet");
    this.presentActionSheet(aparato);
    //this.presentLoading();
    //this.actualizar();   // actualiza los datos 

  }
  presentActionSheet(aparato) {
    const action = this.action.create({
      title: 'Options',
      buttons: [
        {
          text: 'Modificar',
          role: 'modificar',
          handler: () => {
            console.log('modificar clicked');
            //
            aparato['filtro']=this.filtro.val;
            this.navCtrl.push(this.modificar, {aparato: aparato, id: this.id_empleado});
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
}
