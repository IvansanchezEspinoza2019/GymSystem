webpackJsonp([38],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAparatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
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
        this.id_admin = {};
        this.myForm = this.cl.group({
            categoria: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            otro: [''],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
        this.obtenerCat(); //obtiene categorias
        this.id_admin = this.navParams.get('id');
        console.log("ID EMPLEADO");
        console.log(this.id_admin);
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
    AddAparatosPage.prototype.actualizar_admin_aparato = function (id_aparato) {
        var funcion = {
            'funcion': 'updateAdminAparato',
            'accion': '1'
        };
        funcion['id_aparato'] = id_aparato;
        funcion['id_admin'] = this.id_admin;
        console.log("Funcion");
        console.log(JSON.stringify(funcion));
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
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
            message: 'Campo categoria vacio!!',
            buttons: ['Aceptar']
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
            message: 'Agregado correctamente!!',
            buttons: ['Aceptar']
        });
        var mayus = this.myForm.controls['otro'].value;
        var desc = this.myForm.controls['descripcion'].value;
        if (mayus != null) {
            mayus = mayus.toUpperCase();
            this.myForm.controls['otro'].setValue(mayus); // covierte a mayuscula la categoria
        }
        if (desc != null) {
            desc = desc.toUpperCase();
            this.myForm.controls['descripcion'].setValue(desc); // covierte a mayuscula la categoria
        }
        console.log((this.myForm.value));
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion'] = 'addMaquina';
        obj['id_admin'] = this.id_admin;
        obj['accion'] = '1'; //'1' es la accion de agregar
        console.log(obj);
        this.http.post(this.apiUrl, JSON.stringify(obj))
            .subscribe(function (res) {
            console.log("res del server");
            console.log(res);
            if (res == "exito") {
                success.present();
                _this.reiniciarForm();
                //this.actualizar_admin_aparato(res['id_aparato']);
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
            selector: 'page-add-aparatos',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-aparatos\add-aparatos.html"*/'<!--\n  Generated template for the AddAparatosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Agregar Aparato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-center classss="Datos">\n        \n          <ion-card-content>\n          <h2><strong >Registro</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                  <ion-item [hidden]="hideCategoria">\n                      <ion-label color="primary" icon-start><ion-icon name="pricetag"></ion-icon>Categoria:  </ion-label>\n                      <ion-select  id="categoria" name="categoria" formControlName="categoria" (ionChange)="onChange($event)">\n                        <div *ngFor="let tupla of datos">\n                          <ion-option value="{{tupla.id}}">{{tupla.nombre}}\n                          </ion-option>\n                        </div>\n                      </ion-select>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'categoria\').errors && myForm.get(\'categoria\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'categoria\').hasError(\'required\')">Field is required</p>\n                 </ion-item>\n                 <ion-item [hidden]="hideOtro">\n                  <ion-label stack color = "primary" icon-start><ion-icon name="pricetag"></ion-icon>Categoria:</ion-label>\n                  <ion-input id="otro" type="text" formControlName="otro"  name ="otro"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Descripcion:</ion-label>\n                  <ion-input id="descripcion" type="text" formControlName="descripcion"  name ="descripcion"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'descripcion\').errors && myForm.get(\'descripcion\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'descripcion\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label color="primary" icon-start><ion-icon name="git-pull-request"></ion-icon>Estado:  </ion-label>\n                      <ion-select id="estado" name="estado" formControlName="estado" >\n                          <ion-option value="1">En funcionamiento</ion-option >\n                            <ion-option value="2">En Mantenimiento</ion-option >\n                              <ion-option value="3">Fuera de Servicio</ion-option >\n                      </ion-select>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'estado\').errors && myForm.get(\'estado\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'estado\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                                \n              </ion-list><br>\n              <div padding>\n                  <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                      <ion-icon name="archive">   </ion-icon>\n                          Guardar\n                  </button>\n                </div>\n            </form> \n\n        </ion-card-content>\n\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-aparatos\add-aparatos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AddAparatosPage);
    return AddAparatosPage;
}());

//# sourceMappingURL=add-aparatos.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
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
        //pagos
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
            message: 'La contraseña no coincide!!',
            buttons: ['Aceptar']
        });
        var idRep = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'Ya existe ese usuario!!',
            buttons: ['Aceptar']
        });
        var success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'Agregado correctanmete!!',
            buttons: ['Aceptar']
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
                        //this.navCtrl.push(this.pay);
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
                message: 'El archivo no se encuentra en la carpeta del servidor!!',
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-cliente',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-cliente\add-cliente.html"*/'<!--\n  Generated template for the LoginPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Agregar Cliente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding class="inicio">\n\n    <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n      <img src="http://gymdb/imgs/customers/{{ dir.path }}" width="300" height="300" alt="Imagen de Perfil">\n    \n    <ion-label color="primary"><b>SELECCIONE IMAGEN:</b> </ion-label>\n    <form  method="post" enctype="multipart/form-data">   \n    <input type="file" name="fileToUpload"  id="fileToUpload"  [(ngModel)]="dir.dir">\n    <button ion-button icon-start (click)="ver()">\n        <ion-icon name="camera"></ion-icon>\n        Añadir\n    </button>\n    </form>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-center classss="Datos">\n        \n          <ion-card-content>\n          <h2><strong >DATOS</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Nombre:</ion-label>\n                      <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Paterno:</ion-label>\n                  <ion-input id="apellidoP" name ="apellidoP" type="text" formControlName="apellidoP"  name ="apellidoP"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'apellidoP\').errors && myForm.get(\'apellidoP\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'apellidoP\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Materno:</ion-label>\n                  <ion-input id="apellidoM" name ="apellidoM" type="text" formControlName="apellidoM" name ="apellidoM"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'apellidoM\').errors && myForm.get(\'apellidoM\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'apellidoM\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label color = "primary" icon-start><ion-icon name="person"></ion-icon>Genero:</ion-label>\n                      <ion-select id="gender" name ="gender" formControlName="gender">\n                      <ion-option value="f">Mujer</ion-option>\n                        <ion-option value="m">Hombre</ion-option>\n                      </ion-select>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'gender\').errors && myForm.get(\'gender\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'gender\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary"  icon-start><ion-icon name="call"></ion-icon>Telefono:</ion-label>\n                    <ion-input id="telefono" name ="telefono" type="tel" formControlName="telefono"  name ="telefono"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'telefono\').errors && myForm.get(\'telefono\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'required\')">Field is required</p>\n                    <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'pattern\')">Just Numbers</p>\n                  </ion-item>\n                \n                   <ion-label color="secondary" icon-start><ion-icon name="calendar"></ion-icon>FECHA DE NACIMIENTO</ion-label>\n                   <ion-item>\n                      <ion-label >MM DD YY</ion-label>\n                      <ion-datetime id="fechanac" name ="fechanac" formControlName="fechanac" display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'fechanac\').errors && myForm.get(\'fechanac\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'fechanac\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n\n                   <ion-label color="secondary" icon-start><ion-icon name="pin"></ion-icon>DIRECCION</ion-label>\n                   <ion-item>\n                      <ion-label stack color = "primary" >Nombre Calle:</ion-label>\n                      <ion-input id="calle" name ="calle" formControlName="calle" type="text"></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="myForm.get(\'calle\').errors && myForm.get(\'calle\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'calle\').hasError(\'required\')">Field is required</p>\n                     </ion-item> \n                     <ion-item>\n                        <ion-label stack color = "primary">Numero Exterior:</ion-label>\n                        <ion-input id="numero" name ="numero" formControlName="numero" type="text"></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="myForm.get(\'numero\').errors && myForm.get(\'numero\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'numero\').hasError(\'required\')">Field is required</p>\n                       </ion-item> \n                       <ion-item>\n                          <ion-label stack color = "primary" >Numero Interior:</ion-label>\n                          <ion-input id="numeroint" name ="numeroint" formControlName="numeroint" type="text"></ion-input>\n                       </ion-item>\n                         <ion-item>\n                            <ion-label stack color = "primary" >Colonia:</ion-label>\n                            <ion-input id="colonia" name ="colonia" formControlName="colonia" type="text"></ion-input>\n                        </ion-item>\n                          <ion-item *ngIf="myForm.get(\'colonia\').errors && myForm.get(\'colonia\').dirty">\n                            <p color="danger" ion-text *ngIf="myForm.get(\'colonia\').hasError(\'required\')">Field is required</p>\n                           </ion-item>\n                           <ion-item>\n                              <ion-label stack color = "primary" >CP:</ion-label>\n                              <ion-input  id="cp" name="cp" formControlName="cp" type="text"></ion-input>\n                          </ion-item>\n                            <ion-item *ngIf="myForm.get(\'cp\').errors && myForm.get(\'cp\').dirty">\n                              <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'required\')">Field is required</p>\n                              <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'pattern\')">Just Numbers</p>\n                             </ion-item> \n                             <ion-label color="secondary">CUENTA</ion-label>\n                             <ion-item >\n                                <ion-label stack color = "primary" icon-start><ion-icon name="log-in"></ion-icon> Username:</ion-label>\n                              <ion-input readonly id="usercliente" name="usercliente" formControlName="user" type="text" ></ion-input>\n                            </ion-item>\n                             <ion-item class="inputPass">\n                                <ion-label stack color = "primary"  icon-start>\n                                    <ion-icon name="lock"></ion-icon> Contraseña:</ion-label>\n                                <ion-input id="password" name ="password" formControlName="password" type="password"></ion-input>\n                              </ion-item>\n                                \n                              <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'password\').dirty">\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'required\')">Field is required</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'minlength\')">Min of 5 characters</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'maxlength\')">Max of 15 characters</p>\n                              </ion-item>\n                              <ion-item class="inputPass">\n                                  <ion-label stack color = "primary"  icon-start>\n                                      <ion-icon name="lock"></ion-icon>\n                                      Repita Contraseña:</ion-label>\n                                  <ion-input id="rep" name= "rep" formControlName="reppass"  type="password"></ion-input>\n                                </ion-item>\n                                <ion-item *ngIf="myForm.get(\'reppass\').errors && myForm.get(\'reppass\').dirty">\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'reppass\').hasError(\'required\')">Field is required</p>\n                                </ion-item>\n                                \n              </ion-list><br>\n              <div padding>\n                  <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                      <ion-icon name="archive">   </ion-icon>\n                          Guardar\n                  </button>\n\n\n                </div>\n            </form> \n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-cliente\add-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], AddClientePage);
    return AddClientePage;
}());

//# sourceMappingURL=add-cliente.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmpleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
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
    // constructor
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
        this.apiUrl = "http://gymdb:/"; // servidor local
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
            user: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)]],
            reppass: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
        this.dir['path'] = 'stock.png'; // path por default de las imagenes
        this.obtenerPuestos(); // llama a la funcio de obtener puestos
        this.setDefaultValue('111111111'); // pone un valor aleatorio a la cuenta, podría ser cualquiera 
    }
    // pone un valor a la cuenta del empleado, mas que nada para que cumpla con el requisito minimo de caracteres
    AddEmpleadoPage.prototype.setDefaultValue = function (val) {
        this.myForm.controls['user'].setValue(val); // pone un valor por defecto
        this.myForm.controls['password'].setValue(val);
        this.myForm.controls['reppass'].setValue(val);
    };
    // funcion que valida si hay o no hay puestos 
    AddEmpleadoPage.prototype.validar = function () {
        if (this.puestos.length > 1) {
            this.hidePuesto = false;
            this.hideOtro = true;
        }
        else {
            this.hideOtro = false;
            this.hidePuesto = true;
            this.myForm.controls['puesto'].setValue('0'); // la opcion '0'= OTRO, ya que no hay mas opciones
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
    // funcion que controla las opciones del puesto, se le envia un evento
    AddEmpleadoPage.prototype.onChange = function (ev) {
        console.log(ev);
        if (ev == 0) {
            this.hideOtro = false; // hace visible el ion-list de puesto
        }
        else {
            this.hideOtro = true; // lo esconde
        }
    };
    // controla el ion-list segun si el empleado va a ser administrador o no, 
    //si es administrador necesitará crearse una cuenta de usuario administrador, recibe un evento de parametro
    AddEmpleadoPage.prototype.cuentaChange = function (ev) {
        console.log(ev);
        if (ev == 1) {
            this.setDefaultValue(''); // llama a la funcion que inicializa la cuenta 
            this.cuenta['val'] = '1'; // 'SI'= si es administrador
        }
        else {
            this.cuenta['val'] = '0'; // '0'=NO  es admministrador
            this.setDefaultValue("111111111"); // llama a la funcion que inicializa la cuenta 
        }
    };
    // funcion que verifica varios campos antes de enviar el formulario
    AddEmpleadoPage.prototype.saveData = function () {
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'La informacion sobre "puesto" está incompleta!!',
            buttons: ['Aceptar']
        });
        if (this.hideOtro == false) {
            if (this.myForm.controls['otro'].value == '' || this.myForm.controls['sueldo'].value == '') {
                miAlerta.present();
                return; // retorna
            }
            else {
                this.enviarForm(); //envia formulario
                return; //retorna
            }
        }
        this.enviarForm(); // envia formulario
    };
    // envia el formulario
    AddEmpleadoPage.prototype.enviarForm = function () {
        var _this = this;
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'La contraseña no coincide!!',
            buttons: ['Aceptar']
        });
        var idRep = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'Ya existe ese usuario!!',
            buttons: ['Aceptar']
        });
        var success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'Agregado correctamente!!',
            buttons: ['Aceptar']
        });
        var obj = JSON.parse(JSON.stringify(this.myForm.value)); // obtiene los datos del form
        obj['funcion'] = 'addEmpleado';
        for (var i in obj) {
            if (i == "password" || i == "reppass" || i == "funcion" || i == "foto" || i == "user" || i == "sueldo") {
            }
            else {
                obj[i] = obj[i].toUpperCase(); // convierte los datos a mayúscula
            }
        }
        if (obj['password'] == obj['reppass']) {
            console.log("Form antes de enviar: ");
            console.log(JSON.stringify(obj));
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
                        _this.obtenerPuestos();
                        _this.dir['path'] = 'stock.png'; // inicializa la imagen de perfil
                    }
                }
                console.log(res);
            }, function (error) {
                console.log(error); // muestra mensaje de error
            });
        }
        else {
            miAlerta.present();
        }
    };
    // funcion que verifica la existencia de la imagen de perfil en el servidor
    AddEmpleadoPage.prototype.ver = function () {
        var _this = this;
        if (this.dir['dir'] != "") {
            var funcion2 = {
                'funcion': 'existImg2',
            };
            // alerta de error de archivo
            var error_file_1 = this.alert.create({
                title: 'ERROR',
                message: 'El archivo no se encuentra en la carpeta del servidor!!',
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
            selector: 'page-add-empleado',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-empleado\add-empleado.html"*/'<!--\n  Generated template for the AddEmpleadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="secondary">\n      <ion-title>Agregar Empleado</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  \n  \n  <ion-content padding class="inicio">\n  \n      <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n        <img src="http://gymdb/imgs/employees/{{ dir.path }}" width="300" height="300" alt="Imagen de Perfil">\n      \n      <ion-label color="primary"><b>SELECCIONE IMAGEN:</b> </ion-label>\n      <form  method="post" enctype="multipart/form-data">   \n      <input type="file" name="fileToUpload"  id="fileToUpload"  [(ngModel)]="dir.dir">\n      <button ion-button icon-start (click)="ver()">\n          <ion-icon name="camera"></ion-icon>\n          Añadir\n      </button>\n      </form>\n  \n  \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card text-center classss="Datos">\n          \n            <ion-card-content>\n            <h2><strong >DATOS</strong></h2>\n            <br>\n            <br><br>\n            \n            <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n                <ion-list>\n                    <ion-item>\n                        <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Nombre:</ion-label>\n                        <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Paterno:</ion-label>\n                    <ion-input id="apellidoP" name ="apellidoP" type="text" formControlName="apellidoP"  name ="apellidoP"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'apellidoP\').errors && myForm.get(\'apellidoP\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'apellidoP\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Materno:</ion-label>\n                    <ion-input id="apellidoM" name ="apellidoM" type="text" formControlName="apellidoM" name ="apellidoM"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'apellidoM\').errors && myForm.get(\'apellidoM\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'apellidoM\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label color = "primary" icon-start><ion-icon name="person"></ion-icon>Genero:</ion-label>\n                        <ion-select id="gender" name ="gender" formControlName="gender">\n                        <ion-option value="f">Mujer</ion-option>\n                          <ion-option value="m">Hombre</ion-option>\n                        </ion-select>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'gender\').errors && myForm.get(\'gender\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'gender\').hasError(\'required\')">Field is required</p>\n                        </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary"  icon-start><ion-icon name="call"></ion-icon>Telefono:</ion-label>\n                      <ion-input id="telefono" name ="telefono" type="tel" formControlName="telefono"  name ="telefono"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'telefono\').errors && myForm.get(\'telefono\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'required\')">Field is required</p>\n                      <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'pattern\')">Just Numbers</p>\n                    </ion-item>\n\n\n                    <ion-item [hidden]="hidePuesto">\n                        <ion-label color="primary" icon-start><ion-icon name="list"></ion-icon>Puesto:  </ion-label>\n                        <ion-select  id="puesto" name="puesto" formControlName="puesto" (ionChange)="onChange($event)">\n                            <div *ngFor="let tupla of puestos">\n                                <ion-option value="{{tupla.id}}">{{tupla.puesto}}\n                                </ion-option>\n                              </div>\n                        </ion-select>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'puesto\').errors && myForm.get(\'puesto\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'puesto\').hasError(\'required\')">Field is required</p>\n                   </ion-item>\n                    <ion-list [hidden]="hideOtro">\n                      <ion-item>\n                          <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Puesto:</ion-label>\n                        <ion-input id="otro" type="text" formControlName="otro"  name ="otro"></ion-input>\n                      </ion-item>\n                        <ion-item>\n                            <ion-label stack color = "primary" icon-start><ion-icon name="logo-usd"></ion-icon>Sueldo:</ion-label>\n                            <ion-input id="sueldo" type="number" formControlName="sueldo"  name ="sueldo"></ion-input>\n                        </ion-item>\n                      </ion-list>\n\n\n                     <ion-label color="secondary" icon-start><ion-icon name="calendar"></ion-icon>FECHA DE NACIMIENTO</ion-label>\n                     <ion-item>\n                        <ion-label >MM DD YY</ion-label>\n                        <ion-datetime id="fechanac" name ="fechanac" formControlName="fechanac" display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'fechanac\').errors && myForm.get(\'fechanac\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'fechanac\').hasError(\'required\')">Field is required</p>\n                        </ion-item>\n  \n                     <ion-label color="secondary" icon-start><ion-icon name="pin"></ion-icon>DIRECCION</ion-label>\n                     <ion-item>\n                        <ion-label stack color = "primary" >Nombre Calle:</ion-label>\n                        <ion-input id="calle" name ="calle" formControlName="calle" type="text"></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="myForm.get(\'calle\').errors && myForm.get(\'calle\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'calle\').hasError(\'required\')">Field is required</p>\n                       </ion-item> \n                       <ion-item>\n                          <ion-label stack color = "primary">Numero Exterior:</ion-label>\n                          <ion-input id="numero" name ="numero" formControlName="numero" type="text"></ion-input>\n                      </ion-item>\n                        <ion-item *ngIf="myForm.get(\'numero\').errors && myForm.get(\'numero\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'numero\').hasError(\'required\')">Field is required</p>\n                         </ion-item> \n                         <ion-item>\n                            <ion-label stack color = "primary" >Numero Interior:</ion-label>\n                            <ion-input id="numeroint" name ="numeroint" formControlName="numeroint" type="text"></ion-input>\n                         </ion-item>\n                           <ion-item>\n                              <ion-label stack color = "primary" >Colonia:</ion-label>\n                              <ion-input id="colonia" name ="colonia" formControlName="colonia" type="text"></ion-input>\n                          </ion-item>\n                            <ion-item *ngIf="myForm.get(\'colonia\').errors && myForm.get(\'colonia\').dirty">\n                              <p color="danger" ion-text *ngIf="myForm.get(\'colonia\').hasError(\'required\')">Field is required</p>\n                             </ion-item>\n                             <ion-item>\n                                <ion-label stack color = "primary" >CP:</ion-label>\n                                <ion-input  id="cp" name="cp" formControlName="cp" type="text"></ion-input>\n                            </ion-item>\n                              <ion-item *ngIf="myForm.get(\'cp\').errors && myForm.get(\'cp\').dirty">\n                                <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'required\')">Field is required</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'pattern\')">Just Numbers</p>\n                               </ion-item> \n                               <ion-item>\n                                <ion-label>Administrador: </ion-label>\n                                <ion-select  id="admin" name="admin" formControlName="admin" (ionChange)="cuentaChange($event)">\n                                    <ion-option value="0">NO</ion-option>\n                                    <ion-option value="1">SI</ion-option>\n                                </ion-select>\n                               </ion-item>\n\n                               <ion-list *ngIf="cuenta.val==\'1\'">\n                                  <ion-label color="secondary">CUENTA</ion-label>\n                                  <ion-item >\n                                     <ion-label stack color = "primary" icon-start><ion-icon name="log-in"></ion-icon> Username:</ion-label>\n                                   <ion-input id="usercliente" name="usercliente" formControlName="user" type="text" ></ion-input>\n                                 </ion-item>\n                                 <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'user\').dirty">\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'user\').hasError(\'required\')">Field is required</p>\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'user\').hasError(\'minlength\')">Min of 4 characters</p>\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'user\').hasError(\'maxlength\')">Max of 15 characters</p>\n                                </ion-item>\n                                  <ion-item class="inputPass">\n                                     <ion-label stack color = "primary"  icon-start>\n                                         <ion-icon name="lock"></ion-icon> Contraseña:</ion-label>\n                                     <ion-input id="password" name ="password" formControlName="password" type="password"></ion-input>\n                                   </ion-item>\n                                   <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'password\').dirty">\n                                    <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'required\')">Field is required</p>\n                                    <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'minlength\')">Min of 7 characters</p>\n                                    <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'maxlength\')">Max of 15 characters</p>\n                                  </ion-item>\n                                   <ion-item class="inputPass">\n                                       <ion-label stack color = "primary"  icon-start>\n                                           <ion-icon name="lock"></ion-icon>\n                                           Repita Contraseña:</ion-label>\n                                       <ion-input id="rep" name= "rep" formControlName="reppass"  type="password"></ion-input>\n                                     </ion-item>\n                                     <ion-item *ngIf="myForm.get(\'reppass\').errors && myForm.get(\'reppass\').dirty">\n                                       <p color="danger" ion-text *ngIf="myForm.get(\'reppass\').hasError(\'required\')">Field is required</p>\n                                     </ion-item>\n                                     \n                               </ion-list>\n                               \n                </ion-list><br>\n                <div padding>\n                    <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                        <ion-icon name="archive">   </ion-icon>\n                            Guardar\n                    </button>\n  \n  \n                  </div>\n              </form> \n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-empleado\add-empleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AddEmpleadoPage);
    return AddEmpleadoPage;
}());

//# sourceMappingURL=add-empleado.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminProfilePage = /** @class */ (function () {
    function AdminProfilePage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.admin = {};
        this.admin = this.navParams.get('admin');
        console.log(this.admin);
    }
    AdminProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminProfilePage');
    };
    AdminProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-admin-profile',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\admin-profile\admin-profile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Perfil administrador</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grind>\n    <ion-row>\n      <ion-col>\n\n      </ion-col>\n      <ion-col>\n        <ion-card>\n            <img src="assets/img/admin.png" />\n          <ion-card-header color="primary">\n            <br> <b> INICIASTE SESIÓN COMO: </b> <br> <br>\n          </ion-card-header>\n          <ion-card-content>\n            <div text-left> <strong >NOMBRE: </strong> {{admin.nombre}} &nbsp; {{admin.apellido_p}} &nbsp; {{admin.apellido_m}} &nbsp; </div> <br> \n            <div text-left> <strong >ID EMPLEADO: </strong> {{admin.id_empleado}} </div> <br> \n            <div text-left> <strong >INGRESO: </strong> {{admin.fecha_ingreso}} </div> <br> \n\n            <ion-label color="secondary" align="left"><b>EMPLEO</b></ion-label> <br>\n            <div text-left> <strong >ID PUESTO: </strong> {{admin.id}} </div> <br>\n            <div text-left> <strong >PUESTO: </strong> {{admin.puesto}} </div> <br>\n            <div text-left> <strong >SUELDO: </strong> {{admin.sueldo}} </div> <br>\n\n            <ion-label color="secondary" align="left"><b>DATOS PERSONALES</b></ion-label> <br>\n            <div text-left> <strong >NACIMIENTO: </strong> {{admin.fecha_nacimiento}} </div> <br>\n            <div text-left> <strong >GENERO: </strong> {{admin.genero}} </div> <br> \n            \n            <ion-label color="secondary" align="left"><b>CONTACTO</b></ion-label> <br>\n            <div text-left> <strong >TELEFONO: </strong> {{admin.telefono}} </div> <br>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grind>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\admin-profile\admin-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminProfilePage);
    return AdminProfilePage;
}());

