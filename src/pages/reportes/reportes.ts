import { Component } from '@angular/core';
import { IonicPage, ActionSheetController, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { HttpClient }  from '@angular/common/http';


import  pdfMake  from 'pdfmake/build/pdfMake';
import  pdfFonts  from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 * Generated class for the ReportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportes',
  templateUrl: 'reportes.html',
})
export class ReportesPage {
  apiUrl ="http://gymdb/";
  hideRango = true;
  tipo_reporte=null; //tipo de reporte
  pdf = null;   // objeto para crear pdf
  fecha={
    'inicio': '',
    'fin': '',
    'funcion': ''
  };
  
  constructor(private alert: AlertController,public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private loading: LoadingController, private action: ActionSheetController) {
  
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportesPage');
  }

  presentLoading() {
    const loader = this.loading.create({
      content: "CREATING PDF...",
      duration: 150
    });
    loader.present();
  }
  dowloadPdf(val: string){
    this.pdf.download(val);
  }

  

///////////////////// REPORTE DE PAGOS  ///////////////////////////////////////////////

  // obtiene los pagos que se han realizado
  getPagos(dias){
    var sourceData =[];
    let funcion={
      'funcion': 'getReportePagos',
      'dias': dias
    }
   
    this.http.post(this.apiUrl,JSON.stringify(funcion))
    .subscribe(res=>{console.log(res);sourceData=res['pagos']; console.log(sourceData); this.createPdfPagos(sourceData,dias)},error=>{console.log(error)});  //obtiene los registros de la base de datos
    
    this.presentLoading();
  }

