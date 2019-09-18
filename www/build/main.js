webpackJsonp([7],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_C_Users_acer_Desktop_GymSystem_GymSystem_src_pages_login_login__ = __webpack_require__(52);
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
        this.login = __WEBPACK_IMPORTED_MODULE_2_C_Users_acer_Desktop_GymSystem_GymSystem_src_pages_login_login__["a" /* LoginPage */];
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

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the EmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmployeePage = /** @class */ (function () {
    function EmployeePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmployeePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmployeePage');
    };
    EmployeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-employee',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\employee\employee.html"*/'<!--\n  Generated template for the EmployeePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>employee</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\employee\employee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EmployeePage);
    return EmployeePage;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-cliente/add-cliente.module": [
		281,
		1
	],
	"../pages/admin/admin.module": [
		282,
		6
	],
	"../pages/customer/customer.module": [
		283,
		5
	],
	"../pages/employee/employee.module": [
		285,
		4
	],
	"../pages/info-cliente/info-cliente.module": [
		284,
		3
	],
	"../pages/listcustomers/listcustomers.module": [
		286,
		0
	],
	"../pages/login/login.module": [
		287,
		2
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(41);
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
    function AddClientePage(navCtrl, http, loadigCtrl, alert, cl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadigCtrl = loadigCtrl;
        this.alert = alert;
        this.cl = cl;
        this.navParams = navParams;
        this.x = 0; // variable para el usuario
        this.apiUrl = "http://gymdb/";
        this.myForm = this.cl.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            apellidoP: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            apellidoM: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            fechanac: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            foto: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            calle: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            numero: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            numeroint: [''],
            colonia: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            cp: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(15)]],
            reppass: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            user: ['']
        });
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
                foto: '',
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myForm'),
        __metadata("design:type", Object)
    ], AddClientePage.prototype, "formValues", void 0);
    AddClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-cliente',template:/*ion-inline-start:"c:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-cliente\add-cliente.html"*/'<!--\n  Generated template for the LoginPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Agregar Cliente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="inicio">\n  <ion-grid>\n    <ion-row>\n        \n      <ion-col>\n        <ion-card text-center class="Datos">\n        \n          <ion-card-content>\n          <h2><strong >DATOS</strong></h2>\n          <br>\n          <br><br>\n          \n          <form [formGroup]="myForm"  (ngSubmit)="saveData()" novalidate>\n              <ion-list>\n                  <ion-item>\n                      <ion-label stack color = "primary">Nombre:</ion-label>\n                      <ion-input id="nombre" name="nombre" formControlName="nombre" type="text"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'nombre\').errors && myForm.get(\'nombre\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'nombre\').hasError(\'required\')">Field is required</p>\n                    </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary">Apellido Paterno:</ion-label>\n                  <ion-input id="apellidoP" name ="apellidoP" type="text" formControlName="apellidoP"  name ="apellidoP"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'apellidoP\').errors && myForm.get(\'apellidoP\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'apellidoP\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary">Apellido Materno:</ion-label>\n                  <ion-input id="apellidoM" name ="apellidoM" type="text" formControlName="apellidoM" name ="apellidoM"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'apellidoM\').errors && myForm.get(\'apellidoM\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'apellidoM\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label color = "primary">Genero:</ion-label>\n                      <ion-select id="gender" name ="gender" formControlName="gender">\n                      <ion-option value="f">Female</ion-option>\n                        <ion-option value="m">Male</ion-option>\n                      </ion-select>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'gender\').errors && myForm.get(\'gender\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'gender\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary">Telefono:</ion-label>\n                    <ion-input id="telefono" name ="telefono" type="tel" formControlName="telefono"  name ="telefono"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="myForm.get(\'telefono\').errors && myForm.get(\'telefono\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'telefono\').hasError(\'required\')">Field is required</p>\n                  </ion-item>\n                <ion-item>\n                    <ion-label stack color = "primary">Foto:</ion-label>\n                    <ion-input id="foto" name ="foto" formControlName="foto" type="text"></ion-input>\n                </ion-item>\n                  <ion-item *ngIf="myForm.get(\'foto\').errors && myForm.get(\'foto\').dirty">\n                    <p color="danger" ion-text *ngIf="myForm.get(\'foto\').hasError(\'required\')">Field is required</p>\n                   </ion-item> \n                   <ion-label color="secondary">FECHA DE NACIMIENTO</ion-label>\n                   <ion-item>\n                      <ion-label>MM DD YY</ion-label>\n                      <ion-datetime id="fechanac" name ="fechanac" formControlName="fechanac" display-format="MM DD YY" placeholder="Select Date" ></ion-datetime>\n                    </ion-item>\n                    <ion-item *ngIf="myForm.get(\'fechanac\').errors && myForm.get(\'fechanac\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'fechanac\').hasError(\'required\')">Field is required</p>\n                      </ion-item>\n\n                   <ion-label color="secondary">DIRECCION</ion-label>\n                   <ion-item>\n                      <ion-label stack color = "primary">Nombre Calle:</ion-label>\n                      <ion-input id="calle" name ="calle" formControlName="calle" type="text"></ion-input>\n                  </ion-item>\n                    <ion-item *ngIf="myForm.get(\'calle\').errors && myForm.get(\'calle\').dirty">\n                      <p color="danger" ion-text *ngIf="myForm.get(\'calle\').hasError(\'required\')">Field is required</p>\n                     </ion-item> \n                     <ion-item>\n                        <ion-label stack color = "primary">Numero Exterior:</ion-label>\n                        <ion-input id="numero" name ="numero" formControlName="numero" type="text"></ion-input>\n                    </ion-item>\n                      <ion-item *ngIf="myForm.get(\'numero\').errors && myForm.get(\'numero\').dirty">\n                        <p color="danger" ion-text *ngIf="myForm.get(\'numero\').hasError(\'required\')">Field is required</p>\n                       </ion-item> \n                       <ion-item>\n                          <ion-label stack color = "primary">Numero Interior:</ion-label>\n                          <ion-input id="numeroint" name ="numeroint" formControlName="numeroint" type="text"></ion-input>\n                       </ion-item>\n                         <ion-item>\n                            <ion-label stack color = "primary">Colonia:</ion-label>\n                            <ion-input id="colonia" name ="colonia" formControlName="colonia" type="text"></ion-input>\n                        </ion-item>\n                          <ion-item *ngIf="myForm.get(\'colonia\').errors && myForm.get(\'colonia\').dirty">\n                            <p color="danger" ion-text *ngIf="myForm.get(\'colonia\').hasError(\'required\')">Field is required</p>\n                           </ion-item>\n                           <ion-item>\n                              <ion-label stack color = "primary">CP:</ion-label>\n                              <ion-input  id="cp" name="cp" formControlName="cp" type="text"></ion-input>\n                          </ion-item>\n                            <ion-item *ngIf="myForm.get(\'cp\').errors && myForm.get(\'cp\').dirty">\n                              <p color="danger" ion-text *ngIf="myForm.get(\'cp\').hasError(\'required\')">Field is required</p>\n                             </ion-item> \n                             <ion-label color="secondary">CUENTA</ion-label>\n                             <ion-item >\n                                <ion-label stack color = "primary">Username:</ion-label>\n                              <ion-input readonly id="usercliente" name="usercliente" formControlName="user" type="text" ></ion-input>\n                            </ion-item>\n                             <ion-item class="inputPass">\n                                <ion-label stack color = "primary">Contraseña:</ion-label>\n                                <ion-input id="password" name ="password" formControlName="password" type="password"></ion-input>\n                              </ion-item>\n                                \n                              <ion-item *ngIf="myForm.get(\'password\').errors && myForm.get(\'password\').dirty">\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'required\')">Field is required</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'minlength\')">Min of 5 characters</p>\n                                <p color="danger" ion-text *ngIf="myForm.get(\'password\').hasError(\'maxlength\')">Max of 15 characters</p>\n                              </ion-item>\n                              <ion-item class="inputPass">\n                                  <ion-label stack color = "primary">Repita Contraseña:</ion-label>\n                                  <ion-input id="rep" name= "rep" formControlName="reppass"  type="password"></ion-input>\n                                </ion-item>\n                                <ion-item *ngIf="myForm.get(\'reppass\').errors && myForm.get(\'reppass\').dirty">\n                                  <p color="danger" ion-text *ngIf="myForm.get(\'reppass\').hasError(\'required\')">Field is required</p>\n                                </ion-item>\n                                \n              </ion-list><br>\n              <div padding>\n                  <button ion-button block type="submit" [disabled]="myForm.invalid">Guardar</button>\n                </div>\n            </form> \n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"c:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\add-cliente\add-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListcustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { InfoClientePage } from'../info-cliente/info-cliente';