//# sourceMappingURL=admin-profile.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
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
 * Generated class for the AddProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddProductoPage = /** @class */ (function () {
    function AddProductoPage(navCtrl, navParams, alert, http, cl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.http = http;
        this.cl = cl;
        this.hideProducto = false;
        this.hideOtro = false;
        this.apiUrl = "http://gymdb/"; // servidor
        this.dat = {
            'id': '0',
            'nombre': 'OTRO'
        };
        this.productos = [];
        this.crearForm();
        this.obtenerProducts();
    }
    // crea el form
    AddProductoPage.prototype.crearForm = function () {
        this.myForm = this.cl.group({
            producto: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            nuevo_producto: [''],
            descripcion: [''],
            precio_entrada: [''],
            precio_salida: [''],
            cantidad: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            proveedor: [''],
        });
    };
    AddProductoPage.prototype.validar = function () {
        if (this.productos.length > 1) {
            this.hideProducto = false;
            this.hideOtro = true;
        }
        else {
            this.hideOtro = false;
            this.hideProducto = true;
            this.myForm.controls['producto'].setValue('0');
        }
    };
    AddProductoPage.prototype.obtenerProducts = function () {
        var _this = this;
        var funcion = {
            'funcion': 'getProductosProveedores'
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) { console.log(res); _this.productos = res['productos']; _this.productos.push({ 'id': '0', 'nombre': 'OTRO' }); _this.validar(); }, function (error) { console.log(error); });
    };
    AddProductoPage.prototype.onChange = function (ev) {
        console.log(ev);
        if (ev == 0) {
            this.hideOtro = false; // hace vicible un input
        }
        else {
            this.hideOtro = true; // lo esconde
        }
    };
    AddProductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProductoPage');
    };
    AddProductoPage.prototype.saveData = function () {
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'FALTAN DATOS!',
            buttons: ['ACEPTAR']
        });
        if (this.hideOtro == false) {
            if (this.myForm.controls['nuevo_producto'].value == ''
                || this.myForm.controls['descripcion'].value == ''
                || this.myForm.controls['precio_entrada'].value == ''
                || this.myForm.controls['precio_salida'].value == ''
                || this.myForm.controls['proveedor'].value == '') {
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
    AddProductoPage.prototype.enviarForm = function () {
        var _this = this;
        var success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'Agregado correctamente!!',
            buttons: ['Aceptar']
        });
        var product_rep = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'Producto repetido!!',
            buttons: ['Aceptar']
        });
        var mayus = this.myForm.controls['nuevo_producto'].value;
        var desc = this.myForm.controls['descripcion'].value;
        var prov = this.myForm.controls['proveedor'].value;
        if (mayus != null) {
            mayus = mayus.toUpperCase();
            this.myForm.controls['nuevo_producto'].setValue(mayus); // covierte a mayuscula la categoria
        }
        if (desc != null) {
            desc = desc.toUpperCase();
            this.myForm.controls['descripcion'].setValue(desc);
        }
        if (prov != null) {
            prov = prov.toUpperCase();
            this.myForm.controls['proveedor'].setValue(prov);
        }
        console.log((this.myForm.value));
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion'] = 'addProducto';
        console.log(obj);
        this.http.post(this.apiUrl, JSON.stringify(obj))
            .subscribe(function (res) {
            console.log("res del server");
            console.log(res);
            if (res == "exito") {
                success.present();
                _this.reiniciarForm();
                //this.actualizar_admin_aparato(res['id_aparato']);
            }
            else if (res == "product_rep") {
                product_rep.present();
            }
        }, function (error) {
            console.log(error);
        });
    };
    AddProductoPage.prototype.reiniciarForm = function () {
        this.myForm.reset();
        this.obtenerProducts();
    };
    AddProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-producto',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-producto\add-producto.html"*/'<!--\n  Generated template for the AddProductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Agregar Producto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-center classss="Datos">\n        \n          <ion-card-content>\n          <h2><strong >Registro</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                  <ion-item [hidden]="hideProducto">\n                      <ion-label color="primary" icon-start><ion-icon name="add-circle"></ion-icon>Producto:  </ion-label>\n                      <ion-select  id="producto" name="producto" formControlName="producto" (ionChange)="onChange($event)">\n                        <div *ngFor="let tupla of productos">\n                          <ion-option value="{{tupla.id}}">{{tupla.nombre}}\n                          </ion-option>\n                        </div>\n                      </ion-select>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'producto\').errors && myForm.get(\'producto\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'producto\').hasError(\'required\')">Field is required</p>\n                 </ion-item>\n                 <ion-div [hidden]="hideOtro">\n                  <ion-item >\n                    <ion-label stack color = "primary" icon-start><ion-icon name="add-circle"></ion-icon>Nombre:</ion-label>\n                    <ion-input id="otro" type="text" formControlName="nuevo_producto"  name ="otro"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Descripcion:</ion-label>\n                    <ion-input id="descripcion" type="text" formControlName="descripcion"  name ="descripcion"></ion-input>\n                  </ion-item>\n                  \n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="pricetag"></ion-icon>Precio Entrada:</ion-label>\n                    <ion-input id="precio_entrada" type="number" formControlName="precio_entrada"  name ="precio_entrada"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="pricetag"></ion-icon>Precio de Venta:</ion-label>\n                  <ion-input id="precio_salida" type="number" formControlName="precio_salida"  name ="precio_salida"></ion-input>\n                </ion-item>\n          \n                    <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Proveedor:</ion-label>\n                    <ion-input id="roveedor" type="text" formControlName="proveedor"  name ="proveedor"></ion-input>\n                    </ion-item>\n                 </ion-div>\n  \n                    <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Cantidad:</ion-label>\n                    <ion-input id="cantidad" type="number" formControlName="cantidad"  name ="cantidad"></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="myForm.get(\'cantidad\').errors && myForm.get(\'cantidad\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'cantidad\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n                \n                                \n              </ion-list><br>\n              <div padding>\n                  <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                      <ion-icon name="archive"> </ion-icon>\n                          Guardar\n                  </button>\n                </div>\n            </form> \n\n        </ion-card-content>\n\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-producto\add-producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AddProductoPage);
    return AddProductoPage;
}());

//# sourceMappingURL=add-producto.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_cliente_add_cliente__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allcustomers_allcustomers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_aparatos_add_aparatos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__allaparatos_allaparatos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_empleado_add_empleado__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_pay_list_pay__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pack_pack__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_pack_list_pack__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__all_employees_all_employees__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__asistencia_asistencia__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pay_pay__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reportes_reportes__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_producto_add_producto__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modif_product_modif_product__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__all_products_all_products__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__asistencia_list_asistencia_list__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_profile_admin_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__venta_venta__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, http, navParams, alert, menu) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.alert = alert;
        this.menu = menu;
        //clientes
        this.addCliente = __WEBPACK_IMPORTED_MODULE_3__add_cliente_add_cliente__["a" /* AddClientePage */];
        this.listCustomers = __WEBPACK_IMPORTED_MODULE_4__allcustomers_allcustomers__["a" /* AllcustomersPage */];
        //listCustomers = ListcustomersPage;
        //pagos
        this.payPage = __WEBPACK_IMPORTED_MODULE_13__pay_pay__["a" /* PayPage */];
        this.listPayPage = __WEBPACK_IMPORTED_MODULE_8__list_pay_list_pay__["a" /* ListPayPage */];
        //paquete
        this.paquete = __WEBPACK_IMPORTED_MODULE_9__pack_pack__["a" /* PackPage */];
        this.list_pack = __WEBPACK_IMPORTED_MODULE_10__list_pack_list_pack__["a" /* ListPackPage */];
        //login
        this.login = __WEBPACK_IMPORTED_MODULE_19__login_login__["a" /* LoginPage */];
        //aparatos
        this.aparatos = __WEBPACK_IMPORTED_MODULE_5__add_aparatos_add_aparatos__["a" /* AddAparatosPage */];
        this.allaparatos = __WEBPACK_IMPORTED_MODULE_6__allaparatos_allaparatos__["a" /* AllaparatosPage */];
        //empleados
        this.addEmp = __WEBPACK_IMPORTED_MODULE_7__add_empleado_add_empleado__["a" /* AddEmpleadoPage */];
        this.all_empleados = __WEBPACK_IMPORTED_MODULE_11__all_employees_all_employees__["a" /* AllEmployeesPage */];
        //asistencia
        this.asist = __WEBPACK_IMPORTED_MODULE_12__asistencia_asistencia__["a" /* AsistenciaPage */];
        this.list = __WEBPACK_IMPORTED_MODULE_18__asistencia_list_asistencia_list__["a" /* AsistenciaListPage */];
        // reportes
        this.reportes = __WEBPACK_IMPORTED_MODULE_14__reportes_reportes__["a" /* ReportesPage */];
        //tienda
        this.add_product = __WEBPACK_IMPORTED_MODULE_15__add_producto_add_producto__["a" /* AddProductoPage */];
        this.modif_producto = __WEBPACK_IMPORTED_MODULE_16__modif_product_modif_product__["a" /* ModifProductPage */];
        this.all_products = __WEBPACK_IMPORTED_MODULE_17__all_products_all_products__["a" /* AllProductsPage */];
        this.tienda_venta = __WEBPACK_IMPORTED_MODULE_21__venta_venta__["a" /* VentaPage */];
        //perfil admin
        this.profile_adm = __WEBPACK_IMPORTED_MODULE_20__admin_profile_admin_profile__["a" /* AdminProfilePage */];
        this.admin = {};
        this.apiUrl = "http://gymdb/";
        menu.enable(true);
        this.admin = this.navParams.get('admin');
        console.log("registro");
        console.log(this.admin);
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.tienda = function () {
        console.log("Aqui va la tienda...");
        this.navCtrl.push(this.tienda_venta, { id: this.admin['id_empleado'] });
    };
    AdminPage.prototype.exit = function () {
        var _this = this;
        var exit = this.alert.create({
            title: 'SALIR',
            message: '¿Seguro que desea cerrar sesion?',
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
                        _this.logout();
                    }
                }
            ]
        });
        exit.present();
    };
    AdminPage.prototype.logout = function () {
        this.navCtrl.push(this.login);
    };
    AdminPage.prototype.profile = function () {
        this.navCtrl.push(this.profile_adm, { admin: this.admin });
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
        this.navCtrl.push(this.aparatos, { id: this.admin['id_empleado'] });
    };
    AdminPage.prototype.allAparatos = function () {
        this.navCtrl.push(this.allaparatos, { id: this.admin['id_empleado'], filtro: '1' });
    };
    AdminPage.prototype.agregarEmpleado = function () {
        this.navCtrl.push(this.addEmp);
    };
    AdminPage.prototype.allEmpleados = function () {
        this.navCtrl.push(this.all_empleados);
    };
    AdminPage.prototype.pack = function () {
        this.navCtrl.push(this.paquete);
    };
    AdminPage.prototype.listPack = function () {
        this.navCtrl.push(this.list_pack);
    };
    AdminPage.prototype.asisten = function () {
        this.navCtrl.push(this.asist);
    };
    AdminPage.prototype.asistenList = function () {
        this.navCtrl.push(this.list);
    };
    AdminPage.prototype.reportes_pag = function () {
        this.navCtrl.push(this.reportes);
    };
    AdminPage.prototype.agregarProducto = function () {
        this.navCtrl.push(this.add_product);
    };
    AdminPage.prototype.mmodificarProducto = function () {
        this.navCtrl.push(this.modif_producto);
    };
    AdminPage.prototype.allProducts = function () {
        this.navCtrl.push(this.all_products);
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\admin\admin.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-buttons start>\n    <button ion-button (click)="profile()">\n      <ion-icon name="contact" ></ion-icon>\n    </button>\n    <button ion-button (click)="exit()">\n      <ion-icon name="power" ></ion-icon>\n      </button>\n    </ion-buttons>  \n    \n    <ion-title>GYM SYSTEM</ion-title>\n  \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n\n    <ion-col>\n      <ion-card>\n          <img src="assets/img/asist2.png" />\n        <ion-card-content text-center >\n          <h1> <strong> Asistencia </strong> </h1> <br> \n          <ion-list>\n            <button ion-item (click)="asisten()">\n              <ion-icon name="add" item-start></ion-icon>\n              Nuevo\n            </button>\n            <button ion-item (click)="asistenList()">\n              <ion-icon name="list" item-start></ion-icon>\n              Lista\n            </button>\n          </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n\n    <ion-col>\n    \n    <ion-card>\n      <img src="assets/img/client.png" />\n      <ion-card-content text-center>\n        <h1> <strong> Clientes </strong> </h1> <br>    \n      <ion-list>\n        <button ion-item (click)="agregarCLiente()">\n          <ion-icon name="add" item-start></ion-icon>\n          Nuevo\n        </button>\n        <button ion-item (click)= "allCustomers()">\n          <ion-icon name="list" item-start></ion-icon>\n          Lista\n        </button>\n      </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    </ion-col>\n\n    \n    <ion-col>\n\n    <ion-card >\n      <img src="assets/img/pay.png" />\n      <ion-card-content text-center >\n        <h1> <strong> Pagos </strong>  </h1> <br>\n        <ion-list>\n          <button ion-item (click)="pay()">\n            <ion-icon name="add" item-start></ion-icon>\n            Nuevo\n          </button>\n          <button ion-item (click)= "listPay()">\n            <ion-icon name="list" item-start></ion-icon>\n              Lista\n          </button>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    \n    </ion-col>\n\n    <ion-col>\n    \n      <ion-card>\n        <img src="assets/img/packs.png" />\n        <ion-card-content text-center>\n          <h1> <strong> Paquetes </strong>  </h1> <br>\n          <ion-list>\n            <button ion-item (click)="pack()">\n              <ion-icon name="add" item-start></ion-icon>\n              Nuevo\n            </button>\n            \n            <button ion-item (click)= "listPack()">\n              <ion-icon name="list" item-start></ion-icon>\n              Lista\n            </button>\n            \n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  \n  </ion-row>\n\n  <ion-row>\n    \n    <ion-col>\n    <ion-card>\n      <img src="assets/img/employe.png" />\n      <ion-card-content text-center>\n        <h1> <strong> Empleados </strong>  </h1> <br>\n        <ion-list>\n          <button ion-item (click)="agregarEmpleado()">\n          <ion-icon name="add" item-start></ion-icon>\n            Nuevo\n          </button>\n          <button ion-item (click)= "allEmpleados()">\n            <ion-icon name="list" item-start></ion-icon>\n              Lista\n          </button>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    \n  </ion-col>\n\n  <ion-col>\n    <ion-card>\n      <img src="assets/img/store.png" />\n      <ion-card-content text-center>\n        <h1> <strong> Tienda </strong>  </h1> <br>\n        <ion-list>\n          <button ion-item (click)="tienda()">\n            <ion-icon name="appstore" item-start></ion-icon>\n            Tienda\n          </button>\n          <button ion-item (click)="agregarProducto()">\n            <ion-icon name="add" item-start></ion-icon>\n            Nuevo\n          </button>\n          <button ion-item (click)="allProducts()">\n          <ion-icon name="list" item-start></ion-icon>\n            Lista\n          </button>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>  \n    </ion-col>\n\n    <ion-col>\n      <ion-card>\n        <img src="assets/img/report.png" />\n        <ion-card-content text-center>\n          <h1> <strong> Reportes </strong>  </h1> <br>\n          <ion-list>\n            <button ion-item (click)="reportes_pag()">\n              <ion-icon name="add" item-start></ion-icon>\n              Nuevo\n            </button>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n        \n      </ion-col>\n\n    <ion-col>\n      <ion-card>\n        <img src="assets/img/inventary.png" />\n        <ion-card-content text-center>\n          <h1> <strong> Inventario </strong>  </h1> <br>\n          <ion-list>\n            <button ion-item (click)="agregarAparato()">\n              <ion-icon name="add" item-start></ion-icon>\n              Nuevo\n            </button>\n            <button ion-item (click)= "allAparatos()">\n              <ion-icon name="list" item-start></ion-icon>\n              Lista\n            </button>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>    \n    </ion-col>\n\n\n\n  </ion-row>\n</ion-grid>\n\n</ion-content> '/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
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
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.cliente = {};
        this.cuenta = {};
        this.apiUrl = "http://gymdb/";
        this.cliente = this.navParams.get('cliente');
        console.log(this.cliente);
    }
    InfClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfClientePage');
    };
    InfClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inf-cliente',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\inf-cliente\inf-cliente.html"*/'<!--\n  Generated template for the InfClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Informacion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n  <img src="http://gymdb/imgs/customers/{{ cliente.foto }}"  width="300" height="300">\n  <ion-card-content>\n    <img >\n    <ion-label *ngIf="cliente.activo==\'1\'" align="center" color="primary"><b>ESTATUS: </b> ACTIVO</ion-label>\n    <ion-label *ngIf="cliente.activo==\'0\'" align="center" color="danger"><b>ESTATUS: </b> INACTIVO</ion-label>\n    <p><b>NOMBRE: </b>  {{ cliente.Nombre }}</p>\n    <p><b>ID: </b> {{ cliente.id_cliente }}</p>\n    <p><b>GENERO: </b> {{ cliente.genero }}</p>\n    <p><b>TELEFONO: </b> {{ cliente.telefono }}</p>\n    <ion-label color="secondary"><b>FORMATO: </b> YYYY-MM-DD</ion-label>\n    <p><b>FECHA NACIMIENTO: </b> {{ cliente.fecha_nacimiento }}</p>\n    <p><b>FECHA INGRESO: </b> {{ cliente.fecha_ingreso }}</p>\n    \n    <ion-label align="center" color="secondary"><b>DIRECCION</b></ion-label>\n    <p><b>CALLE</b> {{ cliente.calle }}</p>\n    <p><b>NUMERO: </b> {{ cliente.numero_calle }}</p>\n    <p *ngIf="cliente.numero_interior!=\'\'"><b>NUMERO INTERIOR </b> {{ cliente.numero_interior }}</p>\n    <p><b>COLONIA: </b> {{ cliente.colonia }}</p>\n    <p><b>CP: </b> {{ cliente.codigo }}</p>\n\n    <ion-label align="center" color="secondary"><b>CUENTA</b></ion-label>\n    <p><b>USUARIO: </b> {{ cliente.user }}</p>\n    <p><b>CONTRASEÑA: </b> {{ cliente.password }}</p>\n\n  </ion-card-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\inf-cliente\inf-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InfClientePage);
    return InfClientePage;
}());