  createPdfPagos(sourceData,dias){  // creates pdf, recibe los datos
   var total: number;
   total = 0;
   var fecha: string;
   fecha="inicio";

    var bodyData=[];
    // crea el encabezado de las columnas
    var dataRow1 = [];
    dataRow1.push({ text: 'Fecha Pago [YY/MM/DD]', bold: true });
    dataRow1.push({ text: 'Id Pago', bold: true });
    dataRow1.push({ text: 'Vencimiento', bold: true });
    dataRow1.push({ text: 'Cliente', bold: true });
    dataRow1.push({ text: 'Paquete', bold: true });
    dataRow1.push({ text: 'Modo', bold: true });
    dataRow1.push({ text: 'Monto', bold: true });
    bodyData.push(dataRow1);

    // recoore la lista 
    sourceData.forEach(function(sourceRow) {
      var dataRow = [];
      if(fecha!=sourceRow.fecha_pago){
        dataRow.push({ text: '[ '+ sourceRow.fecha_pago+' ]', bold: true });
        fecha = sourceRow.fecha_pago;
      }
      else{
        dataRow.push('');
      }
      
      dataRow.push(sourceRow.id_pago);
      dataRow.push(sourceRow.fecha_vencimiento);
      dataRow.push(sourceRow.Nombre);
      dataRow.push(sourceRow.paquete);
      dataRow.push(sourceRow.modo);
      dataRow.push(sourceRow.monto);
      bodyData.push(dataRow);
      total = total + parseFloat(sourceRow.monto);
    });
  var docDefinition = {
    content: [
      {text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0,10,0,20]},
      {text: 'Reporte de pagos de los últimos '+dias+' días', style: 'header', alignment: 'center', margin: [0,20,0,20]},
      {text: new Date().toString(), alignment: 'right',margin: [0,20,0,20]},
      
      {
        layout: 'lightHorizontalLines', // optional
        table: {
          headerRows: 1,
          body: bodyData
        }
      },
      {text: "Total:  $"+total.toString(), style: 'subheader',alignment: 'right',margin: [0,20,0,20]}
    ],
    styles:{
      header:{
        fontSize: 20,
        bold: true,
        width: '50%'
      },
      subheader:{
        fontSize: 14,
        bold: true
      }
    }
  };
   this.pdf = pdfMake.createPdf(docDefinition);
   this.dowloadPdf("Reporte_pagos.pdf");
  
  }

  //////////////////////// FIN REPORTE PAGOS    /////////////////////////////


  /////////////////////// REPORTE ASISTENCIA  ////////////////////////////
  getAsistencias(dias){
    var sourceData =[];
    let funcion={
      'funcion': 'getReporteAsistencia',
      'dias': dias
    }
    
    this.http.post(this.apiUrl,JSON.stringify(funcion))
    .subscribe(res=>{console.log(res);sourceData=res['asistencias']; console.log(sourceData); 
    this.createPdfAsistencia(sourceData,dias);
    //console.log(JSON.stringify(sourceData));
  },
    error=>{console.log(error)});  //obtiene los registros de la base de datos
    
    this.presentLoading();
  }

  
  createPdfAsistencia(sourceData,dias){
 
     var bodyData=[];
     let fecha: string;
     // crea el encabezado de las columnas
     var dataRow1 = [];
     dataRow1.push({ text: 'Fecha [YY/MM/DD]', bold: true });
     dataRow1.push({ text: 'Cliente', bold: true });
     bodyData.push(dataRow1);

     fecha = "inicio";
    
 
     // recoore la lista 
     sourceData.forEach(function(sourceRow) {
       var dataRow = [];
       if(sourceRow.fecha!=fecha){
        dataRow.push({text: '[ ' + sourceRow.fecha +' ]', bold: true});
        fecha = sourceRow.fecha;
       }
       else{
        dataRow.push('');
       }
       dataRow.push(sourceRow.Nombre);
       bodyData.push(dataRow);
       
       
     });
   var docDefinition = {
     content: [
       {text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0,10,0,20]},
       {text: 'Reporte de asistencias de los últimos '+dias+' dias', style: 'header', alignment: 'center', margin: [0,20,0,20]},
       {text: new Date().toString(), alignment: 'right',margin: [0,20,0,20]},
       {
         layout: 'lightHorizontalLines', // optional
         table: {
           headerRows: 1,
           body: bodyData
         }
       },
       
     ],
     styles:{
       header:{
         fontSize: 20,
         bold: true,
         width: '50%'
       },
       subheader:{
         fontSize: 14,
         bold: true
       }
     }
   };
    this.pdf = pdfMake.createPdf(docDefinition);
    this.dowloadPdf("Reporte_asistencias.pdf");
  }
   //////////////////////// FIN REPORTE ASISTENCIAS    /////////////////////////////

   //////////////////////// REPORTE VENTAS   ///////////////////////////////

   getVentas(dias){
    var sourceData =[];
    let funcion={
      'funcion': 'getReporteVenta',
      'dias': dias
    }
    
    this.http.post(this.apiUrl,JSON.stringify(funcion))
    .subscribe(res=>{console.log(res);sourceData=res['ventas']; console.log(sourceData); this.createPdfVenta(sourceData,dias)},error=>{console.log(error)});  //obtiene los registros de la base de datos
    
    this.presentLoading();
   }


   createPdfVenta(sourceData, dias){

    var bodyData=[];
    let fecha: string="inicio";
    let total: number=0.0;
    let ganancia: number=0.0;
    let temporal_total: number=0.0;
    let temporal_ganancia: number=0.0;

    // crea el encabezado de las columnas
    var dataRow1 = [];
    dataRow1.push({ text: 'Fecha [YY/MM/DD]', bold: true });
    dataRow1.push({ text: 'Producto [id]', bold: true });
    dataRow1.push({ text: 'Cantidad', bold: true });
    dataRow1.push({ text: 'Precio Compra', bold: true });
    dataRow1.push({ text: 'Precio Venta', bold: true });
    dataRow1.push({ text: 'Total', bold: true });
    dataRow1.push({ text: 'Ganancia', bold: true });
    bodyData.push(dataRow1);

    fecha = "inicio";
   

    // recoore la lista 
    sourceData.forEach(function(sourceRow) {
      var dataRow = [];
      if(sourceRow.fecha!=fecha){
        dataRow.push({text: '[ ' + sourceRow.fecha +' ]', bold: true});
        fecha = sourceRow.fecha;
       }
       else{
        dataRow.push('');
       }
       dataRow.push(sourceRow.nombre +  ' ['+sourceRow.id_producto +']');
       dataRow.push(sourceRow.cantidad);
       dataRow.push('$'+ sourceRow.p_c);
       dataRow.push('$'+sourceRow.p_v);

       temporal_total = parseFloat(sourceRow.p_v) * parseFloat(sourceRow.cantidad);
       dataRow.push('$'+ temporal_total.toString());

       temporal_ganancia = temporal_total-(parseFloat(sourceRow.cantidad) * parseFloat(sourceRow.p_c));
       dataRow.push('$'+temporal_ganancia.toString());

       total = total +temporal_total;
       ganancia = ganancia + temporal_ganancia;

       bodyData.push(dataRow)
      
    });
  var docDefinition = {
    content: [
      {text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0,10,0,20]},
      {text: 'Reporte de ventas de los últimos '+dias+' dias', style: 'header', alignment: 'center', margin: [0,20,0,20]},
      {text: new Date().toString(), alignment: 'right',margin: [0,20,0,20]},
      {
        layout: 'lightHorizontalLines', // optional
        table: {
          headerRows: 1,
          body: bodyData
        }
      },
      {text: "Total Vendido:  $"+total.toString(), style: 'subheader',alignment: 'right',margin: [0,50,0,5]},
      {text: "Ganancia Total:  $"+ganancia.toString(), style: 'subheader',alignment: 'right',margin: [0,5,0,5]}
      
    ],
    styles:{
      header:{
        fontSize: 20,
        bold: true,
        width: '50%'
      },
      subheader:{
        fontSize: 14,
        bold: true
      }
    }
  };
   this.pdf = pdfMake.createPdf(docDefinition);
   this.dowloadPdf("Reporte_ventas.pdf");
   }
   ////////////////////////////////// FIN REPORTE VENTAS  ///////////////////////

