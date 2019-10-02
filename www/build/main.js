webpackJsonp([19],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAparatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddAparatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAparatosPage = /** @class */ (function () {
    function AddAparatosPage(navCtrl, cl, http, alert, navParams) {
        this.navCtrl = navCtrl;
        this.cl = cl;
        this.http = http;
        this.alert = alert;
        this.navParams = navParams;
        this.datos = [];
        this.hideCategoria = true;
        this.hideOtro = true;
        this.apiUrl = "http://gymdb/"; // servidor
        this.dat = {
            'id': '0',
            'nombre': 'OTRO'
        };
        this.myForm = this.cl.group({
            categoria: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            otro: [''],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
        this.obtenerCat(); //obtiene categorias
    }
    AddAparatosPage.prototype.validar = function () {
        if (this.datos.length > 1) {
            // console.log(this.datos.length);
            this.hideCategoria = false;
            this.hideOtro = true;
        }
        else {
            this.hideOtro = false;
            this.hideCategoria = true;
            this.myForm.controls['categoria'].setValue('0');
        }
    };
    AddAparatosPage.prototype.obtenerCat = function () {
        var _this = this;
        var funcion = {
            'funcion': 'getCategoria'
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.datos = res['categoria'];
            _this.datos.push(_this.dat);
            console.log(_this.datos.length);
            _this.validar();
            console.log(JSON.stringify(_this.datos));
        }, function (error) {
            console.log(error);
        });
    };
    AddAparatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAparatosPage');
    };
    AddAparatosPage.prototype.onChange = function (ev) {
        console.log(ev);
        if (ev == 0) {
            this.hideOtro = false; // hace vicible un input
        }
        else {
            this.hideOtro = true; // lo esconde
        }
    };
    AddAparatosPage.prototype.saveData = function () {
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'CAMPO CATEGORIA VACIO!',
            buttons: ['ACEPTAR']
        });
        if (this.hideOtro == false) {
            if (this.myForm.controls['otro'].value == '') {
                miAlerta.present();
                return;
            }
            else {
                this.enviarForm(); //envia formulario
                return;
            }
        }
        this.enviarForm(); // envia formulario
    };
    AddAparatosPage.prototype.enviarForm = function () {
        var _this = this;
        var success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'AGREGADO CORRECTAMENTE',
            buttons: ['ACEPTAR']
        });
        var mayus = this.myForm.controls['otro'].value;
        if (mayus != null) {
            mayus = mayus.toUpperCase();
            this.myForm.controls['otro'].setValue(mayus); // covierte a mayuscula la categoria
        }
        console.log((this.myForm.value));
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion'] = 'addMaquina';
        console.log(obj);
        this.http.post(this.apiUrl, JSON.stringify(obj))
            .subscribe(function (res) {
            console.log(res);
            if (res == "exito") {
                success.present();
                _this.reiniciarForm();
            }
        }, function (error) {
            console.log(error);
        });
    };
    // reinicia formulario
    AddAparatosPage.prototype.reiniciarForm = function () {
        this.myForm.reset();
        this.obtenerCat();
    };
    AddAparatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-aparatos',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-aparatos\add-aparatos.html"*/'<!--\n  Generated template for the AddAparatosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Agregar Aparato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-center classss="Datos">\n        \n          <ion-card-content>\n          <h2><strong >Registro</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                  <ion-item [hidden]="hideCategoria">\n                      <ion-label color="primary" icon-start><ion-icon name="pricetag"></ion-icon>Categoria:  </ion-label>\n                      <ion-select  id="categoria" name="categoria" formControlName="categoria" (ionChange)="onChange($event)">\n                        <div *ngFor="let tupla of datos">\n                          <ion-option value="{{tupla.id}}">{{tupla.nombre}}\n                          </ion-option>\n                        </div>\n                      </ion-select>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'categoria\').errors && myForm.get(\'categoria\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'categoria\').hasError(\'required\')">Field is required</p>\n                 </ion-item>\n                 <ion-item [hidden]="hideOtro">\n                  <ion-label stack color = "primary" icon-start><ion-icon name="pricetag"></ion-icon>Categoria:</ion-label>\n                  <ion-input id="otro" type="text" formControlName="otro"  name ="otro"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Descripcion:</ion-label>\n                  <ion-input id="descripcion" type="text" formControlName="descripcion"  name ="descripcion"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'descripcion\').errors && myForm.get(\'descripcion\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'descripcion\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label color="primary" icon-start><ion-icon name="git-pull-request"></ion-icon>Estado:  </ion-label>\n                      <ion-select id="estado" name="estado" formControlName="estado" >\n                          <ion-option value="1">Funcional</ion-option >\n                            <ion-option value="2">En Mantenimiento</ion-option >\n                              <ion-option value="3">Fuera de Servicio</ion-option >\n                      </ion-select>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'estado\').errors && myForm.get(\'estado\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'estado\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                                \n              </ion-list><br>\n              <div padding>\n                  <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                      <ion-icon name="archive">   </ion-icon>\n                          Guardar\n                  </button>\n                </div>\n            </form> \n\n        </ion-card-content>\n\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-aparatos\add-aparatos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddAparatosPage);
    return AddAparatosPage;
}());

//# sourceMappingURL=add-aparatos.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmpleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddEmpleadoPage = /** @class */ (function () {
    function AddEmpleadoPage(navCtrl, http, loadigCtrl, alert, cl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadigCtrl = loadigCtrl;
        this.alert = alert;
        this.cl = cl;
        this.navParams = navParams;
        this.hidePuesto = true; // variables que controlarán opciones del form
        this.hideOtro = true;
        this.hideCuenta = true;
        this.dir = {
            'dir': ''
        };
        this.puestos = []; // ccontiene los puestos disponibles
        this.dato = {
            'id': '0',
            'puesto': 'OTRO'
        };
        this.cuenta = {
            'val': '0'
        };
        this.apiUrl = "http://gymdb:/"; // servidor
        this.myForm = this.cl.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            apellidoP: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            apellidoM: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]],
            puesto: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            otro: [''],
            sueldo: [''],
            fechanac: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            foto: ['stock.png', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            calle: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            numero: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            numeroint: [''],
            colonia: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            cp: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]],
            admin: ['0'],
            user: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{4,15}$/)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{8,15}$/)]],
            reppass: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
        this.dir['path'] = 'stock.png'; // path por default de las imagenes
        this.obtenerPuestos(); // lama a la funcio de obtener puestos
    }
    // funcion que valida si hay o no hay puestos 
    AddEmpleadoPage.prototype.validar = function () {
        if (this.puestos.length > 1) {
            // console.log(this.datos.length);
            this.hidePuesto = false;
            this.hideOtro = true;
        }
        else {
            this.hideOtro = false;
            this.hidePuesto = true;
            this.myForm.controls['puesto'].setValue('0');
        }
    };
    // obtiene los puestos disponibles para empleados
    AddEmpleadoPage.prototype.obtenerPuestos = function () {
        var _this = this;
        var funcion = {
            'funcion': 'getPuestos'
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.puestos = res['puestos']; //  arreglo que contiene los puestos
            _this.puestos.push(_this.dato); // agrega la opcion 'OTRO'
            ///console.log(this.puestos.length);
            _this.validar();
            console.log(JSON.stringify(_this.puestos));
        }, function (error) {
            console.log(error);
        });
    };
    AddEmpleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEmpleadoPage');
    };
    // barra de carga
    AddEmpleadoPage.prototype.presentLoading = function () {
        var loader = this.loadigCtrl.create({
            content: "Please wait...",
            duration: 200
        });
        loader.present();
    };
    // funcion que controla las opciones del puesto
    AddEmpleadoPage.prototype.onChange = function (ev) {
        console.log(ev);
        if (ev == 0) {
            this.hideOtro = false; // hace visible el ion-list de puesto
        }
        else {
            this.hideOtro = true; // lo esconde
        }
    };
    // controla el ion-list segun si el empleado va a ser administrador o no, si es administrador necesitará crearse una cuenta de usuario admin
    AddEmpleadoPage.prototype.cuentaChange = function (ev) {
        console.log(ev);
        if (ev == 1) {
            this.myForm.controls['user'].setValue(''); // inicializa la cuenta
            this.myForm.controls['password'].setValue('');
            this.myForm.controls['reppass'].setValue('');
            this.cuenta['val'] = '1';
        }
        else {
            this.cuenta['val'] = '0';
            this.myForm.controls['user'].setValue('11111'); // pone un valor por defecto
            this.myForm.controls['password'].setValue('111111111');
            this.myForm.controls['reppass'].setValue('1111111111');
        }
    };
    // funcion que verifica varios campos antes de enviar el formulario
    AddEmpleadoPage.prototype.savaData = function () {
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'LA INFORMACION DE PUESTO DETRABAJO ESTA INCOMPLETA!',
            buttons: ['ACEPTAR']
        });
        if (this.hideOtro == false) {
            if (this.myForm.controls['otro'].value == '' || this.myForm.controls['sueldo'].value == '') {
                miAlerta.present();
                return;
            }
            else {
                this.enviarForm(); //envia formulario
                return;
            }
        }
        this.enviarForm(); // envia formulario
    };
    // evia el formulario
    AddEmpleadoPage.prototype.enviarForm = function () {
        var _this = this;
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'LA CONTRASEÑA NO COINCIDE!',
            buttons: ['ACEPTAR']
        });
        var idRep = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'YA EXISTE ESE USUARIO!',
            buttons: ['ACEPTAR']
        });
        var success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'AGREGADO CORRECTAMENTE',
            buttons: ['ACEPTAR']
        });
        //alert(JSON.stringify(this.myForm.value));
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion'] = 'LALAIO';
        // this.cleanForm();
        for (var i in obj) {
            if (i == "password" || i == "reppass" || i == "funcion" || i == "foto" || i == "user") {
            }
            else {
                obj[i] = obj[i].toUpperCase(); // convierte los datos a mayúscula
            }
        }
        if (obj['password'] == obj['reppass']) {
            this.http.post(this.apiUrl, JSON.stringify(obj)) //envia los datos
                .subscribe(function (res) {
                if (res == "id_rep") {
                    idRep.present();
                }
                else if (res == "exito") {
                    if (_this.myForm.valid) {
                        console.log("form enviado");
                        success.present();
                        _this.myForm.reset();
                        _this.dir['path'] = 'stock.png';
                    }
                }
                console.log(res);
            });
        }
        else {
            console.log(JSON.stringify(obj));
            miAlerta.present();
            console.log(obj['fechanac']);
        }
    };
    // funcion que verifica la existencia de la imagen en el servidor
    AddEmpleadoPage.prototype.ver = function () {
        var _this = this;
        if (this.dir['dir'] != "") {
            var funcion2 = {
                'funcion': 'existImg2',
            };
            // alerta de error de archivo
            var error_file_1 = this.alert.create({
                title: 'ERROR',
                message: 'EL ARCHIVO NO SE ENCUANTRA EN LA CARPETA DEL SERVIDOR',
                buttons: ['ACEPTAR']
            });
            var cadena = this.dir['dir'];
            var resultado_1 = "";
            // obtiene solo el path de la url adquirida
            for (var i = 12; i < cadena.length; i++) {
                resultado_1 = resultado_1.concat(cadena[i]); // resultado contiene el path de la imagen
            }
            funcion2['path'] = resultado_1;
            console.log(funcion2);
            //manda la informacion al servidor para verificar la existencia de la imagen
            this.http.post(this.apiUrl, JSON.stringify(funcion2)) //envia los datos
                .subscribe(function (res) {
                console.log(res);
                if (res == "no existe") {
                    error_file_1.present();
                }
                else if (res == "existe") {
                    _this.dir['path'] = resultado_1; // le asigna el valor del path
                    _this.myForm.controls['foto'].setValue(resultado_1); // asigna al campo 'foto' del form el nuevo path
                }
            });
            console.log(JSON.stringify(this.dir)); // muestra la direccion
        }
    };
    AddEmpleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-empleado',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-empleado\add-empleado.html"*/'<!--\n  Generated template for the AddEmpleadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="secondary">\n      <ion-title>Agregar Empleado</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  \n  \n  <ion-content padding class="inicio">\n  \n      <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n        <img src="http://gymdb/imgs/employees/{{ dir.path }}" width="300" height="300" alt="Imagen de Perfil">\n      \n      <ion-label color="primary"><b>SELECCIONE IMAGEN:</b> </ion-label>\n      <form  method="post" enctype="multipart/form-data">   \n      <input type="file" name="fileToUpload"  id="fileToUpload"  [(ngModel)]="dir.dir">\n      <button ion-button icon-start (click)="ver()">\n          <ion-icon name="camera"></ion-icon>\n          Añadir\n      </button>\n      </form>\n  \n  \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card text-center classss="Datos">\n          \n            <ion-card-content>\n            <h2><strong >DATOS</strong></h2>\n            <br>\n            <br><br>\n            \n            <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n                <ion-list>\n                    <ion-item>\n                        <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Nombre:</ion-label>\n                        <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Paterno:</ion-label>\n                    <ion-input id="apellidoP" name ="apellidoP" type="text" formControlName="apellidoP"  name ="apellidoP"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'apellidoP\').errors && myForm.get(\'apellidoP\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'apellidoP\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Materno:</ion-label>\n                    <ion-input id="apellidoM" name ="apellidoM" type="text" formControlName="apellidoM" name ="apellidoM"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'apellidoM\').errors && myForm.get(\'apellidoM\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'apellidoM\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label color = "primary" icon-start><ion-icon name="person"></ion-icon>Genero:</ion-label>\n                        <ion-select id="gender" name ="gender" formControlName="gender">\n                        <ion-option value="f">Mujer</ion-option>\n                          <ion-option value="m">Hombre</ion-option>\n                        </ion-select>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'gender\').errors && myForm.get(\'gender\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'gender\').hasError(\'required\')">Field is required</p>\n                        </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary"  icon-start><ion-icon name="call"></ion-icon>Telefono:</ion-label>\n                      <ion-input id="telefono" name ="telefono" type="tel" formControlName="telefono"  name ="telefono"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'telefono\').errors && myForm.get(\'telefono\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'required\')">Field is required</p>\n                      <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'pattern\')">Just Numbers</p>\n                    </ion-item>\n\n\n                    <ion-item [hidden]="hidePuesto">\n                        <ion-label color="primary" icon-start><ion-icon name="information"></ion-icon>Nombre Puesto:  </ion-label>\n                        <ion-select  id="puesto" name="puesto" formControlName="puesto" (ionChange)="onChange($event)">\n                            <div *ngFor="let tupla of puestos">\n                                <ion-option value="{{tupla.id}}">{{tupla.puesto}}\n                                </ion-option>\n                              </div>\n                        </ion-select>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'puesto\').errors && myForm.get(\'puesto\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'puesto\').hasError(\'required\')">Field is required</p>\n                   </ion-item>\n                    <ion-list [hidden]="hideOtro">\n                      <ion-item>\n                          <ion-label stack color = "primary" icon-start><ion-icon name="pricetag"></ion-icon>Puesto:</ion-label>\n                        <ion-input id="otro" type="text" formControlName="otro"  name ="otro"></ion-input>\n                      </ion-item>\n                        <ion-item>\n                            <ion-label stack color = "primary" icon-start><ion-icon name="logo-usd"></ion-icon>Sueldo:</ion-label>\n                            <ion-input id="sueldo" type="number" formControlName="sueldo"  name ="sueldo"></ion-input>\n                        </ion-item>\n                      </ion-list>\n\n\n                     <ion-label color="secondary" icon-start><ion-icon name="calendar"></ion-icon>FECHA DE NACIMIENTO</ion-label>\n                     <ion-item>\n                        <ion-label >MM DD YY</ion-label>\n                        <ion-datetime id="fechanac" name ="fechanac" formControlName="fechanac" display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'fechanac\').errors && myForm.get(\'fechanac\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'fechanac\').hasError(\'required\')">Field is required</p>\n                        </ion-item>\n  \n                     <ion-label color="secondary" icon-start><ion-icon name="pin"></ion-icon>DIRECCION</ion-label>\n                     <ion-item>\n                        <ion-label stack color = "primary" >Nombre Calle:</ion-label>\n                        <ion-input id="calle" name ="calle" formControlName="calle" type="text"></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="myForm.get(\'calle\').errors && myForm.get(\'calle\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'calle\').hasError(\'required\')">Field is required</p>\n                       </ion-item> \n                       <ion-item>\n                          <ion-label stack color = "primary">Numero Exterior:</ion-label>\n                          <ion-input id="numero" name ="numero" formControlName="numero" type="text"></ion-input>\n                      </ion-item>\n                        <ion-item *ngIf="myForm.get(\'numero\').errors && myForm.get(\'numero\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'numero\').hasError(\'required\')">Field is required</p>\n                         </ion-item> \n                         <ion-item>\n                            <ion-label stack color = "primary" >Numero Interior:</ion-label>\n                            <ion-input id="numeroint" name ="numeroint" formControlName="numeroint" type="text"></ion-input>\n                         </ion-item>\n                           <ion-item>\n                              <ion-label stack color = "primary" >Colonia:</ion-label>\n                              <ion-input id="colonia" name ="colonia" formControlName="colonia" type="text"></ion-input>\n                          </ion-item>\n                            <ion-item *ngIf="myForm.get(\'colonia\').errors && myForm.get(\'colonia\').dirty">\n                              <p color="danger" ion-text *ngIf="myForm.get(\'colonia\').hasError(\'required\')">Field is required</p>\n                             </ion-item>\n                             <ion-item>\n                                <ion-label stack color = "primary" >CP:</ion-label>\n                                <ion-input  id="cp" name="cp" formControlName="cp" type="text"></ion-input>\n                            </ion-item>\n                              <ion-item *ngIf="myForm.get(\'cp\').errors && myForm.get(\'cp\').dirty">\n                                <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'required\')">Field is required</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'pattern\')">Just Numbers</p>\n                               </ion-item> \n                               <ion-item>\n                                <ion-label>Administrador: </ion-label>\n                                <ion-select  id="admin" name="admin" formControlName="admin" (ionChange)="cuentaChange($event)">\n                                    <ion-option value="0">NO</ion-option>\n                                    <ion-option value="1">SI</ion-option>\n                                </ion-select>\n                               </ion-item>\n\n                               <ion-list *ngIf="cuenta.val==\'1\'">\n                                  <ion-label color="secondary">CUENTA</ion-label>\n                                  <ion-item >\n                                     <ion-label stack color = "primary" icon-start><ion-icon name="log-in"></ion-icon> Username:</ion-label>\n                                   <ion-input id="usercliente" name="usercliente" formControlName="user" type="text" ></ion-input>\n                                 </ion-item>\n                                 <ion-item *ngIf="myForm.get(\'user\').errors && myForm.get(\'user\').dirty">\n                                    <p color="danger" ion-text *ngIf="myForm.get(\'user\').hasError(\'pattern\')">Elegir entre 4 y 15 caracteres</p>\n                                  </ion-item>\n                                  <ion-item class="inputPass">\n                                     <ion-label stack color = "primary"  icon-start>\n                                         <ion-icon name="lock"></ion-icon> Contraseña:</ion-label>\n                                     <ion-input id="password" name ="password" formControlName="password" type="password"></ion-input>\n                                   </ion-item>\n                                   <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'password\').dirty">\n                                     <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'pattern\')">Elegir entre 8 y 15 caracteres</p>\n                                   </ion-item>\n                                   <ion-item class="inputPass">\n                                       <ion-label stack color = "primary"  icon-start>\n                                           <ion-icon name="lock"></ion-icon>\n                                           Repita Contraseña:</ion-label>\n                                       <ion-input id="rep" name= "rep" formControlName="reppass"  type="password"></ion-input>\n                                     </ion-item>\n                                     <ion-item *ngIf="myForm.get(\'reppass\').errors && myForm.get(\'reppass\').dirty">\n                                       <p color="danger" ion-text *ngIf="myForm.get(\'reppass\').hasError(\'required\')">Field is required</p>\n                                     </ion-item>\n                                     \n                               </ion-list>\n                               \n                </ion-list><br>\n                <div padding>\n                    <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                        <ion-icon name="archive">   </ion-icon>\n                            Guardar\n                    </button>\n  \n  \n                  </div>\n              </form> \n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-empleado\add-empleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddEmpleadoPage);
    return AddEmpleadoPage;
}());

