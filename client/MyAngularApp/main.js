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
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");









var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'detail/:id', component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__["HeroDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] }
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

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0; }\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0; }\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px; }\nnav a:visited, a:link {\n  color: #607d8b; }\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc; }\nnav a.active {\n  color: #039be5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5czMwMjkvRGVza3RvcC9NeUFuZ3VsYXJBcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQUE7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7QUFFbEI7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjO0VBQ2QseUJBQXlCLEVBQUE7QUFFM0I7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgxIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbm5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogIzAzOWJlNTtcbn0iXX0= */"

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
        this.title = 'AvengersApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"],
                _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__["HeroSearchComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.rootUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].APIEndpoint + "/Authusers";
        this.authTokenSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.observeAuthToken = this.authTokenSource.asObservable();
        this.userIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.observeUserId = this.userIdSource.asObservable();
        this.authToken = localStorage.getItem('token') || undefined;
        this.authTokenSource.next(this.authToken);
        this.userId = parseInt(localStorage.getItem('userId'), 10) || undefined;
        this.userIdSource.next(this.userId);
        this.vertifyToken();
    }
    AuthService.prototype.vertifyToken = function (cb) {
        var _this = this;
        if (this.userId && this.authToken) {
            var url = this.rootUrl + "/" + this.userId + "?access_token=" + this.authToken;
            this.http.get(url).subscribe(function (res) {
                var response = res;
                if (cb) {
                    cb(null, response);
                }
            }, function (err) {
                if (err.status) {
                    _this.authToken = undefined;
                    _this.userId = undefined;
                    _this.authTokenSource.next(_this.authToken);
                    _this.userIdSource.next(_this.userId);
                    localStorage.removeItem('userId');
                    localStorage.removeItem('token');
                    _this.router.navigate(['login']);
                }
                if (cb) {
                    cb(err, null);
                }
            });
        }
        else {
            if (cb) {
                cb(null, false);
            }
        }
    };
    AuthService.prototype.signUp = function (user, cb) {
        var _this = this;
        var url = "" + this.rootUrl;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var authUser = {
            name: user.name.trim(),
            email: user.email.trim(),
            password: user.password.trim()
        };
        this.http.post(url, authUser).subscribe(function (res) {
            var response = res;
            if (cb) {
                cb(null, res);
                alert('signup succeeded');
                _this.router.navigate(['login']);
            }
        }, function (err) {
            if (cb) {
                cb(err, null);
                console.log('in if error');
            }
        });
    };
    AuthService.prototype.signIn = function (user, cb) {
        var _this = this;
        var url = "http://localhost:3000/api/Authusers/login";
        if (user) {
            var authUser = {
                email: user.email.trim(),
                password: user.password.trim()
            };
            this.http.post(url, authUser).subscribe(function (res) {
                var response = res;
                if (response.id) {
                    _this.authToken = response.id;
                    _this.authTokenSource.next(_this.authToken);
                    _this.userId = response.userId;
                    _this.userIdSource.next(_this.userId);
                    localStorage.setItem('token', _this.authToken);
                    localStorage.setItem('userId', _this.userId + '');
                    _this.router.navigate(['dashboard']);
                    alert('login succeeeded');
                }
                else {
                }
                if (cb) {
                    cb(null, response);
                }
            }, function (err) {
                if (cb) {
                    cb(err, null);
                    console.log('in errrorrrr');
                }
            });
        }
    };
    AuthService.prototype.logout = function (cb) {
        var _this = this;
        var url = this.rootUrl + "/logout?access_token=" + this.authToken;
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.authToken = undefined;
        this.authTokenSource.next(this.authToken);
        this.userId = undefined;
        this.userIdSource.next(this.userId);
        this.http.post(url, {}).subscribe(function (res) {
            _this.router.navigate(['login']);
        }, function (err) {
            if (cb) {
                cb(err, null);
                _this.router.navigate(['login']);
            }
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div align=\"right\">\n    <app-logout></app-logout>\n  </div>\n  <h1 style=\"color:Tomato;\">Welcome!</h1>\n  <p>click <a routerLink=\"/heroes\">here</a> to go to heroes page</p>\n\n  <h3>My Top Avengers</h3>\n  <div class=\"grid grid-pad\">\n    <a *ngFor=\"let hero of heroes\" class=\"col-1-4\" routerLink=\"/detail/{{hero.id}}\">\n      <div class=\"module hero\">\n        <h4>{{hero.name}}</h4>\n      </div>\n    </a>\n  </div>\n  <app-hero-search></app-hero-search>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.sass":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px; }\n[class*='col-']:last-of-type {\n    padding-right: 0; }\na {\n  text-decoration: none; }\n* {\n  box-sizing: border-box; }\n*:after, *:before {\n    box-sizing: border-box; }\nh3 {\n  text-align: center;\n  margin-bottom: 0; }\nh4 {\n  position: relative; }\n.grid {\n  margin: 0; }\n.col-1-4 {\n  width: 25%; }\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607d8b;\n  border-radius: 2px; }\n.module:hover {\n    background-color: #eee;\n    cursor: pointer;\n    color: #607d8b; }\n.grid-pad {\n  padding: 10px 0; }\n.grid-pad > [class*='col-']:last-of-type {\n    padding-right: 20px; }\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; } }\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0; }\n  .module {\n    min-width: 60px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5czMwMjkvRGVza3RvcC9NeUFuZ3VsYXJBcHAvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUFBO0FDQ0E7RURFRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBO0FDQXBCO0lERUUsZ0JBQWdCLEVBQUE7QUFFcEI7RUFDRSxxQkFBcUIsRUFBQTtBQUV2QjtFQUdFLHNCQUFzQixFQUFBO0FBSHhCO0lBT0ksc0JBQXNCLEVBQUE7QUFFMUI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7QUFFbEI7RUFDRSxrQkFBa0IsRUFBQTtBQUVwQjtFQUNFLFNBQVMsRUFBQTtBQUVYO0VBQ0UsVUFBVSxFQUFBO0FBRVo7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTtBQVBwQjtJQVNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYyxFQUFBO0FBRWxCO0VBQ0UsZUFBZSxFQUFBO0FBRGpCO0lBR0ksbUJBQW1CLEVBQUE7QUFFdkI7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0IsRUFBQSxFQUFHO0FBRXZCO0VBQ0U7SUFDRSxTQUFTLEVBQUE7RUFDWDtJQUNFLGVBQWUsRUFBQSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuXG5bY2xhc3MqPSdjb2wtJ10ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwOyB9IH1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICY6YWZ0ZXIsICY6YmVmb3JlIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH0gfVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG5oNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uZ3JpZCB7XG4gIG1hcmdpbjogMDsgfVxuXG4uY29sLTEtNCB7XG4gIHdpZHRoOiAyNSU7IH1cblxuLm1vZHVsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlZWU7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjNjA3ZDhiOyB9IH1cblxuLmdyaWQtcGFkIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vZHVsZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ncmlkIHtcbiAgICBtYXJnaW46IDA7IH1cbiAgLm1vZHVsZSB7XG4gICAgbWluLXdpZHRoOiA2MHB4OyB9IH1cbiIsIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuW2NsYXNzKj0nY29sLSddIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XG4gIFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgKjphZnRlciwgKjpiZWZvcmUge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG5oNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uZ3JpZCB7XG4gIG1hcmdpbjogMDsgfVxuXG4uY29sLTEtNCB7XG4gIHdpZHRoOiAyNSU7IH1cblxuLm1vZHVsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlZWU7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xuICBib3JkZXItcmFkaXVzOiAycHg7IH1cbiAgLm1vZHVsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICM2MDdkOGI7IH1cblxuLmdyaWQtcGFkIHtcbiAgcGFkZGluZzogMTBweCAwOyB9XG4gIC5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2R1bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgbWFyZ2luOiAwOyB9XG4gIC5tb2R1bGUge1xuICAgIG1pbi13aWR0aDogNjBweDsgfSB9XG4iXX0= */"

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
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.sass */ "./src/app/dashboard/dashboard.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.observeUserId.subscribe(function (id) {
                resolve(!!id);
                // this.authService.setRedirectUrl(next.url.toString());
                if (!id) {
                    _this.router.navigate(['login']);
                }
            });
        });
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

