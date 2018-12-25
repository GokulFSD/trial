(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>PROJECT\n  HYGIEIA:\n</h3>\n<p>This project involves the use of permissioned blockchain Sawtooth under the hyperledger umbrella on the use case relating to healthcare in particular to that of Organ Donation. Health is the most important part of a person’s life and a such this project aims to introduce a permissioned blockchain into particular aspects of Organ Donation, in respect to an Organ donor list which is privacy protected and tamper proof in order to curb any exploitation and preserve privacy of members of Donor list,  also it helps in ordering a Recipient list wherein members are classified in a first come first serve basis and priority is set with voting of particular member nodes with the particular criteria set for voting and with a threshold set by the admin. The main aim is to match recipient and donors by traversing transactions.\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _resp_resp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resp/resp.component */ "./src/app/resp/resp.component.ts");





var routes = [
    { path: '', component: _page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"] },
    { path: 'resp', component: _resp_resp_component__WEBPACK_IMPORTED_MODULE_4__["RespComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-nav></app-nav>\n<router-outlet>\n</router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hygeia';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _resp_resp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resp/resp.component */ "./src/app/resp/resp.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"],
                _resp_resp_component__WEBPACK_IMPORTED_MODULE_6__["RespComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {  padding: 5px; font-family: helvetica; font:15px;  }\n.p1 { text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsYUFBYSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsR0FBRztBQUMzRCxNQUFNLG1CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7ICBwYWRkaW5nOiA1cHg7IGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7IGZvbnQ6MTVweDsgIH1cbi5wMSB7IHRleHQtYWxpZ246IGNlbnRlcjsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink =\"\">  <legend>\n  {{title}}\n    </legend></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink =\"about\">About</a>\n\n           </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink =\"login\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink =\"sign\">Sign Up</a>\n\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink =\"resp\">Recepient List</a>\n\n          </li>\n      </ul>\n      <br/>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> -->\n<br/>\n<br/><legend><p class=\"p1\">Enter Details of Donor</p></legend><br/>\n<div class=\"container\">\n\n  <form  class=\"form\" >\n    <div class=\"form-group\">\n\n      <label class=\"control-label col-sm-2\" id=\"name\">Name:</label>\n      <div class=\"col-sm-10\">\n        <input #Name type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"name\" name='Name' ngModel required pattern=\"^[a-zA-Z\\.]*$\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"Date\">Date of Birth:</label>\n      <div class=\"col-sm-10\">\n        <input #date type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"Date\" name='date' ngModel required>\n      </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"Gender\">Gender:</label>\n      <div class=\"col-sm-10\">\n              <select class=\"form-control\" id=\"Gender\" #Gender type=\"text\" name='Gender' ngModel required>\n                <option>Male</option>\n                <option>Female</option>\n                <option>Other</option>\n              </select>\n              <br>\n        </div>\n      </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"btype\">Blood Type:</label>\n      <div class=\"col-sm-10\">\n              <select class=\"form-control\" id=\"btype\" #btype type=\"text\" name='btype' ngModel required>\n                <option>A+</option>\n                <option>A-</option>\n                <option>B-</option>\n                <option>B+</option>\n                <option>AB+</option>\n                <option>AB-</option>\n                <option>O-</option>\n                <option>O+</option>\n              </select>\n              <br>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-5\" id=\"otype\">Organ to be recieved</label>\n        <div class=\"col-sm-10\">\n          <select class=\"form-control\" id=\"otype\" #otype type=\"text\" name='otype' ngModel required>\n              <option>Lung</option>\n              <option>Kidney</option>\n              <option>Liver</option>\n              <option>Eye(corneas)</option>\n              <option>Larynx</option>\n              <option>Pancreas</option>\n              <option>Intestine</option>\n            </select>\n        </div>\n      </div>\n\n\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"idproof\">Enter Identity No:</label>\n      <div class=\"col-sm-10\">\n        <input #idproof type=\"text\" class=\"form-control\" id=\"idproof\" placeholder=\"enter government given identity proof (aadhar preferred)\" name=\"pwd\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"cno\">Enter Contact No:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"tel\" class=\"form-control\" id=\"cno\" placeholder=\"Contact Number\" name=\"tel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"cid\">Contact Info:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"textarea\" class=\"form-control\" id=\"cid\" placeholder=\"enter Contact information\" name=\"cid\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <div class=\"checkbox\">\n          <label><input type=\"checkbox\" name=\"Save\"> Save</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"addForm(btype.value,otype.value,Gender.value,idproof.value,date.value,Name.value,NHS)\">Submit</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n<p>{{clickMessage}}</p>\n<p> {{servicedata}}</p>\n\n"

/***/ }),

/***/ "./src/app/page/page.component.sass":
/*!******************************************!*\
  !*** ./src/app/page/page.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding: 5px;\n  font-family: helvetica;\n  font: 15px; }\n\n.p1 {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dva3VsL0RvY3VtZW50cy9jaGR0cmlhbC9oeWdpZWlhdHJpYWwvaHlnZWlhL3NyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsYUFBWTtFQUFFLHVCQUFzQjtFQUFFLFdBQVMsRUFBTTs7QUFDN0Q7RUFBTSxtQkFBa0IsRUFBSSIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgeyAgcGFkZGluZzogNXB4OyBmb250LWZhbWlseTogaGVsdmV0aWNhOyBmb250OjE1cHg7ICAgfTtcbi5wMSB7IHRleHQtYWxpZ246IGNlbnRlcjsgfTtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sawtooth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sawtooth.service */ "./src/app/sawtooth.service.ts");



var PageComponent = /** @class */ (function () {
    function PageComponent(Form) {
        this.Form = Form;
        this.users = [];
        this.clickMessage = "";
        this.servicedata = "";
        console.log("Inside page component.ts");
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent.prototype.addForm = function (btype, otype, Gender, idproof, date, Name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var proc, servDt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // event.preventDefault();
                        this.clickMessage = "Blood type:" + btype + "Organ type:" + otype + " Gender: " + Gender + " Registration Date:" + date + " Name:" + Name;
                        proc = "NHS";
                        return [4 /*yield*/, this.Form.sendData(btype, otype, Gender, idproof, date, Name, proc)];
                    case 1:
                        servDt = _a.sent();
                        this.servicedata = "htis is service dAatta" + servDt;
                        return [2 /*return*/];
                }
            });
        });
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.sass */ "./src/app/page/page.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sawtooth_service__WEBPACK_IMPORTED_MODULE_2__["SawtoothService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/resp/resp.component.css":
/*!*****************************************!*\
  !*** ./src/app/resp/resp.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {  padding: 5px; font-family: helvetica; font:15px;   }\n.p1 { text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzcC9yZXNwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxhQUFhLENBQUMsdUJBQXVCLENBQUMsVUFBVSxJQUFJO0FBQzVELE1BQU0sbUJBQW1CLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9yZXNwL3Jlc3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgeyAgcGFkZGluZzogNXB4OyBmb250LWZhbWlseTogaGVsdmV0aWNhOyBmb250OjE1cHg7ICAgfVxuLnAxIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9Il19 */"

/***/ }),