//# sourceMappingURL=add-empleado.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifaparatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allaparatos_allaparatos__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ModifaparatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifaparatoPage = /** @class */ (function () {
    function ModifaparatoPage(navCtrl, cl, http, alert, navParams) {
        this.navCtrl = navCtrl;
        this.cl = cl;
        this.http = http;
        this.alert = alert;
        this.navParams = navParams;
        this.back = __WEBPACK_IMPORTED_MODULE_4__allaparatos_allaparatos__["a" /* AllaparatosPage */]; // pagina de aparatos
        this.aparato = {}; // almacena registro que se envia por parametro
        this.datos = []; //almacena las categorias dispoibles
        this.hideCategoria = true; //variables que sirven para controlar partes del form
        this.hideOtro = true;
        this.apiUrl = "http://gymdb/";
        this.dat = {
            'id': '0',
            'nombre': 'OTRO'
        };
        this.comp = {}; /// sservira para comprobar si se ha hecho algun cambio 
        this.aparato = this.navParams.get('aparato'); // obtiene el registro enviado
        //console.log(this.aparato);
        this.myForm = this.cl.group({
            categoria: [this.aparato['nombre'], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            otro: [''],
            descripcion: [this.aparato['descripcion'], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            estado: [this.aparato['estado'], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
        this.obtenerCat(); // obtiene categorias de aparatos
        this.comp = {
            'categoria': this.aparato['id_categoria'],
            'otro': '',
            'descripcion': this.aparato['descripcion'],
            'estado': this.aparato['estado']
        };
    }
    ModifaparatoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifaparatoPage');
    };
    ModifaparatoPage.prototype.validar = function () {
        if (this.datos.length > 1) {
            // console.log(this.datos.length);
            this.hideCategoria = false;
            this.hideOtro = true;
        }
        else {
            this.hideOtro = false;
            this.hideCategoria = true;
            this.myForm.controls['categoria'].setValue('0');
        }
    };
    ModifaparatoPage.prototype.obtenerCat = function () {
        var _this = this;
        var funcion = {
            'funcion': 'getCategoria'
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.datos = res['categoria'];
            _this.datos.push(_this.dat);
            //console.log(this.datos.length);
            _this.validar();
            _this.myForm.controls['categoria'].setValue(_this.aparato['id_categoria']);
            console.log(JSON.stringify(_this.datos));
        }, function (error) {
            console.log(error);
        });
    };
    // funcion que siempre que haya un cambio en el form hace un cambio
    ModifaparatoPage.prototype.onChange = function (ev) {
        console.log(ev);
        if (ev == 0) {
            this.hideOtro = false; // hace vicible un input
        }
        else {
            this.hideOtro = true; // lo esconde
        }
    };
    // funcion de gyardar
    ModifaparatoPage.prototype.saveData = function () {
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'CAMPO CATEGORIA VACIO!',
            buttons: ['ACEPTAR']
        });
        var alerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'NO SE HA MODIFICADO NADA!',
            buttons: ['ACEPTAR']
        });
        //console.log("1");
        //console.log(JSON.stringify(this.comp));
        //console.log("2");
        // console.log(JSON.stringify(this.myForm.value))
        if (JSON.stringify(this.comp) == JSON.stringify(this.myForm.value)) {
            alerta.present();
        }
        else {
            if (this.hideOtro == false) {
                if (this.myForm.controls['otro'].value == '') {
                    miAlerta.present();
                    return;
                }
                else {
                    this.enviarForm(); //envia formulario
                    return;
                }
            }
            this.enviarForm(); // envia formulario*/
        }
    };
    ModifaparatoPage.prototype.enviarForm = function () {
        var _this = this;
        var success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'AGREGADO CORRECTAMENTE',
            buttons: ['ACEPTAR']
        });
        var mayus = this.myForm.controls['otro'].value;
        if (mayus != null) {
            mayus = mayus.toUpperCase();
            this.myForm.controls['otro'].setValue(mayus); // covierte a mayuscula la categoria
        }
        console.log((this.myForm.value));
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion'] = 'modifAparato'; //funcion de modificar 
        obj['id'] = this.aparato['id']; // agrega el id del registro
        console.log(obj);
        this.http.post(this.apiUrl, JSON.stringify(obj))
            .subscribe(function (res) {
            console.log(res);
            if (res == "exito") {
                success.present();
                _this.navCtrl.push(_this.back); // regresa a la pagina anterior
            }
        }, function (error) {
            console.log(error);
        });
    };
    ModifaparatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modifaparato',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modifaparato\modifaparato.html"*/'<!--\n  Generated template for the ModifaparatoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Modificar Aparato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-center classss="Datos">\n        \n          <ion-card-content>\n          <h2><strong >Registro</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                  <ion-item [hidden]="hideCategoria">\n                      <ion-label color="primary" icon-start><ion-icon name="pricetag"></ion-icon>Categoria:  </ion-label>\n                      <ion-select  id="categoria" name="categoria" formControlName="categoria" (ionChange)="onChange($event)">\n                        <div *ngFor="let tupla of datos">\n                          <ion-option value="{{tupla.id}}">{{tupla.nombre}}\n                          </ion-option>\n                        </div>\n                      </ion-select>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'categoria\').errors && myForm.get(\'categoria\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'categoria\').hasError(\'required\')">Field is required</p>\n                 </ion-item>\n                 <ion-item [hidden]="hideOtro">\n                  <ion-label stack color = "primary" icon-start><ion-icon name="pricetag"></ion-icon>Categoria:</ion-label>\n                  <ion-input id="otro" type="text" formControlName="otro"  name ="otro"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Descripcion:</ion-label>\n                  <ion-input id="descripcion" type="text" formControlName="descripcion"  name ="descripcion"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'descripcion\').errors && myForm.get(\'descripcion\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'descripcion\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label color="primary" icon-start><ion-icon name="git-pull-request"></ion-icon>Estado:  </ion-label>\n                      <ion-select id="estado" name="estado" formControlName="estado" >\n                          <ion-option value="1">Funcional</ion-option >\n                            <ion-option value="2">En Mantenimiento</ion-option >\n                              <ion-option value="3">Fuera de Servicio</ion-option >\n                      </ion-select>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'estado\').errors && myForm.get(\'estado\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'estado\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                                \n              </ion-list><br>\n              <div padding>\n                  <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                      <ion-icon name="archive">   </ion-icon>\n                          Guardar\n                  </button>\n                </div>\n            </form> \n\n        </ion-card-content>\n\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modifaparato\modifaparato.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ModifaparatoPage);
    return ModifaparatoPage;
}());

//# sourceMappingURL=modifaparato.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InfClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfClientePage = /** @class */ (function () {
    function InfClientePage(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.cliente = {};
        this.cuenta = {};
        this.apiUrl = "http://gymdb/";
        this.cliente = this.navParams.get('cliente');
        this.cuenta = {
            'id_access': this.cliente['id_access'],
            'id_col': this.cliente['id_colonia'],
            'id_cp': this.cliente['id_cp'],
            'funcion': 'getForeignData'
        };
        console.log('cliente');
        this.http.post(this.apiUrl, JSON.stringify(this.cuenta))
            .subscribe(function (res) {
            console.log(res);
            _this.cuenta['user'] = res[0]['user'];
            _this.cuenta['colonia'] = res[1]['user'];
            _this.cuenta['cp'] = res[2]['user'];
            // console.log(JSON.stringify(this.cuenta));
        }, function (error) {
            console.log(error);
        });
    }
    InfClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfClientePage');
    };
    InfClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inf-cliente',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\inf-cliente\inf-cliente.html"*/'<!--\n  Generated template for the InfClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Informacion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n  <img src="http://gymdb/imgs/customers/{{ cliente.foto }}"  width="300" height="300">\n  <ion-card-content>\n    <img >\n    <ion-label *ngIf="cliente.activo==\'1\'" align="center" color="primary"><b>ESTATUS: </b> ACTIVO</ion-label>\n    <ion-label *ngIf="cliente.activo==\'0\'" align="center" color="danger"><b>ESTATUS: </b> INACTIVO</ion-label>\n    <p><b>NOMBRE: </b>  {{ cliente.Nombre }}</p>\n    <p><b>ID: </b> {{ cliente.id_cliente }}</p>\n    <p><b>GENERO: </b> {{ cliente.genero }}</p>\n    <p><b>TELEFONO: </b> {{ cliente.telefono }}</p>\n    <ion-label color="secondary"><b>FORMATO: </b> YYYY-MM-DD</ion-label>\n    <p><b>FECHA NACIMIENTO: </b> {{ cliente.fecha_nacimiento }}</p>\n    <p><b>FECHA INGRESO: </b> {{ cliente.fecha_ingreso }}</p>\n    \n    <ion-label align="center" color="secondary"><b>DIRECCION</b></ion-label>\n    <p><b>CALLE</b> {{ cliente.calle }}</p>\n    <p><b>NUMERO: </b> {{ cliente.numero_calle }}</p>\n    <p *ngIf="cliente.numero_interior!=\'\'"><b>NUMERO INTERIOR </b> {{ cliente.numero_interior }}</p>\n    <p><b>COLONIA: </b> {{ cuenta.colonia }}</p>\n    <p><b>CP: </b> {{ cuenta.cp }}</p>\n\n    <ion-label align="center" color="secondary"><b>CUENTA</b></ion-label>\n    <p><b>USUARIO</b> {{ cuenta.user }}</p>\n\n  </ion-card-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\inf-cliente\inf-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], InfClientePage);
    return InfClientePage;
}());