/**
 * Generated class for the ListcustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListcustomersPage = /** @class */ (function () {
    function ListcustomersPage(navCtrl, http, actionsheet, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.actionsheet = actionsheet;
        this.navParams = navParams;
        //info = InfoClientePage;
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
            _this.initializeItems();
            console.log(JSON.stringify(_this.clientes));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    ListcustomersPage.prototype.presentActionSheet = function () {
        var action = this.actionsheet.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
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
    ListcustomersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListcustomersPage');
    };
    ListcustomersPage.prototype.actionSheet = function () {
        console.log("action sheet");
        this.presentActionSheet();
        //his.navCtrl.push(this.info, {cliente: cliente});
    };
    ListcustomersPage.prototype.initializeItems = function () {
        this.items = this.clientes;
    };
    ListcustomersPage.prototype.getItems = function (ev) {
        this.initializeItems();
        console.log(ev.target.value);
        var val = ev.target.value.toUpperCase();
        this.items = this.items.filter(function (cliente) {
            console.log(JSON.stringify(JSON.stringify(cliente.Nombre)));
            return cliente.Nombre.includes(val);
        });
        console.log(JSON.stringify(this.clientes));
    };
    ListcustomersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listcustomers',template:/*ion-inline-start:"c:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\listcustomers\listcustomers.html"*/'<!--\n  Generated template for the ListcustomersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-searchbar placeholder="buscar" (ionInput)="getItems($event)">\n\n  </ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let cliente of items" (click)="actionSheet()">\n    <ion-card-header><b>{{ cliente.Nombre }}</b></ion-card-header>\n    \n   \n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"c:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\listcustomers\listcustomers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListcustomersPage);
    return ListcustomersPage;
}());