/***/ "./src/app/resp/resp.component.html":
/*!******************************************!*\
  !*** ./src/app/resp/resp.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> -->\n<br/>\n<br/><legend><p class=\"p1\">Enter Details of Recipient</p></legend><br/>\n<div class=\"container\">\n\n  <form  class=\"form\" >\n    <div class=\"form-group\">\n\n      <label class=\"control-label col-sm-2\" id=\"name\">Name:</label>\n      <div class=\"col-sm-10\">\n        <input #Name type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"name\" name='Name' ngModel required pattern=\"^[a-zA-Z\\.]*$\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"Date\">Date of Birth:</label>\n      <div class=\"col-sm-10\">\n        <input #date type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"Date\" name='date' ngModel required>\n      </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"Gender\">Gender:</label>\n      <div class=\"col-sm-10\">\n              <select class=\"form-control\" id=\"Gender\" #Gender type=\"text\" name='Gender' ngModel required>\n                <option>Male</option>\n                <option>Female</option>\n                <option>Other</option>\n              </select>\n              <br>\n        </div>\n      </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"btype\">Blood Type:</label>\n      <div class=\"col-sm-10\">\n              <select class=\"form-control\" id=\"btype\" #btype type=\"text\" name='btype' ngModel required>\n                <option>A+</option>\n                <option>A-</option>\n                <option>B-</option>\n                <option>B+</option>\n                <option>AB+</option>\n                <option>AB-</option>\n                <option>O-</option>\n                <option>O+</option>\n              </select>\n              <br>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-5\" id=\"otype\">Organ to be recieved</label>\n        <div class=\"col-sm-10\">\n          <select class=\"form-control\" id=\"otype\" #otype type=\"text\" name='otype' ngModel required>\n              <option>Lung</option>\n              <option>Kidney</option>\n              <option>Liver</option>\n              <option>Eye(corneas)</option>\n              <option>Larynx</option>\n              <option>Pancreas</option>\n              <option>Intestine</option>\n            </select>\n        </div>\n      </div>\n\n\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"idproof\">Enter Identity No:</label>\n      <div class=\"col-sm-10\">\n        <input #idproof type=\"text\" class=\"form-control\" id=\"idproof\" placeholder=\"enter government given identity proof (aadhar preferred)\" name=\"pwd\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"cno\">Enter Contact No:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"tel\" class=\"form-control\" id=\"cno\" placeholder=\"Contact Number\" name=\"tel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"cid\">Contact Info:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"textarea\" class=\"form-control\" id=\"cid\" placeholder=\"enter Contact information\" name=\"cid\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <div class=\"checkbox\">\n          <label><input type=\"checkbox\" name=\"Save\"> Save</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"addForm(btype.value,otype.value,Gender.value,idproof.value,date.value,Name.value)\">Submit</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n<p>{{clickMessage}}</p>\n<p> {{servicedata}}</p>\n\n"

/***/ }),