//# sourceMappingURL=inf-cliente.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allcustomers_allcustomers__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ModifclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifclientePage = /** @class */ (function () {
    function ModifclientePage(navCtrl, http, loadigCtrl, alert, cl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadigCtrl = loadigCtrl;
        this.alert = alert;
        this.cl = cl;
        this.navParams = navParams;
        this.all = __WEBPACK_IMPORTED_MODULE_4__allcustomers_allcustomers__["a" /* AllcustomersPage */];
        this.apiUrl = "http://gymdb/";
        this.x = 0; // variable para el usuario
        this.dir = {
            'dir': ''
        };
        this.cliente = {};
        this.comprobar = {};
        this.funcion = {
            "funcion": "getNombre"
        };
        this.cliente = this.navParams.get('cliente'); // obtenemos el parametro que le enviamos
        console.log(JSON.stringify(this.cliente));
        this.myForm = this.cl.group({
            nombre: [this.cliente['nombre'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            gender: [this.cliente['genero'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            apellidoP: [this.cliente['apellido_p'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            apellidoM: [this.cliente['apellido_m'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            telefono: [this.cliente['telefono'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]],
            fechanac: [this.cliente['fecha_nacimiento'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            foto: [this.cliente['foto'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            calle: [this.cliente['calle'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            numero: [this.cliente['numero_calle'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            numeroint: [this.cliente['numero_interior']],
            colonia: [this.cliente['colonia_str'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            cp: [this.cliente['cp_str'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]],
            password: [this.cliente['password'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(15)]],
            reppass: [this.cliente['password'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            user: [this.cliente['user'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
        console.log("log");
        this.dir['path'] = this.cliente['foto']; // direccion path stock
        this.comprobar = {
            "nombre": this.cliente['nombre'],
            "gender": this.cliente['genero'],
            "apellidoP": this.cliente['apellido_p'],
            "apellidoM": this.cliente['apellido_m'],
            "telefono": this.cliente['telefono'],
            "fechanac": this.cliente['fecha_nacimiento'],
            "foto": this.cliente['foto'],
            "calle": this.cliente['calle'],
            "numero": this.cliente['numero_calle'],
            "numeroint": this.cliente['numero_interior'],
            "colonia": this.cliente['colonia_str'],
            "cp": this.cliente['cp_str'],
            "password": this.cliente['password'],
            "reppass": this.cliente['password'],
            "user": this.cliente['user']
        };
    }
    ModifclientePage.prototype.saveData = function () {
        var _this = this;
        var form_invalido = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'YA SE ENVIARON LOS DATOS MODIFICADOS!',
            buttons: ['ACEPTAR']
        });
        if (this.cliente['id_cliente'] == '') {
            form_invalido.present();
        }
        else {
            var repetido = this.alert.create({
                title: 'OPERACION CANCELADA',
                message: 'lOS DATOS SON IGUALES!',
                buttons: ['ACEPTAR']
            });
            if (JSON.stringify(this.comprobar) != JSON.stringify(this.myForm.value)) {
                console.log("son desiguales");
                //alertas
                var miAlerta = this.alert.create({
                    title: 'OPERACION CANCELADA',
                    message: 'LA CONTRASEÑA NO COINCIDE!',
                    buttons: ['ACEPTAR']
                });
                var idRep_1 = this.alert.create({
                    title: 'OPERACION CANCELADA',
                    message: 'YA EXISTE ESE USUARIO!',
                    buttons: ['ACEPTAR']
                });
                var success_1 = this.alert.create({
                    title: 'OPERACION EXITOSA',
                    message: 'AGREGADO CORRECTAMENTE',
                    buttons: ['ACEPTAR']
                });
                //alert(JSON.stringify(this.myForm.value));
                var obj = JSON.parse(JSON.stringify(this.myForm.value));
                obj['funcion'] = 'actualizarCliente';
                obj['id_access'] = this.cliente['id_access'];
                obj['id_cliente'] = this.cliente['id_cliente'];
                // this.cleanForm();
                for (var i in obj) {
                    if (i == "password" || i == "reppass" || i == "funcion" || i == "foto" || i == "user" || i == "id_access") {
                    }
                    else {
                        obj[i] = obj[i].toUpperCase(); // convierte los datos a mayúscula
                    }
                }
                if (obj['password'] == obj['reppass']) {
                    console.log(JSON.stringify(obj));
                    this.http.post(this.apiUrl, JSON.stringify(obj)) //envia los datos
                        .subscribe(function (res) {
                        if (res == "id_rep") {
                            idRep_1.present();
                        }
                        else if (res == "exito") {
                            if (_this.myForm.valid) {
                                console.log("form enviado");
                                success_1.present();
                                _this.myForm.reset();
                                _this.dir['path'] = 'stock.png';
                                _this.cliente['id'] = '';
                                _this.navCtrl.push(_this.all);
                            }
                        }
                        console.log(res);
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    console.log(JSON.stringify(obj));
                    miAlerta.present();
                }
            }
            else {
                repetido.present();
            }
        }
    };
    // funcion que verifica la existencia de la imagen en el servidor
    ModifclientePage.prototype.ver = function () {
        var _this = this;
        if (this.dir['dir'] != "") {
            var funcion2 = {
                'funcion': 'existImg',
            };
            // alerta de error de archivo
            var error_file_1 = this.alert.create({
                title: 'ERROR',
                message: 'EL ARCHIVO NO SE ENCUANTRA EN LA CARPETA DEL SERVIDOR',
                buttons: ['ACEPTAR']
            });
            var cadena = this.dir['dir'];
            var resultado_1 = "";
            // obtiene solo el path de la url adquirida
            for (var i = 12; i < cadena.length; i++) {
                resultado_1 = resultado_1.concat(cadena[i]); // resultado contiene el path de la imagen
            }
            funcion2['path'] = resultado_1;
            console.log(funcion2);
            //manda la informacion al servidor para verificar la existencia de la imagen
            this.http.post(this.apiUrl, JSON.stringify(funcion2)) //envia los datos
                .subscribe(function (res) {
                console.log(res);
                if (res == "no existe") {
                    error_file_1.present();
                }
                else if (res == "existe") {
                    _this.dir['path'] = resultado_1; // le asigna el valor del path
                    _this.myForm.controls['foto'].setValue(resultado_1); // asigna al campo 'foto' del form el nuevo path
                }
            });
            console.log(JSON.stringify(this.dir)); // muestra la direccion
        }
    };
    ModifclientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modifcliente',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modifcliente\modifcliente.html"*/'<!--\n  Generated template for the ModifclientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="secondary">\n      <ion-title>Modificar</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  \n  \n  <ion-content padding class="inicio">\n  \n      <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n        <img src="http://gymdb/imgs/customers/{{ dir.path }}" width="300" height="300" alt="Imagen de Perfil">\n      \n      <ion-label color="primary"><b>SELECCIONE IMAGEN:</b> </ion-label>\n      <form  method="post" enctype="multipart/form-data">   \n      <input type="file" name="fileToUpload"  id="fileToUpload"  [(ngModel)]="dir.dir">\n      <button ion-button icon-start (click)="ver()">\n          <ion-icon name="camera"></ion-icon>\n          Añadir\n      </button>\n      </form>\n  \n  \n    <ion-grid>\n      <ion-row>\n          \n        <ion-col>\n          <ion-card text-center classss="Datos">\n          \n            <ion-card-content>\n            <h2><strong >DATOS</strong></h2>\n            <br>\n            <br><br>\n            \n            <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n                <ion-list>\n                    <ion-item>\n                        <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Nombre:</ion-label>\n                        <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Paterno:</ion-label>\n                    <ion-input id="apellidoP" name ="apellidoP" type="text" formControlName="apellidoP"  name ="apellidoP"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'apellidoP\').errors && myForm.get(\'apellidoP\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'apellidoP\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Materno:</ion-label>\n                    <ion-input id="apellidoM" name ="apellidoM" type="text" formControlName="apellidoM" name ="apellidoM"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'apellidoM\').errors && myForm.get(\'apellidoM\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'apellidoM\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label color = "primary" icon-start><ion-icon name="person"></ion-icon>Genero:</ion-label>\n                        <ion-select id="gender" name ="gender" formControlName="gender">\n                        <ion-option value="F">Mujer</ion-option>\n                          <ion-option value="M">Hombre</ion-option>\n                        </ion-select>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'gender\').errors && myForm.get(\'gender\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'gender\').hasError(\'required\')">Field is required</p>\n                        </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary"  icon-start><ion-icon name="call"></ion-icon>Telefono:</ion-label>\n                      <ion-input id="telefono" name ="telefono" type="tel" formControlName="telefono"  name ="telefono"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'telefono\').errors && myForm.get(\'telefono\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'required\')">Field is required</p>\n                      <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'pattern\')">Just Numbers</p>\n                    </ion-item>\n                  \n                     <ion-label color="secondary" icon-start><ion-icon name="calendar"></ion-icon>FECHA DE NACIMIENTO</ion-label>\n                     <ion-item>\n                        <ion-label >MM DD YY</ion-label>\n                        <ion-datetime id="fechanac" name ="fechanac" formControlName="fechanac" display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'fechanac\').errors && myForm.get(\'fechanac\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'fechanac\').hasError(\'required\')">Field is required</p>\n                        </ion-item>\n  \n                     <ion-label color="secondary" icon-start><ion-icon name="pin"></ion-icon>DIRECCION</ion-label>\n                     <ion-item>\n                        <ion-label stack color = "primary" >Nombre Calle:</ion-label>\n                        <ion-input id="calle" name ="calle" formControlName="calle" type="text"></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="myForm.get(\'calle\').errors && myForm.get(\'calle\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'calle\').hasError(\'required\')">Field is required</p>\n                       </ion-item> \n                       <ion-item>\n                          <ion-label stack color = "primary">Numero Exterior:</ion-label>\n                          <ion-input id="numero" name ="numero" formControlName="numero" type="text"></ion-input>\n                      </ion-item>\n                        <ion-item *ngIf="myForm.get(\'numero\').errors && myForm.get(\'numero\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'numero\').hasError(\'required\')">Field is required</p>\n                         </ion-item> \n                         <ion-item>\n                            <ion-label stack color = "primary" >Numero Interior:</ion-label>\n                            <ion-input id="numeroint" name ="numeroint" formControlName="numeroint" type="text"></ion-input>\n                         </ion-item>\n                           <ion-item>\n                              <ion-label stack color = "primary" >Colonia:</ion-label>\n                              <ion-input id="colonia" name ="colonia" formControlName="colonia" type="text"></ion-input>\n                          </ion-item>\n                            <ion-item *ngIf="myForm.get(\'colonia\').errors && myForm.get(\'colonia\').dirty">\n                              <p color="danger" ion-text *ngIf="myForm.get(\'colonia\').hasError(\'required\')">Field is required</p>\n                             </ion-item>\n                             <ion-item>\n                                <ion-label stack color = "primary" >CP:</ion-label>\n                                <ion-input  id="cp" name="cp" formControlName="cp" type="text"></ion-input>\n                            </ion-item>\n                              <ion-item *ngIf="myForm.get(\'cp\').errors && myForm.get(\'cp\').dirty">\n                                <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'required\')">Field is required</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'pattern\')">Just Numbers</p>\n                               </ion-item> \n                               <ion-label color="secondary">CUENTA</ion-label>\n                               <ion-item >\n                                  <ion-label stack color = "primary" icon-start><ion-icon name="log-in"></ion-icon> Username:</ion-label>\n                                <ion-input id="usercliente" name="usercliente" formControlName="user" type="text" ></ion-input>\n                              </ion-item>\n                              <ion-item *ngIf="myForm.get(\'user\').errors && myForm.get(\'user\').dirty">\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'user\').hasError(\'required\')">Field is required</p>\n                                 </ion-item> \n                               <ion-item class="inputPass">\n                                  <ion-label stack color = "primary"  icon-start>\n                                      <ion-icon name="lock"></ion-icon> Contraseña:</ion-label>\n                                  <ion-input id="password" name ="password" formControlName="password" type="password"></ion-input>\n                                </ion-item>\n                                  \n                                <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'password\').dirty">\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'required\')">Field is required</p>\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'minlength\')">Min of 5 characters</p>\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'maxlength\')">Max of 15 characters</p>\n                                </ion-item>\n                                <ion-item class="inputPass">\n                                    <ion-label stack color = "primary"  icon-start>\n                                        <ion-icon name="lock"></ion-icon>\n                                        Repita Contraseña:</ion-label>\n                                    <ion-input id="rep" name= "rep" formControlName="reppass"  type="password"></ion-input>\n                                  </ion-item>\n                                  <ion-item *ngIf="myForm.get(\'reppass\').errors && myForm.get(\'reppass\').dirty">\n                                    <p color="danger" ion-text *ngIf="myForm.get(\'reppass\').hasError(\'required\')">Field is required</p>\n                                  </ion-item>\n                                  \n                </ion-list><br>\n                <div padding>\n                    <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                        <ion-icon name="construct">   </ion-icon>\n                            MODIFICAR\n                    </button>\n  \n  \n                  </div>\n              </form> \n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modifcliente\modifcliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ModifclientePage);
    return ModifclientePage;
}());

//# sourceMappingURL=modifcliente.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerPage = /** @class */ (function () {
    function CustomerPage(navCtrl, menu, navParams) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.login = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
    }
    CustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerPage');
    };
    CustomerPage.prototype.openMenu = function () {
        this.menu.open();
    };
    CustomerPage.prototype.logout = function () {
        this.navCtrl.push(this.login);
    };
    CustomerPage.prototype.closeMenu = function () {
        this.menu.close();
    };
    CustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customer',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\customer\customer.html"*/'<ion-header>\n\n    <ion-toolbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button (click)="openMenu()">\n\n          <ion-icon name="list" ></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      \n\n      <ion-title>Cliente</ion-title>\n\n  \n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n\n  <ion-menu [content]="content" color="danger">\n\n      <ion-header>\n\n        <ion-toolbar>\n\n          <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n      <ion-content>\n\n        <ion-list>\n\n          <button ion-item>\n\n            Perfil\n\n          </button>\n\n          <button ion-item>\n\n            Cerrar Sesión\n\n          </button>\n\n          <button ion-item (click)="closeMenu()">\n\n            Close Menu\n\n          </button>\n\n          <button ion-item (click)="logout()">\n\n              Cerrar Sesión\n\n            </button>\n\n        </ion-list>\n\n      </ion-content>\n\n    </ion-menu>\n\n    \n\n    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n\n\n\n\n  <ion-content>\n\n    <button ion-button large color="danger" round>Deudas </button>\n\n    <button ion-button large color="blue" round >Asistencia</button>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\customer\customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CustomerPage);
    return CustomerPage;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecibePayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecibePayPage = /** @class */ (function () {
    function RecibePayPage(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.pago = {};
        this.info_paquete = {};
        this.info_cliente = {};
        this.cuenta = {};
        this.nota = {};
        this.apiUrl = "http://gymdb/";
        this.pago = this.navParams.get('pago');
        this.info_paquete = {
            'id_paquete': this.pago['id_paquete'],
            'funcion': 'getRecibe'
        };
        this.info_cliente = {
            'id_cliente': this.pago['id_cliente'],
            'funcion': 'getClientePay'
        };
        if (this.pago['monto'] == '0') {
            this.nota['info'] = "PAGO ELIMINADO";
        }
        else {
            this.nota['info'] = " ";
        }
        //Informacion del paquete
        this.http.post(this.apiUrl, JSON.stringify(this.info_paquete))
            .subscribe(function (res) {
            console.log(res);
            _this.info_paquete['nombre'] = res[0]['nombre'];
            _this.info_paquete['descripcion'] = res[0]['descripcion'];
            _this.info_paquete['precio'] = res[0]['precio'];
        }, function (error) {
            console.log(error);
        });
        //Informacion del cliente
        this.http.post(this.apiUrl, JSON.stringify(this.info_cliente))
            .subscribe(function (res) {
            console.log(res);
            _this.info_cliente['nombre'] = res[0]['nombre'];
            _this.info_cliente['apellido_p'] = res[0]['apellido_p'];
            _this.info_cliente['apellido_m'] = res[0]['apellido_m'];
            _this.info_cliente['id_cp'] = res[0]['id_cp'];
            _this.info_cliente['id_colonia'] = res[0]['id_colonia'];
            _this.info_cliente['calle'] = res[0]['calle'];
            _this.info_cliente['numero_calle'] = res[0]['numero_calle'];
            _this.info_cliente['numero_interior'] = res[0]['numero_interior'];
            _this.info_cliente['telefono'] = res[0]['telefono'];
            _this.cuenta = {
                'id_access': _this.pago['id_cliente'],
                'id_col': _this.info_cliente['id_cp'],
                'id_cp': _this.info_cliente['id_colonia'],
                'funcion': 'getForeignData'
            };
            //Informacion contenida en otras tablas
            _this.http.post(_this.apiUrl, JSON.stringify(_this.cuenta))
                .subscribe(function (res) {
                console.log(res);
                _this.cuenta['user'] = res[0]['user'];
                _this.cuenta['colonia'] = res[1]['user'];
                _this.cuenta['cp'] = res[2]['user'];
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    }
    RecibePayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecibePayPage');
    };
    RecibePayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recibe-pay',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\recibe-pay\recibe-pay.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Recibo de pago</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-label color="primary" align="center"><b>GYM SYSTEM</b></ion-label>    <br>  \n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <div text-right> <strong >RECIBO: </strong> {{pago.id_pago}} </div> <br>\n\n        <div text-right> <strong >FECHA: </strong> {{pago.fecha_pago}} </div>\n\n        <br>\n\n        <ion-label color="primary" align="left">CLIENTE</ion-label>  \n\n        <div text-left> <strong >ID: </strong> {{pago.id_cliente}} </div><br>\n\n        <div text-left> <strong >NOMBRE: </strong> {{info_cliente.nombre }} {{info_cliente.apellido_p }} \n\n          {{info_cliente.apellido_m }}</div><br>\n\n          <div text-left> <strong >TELEFONO: </strong> {{info_cliente.telefono}}</div>\n\n        <br>\n\n        <div text-left> <strong >CALLE: </strong> {{info_cliente.calle}}</div><br>\n\n        <div text-left> <strong >NUMERO: </strong> {{info_cliente.numero_calle}}</div><br>\n\n        <div text-left> <strong >NUMERO INTERIOR: </strong> {{info_cliente.numero_interior}}</div><br>\n\n        <div text-left> <strong >COLONIA: </strong> {{cuenta.colonia}}</div><br>\n\n        <div text-left> <strong >CP: </strong> {{cuenta.cp}}</div><br>\n\n        <br>\n\n        <ion-label color="primary" align="left">PAGO</ion-label> \n\n        <div text-left> <strong >CONCEPTO: </strong> {{info_paquete.nombre}} </div><br>\n\n        <div text-left> <strong >DESCRIPCION: </strong> {{info_paquete.descripcion}} </div>\n\n        <ion-label color="danger" align="left"> <strong >VENCIMIENTO: </strong> {{pago.fecha_vencimiento}} </ion-label><br>\n\n        <br><br>\n\n        <ion-label color="primary" align="right">RESUMEN</ion-label> \n\n        <div text-right> <strong >TOTAL A PAGAR: </strong> ${{info_paquete.precio}}.00 </div>\n\n        <ion-label color="danger" align="right">{{nota.info}}</ion-label> \n\n        <div text-right> <strong >MONTO PAGADO: </strong> ${{pago.monto}}.00 </div><br>\n\n        \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\recibe-pay\recibe-pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RecibePayPage);
    return RecibePayPage;
}());

//# sourceMappingURL=recibe-pay.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_pay_list_pay__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModifyPayPage = /** @class */ (function () {
    function ModifyPayPage(navCtrl, http, actionsheet, alert, cl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionsheet = actionsheet;
        this.alert = alert;
        this.cl = cl;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.clientes = [];
        this.items = [];
        this.pago = {};
        this.comprobar = {};
        this.nombre = '';
        this.list = __WEBPACK_IMPORTED_MODULE_4__list_pay_list_pay__["a" /* ListPayPage */];
        this.funcion = {
            "funcion": "getAllCustomers"
        };
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.clientes = res['clientes'];
            _this.paquete();
            console.log(JSON.stringify(_this.clientes));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
        this.pago = this.navParams.get('pago');
        console.log(this.pago);
        this.paqueteNombre();
        this.myForm = this.cl.group({
            id_usuario: [this.pago['id_cliente'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            paquete: [this.pago['id_paquete'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            modo: [this.pago['modo'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            monto: [this.pago['monto'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
        this.comprobar = {
            "id_usuario": this.pago['id_cliente'],
            "paquete": this.pago['id_paquete'],
            "modo": this.pago['modo'],
            "monto": this.pago['monto']
        };
    }
    ModifyPayPage.prototype.initializeItems = function () {
        this.items = this.clientes;
    };
    ModifyPayPage.prototype.paquete = function () {
        var _this = this;
        var funcion = {
            "funcion": "getPaquete"
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.paquetes = res;
            console.log(JSON.stringify(_this.paquetes));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    ModifyPayPage.prototype.paqueteNombre = function () {
        var _this = this;
        var funcion = {
            "funcion": "paqueteNombre",
            "id_paquete": this.pago['id_paquete']
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.nombre = res[0]["nombre"];
            console.log(JSON.stringify(_this.nombre));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    ModifyPayPage.prototype.cleanItems = function () {
        this.items = [];
    };
    ModifyPayPage.prototype.getItems = function (ev) {
        this.initializeItems();
        console.log(ev.target.value);
        var val = ev.target.value.toUpperCase();
        this.items = this.items.filter(function (cliente) {
            console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
            return cliente.Nombre.includes(val);
        });
        console.log(JSON.stringify(this.clientes));
    };
    ModifyPayPage.prototype.pagar = function () {
        var _this = this;
        if (JSON.stringify(this.comprobar) != JSON.stringify(this.myForm.value)) {
            var paqueteAlerta_1 = this.alert.create({
                title: 'Paquete invalido',
                message: 'Escribe el nombre correcto del paquete',
                buttons: ['Ok']
            });
            var paqueteInactivoAlerta_1 = this.alert.create({
                title: 'Paquete no disponible',
                message: 'Verifica situacion del paquete',
                buttons: ['Ok']
            });
            var clienteAlerta_1 = this.alert.create({
                title: 'Cliente invalido',
                message: 'Escribe id de un cliente valido',
                buttons: ['Ok']
            });
            var clienteInactivoAlerta_1 = this.alert.create({
                title: 'Cliente inactivo',
                message: 'Verifica situacion del cliente',
                buttons: ['Ok']
            });
            var pagoAlerta_1 = this.alert.create({
                title: 'Cambio existoso',
                message: 'Ya puedes consultar tu recibo modificado',
                buttons: ['Ok']
            });
            var obj = JSON.parse(JSON.stringify(this.myForm.value));
            obj['funcion'] = 'addCambioPago';
            obj['id'] = this.pago['id_pago'];
            console.log(obj);
            this.http.post(this.apiUrl, JSON.stringify(obj))
                .subscribe(function (res) {
                if (res == "Paquete Invalido") {
                    paqueteAlerta_1.present();
                }
                if (res == "Paquete Inactivo") {
                    paqueteInactivoAlerta_1.present();
                }
                if (res == "Cliente Invalido") {
                    clienteAlerta_1.present();
                }
                if (res == "Cliente Inactivo") {
                    clienteInactivoAlerta_1.present();
                }
                else if (res == "Pago exitoso") {
                    pagoAlerta_1.present();
                    if (_this.myForm.valid) {
                        console.log("form enviado");
                        _this.myForm.reset();
                        _this.navCtrl.push(_this.list);
                    }
                }
                console.log(res);
            });
        }
        else {
            var noCambiosAlerta = this.alert.create({
                title: 'No se han realizado cambios',
                message: 'Informacion igual',
                buttons: ['Ok']
            });
            noCambiosAlerta.present();
        }
    };
    ModifyPayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifyPayPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myForm'),
        __metadata("design:type", Object)
    ], ModifyPayPage.prototype, "formValues", void 0);
    ModifyPayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modify-pay',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modify-pay\modify-pay.html"*/'<ion-header>\n\n  <ion-navbar color= "secondary">\n    <ion-title>Modificar</ion-title>\n  </ion-navbar>\n\n  <ion-searchbar placeholder="Ingresa nombre de usuario para consultar id" (ionInput)="getItems($event)">\n  </ion-searchbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div text-center>\n    <button ion-button outline (click)="cleanItems()">\n      <ion-icon name="arrow-up"></ion-icon>\n    </button>\n  </div>\n\n  <ion-card *ngFor="let cliente of items" color="primary">\n    <ion-card-content>\n      <b>{{ cliente.Nombre }}</b> <br> {{ cliente.id_cliente }}\n    </ion-card-content>\n  \n  </ion-card>\n\n  <ion-card *ngFor="let pack of paquetes" (click)="actionSheet()">\n    <ion-card-header><b>{{ pack.nombre }}</b>\n    </ion-card-header>\n          \n    <ion-card-content color="primary">\n      ${{pack.precio}}.00 <br>\n      <ion-label stack color="dark"> <strong>Clave: </strong>{{pack.id}}  </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n\n    <div text-center>\n      <br>\n      <strong >FICHA DE PAGO</strong>\n    </div>\n\n      <form [formGroup]="myForm"  (ngSubmit)="pagar()" novalidate>\n          <ion-list>\n\n              <ion-item>\n                <ion-label stack color = "primary">Username: </ion-label>\n                <ion-input id="id_usuario" name="id_usuario" formControlName="id_usuario" type="text"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'id_usuario\').errors && myForm.get(\'id_usuario\').dirty">\n                <p color="danger" ion-text *ngIf="myForm.get(\'id_usuario\').hasError(\'required\')">Field is required</p>\n              </ion-item>\n\n              <ion-item>\n                <ion-label stack color = "primary">Clave de paquete: </ion-label>\n                <ion-input id="paquete" name="paquete" formControlName="paquete" type="text"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'paquete\').errors && myForm.get(\'paquete\').dirty">\n                <p color="danger" ion-text *ngIf="myForm.get(\'paquete\').hasError(\'required\')">Field is required</p>\n              </ion-item>\n\n              <ion-item>\n                <ion-label stack color = "primary">Modo de Pago </ion-label>\n                <ion-select id="modo" name="modo" formControlName="modo" type="modo">\n                  <ion-option value="EFECTIVO">Efectivo</ion-option>\n                  <ion-option value="DEBITO">Debito</ion-option>\n                  <ion-option value="CREDITO">Credito</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'modo\').errors && myForm.get(\'modo\').dirty">\n                <p color="danger" ion-text *ngIf="myForm.get(\'modo\').hasError(\'required\')">Field is required</p>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label stack color = "primary">Monto: </ion-label>\n                  <ion-input id="monto" name="monto" formControlName="monto" type="text"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'monto\').errors && myForm.get(\'monto\').dirty">\n                  <p color="danger" ion-text *ngIf="myForm.get(\'monto\').hasError(\'required\')">Field is required</p>\n              </ion-item>\n\n          </ion-list>\n\n          <div padding text-center>\n            <button ion-button outline type="submit" [disabled]="myForm.invalid">MODIFICAR</button>\n          </div>\n\n      </form>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modify-pay\modify-pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ModifyPayPage);
    return ModifyPayPage;
}());

//# sourceMappingURL=modify-pay.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PackPage = /** @class */ (function () {
    function PackPage(navCtrl, http, actionsheet, alert, cl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionsheet = actionsheet;
        this.alert = alert;
        this.cl = cl;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.myForm = this.cl.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            precio: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]],
            duracion: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]]
        });
    }
    PackPage.prototype.pack = function () {
        var _this = this;
        var paqueteDuracion = this.alert.create({
            title: 'Duracion de paquete invalida',
            message: 'La duracion maxima es de 365 dias',
            buttons: ['Ok']
        });
        var paqueteNombre = this.alert.create({
            title: 'Nombre de paquete invalido',
            message: 'Puede que el nombre de paquete sea repetido',
            buttons: ['Ok']
        });
        var paqueteAgregado = this.alert.create({
            title: 'Exito',
            message: 'Paquete agregado correctamente',
            buttons: ['Ok']
        });
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion'] = 'addPaquete';
        for (var i in obj) {
            if (i == "duracion" || i == "precio" || i == "funcion") {
            }
            else {
                obj[i] = obj[i].toUpperCase();
            }
        }
        console.log(obj);
        this.http.post(this.apiUrl, JSON.stringify(obj))
            .subscribe(function (res) {
            if (res == "Duracion Invalida") {
                paqueteDuracion.present();
            }
            if (res == "Nombre Invalido") {
                paqueteNombre.present();
            }
            else if (res == "Paquete Exitoso") {
                paqueteAgregado.present();
                if (_this.myForm.valid) {
                    console.log("form enviado");
                    _this.myForm.reset();
                }
            }
            console.log(res);
        });
    };
    PackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PackPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myForm'),
        __metadata("design:type", Object)
    ], PackPage.prototype, "formValues", void 0);
    PackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pack',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pack\pack.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Paquetes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    \n    <div text-center>\n      <br>\n      <strong>AGREGAR PAQUETE</strong>\n    </div>\n\n    <form [formGroup]="myForm"  (ngSubmit)="pack()" novalidate>\n      <ion-list>\n\n        <ion-item>\n          <ion-label stack color = "primary">Nombre: </ion-label>\n          <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stack color = "primary">Descripcion: </ion-label>\n          <ion-input id="descripcion" name="descripcion" formControlName="descripcion" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'descripcion\').errors && myForm.get(\'descripcion\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'descripcion\').hasError(\'required\')">Field is required</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stack color = "primary">Precio: </ion-label>\n          <ion-input id="precio" name="precio" formControlName="precio" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'precio\').errors && myForm.get(\'precio\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'precio\').hasError(\'required\')">Field is required</p>\n          <p color="danger" ion-text *ngIf="myForm.get(\'precio\').hasError(\'pattern\')">Just Numbers</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stack color = "primary">Duracion: </ion-label>\n          <ion-input id="duracion" name="duracion" formControlName="duracion" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'duracion\').errors && myForm.get(\'duracion\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'duracion\').hasError(\'required\')">Field is required</p>\n          <p color="danger" ion-text *ngIf="myForm.get(\'duracion\').hasError(\'pattern\')">Just Numbers</p>\n        </ion-item>\n      </ion-list>\n\n      <div padding text-center>\n      <button ion-button outline type="submit" [disabled]="myForm.invalid">Agregar</button>\n      </div>\n\n    </form>\n    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pack\pack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], PackPage);
    return PackPage;
}());

//# sourceMappingURL=pack.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PackDetailsPage = /** @class */ (function () {
    function PackDetailsPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.pack = {};
        this.status = {};
        this.pack = this.navParams.get('pack');
        if (this.pack['activo'] == '1') {
            this.status['inf'] = "ACTIVO";
        }
        else {
            this.status['inf'] = "INACTIVO";
        }
    }
    PackDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PackDetailsPage');
    };
    PackDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pack-details',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pack-details\pack-details.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Detalles</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n        <ion-label color="primary" align="center"><b>{{pack.nombre}}</b></ion-label>    <br>  \n    </ion-card-header>\n    <ion-card-content>\n        <div text-left> <strong >ID: </strong> {{pack.id}}</div><br><br>\n        <div text-left> <strong >STATUS: </strong> {{status.inf}} </div><br>\n        <div text-left> <strong >DESCRIPCION: </strong> {{pack.descripcion}}</div><br>\n        <div text-left> <strong >DIAS DE DURACION: </strong> {{pack.duracion}}</div><br>\n        <div text-left> <strong >PRECIO: </strong> {{pack.precio}}</div><br>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pack-details\pack-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PackDetailsPage);
    return PackDetailsPage;
}());

//# sourceMappingURL=pack-details.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_pack_list_pack__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModifyPackPage = /** @class */ (function () {
    function ModifyPackPage(navCtrl, http, actionsheet, alert, cl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionsheet = actionsheet;
        this.alert = alert;
        this.cl = cl;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.pack = {};
        this.comprobar = {};
        this.list = __WEBPACK_IMPORTED_MODULE_4__list_pack_list_pack__["a" /* ListPackPage */];
        this.pack = this.navParams.get('pack');
        console.log(this.pack);
        this.myForm = this.cl.group({
            nombre: [this.pack['nombre'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            descripcion: [this.pack['descripcion'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            precio: [this.pack['precio'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]],
            duracion: [this.pack['duracion'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]]
        });
        this.comprobar = {
            "nombre": this.pack['nombre'],
            "descripcion": this.pack['descripcion'],
            "precio": this.pack['precio'],
            "duracion": this.pack['duracion']
        };
    }
    ModifyPackPage.prototype.edit = function () {
        var _this = this;
        if (JSON.stringify(this.comprobar) != JSON.stringify(this.myForm.value)) {
            var paqueteDuracion_1 = this.alert.create({
                title: 'Duracion de paquete invalida',
                message: 'La duracion maxima es de 365 dias',
                buttons: ['Ok']
            });
            var paqueteNombre_1 = this.alert.create({
                title: 'Nombre de paquete invalido',
                message: 'Puede que el nombre de paquete sea repetido',
                buttons: ['Ok']
            });
            var paqueteEditado_1 = this.alert.create({
                title: 'Exito',
                message: 'Paquete editado correctamente',
                buttons: ['Ok']
            });
            var obj = JSON.parse(JSON.stringify(this.myForm.value));
            obj['funcion'] = 'addCambioPack';
            obj['id'] = this.pack['id'];
            for (var i in obj) {
                if (i == "duracion" || i == "precio" || i == "funcion") {
                }
                else {
                    obj[i] = obj[i].toUpperCase();
                }
            }
            console.log(obj);
            this.http.post(this.apiUrl, JSON.stringify(obj))
                .subscribe(function (res) {
                if (res == "Duracion Invalida") {
                    paqueteDuracion_1.present();
                }
                if (res == "Nombre Invalido") {
                    paqueteNombre_1.present();
                }
                else if (res == "Paquete Exitoso") {
                    paqueteEditado_1.present();
                    if (_this.myForm.valid) {
                        console.log("form enviado");
                        _this.myForm.reset();
                        _this.navCtrl.push(_this.list);
                    }
                }
                console.log(res);
            });
        }
        else {
            var noCambiosAlerta = this.alert.create({
                title: 'No se han realizado cambios',
                message: 'Información igual',
                buttons: ['Ok']
            });
            noCambiosAlerta.present();
        }
    };
    ModifyPackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifyPackPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myForm'),
        __metadata("design:type", Object)
    ], ModifyPackPage.prototype, "formValues", void 0);
    ModifyPackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modify-pack',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modify-pack\modify-pack.html"*/'\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Modificar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card>\n    \n        <div text-center>\n          <br>\n          <strong>EDITAR PAQUETE</strong>\n        </div>\n    \n        <form [formGroup]="myForm"  (ngSubmit)="edit()" novalidate>\n          <ion-list>\n    \n            <ion-item>\n              <ion-label stack color = "primary">Nombre: </ion-label>\n              <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label stack color = "primary">Descripcion: </ion-label>\n              <ion-input id="descripcion" name="descripcion" formControlName="descripcion" type="text"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="myForm.get(\'descripcion\').errors && myForm.get(\'descripcion\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'descripcion\').hasError(\'required\')">Field is required</p>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label stack color = "primary">Precio: </ion-label>\n              <ion-input id="precio" name="precio" formControlName="precio" type="text"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="myForm.get(\'precio\').errors && myForm.get(\'precio\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'precio\').hasError(\'required\')">Field is required</p>\n              <p color="danger" ion-text *ngIf="myForm.get(\'precio\').hasError(\'pattern\')">Just Numbers</p>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label stack color = "primary">Duracion: </ion-label>\n              <ion-input id="duracion" name="duracion" formControlName="duracion" type="text"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="myForm.get(\'duracion\').errors && myForm.get(\'duracion\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'duracion\').hasError(\'required\')">Field is required</p>\n              <p color="danger" ion-text *ngIf="myForm.get(\'duracion\').hasError(\'pattern\')">Just Numbers</p>\n            </ion-item>\n          </ion-list>\n    \n          <div padding text-center>\n          <button ion-button outline type="submit" [disabled]="myForm.invalid">Agregar</button>\n          </div>\n    \n        </form>\n        \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modify-pack\modify-pack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ModifyPackPage);
    return ModifyPackPage;
}());

//# sourceMappingURL=modify-pack.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-aparatos/add-aparatos.module": [
		293,
		18
	],
	"../pages/add-cliente/add-cliente.module": [
		294,
		0
	],
	"../pages/add-empleado/add-empleado.module": [
		295,
		17
	],
	"../pages/admin/admin.module": [
		299,
		16
	],
	"../pages/allaparatos/allaparatos.module": [
		296,
		15
	],
	"../pages/allcustomers/allcustomers.module": [
		297,
		14
	],
	"../pages/customer/customer.module": [
		298,
		13
	],
	"../pages/inf-cliente/inf-cliente.module": [
		300,
		12
	],
	"../pages/list-pack/list-pack.module": [
		301,
		11
	],
	"../pages/list-pay/list-pay.module": [
		304,
		10
	],
	"../pages/login/login.module": [
		303,
		9
	],
	"../pages/modifaparato/modifaparato.module": [
		306,
		8
	],
	"../pages/modifcliente/modifcliente.module": [
		302,
		7
	],
	"../pages/modify-pack/modify-pack.module": [
		309,
		6
	],
	"../pages/modify-pay/modify-pay.module": [
		311,
		5
	],
	"../pages/pack-details/pack-details.module": [
		305,
		4
	],
	"../pages/pack/pack.module": [
		307,
		3
	],
	"../pages/pay/pay.module": [
		308,
		2
	],
	"../pages/recibe-pay/recibe-pay.module": [
		310,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddClientePage = /** @class */ (function () {
    function AddClientePage(navCtrl, http, http2, loadigCtrl, alert, cl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.http2 = http2;
        this.loadigCtrl = loadigCtrl;
        this.alert = alert;
        this.cl = cl;
        this.navParams = navParams;
        this.x = 0; // variable para el usuario
        this.dir = {
            'dir': ''
        };
        this.apiUrl = "http://gymdb:/";
        this.myForm = this.cl.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            apellidoP: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            apellidoM: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]],
            fechanac: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            foto: ['stock.png', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            calle: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            numero: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            numeroint: [''],
            colonia: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            cp: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(15)]],
            reppass: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            user: ['']
        });
        this.dir['path'] = 'stock.png';
    }
    AddClientePage.prototype.presentLoading = function () {
        var loader = this.loadigCtrl.create({
            content: "Please wait...",
            duration: 200
        });
        loader.present();
    };
    AddClientePage.prototype.functionsetId = function () {
        var _this = this;
        var funcion = {
            'funcion': 'getLastId'
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
            if (res['max(id_cliente)']) {
                _this.x = Number(res['max(id_cliente)']); //obtiene el ultimo id de clientes
                _this.x = _this.x + 1; //lo incrementa
            }
            else {
                _this.x = 1;
            }
            console.log(_this.x.toString());
            _this.myForm.setValue({
                nombre: '',
                gender: '',
                apellidoP: '',
                apellidoM: '',
                telefono: '',
                fechanac: '',
                foto: 'stock.png',
                calle: '',
                numero: '',
                numeroint: '',
                colonia: '',
                cp: '',
                password: '',
                reppass: '',
                user: _this.x.toString()
            });
            document.getElementById("usercliente").setAttribute('value', _this.x.toString());
            //document.getElementsByTagName('input')[12].disabled=true;
            //document.getElementsByTagName('input')[12].setAttribute('value',this.x.toString());
            //console.log("fin de documento")
        }, function (error) {
            console.log(error);
        });
    };
    AddClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddClientePage');
        this.functionsetId();
    };
    AddClientePage.prototype.saveData = function () {
        var _this = this;
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'LA CONTRASEÑA NO COINCIDE!',
            buttons: ['ACEPTAR']
        });
        var idRep = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'YA EXISTE ESE USUARIO!',
            buttons: ['ACEPTAR']
        });
        var success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'AGREGADO CORRECTAMENTE',
            buttons: ['ACEPTAR']
        });
        //alert(JSON.stringify(this.myForm.value));
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion'] = 'addCliente';
        // this.cleanForm();
        for (var i in obj) {
            if (i == "password" || i == "reppass" || i == "funcion" || i == "foto") {
            }
            else {
                obj[i] = obj[i].toUpperCase(); // convierte los datos a mayúscula
            }
        }
        if (obj['password'] == obj['reppass']) {
            this.http.post(this.apiUrl, JSON.stringify(obj)) //envia los datos
                .subscribe(function (res) {
                if (res == "id_rep") {
                    idRep.present();
                }
                else if (res == "exito") {
                    if (_this.myForm.valid) {
                        console.log("form enviado");
                        success.present();
                        _this.myForm.reset();
                        _this.functionsetId();
                        _this.dir['path'] = 'stock.png';
                    }
                    //success.present();
                    //t//his.myForm.reset(true);
                    // this.myForm.controls.reset;
                    //this.functionsetId();  
                }
                console.log(res);
            });
        }
        else {
            console.log(JSON.stringify(obj));
            miAlerta.present();
            console.log(obj['fechanac']);
        }
    };
    // funcion que verifica la existencia de la imagen en el servidor
    AddClientePage.prototype.ver = function () {
        var _this = this;
        if (this.dir['dir'] != "") {
            var funcion2 = {
                'funcion': 'existImg',
            };
            // alerta de error de archivo
            var error_file_1 = this.alert.create({
                title: 'ERROR',
                message: 'EL ARCHIVO NO SE ENCUANTRA EN LA CARPETA DEL SERVIDOR',
                buttons: ['ACEPTAR']
            });
            var cadena = this.dir['dir'];
            var resultado_1 = "";
            // obtiene solo el path de la url adquirida
            for (var i = 12; i < cadena.length; i++) {
                resultado_1 = resultado_1.concat(cadena[i]); // resultado contiene el path de la imagen
            }
            funcion2['path'] = resultado_1;
            console.log(funcion2);
            //manda la informacion al servidor para verificar la existencia de la imagen
            this.http2.post(this.apiUrl, JSON.stringify(funcion2)) //envia los datos
                .subscribe(function (res) {
                console.log(res);
                if (res == "no existe") {
                    error_file_1.present();
                }
                else if (res == "existe") {
                    _this.dir['path'] = resultado_1; // le asigna el valor del path
                    _this.myForm.controls['foto'].setValue(resultado_1); // asigna al campo 'foto' del form el nuevo path
                }
            });
            console.log(JSON.stringify(this.dir)); // muestra la direccion
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myForm'),
        __metadata("design:type", Object)
    ], AddClientePage.prototype, "formValues", void 0);
    AddClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-cliente',template:/*ion-inline-start:"c:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-cliente\add-cliente.html"*/'<!--\n  Generated template for the LoginPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Agregar Cliente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding class="inicio">\n\n    <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n      <img src="http://gymdb/imgs/customers/{{ dir.path }}" width="300" height="300" alt="Imagen de Perfil">\n    \n    <ion-label color="primary"><b>SELECCIONE IMAGEN:</b> </ion-label>\n    <form  method="post" enctype="multipart/form-data">   \n    <input type="file" name="fileToUpload"  id="fileToUpload"  [(ngModel)]="dir.dir">\n    <button ion-button icon-start (click)="ver()">\n        <ion-icon name="camera"></ion-icon>\n        Añadir\n    </button>\n    </form>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-center classss="Datos">\n        \n          <ion-card-content>\n          <h2><strong >DATOS</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Nombre:</ion-label>\n                      <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Paterno:</ion-label>\n                  <ion-input id="apellidoP" name ="apellidoP" type="text" formControlName="apellidoP"  name ="apellidoP"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'apellidoP\').errors && myForm.get(\'apellidoP\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'apellidoP\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Materno:</ion-label>\n                  <ion-input id="apellidoM" name ="apellidoM" type="text" formControlName="apellidoM" name ="apellidoM"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'apellidoM\').errors && myForm.get(\'apellidoM\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'apellidoM\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label color = "primary" icon-start><ion-icon name="person"></ion-icon>Genero:</ion-label>\n                      <ion-select id="gender" name ="gender" formControlName="gender">\n                      <ion-option value="f">Mujer</ion-option>\n                        <ion-option value="m">Hombre</ion-option>\n                      </ion-select>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'gender\').errors && myForm.get(\'gender\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'gender\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary"  icon-start><ion-icon name="call"></ion-icon>Telefono:</ion-label>\n                    <ion-input id="telefono" name ="telefono" type="tel" formControlName="telefono"  name ="telefono"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'telefono\').errors && myForm.get(\'telefono\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'required\')">Field is required</p>\n                    <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'pattern\')">Just Numbers</p>\n                  </ion-item>\n                \n                   <ion-label color="secondary" icon-start><ion-icon name="calendar"></ion-icon>FECHA DE NACIMIENTO</ion-label>\n                   <ion-item>\n                      <ion-label >MM DD YY</ion-label>\n                      <ion-datetime id="fechanac" name ="fechanac" formControlName="fechanac" display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'fechanac\').errors && myForm.get(\'fechanac\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'fechanac\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n\n                   <ion-label color="secondary" icon-start><ion-icon name="pin"></ion-icon>DIRECCION</ion-label>\n                   <ion-item>\n                      <ion-label stack color = "primary" >Nombre Calle:</ion-label>\n                      <ion-input id="calle" name ="calle" formControlName="calle" type="text"></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="myForm.get(\'calle\').errors && myForm.get(\'calle\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'calle\').hasError(\'required\')">Field is required</p>\n                     </ion-item> \n                     <ion-item>\n                        <ion-label stack color = "primary">Numero Exterior:</ion-label>\n                        <ion-input id="numero" name ="numero" formControlName="numero" type="text"></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="myForm.get(\'numero\').errors && myForm.get(\'numero\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'numero\').hasError(\'required\')">Field is required</p>\n                       </ion-item> \n                       <ion-item>\n                          <ion-label stack color = "primary" >Numero Interior:</ion-label>\n                          <ion-input id="numeroint" name ="numeroint" formControlName="numeroint" type="text"></ion-input>\n                       </ion-item>\n                         <ion-item>\n                            <ion-label stack color = "primary" >Colonia:</ion-label>\n                            <ion-input id="colonia" name ="colonia" formControlName="colonia" type="text"></ion-input>\n                        </ion-item>\n                          <ion-item *ngIf="myForm.get(\'colonia\').errors && myForm.get(\'colonia\').dirty">\n                            <p color="danger" ion-text *ngIf="myForm.get(\'colonia\').hasError(\'required\')">Field is required</p>\n                           </ion-item>\n                           <ion-item>\n                              <ion-label stack color = "primary" >CP:</ion-label>\n                              <ion-input  id="cp" name="cp" formControlName="cp" type="text"></ion-input>\n                          </ion-item>\n                            <ion-item *ngIf="myForm.get(\'cp\').errors && myForm.get(\'cp\').dirty">\n                              <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'required\')">Field is required</p>\n                              <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'pattern\')">Just Numbers</p>\n                             </ion-item> \n                             <ion-label color="secondary">CUENTA</ion-label>\n                             <ion-item >\n                                <ion-label stack color = "primary" icon-start><ion-icon name="log-in"></ion-icon> Username:</ion-label>\n                              <ion-input readonly id="usercliente" name="usercliente" formControlName="user" type="text" ></ion-input>\n                            </ion-item>\n                             <ion-item class="inputPass">\n                                <ion-label stack color = "primary"  icon-start>\n                                    <ion-icon name="lock"></ion-icon> Contraseña:</ion-label>\n                                <ion-input id="password" name ="password" formControlName="password" type="password"></ion-input>\n                              </ion-item>\n                                \n                              <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'password\').dirty">\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'required\')">Field is required</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'minlength\')">Min of 5 characters</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'maxlength\')">Max of 15 characters</p>\n                              </ion-item>\n                              <ion-item class="inputPass">\n                                  <ion-label stack color = "primary"  icon-start>\n                                      <ion-icon name="lock"></ion-icon>\n                                      Repita Contraseña:</ion-label>\n                                  <ion-input id="rep" name= "rep" formControlName="reppass"  type="password"></ion-input>\n                                </ion-item>\n                                <ion-item *ngIf="myForm.get(\'reppass\').errors && myForm.get(\'reppass\').dirty">\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'reppass\').hasError(\'required\')">Field is required</p>\n                                </ion-item>\n                                \n              </ion-list><br>\n              <div padding>\n                  <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                      <ion-icon name="archive">   </ion-icon>\n                          Guardar\n                  </button>\n\n\n                </div>\n            </form> \n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"c:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-cliente\add-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], AddClientePage);
    return AddClientePage;
}());

//# sourceMappingURL=add-cliente.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pay_pay__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loginP = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.admin = __WEBPACK_IMPORTED_MODULE_3__admin_admin__["a" /* AdminPage */];
        this.payPage = __WEBPACK_IMPORTED_MODULE_4__pay_pay__["a" /* PayPage */];
        this.datos = {};
        this.server = "http://gymdb/";
    }
    HomePage.prototype.mayus = function (e) {
        e.value = e.value.toUpperCase();
    };
    HomePage.prototype.login = function () {
        console.log('contact');
        this.navCtrl.push(this.loginP);
    };
    HomePage.prototype.sendData = function () {
        var funcion = {
            'funcion': 'hola'
        };
        console.log("hola");
        this.http.post(this.server, JSON.stringify(JSON.stringify(funcion)))
            .subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      GYM SYSTEM\n\n    </ion-title>\n\n    <ion-buttons right >\n\n        <button ion-button icon-only (click) ="login()">\n\n          <ion-icon name="contact" >\n\n              \n\n          </ion-icon>\n\n          \n\n        </button>\n\n     </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  \n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_add_cliente_add_cliente__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_inf_cliente_inf_cliente__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_allcustomers_allcustomers__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modifcliente_modifcliente__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pay_pay__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_list_pay_list_pay__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_recibe_pay_recibe_pay__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_aparatos_add_aparatos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_allaparatos_allaparatos__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modifaparato_modifaparato__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_add_empleado_add_empleado__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pack_details_pack_details__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pack_pack__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_list_pack_list_pack__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modify_pack_modify_pack__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modify_pay_modify_pay__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { AddClientePage } from '../pages/add-cliente/add-cliente';
//import { ListcustomersPage } from '../pages/listcustomers/listcustomers';
//import { InfoClientePage } from '../pages/info-cliente/info-cliente';












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_11_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_add_cliente_add_cliente__["a" /* AddClientePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inf_cliente_inf_cliente__["a" /* InfClientePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_allcustomers_allcustomers__["a" /* AllcustomersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modifcliente_modifcliente__["a" /* ModifclientePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_list_pay_list_pay__["a" /* ListPayPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_recibe_pay_recibe_pay__["a" /* RecibePayPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_aparatos_add_aparatos__["a" /* AddAparatosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_allaparatos_allaparatos__["a" /* AllaparatosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modifaparato_modifaparato__["a" /* ModifaparatoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_empleado_add_empleado__["a" /* AddEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pack_details_pack_details__["a" /* PackDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pack_pack__["a" /* PackPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_list_pack_list_pack__["a" /* ListPackPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modify_pack_modify_pack__["a" /* ModifyPackPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modify_pay_modify_pay__["a" /* ModifyPayPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-aparatos/add-aparatos.module#AddAparatosPageModule', name: 'AddAparatosPage', segment: 'add-aparatos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-cliente/add-cliente.module#AddClientePageModule', name: 'AddClientePage', segment: 'add-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-empleado/add-empleado.module#AddEmpleadoPageModule', name: 'AddEmpleadoPage', segment: 'add-empleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allaparatos/allaparatos.module#AllaparatosPageModule', name: 'AllaparatosPage', segment: 'allaparatos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allcustomers/allcustomers.module#AllcustomersPageModule', name: 'AllcustomersPage', segment: 'allcustomers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer/customer.module#CustomerPageModule', name: 'CustomerPage', segment: 'customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inf-cliente/inf-cliente.module#InfClientePageModule', name: 'InfClientePage', segment: 'inf-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-pack/list-pack.module#ListPackPageModule', name: 'ListPackPage', segment: 'list-pack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifcliente/modifcliente.module#ModifclientePageModule', name: 'ModifclientePage', segment: 'modifcliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-pay/list-pay.module#ListPayPageModule', name: 'ListPayPage', segment: 'list-pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pack-details/pack-details.module#PackDetailsPageModule', name: 'PackDetailsPage', segment: 'pack-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifaparato/modifaparato.module#ModifaparatoPageModule', name: 'ModifaparatoPage', segment: 'modifaparato', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pack/pack.module#PackPageModule', name: 'PackPage', segment: 'pack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modify-pack/modify-pack.module#ModifyPackPageModule', name: 'ModifyPackPage', segment: 'modify-pack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recibe-pay/recibe-pay.module#RecibePayPageModule', name: 'RecibePayPage', segment: 'recibe-pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modify-pay/modify-pay.module#ModifyPayPageModule', name: 'ModifyPayPage', segment: 'modify-pay', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_11_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_add_cliente_add_cliente__["a" /* AddClientePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inf_cliente_inf_cliente__["a" /* InfClientePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_allcustomers_allcustomers__["a" /* AllcustomersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modifcliente_modifcliente__["a" /* ModifclientePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_list_pay_list_pay__["a" /* ListPayPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_recibe_pay_recibe_pay__["a" /* RecibePayPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_aparatos_add_aparatos__["a" /* AddAparatosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_allaparatos_allaparatos__["a" /* AllaparatosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_modifaparato_modifaparato__["a" /* ModifaparatoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_empleado_add_empleado__["a" /* AddEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pack_details_pack_details__["a" /* PackDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pack_pack__["a" /* PackPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_list_pack_list_pack__["a" /* ListPackPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_modify_pack_modify_pack__["a" /* ModifyPackPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modify_pay_modify_pay__["a" /* ModifyPayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { InfoClientePage } from 'c:/Users/acer/Desktop/GymSystem/GymSystem/src/pages/info-cliente/info-cliente';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllaparatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifaparato_modifaparato__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AllaparatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllaparatosPage = /** @class */ (function () {
    function AllaparatosPage(navCtrl, http, action, loading, alert, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.action = action;
        this.loading = loading;
        this.alert = alert;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/"; //direccion del servidor
        this.aparatos = []; //lista de clientes
        this.items = []; //lista auxiliar
        this.modificar = __WEBPACK_IMPORTED_MODULE_3__modifaparato_modifaparato__["a" /* ModifaparatoPage */];
        this.filtro = {
            val: null
        };
        this.filtro_aux = "";
        this.funcion = {
            "funcion": "getInfoAparato" //funcoin 
        };
        //alertas
        this.success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'LA OPERACION SE REALIZO CON EXITO',
            buttons: ['ACEPTAR']
        });
        this.op_cancel = this.alert.create({
            title: 'ERROR',
            message: 'HUBO PROBLEMAS AL REALIZAR LA OPERACION',
            buttons: ['ACEPTAR']
        });
        this.filtro.val = "1"; //inicializa el filtro
        this.filtro_aux = "1"; //no servira para comprobar si hay un cambio de filtro
        this.actualizar(); // funcion que obtiene los datos de la base de datos
    }
    AllaparatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllaparatosPage');
    };
    // obtiene los registros de la base de datos
    AllaparatosPage.prototype.actualizar = function () {
        var _this = this;
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            //console.log(res);
            _this.aparatos = res['aparatos'];
            _this.initializeItems(); // lla,a a la funcion de inicializar, para que muestre segun el filtro
            console.log(JSON.stringify(_this.aparatos));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    // alerta de carga
    AllaparatosPage.prototype.presentLoading = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 100
        });
        loader.present();
    };
    AllaparatosPage.prototype.initializeItems = function () {
        if (this.filtro.val == "1") {
            this.inicializarActivos();
        }
        else if (this.filtro.val == "2") {
            this.inicializarMant();
        }
        else if (this.filtro.val == "3") {
            this.inicializarInact();
        }
    };
    AllaparatosPage.prototype.inicializarActivos = function () {
        this.items = this.aparatos.filter(function (aparato) {
            //console.log(JSON.stringify(JSON.stringify(aparato.Nombre)));
            return aparato.estado == '1';
        });
        console.log(JSON.stringify(this.items));
    };
    AllaparatosPage.prototype.inicializarMant = function () {
        this.items = this.aparatos.filter(function (aparato) {
            //console.log(JSON.stringify(JSON.stringify(aparato.Nombre)));
            return aparato.estado == '2';
        });
        console.log(JSON.stringify(this.items));
    };
    AllaparatosPage.prototype.inicializarInact = function () {
        this.items = this.aparatos.filter(function (aparato) {
            //console.log(JSON.stringify(JSON.stringify(aparato.Nombre)));
            return aparato.estado == '3';
        });
        console.log(JSON.stringify(this.items));
    };
    AllaparatosPage.prototype.verFiltro = function () {
        if (this.filtro.val == this.filtro_aux) {
            console.log("NO hay cambio");
        }
        else {
            this.presentLoading();
            this.filtro_aux = this.filtro.val;
            console.log("SI hay cambio");
            this.initializeItems(); // funcion que inicializa la lista auxiliar segun el caso
        }
    };
    AllaparatosPage.prototype.getItems = function (ev) {
        this.initializeItems(); // inicializa la lista auxiliar segun  el caso de filtro
        console.log(ev.target.value);
        var val = ev.target.value;
        if (val != '') {
            val = ev.target.value.toUpperCase();
        }
        this.items = this.items.filter(function (aparato) {
            // console.log(JSON.stringify(JSON.stringify(aparato.Nombre)));
            return aparato.nombre.includes(val);
        });
        console.log(JSON.stringify(this.aparatos));
    };
    AllaparatosPage.prototype.actionSheet = function (aparato) {
        console.log("action sheet");
        this.presentActionSheet(aparato);
        //this.presentLoading();
        //this.actualizar();   // actualiza los datos 
    };
    AllaparatosPage.prototype.presentActionSheet = function (aparato) {
        var _this = this;
        var action = this.action.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Modificar',
                    role: 'modificar',
                    handler: function () {
                        console.log('modificar clicked');
                        //
                        _this.navCtrl.push(_this.modificar, { aparato: aparato });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        action.present();
    };
    AllaparatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-allaparatos',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\allaparatos\allaparatos.html"*/'<!--\n  Generated template for the AllaparatosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Aparatos</ion-title>\n    </ion-navbar>\n    \n<ion-searchbar placeholder="buscar" (ionInput)="getItems($event)">\n\n</ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n\n      <ion-select [(ngModel)]="filtro.val">\n          <ion-option value="1">En Funcionamiento</ion-option>\n          <ion-option value="2">En Mantenimiento</ion-option>\n          <ion-option value="3">Fuera de Servicio</ion-option>\n       </ion-select>\n  </ion-item>\n  <button ion-button icon-start (click)="verFiltro()">\n      <ion-icon name="search"></ion-icon>\n      Filtrar\n  </button>\n  \n\n   <ion-item *ngFor="let aparato of items" (click)="actionSheet(aparato)">\n     <h2><b> {{ aparato.nombre }}</b></h2>\n        <p align="right" class="bluetext" *ngIf="aparato.estado==\'1\'" color="secondary">EN FUNCIONAMIENTO</p>\n        <p align="right" class="greentext" *ngIf="aparato.estado==\'2\'" color="gray">EN MANTENIMIENTO</p>\n        <p align="right" class="redtext" *ngIf="aparato.estado==\'3\'" color="danger">FUERA DE SERVICIO</p>\n        <p align="left"><b>ID: </b> {{ aparato.id}}</p>\n        <p align="left"><b>DESCRIPCION: </b> {{ aparato.descripcion }}</p>\n\n      </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\allaparatos\allaparatos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AllaparatosPage);
    return AllaparatosPage;
}());