//# sourceMappingURL=listcustomers.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin__ = __webpack_require__(51);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.loginP = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.admin = __WEBPACK_IMPORTED_MODULE_3__admin_admin__["a" /* AdminPage */];
        this.datos = {};
    }
    HomePage.prototype.mayus = function (e) {
        e.value = e.value.toUpperCase();
    };
    HomePage.prototype.aceptar = function () {
        console.log(JSON.stringify(this.datos));
    };
    HomePage.prototype.login = function () {
        console.log('contact');
        this.navCtrl.push(this.loginP);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      GYM SYSTEM\n\n    </ion-title>\n\n    <ion-buttons right >\n\n        <button ion-button icon-only (click) ="login()">\n\n          <ion-icon name="contact" >\n\n              \n\n          </ion-icon>\n\n          \n\n        </button>\n\n     </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-item>\n\n  <ion-label stack color = "primary">Nombre:</ion-label>\n\n  <ion-input type="text" onkeyup="mayus(this);"> </ion-input>\n\n</ion-item>\n\n  \n\n<button ion-button block type="submit" (click)="aceptar()">Guardar</button>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the InfoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoClientePage = /** @class */ (function () {
    function InfoClientePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoClientePage');
    };
    InfoClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-info-cliente',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\info-cliente\info-cliente.html"*/'<!--\n  Generated template for the InfoClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>infoCliente de cada uno</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-header>\n      Card Header\n    </ion-card-header>\n  \n    <ion-card-content>\n      <!-- Add card content here! -->\n    </ion-card-content>\n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\info-cliente\info-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], InfoClientePage);
    return InfoClientePage;
}());