/***/ "./src/app/resp/resp.component.ts":
/*!****************************************!*\
  !*** ./src/app/resp/resp.component.ts ***!
  \****************************************/
/*! exports provided: RespComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespComponent", function() { return RespComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sawtooth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sawtooth.service */ "./src/app/sawtooth.service.ts");



var RespComponent = /** @class */ (function () {
    function RespComponent(Form) {
        this.Form = Form;
        this.users = [];
        this.clickMessage = "";
        this.servicedata = "";
        console.log("Inside page component.ts");
    }
    RespComponent.prototype.ngOnInit = function () {
    };
    RespComponent.prototype.addForm = function (btype, otype, Gender, idproof, date, Name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reproc, servDt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // event.preventDefault();
                        this.clickMessage = "Blood type:" + btype + "Organ type:" + otype + " Gender: " + Gender + " Registration Date:" + date + " Name:" + Name;
                        reproc = "resp";
                        return [4 /*yield*/, this.Form.sendData(btype, otype, Gender, idproof, date, Name, reproc)];
                    case 1:
                        servDt = _a.sent();
                        this.servicedata = "htis is service dAatta" + servDt;
                        return [2 /*return*/];
                }
            });
        });
    };
    RespComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resp',
            template: __webpack_require__(/*! ./resp.component.html */ "./src/app/resp/resp.component.html"),
            styles: [__webpack_require__(/*! ./resp.component.css */ "./src/app/resp/resp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sawtooth_service__WEBPACK_IMPORTED_MODULE_2__["SawtoothService"]])
    ], RespComponent);
    return RespComponent;
}());



