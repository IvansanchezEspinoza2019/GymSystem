import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController} from 'ionic-angular';

import { ModifProductPage } from '../modif-product/modif-product';
import { ProductoDetailsPage } from '../producto-details/producto-details'

@IonicPage()
@Component({
  selector: 'page-all-products',
  templateUrl: 'all-products.html',
})

export class AllProductsPage {

  apiUrl="http://gymdb/"; 
  products=[];
  items=[];

  modif_product= ModifProductPage;
  detail_product = ProductoDetailsPage;

  funcion={
    "funcion": "getAllProducts"
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
    title: 'ERROR',
    message: 'No se ha podido eliminar producto correctamente',
    buttons: ['OK']
  });

  actualizar(){
    this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        //console.log(res);
        this.products = res['products'];

        this.initializeItems();
        
        console.log(JSON.stringify(this.products));

      }, error=>{
        console.log(JSON.stringify(error))
      });
  }

  initializeItems() {
      
    if(this.filtro.val=="0"){ // todos
      this.items = this.products;
    }
    else if(this.filtro.val=="1"){ //activos
      this.inicializarActivos();
    }
    else if(this.filtro.val=="2"){ //inactivos
      this.inicializarInactivos();
    }
  }

  inicializarActivos(){           
    this.items = this.products.filter(product => {
      console.log(JSON.stringify(JSON.stringify(product.activo)));
      return  product.activo == 1;
    });
    console.log(JSON.stringify(this.items));
  }

  inicializarInactivos(){    
    this.items = this.products.filter(product => {
      console.log(JSON.stringify(JSON.stringify(product.activo)));
      return  product.activo == 0;
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

  getItems(ev: any) {

    this.initializeItems();
    console.log(ev.target.value);

    let val = ev.target.value;
    if(val!=''){
      val = ev.target.value.toUpperCase();
   }
    this.items = this.items.filter(product => {
        console.log(JSON.stringify(JSON.stringify(product.nombre)));
        return  product.nombre.includes(val);
      });
    
    console.log(JSON.stringify(this.products));
  }

  actionSheet(product){
    console.log("action sheet");

    if(product['activo']==0){
      this.presentActionSheetInact(product);
    }
    else{
      this.presentActionSheet(product);
    }
  }

  presentActionSheet(product) {
    const action = this.actionsheet.create({
      title: 'Opciones de Pago',
      buttons: [
        {
          text: 'Ver detalles',
          role: 'detalles',
          handler: () => {
            console.log(product);
            
            this.navCtrl.push(this.detail_product, {producto : product});
          }
        },{
          text: 'Editar',
          role: 'editar',
          handler: () => {
            this.navCtrl.pop();
            this.navCtrl.push(this.modif_product, { producto : product});
          }
        },{
          text: 'Eliminar',
          role: 'eliminar',
          handler: () => {
            this.eliminar(product);
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

  eliminar(product){
      
    let elim = this.alert.create({
      title: 'ADVERTENCIA',
      message: '¿Desea ELIMINAR producto?',
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
            console.log(product);
            product['funcion']="eliminarProducto";
            this.http.post(this.apiUrl,JSON.stringify(product))
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

  presentActionSheetInact(product) {
    const action = this.actionsheet.create({
      title: 'Opciones de Pago',
      buttons: [
        {
          text: 'Ver Detalles',
          role: 'detalles',
          handler : ()=>{
            console.log(product);
            
            this.navCtrl.push(this.detail_product, {producto : product});

          }
        },
        {
          text: 'Activar',
          role: 'activar',
          handler: () => {
            this.activar(product);
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

  activar(product){
      
    let elim = this.alert.create({
      title: 'ADVERTENCIA',
      message: '¿Seguro que desea ACTIVAR producto?',
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
            console.log(product);
            product['funcion']="activarProducto";
            this.http.post(this.apiUrl,JSON.stringify(product))
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

  ionViewDidLoad() {
      console.log('ionViewDidLoad AllProductsPage');
  }

  }
