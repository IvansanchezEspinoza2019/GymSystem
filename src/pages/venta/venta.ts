import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController,NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the VentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venta',
  templateUrl: 'venta.html',
})


export class VentaPage {
  disable_pago=true;
  disable_cancelar= true;
  


  myForm: FormGroup;
  productos = []
  respaldo_disponibles=[]
  disponibilidad_p={
    val: -1,
    precio: -1,
  }
  ticket={
    id_admin: null,
    activo: '0',
    fecha: new Date().toString(),
    total: 0.0,
    productos: [],
    pago: 0.0,
    cambio: 0.0
  }
  

  hideCantidad = true;
  apiUrl="http://gymdb/";
  constructor(public navCtrl: NavController,private http: HttpClient,private cl: FormBuilder,private alert:AlertController, public navParams: NavParams) {
    this.crearForm();
    this.getProducts();
    this.ticket.id_admin = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentaPage');
  }

  getProducts(){
    let funcion ={
      'funcion': 'getProductosActivos'
    }
    this.http.post(this.apiUrl,JSON.stringify(funcion))
    .subscribe(res=>{this.productos=res['productos'];console.log(this.productos);});
  }

 crearForm(){
  this.myForm = this.cl.group({
    index_p: ['', [Validators.required]],
    cantidad: ['', [Validators.required,Validators.pattern(/^([1-9]\d*)?$/)]],
   
  });
 }
verificarExistencia(){
  if(this.disponibilidad_p.val==0){
    this.myForm.controls['cantidad'].setValue('');
    console.log(this.myForm.controls['cantidad'].value);
  }
}
 onChange(ev){
  console.log(ev);
  this.disponibilidad_p.val = this.productos[parseInt(ev)].disponibles;
  this.disponibilidad_p.precio = this.productos[parseInt(ev)].precio_salida;
  this.verificarExistencia();

 }
  actionSheet(){
    this.hideCantidad=false;
  }

  addCuantity(cantidad: number,precio: number) : number {return cantidad * precio}; // funcion que calcula el subtotal

  verifExistensProduct(id: string,cantidad:number,sub_total_parcial: number): boolean{
    for(let sourceRow of this.ticket.productos) {                 // recorre el ticket actual en busca de la existencia del nuevo producto
    
      if(sourceRow.id_producto == id){                // ya se habia agregado el mismo producto
          sourceRow.cantidad = sourceRow.cantidad + cantidad;           // suma las cantidades
          sourceRow.subtotal = sourceRow.subtotal + sub_total_parcial;  // suma los precios
         return true;
          
      }
    }
    return false;
  }
  
  actualizaVariables(){
    this.ticket.activo='1';                                                   // activa la compra por si acaso
    this.ticket.fecha = new Date().toString();                                // actualiza la fecha
    this.disable_pago=false;
    this.disable_cancelar=false;
  }

// actualiza la disponibilidad del prducto actual
disponibilid_producto_actual(index: number){
    this.disponibilidad_p.val= this.productos[index].disponibles;
  }

  respaldarCantidadProducto(index: number,cantidad: number){  // respalda la cantidad de producto que se desea comprar
     this.respaldo_disponibles.push({index: index,cantidad: cantidad});
     this.productos[index].disponibles=parseFloat(this.productos[index].disponibles)-cantidad;
     this.disponibilid_producto_actual(index);
      console.log(this.respaldo_disponibles);
  }

  importarRespaldoCantidad(){                     // vueleve a almacenar la cantidad inicial de productos antes de la compra activa
    
    for(let Row of this.respaldo_disponibles) {                 // recorre el ticket actual en busca de la existencia del nuevo producto
      this.productos[Row.index].disponibles=parseFloat(this.productos[Row.index].disponibles)+Row.cantidad;
      
    }
   this.respaldo_disponibles=[]   // vacia la lista
  }
    
  

