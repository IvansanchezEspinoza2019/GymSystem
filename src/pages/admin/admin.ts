import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { AddClientePage } from '../add-cliente/add-cliente';
import { AllcustomersPage } from '../allcustomers/allcustomers';
import { AddAparatosPage } from '../add-aparatos/add-aparatos';
import { AllaparatosPage} from '../allaparatos/allaparatos';
import { AddEmpleadoPage } from '../add-empleado/add-empleado';
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
import {AsistenciaListPage} from '../asistencia-list/asistencia-list'
import {LoginPage} from '../login/login';
import {AdminProfilePage} from '../admin-profile/admin-profile'
import {VentaPage} from '../venta/venta';
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

  //paquete
  paquete =  PackPage;
  list_pack = ListPackPage;

  //login
  login = LoginPage;
 
  //aparatos
  aparatos = AddAparatosPage;
  allaparatos = AllaparatosPage;

  //empleados
  addEmp = AddEmpleadoPage;
  all_empleados = AllEmployeesPage;

  //asistencia
  asist =AsistenciaPage;
  list = AsistenciaListPage;

  // reportes
  reportes = ReportesPage;

  //tienda
  add_product = AddProductoPage;
  modif_producto = ModifProductPage;
  all_products= AllProductsPage;
  tienda_venta = VentaPage;

  //perfil admin
  profile_adm = AdminProfilePage;


  admin= {};

  constructor(public navCtrl: NavController,
    private http: HttpClient,
    public navParams: NavParams,
    public alert: AlertController,
    public menu: MenuController) {
      menu.enable(true);
      this.admin = this.navParams.get('admin');
      console.log("registro");
      console.log(this.admin);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  tienda(){
    console.log("Aqui va la tienda...");
    this.navCtrl.push(this.tienda_venta,{id: this.admin['id_empleado']});
  }

  exit(){

    let exit= this.alert.create({
    title: 'SALIR',
    message: '¿Seguro que desea cerrar sesion?',
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
          this.logout()
        }
      }
    ]
  });
  exit.present();
}

  logout(){
    this.navCtrl.push(this.login);
  }

  profile(){
    this.navCtrl.push(this.profile_adm,{admin: this.admin});
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
  asistenList(){
    this.navCtrl.push(this.list);
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