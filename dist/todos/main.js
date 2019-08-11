(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: fade, slideAnimate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideAnimate", function() { return slideAnimate; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: 'translateY(-50%)', offset: 0.5 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0%)', offset: 1 })
        ]))
    ]),
]);
var slideAnimate = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
    ])
]);


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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");








var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'forum',
        component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_6__["ForumComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-expand-lg navbar-light\" *ngIf=\"_authService.loggedIn()\">\r\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\" (click)=\"navigate(0)\">Todos</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"navigate(0)\" tabindex=\"-1\" aria-disabled=\"true\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"navigate(1)\" tabindex=\"-1\" aria-disabled=\"true\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"navigate(2)\" tabindex=\"-1\" aria-disabled=\"true\">Sign Up</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcd29ya3NwYWNlXFx0b2Rvcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, _authService) {
        this.router = router;
        this._authService = _authService;
        this.title = 'todos';
    }
    AppComponent.prototype.navigate = function (route) {
        switch (route) {
            case _constants__WEBPACK_IMPORTED_MODULE_3__["Navigate"].HOME:
                this.router.navigateByUrl("/dashboard");
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_3__["Navigate"].LOGIN:
                this.router.navigateByUrl("/login");
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_3__["Navigate"].REGISTER:
                this.router.navigateByUrl("/register");
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _forum_forum_component__WEBPACK_IMPORTED_MODULE_10__["ForumComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptorService"],
                    multi: true
                },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            localStorage.removeItem('token');
            this._router.navigateByUrl("login");
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this._adminLoginUrl = "/admin/login";
    }
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._adminLoginUrl, user);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: Navigate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigate", function() { return Navigate; });
var Navigate;
(function (Navigate) {
    Navigate[Navigate["HOME"] = 0] = "HOME";
    Navigate[Navigate["LOGIN"] = 1] = "LOGIN";
    Navigate[Navigate["REGISTER"] = 2] = "REGISTER";
})(Navigate || (Navigate = {}));


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row outer-container mt-5\">\r\n  <div class=\"col-md-6\">\r\n    <h2 class=\"text-center\">\r\n      Good Evening, Arpit.\r\n    </h2>\r\n    <h5 class=\"text-center\">\r\n      What is your main focus today?\r\n    </h5>\r\n    <form #tasksForm=\"ngForm\" style=\"margin-top: 20px\" action=\"\" (ngSubmit)=\"onTasksSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-3\">\r\n          <input type=\"text\" placeholder=\"Enter title\" name=\"task\" id=\"task\" class=\"form-control input_task_title\"\r\n            #task=\"ngModel\" [(ngModel)]=\"tasksModel.title\" [class.is-invalid]=\"task.invalid && task.touched\"\r\n            [class.is-valid]=\"task.valid && task.touched\" required />\r\n        </div>\r\n        <div class=\"form-group col-md-7\">\r\n          <input type=\"text\" placeholder=\"Enter description\" name=\"description\" id=\"description\"\r\n            class=\"form-control input_task_description\" #description=\"ngModel\" [(ngModel)]=\"tasksModel.description\"\r\n            [class.is-invalid]=\"description.invalid && description.touched\"\r\n            [class.is-valid]=\"description.valid && description.touched\" required />\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button type=\"submit\" class=\"btn btn-outline-primary input_submit\" [disabled]=\"tasksForm.form.invalid\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"filtersLoaded | async; else else_block\">\r\n  <div class=\"col-md-6 offset-md-3\">\r\n    <div class=\"tasks-container\">\r\n      <div class=\"row\" style=\"margin-bottom: 15px;\">\r\n        <div class=\"col-md-6\">\r\n          <span (click)=\"deleteAll()\" class=\"delete-all\">\r\n            <i class=\"fa fa-trash-alt\"></i> Delete All\r\n          </span>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p class=\"total-count\">\r\n            Total: {{ tasks.length }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\" *ngIf=\"tasks.length>0; else tasks_else\" [@fade]=\"tasks.length\">\r\n          <div class=\"tasks mb-3\" *ngFor=\"let task of tasks\" [@slideInOut]=\"task\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-11\">\r\n                <h5>{{ task.title }}</h5>\r\n                <p>\r\n                  {{ task.description }}\r\n                </p>\r\n              </div>\r\n              <div class=\"col-md-1 cross\">\r\n                <span (click)=\"onTasksClick(task.id)\">&times;</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <ng-template #tasks_else>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"mb-3\">\r\n              <p class=\"text-center\">\r\n                No Tasks.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #else_block>\r\n  <div class=\"loader_custom\">\r\n    <div class=\"loader\">\r\n      <div class=\"snippet\">\r\n        <div class=\"stage\">\r\n          <div class=\"dot-spin\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer-container {\n  display: flex;\n  justify-content: center; }\n\n.input_task_title, .input_task_description, .input_submit {\n  background: 0;\n  border: 1px solid #fff;\n  border-radius: 20px;\n  color: #fff;\n  outline: 0;\n  transition: border-color .2s ease; }\n\n::-webkit-input-placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #cccccc; }\n\n::-moz-placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #cccccc; }\n\n::-ms-input-placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #cccccc; }\n\n::placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #cccccc; }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #cccccc; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #cccccc; }\n\n.form-control:focus {\n  box-shadow: none; }\n\n.btn-outline-primary {\n  border-color: #ffffff;\n  color: #ffffff; }\n\n.total-count {\n  text-align: right;\n  color: #cccccc; }\n\n.delete-all {\n  cursor: pointer;\n  color: #cccccc; }\n\n.delete-all:hover, .total-count:hover {\n  color: #ffffff; }\n\n.tasks-container {\n  margin-top: 10px;\n  /* EVEN TODOS */\n  /* ODD TODOS */ }\n\n.tasks-container .tasks {\n    border-bottom: 1px solid #cccccc;\n    border-radius: 10px;\n    padding: 5px 0 0 10px;\n    color: #ffffff;\n    transition: .2s ease-in-out;\n    cursor: pointer;\n    box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.75); }\n\n.tasks-container .tasks h5 {\n      display: inline-block;\n      width: 10%; }\n\n.tasks-container .tasks .cross {\n      text-align: center;\n      top: 0;\n      bottom: 0;\n      margin: auto 0;\n      display: none; }\n\n.tasks-container .tasks .cross span {\n        font-size: 24px;\n        line-height: 0px; }\n\n.tasks-container .tasks {\n    text-align: center; }\n\n.tasks-container .tasks:hover {\n    transition: .2s ease-in-out;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    border-bottom: 1px solid red;\n    box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.75); }\n\n.tasks-container .tasks:hover .cross {\n      display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXHdvcmtzcGFjZVxcdG9kb3Mvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGFBQWE7RUFFYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUNBQWlDLEVBQUE7O0FBR25DO0VBQWdCLDJCQUFBO0VBQ2QsY0FBYyxFQUFBOztBQURoQjtFQUFnQiwyQkFBQTtFQUNkLGNBQWMsRUFBQTs7QUFEaEI7RUFBZ0IsMkJBQUE7RUFDZCxjQUFjLEVBQUE7O0FBRGhCO0VBQWdCLDJCQUFBO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUF5Qiw0QkFBQTtFQUN2QixjQUFjLEVBQUE7O0FBR2hCO0VBQTBCLG1CQUFBO0VBQ3hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxxQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBRUUsZ0JBQWdCO0VBbUNoQixlQUFBO0VBWUEsY0FBQSxFQUFlOztBQWpEakI7SUFJSSxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLGVBQWU7SUFJZixpREFBOEMsRUFBQTs7QUFibEQ7TUFnQk0scUJBQXFCO01BQ3JCLFVBQVUsRUFBQTs7QUFqQmhCO01Bb0JNLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sU0FBUztNQUNULGNBQWM7TUFDZCxhQUFhLEVBQUE7O0FBeEJuQjtRQTBCUSxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7O0FBM0J4QjtJQWtDSSxrQkFBa0IsRUFBQTs7QUFsQ3RCO0lBNkRJLDJCQUEyQjtJQUMzQiw2QkFBcUI7WUFBckIscUJBQXFCO0lBRXJCLDRCQUE0QjtJQUc1QixpREFBOEMsRUFBQTs7QUFuRWxEO01BcUVNLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRfdGFza190aXRsZSwgLmlucHV0X3Rhc2tfZGVzY3JpcHRpb24sIC5pbnB1dF9zdWJtaXQge1xyXG4gIGJhY2tncm91bmQ6IDA7XHJcbiAgLy8gYm9yZGVyOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMgZWFzZTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7IC8qIEZpcmVmb3gsIENocm9tZSwgT3BlcmEgKi8gXHJcbiAgY29sb3I6ICNjY2NjY2M7IFxyXG59IFxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovIFxyXG4gIGNvbG9yOiAjY2NjY2NjOyBcclxufSBcclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi8gXHJcbiAgY29sb3I6ICNjY2NjY2M7IFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udG90YWwtY291bnQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG4uZGVsZXRlLWFsbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyBcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuLmRlbGV0ZS1hbGw6aG92ZXIsIC50b3RhbC1jb3VudDpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50YXNrcy1jb250YWluZXIge1xyXG4gIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC50YXNrcyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAwIDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA2cHggMTVweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCA2cHggMTVweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDE1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAlO1xyXG4gICAgfVxyXG4gICAgLmNyb3NzIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRhc2tzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8qIEVWRU4gVE9ET1MgKi9cclxuXHJcbiAgLy8gLnRhc2tzOm50aC1jaGlsZCgybikge1xyXG4gIC8vICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgLy8gICBmb250LXNpemU6IDEwcHg7XHJcbiAgLy8gICAvLyB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDExMDBweCkgcm90YXRlWSgtNDVkZWcpIHRyYW5zbGF0ZVooMCk7XHJcbiAgLy8gICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLy8gICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgLy8gICAtd2Via2l0LWZpbHRlcjogYmx1cigwKTtcclxuICAvLyAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG4gIC8vIH1cclxuICBcclxuICAvKiBPREQgVE9ET1MgKi9cclxuXHJcbiAgLy8gLnRhc2tzOm50aC1jaGlsZCgybisxKSB7XHJcbiAgLy8gICBmb250LXNpemU6IDEwcHg7XHJcbiAgLy8gICAvLyB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDExMDBweCkgcm90YXRlWSg0NWRlZykgdHJhbnNsYXRlWigwKTtcclxuICAvLyAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvLyAgIGZpbHRlcjogYmx1cigwKTtcclxuICAvLyAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xyXG4gIC8vICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgLy8gfVxyXG5cclxuICAudGFza3M6aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgLy8gYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNnB4IDE1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggNnB4IDE1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxNXB4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC5jcm9zcyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks */ "./src/app/tasks.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation */ "./src/app/animation.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.tasksModel = new _tasks__WEBPACK_IMPORTED_MODULE_2__["Tasks"]();
        this.tasks = [
            {
                id: 1,
                title: "Title 1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 1."
            },
            {
                id: 2,
                title: "Title 2",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 2."
            },
            {
                id: 3,
                title: "Title 3",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 3."
            },
            {
                id: 4,
                title: "Title 4",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 4."
            },
            {
                id: 5,
                title: "Title 5",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 5."
            },
            {
                id: 6,
                title: "Title 6",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 6."
            },
        ];
    }
    DashboardComponent.prototype.keyEvent = function (event) {
    };
    DashboardComponent.prototype.deleteAll = function () {
        this.tasks = [];
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.filtersLoaded = Promise.resolve(true);
    };
    DashboardComponent.prototype.onTasksClick = function (id) {
        var tasksObj = this.tasks.find(function (o) { return o.id === id; });
        var index = this.tasks.indexOf(tasksObj);
        this.tasks.splice(index, 1);
    };
    DashboardComponent.prototype.onTasksSubmit = function () {
        var _this = this;
        if (this.tasksModel.title !== undefined && this.tasksModel.description !== undefined) {
            var obj_1 = {
                id: this.tasks.length,
                title: this.tasksModel.title,
                description: this.tasksModel.description
            };
            //activate loader 
            this.filtersLoaded = Promise.resolve(false);
            // de-activate loader and insert task after 2 seconds
            setTimeout(function () {
                _this.filtersLoaded = Promise.resolve(true);
                _this.tasks.unshift(obj_1);
            }, 2000);
            // clear input fields
            this.formValues.resetForm();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tasksForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardComponent.prototype, "formValues", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DashboardComponent.prototype, "keyEvent", null);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            animations: [
                _animation__WEBPACK_IMPORTED_MODULE_3__["slideAnimate"],
                _animation__WEBPACK_IMPORTED_MODULE_3__["fade"]
            ],
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/forum/forum.component.html":
/*!********************************************!*\
  !*** ./src/app/forum/forum.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  forum works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/forum/forum.component.scss":
/*!********************************************!*\
  !*** ./src/app/forum/forum.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForumComponent = /** @class */ (function () {
    function ForumComponent() {
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    ForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forum',
            template: __webpack_require__(/*! ./forum.component.html */ "./src/app/forum/forum.component.html"),
            styles: [__webpack_require__(/*! ./forum.component.scss */ "./src/app/forum/forum.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader_custom\" *ngIf=\"_loading\">\n  <div class=\"loader\">\n    <div class=\"snippet\">\n      <div class=\"stage\">\n        <div class=\"dot-spin\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!_loading\" class=\"container-fluid\">\n  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed, maiores quae officiis, quia a facilis deleniti ratione nobis beatae sit eveniet aliquam dolorum reprehenderit totam inventore perferendis cupiditate possimus?\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this._loading = Promise.resolve(true);
    }
    LoginComponent.prototype.ngOnInit = function () {
        try {
            this.login();
        }
        catch (error) {
            console.log(error);
        }
    };
    LoginComponent.prototype.login = function () {
        this._loading = Promise.resolve(false);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/tasks.ts":
/*!**************************!*\
  !*** ./src/app/tasks.ts ***!
  \**************************/
/*! exports provided: Tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tasks", function() { return Tasks; });
var Tasks = /** @class */ (function () {
    function Tasks() {
    }
    return Tasks;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector, router) {
        this.injector = injector;
        this.router = router;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "" + authService.getToken()
            }
        });
        return next.handle(tokenizedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (resp) {
            if (resp['body'] != undefined) {
                if (resp['body'].body == 'jwt expired') {
                    localStorage.removeItem('token');
                    _this.router.navigateByUrl('/login');
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(resp);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (response) {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                localStorage.removeItem('token');
                _this.router.navigateByUrl('/login');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response);
        }));
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
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

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\workspace\todos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map