  aniadir(){
    let index: number=parseInt(this.myForm.controls['index_p'].value);        // obtiene indice del objeto dentro del arreglo
    let producto = this.productos[index];                                     // obtiene registro del producto
    let cantidad: number=parseFloat(this.myForm.controls['cantidad'].value);  // cantidad temporal que se elijio del producto

    let overflow = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'No hay suficientes productos!!. Cantidad dispoble: '+producto.disponibles,
      buttons: ['Aceptar']
      
    });
   
    if(cantidad > parseFloat(producto.disponibles)){
      console.log("no hay tantos productos");
      overflow.present();
      return;
    }
    
    this.actualizaVariables();

   let sub_total_parcial:number = this.addCuantity(cantidad,parseFloat(producto.precio_salida));  // funcion que retorna el calculo de cantidad de p * precio unitario
 
  if(this.verifExistensProduct(producto.id_producto,cantidad,sub_total_parcial)==false){  // funcion que verifica ya existe el producto en el ticket y si no existe..
    console.log("no existe el producto");
    this.ticket.productos.push({'index':index,'id_producto': producto.id_producto,'nombre': producto.nombre,'cantidad': cantidad, 'subtotal': sub_total_parcial, 'p_c': producto.precio_entrada,'p_v': producto.precio_salida}); // lo agrega a la compra
  }
  else{
    console.log("si existe el producto");
  }
   console.log(this.ticket);
   this.ticket.total = this.ticket.total + sub_total_parcial;   // va agregando la cantidad total a pagar

   this.respaldarCantidadProducto(index,cantidad);    /// respalda la cantidad de producto que se desea comprar
   this.verificarExistencia();
   }




  cancelarCompra(){
    if(this.ticket.activo=='1'){
      let act = this.alert.create({
        title: 'ADVERTENCIA',
        message: '¿Desea cancelar la compra?',
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
            role: 'aceptar',      // si esta desactivado, lo activara
            handler: data=>{
              console.log("cancelar compra");
              //////// LIMPIA EL TICKET  /////
             this.lipiarTicket();
              //////////////////////////////////
              this.importarRespaldoCantidad();   // REGRESA LA DISPONIBILIDAD DE PRODUCTOS A COMO ESTABA ANTES DE LA COMRA ACTUAL
              this.disponibilid_producto_actual(this.myForm.controls['index_p'].value);  // ACTUALIZA LA DISPONIBILIDAD DEL PRODUCTO ACTUAL
            }
          }
        ]
      });
      act.present();
    }  
  }

  lipiarTicket(){
     //////// LIMPIA EL TICKET  /////
     this.ticket['activo']='0';/////
     this.ticket['total']=0.0//////
     this.ticket['productos']=[]///
     this.ticket['pago']=0.0; ///
     this.ticket['cambio']=0.0; ///
     this.disable_pago=true;//////
     this.disable_cancelar=true;///
     //////////////////////////////////
  }

 //////// FUNCION PARA QUITAR UN PRODUCTO DEL TICKET DE COMPRA  /////////
  quitar(index: number){
    console.log(index);
    let sub_compra= this.ticket.productos[index];    /// obtiene la subcompra
    this.actualizar_datos_subcompra(parseInt(sub_compra.index),parseFloat(sub_compra.cantidad),parseFloat(sub_compra.subtotal));
    this.removeItemTicket(index);
  }

  actualizar_datos_subcompra(index: number,cantidad: number, subtotal){
    this.productos[index].disponibles+=cantidad;
    this.ticket.total-=subtotal;
   if(this.ticket.total <= 0){
     this.lipiarTicket();
   }
    if(index == parseInt(this.myForm.controls['index_p'].value)){
      this.disponibilidad_p.val=this.productos[index].disponibles;
    }
  }

  removeItemTicket(index: number){
    if ( index !== -1 ) {
      this.ticket.productos.splice( index, 1 );
  }
 
  }
   ///////FIN FUNCION QUITAR ELEMENTO DEL TICKET   /////



   //////// FUNCION PAGAR ////////

   verificarPago(): boolean{
    let insuficiente = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'Dinero Insuficiente!!',
      buttons: ['Aceptar']
      
    });
      console.log(this.ticket.pago);
      if(this.ticket.pago < this.ticket.total){
        insuficiente.present();
        this.ticket.cambio=0.0;
        return false;
      }
      this.ticket.cambio=this.ticket.pago -this.ticket.total;
      return true;
   }
   
   pagar(){
     if(this.verificarPago()){
      this.enviarDatos();
     }
   }

   enviarDatos(){
     // mensajes de estado de operacion
    let error_op = this.alert.create({
      title: 'OPERACION CANCELADA',
      message: 'No se pudo realizar la compra!!',
      buttons: ['Aceptar']
      
    });
    let exito = this.alert.create({
      title: 'OPERACION EXITOSA',
      message: 'Compra realizada con exito!!',
      buttons: ['Aceptar']
      
    });

     console.log(JSON.stringify(this.ticket));
     this.ticket['funcion']='comprar';

      this.http.post(this.apiUrl,JSON.stringify(this.ticket))                                                 //envia los datos
    .subscribe(res=>{console.log(res);exito.present();this.lipiarTicket();this.productos=res['productos']; },error=>{console.log(error);error_op.present();});
   }
   /// FIN FUNCION PAGAR ////////
   onPagoChange(){
     console.log("hola pinche puta");
     if( this.ticket.total == 0){
      this.ticket.cambio=0.0;
    }
    else if(this.ticket.pago < this.ticket.total){
      this.ticket.cambio=0.0;
    }
    else{
      this.ticket.cambio=this.ticket.pago -this.ticket.total;
    }
    
   }
}
