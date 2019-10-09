import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { ActionSheetController} from 'ionic-angular';
import { RecibePayPage } from '../recibe-pay/recibe-pay';
import { ModifyPayPage } from '../modify-pay/modify-pay';

@IonicPage()
@Component({
  selector: 'page-asistencia-list',
  templateUrl: 'asistencia-list.html',
})
export class AsistenciaListPage {

  apiUrl= "http://gymdb/";
  asistencia=[];
  items=[];

  funcion={
    "funcion": "getAsistToday"
  }

  constructor(public navCtrl: NavController,
    private http:HttpClient,
    public actionsheet: ActionSheetController,
    public alert: AlertController,
    public navParams: NavParams) {
      
      this.http.post(this.apiUrl,JSON.stringify(this.funcion))
      .subscribe(res=>{
        console.log(res);
        this.asistencia = res['asistencia'];

       this.initializeItems();
        
        console.log(JSON.stringify(this.asistencia));

      }, error=>{
        console.log(JSON.stringify(error))
      });
    }

    initializeItems() {
      this.items = this.asistencia;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsistenciaListPage');
  }

  getItems(ev: any) {

    this.initializeItems();
    console.log(ev.target.value);

    let val = ev.target.value.toUpperCase();

    this.items = this.items.filter(asist => {
        console.log(JSON.stringify(JSON.stringify(asist.name)));
        return  asist.name.includes(val);
      });

      console.log(JSON.stringify(this.asistencia));
    
  }

}
