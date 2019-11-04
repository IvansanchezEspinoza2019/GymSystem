import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient }  from '@angular/common/http';
import { AllProductsPage } from '../all-products/all-products';

/**
 * Generated class for the ModifProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-product',
  templateUrl: 'modif-product.html',
})
export class ModifProductPage {
  //pagina de productos
  all = AllProductsPage;

  myForm: FormGroup;
 
  producto ={}  // el producto se envía por parámetro
  comp={} // es una copia del registro original
  apiUrl="http://gymdb/";       // servidor

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertController, private http: HttpClient,private cl: FormBuilder) {
    this.producto=this.navParams.get('producto');
    this.crearForm();
    this.crearCopia();
  }

// crea el form
crearForm(){
  this.myForm = this.cl.group({
    producto: [this.producto['id_producto']],
    nuevo_producto: [this.producto['nombre'],[Validators.required]],
    descripcion: [this.producto['descripcion'],[Validators.required]],
    precio_entrada:  [this.producto['precio_entrada'],[Validators.required]],
    precio_salida:  [this.producto['precio_salida'],[Validators.required]],
    cantidad: [this.producto['cantidad'],[Validators.required]],
    proveedor: [this.producto['proveedor'],[Validators.required]],
  });
 

}
// sirve para en un futuro compararlo con los nuevos datos
crearCopia(){
  this.comp={
    'producto': this.producto['id_producto'],
    'nuevo_producto': this.producto['nombre'],
    'descripcion': this.producto['descripcion'],
    'precio_entrada':this.producto['precio_entrada'],
    'precio_salida': this.producto['precio_salida'],
    'cantidad': this.producto['cantidad'],
    'proveedor': this.producto['proveedor']
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifProductPage');
  }
  saveData(){
    let error = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'No se han modificado datos!!',
      buttons: ['Aceptar']
      
    });


    if(JSON.stringify(this.myForm.value) != JSON.stringify(this.comp)){
    let success = this.alert.create({
      title: 'OPERACION EXITOSA',
      message: 'Agregado correctamente!!',
      buttons: ['Aceptar']
      
    });
    let product_rep = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'Ya existen productos con ese nombre!!',
      buttons: ['Aceptar']
      
    });

      var mayus = this.myForm.controls['nuevo_producto'].value;
      var desc = this.myForm.controls['descripcion'].value;
      var prov = this.myForm.controls['proveedor'].value;

      if(mayus!=null){
        mayus = mayus.toUpperCase();
        this.myForm.controls['nuevo_producto'].setValue(mayus);   // covierte a mayuscula el producto
      }
      if(desc!=null){
        desc = desc.toUpperCase();
        this.myForm.controls['descripcion'].setValue(desc);   
      }
      if(prov!=null){
        prov = prov.toUpperCase();
        this.myForm.controls['proveedor'].setValue(prov);   
      }
    
    
  
    console.log((this.myForm.value));
    var obj = JSON.parse(JSON.stringify(this.myForm.value));
    obj['funcion']='modifProducto';

    console.log(obj);

    this.http.post(this.apiUrl,JSON.stringify(obj))
    .subscribe(res=>{
      console.log("res del server");
      console.log(res);
      if(res=="exito"){
        success.present();
        this.navCtrl.push(this.all);
      }
      else if(res=="product_rep"){
        product_rep.present();
      }
    }, error=>{
      console.log(error);
    });
  
    }else{
      error.present();
    }
    }
}
