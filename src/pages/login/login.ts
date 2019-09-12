import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { AdminPage } from 'C:/Users/acer/Desktop/GymApp/GYM-APP/src/pages/admin/admin';
import { EmployeePage } from 'C:/Users/acer/Desktop/GymApp/GYM-APP/src/pages/employee/employee';
import { CustomerPage } from 'C:/Users/acer/Desktop/GymApp/GYM-APP/src/pages/customer/customer';



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
    private http: HttpClient,
    public alerta:AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //this.getMenus();
  
  }
  
  datos={}
  apiUrl="http://gymdb/"
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
            this.navCtrl.push(this.custumer);
          }
          else if(res['tipo']=="2"){
            console.log("eres empleado");
            this.navCtrl.push(this.employee);
          }
          else if(res['tipo']=="3"){
            console.log("eres administrativo");
            this.navCtrl.push(this.admin);
          }
        } 
    }
    );
  }
}