//# sourceMappingURL=inf-cliente.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allcustomers_allcustomers__ = __webpack_require__(53);
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
            colonia: [this.cliente['colonia'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            cp: [this.cliente['codigo'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^-?(0|[1-9]\d*)?$/)]],
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
            "colonia": this.cliente['colonia'],
            "cp": this.cliente['codigo'],
            "password": this.cliente['password'],
            "reppass": this.cliente['password'],
            "user": this.cliente['user']
        };
    }
    ModifclientePage.prototype.saveData = function () {
        var _this = this;
        var form_invalido = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'Ya se enviarion los datos modificados!!',
            buttons: ['Aceptar']
        });
        if (this.cliente['id_cliente'] == '') {
            form_invalido.present();
        }
        else {
            var repetido = this.alert.create({
                title: 'OPERACION CANCELADA',
                message: 'No se han modificado datos!!',
                buttons: ['Aceptar']
            });
            if (JSON.stringify(this.comprobar) != JSON.stringify(this.myForm.value)) {
                console.log("son desiguales");
                //alertas
                var miAlerta = this.alert.create({
                    title: 'OPERACION CANCELADA',
                    message: 'La contraseña no coincide!!',
                    buttons: ['Aceptar']
                });
                var idRep_1 = this.alert.create({
                    title: 'OPERACION CANCELADA',
                    message: 'Ya existe ese usuario!!',
                    buttons: ['Aceptar']
                });
                var success_1 = this.alert.create({
                    title: 'OPERACION EXITOSA',
                    message: 'Modificado correctamente!!',
                    buttons: ['Aceptar']
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
                message: 'El archivo no se encuentra en la carpeta del servidor!!',
                buttons: ['Aceptar']
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
            selector: 'page-modifcliente',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modifcliente\modifcliente.html"*/'<!--\n  Generated template for the ModifclientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="danger">\n      <ion-title>Modificar</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  \n  \n  <ion-content padding class="inicio">\n  \n      <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n        <img src="http://gymdb/imgs/customers/{{ dir.path }}" width="300" height="300" alt="Imagen de Perfil">\n      \n      <ion-label color="primary"><b>SELECCIONE IMAGEN:</b> </ion-label>\n      <form  method="post" enctype="multipart/form-data">   \n      <input type="file" name="fileToUpload"  id="fileToUpload"  [(ngModel)]="dir.dir">\n      <button ion-button icon-start (click)="ver()">\n          <ion-icon name="camera"></ion-icon>\n          Añadir\n      </button>\n      </form>\n  \n  \n    <ion-grid>\n      <ion-row>\n          \n        <ion-col>\n          <ion-card text-center classss="Datos">\n          \n            <ion-card-content>\n            <h2><strong >DATOS</strong></h2>\n            <br>\n            <br><br>\n            \n            <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n                <ion-list>\n                    <ion-item>\n                        <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Nombre:</ion-label>\n                        <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Paterno:</ion-label>\n                    <ion-input id="apellidoP" name ="apellidoP" type="text" formControlName="apellidoP"  name ="apellidoP"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'apellidoP\').errors && myForm.get(\'apellidoP\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'apellidoP\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Materno:</ion-label>\n                    <ion-input id="apellidoM" name ="apellidoM" type="text" formControlName="apellidoM" name ="apellidoM"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'apellidoM\').errors && myForm.get(\'apellidoM\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'apellidoM\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label color = "primary" icon-start><ion-icon name="person"></ion-icon>Genero:</ion-label>\n                        <ion-select id="gender" name ="gender" formControlName="gender">\n                        <ion-option value="F">Mujer</ion-option>\n                          <ion-option value="M">Hombre</ion-option>\n                        </ion-select>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'gender\').errors && myForm.get(\'gender\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'gender\').hasError(\'required\')">Field is required</p>\n                        </ion-item>\n                  <ion-item>\n                      <ion-label stack color = "primary"  icon-start><ion-icon name="call"></ion-icon>Telefono:</ion-label>\n                      <ion-input id="telefono" name ="telefono" type="tel" formControlName="telefono"  name ="telefono"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'telefono\').errors && myForm.get(\'telefono\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'required\')">Field is required</p>\n                      <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'pattern\')">Just Numbers</p>\n                    </ion-item>\n                  \n                     <ion-label color="secondary" icon-start><ion-icon name="calendar"></ion-icon>FECHA DE NACIMIENTO</ion-label>\n                     <ion-item>\n                        <ion-label >MM DD YY</ion-label>\n                        <ion-datetime id="fechanac" name ="fechanac" formControlName="fechanac" display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'fechanac\').errors && myForm.get(\'fechanac\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'fechanac\').hasError(\'required\')">Field is required</p>\n                        </ion-item>\n  \n                     <ion-label color="secondary" icon-start><ion-icon name="pin"></ion-icon>DIRECCION</ion-label>\n                     <ion-item>\n                        <ion-label stack color = "primary" >Nombre Calle:</ion-label>\n                        <ion-input id="calle" name ="calle" formControlName="calle" type="text"></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="myForm.get(\'calle\').errors && myForm.get(\'calle\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'calle\').hasError(\'required\')">Field is required</p>\n                       </ion-item> \n                       <ion-item>\n                          <ion-label stack color = "primary">Numero Exterior:</ion-label>\n                          <ion-input id="numero" name ="numero" formControlName="numero" type="text"></ion-input>\n                      </ion-item>\n                        <ion-item *ngIf="myForm.get(\'numero\').errors && myForm.get(\'numero\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'numero\').hasError(\'required\')">Field is required</p>\n                         </ion-item> \n                         <ion-item>\n                            <ion-label stack color = "primary" >Numero Interior:</ion-label>\n                            <ion-input id="numeroint" name ="numeroint" formControlName="numeroint" type="text"></ion-input>\n                         </ion-item>\n                           <ion-item>\n                              <ion-label stack color = "primary" >Colonia:</ion-label>\n                              <ion-input id="colonia" name ="colonia" formControlName="colonia" type="text"></ion-input>\n                          </ion-item>\n                            <ion-item *ngIf="myForm.get(\'colonia\').errors && myForm.get(\'colonia\').dirty">\n                              <p color="danger" ion-text *ngIf="myForm.get(\'colonia\').hasError(\'required\')">Field is required</p>\n                             </ion-item>\n                             <ion-item>\n                                <ion-label stack color = "primary" >CP:</ion-label>\n                                <ion-input  id="cp" name="cp" formControlName="cp" type="text"></ion-input>\n                            </ion-item>\n                              <ion-item *ngIf="myForm.get(\'cp\').errors && myForm.get(\'cp\').dirty">\n                                <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'required\')">Field is required</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'pattern\')">Just Numbers</p>\n                               </ion-item> \n                               <ion-label color="secondary">CUENTA</ion-label>\n                               <ion-item >\n                                  <ion-label stack color = "primary" icon-start><ion-icon name="log-in"></ion-icon> Username:</ion-label>\n                                <ion-input id="usercliente" name="usercliente" formControlName="user" type="text" ></ion-input>\n                              </ion-item>\n                              <ion-item *ngIf="myForm.get(\'user\').errors && myForm.get(\'user\').dirty">\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'user\').hasError(\'required\')">Field is required</p>\n                                 </ion-item> \n                               <ion-item class="inputPass">\n                                  <ion-label stack color = "primary"  icon-start>\n                                      <ion-icon name="lock"></ion-icon> Contraseña:</ion-label>\n                                  <ion-input id="password" name ="password" formControlName="password" type="password"></ion-input>\n                                </ion-item>\n                                  \n                                <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'password\').dirty">\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'required\')">Field is required</p>\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'minlength\')">Min of 5 characters</p>\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'maxlength\')">Max of 15 characters</p>\n                                </ion-item>\n                                <ion-item class="inputPass">\n                                    <ion-label stack color = "primary"  icon-start>\n                                        <ion-icon name="lock"></ion-icon>\n                                        Repita Contraseña:</ion-label>\n                                    <ion-input id="rep" name= "rep" formControlName="reppass"  type="password"></ion-input>\n                                  </ion-item>\n                                  <ion-item *ngIf="myForm.get(\'reppass\').errors && myForm.get(\'reppass\').dirty">\n                                    <p color="danger" ion-text *ngIf="myForm.get(\'reppass\').hasError(\'required\')">Field is required</p>\n                                  </ion-item>\n                                  \n                </ion-list><br>\n                <div padding>\n                    <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                        <ion-icon name="construct">   </ion-icon>\n                            MODIFICAR\n                    </button>\n  \n  \n                  </div>\n              </form> \n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modifcliente\modifcliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], ModifclientePage);
    return ModifclientePage;
}());

//# sourceMappingURL=modifcliente.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifaparatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allaparatos_allaparatos__ = __webpack_require__(54);
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
        this.id_admin = {};
        this.back = __WEBPACK_IMPORTED_MODULE_4__allaparatos_allaparatos__["a" /* AllaparatosPage */]; // pagina de aparatos
        this.aparato = {}; // almacena registro que se envia por parametro
        this.datos = []; //almacena las categorias dispoibles
        this.hideCategoria = true; //variables que sirven para controlar partes del form
        this.hideOtro = true;
        this.apiUrl = "http://gymdb/"; // server
        this.dat = {
            'id': '0',
            'nombre': 'OTRO'
        };
        this.comp = {}; /// servira para comprobar si se ha hecho algun cambio 
        this.id_admin = this.navParams.get('id'); // obtiene el id del empleado que opera en este momento
        this.aparato = this.navParams.get('aparato'); // obtiene el registro enviado
        console.log("id aADMOININIINI");
        console.log(this.id_admin);
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
    // funcion de guardar
    ModifaparatoPage.prototype.saveData = function () {
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'Campo categoria vacio!!',
            buttons: ['Aceptar']
        });
        var alerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'No se han modificado los datos!!',
            buttons: ['Aceptar']
        });
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
            message: 'Operacion realizada con exito!!',
            buttons: ['Aceptar']
        });
        var mayus = this.myForm.controls['otro'].value;
        if (mayus != null) {
            mayus = mayus.toUpperCase();
            this.myForm.controls['otro'].setValue(mayus); // covierte a mayuscula la categoria
        }
        var desc = this.myForm.controls['descripcion'].value;
        if (desc != null) {
            desc = desc.toUpperCase();
            this.myForm.controls['descripcion'].setValue(desc); // covierte a mayuscula la categoria
        }
        console.log((this.myForm.value));
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion'] = 'modifAparato'; //funcion de modificar 
        obj['id'] = this.aparato['id']; // agrega el id del aparato
        obj['id_admin'] = this.id_admin; // administrador que realiza la operacion
        obj['accion'] = '2'; // '2'= modificar
        console.log(obj);
        this.http.post(this.apiUrl, JSON.stringify(obj))
            .subscribe(function (res) {
            console.log(res);
            if (res == "exito") {
                success.present();
                _this.navCtrl.push(_this.back, { id: obj['id_admin'], filtro: _this.aparato['filtro'] }); // regresa a la pagina anterior, le envia el id del admin como parametro 
            }
        }, function (error) {
            console.log(error);
        });
    };
    ModifaparatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modifaparato',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modifaparato\modifaparato.html"*/'<!--\n  Generated template for the ModifaparatoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Modificar Aparato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-center classss="Datos">\n        \n          <ion-card-content>\n          <h2><strong >Registro</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                  <ion-item [hidden]="hideCategoria">\n                      <ion-label color="primary" icon-start><ion-icon name="pricetag"></ion-icon>Categoria:  </ion-label>\n                      <ion-select  id="categoria" name="categoria" formControlName="categoria" (ionChange)="onChange($event)">\n                        <div *ngFor="let tupla of datos">\n                          <ion-option value="{{tupla.id}}">{{tupla.nombre}}\n                          </ion-option>\n                        </div>\n                      </ion-select>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'categoria\').errors && myForm.get(\'categoria\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'categoria\').hasError(\'required\')">Field is required</p>\n                 </ion-item>\n                 <ion-item [hidden]="hideOtro">\n                  <ion-label stack color = "primary" icon-start><ion-icon name="pricetag"></ion-icon>Categoria:</ion-label>\n                  <ion-input id="otro" type="text" formControlName="otro"  name ="otro"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Descripcion:</ion-label>\n                  <ion-input id="descripcion" type="text" formControlName="descripcion"  name ="descripcion"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'descripcion\').errors && myForm.get(\'descripcion\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'descripcion\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label color="primary" icon-start><ion-icon name="git-pull-request"></ion-icon>Estado:  </ion-label>\n                      <ion-select id="estado" name="estado" formControlName="estado" >\n                          <ion-option value="1">En Funcionamiento</ion-option >\n                            <ion-option value="2">En Mantenimiento</ion-option >\n                              <ion-option value="3">Fuera de Servicio</ion-option >\n                      </ion-select>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'estado\').errors && myForm.get(\'estado\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'estado\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                                \n              </ion-list><br>\n              <div padding>\n                  <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                      <ion-icon name="archive">   </ion-icon>\n                          Guardar\n                  </button>\n                </div>\n            </form> \n\n        </ion-card-content>\n\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modifaparato\modifaparato.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModifaparatoPage);
    return ModifaparatoPage;
}());

//# sourceMappingURL=modifaparato.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialAparatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
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
 * Generated class for the HistorialAparatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialAparatosPage = /** @class */ (function () {
    function HistorialAparatosPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.historial = []; // lista que contendrá todo el historial de modificaciones de aparatos 
        this.getHistorial(); // obtiene todos los registros de la base de datos
    }
    HistorialAparatosPage.prototype.getHistorial = function () {
        var _this = this;
        var funcion = {
            'funcion': 'getHistorial'
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) { console.log(res); _this.historial = res['historial']; console.log(_this.historial); }, function (error) { console.log(error); });
    };
    HistorialAparatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistorialAparatosPage');
    };
    HistorialAparatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-historial-aparatos',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\historial-aparatos\historial-aparatos.html"*/'<!--\n  Generated template for the HistorialAparatosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar  color="primary">\n    <ion-title>Historial Modificaciones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item *ngFor="let registro of historial">\n      \n    <p><b>ID ADMIN: </b>  {{ registro.id_admin }}</p>\n    <p><b>NOMBRE EMPLEADO: </b> {{ registro.Nombre }}</p>\n    <p><b>ID APARATO: </b> {{ registro.id_aparato }}</p>\n    <p><b>NOMBRE: </b> {{ registro.nombre }}</p>\n    <p><b>DESCRIPCION: </b> {{ registro.descripcion }}</p>\n    <p><b>FECHA (AÑO/MES/DIA): </b> {{ registro.fecha }}</p>\n    <p *ngIf="registro.accion==\'1\'"><b>ACCION: </b> AGREGAR</p>\n    <p *ngIf="registro.accion==\'2\'"><b>ACCION: </b> MODIFICAR</p>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\historial-aparatos\historial-aparatos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HistorialAparatosPage);
    return HistorialAparatosPage;
}());

//# sourceMappingURL=historial-aparatos.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecibePayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
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
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.pago = {};
        this.nota = {};
        this.apiUrl = "http://gymdb/";
        this.pago = this.navParams.get('pago');
        console.log(this.pago);
        if (this.pago['monto'] == '0') {
            this.nota['info'] = "PAGO ELIMINADO";
        }
        else {
            this.nota['info'] = " ";
        }
    }
    RecibePayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecibePayPage');
    };
    RecibePayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recibe-pay',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\recibe-pay\recibe-pay.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Recibo de pago</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-label color="secondary" align="center"><b>GYM SYSTEM</b></ion-label>    <br>  \n    </ion-card-header>\n    <ion-card-content>\n        <div text-right> <strong >RECIBO: </strong> {{pago.id_pago}} </div> <br>\n        <div text-right> <strong >FECHA: </strong> {{pago.fecha_pago}} </div>\n        <br>\n        <ion-label color="primary" align="left">CLIENTE</ion-label>  \n        <div text-left> <strong >ID: </strong> {{pago.id_cliente}} </div><br>\n        <div text-left> <strong >NOMBRE: </strong> {{pago.name}} </div><br>\n          <div text-left> <strong >TELEFONO: </strong> {{pago.telefono}}</div>\n        <br>\n        <div text-left> <strong >CALLE: </strong> {{pago.calle}}</div><br>\n        <div text-left> <strong >NUMERO: </strong> {{pago.numero_calle}}</div><br>\n        <div text-left> <strong >NUMERO INTERIOR: </strong> {{pago.numero_interior}}</div><br>\n        <div text-left> <strong >COLONIA: </strong> {{pago.nombre}}</div><br>\n        <div text-left> <strong >CP: </strong> {{pago.codigo}}</div><br>\n        <br>\n        <ion-label color="primary" align="left">PAGO</ion-label> \n        <div text-left> <strong >CONCEPTO: </strong> {{pago.pack}} </div><br>\n        <div text-left> <strong >DESCRIPCION: </strong> {{pago.duracion}} </div>\n        <ion-label color="danger" align="left"> <strong >VENCIMIENTO: </strong> {{pago.fecha_vencimiento}} </ion-label><br>\n        <br><br>\n        <ion-label color="primary" align="right">RESUMEN</ion-label> \n        <div text-right> <strong >TOTAL A PAGAR: </strong> ${{pago.precio}}.00 </div>\n        <ion-label color="danger" align="right">{{nota.info}}</ion-label> \n        <div text-right> <strong >MONTO PAGADO: </strong> ${{pago.monto}}.00 </div><br>\n        \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\recibe-pay\recibe-pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecibePayPage);
    return RecibePayPage;
}());

//# sourceMappingURL=recibe-pay.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_pay_list_pay__ = __webpack_require__(55);
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
            paquete: [this.pago['id'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            modo: [this.pago['modo'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            monto: [this.pago['monto'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
        this.comprobar = {
            "id_usuario": this.pago['id_cliente'],
            "paquete": this.pago['id'],
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
            selector: 'page-modify-pay',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modify-pay\modify-pay.html"*/'<ion-header>\n\n  <ion-navbar color= "danger">\n    <ion-title>Modificar</ion-title>\n  </ion-navbar>\n\n  <ion-searchbar placeholder="Ingresa nombre de usuario para consultar id" (ionInput)="getItems($event)">\n  </ion-searchbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div text-center>\n    <button ion-button outline (click)="cleanItems()">\n      <ion-icon name="arrow-up"></ion-icon>\n    </button>\n  </div>\n\n  <ion-card *ngFor="let cliente of items" color="primary">\n    <ion-card-content>\n      <b>{{ cliente.Nombre }}</b> <br> {{ cliente.id_cliente }}\n    </ion-card-content>\n  \n  </ion-card>\n\n  <ion-card *ngFor="let pack of paquetes">\n    <ion-card-header><b>{{ pack.nombre }}</b>\n    </ion-card-header>\n          \n    <ion-card-content color="primary">\n      ${{pack.precio}}.00 <br>\n      <ion-label stack color="dark"> <strong>Clave: </strong>{{pack.id}}  </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n\n    <div text-center>\n      <br>\n      <strong >FICHA DE PAGO</strong>\n    </div>\n\n      <form [formGroup]="myForm"  (ngSubmit)="pagar()" novalidate>\n          <ion-list>\n\n              <ion-item>\n                <ion-label stack color = "primary">Username: </ion-label>\n                <ion-input id="id_usuario" name="id_usuario" formControlName="id_usuario" type="text"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'id_usuario\').errors && myForm.get(\'id_usuario\').dirty">\n                <p color="danger" ion-text *ngIf="myForm.get(\'id_usuario\').hasError(\'required\')">Field is required</p>\n              </ion-item>\n\n              <ion-item>\n                <ion-label stack color = "primary">Clave de paquete: </ion-label>\n                <ion-input id="paquete" name="paquete" formControlName="paquete" type="text"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'paquete\').errors && myForm.get(\'paquete\').dirty">\n                <p color="danger" ion-text *ngIf="myForm.get(\'paquete\').hasError(\'required\')">Field is required</p>\n              </ion-item>\n\n              <ion-item>\n                <ion-label stack color = "primary">Modo de Pago </ion-label>\n                <ion-select id="modo" name="modo" formControlName="modo" type="modo">\n                  <ion-option value="EFECTIVO">Efectivo</ion-option>\n                  <ion-option value="DEBITO">Debito</ion-option>\n                  <ion-option value="CREDITO">Credito</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'modo\').errors && myForm.get(\'modo\').dirty">\n                <p color="danger" ion-text *ngIf="myForm.get(\'modo\').hasError(\'required\')">Field is required</p>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label stack color = "primary">Monto: </ion-label>\n                  <ion-input id="monto" name="monto" formControlName="monto" type="text"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'monto\').errors && myForm.get(\'monto\').dirty">\n                  <p color="danger" ion-text *ngIf="myForm.get(\'monto\').hasError(\'required\')">Field is required</p>\n              </ion-item>\n\n          </ion-list>\n\n          <div padding text-center>\n            <button ion-button outline type="submit" [disabled]="myForm.invalid">MODIFICAR</button>\n          </div>\n\n      </form>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modify-pay\modify-pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], ModifyPayPage);
    return ModifyPayPage;
}());

//# sourceMappingURL=modify-pay.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
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
            title: 'DURACION INVALIDA',
            message: 'La duracion maxima es de 365 dias',
            buttons: ['OK']
        });
        var paqueteNombre = this.alert.create({
            title: 'PAQUETE INVALIDO',
            message: 'Puede que el nombre de paquete sea repetido',
            buttons: ['OK']
        });
        var paqueteAgregado = this.alert.create({
            title: 'EXITO',
            message: 'Paquete agregado correctamente',
            buttons: ['OK']
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
            selector: 'page-pack',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pack\pack.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Paquetes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    \n    <div text-center color="primary">\n      <ion-label stack> <strong> AGREGAR PAQUETE </strong> </ion-label>\n      <br>\n    </div>\n\n    <form [formGroup]="myForm"  (ngSubmit)="pack()" novalidate>\n      <ion-list>\n\n        <ion-item>\n          <ion-label stack color = "primary"> <ion-icon name="walk"></ion-icon> &nbsp; Nombre: </ion-label>\n          <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stack color = "primary"> <ion-icon name="clipboard"></ion-icon> &nbsp; Descripcion: </ion-label>\n          <ion-input id="descripcion" name="descripcion" formControlName="descripcion" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'descripcion\').errors && myForm.get(\'descripcion\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'descripcion\').hasError(\'required\')">Field is required</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stack color = "primary"> <ion-icon name="cash"></ion-icon> &nbsp; Precio: </ion-label>\n          <ion-input id="precio" name="precio" formControlName="precio" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'precio\').errors && myForm.get(\'precio\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'precio\').hasError(\'required\')">Field is required</p>\n          <p color="danger" ion-text *ngIf="myForm.get(\'precio\').hasError(\'pattern\')">Just Numbers</p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stack color = "primary"><ion-icon name="calendar"></ion-icon> &nbsp; Duración: </ion-label>\n          <ion-input id="duracion" name="duracion" formControlName="duracion" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="myForm.get(\'duracion\').errors && myForm.get(\'duracion\').dirty">\n          <p color="danger" ion-text *ngIf="myForm.get(\'duracion\').hasError(\'required\')">Field is required</p>\n          <p color="danger" ion-text *ngIf="myForm.get(\'duracion\').hasError(\'pattern\')">Just Numbers</p>\n        </ion-item>\n      </ion-list>\n\n      <div padding text-center>\n      <button ion-button outline type="submit" [disabled]="myForm.invalid">Agregar</button>\n      </div>\n\n    </form>\n    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pack\pack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], PackPage);
    return PackPage;
}());

//# sourceMappingURL=pack.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
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
            selector: 'page-pack-details',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pack-details\pack-details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Detalles</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n        <ion-label color="secondary" align="center"><b>{{pack.nombre}}</b></ion-label>    <br>  \n    </ion-card-header>\n    <ion-card-content>\n        <div text-left> <ion-icon name="pricetag"></ion-icon> &nbsp; <strong>ID: </strong> {{pack.id}}</div><br><br>\n        <div text-left> <ion-icon name="power"></ion-icon> &nbsp; <strong >STATUS: </strong> {{status.inf}} </div><br>\n        <div text-left> <ion-icon name="clipboard"></ion-icon> &nbsp; <strong >DESCRIPCION: </strong> {{pack.descripcion}}</div><br>\n        <div text-left> <ion-icon name="calendar"></ion-icon> &nbsp; <strong >DIAS DE DURACION: </strong> {{pack.duracion}}</div><br>\n        <div text-left> <ion-icon name="cash"></ion-icon> &nbsp; <strong >PRECIO: </strong> {{pack.precio}}</div><br>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pack-details\pack-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PackDetailsPage);
    return PackDetailsPage;
}());

//# sourceMappingURL=pack-details.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_pack_list_pack__ = __webpack_require__(56);
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
                title: 'DURACION INVALIDA',
                message: 'La duracion maxima es de 365 dias',
                buttons: ['Ok']
            });
            var paqueteNombre_1 = this.alert.create({
                title: 'PAQUETE INVALIDO',
                message: 'Puede que el nombre de paquete sea repetido',
                buttons: ['OK']
            });
            var paqueteEditado_1 = this.alert.create({
                title: 'EXITO',
                message: 'Paquete editado correctamente',
                buttons: ['OK']
            });
            var obj = JSON.parse(JSON.stringify(this.myForm.value));
            obj['id'] = this.pack['id'];
            if (JSON.stringify(this.comprobar['nombre']) == JSON.stringify(this.myForm.value['nombre'].toUpperCase())) {
                obj['funcion'] = 'addCambioPack';
            }
            if (JSON.stringify(this.comprobar['nombre']) != JSON.stringify(this.myForm.value['nombre'].toUpperCase())) {
                obj['funcion'] = 'addCambioPack2';
            }
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
                title: 'PAQUETE SIN CAMBIOS',
                message: 'No se han realizado cambios',
                buttons: ['OK']
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
            selector: 'page-modify-pack',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modify-pack\modify-pack.html"*/'\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Modificar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card>\n    \n        <div text-center>\n          <ion-label stack color = "primary"> <strong> MODIFICAR PAQUETE </strong> </ion-label>\n          <br>\n        </div>\n    \n        <form [formGroup]="myForm"  (ngSubmit)="edit()" novalidate>\n          <ion-list>\n    \n            <ion-item>\n              <ion-label stack color = "primary"> <ion-icon name="walk"></ion-icon> &nbsp; Nombre: </ion-label>\n              <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label stack color = "primary"><ion-icon name="clipboard"></ion-icon> &nbsp;Descripcion: </ion-label>\n              <ion-input id="descripcion" name="descripcion" formControlName="descripcion" type="text"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="myForm.get(\'descripcion\').errors && myForm.get(\'descripcion\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'descripcion\').hasError(\'required\')">Field is required</p>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label stack color = "primary"><ion-icon name="cash"></ion-icon> &nbsp;Precio: </ion-label>\n              <ion-input id="precio" name="precio" formControlName="precio" type="text"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="myForm.get(\'precio\').errors && myForm.get(\'precio\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'precio\').hasError(\'required\')">Field is required</p>\n              <p color="danger" ion-text *ngIf="myForm.get(\'precio\').hasError(\'pattern\')">Just Numbers</p>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label stack color = "primary"><ion-icon name="calendar"></ion-icon> &nbsp;Duracion: </ion-label>\n              <ion-input id="duracion" name="duracion" formControlName="duracion" type="text"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="myForm.get(\'duracion\').errors && myForm.get(\'duracion\').dirty">\n              <p color="danger" ion-text *ngIf="myForm.get(\'duracion\').hasError(\'required\')">Field is required</p>\n              <p color="danger" ion-text *ngIf="myForm.get(\'duracion\').hasError(\'pattern\')">Just Numbers</p>\n            </ion-item>\n          </ion-list>\n    \n          <div padding text-center>\n          <button ion-button outline type="submit" [disabled]="myForm.invalid">MODIFICAR</button>\n          </div>\n    \n        </form>\n        \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modify-pack\modify-pack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], ModifyPackPage);
    return ModifyPackPage;
}());

//# sourceMappingURL=modify-pack.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoEmpleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the InfoEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoEmpleadoPage = /** @class */ (function () {
    function InfoEmpleadoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.empleado = {};
        this.empleado = this.navParams.get('empleado');
        console.log(JSON.stringify(this.empleado));
    }
    InfoEmpleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoEmpleadoPage');
    };
    InfoEmpleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-info-empleado',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\info-empleado\info-empleado.html"*/'<!--\n  Generated template for the InfoEmpleadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Informacion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n  <img src="http://gymdb/imgs/employees/{{ empleado.foto }}"  width="300" height="300">\n  <ion-card-content>\n    <img >\n    <ion-label *ngIf="empleado.activo==\'1\'" align="center" color="primary"><b>ESTATUS: </b> ACTIVO</ion-label>\n    <ion-label *ngIf="empleado.activo==\'0\'" align="center" color="danger"><b>ESTATUS: </b> INACTIVO</ion-label>\n    <p><b>NOMBRE: </b>  {{ empleado.Nombre }}</p>\n    <p><b>ID: </b> {{ empleado.id_empleado }}</p>\n    <p><b>GENERO: </b> {{ empleado.genero }}</p>\n    <p><b>TELEFONO: </b> {{ empleado.telefono }}</p>\n    <p><b>PUESTO: </b> {{ empleado.puesto }}</p>\n    <ion-label color="secondary"><b>FORMATO: </b> YYYY-MM-DD</ion-label>\n    <p><b>FECHA NACIMIENTO: </b> {{ empleado.fecha_nacimiento }}</p>\n    <p><b>FECHA INGRESO: </b> {{ empleado.fecha_ingreso }}</p>\n    \n    <ion-label align="center" color="secondary"><b>DIRECCION</b></ion-label>\n    <p><b>CALLE</b> {{ empleado.calle }}</p>\n    <p><b>NUMERO: </b> {{ empleado.numero_calle }}</p>\n    <p *ngIf="empleado.numero_interior!=\'\'"><b>NUMERO INTERIOR </b> {{ empleado.numero_interior }}</p>\n    <p><b>COLONIA: </b> {{ empleado.colonia }}</p>\n    <p><b>CP: </b> {{ empleado.codigo }}</p>\n\n    \n    <ion-label align="center" color="secondary" *ngIf="empleado.user!=\'0\'"><b>CUENTA</b></ion-label>\n    <p *ngIf="empleado.user!=\'0\'"><b>USUARIO: </b> {{ empleado.user }}</p> \n    \n    \n\n  </ion-card-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\info-empleado\info-empleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InfoEmpleadoPage);
    return InfoEmpleadoPage;
}());