/***/ "./src/app/hero-detail/hero-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <div align=\"right\">\n    <app-logout></app-logout>\n  </div>\n  <h2>{{hero.name | uppercase}} Details</h2>\n  <div><span>id:</span>{{hero.id}}</div>\n  <div><span>name:</span>{{hero.name}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n    </label>\n  </div>\n  <button (click)=\"goBack()\">go back</button>\n  <button (click)=\"save()\">save</button>\n</div>\n<app-messages></app-messages>"

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.sass":
/*!********************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm8tZGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ts ***!
  \******************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");





var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailComponent.prototype.getHero = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.updateHero(this.hero)
            .subscribe(function () { return _this.goBack(); });
    };
    HeroDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-detail',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.sass */ "./src/app/hero-detail/hero-detail.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/hero-search/hero-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Hero Search</h4>\n\n  <input #searchBox id=\"search-box\" (input)=\"search(searchBox.value)\" />\n\n  <ul>\n    <li *ngFor=\"let hero of heroes$ | async\">\n      <a routerLink=\"/detail/{{hero.id}}\">\n        {{hero.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n<app-messages></app-messages>"

/***/ }),

/***/ "./src/app/hero-search/hero-search.component.sass":
/*!********************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroSearch private styles */\n.search-result li {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width: 195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none; }\n.search-result li:hover {\n    background-color: #607D8B; }\n.search-result li a {\n    color: #888;\n    display: block;\n    text-decoration: none; }\n.search-result li a:hover, .search-result li a:active {\n      color: white; }\n#search-box {\n  width: 200px;\n  height: 20px; }\nul.search-result {\n  margin-top: 0;\n  padding-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5czMwMjkvRGVza3RvcC9NeUFuZ3VsYXJBcHAvc3JjL2FwcC9oZXJvLXNlYXJjaC9oZXJvLXNlYXJjaC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixxQkFBcUIsRUFBQTtBQVR2QjtJQVdJLHlCQUF5QixFQUFBO0FBWDdCO0lBYUksV0FBVztJQUNYLGNBQWM7SUFDZCxxQkFBcUIsRUFBQTtBQWZ6QjtNQWlCTSxZQUFZLEVBQUE7QUFFbEI7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBO0FBRWQ7RUFDRSxhQUFhO0VBQ2IsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvU2VhcmNoIHByaXZhdGUgc3R5bGVzICovXG5cbi5zZWFyY2gtcmVzdWx0IGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgd2lkdGg6IDE5NXB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCOyB9XG4gIGEge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAmOmhvdmVyLCAmOmFjdGl2ZSB7XG4gICAgICBjb2xvcjogd2hpdGU7IH0gfSB9XG5cbiNzZWFyY2gtYm94IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwcHg7IH1cblxudWwuc2VhcmNoLXJlc3VsdCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogMDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/hero-search/hero-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.ts ***!
  \******************************************************/
/*! exports provided: HeroSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function() { return HeroSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");





var HeroSearchComponent = /** @class */ (function () {
    function HeroSearchComponent(heroService) {
        this.heroService = heroService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.heroService.searchHeroes(term); }));
    };
    HeroSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-search',
            template: __webpack_require__(/*! ./hero-search.component.html */ "./src/app/hero-search/hero-search.component.html"),
            styles: [__webpack_require__(/*! ./hero-search.component.sass */ "./src/app/hero-search/hero-search.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"]])
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());



