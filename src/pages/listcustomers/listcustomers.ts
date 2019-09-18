import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController } from 'ionic-angular';

//import { InfoClientePage } from'../info-cliente/info-cliente';
/**
 * Generated class for the ListcustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listcustomers',
  templateUrl: 'listcustomers.html',
})
export class ListcustomersPage {
  //info = InfoClientePage;

  apiUrl= "http://gymdb/";
  clientes=[];
  items=[];


  funcion={
    "funcion": "getAllCustomers"
  }

  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public actionsheet: ActionSheetController,
    public navParams: NavParams) {
      this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        console.log(res);
        this.clientes = res['clientes'];
        
        
       this.initializeItems();
        
        console.log(JSON.stringify(this.clientes));

      }, error=>{
        console.log(JSON.stringify(error))
      });
    }

  presentActionSheet() {
    const action = this.actionsheet.create({
      title: 'Options',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListcustomersPage');
  }

  actionSheet(){
    console.log("action sheet");
    this.presentActionSheet();
  //his.navCtrl.push(this.info, {cliente: cliente});
  }
  initializeItems() {
    this.items = this.clientes;
  }

  getItems(ev: any) {

    this.initializeItems();
    console.log(ev.target.value);

    let val = ev.target.value.toUpperCase();
    this.items = this.items.filter(cliente => {
        console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
        return  cliente.Nombre.includes(val);
      });
    
    console.log(JSON.stringify(this.clientes));
  }


}