//# sourceMappingURL=info-empleado.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifEmpleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_employees_all_employees__ = __webpack_require__(57);
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
 * Generated class for the ModifEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifEmpleadoPage = /** @class */ (function () {
    function ModifEmpleadoPage(navCtrl, http, loadigCtrl, alert, cl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadigCtrl = loadigCtrl;
        this.alert = alert;
        this.cl = cl;
        this.navParams = navParams;
        this.hidePuesto = true; // variables que controlarán opciones del form
        this.hideOtro = true;
        this.hideCuenta = true;
        this.all = __WEBPACK_IMPORTED_MODULE_4__all_employees_all_employees__["a" /* AllEmployeesPage */];
        this.empleado = {};
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
        this.apiUrl = "http://gymdb:/"; // servidor local
        this.comprobar = {};
        this.empleado = this.navParams.get('empleado'); // obtiene el registro a modificar
        this.iniciarForm(); // crea el form
        console.log(JSON.stringify(this.empleado));
        this.obtenerPuestos(); // obtiene los puestos disponibles
    }
    ModifEmpleadoPage.prototype.iniciarForm = function () {
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
            user: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)]],
            reppass: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
        this.dir['path'] = this.empleado['foto']; // path de la foto de perfil del empleado
    };
    ModifEmpleadoPage.prototype.setValuesForm = function () {
        this.myForm.controls['nombre'].setValue(this.empleado['nombre']);
        this.myForm.controls['gender'].setValue(this.empleado['genero']);
        this.myForm.controls['apellidoP'].setValue(this.empleado['apellido_p']);
        this.myForm.controls['apellidoM'].setValue(this.empleado['apellido_m']);
        this.myForm.controls['telefono'].setValue(this.empleado['telefono']);
        this.myForm.controls['puesto'].setValue(this.empleado['id_puesto']);
        this.myForm.controls['fechanac'].setValue(this.empleado['fecha_nacimiento']);
        this.myForm.controls['foto'].setValue(this.empleado['foto']);
        this.myForm.controls['calle'].setValue(this.empleado['calle']);
        this.myForm.controls['numero'].setValue(this.empleado['numero_calle']);
        this.myForm.controls['numeroint'].setValue(this.empleado['numero_interior']);
        this.myForm.controls['colonia'].setValue(this.empleado['colonia']);
        this.myForm.controls['cp'].setValue(this.empleado['codigo']);
        this.comprobar = {
            "nombre": this.empleado['nombre'],
            "gender": this.empleado['genero'],
            "apellidoP": this.empleado['apellido_p'],
            "apellidoM": this.empleado['apellido_m'],
            "telefono": this.empleado['telefono'],
            "puesto": this.empleado['id_puesto'],
            "otro": '',
            "sueldo": '',
            "fechanac": this.empleado['fecha_nacimiento'],
            "foto": this.empleado['foto'],
            "calle": this.empleado['calle'],
            "numero": this.empleado['numero_calle'],
            "numeroint": this.empleado['numero_interior'],
            "colonia": this.empleado['colonia'],
            "cp": this.empleado['codigo'],
            "admin": '0',
            "user": '',
            "password": '',
            "reppass": '',
        };
        if (this.empleado['user'] == "0") {
            this.myForm.controls['admin'].setValue('0'); // si el cliente no tiene cuenta de administrador
            this.cuenta['val'] = '0'; // 'NO'= si no es administrador
            this.setDefaultValue('111111111'); // pone un valor aleatorio por defecto, ya que no importa
            this.comprobar['user'] = "111111111";
            this.comprobar['password'] = "111111111";
            this.comprobar['reppass'] = "111111111";
        }
        else {
            this.myForm.controls['admin'].setValue('1'); // si tiene cuenta de administrador
            this.cuenta['val'] = '1'; // 'SI'= si es administrador
            this.myForm.controls['user'].setValue(this.empleado['user']);
            this.myForm.controls['password'].setValue(this.empleado['password']);
            this.myForm.controls['reppass'].setValue(this.empleado['password']);
            this.hideCuenta = false;
            //llena los valores para un registro que sirve para comprobar 
            this.comprobar['admin'] = '1'; // si tiene cuenta de administrador
            this.comprobar['user'] = this.empleado['user'];
            this.comprobar['password'] = this.empleado['password'];
            this.comprobar['reppass'] = this.empleado['password'];
        }
    };
    // pone un valor a la cuenta del empleado, mas que nada para que cumpla con el requisito minimo de caracteres
    ModifEmpleadoPage.prototype.setDefaultValue = function (val) {
        this.myForm.controls['user'].setValue(val); // pone un valor por defecto
        this.myForm.controls['password'].setValue(val);
        this.myForm.controls['reppass'].setValue(val);
    };
    // funcion que valida si hay o no hay puestos 
    ModifEmpleadoPage.prototype.validar = function () {
        if (this.puestos.length > 1) {
            this.hidePuesto = false;
            this.hideOtro = true;
        }
        else {
            this.hideOtro = false;
            this.hidePuesto = true;
            //this.myForm.controls['puesto'].setValue('0');  // 
        }
        this.setValuesForm();
    };
    // obtiene los puestos disponibles para empleados
    ModifEmpleadoPage.prototype.obtenerPuestos = function () {
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
    // funcion que controla las opciones del puesto, se le envia un evento
    ModifEmpleadoPage.prototype.onChange = function (ev) {
        console.log(ev);
        if (ev == 0) {
            this.hideOtro = false; // hace visible el ion-list de puesto
        }
        else {
            this.hideOtro = true; // lo esconde
        }
    };
    // controla el ion-list segun si el empleado va a ser administrador o no, 
    //si es administrador necesitará crearse una cuenta de usuario administrador, recibe un evento de parametro
    ModifEmpleadoPage.prototype.cuentaChange = function (ev) {
        console.log(ev);
        if (ev == 1) {
            this.myForm.controls['user'].setValue(this.empleado['user']);
            this.myForm.controls['password'].setValue(this.empleado['password']);
            this.myForm.controls['reppass'].setValue(this.empleado['password']);
            this.cuenta['val'] = '1'; // 'SI'= si es administrador
        }
        else {
            this.cuenta['val'] = '0'; // '0'=NO  es admministrador
            this.setDefaultValue("111111111"); // llama a la funcion que inicializa la cuenta 
        }
    };
    ModifEmpleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifEmpleadoPage');
    };
    ModifEmpleadoPage.prototype.saveData = function () {
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'Campo categoria vacio!!',
            buttons: ['Aceptar']
        });
        var alerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'No se han modificado datos!!',
            buttons: ['Aceptar']
        });
        //console.log("1");
        //console.log(JSON.stringify(this.comp));
        //console.log("2");
        // console.log(JSON.stringify(this.myForm.value))
        if (JSON.stringify(this.comprobar) == JSON.stringify(this.myForm.value)) {
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
    ModifEmpleadoPage.prototype.enviarForm = function () {
        var _this = this;
        //alertas
        var miAlerta = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'La contraseña no coincide!!',
            buttons: ['Aceptar']
        });
        var idRep = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'Ya existe ese usuario!!',
            buttons: ['Aceptar']
        });
        var success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'Modificado correctamente!!',
            buttons: ['Aceptar']
        });
        //alert(JSON.stringify(this.myForm.value));
        var obj = JSON.parse(JSON.stringify(this.myForm.value));
        obj['funcion'] = 'actualizarEmpleado';
        obj['id_access'] = this.empleado['id_acceso'];
        obj['id_empleado'] = this.empleado['id_empleado'];
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
                    idRep.present();
                }
                else if (res == "exito") {
                    if (_this.myForm.valid) {
                        console.log("form enviado");
                        success.present();
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
    };
    // funcion que verifica la existencia de la imagen de perfil en el servidor
    ModifEmpleadoPage.prototype.ver = function () {
        var _this = this;
        if (this.dir['dir'] != "") {
            var funcion2 = {
                'funcion': 'existImg2',
            };
            // alerta de error de archivo
            var error_file_1 = this.alert.create({
                title: 'ERROR',
                message: 'El archivo no se encuentra en la carpeta del servidor!!',
                buttons: ['Aceptar']
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
    ModifEmpleadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modif-empleado',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modif-empleado\modif-empleado.html"*/'<!--\n  Generated template for the ModifEmpleadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Modificar Empleado</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding class="inicio">\n\n    <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n      <img src="http://gymdb/imgs/employees/{{ dir.path }}" width="300" height="300" alt="Imagen de Perfil">\n    \n    <ion-label color="primary"><b>SELECCIONE IMAGEN:</b> </ion-label>\n    <form  method="post" enctype="multipart/form-data">   \n    <input type="file" name="fileToUpload"  id="fileToUpload"  [(ngModel)]="dir.dir">\n    <button ion-button icon-start (click)="ver()">\n        <ion-icon name="camera"></ion-icon>\n        Añadir\n    </button>\n    </form>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-center classss="Datos">\n        \n          <ion-card-content>\n          <h2><strong >DATOS</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Nombre:</ion-label>\n                      <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Paterno:</ion-label>\n                  <ion-input id="apellidoP" name ="apellidoP" type="text" formControlName="apellidoP"  name ="apellidoP"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'apellidoP\').errors && myForm.get(\'apellidoP\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'apellidoP\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Materno:</ion-label>\n                  <ion-input id="apellidoM" name ="apellidoM" type="text" formControlName="apellidoM" name ="apellidoM"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'apellidoM\').errors && myForm.get(\'apellidoM\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'apellidoM\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label color = "primary" icon-start><ion-icon name="person"></ion-icon>Genero:</ion-label>\n                      <ion-select id="gender" name ="gender" formControlName="gender">\n                      <ion-option value="F">Mujer</ion-option>\n                        <ion-option value="M">Hombre</ion-option>\n                      </ion-select>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'gender\').errors && myForm.get(\'gender\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'gender\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary"  icon-start><ion-icon name="call"></ion-icon>Telefono:</ion-label>\n                    <ion-input id="telefono" name ="telefono" type="tel" formControlName="telefono"  name ="telefono"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'telefono\').errors && myForm.get(\'telefono\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'required\')">Field is required</p>\n                    <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'pattern\')">Just Numbers</p>\n                  </ion-item>\n\n\n                  <ion-item [hidden]="hidePuesto">\n                      <ion-label color="primary" icon-start><ion-icon name="list"></ion-icon>Puesto:  </ion-label>\n                      <ion-select  id="puesto" name="puesto" formControlName="puesto" (ionChange)="onChange($event)">\n                          <div *ngFor="let tupla of puestos">\n                              <ion-option value="{{tupla.id}}">{{tupla.puesto}}\n                              </ion-option>\n                            </div>\n                      </ion-select>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'puesto\').errors && myForm.get(\'puesto\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'puesto\').hasError(\'required\')">Field is required</p>\n                 </ion-item>\n                  <ion-list [hidden]="hideOtro">\n                    <ion-item>\n                        <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Puesto:</ion-label>\n                      <ion-input id="otro" type="text" formControlName="otro"  name ="otro"></ion-input>\n                    </ion-item>\n                      <ion-item>\n                          <ion-label stack color = "primary" icon-start><ion-icon name="logo-usd"></ion-icon>Sueldo:</ion-label>\n                          <ion-input id="sueldo" type="number" formControlName="sueldo"  name ="sueldo"></ion-input>\n                      </ion-item>\n                    </ion-list>\n\n\n                   <ion-label color="secondary" icon-start><ion-icon name="calendar"></ion-icon>FECHA DE NACIMIENTO</ion-label>\n                   <ion-item>\n                      <ion-label >MM DD YY</ion-label>\n                      <ion-datetime id="fechanac" name ="fechanac" formControlName="fechanac" display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'fechanac\').errors && myForm.get(\'fechanac\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'fechanac\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n\n                   <ion-label color="secondary" icon-start><ion-icon name="pin"></ion-icon>DIRECCION</ion-label>\n                   <ion-item>\n                      <ion-label stack color = "primary" >Nombre Calle:</ion-label>\n                      <ion-input id="calle" name ="calle" formControlName="calle" type="text"></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="myForm.get(\'calle\').errors && myForm.get(\'calle\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'calle\').hasError(\'required\')">Field is required</p>\n                     </ion-item> \n                     <ion-item>\n                        <ion-label stack color = "primary">Numero Exterior:</ion-label>\n                        <ion-input id="numero" name ="numero" formControlName="numero" type="text"></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="myForm.get(\'numero\').errors && myForm.get(\'numero\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'numero\').hasError(\'required\')">Field is required</p>\n                       </ion-item> \n                       <ion-item>\n                          <ion-label stack color = "primary" >Numero Interior:</ion-label>\n                          <ion-input id="numeroint" name ="numeroint" formControlName="numeroint" type="text"></ion-input>\n                       </ion-item>\n                         <ion-item>\n                            <ion-label stack color = "primary" >Colonia:</ion-label>\n                            <ion-input id="colonia" name ="colonia" formControlName="colonia" type="text"></ion-input>\n                        </ion-item>\n                          <ion-item *ngIf="myForm.get(\'colonia\').errors && myForm.get(\'colonia\').dirty">\n                            <p color="danger" ion-text *ngIf="myForm.get(\'colonia\').hasError(\'required\')">Field is required</p>\n                           </ion-item>\n                           <ion-item>\n                              <ion-label stack color = "primary" >CP:</ion-label>\n                              <ion-input  id="cp" name="cp" formControlName="cp" type="text"></ion-input>\n                          </ion-item>\n                            <ion-item *ngIf="myForm.get(\'cp\').errors && myForm.get(\'cp\').dirty">\n                              <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'required\')">Field is required</p>\n                              <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'pattern\')">Just Numbers</p>\n                             </ion-item> \n                             <ion-item>\n                              <ion-label>Administrador: </ion-label>\n                              <ion-select  id="admin" name="admin" formControlName="admin" (ionChange)="cuentaChange($event)">\n                                  <ion-option value="0">NO</ion-option>\n                                  <ion-option value="1">SI</ion-option>\n                              </ion-select>\n                             </ion-item>\n\n                             <ion-list *ngIf="cuenta.val==\'1\'">\n                                <ion-label color="secondary">CUENTA</ion-label>\n                                <ion-item >\n                                   <ion-label stack color = "primary" icon-start><ion-icon name="log-in"></ion-icon> Username:</ion-label>\n                                 <ion-input id="usercliente" name="usercliente" formControlName="user" type="text" ></ion-input>\n                               </ion-item>\n                               <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'user\').dirty">\n                                <p color="danger" ion-text *ngIf="myForm.get(\'user\').hasError(\'required\')">Field is required</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'user\').hasError(\'minlength\')">Min of 4 characters</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'user\').hasError(\'maxlength\')">Max of 15 characters</p>\n                              </ion-item>\n                                <ion-item class="inputPass">\n                                   <ion-label stack color = "primary"  icon-start>\n                                       <ion-icon name="lock"></ion-icon> Contraseña:</ion-label>\n                                   <ion-input id="password" name ="password" formControlName="password" type="password"></ion-input>\n                                 </ion-item>\n                                 <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'password\').dirty">\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'required\')">Field is required</p>\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'minlength\')">Min of 7 characters</p>\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'maxlength\')">Max of 15 characters</p>\n                                </ion-item>\n                                 <ion-item class="inputPass">\n                                     <ion-label stack color = "primary"  icon-start>\n                                         <ion-icon name="lock"></ion-icon>\n                                         Repita Contraseña:</ion-label>\n                                     <ion-input id="rep" name= "rep" formControlName="reppass"  type="password"></ion-input>\n                                   </ion-item>\n                                   <ion-item *ngIf="myForm.get(\'reppass\').errors && myForm.get(\'reppass\').dirty">\n                                     <p color="danger" ion-text *ngIf="myForm.get(\'reppass\').hasError(\'required\')">Field is required</p>\n                                   </ion-item>\n                                   \n                             </ion-list>\n                             \n              </ion-list><br>\n              <div padding>\n                  <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                      <ion-icon name="archive">   </ion-icon>\n                          Guardar\n                  </button>\n\n\n                </div>\n            </form> \n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modif-empleado\modif-empleado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModifEmpleadoPage);
    return ModifEmpleadoPage;
}());

//# sourceMappingURL=modif-empleado.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asistencia_list_asistencia_list__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AsistenciaPage = /** @class */ (function () {
    function AsistenciaPage(navCtrl, http, alerta, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alerta = alerta;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.datos = {};
        this.info = {};
        this.nota = "";
        this.lista = __WEBPACK_IMPORTED_MODULE_3__asistencia_list_asistencia_list__["a" /* AsistenciaListPage */];
    }
    AsistenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AsistenciaPage');
    };
    AsistenciaPage.prototype.asist = function () {
        var _this = this;
        var invalido = this.alerta.create({
            title: 'ERROR',
            message: 'Cliente inexistente',
            buttons: ['OK']
        });
        var inactivo = this.alerta.create({
            title: 'ERROR',
            message: 'Cliente inactivo',
            buttons: ['OK']
        });
        var paquete = this.alerta.create({
            title: 'ERROR',
            message: 'Cliente no ha comprado un paquete',
            buttons: ['OK']
        });
        var exito = this.alerta.create({
            title: 'EXITO',
            message: this.nota,
            buttons: ['OK']
        });
        var funcion = {
            'funcion': 'asistencia',
            'id_usuario': this.datos['id']
        };
        console.log(JSON.stringify(funcion));
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            _this.info = res;
            if (_this.info == "Cliente Invalido") {
                _this.datos['usuario'] = "";
                _this.datos['activo'] = "";
                _this.datos['vencimiento'] = "";
                invalido.present();
            }
            else if (_this.info == "Cliente Inactivo") {
                _this.datos['usuario'] = "";
                _this.datos['activo'] = "";
                _this.datos['vencimiento'] = "";
                inactivo.present();
            }
            else if (_this.info == "Cliente Pago") {
                _this.datos['usuario'] = "";
                _this.datos['activo'] = "";
                _this.datos['vencimiento'] = "";
                paquete.present();
            }
            else {
                _this.datos['usuario'] = _this.info[0]['id_cliente'];
                _this.datos['activo'] = "Activo";
                _this.datos['vencimiento'] = _this.info[0]['fecha_vencimiento'];
                _this.nota = "Proxima fecha de vencimiento: " + _this.datos['vencimiento'];
                exito.present();
            }
            console.log(res);
        });
    };
    AsistenciaPage.prototype.list = function () {
        this.navCtrl.push(this.lista);
    };
    AsistenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-asistencia',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\asistencia\asistencia.html"*/'<ion-header>\n  <ion-navbar color=secondary>\n    <ion-title>Asistencia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="inicio">\n    <ion-fab right edge>\n        <button ion-fab mini color="primary"><ion-icon name="arrow-dropleft"></ion-icon></button>\n        <ion-fab-list side="left">\n          <button ion-fab (click)="list()"><ion-icon name="calendar"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <ion-card text-center class="bienvenido">\n        \n          <ion-card-content>\n          <h2><strong>Gym Company</strong></h2>\n          <br>\n          <ion-icon name="person"></ion-icon>\n          <br><br>\n          \n          <form name="cuenta">\n              \n              <ion-list>\n                <ion-item >\n                  <ion-label stacked>Usuario</ion-label>\n                  <ion-input type="text" [(ngModel)]="datos.id" name ="id" required></ion-input>\n                </ion-item>\n                    \n              </ion-list><br>\n\n              <ion-buttons>\n                  <button ion-button round color=primary type="submit" (click) ="asist()" size="large">Acceder</button>\n              </ion-buttons>\n\n            </form>      \n            \n        </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <ion-card text-center class="bienvenido">\n        \n          <ion-card-content>\n          <h2><strong>Cliente</strong></h2>\n          <br>\n          \n          <form name="cliente">\n              \n              <ion-list>\n                <ion-item >\n                  <ion-label stacked>Usuario</ion-label>\n                  <ion-input type="text" [(ngModel)]="datos.usuario" name ="nombre" required></ion-input>\n                </ion-item>\n                <ion-item >\n                  <ion-label stacked>Status</ion-label>\n                  <ion-input type="text" [(ngModel)]="datos.activo" name ="activo" required></ion-input>\n                </ion-item>\n                <ion-item >\n                  <ion-label stacked>Vencimiento</ion-label>\n                  <ion-input type="text" [(ngModel)]="datos.vencimiento" name ="vencimiento" required></ion-input>\n                </ion-item>\n                    \n              </ion-list><br>\n\n            </form>      \n            \n        </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\asistencia\asistencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AsistenciaPage);
    return AsistenciaPage;
}());