/***/ }),

/***/ "./src/app/hero.service.ts":
/*!*********************************!*\
  !*** ./src/app/hero.service.ts ***!
  \*********************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");







var HeroService = /** @class */ (function () {
    function HeroService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.heroesUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].APIEndpoint + "/heroes";
    }
    HeroService.prototype.log = function (message) {
        this.messageService.add("HeroService:" + message);
    };
    HeroService.prototype.getHeroNo404 = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (heroes) { return heroes[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " hero id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getHero id=" + id)));
    };
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        return this.http.get(this.heroesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log('fetched heroes'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getheroes', [])));
    };
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("fetched hero id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getHero id=" + id)));
    };
    HeroService.prototype.updateHero = function (hero) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'contentType': 'application/json' })
        };
        return this.http.put(this.heroesUrl, hero, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("updated hero id=" + hero.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateHero')));
    };
    HeroService.prototype.addHero = function (hero) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'contentType': 'application/json' })
        };
        return this.http.post(this.heroesUrl, hero, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (newHero) { return _this.log("added hero w/ id=" + newHero.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addHero')));
    };
    /** DELETE: delete the hero from the server */
    HeroService.prototype.deleteHero = function (hero) {
        var _this = this;
        var id = typeof hero === 'number' ? hero : hero.id;
        var url = this.heroesUrl + "/" + id;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'contentType': 'application/json' })
        };
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("deleted hero id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteHero')));
    };
    /* GET heroes whose name contains search term */
    HeroService.prototype.searchHeroes = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(this.heroesUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("found heroes matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('searchHeroes', [])));
    };
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Avengers</h2>\n<div align=\"right\">\n  <app-logout></app-logout>\n</div>\n<div>\n  <label>Hero name:\n    <input #heroName />\n  </label>\n  <button (click)=\"add(heroName.value); heroName.value=''\">\n    add\n  </button>\n</div>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\">\n    <a routerLink=\"/detail/{{hero.id}}\">\n      {{hero.name}}\n    </a>\n    <button class=\"delete\" title=\"delete hero\" (click)=\"delete(hero)\">x</button>\n  </li>\n\n</ul>\n<app-messages></app-messages>"

/***/ }),

