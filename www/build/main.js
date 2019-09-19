webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
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
    function PayPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.apiUrl = "http://gymdb:8080";
        this.datos = {};
        this.pago = {};
    }
    PayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayPage');
        this.getPaquete();
    };
    PayPage.prototype.getPaquete = function () {
        var _this = this;
        var funcion = {
            'funcion': 'getPaquete'
        };
        this.http.post(this.apiUrl, JSON.stringify(funcion))
            .subscribe(function (res) {
            console.log(res);
            _this.paquetes = res;
        });
    };
    PayPage.prototype.selectPaquete = function (paquete) {
        console.log(paquete);
        //document.getElementById("pack").setAttribute('value',paquete.id);
        document.getElementsByTagName("input")[2].value = paquete.id;
        document.getElementsByTagName("input")[3].value = paquete.precio;
    };
    PayPage.prototype.getUsuario = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Ingresa nombre correcto del usuario',
            buttons: ['OK']
        });
        var alertInformation = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Solo se puede ver informacion de clientes',
            buttons: ['OK']
        });
        this.datos['funcion'] = 'getUsuario'; //funcion logearse
        console.log(JSON.stringify(this.datos));
        this.http.post(this.apiUrl, JSON.stringify(this.datos))
            .subscribe(function (res) {
            console.log(res);
            if (res == "-1") {
                alert.present();
            }
            else {
                console.log(res); // ya tiene los datos
                if (res['tipo'] == "1") {
                    var alertUser = _this.alertCtrl.create({
                        title: res['id'],
                        subTitle: res['user'],
                        buttons: ['OK']
                    });
                    alertUser.present();
                }
                else if (res['tipo'] == "2") {
                    alertInformation.present();
                }
                else if (res['tipo'] == "3") {
                    alertInformation.present();
                }
            }
        });
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\pay\pay.html"*/'<ion-header>\n  <ion-navbar color=secondary>\n    <ion-title>PAGOS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-fab right bottom>\n  <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n  <ion-fab-list side="left">\n    <button ion-fab><ion-icon name="search"></ion-icon></button>\n    <button ion-fab><ion-icon name="create"></ion-icon></button>\n    <button ion-fab><ion-icon name="trash"></ion-icon></button>\n  </ion-fab-list>\n</ion-fab>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label inset> Usuario </ion-label>\n    <ion-input type="text" [(ngModel)]="datos.user" name ="nombre" required></ion-input>\n  </ion-item>\n\n  <br>\n  <div text-center>\n    <button ion-button round color=primary type="submit" (click) ="getUsuario()" size="large">Verificar Usuario</button>\n  </div>\n\n \n\n  <br>  \n  <ion-list no-lines>\n    <button ion-item *ngFor="let paquete of paquetes" (click)="selectPaquete(paquete)">\n      <strong>{{paquete.nombre}}</strong> <br> Precio: {{paquete.precio}}\n    </button>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label inset color="primary">Usuario </ion-label>\n          <ion-input type="text" [(ngModel)]="pago.user" name ="usuario" required></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label inset color="primary">Paquete </ion-label>\n              <ion-input id="pack" name ="pack" type="text" [(ngModel)]="pago.paquete" required ></ion-input>\n            </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-label color="primary">Modo de Pago</ion-label>\n            <ion-select [(ngModel)]="pago.modo" name ="modo" required>\n              <ion-option value="efectivo">Efectivo</ion-option>\n              <ion-option value="debito">Debito</ion-option>\n              <ion-option value="credito">Credito</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n    </ion-col>\n        <ion-col>\n            <ion-item>\n                <ion-label inset color="primary"> Monto </ion-label>\n                <ion-input type="text" [(ngModel)]="pago.monto" name ="monto" required></ion-input>\n              </ion-item>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <div text-center>\n    <br>\n    <ion-buttons>\n      <button ion-button round color=danger size="large">Pagar</button>\n    </ion-buttons>\n  </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\pay\pay.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], PayPage);
    return PayPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
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
            selector: 'page-customer',template:/*ion-inline-start:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\customer\customer.html"*/'<ion-header>\n\n    <ion-toolbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button (click)="openMenu()">\n\n          <ion-icon name="list" ></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      \n\n      <ion-title>Cliente</ion-title>\n\n  \n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n\n  <ion-menu [content]="content" color="danger">\n\n      <ion-header>\n\n        <ion-toolbar>\n\n          <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n      <ion-content>\n\n        <ion-list>\n\n          <button ion-item>\n\n            Perfil\n\n          </button>\n\n          <button ion-item>\n\n            Cerrar Sesión\n\n          </button>\n\n          <button ion-item (click)="closeMenu()">\n\n            Close Menu\n\n          </button>\n\n          <button ion-item (click)="logout()">\n\n              Cerrar Sesión\n\n            </button>\n\n        </ion-list>\n\n      </ion-content>\n\n    </ion-menu>\n\n    \n\n    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n\n\n\n\n  <ion-content>\n\n    <button ion-button large color="danger" round>Deudas </button>\n\n    <button ion-button large color="blue" round >Asistencia</button>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\customer\customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CustomerPage);
    return CustomerPage;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-employee',template:/*ion-inline-start:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\employee\employee.html"*/'<!--\n\n  Generated template for the EmployeePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>employee</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\employee\employee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EmployeePage);
    return EmployeePage;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		279,
		4
	],
	"../pages/customer/customer.module": [
		280,
		3
	],
	"../pages/employee/employee.module": [
		281,
		2
	],
	"../pages/login/login.module": [
		282,
		1
	],
	"../pages/pay/pay.module": [
		283,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    }
    HomePage.prototype.login = function () {
        console.log('contact');
        this.navCtrl.push(this.admin);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      GYM SYSTEM\n\n    </ion-title>\n\n    <ion-buttons right >\n\n        <button ion-button icon-only (click) ="login()">\n\n          <ion-icon name="contact" >\n\n              \n\n          </ion-icon>\n\n          \n\n        </button>\n\n     </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_employee_employee__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pay_pay__ = __webpack_require__(102);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_pay_pay__["a" /* PayPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer/customer.module#CustomerPageModule', name: 'CustomerPage', segment: 'customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employee/employee.module#EmployeePageModule', name: 'EmployeePage', segment: 'employee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_employee_employee__["a" /* EmployeePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pay_pay__["a" /* PayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_pay__ = __webpack_require__(102);
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
        this.pay = __WEBPACK_IMPORTED_MODULE_3__pay_pay__["a" /* PayPage */];
        this.apiUrl = "http://gymdb:8080/";
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
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
    AdminPage.prototype.pagar = function () {
        console.log('pay');
        this.navCtrl.push(this.pay);
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\admin\admin.html"*/'<!--\n\n  Generated template for the AdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color=secondary>\n\n    <ion-title>GYM SYSTEM</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n    \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-content text-center>\n\n          Acceso<br>\n\n          <button ion-button round color=light clear>\n\n            <ion-icon name="hand"></ion-icon>\n\n          </button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-content text-center>\n\n          Pagos<br>\n\n          <button ion-button round color=light clear (click)=\'pagar()\'>\n\n            <ion-icon name="cash"></ion-icon>\n\n          </button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  \n\n  </ion-row>\n\n</ion-grid>\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n      \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-header text-center>\n\n          Clientes <br>\n\n          <ion-icon name="contact" item-start></ion-icon>\n\n        </ion-card-header>\n\n\n\n        <ion-list>\n\n          <button ion-item>\n\n            <ion-icon name="add" item-start></ion-icon>\n\n              Nuevo\n\n          </button>\n\n        \n\n          <button ion-item>\n\n            <ion-icon name="create" item-start></ion-icon>\n\n            Editar\n\n          </button>\n\n        \n\n          <button ion-item>\n\n            <ion-icon name="power" item-start></ion-icon>\n\n             Borrar\n\n          </button>\n\n          </ion-list>\n\n      </ion-card>\n\n    </ion-col>\n\n              \n\n                \n\n    <ion-col>\n\n      <ion-card color=primary>\n\n        <ion-card-content text-center>\n\n          Tienda<br>\n\n          <ion-icon name="card"></ion-icon>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-card color=primary>\n\n    <ion-card-content text-center>\n\n      Reportes<br>\n\n      <ion-icon name="clipboard"></ion-icon>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card color=primary>\n\n    <ion-card-content text-center>\n\n      Inventario<br>\n\n      <ion-icon name="attach"></ion-icon>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>          \n\n'/*ion-inline-end:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_employee__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_customer__ = __webpack_require__(103);
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
    function LoginPage(navCtrl, loadingCtrl, http, alerta, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alerta = alerta;
        this.navParams = navParams;
        this.admin = __WEBPACK_IMPORTED_MODULE_3__admin_admin__["a" /* AdminPage */];
        this.employee = __WEBPACK_IMPORTED_MODULE_4__employee_employee__["a" /* EmployeePage */];
        this.custumer = __WEBPACK_IMPORTED_MODULE_5__customer_customer__["a" /* CustomerPage */];
        this.datos = {};
        this.apiUrl = "http://gymdb:8080/";
        this.var = {};
    }
    LoginPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 1500
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color=secondary>\n\n    <ion-title>Acceso</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="inicio">\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-col>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card text-center class="bienvenido">\n\n        \n\n          <ion-card-content>\n\n          <h2><strong>Bienvenido</strong></h2>\n\n          <br>\n\n          <ion-icon name="person"></ion-icon>\n\n          <br><br>\n\n          \n\n          <form name="cuenta">\n\n              \n\n              <ion-list>\n\n                <ion-item >\n\n                  <ion-label stacked>Usuario</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="datos.user" name ="nombre" required></ion-input>\n\n                </ion-item>\n\n                    \n\n                <ion-item>\n\n                  <ion-label stacked>Contraseña</ion-label>\n\n                  <ion-input type="password" [(ngModel)]="datos.password" name ="password"></ion-input>\n\n                </ion-item>\n\n              </ion-list><br>\n\n\n\n              <ion-buttons>\n\n                  <button ion-button round color=primary type="submit" (click) ="access()" size="large">Iniciar Sesión</button>\n\n              </ion-buttons>\n\n              <ion-buttons>\n\n                  <button ion-button round color=primary >¿Problemas?</button>\n\n              </ion-buttons>\n\n             \n\n            </form>      \n\n            \n\n        </ion-card-content>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CHEMA\Desktop\GymSystem\GymSystem\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map