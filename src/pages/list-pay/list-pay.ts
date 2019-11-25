import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController} from 'ionic-angular';
import { RecibePayPage } from '../recibe-pay/recibe-pay';
import { ModifyPayPage } from '../modify-pay/modify-pay';


@IonicPage()
@Component({
  selector: 'page-list-pay',
  templateUrl: 'list-pay.html',
})
export class ListPayPage {

  apiUrl= "http://gymdb/";
  pagos=[];
  items=[];

  recibe = RecibePayPage;
  modify = ModifyPayPage;
 
  funcion={
    "funcion": "getAllPays"
  }

  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public actionsheet: ActionSheetController,
    public alert: AlertController,
    public navParams: NavParams) {
      this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        console.log(res);
        this.pagos = res['pagos'];

       this.initializeItems();
        
        console.log(JSON.stringify(this.pagos));

      }, error=>{
        console.log(JSON.stringify(error))
      });
    }

    op_cancel = this.alert.create({
      title: 'ERROR',
      message: 'No se ha podido eliminar pago correctamente',
      buttons: ['OK']
      
    });

  actualizar(){
    this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        //console.log(res);
        this.pagos = res['pagos'];

       this.initializeItems();
        
        console.log(JSON.stringify(this.pagos));

      }, error=>{
        console.log(JSON.stringify(error))
      });
  }

  eliminar(pago){
    let elim = this.alert.create({
      title: 'ADVERTENCIA',
      message: '¿Seguro que desea ELIMINAR pago?',
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
            console.log(pago);
            pago['funcion']="eliminarPago";
            this.http.post(this.apiUrl,JSON.stringify(pago))
            .subscribe(res =>{
              console.log(res);
              if(res=="exito"){
                this.items = [];
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

  presentActionSheet(pago) {
      const action = this.actionsheet.create({
        title: 'Opciones de Pago',
        buttons: [
          {
            text: 'Ver Recibo',
            role: 'recibo',
            handler: () => {
              console.log(pago);
              this.navCtrl.push(this.recibe, {pago : pago});
            }
          },{
            text: 'Editar',
            role: 'editar',
            handler: () => {
              console.log('Archive clicked');
              this.navCtrl.pop();
              this.navCtrl.push(this.modify, {pago : pago});
            }
          },{
            text: 'Eliminar',
            role: 'eliminar',
            handler: () => {
              this.eliminar(pago);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPayPage');
  }

  actionSheet(pago){
    console.log("action sheet");
    this.presentActionSheet(pago);
  //his.navCtrl.push(this.info, {cliente: cliente});
  }

  initializeItems() {
    this.items = this.pagos;
  }

  getItems(ev: any) {

    this.initializeItems();
    console.log(ev.target.value);

    let val = ev.target.value;
    this.items = this.items.filter(pago => {
        console.log(JSON.stringify(JSON.stringify(pago.id_pago)));
        return  pago.id_pago.includes(val);
      });
    
    console.log(JSON.stringify(this.pagos));
  }

}