/***/ "./src/app/heroes/heroes.component.sass":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n.heroes li {\n    position: relative;\n    cursor: pointer;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px; }\n.heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em; }\n.heroes a {\n    color: #888;\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 250px; }\n.heroes a:hover {\n      color: #607D8B; }\n.heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    min-width: 16px;\n    text-align: right;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px; }\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial; }\nbutton:hover {\n    background-color: #cfd8dc; }\nbutton.delete {\n    position: relative;\n    left: 194px;\n    top: -32px;\n    background-color: gray !important;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5czMwMjkvRGVza3RvcC9NeUFuZ3VsYXJBcHAvc3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUFBO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXLEVBQUE7QUFKYjtJQU1JLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQixFQUFBO0FBWnRCO01BY00sY0FBYztNQUNkLHNCQUFzQjtNQUN0QixVQUFVLEVBQUE7QUFoQmhCO0lBa0JJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZLEVBQUE7QUF0QmhCO01Bd0JNLGNBQWMsRUFBQTtBQXhCcEI7SUEwQkkscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQixFQUFBO0FBRTlCO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFQcEI7SUFTSSx5QkFBeUIsRUFBQTtBQVQ3QjtJQVdJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5cbi5oZXJvZXMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTtcbiAgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgcGFkZGluZzogLjNlbSAwO1xuICAgIGhlaWdodDogMS42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICM2MDdEOEI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICAgICAgbGVmdDogLjFlbTsgfSB9XG4gIGEge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICM2MDdEOEI7IH0gfVxuICAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTFweDtcbiAgICB0b3A6IC00cHg7XG4gICAgaGVpZ2h0OiAxLjhlbTtcbiAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4OyB9IH1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjOyB9XG4gICYuZGVsZXRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTk0cHg7XG4gICAgdG9wOiAtMzJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");



var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().subscribe(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero({ name: name })
            .subscribe(function (hero) {
            _this.heroes.push(hero);
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        this.heroes = this.heroes.filter(function (h) { return h !== hero; });
        this.heroService.deleteHero(hero).subscribe();
    };
    HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.sass */ "./src/app/heroes/heroes.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form method=\"post\" (ngSubmit)=\"signIn()\">\n  <div class=\"box\">\n    <h1>Dashboard</h1>\n\n    <input type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" class=\"email\" />\n\n    <input type=\"password\" name=\"email\" [(ngModel)]=\"user.password\" class=\"email\" />\n\n    <div class=\"btn\" style=\"cursor:pointer\" type=\"submit\" (click)=\"signIn()\">Sign In</div> <!-- End Btn -->\n\n    <div id=\"btn2\" style=\"cursor:pointer\" routerLink=\"/signup\">Sign Up</div> <!-- End Btn2 -->\n\n  </div> <!-- End Box -->\n\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.sass":
/*!********************************************!*\
  !*** ./src/app/login/login.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Open Sans', sans-serif;\n  background: #3498db;\n  margin: 0 auto 0 auto;\n  width: 100%;\n  text-align: center;\n  margin: 20px 0px 20px 0px; }\n\np {\n  font-size: 12px;\n  text-decoration: none;\n  color: #ffffff; }\n\nh1 {\n  font-size: 1.5em;\n  color: #525252; }\n\n.box {\n  background: white;\n  width: 300px;\n  border-radius: 6px;\n  margin: 0 auto 0 auto;\n  padding: 0px 0px 70px 0px;\n  border: #2980b9 4px solid; }\n\n.email {\n  background: #ecf0f1;\n  border: #ccc 1px solid;\n  border-bottom: #ccc 2px solid;\n  padding: 8px;\n  width: 250px;\n  color: #AAAAAA;\n  margin-top: 10px;\n  font-size: 1em;\n  border-radius: 4px; }\n\n.password {\n  border-radius: 4px;\n  background: #ecf0f1;\n  border: #ccc 1px solid;\n  padding: 8px;\n  width: 250px;\n  font-size: 1em; }\n\n.btn {\n  background: #2ecc71;\n  width: 125px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  color: white;\n  border-radius: 4px;\n  border: #27ae60 1px solid;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  float: left;\n  margin-left: 16px;\n  font-weight: 800;\n  font-size: 0.8em; }\n\n.btn:hover {\n    background: #2CC06B; }\n\n#btn2 {\n  float: left;\n  background: #3498db;\n  width: 125px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  color: white;\n  border-radius: 4px;\n  border: #2980b9 1px solid;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: 10px;\n  font-weight: 800;\n  font-size: 0.8em; }\n\n#btn2:hover {\n    background: #3594D2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5czMwMjkvRGVza3RvcC9NeUFuZ3VsYXJBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBYmxCO0lBZUksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBYmxCO0lBZUksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDBweDsgfVxuXG5wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmOyB9XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICM1MjUyNTI7IH1cblxuLmJveCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICBwYWRkaW5nOiAwcHggMHB4IDcwcHggMHB4O1xuICBib3JkZXI6ICMyOTgwYjkgNHB4IHNvbGlkOyB9XG5cbi5lbWFpbCB7XG4gIGJhY2tncm91bmQ6ICNlY2YwZjE7XG4gIGJvcmRlcjogI2NjYyAxcHggc29saWQ7XG4gIGJvcmRlci1ib3R0b206ICNjY2MgMnB4IHNvbGlkO1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgY29sb3I6ICNBQUFBQUE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cblxuLnBhc3N3b3JkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICBib3JkZXI6ICNjY2MgMXB4IHNvbGlkO1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgZm9udC1zaXplOiAxZW07IH1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQ6ICMyZWNjNzE7XG4gIHdpZHRoOiAxMjVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogIzI3YWU2MCAxcHggc29saWQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzJDQzA2QjsgfSB9XG5cbiNidG4yIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG4gIHdpZHRoOiAxMjVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogIzI5ODBiOSAxcHggc29saWQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzU5NEQyOyB9IH1cbiJdfQ== */"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signIn = function () {
        this.authService.signIn(this.user);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/login/login.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><button class=\"btn btn-info btn-lg\" (click)=\"logout()\">\n        <span class=\"glyphicon glyphicon-log-out\">Logout</span></button>\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.sass":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService) {
        this.authService = authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.sass */ "./src/app/logout/logout.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n  <h2>messages</h2>\n  <button class=\"clear\" (click)=\"messageService.clear()\">Clear</button>\n  <div *ngFor='let message of messageService.messages'>{{message}}</div>\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.sass":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter; }\n\nbody {\n  margin: 2em; }\n\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia; }\n\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  color: #888;\n  margin-bottom: 12px; }\n\nbutton:hover {\n  background-color: #cfd8dc; }\n\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5czMwMjkvRGVza3RvcC9NeUFuZ3VsYXJBcHAvc3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQVU7RUFDVix5Q0FBeUM7RUFDekMsb0JBQW9CLEVBQUE7O0FBQ3JCO0VBQ0MsV0FBVyxFQUFBOztBQUNaO0VBQ0MsY0FBYztFQUNkLDZCQUE2QixFQUFBOztBQUM5QjtFQUVFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBVnJCO0VBWUUseUJBQXlCLEVBQUE7O0FBWjNCO0VBY0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcblx0Y29sb3I6IHJlZDtcblx0Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiBsaWdodGVyOyB9XG5ib2R5IHtcblx0bWFyZ2luOiAyZW07IH1cbmJvZHksIGlucHV0W3RleHRdLCBidXR0b24ge1xuXHRjb2xvcjogY3JpbXNvbjtcblx0Zm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7IH1cbmJ1dHRvbiB7XG5cdCYuY2xlYXIge1xuXHRcdGZvbnQtZmFtaWx5OiBBcmlhbDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRwYWRkaW5nOiA1cHggMTBweDtcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdGN1cnNvcjogaGFuZDtcblx0XHRjb2xvcjogIzg4ODtcblx0XHRtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7IH1cblx0JjpkaXNhYmxlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0XHRjb2xvcjogI2FhYTtcblx0XHRjdXJzb3I6IGF1dG87IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.sass */ "./src/app/messages/messages.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"/action_page.php\" style=\"border:1px solid #ccc\" form method=\"POST\" (ngSubmit)=\"signUp()\">\n  <div class=\"container\">\n    <h1>Sign Up</h1>\n    <p>Please fill in this form to create an account.</p>\n    <hr>\n\n    <label for=\"email\"><b>UserName</b></label>\n    <input type=\"text\" placeholder=\"Enter name\" name=\"name\" [(ngModel)]=\"user.name\" required>\n    <label for=\"email\"><b>Email</b></label>\n    <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" [(ngModel)]=\"user.email\" required>\n\n    <label for=\"psw\"><b>Password</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" [(ngModel)]=\"user.password\" required>\n\n    <label for=\"psw-repeat\"><b>Repeat Password</b></label>\n    <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required>\n\n    <label>\n      <input type=\"checkbox\" checked=\"checked\" name=\"remember\" style=\"margin-bottom:15px\"> Remember me\n    </label>\n\n    <p>By creating an account you agree to our <a href=\"#\" style=\"color:dodgerblue\">Terms & Privacy</a>.</p>\n\n    <div class=\"clearfix\">\n      <button type=\"button\" class=\"cancelbtn\" routerLink=\"/login\">Cancel</button>\n      <button type=\"submit\" class=\"signupbtn\">Sign Up</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/signup/signup.component.sass":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial, Helvetica, sans-serif; }\n\n* {\n  box-sizing: border-box; }\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1; }\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none; }\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px; }\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9; }\n\nbutton:hover {\n    opacity: 1; }\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n  float: left;\n  width: 50%; }\n\n/* Float cancel and signup buttons and add an equal width */\n\n.signupbtn {\n  float: left;\n  width: 50%; }\n\n/* Add padding to container elements */\n\n.container {\n  padding: 16px; }\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N5czMwMjkvRGVza3RvcC9NeUFuZ3VsYXJBcHAvc3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDLEVBQUE7O0FBRTNDO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCLDRCQUFBOztBQUVBO0VBRUksV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFQdkI7RUFTSSxzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUVqQjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTs7QUFFckIsZ0NBQUE7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQVJkO0lBVUksVUFBVSxFQUFBOztBQUVkLHVDQUFBOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUVaLDJEQUFBOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFFWixzQ0FBQTs7QUFFQTtFQUNFLGFBQWEsRUFBQTs7QUFFZixpQkFBQTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUVoQiw2RUFBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBVyxFQUFBLEVBQUciLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyB9XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXG5cbmlucHV0IHtcbiAgJlt0eXBlPXRleHRdLCAmW3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTsgfVxuICAmW3R5cGU9dGV4dF06Zm9jdXMsICZbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgb3V0bGluZTogbm9uZTsgfSB9XG5cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xuXG4uY2FuY2VsYnRuIHtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTsgfVxuXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cblxuLnNpZ251cGJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlOyB9XG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDsgfVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cblxuLmNsZWFyZml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTsgfVxuXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xuICAgIHdpZHRoOiAxMDAlOyB9IH1cbiJdfQ== */"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.user = {
            name: '',
            email: '',
            password: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        this.authService.signUp(this.user, function (err, response) {
            console.log(err, response);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.sass */ "./src/app/signup/signup.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    APIEndpoint: 'https://testapp9676.herokuapp.com/api'
};


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
    production: false,
    APIEndpoint: 'https://localhost:3000/api/Authusers'
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

module.exports = __webpack_require__(/*! /home/sys3029/Desktop/MyAngularApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map