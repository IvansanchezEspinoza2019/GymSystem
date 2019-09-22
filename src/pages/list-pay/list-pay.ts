import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController } from 'ionic-angular';
import { RecibePayPage } from '../recibe-pay/recibe-pay';

@IonicPage()
@Component({
  selector: 'page-list-pay',
  templateUrl: 'list-pay.html',
})
export class ListPayPage {

  apiUrl= "http://gymdb:8080/";
  pagos=[];
  items=[];

  recibe = RecibePayPage;
 
  funcion={
    "funcion": "getAllPays"
  }

  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public actionsheet: ActionSheetController,
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

  presentActionSheet() {
      const action = this.actionsheet.create({
        title: 'Opciones de Pago',
        buttons: [
          {
            text: 'Ver Recibo',
            role: 'recibo',
            handler: () => {
              this.navCtrl.push(this.recibe);
            }
          },{
            text: 'Editar',
            role: 'editar',
            handler: () => {
              console.log('Archive clicked');
            }
          },{
            text: 'Eliminar',
            role: 'eliminar',
            handler: () => {
              console.log('Archive clicked');
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

  actionSheet(){
    console.log("action sheet");
    this.presentActionSheet();
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
        console.log(JSON.stringify(JSON.stringify(pago.id_cliente)));
        return  pago.id_cliente.includes(val);
      });
    
    console.log(JSON.stringify(this.pagos));
  }

}