//# sourceMappingURL=info-cliente.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_employee_employee__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_add_cliente_add_cliente__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_listcustomers_listcustomers__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_info_cliente_info_cliente__ = __webpack_require__(204);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_employee_employee__["a" /* EmployeePage */],
                __WEBPACK_IMPORTED_MODULE_12_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_add_cliente_add_cliente__["a" /* AddClientePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_info_cliente_info_cliente__["a" /* InfoClientePage */],
                __WEBPACK_IMPORTED_MODULE_13_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_listcustomers_listcustomers__["a" /* ListcustomersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-cliente/add-cliente.module#AddClientePageModule', name: 'AddClientePage', segment: 'add-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer/customer.module#CustomerPageModule', name: 'CustomerPage', segment: 'customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-cliente/info-cliente.module#InfoClientePageModule', name: 'InfoClientePage', segment: 'info-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employee/employee.module#EmployeePageModule', name: 'EmployeePage', segment: 'employee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listcustomers/listcustomers.module#ListcustomersPageModule', name: 'ListcustomersPage', segment: 'listcustomers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_employee_employee__["a" /* EmployeePage */],
                __WEBPACK_IMPORTED_MODULE_12_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_add_cliente_add_cliente__["a" /* AddClientePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_info_cliente_info_cliente__["a" /* InfoClientePage */],
                __WEBPACK_IMPORTED_MODULE_13_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_listcustomers_listcustomers__["a" /* ListcustomersPage */],
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

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_add_cliente_add_cliente__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_listcustomers_listcustomers__ = __webpack_require__(159);
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
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.addCliente = __WEBPACK_IMPORTED_MODULE_3_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_add_cliente_add_cliente__["a" /* AddClientePage */];
        this.listCustomers = __WEBPACK_IMPORTED_MODULE_4_c_Users_acer_Desktop_GymSystem_GymSystem_src_pages_listcustomers_listcustomers__["a" /* ListcustomersPage */];
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
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\admin\admin.html"*/'<!--\n\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color=secondary>\n\n    <ion-title>GYM SYSTEM</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n    \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-content text-center>\n\n          Acceso<br>\n\n          <button ion-button round color=light clear>\n\n            <ion-icon name="hand"></ion-icon>\n\n          </button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-content text-center>\n\n          Pagos<br>\n\n          <button ion-button round color=light clear>\n\n            <ion-icon name="cash"></ion-icon>\n\n          </button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  \n\n  </ion-row>\n\n</ion-grid>\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n  \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-header text-center>\n\n          Clientes <br>\n\n          <ion-icon name="contact" item-start></ion-icon>\n\n        </ion-card-header>\n\n\n\n        <ion-list>\n\n          <button ion-item (click)="agregarCLiente()">\n\n            <ion-icon name="add" item-start></ion-icon>\n\n              Nuevo\n\n          </button>\n\n        \n\n          <button ion-item>\n\n            <ion-icon name="create" item-start></ion-icon>\n\n            Editar\n\n          </button>\n\n        \n\n          <button ion-item>\n\n            <ion-icon name="power" item-start></ion-icon>\n\n             Borrar\n\n          </button>\n\n          <button ion-item (click)= "allCustomers()">\n\n            <ion-icon name="list" item-start></ion-icon>\n\n             Lista\n\n          </button>\n\n          </ion-list>\n\n      </ion-card>\n\n    </ion-col>\n\n              \n\n                \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-content text-center>\n\n          Tienda<br>\n\n          <ion-icon name="card"></ion-icon>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-card color=danger>\n\n    <ion-card-content text-center>\n\n      Reportes<br>\n\n      <ion-icon name="clipboard"></ion-icon>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card color=primary>\n\n    <ion-card-content text-center>\n\n      Inventario<br>\n\n      <ion-icon name="attach"></ion-icon>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content> '/*ion-inline-end:"C:\Users\acer\Desktop\GymSystem\GymSystem\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_employee__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_customer__ = __webpack_require__(102);
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
        this.employee = __WEBPACK_IMPORTED_MODULE_4__employee_employee__["a" /* EmployeePage */];
        this.custumer = __WEBPACK_IMPORTED_MODULE_5__customer_customer__["a" /* CustomerPage */];
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
                    _this.presentLoading();
                    _this.navCtrl.push(_this.employee);
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

/***/ })

},[205]);
//# sourceMappingURL=main.js.map