//# sourceMappingURL=asistencia.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
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
        this.name = '';
        this.price = '';
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
    PayPage.prototype.setPack = function (pack) {
        this.name = pack['nombre'];
        this.price = pack['precio'];
        console.log(this.name);
        this.myForm.setValue({
            id_usuario: '',
            paquete: this.name.toString(),
            modo: '',
            monto: this.price.toString(),
        });
        document.getElementById("paquete").setAttribute('value', this.name.toString());
        document.getElementById("monto").setAttribute('value', this.price.toString());
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
            selector: 'page-pay',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pay\pay.html"*/'<ion-header>\n\n  <ion-navbar color= "secondary">\n    <ion-title>Pagos</ion-title>\n  </ion-navbar>\n\n  <ion-searchbar placeholder="Ingresa nombre de usuario para consultar id" (ionInput)="getItems($event)">\n  </ion-searchbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div text-center>\n    <button ion-button outline (click)="cleanItems()">\n      <ion-icon name="arrow-up"></ion-icon>\n    </button>\n  </div>\n\n  <ion-card *ngFor="let cliente of items" color="primary">\n    <ion-card-content>\n      <b>{{ cliente.Nombre }}</b> <br> {{ cliente.id_cliente }}\n    </ion-card-content>\n  \n  </ion-card>\n\n  <ion-card *ngFor="let pack of paquetes" (click)="setPack(pack)">\n    <ion-card-header><b>{{ pack.nombre }}</b>\n    </ion-card-header>\n          \n    <ion-card-content color="primary">\n      ${{pack.precio}}.00\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n\n    <div text-center>\n      <br>\n      <strong >FICHA DE PAGO</strong>\n    </div>\n\n      <form [formGroup]="myForm"  (ngSubmit)="pagar()" novalidate>\n          <ion-list>\n\n              <ion-item>\n                <ion-label stack color = "primary">ID Cliente: </ion-label>\n                <ion-input id="id_usuario" name="id_usuario" formControlName="id_usuario" type="text"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'id_usuario\').errors && myForm.get(\'id_usuario\').dirty">\n                <p color="danger" ion-text *ngIf="myForm.get(\'id_usuario\').hasError(\'required\')">Field is required</p>\n                <p color="danger" ion-text *ngIf="myForm.get(\'id_usuario\').hasError(\'pattern\')">Just Numbers</p>\n              </ion-item>\n\n              <ion-item>\n                <ion-label stack color = "primary">Paquete: </ion-label>\n                <ion-input readonly id="paquete" name="paquete" formControlName="paquete" type="text"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label stack color = "primary">Modo de Pago </ion-label>\n                <ion-select id="modo" name="modo" formControlName="modo" type="modo">\n                  <ion-option value="EFECTIVO">Efectivo</ion-option>\n                  <ion-option value="DEBITO">Debito</ion-option>\n                  <ion-option value="CREDITO">Credito</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'modo\').errors && myForm.get(\'modo\').dirty">\n                <p color="danger" ion-text *ngIf="myForm.get(\'modo\').hasError(\'required\')">Field is required</p>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label stack color = "primary">Monto: </ion-label>\n                  <ion-input id="monto" name="monto" formControlName="monto" type="text"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="myForm.get(\'monto\').errors && myForm.get(\'monto\').dirty">\n                  <p color="danger" ion-text *ngIf="myForm.get(\'monto\').hasError(\'required\')">Field is required</p>\n                  <p color="danger" ion-text *ngIf="myForm.get(\'monto\').hasError(\'pattern\')">Just Numbers</p>\n              </ion-item>\n\n          </ion-list>\n\n          <div padding text-center>\n            <button ion-button outline type="submit" [disabled]="myForm.invalid">Pagar</button>\n          </div>\n\n      </form>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\pay\pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfMake__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfMake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfMake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfMake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
/**
 * Generated class for the ReportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportesPage = /** @class */ (function () {
    function ReportesPage(alert, navCtrl, navParams, http, loading, action) {
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.action = action;
        this.apiUrl = "http://gymdb/";
        this.hideRango = true;
        this.tipo_reporte = null; //tipo de reporte
        this.pdf = null; // objeto para crear pdf
        this.fecha = {
            'inicio': '',
            'fin': '',
            'funcion': ''
        };
    }
    ReportesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportesPage');
    };
    ReportesPage.prototype.presentLoading = function () {
        var loader = this.loading.create({
            content: "CREATING PDF...",
            duration: 150
        });
        loader.present();
    };
    ReportesPage.prototype.dowloadPdf = function (val) {
        this.pdf.download(val);
    };
    ///////////////////// REPORTE DE PAGOS  ///////////////////////////////////////////////
    // obtiene los pagos que se han realizado
    ReportesPage.prototype.getPagos = function (dias) {
        var _this = this;
        var sourceData = [];
        var funcion = {
            'funcion': 'getReportePagos',
            'dias': dias
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) { console.log(res); sourceData = res['pagos']; console.log(sourceData); _this.createPdfPagos(sourceData, dias); }, function (error) { console.log(error); }); //obtiene los registros de la base de datos
        this.presentLoading();
    };
    ReportesPage.prototype.createPdfPagos = function (sourceData, dias) {
        var total;
        total = 0;
        var fecha;
        fecha = "inicio";
        var bodyData = [];
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
        sourceData.forEach(function (sourceRow) {
            var dataRow = [];
            if (fecha != sourceRow.fecha_pago) {
                dataRow.push({ text: '[ ' + sourceRow.fecha_pago + ' ]', bold: true });
                fecha = sourceRow.fecha_pago;
            }
            else {
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
                { text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0, 10, 0, 20] },
                { text: 'Reporte de pagos de los últimos ' + dias + ' días', style: 'header', alignment: 'center', margin: [0, 20, 0, 20] },
                { text: new Date().toString(), alignment: 'right', margin: [0, 20, 0, 20] },
                {
                    layout: 'lightHorizontalLines',
                    table: {
                        headerRows: 1,
                        body: bodyData
                    }
                },
                { text: "Total:  $" + total.toString(), style: 'subheader', alignment: 'right', margin: [0, 20, 0, 20] }
            ],
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    width: '50%'
                },
                subheader: {
                    fontSize: 14,
                    bold: true
                }
            }
        };
        this.pdf = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfMake___default.a.createPdf(docDefinition);
        this.dowloadPdf("Reporte_pagos.pdf");
    };
    //////////////////////// FIN REPORTE PAGOS    /////////////////////////////
    /////////////////////// REPORTE ASISTENCIA  ////////////////////////////
    ReportesPage.prototype.getAsistencias = function (dias) {
        var _this = this;
        var sourceData = [];
        var funcion = {
            'funcion': 'getReporteAsistencia',
            'dias': dias
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) { console.log(res); sourceData = res['asistencias']; console.log(sourceData); _this.createPdfAsistencia(sourceData, dias); }, function (error) { console.log(error); }); //obtiene los registros de la base de datos
        this.presentLoading();
    };
    ReportesPage.prototype.createPdfAsistencia = function (sourceData, dias) {
        var bodyData = [];
        var fecha;
        // crea el encabezado de las columnas
        var dataRow1 = [];
        dataRow1.push({ text: 'Fecha [YY/MM/DD]', bold: true });
        dataRow1.push({ text: 'Cliente', bold: true });
        bodyData.push(dataRow1);
        fecha = "inicio";
        // recoore la lista 
        sourceData.forEach(function (sourceRow) {
            var dataRow = [];
            if (sourceRow.fecha != fecha) {
                dataRow.push({ text: '[ ' + sourceRow.fecha + ' ]', bold: true });
                fecha = sourceRow.fecha;
            }
            else {
                dataRow.push('');
            }
            dataRow.push(sourceRow.Nombre);
            bodyData.push(dataRow);
        });
        var docDefinition = {
            content: [
                { text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0, 10, 0, 20] },
                { text: 'Reporte de asistencias de los últimos ' + dias + ' dias', style: 'header', alignment: 'center', margin: [0, 20, 0, 20] },
                { text: new Date().toString(), alignment: 'right', margin: [0, 20, 0, 20] },
                {
                    layout: 'lightHorizontalLines',
                    table: {
                        headerRows: 1,
                        body: bodyData
                    }
                },
            ],
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    width: '50%'
                },
                subheader: {
                    fontSize: 14,
                    bold: true
                }
            }
        };
        this.pdf = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfMake___default.a.createPdf(docDefinition);
        this.dowloadPdf("Reporte_asistencias.pdf");
    };
    //////////////////////// FIN REPORTE ASISTENCIAS    /////////////////////////////
    //////////////////////// REPORTE VENTAS   ///////////////////////////////
    ReportesPage.prototype.getVentas = function (dias) {
        var _this = this;
        var sourceData = [];
        var funcion = {
            'funcion': 'getReporteVenta',
            'dias': dias
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) { console.log(res); sourceData = res['ventas']; console.log(sourceData); _this.createPdfVenta(sourceData, dias); }, function (error) { console.log(error); }); //obtiene los registros de la base de datos
        this.presentLoading();
    };
    ReportesPage.prototype.createPdfVenta = function (sourceData, dias) {
        var bodyData = [];
        var fecha = "inicio";
        var total = 0.0;
        var ganancia = 0.0;
        var temporal_total = 0.0;
        var temporal_ganancia = 0.0;
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
        sourceData.forEach(function (sourceRow) {
            var dataRow = [];
            if (sourceRow.fecha != fecha) {
                dataRow.push({ text: '[ ' + sourceRow.fecha + ' ]', bold: true });
                fecha = sourceRow.fecha;
            }
            else {
                dataRow.push('');
            }
            dataRow.push(sourceRow.nombre + ' [' + sourceRow.id_producto + ']');
            dataRow.push(sourceRow.cantidad);
            dataRow.push('$' + sourceRow.p_c);
            dataRow.push('$' + sourceRow.p_v);
            temporal_total = parseFloat(sourceRow.p_v) * parseFloat(sourceRow.cantidad);
            dataRow.push('$' + temporal_total.toString());
            temporal_ganancia = temporal_total - (parseFloat(sourceRow.cantidad) * parseFloat(sourceRow.p_c));
            dataRow.push('$' + temporal_ganancia.toString());
            total = total + temporal_total;
            ganancia = ganancia + temporal_ganancia;
            bodyData.push(dataRow);
        });
        var docDefinition = {
            content: [
                { text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0, 10, 0, 20] },
                { text: 'Reporte de ventas de los últimos ' + dias + ' dias', style: 'header', alignment: 'center', margin: [0, 20, 0, 20] },
                { text: new Date().toString(), alignment: 'right', margin: [0, 20, 0, 20] },
                {
                    layout: 'lightHorizontalLines',
                    table: {
                        headerRows: 1,
                        body: bodyData
                    }
                },
                { text: "Total Vendido:  $" + total.toString(), style: 'subheader', alignment: 'right', margin: [0, 50, 0, 5] },
                { text: "Ganancia Total:  $" + ganancia.toString(), style: 'subheader', alignment: 'right', margin: [0, 5, 0, 5] }
            ],
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    width: '50%'
                },
                subheader: {
                    fontSize: 14,
                    bold: true
                }
            }
        };
        this.pdf = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfMake___default.a.createPdf(docDefinition);
        this.dowloadPdf("Reporte_ventas.pdf");
    };
    ////////////////////////////////// FIN REPORTE VENTAS  ///////////////////////
    ///////////////////////////////////     MENU          ////////////////////
    ReportesPage.prototype.presentActionSheet = function (tipo) {
        var _this = this;
        var action = this.action.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Últimos 7 Días',
                    role: 'una semana',
                    handler: function () {
                        console.log('7 días');
                        if (tipo == '0') {
                            _this.getPagos("7");
                        }
                        else if (tipo == '1') {
                            _this.getAsistencias("7");
                        }
                        else if (tipo == '2') {
                            _this.getVentas("7");
                        }
                    }
                },
                {
                    text: 'Últimos 15 Días',
                    role: 'quincena',
                    handler: function () {
                        console.log('15 dias');
                        if (tipo == '0') {
                            _this.getPagos("15");
                        }
                        else if (tipo == '1') {
                            _this.getAsistencias("15");
                        }
                        else if (tipo == '2') {
                            _this.getVentas("15");
                        }
                    }
                },
                {
                    text: 'Últimos 30 Días',
                    role: 'un mes',
                    handler: function () {
                        console.log('un mes');
                        if (tipo == '0') {
                            _this.getPagos("30");
                        }
                        else if (tipo == '1') {
                            _this.getAsistencias("30");
                        }
                        else if (tipo == '2') {
                            _this.getVentas("30");
                        }
                    }
                },
                {
                    text: 'Elejir Rango',
                    role: 'varios',
                    handler: function () {
                        console.log('varios');
                        if (tipo == '0') {
                            // this.getPagos("15");
                            _this.hideRango = false;
                            _this.tipo_reporte = '0'; // es de pagos
                        }
                        else if (tipo == '1') {
                            //this.getAsistencias("15");
                            _this.hideRango = false;
                            _this.tipo_reporte = '1';
                        }
                        else if (tipo == '2') {
                            //this.getAsistencias("15");
                            _this.hideRango = false;
                            _this.tipo_reporte = '2';
                        }
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
    /////////////////////////////////// FIN MENU /////////////////
    ///////////////////////////// ELEGIR RANGO    //////////////////
    ReportesPage.prototype.verifData = function () {
        console.log(JSON.stringify(this.fecha));
        if (this.fecha.inicio == '' || this.fecha.fin == '') {
            return -1;
        }
        else {
            return 0;
        }
    };
    ReportesPage.prototype.verificarFecha = function () {
        var inicio = new Date(this.fecha['inicio']); //31 de diciembre de 2015
        var fin = new Date(this.fecha['fin']);
        var aux;
        if (inicio > fin) {
            console.log("inicio > fin");
            aux = this.fecha['fin'];
            this.fecha['fin'] = this.fecha['inicio']; //intercambia valores
            this.fecha['inicio'] = aux;
        }
        console.log(JSON.stringify(this.fecha));
        if (this.tipo_reporte == '0') {
            this.getPagosRange();
        }
        else if (this.tipo_reporte == '1') {
            this.getAsistenciasRange();
        }
        else if (this.tipo_reporte == '2') {
            this.getVentasRange();
        }
    };
    ReportesPage.prototype.crear = function () {
        var error = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'FALTAN ENTRADAS',
            buttons: ['ACEPTAR']
        });
        if (this.verifData() == 0) {
            this.hideRango = true;
            this.verificarFecha();
        }
        else {
            error.present();
        }
    };
    //////////////////////////////////////  RANGO PAGOS   /////////////////////////
    ReportesPage.prototype.getPagosRange = function () {
        var _this = this;
        var error = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'NO SE ENCONTRARON REGISTROS ENTRE ESAS FECHAS',
            buttons: ['ACEPTAR']
        });
        var sourceData = [];
        this.fecha['funcion'] = 'getReportePagosRange';
        this.http.post(this.apiUrl, JSON.stringify(this.fecha))
            .subscribe(function (res) {
            console.log(res);
            if (res == "null") {
                error.present();
            }
            else {
                sourceData = res['pagos'];
                console.log(sourceData);
                _this.createPdfPagosRange(sourceData);
            }
        }, function (error) { console.log(error); }); //obtiene los registros de la base de datos
        this.presentLoading();
    };
    ReportesPage.prototype.createPdfPagosRange = function (sourceData) {
        var total;
        total = 0;
        var fecha;
        fecha = "inicio";
        var bodyData = [];
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
        sourceData.forEach(function (sourceRow) {
            var dataRow = [];
            if (fecha != sourceRow.fecha_pago) {
                dataRow.push({ text: '[ ' + sourceRow.fecha_pago + ' ]', bold: true });
                fecha = sourceRow.fecha_pago;
            }
            else {
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
                { text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0, 10, 0, 20] },
                { text: 'Reporte de pagos [' + this.fecha['inicio'] + '] - [' + this.fecha['fin'] + "]", style: 'header', alignment: 'center', margin: [0, 20, 0, 20] },
                { text: new Date().toString(), alignment: 'right', margin: [0, 20, 0, 20] },
                {
                    layout: 'lightHorizontalLines',
                    table: {
                        headerRows: 1,
                        body: bodyData
                    }
                },
                { text: "Total:  $" + total.toString(), style: 'subheader', alignment: 'right', margin: [0, 20, 0, 20] }
            ],
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    width: '50%'
                },
                subheader: {
                    fontSize: 14,
                }
            }
        };
        this.pdf = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfMake___default.a.createPdf(docDefinition);
        this.dowloadPdf("Reporte_pagos[" + this.fecha['inicio'] + "-" + this.fecha['fin'] + "].pdf");
    };
    ////////////////////// FIN RANGO PAGOS ////////////////////////
    ///////////////////  RANGO ASISTENCIAS  ///////////////////////////////
    ReportesPage.prototype.getAsistenciasRange = function () {
        var _this = this;
        this.presentLoading();
        var error = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'NO SE ENCONTRARON REGISTROS ENTRE ESAS FECHAS',
            buttons: ['ACEPTAR']
        });
        var sourceData = [];
        this.fecha['funcion'] = 'getReporteAsistenciasRange';
        this.http.post(this.apiUrl, JSON.stringify(this.fecha))
            .subscribe(function (res) {
            console.log(res);
            if (res == "null") {
                error.present();
            }
            else {
                sourceData = res['asistencias'];
                console.log(sourceData);
                _this.createPdfAsistenciaRange(sourceData);
            }
        }, function (error) { console.log(error); }); //obtiene los registros de la base de datos
    };
    ReportesPage.prototype.createPdfAsistenciaRange = function (sourceData) {
        var bodyData = [];
        var fecha;
        // crea el encabezado de las columnas
        var dataRow1 = [];
        dataRow1.push({ text: 'Fecha [YY/MM/DD]', bold: true });
        dataRow1.push({ text: 'Cliente', bold: true });
        bodyData.push(dataRow1);
        fecha = "inicio";
        // recoore la lista 
        sourceData.forEach(function (sourceRow) {
            var dataRow = [];
            if (sourceRow.fecha != fecha) {
                dataRow.push({ text: '[ ' + sourceRow.fecha + ' ]', bold: true });
                fecha = sourceRow.fecha;
            }
            else {
                dataRow.push('');
            }
            dataRow.push(sourceRow.Nombre);
            bodyData.push(dataRow);
        });
        var docDefinition = {
            content: [
                { text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0, 10, 0, 20] },
                { text: 'Reporte de asistencias de [' + this.fecha['inicio'] + ']-[' + this.fecha['fin'] + ']', style: 'header', alignment: 'center', margin: [0, 20, 0, 20] },
                { text: new Date().toString(), alignment: 'right', margin: [0, 20, 0, 20] },
                {
                    layout: 'lightHorizontalLines',
                    table: {
                        headerRows: 1,
                        body: bodyData
                    }
                },
            ],
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    width: '50%'
                },
                subheader: {
                    fontSize: 14,
                    bold: true
                }
            }
        };
        this.pdf = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfMake___default.a.createPdf(docDefinition);
        this.dowloadPdf("Reporte_asistencias" + this.fecha['inicio'] + '-' + this.fecha['fin'] + ".pdf");
    };
    ///////////////////////////////// FIN RANGO ASISTENCIAS //////////////////////////////
    ////////////////////////////////  RANGO VENTAS  ///////////////////////////////////
    ReportesPage.prototype.getVentasRange = function () {
        var _this = this;
        this.presentLoading();
        var error = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'NO SE ENCONTRARON REGISTROS ENTRE ESAS FECHAS',
            buttons: ['ACEPTAR']
        });
        var sourceData = [];
        this.fecha['funcion'] = 'getReporteVentasRange';
        this.http.post(this.apiUrl, JSON.stringify(this.fecha))
            .subscribe(function (res) {
            console.log(res);
            if (res == "null") {
                error.present();
            }
            else {
                sourceData = res['ventas'];
                console.log(sourceData);
                _this.createPdfVentaRange(sourceData);
            }
        }, function (error) { console.log(error); }); //obtiene los registros de la base de datos
    };
    ReportesPage.prototype.createPdfVentaRange = function (sourceData) {
        var bodyData = [];
        var fecha = "inicio";
        var total = 0.0;
        var ganancia = 0.0;
        var temporal_total = 0.0;
        var temporal_ganancia = 0.0;
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
        sourceData.forEach(function (sourceRow) {
            var dataRow = [];
            if (sourceRow.fecha != fecha) {
                dataRow.push({ text: '[ ' + sourceRow.fecha + ' ]', bold: true });
                fecha = sourceRow.fecha;
            }
            else {
                dataRow.push('');
            }
            dataRow.push(sourceRow.nombre + ' [' + sourceRow.id_producto + ']');
            dataRow.push(sourceRow.cantidad);
            dataRow.push('$' + sourceRow.p_c);
            dataRow.push('$' + sourceRow.p_v);
            temporal_total = parseFloat(sourceRow.p_v) * parseFloat(sourceRow.cantidad);
            dataRow.push('$' + temporal_total.toString());
            temporal_ganancia = temporal_total - (parseFloat(sourceRow.cantidad) * parseFloat(sourceRow.p_c));
            dataRow.push('$' + temporal_ganancia.toString());
            total = total + temporal_total;
            ganancia = ganancia + temporal_ganancia;
            bodyData.push(dataRow);
        });
        var docDefinition = {
            content: [
                { text: 'GymSystem ', style: 'subheader', alignment: 'left', margin: [0, 10, 0, 20] },
                { text: 'Reporte de ventas de [' + this.fecha['inicio'] + ']-[' + this.fecha['fin'] + ']', style: 'header', alignment: 'center', margin: [0, 20, 0, 20] },
                { text: new Date().toString(), alignment: 'right', margin: [0, 20, 0, 20] },
                {
                    layout: 'lightHorizontalLines',
                    table: {
                        headerRows: 1,
                        body: bodyData
                    }
                },
                { text: "Total Vendido:  $" + total.toString(), style: 'subheader', alignment: 'right', margin: [0, 50, 0, 5] },
                { text: "Ganancia Total:  $" + ganancia.toString(), style: 'subheader', alignment: 'right', margin: [0, 5, 0, 5] }
            ],
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    width: '50%'
                },
                subheader: {
                    fontSize: 14,
                    bold: true
                }
            }
        };
        this.pdf = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfMake___default.a.createPdf(docDefinition);
        this.dowloadPdf("Reporte_ventas" + this.fecha['inicio'] + '-' + this.fecha['fin'] + ".pdf");
    };
    ReportesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reportes',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\reportes\reportes.html"*/'<!--\n  Generated template for the ReportesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Reportes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   <div [hidden]="hideRango">\n     <ion-label color="secondary" icon-start><ion-icon name="calendar"></ion-icon>Elija el rango: </ion-label>\n      <ion-item>\n     <ion-label >Inicio (MM DD YY)</ion-label>\n       <ion-datetime id="fecha_inicio" [(ngModel)] ="fecha.inicio" display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n     </ion-item>\n     <ion-item>\n      <ion-label >Fin (MM DD YY)</ion-label>\n      <ion-datetime id="fecha_fin" [(ngModel)] ="fecha.fin"  display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n     </ion-item>\n     <button ion-button icon-start (click)="crear()">\n      <ion-icon name="add"></ion-icon>\n      Crear Reporte\n     </button>\n   </div>\n      \n    <ion-card (click)="presentActionSheet(\'0\')">\n      <ion-card-header color = "primary">\n        <b> <ion-icon name="cash" item-start></ion-icon> &nbsp; PAGOS </b>\n      </ion-card-header>\n      <ion-card-content>\n        <b>DESCRIPCIÓN:</b> LISTA DE PAGOS E INGRESO TOTAL\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card (click)="presentActionSheet(\'1\')">\n      <ion-card-header color = "primary">\n        <b> <ion-icon name="calendar" item-start></ion-icon> &nbsp; ASISTENCIA </b>\n      </ion-card-header>\n      <ion-card-content>\n        <b>DESCRIPCIÓN:</b> RECORD DE ASISTENCIAS\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card (click)="presentActionSheet(\'2\')">\n      <ion-card-header color = "primary">\n        <b> <ion-icon name="appstore"></ion-icon> &nbsp; TIENDA </b>\n      </ion-card-header>\n      <ion-card-content>\n        <b>DESCRIPCIÓN:</b> REGISTRO DE VENTAS \n      </ion-card-content>\n    </ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\reportes\reportes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ReportesPage);
    return ReportesPage;
}());

//# sourceMappingURL=reportes.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductoDetailsPage = /** @class */ (function () {
    function ProductoDetailsPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.product = {};
        this.status = {};
        this.product = this.navParams.get('producto');
        if (this.product['activo'] == '1') {
            this.status['inf'] = "ACTIVO";
        }
        else {
            this.status['inf'] = "INACTIVO";
        }
        console.log(this.product);
    }
    ProductoDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoDetailsPage');
    };
    ProductoDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-producto-details',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\producto-details\producto-details.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Detalles</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-label color="secondary" align="center"><b>{{product.nombre}}</b></ion-label>    <br>  \n    </ion-card-header>\n    \n    <ion-card-content>\n      <div text-left> <ion-icon name="attach"></ion-icon> <strong >&nbsp; ID: </strong> {{product.id_producto}}</div><br>\n      <div text-left> <ion-icon name="checkmark-circle"></ion-icon> <strong >&nbsp; STATUS: </strong> {{status.inf}} </div><br><br>\n      <div text-left> <ion-icon name="paper"></ion-icon> <strong >&nbsp; DESCRIPCION: </strong> {{product.descripcion}}</div><br>\n      <div text-left> <ion-icon name="cart"></ion-icon> <strong > &nbsp; DISPONIBILIDAD: </strong> {{product.cantidad}}</div><br><br>\n      <div text-left> <ion-icon name="logo-usd"></ion-icon> <strong >&nbsp; PRECIO ENTRADA: </strong> {{product.precio_entrada}}</div><br>\n      <div text-left> <ion-icon name="logo-usd"></ion-icon> <strong >&nbsp; PRECIO SALIDA: </strong> {{product.precio_salida}}</div><br><br>\n      <div text-left> <ion-icon name="contact"></ion-icon> <strong >&nbsp; PROVEEDOR: </strong> {{product.proveedor}}</div><br>\n    </ion-card-content>\n  </ion-card>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\producto-details\producto-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProductoDetailsPage);
    return ProductoDetailsPage;
}());