///////////////////////////////////     MENU          ////////////////////
  presentActionSheet(tipo) {
  const action = this.action.create({
    title: 'Options',
    buttons: [
      {
        text: 'Últimos 7 Días',
        role: 'una semana',
        handler: () => {
          console.log('7 días');
          if(tipo=='0'){  // tipo 0 = pagos
            this.getPagos("7");
          }
          else if(tipo == '1'){ // tipo 1 = asistencia
            this.getAsistencias("7");
          }
          else if(tipo =='2'){
            this.getVentas("7");
          }
        }
      },
      {
        text: 'Últimos 15 Días',
        role: 'quincena',
        handler: () => {
          console.log('15 dias');
          if(tipo=='0'){  // tipo 0 = pagos
            this.getPagos("15");
          }
          else if(tipo == '1'){ // tipo 1 = asistencia
            this.getAsistencias("15");
          }
          else if(tipo =='2'){
            this.getVentas("15");
          }
        }
      },
      {
        text: 'Últimos 30 Días',
        role: 'un mes',
        handler: () => {
          console.log('un mes');
          if(tipo=='0'){  // tipo 0 = pagos
            this.getPagos("30");
          }
          else if(tipo == '1'){ // tipo 1 = asistencia
            this.getAsistencias("30");
          }
          else if(tipo =='2'){
            this.getVentas("30");
          }
        }
      },
      {
        text: 'Elejir Rango',
        role: 'varios',
        handler: () => {
          console.log('varios');
          if(tipo=='0'){  // tipo 0 = pagos
           // this.getPagos("15");
           this.hideRango=false;
           this.tipo_reporte = '0';  // es de pagos
          }
          else if(tipo == '1'){ // tipo 1 = asistencia
            //this.getAsistencias("15");
            this.hideRango=false;
            this.tipo_reporte='1';
          }
          else if(tipo == '2'){ // tipo 2 = ventas
            //this.getAsistencias("15");
            this.hideRango=false;
            this.tipo_reporte='2';
          }
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
/////////////////////////////////// FIN MENU /////////////////

///////////////////////////// ELEGIR RANGO    //////////////////

verifData(){
  console.log(JSON.stringify(this.fecha));
  if(this.fecha.inicio=='' || this.fecha.fin==''){
    return -1;
  }else{
    return 0;
  }
}

verificarFecha(){
  var inicio = new Date(this.fecha['inicio']); //31 de diciembre de 2015
  var fin = new Date(this.fecha['fin']);
  var aux: string;
  if(inicio > fin){   // verifica si una  la fecha de inicio es mayor que la de fin
    console.log("inicio > fin");
    aux = this.fecha['fin'];
    this.fecha['fin']=this.fecha['inicio'];   //intercambia valores
    this.fecha['inicio']=aux;
 }
 console.log(JSON.stringify(this.fecha));
 if(this.tipo_reporte=='0'){   /// tipo pagos
     this.getPagosRange();
  
 }
 else if(this.tipo_reporte=='1'){  ///tipo asistencias
    this.getAsistenciasRange();
 }
 else if(this.tipo_reporte=='2'){  ///tipo ventas
  this.getVentasRange();
}
 

}

crear(){
  let error = this.alert.create({
    title: 'OPERACION CANCELADA',
    message: 'Faltan entradas!!',
    buttons: ['Aceptar']
    
  });
  if(this.verifData()==0){
    this.hideRango=true;
    this.verificarFecha();
  }else{
     error.present();
  }
}
//////////////////////////////////////  RANGO PAGOS   /////////////////////////
getPagosRange(){
  let error = this.alert.create({
    title: 'OPERACION CANCELADA',
    message: 'NO SE ENCONTRARON REGISTROS ENTRE ESAS FECHAS',
    buttons: ['ACEPTAR']
    
  });
  var sourceData=[]
  this.fecha['funcion']='getReportePagosRange';
  this.http.post(this.apiUrl,JSON.stringify(this.fecha))
  .subscribe(res=>{
    console.log(res);
    if(res=="null"){
        error.present();
    }else{
      sourceData=res['pagos'];
      console.log(sourceData); 
      this.createPdfPagosRange(sourceData)}    
    },error=>{console.log(error)});  //obtiene los registros de la base de datos
  this.presentLoading();
}
createPdfPagosRange(sourceData){  // creates pdf, recibe los datos
  
  var total: number;
  total = 0;
  var fecha: string;
  fecha="inicio";
 
var bodyData=[];
   // crea el encabezado de las columnas
   var dataRow1 = [];
   
   dataRow1.push({ text: 'Fecha Pago [YY/MM/DD]', bold: true });
   dataRow1.push({ text: 'Id Pago', bold: true });
   dataRow1.push({ text: 'Vencimiento', bold: true });
   dataRow1.push({ text: 'Cliente', bold: true });
   dataRow1.push({ text: 'Paquete', bold: true });
   dataRow1.push({ text: 'Modo', bold: true });
   dataRow1.push({ text: 'Monto', bold: true });
   bodyData.push(dataRow1);

   // recoore la lista 
   sourceData.forEach(function(sourceRow) {
     var dataRow = [];
     if(fecha!=sourceRow.fecha_pago){
       dataRow.push({ text: '[ '+ sourceRow.fecha_pago+' ]', bold: true });
       fecha = sourceRow.fecha_pago;
     }
     else{
       dataRow.push('');
     }
     
     dataRow.push(sourceRow.id_pago);
     dataRow.push(sourceRow.fecha_vencimiento);
     dataRow.push(sourceRow.Nombre);
     dataRow.push(sourceRow.paquete);
     dataRow.push(sourceRow.modo);
     dataRow.push(sourceRow.monto);
     bodyData.push(dataRow);
     total = total + parseFloat(sourceRow.monto);
   });
 var docDefinition = {
   content: [
    {text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0,10,0,20]},
     {text: 'Reporte de pagos ['+this.fecha['inicio']+'] - [' + this.fecha['fin']+"]", style: 'header', alignment: 'center', margin: [0,20,0,20]},
     {text: new Date().toString(), alignment: 'right',margin: [0,20,0,20]},
     {
       layout: 'lightHorizontalLines', // optional
       table: {
         headerRows: 1,
         body: bodyData
       }
     },
     {text: "Total:  $"+total.toString(), style: 'subheader',alignment: 'right',margin: [0,20,0,20]}
   ],
   styles:{
     header:{
       fontSize: 20,
       bold: true,
       width: '50%'
     },
     subheader:{
       fontSize: 14,
     }
   }
 };
  this.pdf = pdfMake.createPdf(docDefinition);
  this.dowloadPdf("Reporte_pagos["+this.fecha['inicio']+"-"+this.fecha['fin']+"].pdf");
 }
////////////////////// FIN RANGO PAGOS ////////////////////////


///////////////////  RANGO ASISTENCIAS  ///////////////////////////////
getAsistenciasRange(){
  this.presentLoading();
  let error = this.alert.create({
    title: 'OPERACION CANCELADA',
    message: 'NO SE ENCONTRARON REGISTROS ENTRE ESAS FECHAS',
    buttons: ['ACEPTAR']
    
  });
  
  var sourceData =[];
    
  this.fecha['funcion']='getReporteAsistenciasRange';
  this.http.post(this.apiUrl,JSON.stringify(this.fecha))
  .subscribe(res=>{
    console.log(res);
    if(res=="null"){
        error.present();
    }else{
      sourceData=res['asistencias'];
      console.log(sourceData); 
      this.createPdfAsistenciaRange(sourceData)}    
    },error=>{console.log(error)});  //obtiene los registros de la base de datos
  
    
  }

  
  createPdfAsistenciaRange(sourceData){
 
     var bodyData=[];
     let fecha: string;
     // crea el encabezado de las columnas
     var dataRow1 = [];
     dataRow1.push({ text: 'Fecha [YY/MM/DD]', bold: true });
     dataRow1.push({ text: 'Cliente', bold: true });
     bodyData.push(dataRow1);

     fecha = "inicio";
    
 
     // recoore la lista 
     sourceData.forEach(function(sourceRow) {
       var dataRow = [];
       if(sourceRow.fecha!=fecha){
        dataRow.push({text: '[ ' + sourceRow.fecha +' ]', bold: true});
        fecha = sourceRow.fecha;
       }
       else{
        dataRow.push('');
       }
       dataRow.push(sourceRow.Nombre);
       bodyData.push(dataRow);
       
       
     });
   var docDefinition = {
     content: [
      {text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0,10,0,20]},
       {text: 'Reporte de asistencias de ['+this.fecha['inicio']+']-['+this.fecha['fin']+']', style: 'header', alignment: 'center', margin: [0,20,0,20]},
       {text: new Date().toString(), alignment: 'right',margin: [0,20,0,20]},
       {
         layout: 'lightHorizontalLines', // optional
         table: {
           headerRows: 1,
           body: bodyData
         }
       },
       
     ],
     styles:{
       header:{
         fontSize: 20,
         bold: true,
         width: '50%'
       },
       subheader:{
         fontSize: 14,
         bold: true
       }
     }
   };
    this.pdf = pdfMake.createPdf(docDefinition);
    this.dowloadPdf("Reporte_asistencias"+this.fecha['inicio']+'-'+this.fecha['fin']+".pdf");
  }


  ///////////////////////////////// FIN RANGO ASISTENCIAS //////////////////////////////
  ////////////////////////////////  RANGO VENTAS  ///////////////////////////////////
getVentasRange(){
  this.presentLoading();
  let error = this.alert.create({
    title: 'OPERACION CANCELADA',
    message: 'NO SE ENCONTRARON REGISTROS ENTRE ESAS FECHAS',
    buttons: ['ACEPTAR']
    
  });
  
  var sourceData =[];
    
  this.fecha['funcion']='getReporteVentasRange';
  this.http.post(this.apiUrl,JSON.stringify(this.fecha))
  .subscribe(res=>{
    console.log(res);
    if(res=="null"){
        error.present();
    }else{
      sourceData=res['ventas'];
      console.log(sourceData); 
      this.createPdfVentaRange(sourceData)}    
    },error=>{console.log(error)});  //obtiene los registros de la base de datos
  }

  createPdfVentaRange(sourceData){

    var bodyData=[];
    let fecha: string="inicio";
    let total: number=0.0;
    let ganancia: number=0.0;
    let temporal_total: number=0.0;
    let temporal_ganancia: number=0.0;

    // crea el encabezado de las columnas
    var dataRow1 = [];
    dataRow1.push({ text: 'Fecha [YY/MM/DD]', bold: true });
    dataRow1.push({ text: 'Producto [id]', bold: true });
    dataRow1.push({ text: 'Cantidad', bold: true });
    dataRow1.push({ text: 'Precio Compra', bold: true });
    dataRow1.push({ text: 'Precio Venta', bold: true });
    dataRow1.push({ text: 'Total', bold: true });
    dataRow1.push({ text: 'Ganancia', bold: true });
    bodyData.push(dataRow1);

    fecha = "inicio";
   

    // recoore la lista 
    sourceData.forEach(function(sourceRow) {
      var dataRow = [];
      if(sourceRow.fecha!=fecha){
        dataRow.push({text: '[ ' + sourceRow.fecha +' ]', bold: true});
        fecha = sourceRow.fecha;
       }
       else{
        dataRow.push('');
       }
       dataRow.push(sourceRow.nombre +  ' ['+sourceRow.id_producto +']');
       dataRow.push(sourceRow.cantidad);
       dataRow.push('$'+ sourceRow.p_c);
       dataRow.push('$'+sourceRow.p_v);

       temporal_total = parseFloat(sourceRow.p_v) * parseFloat(sourceRow.cantidad);
       dataRow.push('$'+ temporal_total.toString());

       temporal_ganancia = temporal_total-(parseFloat(sourceRow.cantidad) * parseFloat(sourceRow.p_c));
       dataRow.push('$'+temporal_ganancia.toString());

       total = total +temporal_total;
       ganancia = ganancia + temporal_ganancia;

       bodyData.push(dataRow)
      
    });
  var docDefinition = {
    content: [
      {text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0,10,0,20]},
      {text: 'Reporte de ventas de ['+this.fecha['inicio']+']-['+this.fecha['fin']+']', style: 'header', alignment: 'center', margin: [0,20,0,20]},
      {text: new Date().toString(), alignment: 'right',margin: [0,20,0,20]},
      {
        layout: 'lightHorizontalLines', // optional
        table: {
          headerRows: 1,
          body: bodyData
        }
      },
      {text: "Total Vendido:  $"+total.toString(), style: 'subheader',alignment: 'right',margin: [0,50,0,5]},
      {text: "Ganancia Total:  $"+ganancia.toString(), style: 'subheader',alignment: 'right',margin: [0,5,0,5]}
      
    ],
    styles:{
      header:{
        fontSize: 20,
        bold: true,
        width: '50%'
      },
      subheader:{
        fontSize: 14,
        bold: true
      }
    }
  };
   this.pdf = pdfMake.createPdf(docDefinition);
   this.dowloadPdf("Reporte_ventas"+this.fecha['inicio']+'-'+this.fecha['fin']+".pdf");
   }


   ////////////////////////////// FIN REPORTE VENTAS  //////////////////////////////
}