//# sourceMappingURL=allaparatos.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllcustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inf_cliente_inf_cliente__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modifcliente_modifcliente__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
* Generated class for the AllcustomersPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var AllcustomersPage = /** @class */ (function () {
    //constructor
    function AllcustomersPage(navCtrl, http, actionsheet, alert, loading, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionsheet = actionsheet;
        this.alert = alert;
        this.loading = loading;
        this.navParams = navParams;
        this.infocliente = __WEBPACK_IMPORTED_MODULE_2__inf_cliente_inf_cliente__["a" /* InfClientePage */]; // pagina para detalles del cliente
        this.modif = __WEBPACK_IMPORTED_MODULE_4__modifcliente_modifcliente__["a" /* ModifclientePage */]; // pagina para modificar
        this.apiUrl = "http://gymdb/"; //direccion del servidor
        this.clientes = []; //lista de clientes
        this.items = []; //lista auxiliar
        this.datos_extra = {}; //se guardan los datos de las llaves foraneas, y el nombre por separado
        this.filtro = {
            val: null
        };
        this.filtro_aux = "";
        this.funcion = {
            "funcion": "getAllCustomers" //funcoin 
        };
        //alertas
        this.success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'LA OPERACION SE REALIZO CON EXITO',
            buttons: ['ACEPTAR']
        });
        this.op_cancel = this.alert.create({
            title: 'ERROR',
            message: 'HUBO PROBLEMAS AL REALIZAR LA OPERACION',
            buttons: ['ACEPTAR']
        });
        this.filtro.val = "1"; //inicializa el filtro
        this.filtro_aux = "1"; //no servira para comprobar si hay un cambio de filtro
        this.actualizar(); // funcion que obtiene los datos de la base de datos
    }
    // obtiene los datos de las llaves foraneas, y el nombre por sepa
    AllcustomersPage.prototype.getElements = function (cliente) {
        var _this = this;
        this.datos_extra = {
            'id_cliente': cliente['id_cliente'],
            'id_access': cliente['id_access'],
            'id_col': cliente['id_colonia'],
            'id_cp': cliente['id_cp'],
            'funcion': 'getForeignDataModif'
        };
        this.http.post(this.apiUrl, JSON.stringify(this.datos_extra))
            .subscribe(function (res) {
            //console.log(res); 
            _this.datos_extra['user'] = res[0]['user'];
            _this.datos_extra['colonia'] = res[1]['user'];
            _this.datos_extra['cp'] = res[2]['user'];
            _this.datos_extra['password'] = res[3]['user'];
            _this.datos_extra['nombre'] = res[4]['user'];
            _this.datos_extra['apellido_p'] = res[5]['user'];
            _this.datos_extra['apellido_m'] = res[6]['user'];
            // console.log(JSON.stringify(this.datos_extra));
        }, function (error) {
            console.log(error);
        });
    };
    // obtiene los registros de la base de datos
    AllcustomersPage.prototype.actualizar = function () {
        var _this = this;
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            //console.log(res);
            _this.clientes = res['clientes'];
            //this.items=this.clientes;  // inicializa la lista auxiliar
            _this.initializeItems(); // lla,a a la funcion de inicializar, para que muestre segun el filtro
            console.log(JSON.stringify(_this.clientes));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    // alerta de carga
    AllcustomersPage.prototype.presentLoading = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 100
        });
        loader.present();
    };
    AllcustomersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListcustomersPage');
    };
    AllcustomersPage.prototype.initializeItems = function () {
        if (this.filtro.val == "0") {
            this.items = this.clientes;
        }
        else if (this.filtro.val == "1") {
            this.inicializarActivos();
        }
        else if (this.filtro.val == "2") {
            this.inicializarInactivos();
        }
    };
    AllcustomersPage.prototype.inicializarActivos = function () {
        this.items = this.clientes.filter(function (cliente) {
            console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
            return cliente.activo == '1';
        });
        console.log(JSON.stringify(this.items));
    };
    AllcustomersPage.prototype.inicializarInactivos = function () {
        this.items = this.clientes.filter(function (cliente) {
            console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
            return cliente.activo == '0';
        });
        console.log(JSON.stringify(this.items));
    };
    // barra de busqueda
    AllcustomersPage.prototype.getItems = function (ev) {
        this.initializeItems(); // inicializa la lista auxiliar segun  el caso de filtro
        console.log(ev.target.value);
        var val = ev.target.value;
        if (val != '') {
            val = ev.target.value.toUpperCase();
        }
        this.items = this.items.filter(function (cliente) {
            console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
            return cliente.Nombre.includes(val);
        });
        console.log(JSON.stringify(this.clientes));
    };
    // funcion de modificar cliente
    AllcustomersPage.prototype.modificar = function (cliente) {
        cliente['colonia_str'] = this.datos_extra['colonia'];
        cliente['cp_str'] = this.datos_extra['cp'];
        cliente['user'] = this.datos_extra['user'];
        cliente['password'] = this.datos_extra['password'];
        cliente['nombre'] = this.datos_extra['nombre'];
        cliente['apellido_p'] = this.datos_extra['apellido_p'];
        cliente['apellido_m'] = this.datos_extra['apellido_m'];
        console.log(JSON.stringify(cliente));
        this.navCtrl.push(this.modif, { cliente: cliente }); // envia los datos para modificarse
        //this.actualizar();
    };
    // funcion de eliminar cliente
    AllcustomersPage.prototype.eliminar = function (cliente) {
        var _this = this;
        var elim = this.alert.create({
            title: 'ADVERTENCIA',
            message: '¿SEGURO QUE DESEA ELIMINARLO?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log("Operacion cancelada");
                    }
                },
                {
                    text: 'Aceptar',
                    role: 'aceptar',
                    handler: function (data) {
                        console.log("eliminado");
                        cliente['funcion'] = "eliminarCliente";
                        _this.http.post(_this.apiUrl, JSON.stringify(cliente))
                            .subscribe(function (res) {
                            console.log(res);
                            if (res == "exito") {
                                //this.success.present();
                                _this.actualizar(); // actualiza los datos
                            }
                            else {
                                _this.op_cancel.present();
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        elim.present();
    };
    // activa un cliente que ha sido eliminado
    AllcustomersPage.prototype.activarCliente = function (cliente) {
        var _this = this;
        var act = this.alert.create({
            title: 'ADVERTENCIA',
            message: '¿ACTIVAR CLIENTE?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log("Operacion cancelada");
                    }
                },
                {
                    text: 'Aceptar',
                    role: 'aceptar',
                    handler: function (data) {
                        console.log("activado");
                        cliente['funcion'] = "activarCliente";
                        _this.http.post(_this.apiUrl, JSON.stringify(cliente))
                            .subscribe(function (res) {
                            console.log(res);
                            if (res == "exito") {
                                //this.success.present();
                                _this.actualizar();
                                //this.presentLoading();
                            }
                            else {
                                _this.op_cancel.present();
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        act.present();
    };
    // muestra un menu para clientes activos
    AllcustomersPage.prototype.presentActionSheetAct = function (cliente) {
        var _this = this;
        var action = this.actionsheet.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Detalles',
                    role: 'detalles',
                    handler: function () {
                        console.log('Detalles clicked');
                        _this.navCtrl.push(_this.infocliente, { cliente: cliente });
                    }
                },
                {
                    text: 'Modificar',
                    role: 'detalles',
                    handler: function () {
                        console.log('modificar clicked');
                        _this.modificar(cliente); // llama a la funcion de modificar
                    }
                },
                {
                    text: 'Eliminar',
                    role: 'eliminar',
                    handler: function () {
                        console.log('Eliminar clicked');
                        _this.eliminar(cliente);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        action.present();
    };
    // muestra un menu para clientes inactivos
    AllcustomersPage.prototype.presentActionSheetInact = function (cliente) {
        var _this = this;
        var action = this.actionsheet.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Detalles',
                    role: 'detalles',
                    handler: function () {
                        console.log('Detalles clicked');
                        _this.navCtrl.push(_this.infocliente, { cliente: cliente });
                    }
                },
                {
                    text: 'Activar',
                    role: 'activar',
                    handler: function () {
                        console.log('activar clicked');
                        _this.activarCliente(cliente);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        action.present();
    };
    // menu desplegable
    AllcustomersPage.prototype.actionSheet = function (cliente) {
        console.log("action sheet");
        this.getElements(cliente);
        if (cliente.activo == '0') {
            this.presentActionSheetInact(cliente);
        }
        else {
            this.presentActionSheetAct(cliente);
        }
        //this.presentLoading();
        //this.actualizar();   // actualiza los datos 
    };
    AllcustomersPage.prototype.verFiltro = function () {
        if (this.filtro.val == this.filtro_aux) {
            console.log("NO hay cambio");
        }
        else {
            this.presentLoading();
            this.filtro_aux = this.filtro.val;
            console.log("SI hay cambio");
            this.initializeItems(); // funcion que inicializa la lista auxiliar segun el caso
        }
    };
    AllcustomersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-allcustomers',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\allcustomers\allcustomers.html"*/'<!--\n  Generated template for the AllcustomersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Clientes</ion-title>\n      </ion-navbar>\n      \n  <ion-searchbar placeholder="buscar" (ionInput)="getItems($event)">\n\n  </ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n  \n        <ion-select [(ngModel)]="filtro.val">\n            <ion-option value="0">Todos</ion-option>\n            <ion-option value="1">Activos</ion-option>\n            <ion-option value="2">Inactivos</ion-option>\n         </ion-select>\n    </ion-item>\n    <button ion-button icon-start (click)="verFiltro()">\n        <ion-icon name="search"></ion-icon>\n        Filtrar\n    </button>\n    \n\n     <ion-item *ngFor="let cliente of items" (click)="actionSheet(cliente)">\n          <ion-thumbnail item-start>\n            <img src="http://gymdb/imgs/customers/{{ cliente.foto }}">\n          </ion-thumbnail>\n          <h2><b>{{ cliente.Nombre }}</b></h2>\n          <p><b>ID: </b>{{ cliente.id_cliente }}</p>\n          \n          <p align="right" class="bluetext" *ngIf="cliente.activo==\'1\'" color="secondary">ACTIVO</p>\n          <p align="right" class="redtext" *ngIf="cliente.activo==\'0\'" color="danger">INACTIVO</p>\n\n        </ion-item>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\allcustomers\allcustomers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AllcustomersPage);
    return AllcustomersPage;
}());

//# sourceMappingURL=allcustomers.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http, loadigCtrl, alerta, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadigCtrl = loadigCtrl;
        this.alerta = alerta;
        this.navParams = navParams;
        this.admin = __WEBPACK_IMPORTED_MODULE_3__admin_admin__["a" /* AdminPage */];
        this.custumer = __WEBPACK_IMPORTED_MODULE_4__customer_customer__["a" /* CustomerPage */];
        this.datos = {};
        this.apiUrl = "http://gymdb/";
        this.var = {};
    }
    LoginPage.prototype.presentLoading = function () {
        var loader = this.loadigCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        //this.getMenus();
    };
    LoginPage.prototype.getMenus = function () {
        var funcion = {
            'funcion': 'getMenu'
        };
        console.log(JSON.stringify(funcion));
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
        });
    };
    // boton de acceder
    LoginPage.prototype.access = function () {
        var _this = this;
        var miAlerta = this.alerta.create({
            title: 'OPERACION CANCELADA',
            message: 'ACCESO DENEGADO!!',
            buttons: ['ACEPTAR']
        });
        this.datos['funcion'] = 'login'; //funcion logearse
        console.log(JSON.stringify(this.datos));
        this.http.post(this.apiUrl, JSON.stringify(this.datos))
            .subscribe(function (res) {
            console.log(res);
            if (res == "-1") {
                console.log("No existe");
                miAlerta.present();
            }
            else {
                console.log("ACCESO PERMITIDO!!");
                console.log(res); // ya tiene los datos
                if (res['tipo'] == "1") {
                    console.log("Eres cliente");
                    _this.presentLoading();
                    _this.navCtrl.push(_this.custumer);
                }
                else if (res['tipo'] == "2") {
                    console.log("eres empleado");
                }
                else if (res['tipo'] == "3") {
                    console.log("eres administrativo");
                    _this.presentLoading();
                    _this.navCtrl.push(_this.admin);
                }
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color=secondary>\n\n    <ion-title>Acceso</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="inicio">\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-col>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card text-center class="bienvenido">\n\n        \n\n          <ion-card-content>\n\n          <h2><strong>Bienvenido</strong></h2>\n\n          <br>\n\n          <ion-icon name="person"></ion-icon>\n\n          <br><br>\n\n          \n\n          <form name="cuenta">\n\n              \n\n              <ion-list>\n\n                <ion-item >\n\n                  <ion-label stacked>Usuario</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="datos.user" name ="nombre" required></ion-input>\n\n                </ion-item>\n\n                    \n\n                <ion-item>\n\n                  <ion-label stacked>Contraseña</ion-label>\n\n                  <ion-input type="password" [(ngModel)]="datos.password" name ="password"></ion-input>\n\n                </ion-item>\n\n              </ion-list><br>\n\n\n\n              <ion-buttons>\n\n                  <button ion-button round color=primary type="submit" (click) ="access()" size="large">Iniciar Sesión</button>\n\n              </ion-buttons>\n\n              <ion-buttons>\n\n                  <button ion-button round color=primary >¿Problemas?</button>\n\n              </ion-buttons>\n\n             \n\n            </form>      \n\n            \n\n        </ion-card-content>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_add_cliente_add_cliente__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allcustomers_allcustomers__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_aparatos_add_aparatos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__allaparatos_allaparatos__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_empleado_add_empleado__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pay_pay__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_pay_list_pay__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pack_pack__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_pack_list_pack__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//import { AddClientePage } from '../add-cliente/add-cliente';
//import { ListcustomersPage } from '../listcustomers/listcustomers';




var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        //clientes
        this.addCliente = __WEBPACK_IMPORTED_MODULE_3_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_add_cliente_add_cliente__["a" /* AddClientePage */];
        this.listCustomers = __WEBPACK_IMPORTED_MODULE_4__allcustomers_allcustomers__["a" /* AllcustomersPage */];
        //listCustomers = ListcustomersPage;
        //pagos
        this.payPage = __WEBPACK_IMPORTED_MODULE_8__pay_pay__["a" /* PayPage */];
        this.listPayPage = __WEBPACK_IMPORTED_MODULE_9__list_pay_list_pay__["a" /* ListPayPage */];
        this.paquete = __WEBPACK_IMPORTED_MODULE_10__pack_pack__["a" /* PackPage */];
        this.list_pack = __WEBPACK_IMPORTED_MODULE_11__list_pack_list_pack__["a" /* ListPackPage */];
        //aparatos
        this.aparatos = __WEBPACK_IMPORTED_MODULE_5__add_aparatos_add_aparatos__["a" /* AddAparatosPage */];
        this.allaparatos = __WEBPACK_IMPORTED_MODULE_6__allaparatos_allaparatos__["a" /* AllaparatosPage */];
        //empleados
        this.addEmp = __WEBPACK_IMPORTED_MODULE_7__add_empleado_add_empleado__["a" /* AddEmpleadoPage */];
        this.apiUrl = "http://gymdb/";
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.agregarCLiente = function () {
        this.navCtrl.push(this.addCliente);
    };
    AdminPage.prototype.mostrar = function () {
        var funcion = {
            'funcion': 'mostrar'
        };
        console.log(JSON.stringify(funcion));
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
        });
    };
    AdminPage.prototype.allCustomers = function () {
        this.navCtrl.push(this.listCustomers);
    };
    AdminPage.prototype.pay = function () {
        this.navCtrl.push(this.payPage);
    };
    AdminPage.prototype.listPay = function () {
        this.navCtrl.push(this.listPayPage);
    };
    AdminPage.prototype.agregarAparato = function () {
        this.navCtrl.push(this.aparatos);
    };
    AdminPage.prototype.allAparatos = function () {
        this.navCtrl.push(this.allaparatos);
    };
    AdminPage.prototype.agregarEmpleado = function () {
        this.navCtrl.push(this.addEmp);
    };
    AdminPage.prototype.pack = function () {
        this.navCtrl.push(this.paquete);
    };
    AdminPage.prototype.listPack = function () {
        this.navCtrl.push(this.list_pack);
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\admin\admin.html"*/'<!--\n\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color=secondary>\n\n    <ion-title>GYM SYSTEM</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n    \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-content text-center>\n\n          Acceso<br>\n\n          <button ion-button round color=light clear>\n\n            <ion-icon name="hand"></ion-icon>\n\n          </button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    \n\n    <ion-col>\n\n\n\n      <ion-card color=primary>\n\n        <ion-card-header text-center>\n\n          Pagos <br>\n\n          <ion-icon name="cash"></ion-icon>\n\n        </ion-card-header>\n\n  \n\n        <ion-list>\n\n          <button ion-item (click)="pay()">\n\n            <ion-icon name="add" item-start></ion-icon>\n\n            Pagar\n\n          </button>\n\n    \n\n          <button ion-item (click)= "listPay()">\n\n          <ion-icon name="list" item-start></ion-icon>\n\n               Lista\n\n          </button>\n\n        \n\n        </ion-list>\n\n      </ion-card>\n\n    </ion-col>\n\n  \n\n  </ion-row>\n\n</ion-grid>\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n  \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-header text-center>\n\n          Clientes <br>\n\n          <ion-icon name="contact" item-start></ion-icon>\n\n        </ion-card-header>\n\n        \n\n\n\n        <ion-list>\n\n          <button ion-item (click)="agregarCLiente()">\n\n            <ion-icon name="add" item-start></ion-icon>\n\n              Nuevo\n\n          </button>\n\n          <button ion-item (click)= "allCustomers()">\n\n            <ion-icon name="list" item-start></ion-icon>\n\n             Lista\n\n          </button>\n\n          </ion-list>\n\n      </ion-card>\n\n    </ion-col>\n\n              \n\n                \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-content text-center>\n\n          Tienda<br>\n\n          <ion-icon name="card"></ion-icon>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-card color=danger>\n\n    <ion-card-content text-center>\n\n      Reportes<br>\n\n      <ion-icon name="clipboard"></ion-icon>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card color=primary>\n\n    <ion-card-header text-center>\n\n      Paquetes <br>\n\n      <ion-icon name="keypad"></ion-icon>\n\n    </ion-card-header>\n\n\n\n    <ion-list>\n\n      <button ion-item (click)="pack()">\n\n        <ion-icon name="add" item-start></ion-icon>\n\n        Nuevo\n\n      </button>\n\n\n\n      <button ion-item (click)= "listPack()">\n\n      <ion-icon name="list" item-start></ion-icon>\n\n           Lista\n\n      </button>\n\n    \n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-card color=primary>\n\n    <ion-card-content text-center>\n\n      Inventario<br>\n\n      <ion-icon name="attach"></ion-icon>\n\n    </ion-card-content>\n\n    <ion-list>\n\n      <button ion-item (click)="agregarAparato()">\n\n        <ion-icon name="add" item-start></ion-icon>\n\n          Nuevo\n\n      </button>\n\n      <button ion-item (click)= "allAparatos()">\n\n        <ion-icon name="list" item-start></ion-icon>\n\n         Lista\n\n      </button>\n\n      </ion-list>\n\n  </ion-card>\n\n  <ion-card color=danger>\n\n      <ion-card-content text-center>\n\n        Empleados<br>\n\n        <ion-icon name="clipboard"></ion-icon>\n\n      </ion-card-content>\n\n      <ion-list>\n\n          <button ion-item (click)="agregarEmpleado()">\n\n            <ion-icon name="add" item-start></ion-icon>\n\n              Nuevo\n\n          </button>\n\n          <button ion-item (click)= "allAparatos()">\n\n            <ion-icon name="list" item-start></ion-icon>\n\n             Lista\n\n          </button>\n\n          </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content> '/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PayPage = /** @class */ (function () {
    function PayPage(navCtrl, http, actionsheet, alert, cl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionsheet = actionsheet;
        this.alert = alert;
        this.cl = cl;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.clientes = [];
        this.items = [];
        this.funcion = {
            "funcion": "getAllCustomers"
        };
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.clientes = res['clientes'];
            _this.paquete();
            console.log(JSON.stringify(_this.clientes));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
        this.myForm = this.cl.group({
            id_usuario: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, , __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]],
            paquete: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            modo: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            monto: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, , __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]]
        });
    }
    PayPage.prototype.initializeItems = function () {
        this.items = this.clientes;
    };
    PayPage.prototype.paquete = function () {
        var _this = this;
        var funcion = {
            "funcion": "getPaquete"
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.paquetes = res;
            console.log(JSON.stringify(_this.paquetes));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    PayPage.prototype.cleanItems = function () {
        this.items = [];
    };
    PayPage.prototype.getItems = function (ev) {
        this.initializeItems();
        console.log(ev.target.value);
        var val = ev.target.value.toUpperCase();
        this.items = this.items.filter(function (cliente) {
            console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
            return cliente.Nombre.includes(val);
        });
        console.log(JSON.stringify(this.clientes));
    };
    PayPage.prototype.pagar = function () {
        var _this = this;
        var paqueteAlerta = this.alert.create({
            title: 'Paquete invalido',
            message: 'Escribe el nombre correcto del paquete',
            buttons: ['Ok']
        });
        var paqueteInactivoAlerta = this.alert.create({
            title: 'Paquete no disponible',
            message: 'Verifica situacion del paquete',
            buttons: ['Ok']
        });
        var clienteAlerta = this.alert.create({
            title: 'Cliente invalido',
            message: 'Escribe id de un cliente valido',
            buttons: ['Ok']
        });
        var pagoAlerta = this.alert.create({
            title: 'Pago Existoso',
            message: 'Gracias por su preferencia',
            buttons: ['Ok']
        });
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion'] = 'addPago';
        for (var i in obj) {
            if (i == "funcion") {
            }
            else {
                obj[i] = obj[i].toUpperCase();
            }
        }
        console.log(obj);
        this.http.post(this.apiUrl, JSON.stringify(obj))
            .subscribe(function (res) {
            if (res == "Paquete Invalido") {
                paqueteAlerta.present();
            }
            if (res == "Paquete Inactivo") {
                paqueteInactivoAlerta.present();
            }
            if (res == "Cliente Invalido") {
                clienteAlerta.present();
            }
            else if (res == "Pago exitoso") {
                pagoAlerta.present();
                if (_this.myForm.valid) {
                    console.log("form enviado");
                    _this.myForm.reset();
                }
            }
            console.log(res);
        });
    };
    PayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myForm'),
        __metadata("design:type", Object)
    ], PayPage.prototype, "formValues", void 0);
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pay\pay.html"*/'<ion-header>\n\n\n\n  <ion-navbar color= "secondary">\n\n    <ion-title>Pagos</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-searchbar placeholder="Ingresa nombre de usuario para consultar id" (ionInput)="getItems($event)">\n\n  </ion-searchbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div text-center>\n\n    <button ion-button outline (click)="cleanItems()">\n\n      <ion-icon name="arrow-up"></ion-icon>\n\n    </button>\n\n  </div>\n\n\n\n  <ion-card *ngFor="let cliente of items" color="primary">\n\n    <ion-card-content>\n\n      <b>{{ cliente.Nombre }}</b> <br> {{ cliente.id_cliente }}\n\n    </ion-card-content>\n\n  \n\n  </ion-card>\n\n\n\n  <ion-card *ngFor="let pack of paquetes" (click)="actionSheet()">\n\n    <ion-card-header><b>{{ pack.nombre }}</b>\n\n    </ion-card-header>\n\n          \n\n    <ion-card-content color="primary">\n\n      ${{pack.precio}}.00\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n\n\n    <div text-center>\n\n      <br>\n\n      <strong >FICHA DE PAGO</strong>\n\n    </div>\n\n\n\n      <form [formGroup]="myForm"  (ngSubmit)="pagar()" novalidate>\n\n          <ion-list>\n\n\n\n              <ion-item>\n\n                <ion-label stack color = "primary">Username: </ion-label>\n\n                <ion-input id="id_usuario" name="id_usuario" formControlName="id_usuario" type="text"></ion-input>\n\n              </ion-item>\n\n              <ion-item *ngIf="myForm.get(\'id_usuario\').errors && myForm.get(\'id_usuario\').dirty">\n\n                <p color="danger" ion-text *ngIf="myForm.get(\'id_usuario\').hasError(\'required\')">Field is required</p>\n\n                <p color="danger" ion-text *ngIf="myForm.get(\'id_usuario\').hasError(\'pattern\')">Just Numbers</p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stack color = "primary">Paquete: </ion-label>\n\n                <ion-input id="paquete" name="paquete" formControlName="paquete" type="text"></ion-input>\n\n              </ion-item>\n\n              <ion-item *ngIf="myForm.get(\'paquete\').errors && myForm.get(\'paquete\').dirty">\n\n                <p color="danger" ion-text *ngIf="myForm.get(\'paquete\').hasError(\'required\')">Field is required</p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stack color = "primary">Modo de Pago </ion-label>\n\n                <ion-select id="modo" name="modo" formControlName="modo" type="modo">\n\n                  <ion-option value="EFECTIVO">Efectivo</ion-option>\n\n                  <ion-option value="DEBITO">Debito</ion-option>\n\n                  <ion-option value="CREDITO">Credito</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <ion-item *ngIf="myForm.get(\'modo\').errors && myForm.get(\'modo\').dirty">\n\n                <p color="danger" ion-text *ngIf="myForm.get(\'modo\').hasError(\'required\')">Field is required</p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label stack color = "primary">Monto: </ion-label>\n\n                  <ion-input id="monto" name="monto" formControlName="monto" type="text"></ion-input>\n\n              </ion-item>\n\n              <ion-item *ngIf="myForm.get(\'monto\').errors && myForm.get(\'monto\').dirty">\n\n                  <p color="danger" ion-text *ngIf="myForm.get(\'monto\').hasError(\'required\')">Field is required</p>\n\n                  <p color="danger" ion-text *ngIf="myForm.get(\'monto\').hasError(\'pattern\')">Just Numbers</p>\n\n              </ion-item>\n\n\n\n          </ion-list>\n\n\n\n          <div padding text-center>\n\n            <button ion-button outline type="submit" [disabled]="myForm.invalid">Pagar</button>\n\n          </div>\n\n\n\n      </form>\n\n\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pay\pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recibe_pay_recibe_pay__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modify_pay_modify_pay__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPayPage = /** @class */ (function () {
    function ListPayPage(navCtrl, http, actionsheet, alert, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionsheet = actionsheet;
        this.alert = alert;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.pagos = [];
        this.items = [];
        this.recibe = __WEBPACK_IMPORTED_MODULE_3__recibe_pay_recibe_pay__["a" /* RecibePayPage */];
        this.modify = __WEBPACK_IMPORTED_MODULE_4__modify_pay_modify_pay__["a" /* ModifyPayPage */];
        this.funcion = {
            "funcion": "getAllPays"
        };
        this.op_cancel = this.alert.create({
            title: 'Error',
            message: 'No se ha podido eliminar pago correctamente',
            buttons: ['Ok']
        });
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.pagos = res['pagos'];
            _this.initializeItems();
            console.log(JSON.stringify(_this.pagos));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    ListPayPage.prototype.actualizar = function () {
        var _this = this;
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            //console.log(res);
            _this.pagos = res['pagos'];
            _this.initializeItems();
            console.log(JSON.stringify(_this.pagos));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    ListPayPage.prototype.eliminar = function (pago) {
        var _this = this;
        var elim = this.alert.create({
            title: 'ADVERTENCIA',
            message: '¿SEGURO QUE DESEA ELIMINAR PAGO?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log("Operacion cancelada");
                    }
                },
                {
                    text: 'Aceptar',
                    role: 'aceptar',
                    handler: function (data) {
                        console.log(pago);
                        pago['funcion'] = "eliminarPago";
                        _this.http.post(_this.apiUrl, JSON.stringify(pago))
                            .subscribe(function (res) {
                            console.log(res);
                            if (res == "exito") {
                                _this.items = [];
                                _this.actualizar();
                            }
                            else {
                                _this.op_cancel.present();
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        elim.present();
    };
    ListPayPage.prototype.presentActionSheet = function (pago) {
        var _this = this;
        var action = this.actionsheet.create({
            title: 'Opciones de Pago',
            buttons: [
                {
                    text: 'Ver Recibo',
                    role: 'recibo',
                    handler: function () {
                        console.log(pago);
                        _this.navCtrl.push(_this.recibe, { pago: pago });
                    }
                }, {
                    text: 'Editar',
                    role: 'editar',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.navCtrl.push(_this.modify, { pago: pago });
                    }
                }, {
                    text: 'Eliminar',
                    role: 'eliminar',
                    handler: function () {
                        _this.eliminar(pago);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancelar',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        action.present();
    };
    ListPayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPayPage');
    };
    ListPayPage.prototype.actionSheet = function (pago) {
        console.log("action sheet");
        this.presentActionSheet(pago);
        //his.navCtrl.push(this.info, {cliente: cliente});
    };
    ListPayPage.prototype.initializeItems = function () {
        this.items = this.pagos;
    };
    ListPayPage.prototype.getItems = function (ev) {
        this.initializeItems();
        console.log(ev.target.value);
        var val = ev.target.value;
        this.items = this.items.filter(function (pago) {
            console.log(JSON.stringify(JSON.stringify(pago.id_pago)));
            return pago.id_pago.includes(val);
        });
        console.log(JSON.stringify(this.pagos));
    };
    ListPayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-pay',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\list-pay\list-pay.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Buscar pago</ion-title>\n\n  </ion-navbar>\n\n  <ion-searchbar placeholder="Buscar pago por id de pago" (ionInput)="getItems($event)">\n\n\n\n  </ion-searchbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n<ion-card *ngFor="let pagos of items" (click)="actionSheet(pagos)">\n\n  <ion-card-header color="primary"> \n\n    <b>{{ pagos.fecha_pago }}</b>\n\n  </ion-card-header>\n\n        \n\n  <ion-card-content>\n\n      ID {{pagos.id_pago}} <br>\n\n      Cliente: {{pagos.id_cliente }} <br>\n\n  </ion-card-content>\n\n</ion-card>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\list-pay\list-pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPayPage);
    return ListPayPage;
}());

//# sourceMappingURL=list-pay.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pack_details_pack_details__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modify_pack_modify_pack__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPackPage = /** @class */ (function () {
    function ListPackPage(navCtrl, http, actionsheet, alert, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionsheet = actionsheet;
        this.alert = alert;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.packs = [];
        this.items = [];
        this.detalles = __WEBPACK_IMPORTED_MODULE_3__pack_details_pack_details__["a" /* PackDetailsPage */];
        this.editar = __WEBPACK_IMPORTED_MODULE_4__modify_pack_modify_pack__["a" /* ModifyPackPage */];
        this.funcion = {
            "funcion": "getAllPacks"
        };
        this.filtro = {
            val: null
        };
        this.filtro_aux = "";
        this.op_cancel = this.alert.create({
            title: 'Error',
            message: 'No se ha podido eliminar paquete correctamente',
            buttons: ['Ok']
        });
        this.filtro.val = "1";
        this.filtro_aux = "1";
        this.actualizar();
    }
    ListPackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPackPage');
    };
    ListPackPage.prototype.getItems = function (ev) {
        this.initializeItems();
        console.log(ev.target.value);
        var val = ev.target.value;
        if (val != '') {
            val = ev.target.value.toUpperCase();
        }
        this.items = this.items.filter(function (pack) {
            console.log(JSON.stringify(JSON.stringify(pack.nombre)));
            return pack.nombre.includes(val);
        });
        console.log(JSON.stringify(this.packs));
    };
    ListPackPage.prototype.actionSheet = function (pack) {
        console.log("action sheet");
        if (pack['activo'] == 0) {
            this.presentActionSheetInact(pack);
        }
        else {
            this.presentActionSheet(pack);
        }
    };
    ListPackPage.prototype.presentActionSheet = function (pack) {
        var _this = this;
        var action = this.actionsheet.create({
            title: 'Opciones de Pago',
            buttons: [
                {
                    text: 'Ver detalles',
                    role: 'detalles',
                    handler: function () {
                        console.log(pack);
                        _this.navCtrl.push(_this.detalles, { pack: pack });
                    }
                }, {
                    text: 'Editar',
                    role: 'editar',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.navCtrl.push(_this.editar, { pack: pack });
                    }
                }, {
                    text: 'Eliminar',
                    role: 'eliminar',
                    handler: function () {
                        _this.eliminar(pack);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancelar',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        action.present();
    };
    ListPackPage.prototype.presentActionSheetInact = function (pack) {
        var _this = this;
        var action = this.actionsheet.create({
            title: 'Opciones de Pago',
            buttons: [
                {
                    text: 'Activar',
                    role: 'activar',
                    handler: function () {
                        _this.activar(pack);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancelar',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        action.present();
    };
    ListPackPage.prototype.eliminar = function (pack) {
        var _this = this;
        var elim = this.alert.create({
            title: 'ADVERTENCIA',
            message: '¿SEGURO QUE DESEA ELIMINAR PAQUETE?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log("Operacion cancelada");
                    }
                },
                {
                    text: 'Aceptar',
                    role: 'aceptar',
                    handler: function (data) {
                        console.log(pack);
                        pack['funcion'] = "eliminarPaquete";
                        _this.http.post(_this.apiUrl, JSON.stringify(pack))
                            .subscribe(function (res) {
                            console.log(res);
                            if (res == "exito") {
                                _this.actualizar();
                            }
                            else {
                                _this.op_cancel.present();
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        elim.present();
    };
    ListPackPage.prototype.activar = function (pack) {
        var _this = this;
        var elim = this.alert.create({
            title: 'ADVERTENCIA',
            message: '¿SEGURO QUE DESEA ACTIVAR PAQUETE?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log("Operacion cancelada");
                    }
                },
                {
                    text: 'Aceptar',
                    role: 'aceptar',
                    handler: function (data) {
                        console.log(pack);
                        pack['funcion'] = "activarPaquete";
                        _this.http.post(_this.apiUrl, JSON.stringify(pack))
                            .subscribe(function (res) {
                            console.log(res);
                            if (res == "exito") {
                                _this.actualizar();
                            }
                            else {
                                _this.op_cancel.present();
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        elim.present();
    };
    ListPackPage.prototype.actualizar = function () {
        var _this = this;
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            //console.log(res);
            _this.packs = res['packs'];
            _this.initializeItems();
            console.log(JSON.stringify(_this.packs));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    ListPackPage.prototype.initializeItems = function () {
        if (this.filtro.val == "0") {
            this.items = this.packs;
        }
        else if (this.filtro.val == "1") {
            this.inicializarActivos();
        }
        else if (this.filtro.val == "2") {
            this.inicializarInactivos();
        }
    };
    ListPackPage.prototype.inicializarActivos = function () {
        this.items = this.packs.filter(function (pack) {
            console.log(JSON.stringify(JSON.stringify(pack.nombre)));
            return pack.activo == 1;
        });
        console.log(JSON.stringify(this.items));
    };
    ListPackPage.prototype.inicializarInactivos = function () {
        this.items = this.packs.filter(function (pack) {
            console.log(JSON.stringify(JSON.stringify(pack.nombre)));
            return pack.activo == 0;
        });
        console.log(JSON.stringify(this.items));
    };
    ListPackPage.prototype.verFiltro = function () {
        if (this.filtro.val == this.filtro_aux) {
            console.log("NO hay cambio");
        }
        else {
            this.filtro_aux = this.filtro.val;
            console.log("SI hay cambio");
            this.initializeItems();
        }
    };
    ListPackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-pack',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\list-pack\list-pack.html"*/'<ion-header>\n  <ion-navbar color = "secondary">\n    <ion-title>Paquetes</ion-title>\n  </ion-navbar>\n  <ion-searchbar placeholder="Buscar paquete por nombre" (ionInput)="getItems($event)">\n\n  </ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-select [(ngModel)]="filtro.val">\n              <ion-option value="0">Todos</ion-option>\n              <ion-option value="1">Activos</ion-option>\n              <ion-option value="2">Inactivos</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n \n        </ion-col>\n        <ion-col>\n \n        </ion-col>\n        <ion-col>\n          <div text-right>\n            <button ion-button outline icon-start (click)="verFiltro()">\n              <ion-icon name="search"> </ion-icon> Filtrar </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n            \n  </ion-card>\n\n  <ion-card *ngFor="let pack of items" (click)="actionSheet(pack)">\n    <ion-card-header color="primary"> \n      <b>{{ pack.nombre }}</b>\n    </ion-card-header>\n              \n    <ion-card-content>\n      ID {{pack.id}} <br>\n      Descripcion: {{pack.descripcion}} <br>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\list-pack\list-pack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPackPage);
    return ListPackPage;
}());

//# sourceMappingURL=list-pack.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map