//# sourceMappingURL=producto-details.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_pay_customer_pay__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_asist_customer_asist__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerPage = /** @class */ (function () {
    function CustomerPage(navCtrl, alert, navParams) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.navParams = navParams;
        this.pay = __WEBPACK_IMPORTED_MODULE_2__customer_pay_customer_pay__["a" /* CustomerPayPage */];
        this.asist = __WEBPACK_IMPORTED_MODULE_3__customer_asist_customer_asist__["a" /* CustomerAsistPage */];
        this.login = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.cliente = {};
        this.cliente = this.navParams.get('cliente');
        console.log(this.cliente);
    }
    CustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerPage');
    };
    CustomerPage.prototype.exit = function () {
        var _this = this;
        var exit = this.alert.create({
            title: 'SALIR',
            message: '¿Seguro que desea cerrar sesion?',
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
                        _this.logout();
                    }
                }
            ]
        });
        exit.present();
    };
    CustomerPage.prototype.logout = function () {
        this.navCtrl.push(this.login);
    };
    CustomerPage.prototype.pagos = function () {
        this.navCtrl.push(this.pay, { cliente: this.cliente });
    };
    CustomerPage.prototype.asistencias = function () {
        this.navCtrl.push(this.asist, { cliente: this.cliente });
    };
    CustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customer',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\customer\customer.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n\n    <ion-buttons start>\n      <button ion-button (click)="exit()">\n        <ion-icon name="power" ></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Modulo clientes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab right edge>\n    <button ion-fab mini color="secondary"><ion-icon name="add"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab (click) = "asistencias()" ><ion-icon name="calendar"></ion-icon></button>\n        <button ion-fab (click) = "pagos()"><ion-icon name="cash"></ion-icon></button>\n      </ion-fab-list>\n  </ion-fab>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-label color="primary" align="center"><b>PERFIL DE USUARIO</b></ion-label>    <br>  \n    </ion-card-header>\n      <ion-card-content>\n        \n        <div text-left> <strong >NOMBRE: </strong> {{cliente.name}} </div> <br> \n        <div text-left> <strong >FECHA DE NACIMIENTO: </strong> {{cliente.fecha_nacimiento}} </div> <br> \n        <div text-left> <strong >GENERO: </strong> {{cliente.genero}} </div> <br> \n        \n        <br>\n        \n        <ion-label color="secondary" align="left"><b>CONTACTO</b></ion-label> <br>\n\n        <div text-left> <strong >TELEFONO: </strong> {{cliente.telefono}} </div> <br> \n\n        <br>\n\n        <ion-label color="secondary" align="left"><b>DOMICILIO</b></ion-label> <br>\n\n        <div text-left> <strong >CALLE: </strong> {{cliente.calle}} </div> <br> \n        <div text-left> <strong >NUMERO: </strong> {{cliente.numero_calle}} </div> <br> \n        <div text-left> <strong >NUMERO INTERIOR: </strong> {{cliente.numero_interior}} </div> <br> \n        <div text-left> <strong >COLONIA: </strong> {{cliente.nombre}} </div> <br> \n        <div text-left> <strong >CP: </strong> {{cliente.codigo}} </div> <br> \n\n        <br>\n\n        <ion-label color="secondary" align="left"><b>INGRESO</b></ion-label> <br>\n\n        <div text-left> <strong >FECHA DE INGRESO: </strong> {{cliente.fecha_ingreso}} </div> <br> \n\n      </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\customer\customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CustomerPage);
    return CustomerPage;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_recibe_customer_recibe__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerPayPage = /** @class */ (function () {
    function CustomerPayPage(navCtrl, http, alert, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.alert = alert;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.recibe = __WEBPACK_IMPORTED_MODULE_3__customer_recibe_customer_recibe__["a" /* CustomerRecibePage */];
        this.cliente = {};
        this.funcion = {};
        this.pagos = [];
        this.items = [];
        this.cliente = this.navParams.get('cliente');
        console.log(this.cliente);
        this.funcion = {
            "funcion": "getCostumerPays",
            "id": this.cliente['id_cliente']
        };
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.pagos = res['pagos'];
            _this.initializeItems();
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    CustomerPayPage.prototype.initializeItems = function () {
        this.items = this.pagos;
    };
    CustomerPayPage.prototype.getItems = function (ev) {
        this.initializeItems();
        console.log(ev.target.value);
        var val = ev.target.value;
        this.items = this.items.filter(function (pago) {
            console.log(JSON.stringify(JSON.stringify(pago.fecha_pago)));
            return pago.fecha_pago.includes(val);
        });
        console.log(JSON.stringify(this.pagos));
    };
    CustomerPayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerPayPage');
    };
    CustomerPayPage.prototype.recibo = function (pago) {
        this.navCtrl.push(this.recibe, { pago: pago, cliente: this.cliente });
    };
    CustomerPayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customer-pay',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\customer-pay\customer-pay.html"*/'<ion-header>\n  <ion-navbar color= "primary">\n    <ion-title>Historial de pagos</ion-title>\n  </ion-navbar>\n  <ion-searchbar placeholder="Buscar pago por fecha de pago aaaa-mm-dd" (ionInput)="getItems($event)">\n\n  </ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let pagos of items" (click)="recibo(pagos)">\n    <ion-card-header color="primary"> \n      <b>{{ pagos.fecha_pago }}</b>\n    </ion-card-header>\n    <ion-card-content>\n      <b>ID:</b> {{ pagos.id_pago }}\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\customer-pay\customer-pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CustomerPayPage);
    return CustomerPayPage;
}());

//# sourceMappingURL=customer-pay.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRecibePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerRecibePage = /** @class */ (function () {
    function CustomerRecibePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pago = {};
        this.cliente = {};
        this.nota = {};
        this.pago = this.navParams.get('pago');
        console.log(this.pago);
        if (this.pago['monto'] == '0') {
            this.nota['info'] = "PAGO ELIMINADO";
        }
        else {
            this.nota['info'] = " ";
        }
        this.cliente = this.navParams.get('cliente');
        console.log(this.cliente);
    }
    CustomerRecibePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerRecibePage');
    };
    CustomerRecibePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customer-recibe',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\customer-recibe\customer-recibe.html"*/'<ion-header>\n  <ion-navbar color="primary">\n        <ion-title>Pago</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-label color="primary" align="center"><b>RECIBO DE PAGO</b></ion-label>    <br>  \n    </ion-card-header>\n      <ion-card-content>\n        \n        <div text-right> <strong >PAGO </strong> {{pago.id_pago}} </div>\n        <div text-right> <strong >FECHA: </strong> {{pago.fecha_pago}} </div> \n        <div text-right> <strong >FECHA DE VENCIMIENTO: </strong> {{pago.fecha_vencimiento}} </div> \n          \n        <br>\n\n        <ion-label color="secondary" align="left"><b>CLIENTE</b></ion-label> <br>\n        \n        <div text-left> <strong >ID: </strong> {{cliente.id_cliente}} </div>\n        <div text-left> <strong >NOMBRE: </strong> {{cliente.name}} </div> \n        <div text-left> <strong >FECHA DE INGRESO: </strong> {{cliente.fecha_ingreso}} </div> \n        \n        <br>\n        \n        <ion-label color="secondary" align="left"><b>CONTACTO</b></ion-label> <br>\n\n        <div text-left> <strong >TELEFONO: </strong> {{cliente.telefono}} </div> \n\n        <br>\n\n        <ion-label color="secondary" align="left"><b>DOMICILIO</b></ion-label> <br>\n\n        <div text-left> <strong >CALLE: </strong> {{cliente.calle}} </div> \n        <div text-left> <strong >NUMERO: </strong> {{cliente.numero_calle}} </div>  \n        <div text-left> <strong >NUMERO INTERIOR: </strong> {{cliente.numero_interior}} </div>  \n        <div text-left> <strong >COLONIA: </strong> {{cliente.nombre}} </div> \n        <div text-left> <strong >CP: </strong> {{cliente.codigo}} </div>\n\n        <br>\n\n        <ion-label color="secondary" align="right"><b>PAGO</b></ion-label> <br>\n\n        <div text-right> <strong >PAQUETE: </strong> {{pago.nombre}} </div> \n        <div text-right> <strong >DESCRIPCION: </strong> {{pago.descripcion}} </div> \n        <ion-label color="danger" align="right">{{nota.info}}</ion-label> \n        <div text-right> <strong >PRECIO: </strong> {{pago.precio}} </div>  \n        <div text-right> <strong >MODO DE PAGO: </strong> {{pago.modo}} </div>\n        <div text-right> <strong >MONTO PAGADO: </strong> {{pago.monto}} </div> \n        \n\n        \n\n      </ion-card-content>\n      </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\customer-recibe\customer-recibe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CustomerRecibePage);
    return CustomerRecibePage;
}());

//# sourceMappingURL=customer-recibe.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAsistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asist_7_asist_7__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asist_15_asist_15__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__asist_30_asist_30__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerAsistPage = /** @class */ (function () {
    function CustomerAsistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cliente = {};
        this.semana = __WEBPACK_IMPORTED_MODULE_2__asist_7_asist_7__["a" /* Asist_7Page */];
        this.semanas = __WEBPACK_IMPORTED_MODULE_3__asist_15_asist_15__["a" /* Asist_15Page */];
        this.mes = __WEBPACK_IMPORTED_MODULE_4__asist_30_asist_30__["a" /* Asist_30Page */];
        this.cliente = this.navParams.get('cliente');
        console.log(this.cliente);
    }
    CustomerAsistPage.prototype.reportSemana = function () {
        this.navCtrl.push(this.semana, { cliente: this.cliente });
    };
    CustomerAsistPage.prototype.reportSemanas = function () {
        this.navCtrl.push(this.semanas, { cliente: this.cliente });
    };
    CustomerAsistPage.prototype.reportMes = function () {
        this.navCtrl.push(this.mes, { cliente: this.cliente });
    };
    CustomerAsistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerAsistPage');
    };
    CustomerAsistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-customer-asist',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\customer-asist\customer-asist.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Record de asistencias </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card (click)="reportSemana()">\n    <ion-card-header color = "primary">\n      <b> 7 DIAS </b>\n    </ion-card-header>\n    <ion-card-content>\n      <b>DESCRIPCIÓN:</b> ASISTENCIAS EN LA ULTIMA SEMANA\n    </ion-card-content>\n  </ion-card>\n\n    <ion-card (click)="reportSemanas()">\n      <ion-card-header color = "primary">\n        <b> 15 DIAS </b>\n      </ion-card-header>\n      <ion-card-content>\n        <b>DESCRIPCIÓN:</b> ASISTENCIAS EN LAS ULTIMAS 2 SEMANAS\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card (click)="reportMes()">\n      <ion-card-header color = "primary">\n        <b>30 DIAS </b>\n      </ion-card-header>\n      <ion-card-content>\n        <b>DESCRIPCIÓN:</b> ASISTENCIAS EN EL ULTIMO MES\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\customer-asist\customer-asist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CustomerAsistPage);
    return CustomerAsistPage;
}());

//# sourceMappingURL=customer-asist.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asist_7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Asist_7Page = /** @class */ (function () {
    function Asist_7Page(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.cliente = {};
        this.asistencia = [];
        this.funcion = {};
        this.cliente = this.navParams.get('cliente');
        this.funcion = {
            "funcion": "customerAsist7",
            "id": this.cliente['id_cliente']
        };
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.asistencia = res['asistencia'];
            console.log(JSON.stringify(_this.asistencia));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    Asist_7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Asist_7Page');
    };
    Asist_7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-asist-7',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\asist-7\asist-7.html"*/'<ion-header>\n  <ion-navbar color = "primary">\n    <ion-title>Ultima semana</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card *ngFor="let asist of asistencia">\n        <ion-card-header color="primary"> \n          <b>{{ asist.fecha }}</b>\n        </ion-card-header>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\asist-7\asist-7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Asist_7Page);
    return Asist_7Page;
}());

//# sourceMappingURL=asist-7.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asist_15Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Asist_15Page = /** @class */ (function () {
    function Asist_15Page(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.cliente = {};
        this.asistencia = [];
        this.funcion = {};
        this.cliente = this.navParams.get('cliente');
        this.funcion = {
            "funcion": "customerAsist15",
            "id": this.cliente['id_cliente']
        };
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.asistencia = res['asistencia'];
            console.log(JSON.stringify(_this.asistencia));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    Asist_15Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Asist_15Page');
    };
    Asist_15Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-asist-15',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\asist-15\asist-15.html"*/'<ion-header>\n  <ion-navbar color = "primary">\n    <ion-title>Ultimas 2 semanas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card *ngFor="let asist of asistencia">\n      <ion-card-header color="primary"> \n        <b>{{ asist.fecha }}</b>\n      </ion-card-header>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\asist-15\asist-15.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Asist_15Page);
    return Asist_15Page;
}());

//# sourceMappingURL=asist-15.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asist_30Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Asist_30Page = /** @class */ (function () {
    function Asist_30Page(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.cliente = {};
        this.asistencia = [];
        this.funcion = {};
        this.cliente = this.navParams.get('cliente');
        this.funcion = {
            "funcion": "customerAsist30",
            "id": this.cliente['id_cliente']
        };
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.asistencia = res['asistencia'];
            console.log(JSON.stringify(_this.asistencia));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    Asist_30Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Asist_30Page');
    };
    Asist_30Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-asist-30',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\asist-30\asist-30.html"*/'<ion-header>\n  <ion-navbar color = "primary">\n    <ion-title>Ultimo mes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card *ngFor="let asist of asistencia">\n        <ion-card-header color="primary"> \n          <b>{{ asist.fecha }}</b>\n        </ion-card-header>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\asist-30\asist-30.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Asist_30Page);
    return Asist_30Page;
}());

//# sourceMappingURL=asist-30.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
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
 * Generated class for the VentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VentaPage = /** @class */ (function () {
    function VentaPage(navCtrl, http, cl, alert, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.cl = cl;
        this.alert = alert;
        this.navParams = navParams;
        this.disable_pago = true;
        this.disable_cancelar = true;
        this.productos = [];
        this.respaldo_disponibles = [];
        this.disponibilidad_p = {
            val: -1,
            precio: -1,
        };
        this.ticket = {
            id_admin: null,
            activo: '0',
            fecha: new Date().toString(),
            total: 0.0,
            productos: [],
            pago: 0.0,
            cambio: 0.0
        };
        this.hideCantidad = true;
        this.apiUrl = "http://gymdb/";
        this.crearForm();
        this.getProducts();
        this.ticket.id_admin = this.navParams.get('id');
    }
    VentaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VentaPage');
    };
    VentaPage.prototype.getProducts = function () {
        var _this = this;
        var funcion = {
            'funcion': 'getProductosActivos'
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) { _this.productos = res['productos']; console.log(_this.productos); });
    };
    VentaPage.prototype.crearForm = function () {
        this.myForm = this.cl.group({
            index_p: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            cantidad: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^([1-9]\d*)?$/)]],
        });
    };
    VentaPage.prototype.verificarExistencia = function () {
        if (this.disponibilidad_p.val == 0) {
            this.myForm.controls['cantidad'].setValue('');
            console.log(this.myForm.controls['cantidad'].value);
        }
    };
    VentaPage.prototype.onChange = function (ev) {
        console.log(ev);
        this.disponibilidad_p.val = this.productos[parseInt(ev)].disponibles;
        this.disponibilidad_p.precio = this.productos[parseInt(ev)].precio_salida;
        this.verificarExistencia();
    };
    VentaPage.prototype.actionSheet = function () {
        this.hideCantidad = false;
    };
    VentaPage.prototype.addCuantity = function (cantidad, precio) { return cantidad * precio; };
    ; // funcion que calcula el subtotal
    VentaPage.prototype.verifExistensProduct = function (id, cantidad, sub_total_parcial) {
        for (var _i = 0, _a = this.ticket.productos; _i < _a.length; _i++) {
            var sourceRow = _a[_i];
            if (sourceRow.id_producto == id) {
                sourceRow.cantidad = sourceRow.cantidad + cantidad; // suma las cantidades
                sourceRow.subtotal = sourceRow.subtotal + sub_total_parcial; // suma los precios
                return true;
            }
        }
        return false;
    };
    VentaPage.prototype.actualizaVariables = function () {
        this.ticket.activo = '1'; // activa la compra por si acaso
        this.ticket.fecha = new Date().toString(); // actualiza la fecha
        this.disable_pago = false;
        this.disable_cancelar = false;
    };
    // actualiza la disponibilidad del prducto actual
    VentaPage.prototype.disponibilid_producto_actual = function (index) {
        this.disponibilidad_p.val = this.productos[index].disponibles;
    };
    VentaPage.prototype.respaldarCantidadProducto = function (index, cantidad) {
        this.respaldo_disponibles.push({ index: index, cantidad: cantidad });
        this.productos[index].disponibles = parseFloat(this.productos[index].disponibles) - cantidad;
        this.disponibilid_producto_actual(index);
        console.log(this.respaldo_disponibles);
    };
    VentaPage.prototype.importarRespaldoCantidad = function () {
        for (var _i = 0, _a = this.respaldo_disponibles; _i < _a.length; _i++) {
            var Row = _a[_i];
            this.productos[Row.index].disponibles = parseFloat(this.productos[Row.index].disponibles) + Row.cantidad;
        }
        this.respaldo_disponibles = []; // vacia la lista
    };
    VentaPage.prototype.aniadir = function () {
        var index = parseInt(this.myForm.controls['index_p'].value); // obtiene indice del objeto dentro del arreglo
        var producto = this.productos[index]; // obtiene registro del producto
        var cantidad = parseFloat(this.myForm.controls['cantidad'].value); // cantidad temporal que se elijio del producto
        var overflow = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'No hay suficientes productos!!. Cantidad dispoble: ' + producto.disponibles,
            buttons: ['Aceptar']
        });
        if (cantidad > parseFloat(producto.disponibles)) {
            console.log("no hay tantos productos");
            overflow.present();
            return;
        }
        this.actualizaVariables();
        var sub_total_parcial = this.addCuantity(cantidad, parseFloat(producto.precio_salida)); // funcion que retorna el calculo de cantidad de p * precio unitario
        if (this.verifExistensProduct(producto.id_producto, cantidad, sub_total_parcial) == false) {
            console.log("no existe el producto");
            this.ticket.productos.push({ 'index': index, 'id_producto': producto.id_producto, 'nombre': producto.nombre, 'cantidad': cantidad, 'subtotal': sub_total_parcial, 'p_c': producto.precio_entrada, 'p_v': producto.precio_salida }); // lo agrega a la compra
        }
        else {
            console.log("si existe el producto");
        }
        console.log(this.ticket);
        this.ticket.total = this.ticket.total + sub_total_parcial; // va agregando la cantidad total a pagar
        this.respaldarCantidadProducto(index, cantidad); /// respalda la cantidad de producto que se desea comprar
        this.verificarExistencia();
    };
    VentaPage.prototype.cancelarCompra = function () {
        var _this = this;
        if (this.ticket.activo == '1') {
            var act = this.alert.create({
                title: 'ADVERTENCIA',
                message: '¿Desea cancelar la compra?',
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
                            console.log("cancelar compra");
                            //////// LIMPIA EL TICKET  /////
                            _this.lipiarTicket();
                            //////////////////////////////////
                            _this.importarRespaldoCantidad(); // REGRESA LA DISPONIBILIDAD DE PRODUCTOS A COMO ESTABA ANTES DE LA COMRA ACTUAL
                            _this.disponibilid_producto_actual(_this.myForm.controls['index_p'].value); // ACTUALIZA LA DISPONIBILIDAD DEL PRODUCTO ACTUAL
                        }
                    }
                ]
            });
            act.present();
        }
    };
    VentaPage.prototype.lipiarTicket = function () {
        //////// LIMPIA EL TICKET  /////
        this.ticket['activo'] = '0'; /////
        this.ticket['total'] = 0.0; //////
        this.ticket['productos'] = []; ///
        this.ticket['pago'] = 0.0; ///
        this.ticket['cambio'] = 0.0; ///
        this.disable_pago = true; //////
        this.disable_cancelar = true; ///
        //////////////////////////////////
    };
    //////// FUNCION PARA QUITAR UN PRODUCTO DEL TICKET DE COMPRA  /////////
    VentaPage.prototype.quitar = function (index) {
        console.log(index);
        var sub_compra = this.ticket.productos[index]; /// obtiene la subcompra
        this.actualizar_datos_subcompra(parseInt(sub_compra.index), parseFloat(sub_compra.cantidad), parseFloat(sub_compra.subtotal));
        this.removeItemTicket(index);
    };
    VentaPage.prototype.actualizar_datos_subcompra = function (index, cantidad, subtotal) {
        this.productos[index].disponibles += cantidad;
        this.ticket.total -= subtotal;
        if (this.ticket.total <= 0) {
            this.lipiarTicket();
        }
        if (index == parseInt(this.myForm.controls['index_p'].value)) {
            this.disponibilidad_p.val = this.productos[index].disponibles;
        }
    };
    VentaPage.prototype.removeItemTicket = function (index) {
        if (index !== -1) {
            this.ticket.productos.splice(index, 1);
        }
    };
    ///////FIN FUNCION QUITAR ELEMENTO DEL TICKET   /////
    //////// FUNCION PAGAR ////////
    VentaPage.prototype.verificarPago = function () {
        var insuficiente = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'Dinero Insuficiente!!',
            buttons: ['Aceptar']
        });
        console.log(this.ticket.pago);
        if (this.ticket.pago < this.ticket.total) {
            insuficiente.present();
            this.ticket.cambio = 0.0;
            return false;
        }
        this.ticket.cambio = this.ticket.pago - this.ticket.total;
        return true;
    };
    VentaPage.prototype.pagar = function () {
        if (this.verificarPago()) {
            this.enviarDatos();
        }
    };
    VentaPage.prototype.enviarDatos = function () {
        var _this = this;
        // mensajes de estado de operacion
        var error_op = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'No se pudo realizar la compra!!',
            buttons: ['Aceptar']
        });
        var exito = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'Compra realizada con exito!!',
            buttons: ['Aceptar']
        });
        console.log(JSON.stringify(this.ticket));
        this.ticket['funcion'] = 'comprar';
        this.http.post(this.apiUrl, JSON.stringify(this.ticket)) //envia los datos
            .subscribe(function (res) { console.log(res); exito.present(); _this.lipiarTicket(); _this.productos = res['productos']; }, function (error) { console.log(error); error_op.present(); });
    };
    /// FIN FUNCION PAGAR ////////
    VentaPage.prototype.onPagoChange = function () {
        console.log("hola pinche puta");
        if (this.ticket.total == 0) {
            this.ticket.cambio = 0.0;
        }
        else if (this.ticket.pago < this.ticket.total) {
            this.ticket.cambio = 0.0;
        }
        else {
            this.ticket.cambio = this.ticket.pago - this.ticket.total;
        }
    };
    VentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-venta',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\venta\venta.html"*/'<!--\n  Generated template for the VentaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="secondary">\n      <ion-title>Tienda</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n    <ion-content class="master">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card color="success">\n                <form [formGroup]="myForm"  (ngSubmit)="aniadir()" novalidate>\n                    <h2 align="center"><strong>Productos en venta</strong></h2>\n                    <ion-list>\n                        <ion-item>\n                            <ion-label color="primary" icon-start><ion-icon name="list"></ion-icon>Producto:  </ion-label>\n                            <ion-select  formControlName="index_p" (ionChange)="onChange($event)">\n                                <div *ngFor="let tupla of productos; let i = index">\n                                    <ion-option value="{{i}}" >{{tupla.nombre}}\n                                    </ion-option>\n                                   \n                                  </div>\n                            </ion-select>\n                            \n                      </ion-item>\n                      <ion-item *ngIf="myForm.get(\'index_p\').errors && myForm.get(\'index_p\').dirty">\n                          <p color="danger" ion-text *ngIf="myForm.get(\'index_p\').hasError(\'required\')">Field is required</p>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label color="primary" icon-start *ngIf="disponibilidad_p.val == -1"><ion-icon name="logo-buffer"></ion-icon>En existencia: </ion-label>\n                            <ion-label color="primary" icon-start *ngIf="disponibilidad_p.val > 0"><ion-icon name="logo-buffer"></ion-icon>En existencia: {{disponibilidad_p.val}}</ion-label>\n                            <ion-label color="danger" icon-start *ngIf="disponibilidad_p.val == 0"><ion-icon name="logo-buffer"></ion-icon>Producto agotado!!</ion-label>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label color="primary" icon-start *ngIf="disponibilidad_p.precio != -1"><ion-icon name="logo-usd"></ion-icon>Precio unitario: $ {{disponibilidad_p.precio}} MXN</ion-label>\n                            <ion-label color="primary" icon-start *ngIf="disponibilidad_p.precio == -1"><ion-icon name="logo-usd"></ion-icon>Precio unitario: </ion-label>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Cantidad:</ion-label>\n                          <ion-input id="descripcion" type="number" required="true" clearInput=true value="1" formControlName="cantidad"  name ="descripcion"></ion-input>\n                        </ion-item>\n                        <ion-item *ngIf="myForm.get(\'cantidad\').errors && myForm.get(\'cantidad\').dirty">\n                            <p color="danger" ion-text *ngIf="myForm.get(\'cantidad\').hasError(\'required\')">Field is required</p>\n                          </ion-item>\n                          <ion-item *ngIf="myForm.get(\'cantidad\').errors && myForm.get(\'cantidad\').dirty">\n                              <p color="danger" ion-text *ngIf="myForm.get(\'cantidad\').hasError(\'pattern\')">Elejir minimo 1 </p>\n                            </ion-item>\n                                      \n                    </ion-list><br>\n                    <div padding>\n                        <button fill="outline" color="secondary" ion-button block icon-start type="submit" [disabled]="myForm.invalid">\n                            <ion-icon name="cart">   </ion-icon>\n                                Añadir\n                        </button>\n                        \n                      </div>\n                  </form>\n                </ion-card>\n                \n                  <ion-card>\n                      <ion-div>\n                    \n                          <h2 align="center"><strong>Total a pagar: ${{ ticket.total}}</strong></h2>\n                        \n                        <ion-item>\n                          \n                          <ion-label  icon-start color="primary"><ion-icon name="logo-usd"></ion-icon>: </ion-label>\n                          <ion-input  type="number" required="true" clearInput=true  [(ngModel)]="ticket.pago" placeholder="Ingresar dinero a pagar" (ionChange)="onPagoChange()"></ion-input>\n      \n                        </ion-item>\n                        <ion-item>\n                          \n                          <ion-label  icon-start color="primary" ><ion-icon name="cash"></ion-icon>Cambio: $ {{ticket.cambio}} MXN</ion-label>\n                      </ion-item>\n                        <button fill="outline" size="large" color="secondary"  ion-button  icon-start (click)="pagar()" [disabled]="disable_pago">\n                            <ion-icon name="logo-usd"></ion-icon>\n                                Pagar\n                        </button>\n                        <button  size="large" ion-button  icon-start (click)="cancelarCompra()" color="danger" [disabled]="disable_cancelar" fill="outline">\n                          <ion-icon name="trash"></ion-icon>\n                                Cancelar\n                        </button>\n                        \n                        \n                      </ion-div>\n                  </ion-card>\n                    \n  \n  \n                  \n           \n              \n                \n          </ion-col>\n         \n  \n          <ion-col>\n            <ion-card color="light">\n                <p align="center"><strong>TICKET DE COMPRA</strong></p>\n                <p align="left">{{ ticket.fecha }}</p>\n                <ion-row>\n                  <ion-col>\n                     <p><strong> Cantidad</strong></p>\n                  </ion-col>\n                  <ion-col>\n                    <p><strong> Producto</strong></p>\n                  </ion-col>\n                  <ion-col>\n                    <p><strong> Subtotal</strong></p>\n                  </ion-col>\n                  <ion-col>\n                      \n                    </ion-col>\n                </ion-row>\n              <ion-div *ngIf="ticket.activo==1" class="colorb">\n                 \n                  <ion-row *ngFor="let tupla of ticket.productos; let i = index">\n                    <ion-col>\n                      <p>X{{ tupla.cantidad }}</p>\n                  </ion-col>\n                  <ion-col>\n                     <p>{{ tupla.nombre}}</p>\n                  </ion-col>\n                  <ion-col>\n                     <p> {{ tupla.subtotal }}</p>\n                  </ion-col>\n                  <button ion-button clear icon-start (click)="quitar(i)"><ion-icon name="close">Quitar</ion-icon></button>\n                  \n                    </ion-row >\n                    <ion-row >\n                        <ion-col>\n                          \n                      </ion-col>\n                      <ion-col>\n                         \n                      </ion-col>\n                      <ion-col>\n                         <h2><strong>$Total: {{ ticket.total }}</strong></h2>\n                      </ion-col>\n                      <ion-col>\n                         \n                        </ion-col>\n                        </ion-row >\n  \n              </ion-div>\n            </ion-card>\n              \n              \n                \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n       \n   </ion-content>\n        \n    '/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\venta\venta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VentaPage);
    return VentaPage;
}());

