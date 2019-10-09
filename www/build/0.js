webpackJsonp([0],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientePageModule", function() { return AddClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_cliente__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddClientePageModule = /** @class */ (function () {
    function AddClientePageModule() {
    }
    AddClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_cliente__["a" /* AddClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_cliente__["a" /* AddClientePage */]),
            ],
        })
    ], AddClientePageModule);
    return AddClientePageModule;
}());

//# sourceMappingURL=add-cliente.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(7);
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
        //pay = PayPage;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-cliente',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-cliente\add-cliente.html"*/'<!--\n  Generated template for the LoginPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Agregar Cliente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding class="inicio">\n\n    <ion-label color="secondary" align="center"><b>PERFIL</b></ion-label>\n      <img src="http://gymdb/imgs/customers/{{ dir.path }}" width="300" height="300" alt="Imagen de Perfil">\n    \n    <ion-label color="primary"><b>SELECCIONE IMAGEN:</b> </ion-label>\n    <form  method="post" enctype="multipart/form-data">   \n    <input type="file" name="fileToUpload"  id="fileToUpload"  [(ngModel)]="dir.dir">\n    <button ion-button icon-start (click)="ver()">\n        <ion-icon name="camera"></ion-icon>\n        Añadir\n    </button>\n    </form>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card text-center classss="Datos">\n        \n          <ion-card-content>\n          <h2><strong >DATOS</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                  <ion-item>\n                      <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Nombre:</ion-label>\n                      <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Paterno:</ion-label>\n                  <ion-input id="apellidoP" name ="apellidoP" type="text" formControlName="apellidoP"  name ="apellidoP"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'apellidoP\').errors && myForm.get(\'apellidoP\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'apellidoP\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary" icon-start><ion-icon name="person"></ion-icon>Apellido Materno:</ion-label>\n                  <ion-input id="apellidoM" name ="apellidoM" type="text" formControlName="apellidoM" name ="apellidoM"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'apellidoM\').errors && myForm.get(\'apellidoM\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'apellidoM\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label color = "primary" icon-start><ion-icon name="person"></ion-icon>Genero:</ion-label>\n                      <ion-select id="gender" name ="gender" formControlName="gender">\n                      <ion-option value="f">Mujer</ion-option>\n                        <ion-option value="m">Hombre</ion-option>\n                      </ion-select>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'gender\').errors && myForm.get(\'gender\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'gender\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary"  icon-start><ion-icon name="call"></ion-icon>Telefono:</ion-label>\n                    <ion-input id="telefono" name ="telefono" type="tel" formControlName="telefono"  name ="telefono"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'telefono\').errors && myForm.get(\'telefono\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'required\')">Field is required</p>\n                    <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'pattern\')">Just Numbers</p>\n                  </ion-item>\n                \n                   <ion-label color="secondary" icon-start><ion-icon name="calendar"></ion-icon>FECHA DE NACIMIENTO</ion-label>\n                   <ion-item>\n                      <ion-label >MM DD YY</ion-label>\n                      <ion-datetime id="fechanac" name ="fechanac" formControlName="fechanac" display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'fechanac\').errors && myForm.get(\'fechanac\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'fechanac\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n\n                   <ion-label color="secondary" icon-start><ion-icon name="pin"></ion-icon>DIRECCION</ion-label>\n                   <ion-item>\n                      <ion-label stack color = "primary" >Nombre Calle:</ion-label>\n                      <ion-input id="calle" name ="calle" formControlName="calle" type="text"></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="myForm.get(\'calle\').errors && myForm.get(\'calle\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'calle\').hasError(\'required\')">Field is required</p>\n                     </ion-item> \n                     <ion-item>\n                        <ion-label stack color = "primary">Numero Exterior:</ion-label>\n                        <ion-input id="numero" name ="numero" formControlName="numero" type="text"></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="myForm.get(\'numero\').errors && myForm.get(\'numero\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'numero\').hasError(\'required\')">Field is required</p>\n                       </ion-item> \n                       <ion-item>\n                          <ion-label stack color = "primary" >Numero Interior:</ion-label>\n                          <ion-input id="numeroint" name ="numeroint" formControlName="numeroint" type="text"></ion-input>\n                       </ion-item>\n                         <ion-item>\n                            <ion-label stack color = "primary" >Colonia:</ion-label>\n                            <ion-input id="colonia" name ="colonia" formControlName="colonia" type="text"></ion-input>\n                        </ion-item>\n                          <ion-item *ngIf="myForm.get(\'colonia\').errors && myForm.get(\'colonia\').dirty">\n                            <p color="danger" ion-text *ngIf="myForm.get(\'colonia\').hasError(\'required\')">Field is required</p>\n                           </ion-item>\n                           <ion-item>\n                              <ion-label stack color = "primary" >CP:</ion-label>\n                              <ion-input  id="cp" name="cp" formControlName="cp" type="text"></ion-input>\n                          </ion-item>\n                            <ion-item *ngIf="myForm.get(\'cp\').errors && myForm.get(\'cp\').dirty">\n                              <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'required\')">Field is required</p>\n                              <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'pattern\')">Just Numbers</p>\n                             </ion-item> \n                             <ion-label color="secondary">CUENTA</ion-label>\n                             <ion-item >\n                                <ion-label stack color = "primary" icon-start><ion-icon name="log-in"></ion-icon> Username:</ion-label>\n                              <ion-input readonly id="usercliente" name="usercliente" formControlName="user" type="text" ></ion-input>\n                            </ion-item>\n                             <ion-item class="inputPass">\n                                <ion-label stack color = "primary"  icon-start>\n                                    <ion-icon name="lock"></ion-icon> Contraseña:</ion-label>\n                                <ion-input id="password" name ="password" formControlName="password" type="password"></ion-input>\n                              </ion-item>\n                                \n                              <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'password\').dirty">\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'required\')">Field is required</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'minlength\')">Min of 5 characters</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'maxlength\')">Max of 15 characters</p>\n                              </ion-item>\n                              <ion-item class="inputPass">\n                                  <ion-label stack color = "primary"  icon-start>\n                                      <ion-icon name="lock"></ion-icon>\n                                      Repita Contraseña:</ion-label>\n                                  <ion-input id="rep" name= "rep" formControlName="reppass"  type="password"></ion-input>\n                                </ion-item>\n                                <ion-item *ngIf="myForm.get(\'reppass\').errors && myForm.get(\'reppass\').dirty">\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'reppass\').hasError(\'required\')">Field is required</p>\n                                </ion-item>\n                                \n              </ion-list><br>\n              <div padding>\n                  <button ion-button icon-start block type="submit" [disabled]="myForm.invalid">\n                      <ion-icon name="archive">   </ion-icon>\n                          Guardar\n                  </button>\n\n\n                </div>\n            </form> \n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-cliente\add-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _g || Object])
    ], AddClientePage);
    return AddClientePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=add-cliente.js.map

/***/ })

});
//# sourceMappingURL=0.js.map