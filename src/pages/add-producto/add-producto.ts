import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient }  from '@angular/common/http';
/**
 * Generated class for the AddProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-producto',
  templateUrl: 'add-producto.html',
})
export class AddProductoPage {
  hideProducto= false;
  hideOtro= false;

  myForm: FormGroup;


  apiUrl="http://gymdb/";       // servidor

  dat={     
    'id': '0',
    'nombre': 'OTRO'
  };
  productos=[]

  constructor(public navCtrl: NavController, public navParams: NavParams,private alert: AlertController,private http: HttpClient,private cl: FormBuilder) {
    this.crearForm();
    this.obtenerProducts();
  }

// crea el form
crearForm(){
  this.myForm = this.cl.group({
    producto: ['', [Validators.required]],
    nuevo_producto: [''],
    descripcion: [''],
    precio_entrada:  [''],
    precio_salida:  [''],
    cantidad: ['',[Validators.required]],
    proveedor: [''],
  });
}
validar(){
  if(this.productos.length>1){
      this.hideProducto= false;
      this.hideOtro= true;
   }
   else{
     this.hideOtro=false;
     this.hideProducto=true;
     this.myForm.controls['producto'].setValue('0');
   }
  }

obtenerProducts(){
  let funcion={
    'funcion': 'getProductosProveedores'
  }
  this.http.post(this.apiUrl,JSON.stringify(funcion))
  .subscribe(res=>{console.log(res); this.productos=res['productos'];this.productos.push({'id':'0','nombre': 'OTRO'});this.validar();},error=>{console.log(error)})
}
onChange(ev: any){
  console.log(ev);
  if(ev==0){  // si la categoria de las opciones no se encuentra
    this.hideOtro=false;  // hace vicible un input
  }
  else{
    this.hideOtro=true;  // lo esconde
  }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductoPage');
  }

  saveData(){
    let miAlerta = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'FALTAN DATOS!',
      buttons: ['ACEPTAR']
      
    });
    if(this.hideOtro==false){   // si agreaga un nuevo producto
        if(this.myForm.controls['nuevo_producto'].value==''
        || this.myForm.controls['descripcion'].value==''
        ||this.myForm.controls['precio_entrada'].value==''
        ||this.myForm.controls['precio_salida'].value==''
        ||this.myForm.controls['proveedor'].value==''){  // si ese campo esta vacio
          miAlerta.present();
          return;
        }
        else{
          this.enviarForm();  //envia formulario
          return;
        }
      }
    this.enviarForm(); // envia formulario
  }

  enviarForm(){
    let success = this.alert.create({
      title: 'OPERACION EXITOSA',
      message: 'AGREGADO CORRECTAMENTE',
      buttons: ['ACEPTAR']
      
    });
    let product_rep = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'PRODUCTO REPETIDO',
      buttons: ['ACEPTAR']
      
    });

      var mayus = this.myForm.controls['nuevo_producto'].value;
      var desc = this.myForm.controls['descripcion'].value;
      var prov = this.myForm.controls['proveedor'].value;

      if(mayus!=null){
        mayus = mayus.toUpperCase();
        this.myForm.controls['nuevo_producto'].setValue(mayus);   // covierte a mayuscula la categoria
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
    obj['funcion']='addProducto';

    console.log(obj);

    this.http.post(this.apiUrl,JSON.stringify(obj))
    .subscribe(res=>{
      console.log("res del server");
      console.log(res);
      if(res=="exito"){
        success.present();
        this.reiniciarForm();
        //this.actualizar_admin_aparato(res['id_aparato']);
      }
      else if(res=="product_rep"){
        product_rep.present();
      }
    }, error=>{
      console.log(error);
    });
  }
  reiniciarForm(){
    this.myForm.reset();
    this.obtenerProducts();
  }


}