//# sourceMappingURL=venta.js.map

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-aparatos/add-aparatos.module": [
		317,
		37
	],
	"../pages/add-cliente/add-cliente.module": [
		318,
		36
	],
	"../pages/add-empleado/add-empleado.module": [
		319,
		35
	],
	"../pages/add-producto/add-producto.module": [
		321,
		34
	],
	"../pages/admin-profile/admin-profile.module": [
		320,
		33
	],
	"../pages/admin/admin.module": [
		322,
		32
	],
	"../pages/all-employees/all-employees.module": [
		323,
		31
	],
	"../pages/all-products/all-products.module": [
		324,
		30
	],
	"../pages/allaparatos/allaparatos.module": [
		325,
		29
	],
	"../pages/allcustomers/allcustomers.module": [
		328,
		28
	],
	"../pages/asist-15/asist-15.module": [
		326,
		27
	],
	"../pages/asist-30/asist-30.module": [
		327,
		26
	],
	"../pages/asist-7/asist-7.module": [
		330,
		25
	],
	"../pages/asistencia-list/asistencia-list.module": [
		329,
		24
	],
	"../pages/asistencia/asistencia.module": [
		331,
		23
	],
	"../pages/customer-asist/customer-asist.module": [
		332,
		22
	],
	"../pages/customer-pay/customer-pay.module": [
		333,
		21
	],
	"../pages/customer-recibe/customer-recibe.module": [
		334,
		20
	],
	"../pages/customer/customer.module": [
		335,
		19
	],
	"../pages/historial-aparatos/historial-aparatos.module": [
		346,
		18
	],
	"../pages/inf-cliente/inf-cliente.module": [
		336,
		17
	],
	"../pages/info-empleado/info-empleado.module": [
		337,
		16
	],
	"../pages/list-pack/list-pack.module": [
		338,
		15
	],
	"../pages/list-pay/list-pay.module": [
		339,
		14
	],
	"../pages/login/login.module": [
		340,
		13
	],
	"../pages/modif-empleado/modif-empleado.module": [
		341,
		12
	],
	"../pages/modif-product/modif-product.module": [
		350,
		11
	],
	"../pages/modifaparato/modifaparato.module": [
		343,
		10
	],
	"../pages/modifcliente/modifcliente.module": [
		344,
		9
	],
	"../pages/modify-pack/modify-pack.module": [
		342,
		8
	],
	"../pages/modify-pay/modify-pay.module": [
		345,
		7
	],
	"../pages/pack-details/pack-details.module": [
		347,
		6
	],
	"../pages/pack/pack.module": [
		348,
		5
	],
	"../pages/pay/pay.module": [
		349,
		4
	],
	"../pages/producto-details/producto-details.module": [
		351,
		3
	],
	"../pages/recibe-pay/recibe-pay.module": [
		354,
		2
	],
	"../pages/reportes/reportes.module": [
		353,
		1
	],
	"../pages/venta/venta.module": [
		352,
		0
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
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_customer_customer__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_cliente_add_cliente__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inf_cliente_inf_cliente__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_allcustomers_allcustomers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modifcliente_modifcliente__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_list_pay_list_pay__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_recibe_pay_recibe_pay__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_aparatos_add_aparatos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_allaparatos_allaparatos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modifaparato_modifaparato__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_add_empleado_add_empleado__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_pack_details_pack_details__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_pack_pack__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_list_pack_list_pack__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_modify_pack_modify_pack__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_modify_pay_modify_pay__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_all_employees_all_employees__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_info_empleado_info_empleado__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_modif_empleado_modif_empleado__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_asistencia_list_asistencia_list__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_asistencia_asistencia__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_pay_pay__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_historial_aparatos_historial_aparatos__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_ngx__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_reportes_reportes__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_customer_pay_customer_pay__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_customer_asist_customer_asist__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_customer_recibe_customer_recibe__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_asist_15_asist_15__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_asist_7_asist_7__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_asist_30_asist_30__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_add_producto_add_producto__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_modif_product_modif_product__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_all_products_all_products__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_venta_venta__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_admin_profile_admin_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_producto_details_producto_details__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_cliente_add_cliente__["a" /* AddClientePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inf_cliente_inf_cliente__["a" /* InfClientePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_allcustomers_allcustomers__["a" /* AllcustomersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modifcliente_modifcliente__["a" /* ModifclientePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_pay_list_pay__["a" /* ListPayPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recibe_pay_recibe_pay__["a" /* RecibePayPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_aparatos_add_aparatos__["a" /* AddAparatosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_allaparatos_allaparatos__["a" /* AllaparatosPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modifaparato_modifaparato__["a" /* ModifaparatoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_add_empleado_add_empleado__["a" /* AddEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pack_details_pack_details__["a" /* PackDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pack_pack__["a" /* PackPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_list_pack_list_pack__["a" /* ListPackPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_modify_pack_modify_pack__["a" /* ModifyPackPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_modify_pay_modify_pay__["a" /* ModifyPayPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_all_employees_all_employees__["a" /* AllEmployeesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_info_empleado_info_empleado__["a" /* InfoEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_modif_empleado_modif_empleado__["a" /* ModifEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_asistencia_list_asistencia_list__["a" /* AsistenciaListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_asistencia_asistencia__["a" /* AsistenciaPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_historial_aparatos_historial_aparatos__["a" /* HistorialAparatosPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_reportes_reportes__["a" /* ReportesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_customer_pay_customer_pay__["a" /* CustomerPayPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_customer_asist_customer_asist__["a" /* CustomerAsistPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_customer_recibe_customer_recibe__["a" /* CustomerRecibePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_asist_15_asist_15__["a" /* Asist_15Page */],
                __WEBPACK_IMPORTED_MODULE_38__pages_asist_7_asist_7__["a" /* Asist_7Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_asist_30_asist_30__["a" /* Asist_30Page */],
                __WEBPACK_IMPORTED_MODULE_40__pages_add_producto_add_producto__["a" /* AddProductoPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_modif_product_modif_product__["a" /* ModifProductPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_all_products_all_products__["a" /* AllProductsPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_venta_venta__["a" /* VentaPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_admin_profile_admin_profile__["a" /* AdminProfilePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_producto_details_producto_details__["a" /* ProductoDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-aparatos/add-aparatos.module#AddAparatosPageModule', name: 'AddAparatosPage', segment: 'add-aparatos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-cliente/add-cliente.module#AddClientePageModule', name: 'AddClientePage', segment: 'add-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-empleado/add-empleado.module#AddEmpleadoPageModule', name: 'AddEmpleadoPage', segment: 'add-empleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-profile/admin-profile.module#AdminProfilePageModule', name: 'AdminProfilePage', segment: 'admin-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-producto/add-producto.module#AddProductoPageModule', name: 'AddProductoPage', segment: 'add-producto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-employees/all-employees.module#AllEmployeesPageModule', name: 'AllEmployeesPage', segment: 'all-employees', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-products/all-products.module#AllProductsPageModule', name: 'AllProductsPage', segment: 'all-products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allaparatos/allaparatos.module#AllaparatosPageModule', name: 'AllaparatosPage', segment: 'allaparatos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asist-15/asist-15.module#Asist_15PageModule', name: 'Asist_15Page', segment: 'asist-15', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asist-30/asist-30.module#Asist_30PageModule', name: 'Asist_30Page', segment: 'asist-30', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allcustomers/allcustomers.module#AllcustomersPageModule', name: 'AllcustomersPage', segment: 'allcustomers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asistencia-list/asistencia-list.module#AsistenciaListPageModule', name: 'AsistenciaListPage', segment: 'asistencia-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asist-7/asist-7.module#Asist_7PageModule', name: 'Asist_7Page', segment: 'asist-7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asistencia/asistencia.module#AsistenciaPageModule', name: 'AsistenciaPage', segment: 'asistencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-asist/customer-asist.module#CustomerAsistPageModule', name: 'CustomerAsistPage', segment: 'customer-asist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-pay/customer-pay.module#CustomerPayPageModule', name: 'CustomerPayPage', segment: 'customer-pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-recibe/customer-recibe.module#CustomerRecibePageModule', name: 'CustomerRecibePage', segment: 'customer-recibe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer/customer.module#CustomerPageModule', name: 'CustomerPage', segment: 'customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inf-cliente/inf-cliente.module#InfClientePageModule', name: 'InfClientePage', segment: 'inf-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-empleado/info-empleado.module#InfoEmpleadoPageModule', name: 'InfoEmpleadoPage', segment: 'info-empleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-pack/list-pack.module#ListPackPageModule', name: 'ListPackPage', segment: 'list-pack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-pay/list-pay.module#ListPayPageModule', name: 'ListPayPage', segment: 'list-pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modif-empleado/modif-empleado.module#ModifEmpleadoPageModule', name: 'ModifEmpleadoPage', segment: 'modif-empleado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modify-pack/modify-pack.module#ModifyPackPageModule', name: 'ModifyPackPage', segment: 'modify-pack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifaparato/modifaparato.module#ModifaparatoPageModule', name: 'ModifaparatoPage', segment: 'modifaparato', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifcliente/modifcliente.module#ModifclientePageModule', name: 'ModifclientePage', segment: 'modifcliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modify-pay/modify-pay.module#ModifyPayPageModule', name: 'ModifyPayPage', segment: 'modify-pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historial-aparatos/historial-aparatos.module#HistorialAparatosPageModule', name: 'HistorialAparatosPage', segment: 'historial-aparatos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pack-details/pack-details.module#PackDetailsPageModule', name: 'PackDetailsPage', segment: 'pack-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pack/pack.module#PackPageModule', name: 'PackPage', segment: 'pack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modif-product/modif-product.module#ModifProductPageModule', name: 'ModifProductPage', segment: 'modif-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto-details/producto-details.module#ProductoDetailsPageModule', name: 'ProductoDetailsPage', segment: 'producto-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/venta/venta.module#VentaPageModule', name: 'VentaPage', segment: 'venta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reportes/reportes.module#ReportesPageModule', name: 'ReportesPage', segment: 'reportes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recibe-pay/recibe-pay.module#RecibePayPageModule', name: 'RecibePayPage', segment: 'recibe-pay', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inf_cliente_inf_cliente__["a" /* InfClientePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_allcustomers_allcustomers__["a" /* AllcustomersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modifcliente_modifcliente__["a" /* ModifclientePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_pay_list_pay__["a" /* ListPayPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recibe_pay_recibe_pay__["a" /* RecibePayPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_aparatos_add_aparatos__["a" /* AddAparatosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_allaparatos_allaparatos__["a" /* AllaparatosPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modifaparato_modifaparato__["a" /* ModifaparatoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_add_empleado_add_empleado__["a" /* AddEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pack_details_pack_details__["a" /* PackDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pack_pack__["a" /* PackPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_list_pack_list_pack__["a" /* ListPackPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_modify_pack_modify_pack__["a" /* ModifyPackPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_modify_pay_modify_pay__["a" /* ModifyPayPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_all_employees_all_employees__["a" /* AllEmployeesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_info_empleado_info_empleado__["a" /* InfoEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_modif_empleado_modif_empleado__["a" /* ModifEmpleadoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_asistencia_list_asistencia_list__["a" /* AsistenciaListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_asistencia_asistencia__["a" /* AsistenciaPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_historial_aparatos_historial_aparatos__["a" /* HistorialAparatosPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_reportes_reportes__["a" /* ReportesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_customer_pay_customer_pay__["a" /* CustomerPayPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_customer_asist_customer_asist__["a" /* CustomerAsistPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_customer_recibe_customer_recibe__["a" /* CustomerRecibePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_asist_15_asist_15__["a" /* Asist_15Page */],
                __WEBPACK_IMPORTED_MODULE_38__pages_asist_7_asist_7__["a" /* Asist_7Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_asist_30_asist_30__["a" /* Asist_30Page */],
                __WEBPACK_IMPORTED_MODULE_40__pages_add_producto_add_producto__["a" /* AddProductoPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_modif_product_modif_product__["a" /* ModifProductPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_all_products_all_products__["a" /* AllProductsPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_venta_venta__["a" /* VentaPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_admin_profile_admin_profile__["a" /* AdminProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_cliente_add_cliente__["a" /* AddClientePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_producto_details_producto_details__["a" /* ProductoDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_ngx__["a" /* File */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer__ = __webpack_require__(132);
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
        var Inactivo = this.alerta.create({
            title: 'Cuenta Inactiva',
            message: 'Acceso denegado, consulta tu situación con la administración',
            buttons: ['Ok']
        });
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
                    if (res['activo'] == "1") {
                        _this.presentLoading();
                        _this.navCtrl.push(_this.custumer, { cliente: res });
                    }
                    else {
                        Inactivo.present();
                    }
                }
                else if (res['tipo'] == "2") {
                    if (res['activo'] == "1") {
                        _this.presentLoading();
                        _this.navCtrl.push(_this.admin, { admin: res });
                    }
                }
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=secondary>\n    <ion-title>Acceso</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="inicio">\n  <ion-grid>\n    <ion-row>\n\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <ion-card text-center class="bienvenido">\n        \n          <ion-card-content>\n          <h2><strong>Bienvenido</strong></h2>\n          <br>\n          <ion-icon name="person"></ion-icon>\n          <br><br>\n          \n          <form name="cuenta">\n              \n              <ion-list>\n                <ion-item >\n                  <ion-label stacked>Usuario</ion-label>\n                  <ion-input type="text" [(ngModel)]="datos.user" name ="nombre" required></ion-input>\n                </ion-item>\n                    \n                <ion-item>\n                  <ion-label stacked>Contraseña</ion-label>\n                  <ion-input type="password" [(ngModel)]="datos.password" name ="password"></ion-input>\n                </ion-item>\n              </ion-list><br>\n\n              <ion-buttons>\n                  <button ion-button round color=primary type="submit" (click) ="access()" size="large">Iniciar Sesión</button>\n              </ion-buttons>             \n            </form>      \n            \n        </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllcustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inf_cliente_inf_cliente__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modifcliente_modifcliente__ = __webpack_require__(118);
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
            message: 'La operación se realizó con éxito!!',
            buttons: ['Aceptar']
        });
        this.op_cancel = this.alert.create({
            title: 'ERROR',
            message: 'Hubo problemas al realizar la operación!!',
            buttons: ['Aceptar']
        });
        this.filtro.val = "1"; //inicializa el filtro
        this.filtro_aux = "1"; //no servira para comprobar si hay un cambio de filtro
        this.actualizar(); // funcion que obtiene los datos de la base de datos
    }
    // obtiene los datos de las llaves foraneas, y el nombre por sepa
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
        this.navCtrl.push(this.modif, { cliente: cliente }); // envia los datos para modificarse
    };
    // funcion de eliminar cliente
    AllcustomersPage.prototype.eliminar = function (cliente) {
        var _this = this;
        var elim = this.alert.create({
            title: 'ADVERTENCIA',
            message: '¿Seguro que desea eliminarlo?',
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
            message: '¿Activar cliente?',
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
        if (cliente.activo == '0') {
            this.presentActionSheetInact(cliente);
        }
        else {
            this.presentActionSheetAct(cliente);
        }
    };
    AllcustomersPage.prototype.verFiltro = function () {
        if (this.filtro.val != this.filtro_aux) {
            this.presentLoading();
            this.filtro_aux = this.filtro.val;
            this.initializeItems(); // funcion que inicializa la lista auxiliar segun el caso
        }
    };
    AllcustomersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-allcustomers',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\allcustomers\allcustomers.html"*/'<!--\n  Generated template for the AllcustomersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Clientes</ion-title>\n      </ion-navbar>\n      \n  <ion-searchbar placeholder="buscar" (ionInput)="getItems($event)">\n\n  </ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-select [(ngModel)]="filtro.val">\n                  <ion-option value="0">Todos</ion-option>\n                  <ion-option value="1">Activos</ion-option>\n                  <ion-option value="2">Inactivos</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n      \n            </ion-col>\n            <ion-col>\n      \n            </ion-col>\n            <ion-col>\n              <div text-right>\n                <button ion-button outline icon-start (click)="verFiltro()">\n                  <ion-icon name="search"> </ion-icon> Filtrar </button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  </ion-card>\n  \n     <ion-item *ngFor="let cliente of items" (click)="actionSheet(cliente)">\n          <ion-thumbnail item-start>\n            <img src="http://gymdb/imgs/customers/{{ cliente.foto }}">\n          </ion-thumbnail>\n          <h2 class="colorh2"><b>{{ cliente.Nombre }}</b></h2>\n          <p><b>ID: </b>{{ cliente.id_cliente }}</p>\n          \n          <p align="right" class="bluetext" *ngIf="cliente.activo==\'1\'" color="secondary">ACTIVO</p>\n          <p align="right" class="redtext" *ngIf="cliente.activo==\'0\'" color="danger">INACTIVO</p>\n\n        </ion-item>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\allcustomers\allcustomers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AllcustomersPage);
    return AllcustomersPage;
}());

//# sourceMappingURL=allcustomers.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllaparatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifaparato_modifaparato__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historial_aparatos_historial_aparatos__ = __webpack_require__(120);
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
        this.historial = __WEBPACK_IMPORTED_MODULE_4__historial_aparatos_historial_aparatos__["a" /* HistorialAparatosPage */];
        this.id_empleado = {};
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
            message: 'La operación se realizó con éxito!!',
            buttons: ['Aceptar']
        });
        this.op_cancel = this.alert.create({
            title: 'ERROR',
            message: 'Hubo problemas al realizar la operación!!',
            buttons: ['Aceptar']
        });
        this.filtro.val = this.navParams.get('filtro'); //inicializa el filtro
        this.filtro_aux = this.navParams.get('filtro'); //no servira para comprobar si hay un cambio de filtro
        this.actualizar(); // funcion que obtiene los datos de la base de datos
        this.id_empleado = this.navParams.get('id');
    }
    AllaparatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllaparatosPage');
    };
    AllaparatosPage.prototype._historial = function () {
        this.navCtrl.push(this.historial);
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
                        aparato['filtro'] = _this.filtro.val;
                        _this.navCtrl.push(_this.modificar, { aparato: aparato, id: _this.id_empleado });
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
            selector: 'page-allaparatos',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\allaparatos\allaparatos.html"*/'<!--\n  Generated template for the AllaparatosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Aparatos</ion-title>\n    </ion-navbar>\n    \n<ion-searchbar placeholder="buscar" (ionInput)="getItems($event)">\n\n</ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-col>\n        <div text-right>\n          <button ion-button outline icon-start (click)="_historial()">\n            <ion-icon name="clipboard"> </ion-icon> Historial </button>\n        </div>\n      </ion-col> \n  <ion-card>\n      \n      <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-select [(ngModel)]="filtro.val">\n                  <ion-option value="1">En  Funcionamieto</ion-option>\n                  <ion-option value="2">En Mantenimiento</ion-option>\n                  <ion-option value="3">Fuera de Servicio</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n      \n            </ion-col>\n            <ion-col>\n      \n            </ion-col>\n            <ion-col>\n              <div text-right>\n                <button ion-button outline icon-start (click)="verFiltro()">\n                  <ion-icon name="search"> </ion-icon> Filtrar </button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  </ion-card>\n \n  \n  \n\n   <ion-item *ngFor="let aparato of items" (click)="actionSheet(aparato)">\n     <h2 class="colorh2" ><b> {{ aparato.nombre }}</b></h2>\n        <p align="right" class="bluetext" *ngIf="aparato.estado==\'1\'" color="secondary">EN FUNCIONAMIENTO</p>\n        <p align="right" class="greentext" *ngIf="aparato.estado==\'2\'" color="gray">EN MANTENIMIENTO</p>\n        <p align="right" class="redtext" *ngIf="aparato.estado==\'3\'" color="danger">FUERA DE SERVICIO</p>\n        <p align="left"><strong>ID: </strong> {{ aparato.id}}</p>\n        <p align="left"><strong>DESCRIPCION: </strong> {{ aparato.descripcion }}</p>\n\n      </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\allaparatos\allaparatos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AllaparatosPage);
    return AllaparatosPage;
}());

//# sourceMappingURL=allaparatos.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recibe_pay_recibe_pay__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modify_pay_modify_pay__ = __webpack_require__(122);
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
            title: 'ERROR',
            message: 'No se ha podido eliminar pago correctamente',
            buttons: ['OK']
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
            message: '¿Seguro que desea ELIMINAR pago?',
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
            selector: 'page-list-pay',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\list-pay\list-pay.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Pagos</ion-title>\n  </ion-navbar>\n  <ion-searchbar placeholder="Buscar pago por id de pago" (ionInput)="getItems($event)">\n\n  </ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-card *ngFor="let pagos of items" (click)="actionSheet(pagos)">\n  <ion-card-header color="primary"> \n    <b>{{ pagos.fecha_pago }}</b>\n  </ion-card-header>\n        \n  <ion-card-content>\n      <strong>ID:</strong> {{pagos.id_pago}} <br>\n      <strong>ID CLIENTE:</strong> {{pagos.id_cliente }} <br>\n  </ion-card-content>\n</ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\list-pay\list-pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPayPage);
    return ListPayPage;
}());

