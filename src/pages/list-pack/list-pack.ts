import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController} from 'ionic-angular';

import { PackDetailsPage } from '../pack-details/pack-details';
import { ModifyPackPage } from '../modify-pack/modify-pack'


@IonicPage()
@Component({
  selector: 'page-list-pack',
  templateUrl: 'list-pack.html',
})

export class ListPackPage {

  apiUrl= "http://gymdb/";
  packs=[];
  items=[];

  detalles = PackDetailsPage;
  editar = ModifyPackPage;

  funcion={
    "funcion": "getAllPacks"
  }

  filtro={      
    val: null
  }

  filtro_aux="";


  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public actionsheet: ActionSheetController,
    public alert: AlertController,
    public navParams: NavParams) {

      this.filtro.val="1";      
      this.filtro_aux="1";

      this.actualizar();

  }

  op_cancel = this.alert.create({
    title: 'Error',
    message: 'No se ha podido eliminar paquete correctamente',
    buttons: ['Ok']
  });

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPackPage');
  }

  getItems(ev: any) {

    this.initializeItems();
    console.log(ev.target.value);

    let val = ev.target.value;
    if(val!=''){
      val = ev.target.value.toUpperCase();
   }
    this.items = this.items.filter(pack => {
        console.log(JSON.stringify(JSON.stringify(pack.nombre)));
        return  pack.nombre.includes(val);
      });
    
    console.log(JSON.stringify(this.packs));
  }

  actionSheet(pack){
    console.log("action sheet");

    if(pack['activo']==0){
      this.presentActionSheetInact(pack);
    }
    else{
      this.presentActionSheet(pack);
    }
   
  }

  presentActionSheet(pack) {
    const action = this.actionsheet.create({
      title: 'Opciones de Pago',
      buttons: [
        {
          text: 'Ver detalles',
          role: 'detalles',
          handler: () => {
            console.log(pack);
            this.navCtrl.push(this.detalles, {pack : pack});
          }
        },{
          text: 'Editar',
          role: 'editar',
          handler: () => {
            console.log('Archive clicked');
            this.navCtrl.push(this.editar, {pack : pack});
          }
        },{
          text: 'Eliminar',
          role: 'eliminar',
          handler: () => {
            this.eliminar(pack);
          }
        },{
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
   action.present();
}

presentActionSheetInact(pack) {
  const action = this.actionsheet.create({
    title: 'Opciones de Pago',
    buttons: [
      {
        text: 'Activar',
        role: 'activar',
        handler: () => {
          this.activar(pack);
        }
      },{
        text: 'Cancelar',
        role: 'cancelar',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
 action.present();
}

  eliminar(pack){
    
    let elim = this.alert.create({
      title: 'ADVERTENCIA',
      message: '¿SEGURO QUE DESEA ELIMINAR PAQUETE?',
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
            console.log(pack);
            pack['funcion']="eliminarPaquete";
            this.http.post(this.apiUrl,JSON.stringify(pack))
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
    elim.present();
  }

  activar(pack){
    
    let elim = this.alert.create({
      title: 'ADVERTENCIA',
      message: '¿SEGURO QUE DESEA ACTIVAR PAQUETE?',
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
            console.log(pack);
            pack['funcion']="activarPaquete";
            this.http.post(this.apiUrl,JSON.stringify(pack))
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
    elim.present();
  }

  actualizar(){
    this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        //console.log(res);
        this.packs = res['packs'];

        this.initializeItems();
        
        console.log(JSON.stringify(this.packs));

      }, error=>{
        console.log(JSON.stringify(error))
      });
  }

  initializeItems() {
      
    if(this.filtro.val=="0"){ // todos
      this.items = this.packs;
    }
    else if(this.filtro.val=="1"){ //activos
      this.inicializarActivos();
    }
    else if(this.filtro.val=="2"){ //inactivos
      this.inicializarInactivos();
    }
  }

  inicializarActivos(){           //inicializa la lista auxiliar con los clientes que estan inaactivos
    this.items = this.packs.filter(pack => {
      console.log(JSON.stringify(JSON.stringify(pack.nombre)));
      return  pack.activo==1;
    });
    console.log(JSON.stringify(this.items));
  }

  inicializarInactivos(){     //inicializa la lista auxiliar con los clientes que estan inactivos
    this.items = this.packs.filter(pack => {
      console.log(JSON.stringify(JSON.stringify(pack.nombre)));
      return  pack.activo==0;
    });
    console.log(JSON.stringify(this.items));
  }

  verFiltro(){
    if(this.filtro.val==this.filtro_aux){
        console.log("NO hay cambio");
    }else{
        this.filtro_aux=this.filtro.val;
        console.log("SI hay cambio");
        this.initializeItems();
    }
  }

}