/***/ }),

/***/ "./src/app/sawtooth.service.ts":
/*!*************************************!*\
  !*** ./src/app/sawtooth.service.ts ***!
  \*************************************/
/*! exports provided: SawtoothService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SawtoothService", function() { return SawtoothService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-browserify */ "./node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_browserify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sawtooth-sdk/protobuf */ "./node_modules/sawtooth-sdk/protobuf/index.js");
/* harmony import */ var sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sawtooth-sdk/signing */ "./node_modules/sawtooth-sdk/signing/index.js");
/* harmony import */ var sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! buffer/ */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! text-encoding/lib/encoding */ "./node_modules/text-encoding/lib/encoding.js");
/* harmony import */ var text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_6__);







var SawtoothService = /** @class */ (function () {
    function SawtoothService() {
        this.Family_name = 'hygieia';
        this.Family_version = '1.0';
        this.REST_API_BASE_URL = 'http://localhost:4200/api';
    }
    SawtoothService.prototype.hash = function (v) {
        return Object(crypto_browserify__WEBPACK_IMPORTED_MODULE_2__["createHash"])('sha512').update(v).digest('hex');
    };
    SawtoothService.prototype.genAddress = function (pblckey) {
        this.address = this.hash("hygieia").substr(0, 6) + this.hash(pblckey).substr(0, 64);
        return this.address;
    };
    /*-------------Creating transactions & batches--------------------*/
    /*
      private getTransactionsList(payload): any {
        // Create transaction header
        const transactionHeader = this.getTransactionHeaderBytes([this.address], [this.address], payload);
        // Create transaction
        const transaction = this.getTransaction(transactionHeader, payload);
        // Transaction list
        const transactionsList = [transaction];
    
        return transactionsList
      }
    */
    SawtoothService.prototype.getTransactionHeaderBytes = function (inputAddressList, outputAddressList, payload) {
        var transactionHeaderBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["TransactionHeader"].encode({
            familyName: this.Family_name,
            familyVersion: this.Family_version,
            inputs: inputAddressList,
            outputs: outputAddressList,
            signerPublicKey: this.publicKey,
            batcherPublicKey: this.publicKey,
            dependencies: [],
            payloadSha512: this.hash(payload),
            nonce: (Math.random() * 1000).toString()
        }).finish();
        return transactionHeaderBytes;
    };
    SawtoothService.prototype.getTransaction = function (transactionHeaderBytes, payloadBytes) {
        var transaction = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["Transaction"].create({
            header: transactionHeaderBytes,
            headerSignature: this.signer.sign(transactionHeaderBytes),
            payload: payloadBytes
        });
        return transaction;
    };
    SawtoothService.prototype.getBatchHeaderBytes = function (transactionSignaturesList) {
        console.log("Inside get BAtch list");
        var batchHeader = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["BatchHeader"].encode({
            signerPublicKey: this.publicKey,
            transactionIds: transactionSignaturesList
        }).finish();
        return batchHeader;
    };
    SawtoothService.prototype.getBatch = function (batchHeaderBytes, transactionsList) {
        var batch = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["Batch"].create({
            header: batchHeaderBytes,
            headerSignature: this.signer.sign(batchHeaderBytes),
            transactions: transactionsList
        });
        return batch;
    };
    SawtoothService.prototype.getBatchListBytes = function (batchesList) {
        var batchListBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["BatchList"].encode({
            batches: batchesList
        }).finish();
        return batchListBytes;
    };
    SawtoothService.prototype.getBatchList = function (transactionsList) {
        // Complete here
        //const transactions = transactionsList;
        // List of transaction signatures
        var transactionSignatureList = transactionsList.map(function (tx) { return tx.headerSignature; });
        // Create batch header
        var batchHeader = this.getBatchHeaderBytes(transactionSignatureList);
        // Create the batch
        var batch = this.getBatch(batchHeader, transactionsList);
        // Batch List
        var batchList = this.getBatchListBytes([batch]);
        return batchList;
    };
    /*-------END Creating transactions & batches-----------*/
    // Get state of address from rest api
    SawtoothService.prototype.getState = function (address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var getStateURL, fetchOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                getStateURL = this.REST_API_BASE_URL + '/state/' + address;
                fetchOptions = { method: 'GET' };
                return [2 /*return*/, window.fetch(getStateURL, fetchOptions)];
            });
        });
    };
    SawtoothService.prototype.getDecodedData = function (responseJSON) {
        var dataBytes = responseJSON.data;
        var decodedData = new buffer___WEBPACK_IMPORTED_MODULE_5__["Buffer"](dataBytes, 'base64').toString();
        return decodedData;
    };
    // Count button will call this function directly
    // For Count button calls, 'batchListBytes' will be null
    SawtoothService.prototype.sendToRestAPI = function (batchListBytes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (batchListBytes == null) {
                    // GET state
                    return [2 /*return*/, this.getState(this.address)
                            .then(function (response) {
                            console.log("batchlist null");
                            return response.json();
                        })
                            .then(function (responseJson) {
                            console.log("batchlist null2");
                            return _this.getDecodedData(responseJson);
                        })
                            .catch(function (error) {
                            console.error(error);
                        })];
                }
                else {
                    // POST batch list
                    console.log("calling postBatchList");
                    return [2 /*return*/, this.postBatchList(batchListBytes)];
                }
                return [2 /*return*/];
            });
        });
    };
    // Post batch list to rest api
    SawtoothService.prototype.postBatchList = function (batchListBytes) {
        var postBatchListURL = this.REST_API_BASE_URL + '/batches';
        var fetchOptions = {
            method: 'POST',
            body: batchListBytes,
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        };
        return window.fetch(postBatchListURL, fetchOptions);
    };
    SawtoothService.prototype.sendData = function (btype, otype, gender, idproof, date, name, proc) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context, privateKey, data, encData, transactionHeader, transaction, transactionsList, batchList, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        context = Object(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["createContext"])('secp256k1');
                        privateKey = context.newRandomPrivateKey();
                        this.signer = new sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["CryptoFactory"](context).newSigner(privateKey);
                        this.publicKey = this.signer.getPublicKey().asHex();
                        console.log("Inside constructor");
                        data = btype + "," + otype + "," + gender + "," + idproof + "," + date + "," + name + "," + proc;
                        console.log(data + "data");
                        encData = new text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_6__["TextEncoder"]('utf8').encode(data);
                        console.log(encData + "encDAta");
                        console.log("Public" + this.publicKey + "Private ");
                        // this.address=this.genAddress(this.publicKey)
                        this.address = this.hash("hygieia").substr(0, 6) + this.hash(this.publicKey).substr(0, 64);
                        console.log("ThisAddress" + this.address);
                        transactionHeader = this.getTransactionHeaderBytes([this.address], [this.address], encData);
                        console.log("After txn header");
                        transaction = this.getTransaction(transactionHeader, encData);
                        console.log("After transaction");
                        transactionsList = [transaction];
                        console.log("After transactionsList");
                        batchList = this.getBatchList(transactionsList);
                        console.log("After batchList");
                        // Send the batch to REST API
                        return [4 /*yield*/, this.sendToRestAPI(batchList)
                                .then(function (resp) {
                                console.log("sendToRestAPI response", resp);
                            })
                                .catch(function (error) {
                                console.log("error here", error);
                            })];
                    case 1:
                        // Send the batch to REST API
                        _a.sent();
                        return [2 /*return*/, batchList];
                    case 2:
                        e_1 = _a.sent();
                        console.log("Error in reading the key details", e_1);
                        return [2 /*return*/, "ERROR"];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SawtoothService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SawtoothService);
    return SawtoothService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gokul/Documents/chdtrial/hygieiatrial/hygeia/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map