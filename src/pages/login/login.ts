import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController,LoadingController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { AdminPage } from '../admin/admin';
import { EmployeePage } from '../employee/employee';
import { CustomerPage } from '../customer/customer';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  admin = AdminPage;
  employee = EmployeePage;
  custumer = CustomerPage;
  
  constructor(public navCtrl: NavController,
    public loadingCtrl:LoadingController,
    private http: HttpClient,
    public alerta:AlertController, public navParams: NavParams) {
  }



  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1500
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //this.getMenus();
  
  }
  
  datos={}
<<<<<<< HEAD
  apiUrl="http://gymdb:8080/"
  var={}
  getMenus(){
    let funcion = { 
      'funcion': 'getMenu'
    } 
    console.log(JSON.stringify(funcion));
    this.http.post(this.apiUrl, JSON.stringify(funcion))
    .subscribe(res=>{
      console.log(res); 
    }
    );
  }
=======
  apiUrl="http://gymdb/"
  
>>>>>>> 8154672a902427d956ee3fe94b55879b7415992e


  // boton de acceder
  access(){
    let miAlerta = this.alerta.create({
      title: 'OPERACION CANCELADA',
      message: 'ACCESO DENEGADO!!',
      buttons: ['ACEPTAR']
    });
    this.datos['funcion']='login'; //funcion logearse

    
    console.log(JSON.stringify(this.datos));
    this.http.post(this.apiUrl, JSON.stringify(this.datos))
    .subscribe(res=>{
    console.log(res);
      if(res == "-1"){
        console.log("No existe"); 
        miAlerta.present(); 
      }
      else{
          console.log("ACCESO PERMITIDO!!");
          console.log(res); // ya tiene los datos
          if(res['tipo']=="1"){
            console.log("Eres cliente");
            this.presentLoading();
            this.navCtrl.push(this.custumer);
          }
          else if(res['tipo']=="2"){
            console.log("eres empleado");
            this.presentLoading();
            this.navCtrl.push(this.employee);
          }
          else if(res['tipo']=="3"){
            console.log("eres administrativo");
            this.presentLoading();
            this.navCtrl.push(this.admin);
          }
        } 
    }
    );
  }
}


