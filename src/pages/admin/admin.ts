import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { AddClientePage } from 'c:/Users/acer/Desktop/GymSystem/GymSystem/src/pages/add-cliente/add-cliente';
import { AllcustomersPage } from '../allcustomers/allcustomers';
import { AddAparatosPage } from '../add-aparatos/add-aparatos';
import { AllaparatosPage} from '../allaparatos/allaparatos';
import { AddEmpleadoPage } from '../add-empleado/add-empleado';
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//import { AddClientePage } from '../add-cliente/add-cliente';
//import { ListcustomersPage } from '../listcustomers/listcustomers';
//import { PayPage } from '../pay/pay';
import {ListPayPage} from '../list-pay/list-pay'
import { PackPage } from '../pack/pack';
import { ListPackPage } from '../list-pack/list-pack';
import { AllEmployeesPage } from '../all-employees/all-employees';
import { AsistenciaPage } from '../asistencia/asistencia';
import { PayPage } from '../pay/pay';
import { ReportesPage } from '../reportes/reportes';
import { AddProductoPage } from '../add-producto/add-producto';
import { ModifProductPage} from '../modif-product/modif-product';
import {AllProductsPage } from '../all-products/all-products';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  //clientes
  addCliente = AddClientePage;
  listCustomers = AllcustomersPage;

  //listCustomers = ListcustomersPage;
  //pagos
  payPage = PayPage;
  listPayPage = ListPayPage;


  paquete =  PackPage;
  list_pack = ListPackPage;
 
  //aparatos
  aparatos = AddAparatosPage;
  allaparatos = AllaparatosPage;

  //empleados
  addEmp = AddEmpleadoPage;
  all_empleados = AllEmployeesPage;

  //asistencia
  asist =AsistenciaPage;

  // reportes
  reportes = ReportesPage;

  //tienda
  add_product = AddProductoPage;
  modif_producto = ModifProductPage;
  all_products= AllProductsPage;


  admin= {};

  constructor(public navCtrl: NavController,
    private http: HttpClient,
    public navParams: NavParams) {
      this.admin = this.navParams.get('admin');
      console.log("registro");
      console.log(this.admin);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  apiUrl = "http://gymdb/";
  agregarCLiente(){
    this.navCtrl.push(this.addCliente);
  }
  mostrar(){
    let funcion = { 
      'funcion': 'mostrar'  
    } 
    console.log(JSON.stringify(funcion));
    this.http.post(this.apiUrl, JSON.stringify(funcion))
    .subscribe(res=>{
      console.log(res);
    }
    );

  }
  
  allCustomers(){
      this.navCtrl.push(this.listCustomers);
  }

  pay(){
    this.navCtrl.push(this.payPage);
}

  listPay(){
    this.navCtrl.push(this.listPayPage);
  }
  
  agregarAparato(){
    this.navCtrl.push(this.aparatos, { id: this.admin['id_empleado']});
  }

  allAparatos(){
    this.navCtrl.push(this.allaparatos,  { id: this.admin['id_empleado'], filtro: '1'});
  }

  agregarEmpleado(){
    this.navCtrl.push(this.addEmp);
  }
  allEmpleados(){
    this.navCtrl.push(this.all_empleados);
  }

  pack(){
    this.navCtrl.push(this.paquete);
}

  listPack(){
    this.navCtrl.push(this.list_pack);
  }
  asisten(){
    this.navCtrl.push(this.asist);
  }
  reportes_pag(){
    this.navCtrl.push(this.reportes);
  }
  agregarProducto(){
    this.navCtrl.push(this.add_product);
  }
  mmodificarProducto(){
    this.navCtrl.push(this.modif_producto);
  }
  allProducts(){
    this.navCtrl.push(this.all_products);
  }

}