//# sourceMappingURL=list-pay.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pack_details_pack_details__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modify_pack_modify_pack__ = __webpack_require__(125);
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
            title: 'ERROR',
            message: 'No se ha podido eliminar paquete correctamente',
            buttons: ['OK']
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
            message: '¿Seguro que desea ELIMINAR paquete?',
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
            message: '¿Seguro que desea ACTIVAR paquete?',
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
            selector: 'page-list-pack',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\list-pack\list-pack.html"*/'<ion-header>\n  <ion-navbar color = "primary">\n    <ion-title>Paquetes</ion-title>\n  </ion-navbar>\n  <ion-searchbar placeholder="Buscar paquete por nombre" (ionInput)="getItems($event)">\n\n  </ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-select [(ngModel)]="filtro.val">\n              <ion-option value="0">Todos</ion-option>\n              <ion-option value="1">Activos</ion-option>\n              <ion-option value="2">Inactivos</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n \n        </ion-col>\n        <ion-col>\n \n        </ion-col>\n        <ion-col>\n          <div text-right>\n            <button ion-button outline icon-start (click)="verFiltro()">\n              <ion-icon name="search"> </ion-icon> Filtrar </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n            \n  </ion-card>\n\n  <ion-card *ngFor="let pack of items" (click)="actionSheet(pack)">\n    <ion-card-header color="primary"> \n      <b>{{ pack.nombre }}</b>\n    </ion-card-header>\n              \n    <ion-card-content>\n      <strong>ID:</strong> {{pack.id}} <br>\n      <strong>DESCRIPCIÓN:</strong>  {{pack.descripcion}} <br>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\list-pack\list-pack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPackPage);
    return ListPackPage;
}());

//# sourceMappingURL=list-pack.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllEmployeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_empleado_info_empleado__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modif_empleado_modif_empleado__ = __webpack_require__(127);
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
 * Generated class for the AllEmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllEmployeesPage = /** @class */ (function () {
    function AllEmployeesPage(navCtrl, navParams, http, actionsheet, alert, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.actionsheet = actionsheet;
        this.alert = alert;
        this.loading = loading;
        // paginas
        this.info_empleado = __WEBPACK_IMPORTED_MODULE_3__info_empleado_info_empleado__["a" /* InfoEmpleadoPage */];
        this.modif = __WEBPACK_IMPORTED_MODULE_4__modif_empleado_modif_empleado__["a" /* ModifEmpleadoPage */];
        this.apiUrl = "http://gymdb/"; //direccion del servidor
        this.empleados = []; //lista de empleados
        this.items = []; //lista auxiliar
        this.datos_extra = {}; //se guardan los datos de las llaves foraneas, y el nombre por separado
        this.filtro = {
            val: null
        };
        this.filtro_aux = "";
        this.funcion = {
            "funcion": "getAllEmployees" //funcoin 
        };
        //alertas
        this.success = this.alert.create({
            title: 'OPERACION EXITOSA',
            message: 'La operación se realizó con éxito!!',
            buttons: ['Aceptar']
        });
        this.op_cancel = this.alert.create({
            title: 'ERROR',
            message: 'Hubo problemas al realizar la operación!!',
            buttons: ['Aceptar']
        });
        //modificaciones
        this.filtro.val = "1"; //inicializa el filtro
        this.filtro_aux = "1"; //no servira para comprobar si hay un cambio de filtro
        this.actualizar(); // funcion que obtiene los datos de la base de datos
    }
    AllEmployeesPage.prototype.presentLoading = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 100
        });
        loader.present();
    };
    AllEmployeesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllEmployeesPage');
    };
    AllEmployeesPage.prototype.actualizar = function () {
        var _this = this;
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            //console.log(res);
            _this.empleados = res['empleados'];
            //this.items=this.clientes;  // inicializa la lista auxiliar
            _this.initializeItems(); // llama a la funcion de inicializar, para que muestre segun el filtro
            console.log(JSON.stringify(_this.empleados));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    AllEmployeesPage.prototype.initializeItems = function () {
        if (this.filtro.val == "0") {
            this.items = this.empleados;
        }
        else if (this.filtro.val == "1") {
            this.inicializarActivos();
        }
        else if (this.filtro.val == "2") {
            this.inicializarInactivos();
        }
    };
    AllEmployeesPage.prototype.inicializarActivos = function () {
        this.items = this.empleados.filter(function (empleado) {
            console.log(JSON.stringify(JSON.stringify(empleado.Nombre)));
            return empleado.activo == '1';
        });
        console.log(JSON.stringify(this.items));
    };
    AllEmployeesPage.prototype.inicializarInactivos = function () {
        this.items = this.empleados.filter(function (empleado) {
            console.log(JSON.stringify(JSON.stringify(empleado.Nombre)));
            return empleado.activo == '0';
        });
        console.log(JSON.stringify(this.items));
    };
    // barra de busqueda
    AllEmployeesPage.prototype.getItems = function (ev) {
        this.initializeItems(); // inicializa la lista auxiliar segun  el caso de filtro
        console.log(ev.target.value);
        var val = ev.target.value;
        if (val != '') {
            val = ev.target.value.toUpperCase();
        }
        this.items = this.items.filter(function (empleado) {
            console.log(JSON.stringify(JSON.stringify(empleado.Nombre)));
            return empleado.Nombre.includes(val);
        });
        console.log(JSON.stringify(this.empleados));
    };
    AllEmployeesPage.prototype.verFiltro = function () {
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
    // obtiene los datos de las llaves foraneas, y el nombre por sepa
    AllEmployeesPage.prototype.getElements = function (empleado) {
        var _this = this;
        this.datos_extra = {
            'id_access': empleado['id_acceso'],
            'funcion': 'getAccesoEmployee'
        };
        if (this.datos_extra['id_access']) {
            this.http.post(this.apiUrl, JSON.stringify(this.datos_extra))
                .subscribe(function (res) {
                console.log(res);
                _this.datos_extra['user'] = res['user'];
                _this.datos_extra['password'] = res['password'];
                console.log("Datos: ");
                console.log(JSON.stringify(_this.datos_extra));
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.datos_extra['user'] = '0';
            this.datos_extra['password'] = '0';
        }
    };
    // funcion de modificar cliente
    AllEmployeesPage.prototype.modificar = function (empleado) {
        empleado['user'] = this.datos_extra['user'];
        empleado['password'] = this.datos_extra['password'];
        console.log(JSON.stringify(empleado));
        this.navCtrl.push(this.modif, { empleado: empleado }); // envia los datos para modificarse
        //this.actualizar();
    };
    // funcion de eliminar cliente
    AllEmployeesPage.prototype.eliminar = function (empleado) {
        var _this = this;
        var elim = this.alert.create({
            title: 'ADVERTENCIA',
            message: '¿Seguro que desea eliminarlo?',
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
                        empleado['funcion'] = "eliminarEmpleado";
                        _this.http.post(_this.apiUrl, JSON.stringify(empleado))
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
    AllEmployeesPage.prototype.activarEmpleado = function (empleado) {
        var _this = this;
        var act = this.alert.create({
            title: 'ADVERTENCIA',
            message: '¿Activar empleado?',
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
                        empleado['funcion'] = "activarEmpleado";
                        _this.http.post(_this.apiUrl, JSON.stringify(empleado))
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
    // muestra un menu para clientes inactivos
    AllEmployeesPage.prototype.presentActionSheetInact = function (empleado) {
        var _this = this;
        var action = this.actionsheet.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Detalles',
                    role: 'detalles',
                    handler: function () {
                        console.log('Detalles clicked');
                        empleado['user'] = _this.datos_extra['user'];
                        empleado['password'] = _this.datos_extra['password'];
                        _this.navCtrl.push(_this.info_empleado, { empleado: empleado });
                    }
                },
                {
                    text: 'Activar',
                    role: 'activar',
                    handler: function () {
                        console.log('activar clicked');
                        _this.activarEmpleado(empleado);
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
    }; // muestra un menu para clientes activos
    AllEmployeesPage.prototype.presentActionSheetAct = function (empleado) {
        var _this = this;
        var action = this.actionsheet.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Detalles',
                    role: 'detalles',
                    handler: function () {
                        console.log('Detalles clicked');
                        empleado['user'] = _this.datos_extra['user'];
                        empleado['password'] = _this.datos_extra['password'];
                        _this.navCtrl.push(_this.info_empleado, { empleado: empleado });
                    }
                },
                {
                    text: 'Modificar',
                    role: 'detalles',
                    handler: function () {
                        console.log('modificar clicked');
                        _this.modificar(empleado); // llama a la funcion de modificar
                    }
                },
                {
                    text: 'Eliminar',
                    role: 'eliminar',
                    handler: function () {
                        console.log('Eliminar clicked');
                        _this.eliminar(empleado);
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
    // menu desplegable
    AllEmployeesPage.prototype.actionSheet = function (empleado) {
        console.log("action sheet");
        this.getElements(empleado);
        if (empleado.activo == '0') {
            this.presentActionSheetInact(empleado);
        }
        else {
            this.presentActionSheetAct(empleado);
        }
        //this.presentLoading();
        //this.actualizar();   // actualiza los datos 
    };
    AllEmployeesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-all-employees',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\all-employees\all-employees.html"*/'<!--\n  Generated template for the AllEmployeesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Empleados</ion-title>\n    </ion-navbar>\n    \n<ion-searchbar placeholder="buscar" (ionInput)="getItems($event)">\n\n</ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-select [(ngModel)]="filtro.val">\n                  <ion-option value="0">Todos</ion-option>\n                  <ion-option value="1">Activos</ion-option>\n                  <ion-option value="2">Inactivos</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n      \n            </ion-col>\n            <ion-col>\n      \n            </ion-col>\n            <ion-col>\n              <div text-right>\n                <button ion-button outline icon-start (click)="verFiltro()">\n                  <ion-icon name="search"> </ion-icon> Filtrar </button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  </ion-card>\n  \n  \n\n   <ion-item *ngFor="let empleado of items" (click)="actionSheet(empleado)">\n        <ion-thumbnail item-start>\n          <img src="http://gymdb/imgs/employees/{{ empleado.foto }}">\n        </ion-thumbnail>\n        <h2 class="colorh2"><b>{{ empleado.Nombre }}</b></h2>\n        <p><b>ID: </b>{{ empleado.id_empleado }}</p>\n        \n        <p align="right" class="bluetext" *ngIf="empleado.activo==\'1\'" color="secondary">ACTIVO</p>\n        <p align="right" class="redtext" *ngIf="empleado.activo==\'0\'" color="danger">INACTIVO</p>\n\n      </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\all-employees\all-employees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AllEmployeesPage);
    return AllEmployeesPage;
}());

//# sourceMappingURL=all-employees.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenciaListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsistenciaListPage = /** @class */ (function () {
    function AsistenciaListPage(navCtrl, http, actionsheet, alert, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionsheet = actionsheet;
        this.alert = alert;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.asistencia = [];
        this.items = [];
        this.funcion = {
            "funcion": "getAsistToday"
        };
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.asistencia = res['asistencia'];
            _this.initializeItems();
            console.log(JSON.stringify(_this.asistencia));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    AsistenciaListPage.prototype.initializeItems = function () {
        this.items = this.asistencia;
    };
    AsistenciaListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AsistenciaListPage');
    };
    AsistenciaListPage.prototype.getItems = function (ev) {
        this.initializeItems();
        console.log(ev.target.value);
        var val = ev.target.value.toUpperCase();
        this.items = this.items.filter(function (asist) {
            console.log(JSON.stringify(JSON.stringify(asist.name)));
            return asist.name.includes(val);
        });
        console.log(JSON.stringify(this.asistencia));
    };
    AsistenciaListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-asistencia-list',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\asistencia-list\asistencia-list.html"*/'\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Asistencia de hoy</ion-title>\n    </ion-navbar>\n    <ion-searchbar placeholder="Buscar cliente por nombre" (ionInput)="getItems($event)">\n  \n    </ion-searchbar>\n  </ion-header>\n  \n  <ion-content padding>\n\n      <ion-card *ngFor="let asistencias of items">\n          <ion-card-header color="primary"> \n            <b>{{ asistencias.name }}</b>\n          </ion-card-header>\n                \n          <ion-card-content>\n              <strong>VENCIMIENTO:</strong> {{asistencias.fecha_vencimiento}} <br>\n          </ion-card-content>\n        </ion-card>\n    \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\asistencia-list\asistencia-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AsistenciaListPage);
    return AsistenciaListPage;
}());

//# sourceMappingURL=asistencia-list.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_products_all_products__ = __webpack_require__(60);
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
 * Generated class for the ModifProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifProductPage = /** @class */ (function () {
    function ModifProductPage(navCtrl, navParams, alert, http, cl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.http = http;
        this.cl = cl;
        //pagina de productos
        this.all = __WEBPACK_IMPORTED_MODULE_4__all_products_all_products__["a" /* AllProductsPage */];
        this.producto = {}; // el producto se envía por parámetro
        this.comp = {}; // es una copia del registro original
        this.apiUrl = "http://gymdb/"; // servidor
        this.producto = this.navParams.get('producto');
        this.crearForm();
        this.crearCopia();
    }
    // crea el form
    ModifProductPage.prototype.crearForm = function () {
        this.myForm = this.cl.group({
            producto: [this.producto['id_producto']],
            nuevo_producto: [this.producto['nombre'], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            descripcion: [this.producto['descripcion'], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            precio_entrada: [this.producto['precio_entrada'], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            precio_salida: [this.producto['precio_salida'], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            cantidad: [this.producto['cantidad'], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            proveedor: [this.producto['proveedor'], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
    };
    // sirve para en un futuro compararlo con los nuevos datos
    ModifProductPage.prototype.crearCopia = function () {
        this.comp = {
            'producto': this.producto['id_producto'],
            'nuevo_producto': this.producto['nombre'],
            'descripcion': this.producto['descripcion'],
            'precio_entrada': this.producto['precio_entrada'],
            'precio_salida': this.producto['precio_salida'],
            'cantidad': this.producto['cantidad'],
            'proveedor': this.producto['proveedor']
        };
    };
    ModifProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifProductPage');
    };
    ModifProductPage.prototype.saveData = function () {
        var _this = this;
        var error = this.alert.create({
            title: 'OPERACION CANCELADA',
            message: 'No se han modificado datos!!',
            buttons: ['Aceptar']
        });
        if (JSON.stringify(this.myForm.value) != JSON.stringify(this.comp)) {
            var success_1 = this.alert.create({
                title: 'OPERACION EXITOSA',
                message: 'Agregado correctamente!!',
                buttons: ['Aceptar']
            });
            var product_rep_1 = this.alert.create({
                title: 'OPERACION CANCELADA',
                message: 'Ya existen productos con ese nombre!!',
                buttons: ['Aceptar']
            });
            var mayus = this.myForm.controls['nuevo_producto'].value;
            var desc = this.myForm.controls['descripcion'].value;
            var prov = this.myForm.controls['proveedor'].value;
            if (mayus != null) {
                mayus = mayus.toUpperCase();
                this.myForm.controls['nuevo_producto'].setValue(mayus); // covierte a mayuscula el producto
            }
            if (desc != null) {
                desc = desc.toUpperCase();
                this.myForm.controls['descripcion'].setValue(desc);
            }
            if (prov != null) {
                prov = prov.toUpperCase();
                this.myForm.controls['proveedor'].setValue(prov);
            }
            console.log((this.myForm.value));
            var obj = JSON.parse(JSON.stringify(this.myForm.value));
            obj['funcion'] = 'modifProducto';
            console.log(obj);
            this.http.post(this.apiUrl, JSON.stringify(obj))
                .subscribe(function (res) {
                console.log("res del server");
                console.log(res);
                if (res == "exito") {
                    success_1.present();
                    _this.navCtrl.push(_this.all);
                }
                else if (res == "product_rep") {
                    product_rep_1.present();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            error.present();
        }
    };
    ModifProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modif-product',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modif-product\modif-product.html"*/'<!--\n  Generated template for the AddProductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Modificar Producto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-center classss="Datos">\n        \n          <ion-card-content>\n          <h2><strong >Modificar</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                \n                 <ion-div>\n                  <ion-item >\n                    <ion-label stack color = "primary" icon-start><ion-icon name="add-circle"></ion-icon>Nombre Producto:</ion-label>\n                    <ion-input id="otro" type="text" formControlName="nuevo_producto"  name ="otro"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'nuevo_producto\').errors && myForm.get(\'nuevo_producto\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'nuevo_producto\').hasError(\'required\')">Field is required</p>\n                 </ion-item>\n                  <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Descripcion:</ion-label>\n                    <ion-input id="descripcion" type="text" formControlName="descripcion"  name ="descripcion"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'descripcion\').errors && myForm.get(\'descripcion\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'descripcion\').hasError(\'required\')">Field is required</p>\n                 </ion-item>\n              \n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="pricetag"></ion-icon>Precio Entrada:</ion-label>\n                    <ion-input id="precio_entrada" type="number" formControlName="precio_entrada"  name ="precio_entrada"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="myForm.get(\'precio_entrada\').errors && myForm.get(\'precio_entrada\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'precio_entrada\').hasError(\'required\')">Field is required</p>\n                 </ion-item>\n              \n                  <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="pricetag"></ion-icon>Precio de Venta:</ion-label>\n                  <ion-input id="precio_salida" type="number" formControlName="precio_salida"  name ="precio_salida"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'precio_salida\').errors && myForm.get(\'precio_salida\').dirty">\n                  <p color="danger" ion-text *ngIf="myForm.get(\'precio_salida\').hasError(\'required\')">Field is required</p>\n               </ion-item>\n                    <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Proveedor:</ion-label>\n                    <ion-input id="roveedor" type="text" formControlName="proveedor"  name ="proveedor"></ion-input>\n                    </ion-item>\n                 </ion-div>\n                 <ion-item *ngIf="myForm.get(\'proveedor\').errors && myForm.get(\'proveedor\').dirty">\n                  <p color="danger" ion-text *ngIf="myForm.get(\'proveedor\').hasError(\'required\')">Field is required</p>\n               </ion-item>\n                <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="information-circle"></ion-icon>Cantidad:</ion-label>\n                 <ion-input id="cantidad" type="number" formControlName="cantidad"  name ="cantidad"></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="myForm.get(\'cantidad\').errors && myForm.get(\'cantidad\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'cantidad\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                \n                                \n              </ion-list><br>\n              <div padding>\n                  <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                      <ion-icon name="archive"> </ion-icon>\n                          Guardar\n                  </button>\n                </div>\n            </form> \n\n        </ion-card-content>\n\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\modif-product\modif-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ModifProductPage);
    return ModifProductPage;
}());

//# sourceMappingURL=modif-product.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modif_product_modif_product__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__producto_details_producto_details__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllProductsPage = /** @class */ (function () {
    function AllProductsPage(navCtrl, http, actionsheet, alert, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionsheet = actionsheet;
        this.alert = alert;
        this.navParams = navParams;
        this.apiUrl = "http://gymdb/";
        this.products = [];
        this.items = [];
        this.modif_product = __WEBPACK_IMPORTED_MODULE_3__modif_product_modif_product__["a" /* ModifProductPage */];
        this.detail_product = __WEBPACK_IMPORTED_MODULE_4__producto_details_producto_details__["a" /* ProductoDetailsPage */];
        this.funcion = {
            "funcion": "getAllProducts"
        };
        this.filtro = {
            val: null
        };
        this.filtro_aux = "";
        this.op_cancel = this.alert.create({
            title: 'ERROR',
            message: 'No se ha podido eliminar producto correctamente',
            buttons: ['OK']
        });
        this.filtro.val = "1";
        this.filtro_aux = "1";
        this.actualizar();
    }
    AllProductsPage.prototype.actualizar = function () {
        var _this = this;
        this.http.post(this.apiUrl, JSON.stringify(this.funcion))
            .subscribe(function (res) {
            //console.log(res);
            _this.products = res['products'];
            _this.initializeItems();
            console.log(JSON.stringify(_this.products));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    AllProductsPage.prototype.initializeItems = function () {
        if (this.filtro.val == "0") {
            this.items = this.products;
        }
        else if (this.filtro.val == "1") {
            this.inicializarActivos();
        }
        else if (this.filtro.val == "2") {
            this.inicializarInactivos();
        }
    };
    AllProductsPage.prototype.inicializarActivos = function () {
        this.items = this.products.filter(function (product) {
            console.log(JSON.stringify(JSON.stringify(product.activo)));
            return product.activo == 1;
        });
        console.log(JSON.stringify(this.items));
    };
    AllProductsPage.prototype.inicializarInactivos = function () {
        this.items = this.products.filter(function (product) {
            console.log(JSON.stringify(JSON.stringify(product.activo)));
            return product.activo == 0;
        });
        console.log(JSON.stringify(this.items));
    };
    AllProductsPage.prototype.verFiltro = function () {
        if (this.filtro.val == this.filtro_aux) {
            console.log("NO hay cambio");
        }
        else {
            this.filtro_aux = this.filtro.val;
            console.log("SI hay cambio");
            this.initializeItems();
        }
    };
    AllProductsPage.prototype.getItems = function (ev) {
        this.initializeItems();
        console.log(ev.target.value);
        var val = ev.target.value;
        if (val != '') {
            val = ev.target.value.toUpperCase();
        }
        this.items = this.items.filter(function (product) {
            console.log(JSON.stringify(JSON.stringify(product.nombre)));
            return product.nombre.includes(val);
        });
        console.log(JSON.stringify(this.products));
    };
    AllProductsPage.prototype.actionSheet = function (product) {
        console.log("action sheet");
        if (product['activo'] == 0) {
            this.presentActionSheetInact(product);
        }
        else {
            this.presentActionSheet(product);
        }
    };
    AllProductsPage.prototype.presentActionSheet = function (product) {
        var _this = this;
        var action = this.actionsheet.create({
            title: 'Opciones de Pago',
            buttons: [
                {
                    text: 'Ver detalles',
                    role: 'detalles',
                    handler: function () {
                        console.log(product);
                        _this.navCtrl.push(_this.detail_product, { producto: product });
                    }
                }, {
                    text: 'Editar',
                    role: 'editar',
                    handler: function () {
                        _this.navCtrl.push(_this.modif_product, { producto: product });
                    }
                }, {
                    text: 'Eliminar',
                    role: 'eliminar',
                    handler: function () {
                        _this.eliminar(product);
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
    AllProductsPage.prototype.eliminar = function (product) {
        var _this = this;
        var elim = this.alert.create({
            title: 'ADVERTENCIA',
            message: '¿Desea ELIMINAR producto?',
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
                        console.log(product);
                        product['funcion'] = "eliminarProducto";
                        _this.http.post(_this.apiUrl, JSON.stringify(product))
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
    AllProductsPage.prototype.presentActionSheetInact = function (product) {
        var _this = this;
        var action = this.actionsheet.create({
            title: 'Opciones de Pago',
            buttons: [
                {
                    text: 'Activar',
                    role: 'activar',
                    handler: function () {
                        _this.activar(product);
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
    AllProductsPage.prototype.activar = function (product) {
        var _this = this;
        var elim = this.alert.create({
            title: 'ADVERTENCIA',
            message: '¿Seguro que desea ACTIVAR producto?',
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
                        console.log(product);
                        product['funcion'] = "activarProducto";
                        _this.http.post(_this.apiUrl, JSON.stringify(product))
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
    AllProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllProductsPage');
    };
    AllProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-all-products',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\all-products\all-products.html"*/'<ion-header>\n  <ion-navbar color = "primary">\n    <ion-title>Productos</ion-title>\n  </ion-navbar>\n  <ion-searchbar placeholder="Buscar producto por nombre" (ionInput)="getItems($event)">\n\n  </ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-select [(ngModel)]="filtro.val">\n              <ion-option value="0">Todos</ion-option>\n              <ion-option value="1">Activos</ion-option>\n              <ion-option value="2">Inactivos</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        \n        <ion-col>\n     \n        </ion-col>\n        \n        <ion-col>\n     \n        </ion-col>\n        \n        <ion-col>\n          <div text-right>\n            <button ion-button outline icon-start (click)="verFiltro()">\n              <ion-icon name="search"> </ion-icon> Filtrar </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>          \n  </ion-card>\n\n  <ion-card *ngFor="let product of items" (click)="actionSheet(product)">\n      <ion-card-header color="primary"> \n        <b>{{ product.nombre }}</b>\n      </ion-card-header>\n                \n      <ion-card-content>\n        <strong>PRECIO:</strong> ${{product.precio_salida}}.00 <br>\n        <strong>DESCRIPCION: </strong> {{product.descripcion}} <br>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\all-products\all-products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AllProductsPage);
    return AllProductsPage;
}());

//# sourceMappingURL=all-products.js.map

/***/ })

},[235]);
//# sourceMappingURL=main.js.map