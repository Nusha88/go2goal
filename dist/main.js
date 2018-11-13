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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-page/welcome-page.component */ "./src/app/welcome-page/welcome-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _notebook_notebook_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notebook/notebook.component */ "./src/app/notebook/notebook.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./goals/goals.component */ "./src/app/goals/goals.component.ts");
/* harmony import */ var _goals_goal_of_life_goal_of_life_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./goals/goal-of-life/goal-of-life.component */ "./src/app/goals/goal-of-life/goal-of-life.component.ts");
/* harmony import */ var _goals_goal_of_year_goal_of_year_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./goals/goal-of-year/goal-of-year.component */ "./src/app/goals/goal-of-year/goal-of-year.component.ts");
/* harmony import */ var _goals_goal_of_month_goal_of_month_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./goals/goal-of-month/goal-of-month.component */ "./src/app/goals/goal-of-month/goal-of-month.component.ts");
/* harmony import */ var _goals_goal_of_week_goal_of_week_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./goals/goal-of-week/goal-of-week.component */ "./src/app/goals/goal-of-week/goal-of-week.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    {
        path: 'welcome',
        component: _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__["WelcomePageComponent"],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
    },
    {
        path: 'reviews',
        component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__["ReviewsComponent"],
    },
    {
        path: 'contact-us',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
    },
    {
        path: 'forgot-password',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
    },
    {
        path: 'reset-password',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__["ResetPasswordComponent"],
        children: [
            {
                path: ':token', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__["ResetPasswordComponent"]
            }
        ]
    },
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["UserProfileComponent"],
            },
            {
                path: 'todos',
                component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_6__["TodosComponent"],
            },
            {
                path: 'notes',
                component: _notebook_notebook_component__WEBPACK_IMPORTED_MODULE_7__["NotebookComponent"],
            },
            {
                path: 'posts',
                component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"],
            },
            {
                path: 'goals',
                component: _goals_goals_component__WEBPACK_IMPORTED_MODULE_9__["GoalsComponent"],
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'goal-of-life'
                    },
                    {
                        path: 'goal-of-life',
                        component: _goals_goal_of_life_goal_of_life_component__WEBPACK_IMPORTED_MODULE_10__["GoalOfLifeComponent"]
                    },
                    {
                        path: 'goals-of-year',
                        component: _goals_goal_of_year_goal_of_year_component__WEBPACK_IMPORTED_MODULE_11__["GoalOfYearComponent"]
                    },
                    {
                        path: 'goals-of-month',
                        component: _goals_goal_of_month_goal_of_month_component__WEBPACK_IMPORTED_MODULE_12__["GoalOfMonthComponent"]
                    },
                    {
                        path: 'goals-of-week',
                        component: _goals_goal_of_week_goal_of_week_component__WEBPACK_IMPORTED_MODULE_13__["GoalOfWeekComponent"]
                    },
                ]
            },
            {
                path: 'home',
                component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__["MainPageComponent"]
            },
        ]
    },
    { path: '**', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, userService, loginService) {
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
    }
    AppComponent.prototype.sendUser = function () {
        this.loginService.sendUser(this.user.username);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = localStorage.getItem('username');
        if (username) {
            this.userService.getUsers().subscribe(function (u) {
                _this.users = u;
                _this.users.find(function (user) {
                    _this.user = user;
                    if (username === _this.user.username) {
                        _this.password = _this.user.password;
                        return _this.sendUser();
                    }
                });
            });
        }
        else {
            this.router.navigate(['/welcome']);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome-page/welcome-page.component */ "./src/app/welcome-page/welcome-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _notebook_notebook_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notebook/notebook.component */ "./src/app/notebook/notebook.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./goals/goals.component */ "./src/app/goals/goals.component.ts");
/* harmony import */ var _goals_goal_of_life_goal_of_life_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./goals/goal-of-life/goal-of-life.component */ "./src/app/goals/goal-of-life/goal-of-life.component.ts");
/* harmony import */ var _goals_goal_of_week_goal_of_week_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./goals/goal-of-week/goal-of-week.component */ "./src/app/goals/goal-of-week/goal-of-week.component.ts");
/* harmony import */ var _goals_goal_of_year_goal_of_year_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./goals/goal-of-year/goal-of-year.component */ "./src/app/goals/goal-of-year/goal-of-year.component.ts");
/* harmony import */ var _goals_goal_of_month_goal_of_month_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./goals/goal-of-month/goal-of-month.component */ "./src/app/goals/goal-of-month/goal-of-month.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _core_forms_submitting_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/forms/submitting.component */ "./src/app/core/forms/submitting.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _goals_goal_of_life_first_level_step_first_level_step_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./goals/goal-of-life/first-level-step/first-level-step.component */ "./src/app/goals/goal-of-life/first-level-step/first-level-step.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pipes/truncate-pipe */ "./src/app/pipes/truncate-pipe.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import {TodoDataService} from './services/todo-data.service';




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_6__["WelcomePageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                _todos_todos_component__WEBPACK_IMPORTED_MODULE_15__["TodosComponent"],
                _notebook_notebook_component__WEBPACK_IMPORTED_MODULE_16__["NotebookComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"],
                _goals_goals_component__WEBPACK_IMPORTED_MODULE_18__["GoalsComponent"],
                _goals_goal_of_life_goal_of_life_component__WEBPACK_IMPORTED_MODULE_19__["GoalOfLifeComponent"],
                _goals_goal_of_week_goal_of_week_component__WEBPACK_IMPORTED_MODULE_20__["GoalOfWeekComponent"],
                _goals_goal_of_year_goal_of_year_component__WEBPACK_IMPORTED_MODULE_21__["GoalOfYearComponent"],
                _goals_goal_of_month_goal_of_month_component__WEBPACK_IMPORTED_MODULE_22__["GoalOfMonthComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__["UserProfileComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_24__["UserComponent"],
                _core_forms_submitting_component__WEBPACK_IMPORTED_MODULE_25__["SubmittingComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _goals_goal_of_life_first_level_step_first_level_step_component__WEBPACK_IMPORTED_MODULE_27__["FirstLevelStepComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_28__["MainPageComponent"],
                _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_35__["TruncatePipe"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_36__["ReviewsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_37__["ContactComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_38__["ForgotPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_39__["ResetPasswordComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"]
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
                // TodoDataService,
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDialog"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n  <nav class=\"navbar navbar-expand-lg\">\n    <a class=\"navbar-brand\" routerLink=\"/welcome\">\n      <img src=\"../../assets/images/logoShot.png\" alt=\"\">\n    </a>\n    <div class=\"btns-log\">\n      <a [routerLink]=\"['/login']\">Log in</a>\n      <a [routerLink]=\"['/register']\">Register</a>\n    </div>\n  </nav>\n  <div class=\"contact-component\">\n    <div class=\"row\">\n      <div class=\"col-md-12 contact-component\">\n        <div class=\"container text-center\">\n          <h2 class=\"heading-secondary\">Contact Us\n          </h2>\n        </div>\n        <div class=\"contact-content\">\n          <p>If you have any questions, proposals or just want to leave a feedback, please, contact us</p>\n          <div class=\"social-links\">\n            <a href=\"https://www.instagram.com/go2goaltoday/\" target=\"_blank\" class=\"ig-icon\"></a>\n            <a href=\"\" class=\"fb-icon\"></a>\n            <a href=\"\" class=\"vk-icon\"></a>\n            <a href=\"\" class=\"mail-icon\"></a>\n          </div>\n          <p>or leave a review <a [routerLink]=\"['/reviews']\"> HERE -> </a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  padding: 3rem; }\n\nnav {\n  background-image: linear-gradient(to right, #6f49e7, #4776e6);\n  color: #ffffff;\n  font-size: 1.4rem;\n  height: 25vh;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 18vh, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 18vh, 0 100%); }\n\nnav .navbar-brand img {\n    height: 4rem; }\n\nnav .btns-log {\n    display: block;\n    position: absolute;\n    right: 1rem; }\n\nnav .btns-log a {\n      color: #ffffff;\n      margin-right: 1rem; }\n\nnav .btns-log a:hover {\n        color: #ffb900; }\n\n.heading-secondary {\n  color: #4776E6;\n  -webkit-transform: none;\n          transform: none;\n  width: 100%;\n  margin-top: 2rem; }\n\n.contact-content {\n  margin: 3rem auto;\n  width: 90%;\n  padding: 2rem; }\n\n.contact-content .contact-container {\n    width: 100%;\n    margin: 0 auto; }\n\n.contact-content .contact-container button {\n      padding: 1rem 4rem;\n      margin-left: 3rem; }\n\n.contact-content .contact-container button:focus {\n        outline: none; }\n\n.contact-content h2 {\n    text-align: center;\n    color: #4776E6;\n    margin-bottom: 1rem; }\n\n.contact-content p {\n    text-align: center;\n    font-size: 1.6rem; }\n\n.social-links {\n  display: block;\n  text-align: center;\n  padding: 12rem; }\n\n.social-links a {\n    padding: 2rem;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    margin-right: 4rem; }\n\n.social-links .ig-icon {\n    background-image: url(\"data:image/png;base64,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\"); }\n\n.social-links .fb-icon {\n    background-image: url(\"data:image/png;base64,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\"); }\n\n.social-links .vk-icon {\n    background-image: url(\"data:image/png;base64,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\"); }\n\n.social-links .mail-icon {\n    background-image: url(\"data:image/png;base64,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\"); }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/core/forms/submitting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/forms/submitting.component.ts ***!
  \****************************************************/
/*! exports provided: SubmittingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittingComponent", function() { return SubmittingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SubmittingComponent = /** @class */ (function () {
    function SubmittingComponent() {
    }
    SubmittingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submitting',
            template: "\n    <img src=\"../../../assets/images/loading.svg\">\n  ",
            styles: ["\n    :host {\n      display: inline-block;\n    }\n    img {\n      display: inline-block;\n      margin: 4px 3px;\n      width: 30px;\n    }\n  "]
        })
    ], SubmittingComponent);
    return SubmittingComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-section\">\n  <div class=\"footer__logo-box\">\n    <img src=\"../../assets/images/footer-logo.png\" alt=\"\" class=\"footer-logo\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <!--<div class=\"footer__navigation\">-->\n          <ul class=\"footer__list\">\n            <li class=\"footer__item\"><a [routerLink]=\"['/contact-us']\">Contact us</a></li>\n          </ul>\n        <!--</div>-->\n      </div>\n      <div class=\"col-md-4 offset-4\">\n        <p class=\"footer__copyright\">© 2018 Go2Goal</p>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-section {\n  background-color: #333;\n  padding: 9rem 0 7rem 0;\n  font-size: 1.4rem;\n  color: #f7f7f7; }\n  .footer-section .footer__logo-box {\n    text-align: center;\n    margin-bottom: 8rem; }\n  .footer-section .footer__logo {\n    width: 10rem;\n    height: auto; }\n  .footer-section .footer__navigation {\n    border-top: 1px solid #777;\n    padding-top: 2rem;\n    display: inline-block; }\n  @media (max-width: 56.25em) {\n      .footer-section .footer__navigation {\n        width: 100%;\n        text-align: center; } }\n  .footer-section .footer__list {\n    list-style: none;\n    border-top: 1px solid #777;\n    padding-top: 2rem;\n    text-align: center;\n    width: 100%;\n    text-transform: uppercase; }\n  .footer-section .footer__item {\n    display: inline-block; }\n  .footer-section .footer__item:not(:last-child) {\n    margin-right: 1.5rem; }\n  .footer-section .footer__item a:link, .footer-section .footer__item a:visited {\n    color: #f7f7f7;\n    background-color: #333;\n    text-decoration: none;\n    text-transform: uppercase;\n    display: inline-block;\n    transition: all .2s; }\n  .footer-section .footer__link:hover, .footer-section .footer__link:active {\n    color: #55c57a;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);\n    -webkit-transform: rotate(5deg) scale(1.3);\n            transform: rotate(5deg) scale(1.3); }\n  .footer-section .footer__copyright {\n    border-top: 1px solid #777;\n    padding-top: 2rem;\n    text-align: center;\n    width: 100%;\n    text-transform: uppercase;\n    float: right; }\n  @media (max-width: 56.25em) {\n    .footer-section .offset-2 {\n      margin-left: 0; } }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"forgot-password-container\">\n  <div class=\"forgot-password-page__content\">\n    <div class=\"header__logo-box\">\n      <img src=\"../../assets/images/logoShot.png\" alt=\"\">\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form #form=\"ngForm\" class=\"forgot-password-form\" (ngSubmit)=\"send(email)\">\n          <div class=\"u-margin-bottom-small\">\n            <h2 class=\"heading-secondary\">Forgot your password?</h2>\n          </div>\n\n          <input class=\"form-input\" placeholder=\"E-Mail\" type=\"text\" name=\"email\" required\n                 [(ngModel)]=\"email\">\n          <div class=\"text-right\" style=\"display: block;\">\n            <button type=\"submit\" class=\"btn btn--white\" [disabled]=\"!form.valid\">Reset Password</button>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <p style=\"text-align: center;\"><a [routerLink]=\"['/login']\">Back to Login</a></p>\n        <p *ngIf=\"submit\" class=\"check\">Check your email!</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgot-password-container {\n  padding: 3rem; }\n\n.forgot-password-page__content {\n  position: relative;\n  font-family: Lato, sans-serif;\n  color: #ffffff;\n  height: 95vh;\n  background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.8), rgba(71, 118, 230, 0.8)), url('34943640193_0b537367ac_h-min.jpg');\n  background-size: cover;\n  background-position: top;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 78vh, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 78vh, 0 100%); }\n\n.forgot-password-page__content .header__logo-box {\n    position: absolute;\n    top: 4rem;\n    left: 4rem; }\n\n.forgot-password-page__content .header__logo-box img {\n      height: 4.5rem; }\n\n.forgot-password-page__content p {\n    display: block;\n    text-align: center;\n    margin-top: 2rem;\n    font-size: 1.6rem;\n    color: #ffffff; }\n\n.forgot-password-page__content p a {\n      color: #ffffff;\n      padding-left: 0.5rem; }\n\n.forgot-password-page__content p a:hover {\n        text-decoration: underline;\n        color: #FFDD3A; }\n\n.forgot-password-page__content p.check {\n    color: #ff7730;\n    font-size: 2rem;\n    text-align: center;\n    padding: 2rem; }\n\n.forgot-password-form {\n  margin: 0 auto;\n  width: 50%;\n  padding: 3rem; }\n\n.forgot-password-form .u-margin-bottom-small {\n    text-align: center; }\n\n.forgot-password-form .u-margin-bottom-small h2 {\n      text-align: center;\n      display: block;\n      color: #ffffff;\n      margin-top: 10rem;\n      letter-spacing: 1rem;\n      margin-bottom: 4rem;\n      font-weight: 400; }\n\n.forgot-password-form button {\n    margin-top: 4rem;\n    cursor: pointer;\n    margin-right: 0;\n    color: #4776E6; }\n\n.forgot-password-form button:hover {\n      background-color: #ffffff; }\n\n.forgot-password-form .form-input {\n    font-size: 1.5rem;\n    padding: 1rem 2rem;\n    color: #212121;\n    border-radius: 2px;\n    background-color: rgba(255, 255, 255, 0.7);\n    border: none;\n    font-family: Lato, sans-serif;\n    border-bottom: 3px solid transparent;\n    width: 100%;\n    display: block;\n    transition: all .3s; }\n\n.forgot-password-form .form-input:focus {\n      outline: none;\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n      border-bottom: 3px solid #4776E6; }\n\n.forgot-password-form .form-input:focus:invalid {\n      border-bottom: 3px solid orangered !important; }\n\n.forgot-password-form .form-input::-webkit-input-placeholder {\n      color: #212121; }\n\n.footer {\n  margin-top: -15rem; }\n\n@media (max-width: 75em) {\n    .footer {\n      margin-top: -19rem; } }\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.submit = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.send = function (email) {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            users.forEach(function (user) {
                _this.user = user;
                if (user.email === email) {
                    console.log(_this.user);
                    _this.userService.postUserEmail(email, user._id);
                    _this.submit = true;
                    localStorage.setItem('username', user.username);
                    localStorage.setItem('remember', 'true');
                }
            });
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/goals/goal-of-life/first-level-step/first-level-step.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/goals/goal-of-life/first-level-step/first-level-step.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"goal-of-life--first-step\">\n  <span class=\"goal-first-step--add\"><i class=\"ion-android-add\"></i></span>\n  <span class=\"goal-first-step--edit\" (click)=\"editFirstStep()\"><i class=\"ion-edit\"></i></span>\n  <span class=\"goal-first-step--title\">First Level</span>\n  <span class=\"goal-first-step--remove\"><i class=\"ion-close-round\"></i></span>\n  <p>{{goal.first_level_steps}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/goals/goal-of-life/first-level-step/first-level-step.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/goals/goal-of-life/first-level-step/first-level-step.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".goal-of-life--first-step {\n  position: relative;\n  width: 75%;\n  margin: 0 auto;\n  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 3px;\n  padding: 6rem;\n  padding-left: 9rem;\n  font-size: 1.6rem;\n  -webkit-transform: skewX(-12deg);\n          transform: skewX(-12deg);\n  transition: all .4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-bottom: 2rem; }\n  .goal-of-life--first-step .goal-first-step--add {\n    position: absolute;\n    top: 0;\n    right: 4rem;\n    padding: .5rem;\n    font-size: 1.2rem;\n    color: #ff7730;\n    cursor: pointer;\n    display: none; }\n  .goal-of-life--first-step .goal-first-step--add:hover {\n      display: block;\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n  .goal-of-life--first-step .goal-first-step--edit {\n    position: absolute;\n    top: 0;\n    right: 2rem;\n    padding: .5rem;\n    font-size: 1.2rem;\n    color: #ff7730;\n    cursor: pointer;\n    display: none; }\n  .goal-of-life--first-step .goal-first-step--edit:hover {\n      display: block;\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n  .goal-of-life--first-step .goal-first-step--remove {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    color: #ff7730;\n    cursor: pointer;\n    display: none; }\n  .goal-of-life--first-step .goal-first-step--remove:hover {\n      display: block;\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n  .goal-of-life--first-step .goal-first-step--title {\n    position: absolute;\n    color: #ff7730;\n    padding: .5rem;\n    opacity: .8;\n    left: 0;\n    top: 0;\n    text-transform: uppercase;\n    display: block; }\n  .goal-of-life--first-step p {\n    margin: 1rem auto;\n    text-align: center;\n    font-size: 1.6rem; }\n  .goal-of-life--first-step:hover .goal-first-step--edit {\n  display: block; }\n  .goal-of-life--first-step:hover .goal-first-step--remove {\n  display: block; }\n  .goal-of-life--first-step:hover .goal-first-step--add {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/goals/goal-of-life/first-level-step/first-level-step.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/goals/goal-of-life/first-level-step/first-level-step.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FirstLevelStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstLevelStepComponent", function() { return FirstLevelStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirstLevelStepComponent = /** @class */ (function () {
    function FirstLevelStepComponent(userService) {
        this.userService = userService;
        this.editChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editedFls = true;
    }
    FirstLevelStepComponent.prototype.editFirstStep = function () {
        this.editedFls = !this.editedFls;
        this.editChanged.emit(this.editedFls);
    };
    FirstLevelStepComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FirstLevelStepComponent.prototype, "goal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FirstLevelStepComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FirstLevelStepComponent.prototype, "editChanged", void 0);
    FirstLevelStepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first-level-step',
            template: __webpack_require__(/*! ./first-level-step.component.html */ "./src/app/goals/goal-of-life/first-level-step/first-level-step.component.html"),
            styles: [__webpack_require__(/*! ./first-level-step.component.scss */ "./src/app/goals/goal-of-life/first-level-step/first-level-step.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], FirstLevelStepComponent);
    return FirstLevelStepComponent;
}());



/***/ }),

/***/ "./src/app/goals/goal-of-life/goal-of-life.component.html":
/*!****************************************************************!*\
  !*** ./src/app/goals/goal-of-life/goal-of-life.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"gol-of-life__content\">-->\n<div class=\"row goals_content\">\n  <div class=\"col-md-12\" style=\"padding: 0;\">\n    <p class=\"pre--paragraph\">It's time to find your way!</p>\n    <p class=\"main-paragraph\">There is no universal definition for happiness. Every persone defines it in different ways.\n      But obviously in order to feel happy you should achieve or have something. Something that fills your life with meaning.\n      And when you get it you'll be able to say: \"That is What I was seeking for, what makes me happy.\n      And that was the main goal of my life.\n      Now I can be proud of myself, relax and just enjoy the result of those efforts I made for achieving this goal\".\n      <br>\n      We all set goals but we don't really understand what we want to get in the end. That's why we should move from the end to beginning.\n      First of all we need to define what will be the last stop in our journey to\n      happiness and absolute satisfaction. And then move on from this point to today.\n    </p>\n  </div>\n</div>\n<div class=\"goal-of-life__container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"padding: 0;\">\n      <div class=\"form-group\" *ngIf=\"showAddMain\">\n        <h4 class=\"text-center\">You don't have a goal of life yet. Let's create it now! </h4>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <input type=\"text\"\n                   #mainGoal\n                   class=\"form-input\"\n                   id=\"mainGoal\"\n                   placeholder=\"Enter your main goal\">\n            <button type=\"button\" class=\"btn btn--indigo\" (click)=\"getMainGoal(mainGoal.value)\">Add</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngFor=\"let goal of goals, let inde = index\">\n    <div class=\"col-md-12 text-center\">\n      <div class=\"goal-of-life--content\">\n        <h2 class=\"heading-secondary\"> <i class=\"fas fa-crown\"></i> {{goal.title}}</h2>\n        <span class=\"goal--add\" (click)=\"addFls = !addFls\"><i class=\"fas fa-plus\"></i></span>\n        <span class=\"goal--edit\" (click)=\"editMainGoal()\"><i class=\"far fa-edit\"></i></span>\n        <span class=\"goal--remove\" (click)=\"deleteGol(inde)\"><i class=\"far fa-times-circle\"></i></span>\n        <span class=\"goal--title\">Main Goal</span>\n        <form class=\"mainGoalInputs\" *ngIf=\"edited\">\n          <div class=\"form-group\" *ngIf=\"edited\">\n            <input type=\"text\"\n                   #mainGoalEdit\n                   class=\"form-input\"\n                   id=\"mainGoalEdit\"\n                   value=\"{{goal.title}}\">\n            <button type=\"button\" class=\"btn btn--indigo\" (click)=\"updateMainGoal(mainGoalEdit.value)\">Edit</button>\n          </div>\n        </form>\n        <div class=\"row addFlsForm\">\n          <div class=\"col-md-12\">\n            <div *ngIf=\"addFls\">\n              <input type=\"text\"\n                     #fls_name\n                     class=\"form-input\"\n                     id=\"firstStep\"\n                     placeholder=\"What'll help you to achieve the main goal?\">\n              <button type=\"button\" class=\"btn btn--indigo\" (click)=\"addFirstStep(fls_name.value)\">Add</button>\n            </div>\n          </div>\n        </div>\n        <!--first-level-step-->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <ul class=\"first-step-goals\" *ngIf=\"first_level_steps\">\n              <li class=\"goal-of-life--first-step\"\n                  *ngFor=\"let fls of first_level_steps; let i = index\"\n                  [ngClass]=\"{'is-active': fls.editedFls}\">\n                <!--ADD SECOND LEVEL STEP-->\n                <div *ngIf=\"fls.addSls || addSls\" class=\"fls-input addSlsInput\">\n                  <input type=\"text\"\n                         #sls_nameAdd\n                         class=\"form-input\"\n                         id=\"secondStep\"\n                         placeholder=\"What should you do for this?\">\n                  <button type=\"button\" class=\"btn btn--orange\" (click)=\"addSecondStep(sls_nameAdd.value, i)\">Add\n                  </button>\n                </div>\n                <div class=\"form-group fls-input\" *ngIf=\"fls.editedFlsP || editedFlsP\">\n                  <input type=\"text\"\n                         #fls_nameEdit\n                         class=\"form-input\"\n                         id=\"firstStepEdit\"\n                         value=\"{{fls.title}}\">\n                  <button type=\"button\" class=\"btn btn--orange\" (click)=\"updateFirstStep(fls_nameEdit.value)\">Edit\n                  </button>\n                </div>\n                <span class=\"goal-first-step--add\" (click)=\"fls.addSls = !fls.addSls\"><i class=\"fas fa-plus\"></i></span>\n                <span class=\"goal-first-step--edit\" (click)=\"fls.editedFlsP = !fls.editedFlsP\"><i class=\"far fa-edit\"></i></span>\n                <span class=\"goal-first-step--title\">First Level</span>\n                <span class=\"goal-first-step--remove\" (click)=\"deleteFls(fls, i)\"><i class=\"far fa-times-circle\"></i></span>\n                <p class=\"fls_title\">{{fls.title}}</p>\n                <ul>\n                  <li class=\"goal-of-life--second-step\" *ngFor=\"let sls of fls.second_level_steps; let index = index\">\n                    <span class=\"goal-second-step--title\">Second Level</span>\n                    <span class=\"goal-second-step--add\" (click)=\"sls.addTls = !sls.addTls\">\n                      <i class=\"fas fa-plus\"></i></span>\n                    <span class=\"goal-second-step--edit\" (click)=\"sls.editedSls = !sls.editedSls\">\n                      <i class=\"far fa-edit\"></i></span>\n                    <span class=\"goal-second-step--remove\" (click)=\"deleteSls(sls, i, index)\">\n                      <i class=\"far fa-times-circle\"></i></span>\n                    <div class=\"row addTlsForm\" *ngIf=\"sls.addTls || addTls\">\n                      <input type=\"text\"\n                             #tls_name\n                             class=\"form-input\"\n                             id=\"thirdStep\"\n                             placeholder=\"What should you do for this?\">\n                      <button type=\"button\" class=\"btn btn--green\" (click)=\"addThirdStep(tls_name.value, i, index)\">\n                        Add\n                      </button>\n                    </div>\n                    <div class=\"row sls-input\" *ngIf=\"sls.editedSls || editedSls\">\n                      <input type=\"text\"\n                             #sls_nameEdit\n                             class=\"form-input\"\n                             id=\"secondStepEdit\"\n                             value=\"{{sls.title}}\">\n                      <button type=\"button\" class=\"btn btn--green\" (click)=\"updateSecondStep(sls_nameEdit.value, i)\">\n                        Edit\n                      </button>\n                    </div>\n                    <p>{{sls.title}}</p>\n                    <ol>\n                      <li class=\"goal-of-life--third-step\" *ngFor=\"let tls of sls.third_level_steps; let ind = index\">\n                        <span class=\"goal-third-step--title\">Third Level</span>\n                        <span class=\"goal-third-step--add\" (click)=\"tls.addFthls = !tls.addFthls\">\n                      <i class=\"fas fa-plus\"></i></span>\n                        <span class=\"goal-third-step--edit\" (click)=\"tls.editedTls = !tls.editedTls\">\n                      <i class=\"far fa-edit\"></i></span>\n                        <span class=\"goal-third-step--remove\" (click)=\"deleteTls(tls, ind, i, index)\">\n                      <i class=\"far fa-times-circle\"></i></span>\n                        <div class=\"row addFthlsForm\" *ngIf=\"tls.addFthls || addFthls\">\n                          <input type=\"text\"\n                                 #fthls_name\n                                 class=\"form-input\"\n                                 id=\"fourthStep\"\n                                 placeholder=\"What should you do for this?\">\n                          <button type=\"button\" class=\"btn btn--indigo\"\n                                  (click)=\"addFourthStep(fthls_name.value, i, index, ind)\">Add\n                          </button>\n                        </div>\n                        <div class=\"row sls-input\" *ngIf=\"tls.editedTls || editedTls\">\n                          <input type=\"text\"\n                                 #tls_nameEdit\n                                 class=\"form-input\"\n                                 id=\"thirdStepEdit\"\n                                 value=\"{{tls.title}}\">\n                          <button type=\"button\" class=\"btn btn--indigo\"\n                                  (click)=\"updateThirdStep(tls_nameEdit.value, i, index)\">\n                            Edit\n                          </button>\n                        </div>\n                        <p>{{tls.title}}</p>\n                        <ol>\n                          <li class=\"goal-of-life--fourth-step\"\n                              *ngFor=\"let fthls of tls.fourth_level_steps; let ind4 = index\">\n                            <span class=\"goal-fourth-step--title\">Fourth Level</span>\n                            <span class=\"goal-fourth-step--add\" (click)=\"fthls.addFithls = !fthls.addFithls\">\n                              <i class=\"fas fa-plus\"></i></span>\n                            <span class=\"goal-fourth-step--edit\" (click)=\"fthls.editedFthls = !fthls.editedFthls\">\n                              <i class=\"far fa-edit\"></i></span>\n                                    <span class=\"goal-fourth-step--remove\" (click)=\"deleteFthls(fthls, i, index, ind, ind4)\">\n                              <i class=\"far fa-times-circle\"></i></span>\n\n                            <div class=\"row addFithlsForm\" *ngIf=\"fthls.addFithls || addFithls\">\n                              <input type=\"text\"\n                                     #fithls_name\n                                     class=\"form-input\"\n                                     id=\"fifthStep\"\n                                     placeholder=\"What should you do for this?\">\n                              <button type=\"button\" class=\"btn btn--light-green\"\n                                      (click)=\"addFifthStep(fithls_name.value, i, index, ind, ind4)\">Add\n                              </button>\n                            </div>\n\n                            <div class=\"row sls-input\" *ngIf=\"fthls.editedFthls || editedFthls\">\n                              <input type=\"text\"\n                                     #fthls_nameEdit\n                                     class=\"form-input\"\n                                     id=\"fourtStepEdit\"\n                                     value=\"{{fthls.title}}\">\n                              <button type=\"button\" class=\"btn btn--light-green\"\n                                      (click)=\"updateFourthStep(fthls_nameEdit.value, i, index, ind)\">\n                                Edit\n                              </button>\n                            </div>\n                            <p>{{fthls.title}}</p>\n                            <ol>\n                              <li class=\"goal-of-life--fifth-step\" *ngFor=\"let fithls of fthls.fifth_level_steps; let ind5 = index\">\n                                <span class=\"goal-fifth-step--title\">Fifth Level</span>\n                                <span class=\"goal-fifth-step--edit\" (click)=\"fithls.editedFithls = !fithls.editedFithls\">\n                      <i class=\"far fa-edit\"></i></span>\n                                <span class=\"goal-fifth-step--remove\" (click)=\"deleteFithls(fithls, i, index, ind, ind4, ind5 )\">\n                      <i class=\"far fa-times-circle\"></i></span>\n                                <div class=\"row sls-input\" *ngIf=\"fithls.editedFithls || editedFithls\">\n                                  <input type=\"text\"\n                                         #fith_nameEdit\n                                         class=\"form-input\"\n                                         id=\"fifthStepEdit\"\n                                         value=\"{{fithls.title}}\">\n                                  <button type=\"button\" class=\"btn btn--light-orange\"\n                                          (click)=\"updateFifthStep(fith_nameEdit.value, i, index, ind, ind4)\">\n                                    Edit\n                                  </button>\n                                </div>\n                                <p>{{fithls.title}}</p>\n                              </li>\n                            </ol>\n                          </li>\n                        </ol>\n                      </li>\n                    </ol>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pre--paragraph\"></div>\n</div>\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/goals/goal-of-life/goal-of-life.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/goals/goal-of-life/goal-of-life.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gol-of-life__content {\n  padding: 3rem; }\n\n.pre--paragraph {\n  font-size: 2.6rem;\n  text-align: center;\n  padding: 1rem 20rem;\n  font-style: italic;\n  color: #212121;\n  letter-spacing: 1.5px;\n  line-height: 2;\n  position: relative; }\n\n.pre--paragraph:after {\n    content: '';\n    width: 30rem;\n    height: .5rem;\n    background-color: #ff7730;\n    position: absolute;\n    bottom: 0;\n    right: 38%; }\n\n.goal-of-life__container .pre--paragraph {\n  margin-top: 3rem; }\n\n.goals_content {\n  background-color: #ffffff;\n  color: #212121;\n  margin: 0; }\n\n.goals_content .main-paragraph {\n    font-size: 1.6rem;\n    text-align: justify;\n    padding: 3rem 4rem;\n    margin-bottom: 3rem;\n    color: #212121;\n    letter-spacing: 1px; }\n\n.form-input {\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n  font-size: 1.5rem;\n  padding: 1.5rem 2rem;\n  color: inherit;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: none;\n  font-family: Lato, sans-serif;\n  border-bottom: 3px solid transparent;\n  width: 50%;\n  display: block;\n  float: left;\n  transition: all .3s; }\n\n.form-input:focus {\n    outline: none;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n    border-bottom: 3px solid #4776E6; }\n\n.form-input:focus:invalid {\n    border-bottom: 3px solid orangered !important; }\n\n.form-input::-webkit-input-placeholder {\n    color: #757575; }\n\n.btn {\n  margin-left: 2rem; }\n\n.goal-of-life__container {\n  padding: 1rem; }\n\n.goal-of-life__container h4 {\n    padding: 3rem;\n    color: #ff7730;\n    text-transform: uppercase;\n    margin-bottom: 4rem;\n    font-size: 1.8rem; }\n\n.goal-of-life__container .heading-secondary {\n    padding: 3rem;\n    padding-bottom: 0;\n    line-height: 1.5; }\n\n.goal-of-life__container .heading-secondary i {\n      display: inline-block;\n      background-image: linear-gradient(to right, #6F49E7, #4776E6);\n      -webkit-background-clip: text;\n      color: transparent;\n      margin-right: 3rem; }\n\n.goal-of-life__container .heading-secondary:hover {\n      -webkit-transform: none;\n              transform: none;\n      text-shadow: none; }\n\n.goal-of-life__container .goal-of-life--content {\n    position: relative;\n    width: 100%;\n    margin: 0 auto;\n    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n    font-size: 1.6rem;\n    transition: all .4s;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    margin-bottom: 2rem; }\n\n.goal-of-life__container .goal-of-life--content .goal--title {\n      position: absolute;\n      padding: 1rem;\n      opacity: .6;\n      left: 0;\n      top: 0;\n      font-size: 1rem;\n      text-transform: uppercase;\n      display: block;\n      z-index: 2;\n      z-index: 4;\n      color: #6F49E7; }\n\n.goal-of-life__container .goal-of-life--content .goal--add {\n      position: absolute;\n      top: 0;\n      padding: .5rem;\n      font-size: 1.2rem;\n      cursor: pointer;\n      display: none;\n      transition: all .4s;\n      z-index: 4;\n      color: #4776E6;\n      right: 4rem; }\n\n.goal-of-life__container .goal-of-life--content .goal--add:hover {\n        display: block;\n        -webkit-backface-visibility: hidden; }\n\n.goal-of-life__container .goal-of-life--content .goal--add:hover {\n        -webkit-transform: scale(1.5) rotate(90deg);\n                transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life__container .goal-of-life--content .goal--edit {\n      position: absolute;\n      top: 0;\n      padding: .5rem;\n      font-size: 1.2rem;\n      cursor: pointer;\n      display: none;\n      transition: all .4s;\n      z-index: 4;\n      color: #4776E6;\n      right: 2rem; }\n\n.goal-of-life__container .goal-of-life--content .goal--edit:hover {\n        display: block;\n        -webkit-backface-visibility: hidden; }\n\n.goal-of-life__container .goal-of-life--content .goal--edit:hover {\n        -webkit-transform: scale(1.5);\n                transform: scale(1.5); }\n\n.goal-of-life__container .goal-of-life--content .goal--remove {\n      position: absolute;\n      top: 0;\n      padding: .5rem;\n      font-size: 1.2rem;\n      cursor: pointer;\n      display: none;\n      transition: all .4s;\n      z-index: 4;\n      color: #4776E6;\n      right: 0; }\n\n.goal-of-life__container .goal-of-life--content .goal--remove:hover {\n        display: block;\n        -webkit-backface-visibility: hidden; }\n\n.goal-of-life__container .goal-of-life--content .goal--remove:hover {\n        -webkit-transform: scale(1.5) rotate(90deg);\n                transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life__container .goal-of-life--content form.mainGoalInputs {\n      padding: 1rem;\n      width: 100%;\n      box-sizing: border-box;\n      padding-top: 3rem;\n      z-index: 3; }\n\n.goal-of-life__container .goal-of-life--content form.mainGoalInputs input {\n        width: 50%;\n        float: left;\n        background-color: #ffffff; }\n\n.goal-of-life__container .goal-of-life--content form.mainGoalInputs button {\n        margin: 0;\n        display: block;\n        margin-left: 2rem; }\n\n.goal-of-life__container .goal-of-life--content:hover .goal--edit {\n    display: block; }\n\n.goal-of-life__container .goal-of-life--content:hover .goal--remove {\n    display: block; }\n\n.goal-of-life__container .goal-of-life--content:hover .goal--add {\n    display: block; }\n\nli.is-active {\n  outline: 1px solid #ff7730; }\n\n.addFlsForm {\n  margin-bottom: 2rem;\n  margin-top: 2rem; }\n\n.goal-of-life--first-step {\n  box-sizing: border-box;\n  list-style: none;\n  position: relative;\n  width: 48%;\n  display: inline-block;\n  margin: 0 auto;\n  margin-right: 2rem;\n  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);\n  background-image: linear-gradient(to right bottom, rgba(255, 185, 0, 0.3), rgba(255, 119, 48, 0.3));\n  border-radius: 3px;\n  padding: 2rem;\n  font-size: 1.6rem;\n  transition: all .4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-bottom: 2rem;\n  vertical-align: top; }\n\n.goal-of-life--first-step .goal-first-step--add {\n    color: #ff7730;\n    right: 4rem;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--first-step .goal-first-step--add:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--first-step .goal-first-step--add:hover {\n      -webkit-transform: scale(1.5) rotate(90deg);\n              transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life--first-step .goal-first-step--edit {\n    color: #ff7730;\n    right: 2rem;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--first-step .goal-first-step--edit:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--first-step .goal-first-step--edit:hover {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n\n.goal-of-life--first-step .goal-first-step--remove {\n    color: #ff7730;\n    right: 0;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--first-step .goal-first-step--remove:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--first-step .goal-first-step--remove:hover {\n      -webkit-transform: scale(1.5) rotate(90deg);\n              transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life--first-step .goal-first-step--title {\n    color: #ff7730;\n    position: absolute;\n    padding: 1rem;\n    opacity: .6;\n    left: 0;\n    top: 0;\n    font-size: 1rem;\n    text-transform: uppercase;\n    display: block;\n    z-index: 2; }\n\n.goal-of-life--first-step p.fls_title {\n    margin: 1rem auto;\n    text-align: center;\n    font-size: 2rem;\n    padding: 2.5rem;\n    color: #ff7730; }\n\n.goal-of-life--first-step .fls-input {\n    width: 100%;\n    box-sizing: border-box;\n    z-index: 1; }\n\n.goal-of-life--first-step .fls-input input {\n      padding: 1rem;\n      margin: 0;\n      margin-top: 2.8rem;\n      width: 65%;\n      outline: 1px solid #ff7730;\n      box-shadow: none; }\n\n.goal-of-life--first-step .fls-input input:focus {\n        outline: none;\n        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n        border-bottom: 3px solid #ff7730; }\n\n.goal-of-life--first-step .fls-input button {\n      padding: 1rem 3rem;\n      margin: 0;\n      margin-top: 2.8rem; }\n\n.goal-of-life--first-step:nth-child(even) {\n    margin-right: 0; }\n\n.goal-of-life--second-step {\n  box-sizing: border-box;\n  list-style: none;\n  position: relative;\n  width: 49%;\n  display: inline-block;\n  margin: 0 auto;\n  margin-right: 1%;\n  background-color: #ffffff;\n  border-radius: 3px;\n  padding: 2rem;\n  font-size: 1.4rem;\n  transition: all .4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-bottom: 2rem;\n  vertical-align: top; }\n\n.goal-of-life--second-step .goal-second-step--title {\n    color: #28b485;\n    position: absolute;\n    padding: 1rem;\n    opacity: .6;\n    left: 0;\n    top: 0;\n    font-size: 1rem;\n    text-transform: uppercase;\n    display: block;\n    z-index: 2; }\n\n.goal-of-life--second-step .goal-second-step--add {\n    color: #28b485;\n    right: 4rem;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--second-step .goal-second-step--add:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--second-step .goal-second-step--add:hover {\n      -webkit-transform: scale(1.5) rotate(90deg);\n              transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life--second-step .goal-second-step--edit {\n    right: 2rem;\n    color: #28b485;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--second-step .goal-second-step--edit:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--second-step .goal-second-step--edit:hover {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n\n.goal-of-life--second-step .goal-second-step--remove {\n    right: 0;\n    color: #28b485;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--second-step .goal-second-step--remove:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--second-step .goal-second-step--remove:hover {\n      -webkit-transform: scale(1.5) rotate(90deg);\n              transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life--second-step p {\n    margin: 1.5rem auto;\n    text-align: center;\n    color: #28b485; }\n\n.goal-of-life--second-step .sls-input {\n    margin-top: 1.2rem; }\n\n.goal-of-life--second-step .sls-input input {\n      margin-left: 0;\n      margin-top: .5rem;\n      padding: .5rem;\n      width: 100%; }\n\n.goal-of-life--second-step .sls-input input:focus {\n        outline: none;\n        box-shadow: 0 1rem 2rem rgba(40, 180, 133, 0.1); }\n\n.goal-of-life--second-step .sls-input button {\n      padding: 0.5rem 2rem;\n      margin: 0;\n      margin-top: .5rem; }\n\n.goal-of-life--second-step:nth-child(even) {\n    margin-right: 0; }\n\n.addTlsForm {\n  margin-top: 1.2rem; }\n\n.addTlsForm input {\n    margin: .5rem 0 0 0;\n    padding: .5rem;\n    width: 100%; }\n\n.addTlsForm input:focus {\n      outline: none;\n      box-shadow: 0 1rem 2rem rgba(40, 180, 133, 0.1); }\n\n.addTlsForm button {\n    padding: 0.5rem 2rem;\n    margin: 0;\n    margin-top: .5rem; }\n\n.addFthlsForm {\n  margin-top: 1.2rem; }\n\n.addFthlsForm input {\n    margin: .5rem 0 0 0;\n    padding: .5rem;\n    width: 100%; }\n\n.addFthlsForm input:focus {\n      outline: none;\n      box-shadow: 0 1rem 2rem rgba(40, 180, 133, 0.1); }\n\n.addFthlsForm button {\n    padding: 0.5rem 2rem;\n    margin: 0;\n    margin-top: .5rem; }\n\n.addFithlsForm {\n  margin-top: 1.2rem; }\n\n.addFithlsForm input {\n    margin: .5rem 0 0 0;\n    padding: .5rem;\n    width: 100%; }\n\n.addFithlsForm input:focus {\n      outline: none;\n      box-shadow: 0 1rem 2rem rgba(255, 185, 0, 0.1); }\n\n.addFithlsForm button {\n    padding: 0.5rem 2rem;\n    margin: 0;\n    margin-top: .5rem; }\n\n.goal-of-life--third-step {\n  box-sizing: border-box;\n  list-style: none;\n  position: relative;\n  width: 100%;\n  display: inline-block;\n  margin: 0 auto;\n  margin-right: 1rem;\n  background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.3), rgba(71, 118, 230, 0.3));\n  border-radius: 3px;\n  padding: 2rem;\n  font-size: 1.4rem;\n  transition: all .4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-bottom: 2rem;\n  vertical-align: top; }\n\n.goal-of-life--third-step .goal-third-step--title {\n    color: #4776E6;\n    position: absolute;\n    padding: 1rem;\n    opacity: .6;\n    left: 0;\n    top: 0;\n    font-size: 1rem;\n    text-transform: uppercase;\n    display: block;\n    z-index: 2; }\n\n.goal-of-life--third-step .goal-third-step--add {\n    right: 4rem;\n    color: #4776E6;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--third-step .goal-third-step--add:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--third-step .goal-third-step--add:hover {\n      -webkit-transform: scale(1.5) rotate(90deg);\n              transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life--third-step .goal-third-step--edit {\n    right: 2rem;\n    color: #4776E6;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--third-step .goal-third-step--edit:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--third-step .goal-third-step--edit:hover {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n\n.goal-of-life--third-step .goal-third-step--remove {\n    right: 0;\n    color: #4776E6;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--third-step .goal-third-step--remove:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--third-step .goal-third-step--remove:hover {\n      -webkit-transform: scale(1.5) rotate(90deg);\n              transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life--third-step p {\n    color: #4776E6; }\n\n.goal-of-life--fourth-step {\n  box-sizing: border-box;\n  list-style: none;\n  position: relative;\n  width: 100%;\n  display: inline-block;\n  margin: 0 auto;\n  margin-right: 1rem;\n  background-color: #ffffff;\n  border-radius: 3px;\n  padding: 2rem;\n  font-size: 1.4rem;\n  transition: all .4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-bottom: 2rem;\n  vertical-align: top; }\n\n.goal-of-life--fourth-step .goal-fourth-step--title {\n    color: #7ed56f;\n    position: absolute;\n    padding: 1rem;\n    opacity: .6;\n    left: 0;\n    top: 0;\n    font-size: 1rem;\n    text-transform: uppercase;\n    display: block;\n    z-index: 2; }\n\n.goal-of-life--fourth-step .goal-fourth-step--add {\n    right: 4rem;\n    color: #7ed56f;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--fourth-step .goal-fourth-step--add:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--fourth-step .goal-fourth-step--add:hover {\n      -webkit-transform: scale(1.5) rotate(90deg);\n              transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life--fourth-step .goal-fourth-step--edit {\n    right: 2rem;\n    color: #7ed56f;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--fourth-step .goal-fourth-step--edit:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--fourth-step .goal-fourth-step--edit:hover {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n\n.goal-of-life--fourth-step .goal-fourth-step--remove {\n    right: 0;\n    color: #7ed56f;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--fourth-step .goal-fourth-step--remove:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--fourth-step .goal-fourth-step--remove:hover {\n      -webkit-transform: scale(1.5) rotate(90deg);\n              transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life--fourth-step p {\n    color: #7ed56f; }\n\n.goal-of-life--fifth-step {\n  box-sizing: border-box;\n  list-style: none;\n  position: relative;\n  width: 100%;\n  display: inline-block;\n  margin: 0 auto;\n  margin-right: 1rem;\n  background-image: linear-gradient(to right bottom, rgba(255, 119, 48, 0.3), rgba(255, 185, 0, 0.3));\n  border-radius: 3px;\n  padding: 2rem;\n  font-size: 1.4rem;\n  transition: all .4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-bottom: 2rem;\n  vertical-align: top; }\n\n.goal-of-life--fifth-step .goal-fifth-step--title {\n    color: #ffb900;\n    position: absolute;\n    padding: 1rem;\n    opacity: .6;\n    left: 0;\n    top: 0;\n    font-size: 1rem;\n    text-transform: uppercase;\n    display: block;\n    z-index: 2; }\n\n.goal-of-life--fifth-step .goal-fifth-step--edit {\n    right: 2rem;\n    color: #ffb900;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--fifth-step .goal-fifth-step--edit:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--fifth-step .goal-fifth-step--edit:hover {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n\n.goal-of-life--fifth-step .goal-fifth-step--remove {\n    right: 0;\n    color: #ffb900;\n    position: absolute;\n    top: 0;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    display: none;\n    transition: all .4s;\n    z-index: 4; }\n\n.goal-of-life--fifth-step .goal-fifth-step--remove:hover {\n      display: block;\n      -webkit-backface-visibility: hidden; }\n\n.goal-of-life--fifth-step .goal-fifth-step--remove:hover {\n      -webkit-transform: scale(1.5) rotate(90deg);\n              transform: scale(1.5) rotate(90deg); }\n\n.goal-of-life--fifth-step p {\n    color: #ffb900; }\n\n.goal-of-life--first-step:hover .goal-first-step--edit {\n  display: block; }\n\n.goal-of-life--first-step:hover .goal-first-step--remove {\n  display: block; }\n\n.goal-of-life--first-step:hover .goal-first-step--add {\n  display: block; }\n\n.goal-of-life--second-step:hover .goal-second-step--edit {\n  display: block; }\n\n.goal-of-life--second-step:hover .goal-second-step--remove {\n  display: block; }\n\n.goal-of-life--second-step:hover .goal-second-step--add {\n  display: block; }\n\n.goal-of-life--third-step:hover .goal-third-step--edit {\n  display: block; }\n\n.goal-of-life--third-step:hover .goal-third-step--remove {\n  display: block; }\n\n.goal-of-life--third-step:hover .goal-third-step--add {\n  display: block; }\n\n.goal-of-life--fourth-step:hover .goal-fourth-step--edit {\n  display: block; }\n\n.goal-of-life--fourth-step:hover .goal-fourth-step--remove {\n  display: block; }\n\n.goal-of-life--fourth-step:hover .goal-fourth-step--add {\n  display: block; }\n\n.goal-of-life--fifth-step:hover .goal-fifth-step--edit {\n  display: block; }\n\n.goal-of-life--fifth-step:hover .goal-fifth-step--remove {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/goals/goal-of-life/goal-of-life.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/goals/goal-of-life/goal-of-life.component.ts ***!
  \**************************************************************/
/*! exports provided: GoalOfLifeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalOfLifeComponent", function() { return GoalOfLifeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoalOfLifeComponent = /** @class */ (function () {
    function GoalOfLifeComponent(userService, loginService) {
        this.userService = userService;
        this.loginService = loginService;
        this.edited = false;
        this.editedFlsP = false;
        this.editedSls = false;
        this.editedTls = false;
        this.editedFthls = false;
        this.editedFithls = false;
        this.addSls = false;
        this.addTls = false;
        this.addFthls = false;
        this.addFithls = false;
        this.goals = [];
        this.first_level_steps = [];
    }
    GoalOfLifeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.edited = false;
        this.editedFlsP = false;
        this.editedSls = false;
        this.userService.getUsers().subscribe(function (users) {
            users.forEach(function (user) {
                var storedUsername = localStorage.getItem('username');
                if (storedUsername === user.username) {
                    _this.user = user;
                    _this.goals = _this.user.goal_of_live;
                    _this.first_level_steps = _this.user.first_level_steps;
                    if (_this.goals.length > 0) {
                        _this.showAddMain = false;
                    }
                    else {
                        _this.showAddMain = true;
                    }
                }
            });
        });
    };
    // MAIN GOAL
    GoalOfLifeComponent.prototype.getMainGoal = function (data) {
        var gol = {
            index: '',
            title: data
        };
        this.goals.push(gol);
        this.user.goal_of_live = this.goals;
        this.userService.updateGoalOfLife(this.user).subscribe(function (goal) { return goal; });
        this.showAddMain = false;
    };
    GoalOfLifeComponent.prototype.editMainGoal = function () {
        this.edited = !this.edited;
    };
    GoalOfLifeComponent.prototype.updateMainGoal = function (value) {
        this.user.goal_of_live[0].title = value;
        this.userService.updateGoalOfLife(this.user).subscribe(function (goal) { return goal; });
        this.edited = !this.edited;
    };
    GoalOfLifeComponent.prototype.deleteGol = function (ind) {
        this.goals.splice(ind, 1);
        this.user.goal_of_live = this.goals;
        this.user.first_level_steps = [];
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
        this.userService.updateGoalOfLife(this.user).subscribe(function (goal) { return goal; });
        this.showAddMain = true;
    };
    // FIRST LEVEL STEPS
    GoalOfLifeComponent.prototype.addFirstStep = function (data) {
        var fls = {
            index: this.index,
            title: data,
            second_level_steps: []
        };
        this.first_level_steps.push(fls);
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
        this.addFls = !this.addFls;
    };
    GoalOfLifeComponent.prototype.updateFirstStep = function (value) {
        this.first_level_steps.forEach(function (fls) {
            if (fls.editedFlsP) {
                fls.title = value;
                fls.editedFlsP = !fls.editedFlsP;
            }
        });
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (goal) { return goal; });
    };
    GoalOfLifeComponent.prototype.deleteFls = function (fls, index) {
        this.first_level_steps.splice(index, 1);
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
    };
    // THIRD LEVEL STEPS
    GoalOfLifeComponent.prototype.addSecondStep = function (value, index) {
        var sls_value = {
            index: this.index,
            title: value,
            third_level_steps: []
        };
        this.first_level_steps[index].second_level_steps.push(sls_value);
        this.user.first_level_steps[index].addSls = !this.user.first_level_steps[index].addSls;
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
    };
    GoalOfLifeComponent.prototype.updateSecondStep = function (value, i) {
        this.first_level_steps[i].second_level_steps.forEach(function (sls) {
            if (sls.editedSls) {
                sls.title = value;
                sls.editedSls = !sls.editedSls;
            }
        });
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (goal) { return goal; });
    };
    GoalOfLifeComponent.prototype.deleteSls = function (sls, i, index) {
        this.first_level_steps[i].second_level_steps.splice(index, 1);
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
    };
    GoalOfLifeComponent.prototype.addThirdStep = function (value, index, i) {
        var tls_value = {
            index: this.index,
            title: value,
            fourth_level_steps: []
        };
        this.first_level_steps[index].second_level_steps[i].third_level_steps.push(tls_value);
        this.first_level_steps[index].second_level_steps[i].addTls = !this.first_level_steps[index].second_level_steps[i].addTls;
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
    };
    GoalOfLifeComponent.prototype.updateThirdStep = function (value, i, index) {
        this.first_level_steps[i].second_level_steps[index].third_level_steps.forEach(function (tls) {
            if (tls.editedTls) {
                tls.title = value;
                tls.editedTls = !tls.editedTls;
            }
        });
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (goal) { return goal; });
    };
    GoalOfLifeComponent.prototype.deleteTls = function (tls, ind, i, index) {
        this.first_level_steps[i].second_level_steps[index].third_level_steps.splice(ind, 1);
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
    };
    GoalOfLifeComponent.prototype.addFourthStep = function (value, i, index, ind) {
        var fthls_value = {
            index: this.index,
            title: value,
            fifth_level_steps: []
        };
        this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps.push(fthls_value);
        this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].addFthls = !this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].addFthls;
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
    };
    GoalOfLifeComponent.prototype.updateFourthStep = function (value, i, index, ind) {
        this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps.forEach(function (tls) {
            if (tls.editedFthls) {
                tls.title = value;
                tls.editedFthls = !tls.editedFthls;
            }
        });
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (goal) { return goal; });
    };
    GoalOfLifeComponent.prototype.deleteFthls = function (tls, i, index, ind, ind4) {
        this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps.splice(ind4, 1);
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
    };
    GoalOfLifeComponent.prototype.addFifthStep = function (value, i, index, ind, ind4) {
        var fthls_value = {
            index: this.index,
            title: value,
            fifth_level_steps: []
        };
        this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps[ind4].fifth_level_steps.push(fthls_value);
        this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps[ind4].addFithls = !this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps[ind4].addFithls;
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
    };
    GoalOfLifeComponent.prototype.updateFifthStep = function (value, i, index, ind, ind4) {
        this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps[ind4].fifth_level_steps.forEach(function (tls) {
            if (tls.editedFithls) {
                tls.title = value;
                tls.editedFithls = !tls.editedFithls;
            }
        });
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (goal) { return goal; });
    };
    GoalOfLifeComponent.prototype.deleteFithls = function (tls, i, index, ind, ind4, ind5) {
        this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps[ind4].fifth_level_steps.splice(ind5, 1);
        this.userService.updateFirstLevelSteps(this.user).subscribe(function (user) { return user; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainGoal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GoalOfLifeComponent.prototype, "mainValue", void 0);
    GoalOfLifeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goal-of-life',
            template: __webpack_require__(/*! ./goal-of-life.component.html */ "./src/app/goals/goal-of-life/goal-of-life.component.html"),
            styles: [__webpack_require__(/*! ./goal-of-life.component.scss */ "./src/app/goals/goal-of-life/goal-of-life.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], GoalOfLifeComponent);
    return GoalOfLifeComponent;
}());



/***/ }),

/***/ "./src/app/goals/goal-of-month/goal-of-month.component.html":
/*!******************************************************************!*\
  !*** ./src/app/goals/goal-of-month/goal-of-month.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"container\">\n      <h2 class=\"heading-secondary\">My Goals For The Next Month</h2>\n      <div class=\"goal-of-month--edit\" *ngIf=\"datesM.length > 0\">\n        <p *ngFor=\"let date of datesM\">({{date.from}} - {{date.to}})\n          <span (click)=\"editDate(datesM)\"><i class=\"far fa-edit\"></i></span>\n        </p>\n      </div>\n      <p class=\"pre--paragraph\"></p>\n      <div class=\"goals-content\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"padding: 0;\">\n            <div *ngIf=\"datesM.length < 1 || isEdited\">\n              <label for=\"from\">From</label>\n              <input type=\"text\" #from id=\"from\" class=\"dates-input\">\n              <label for=\"to\">To</label>\n              <input type=\"text\" #to id=\"to\" class=\"dates-input\">\n              <span *ngIf=\"datesM.length < 1\" class=\"add-dates\" (click)=\"addDates(from.value, to.value)\">\n                <i class=\"fas fa-plus\"></i></span>\n              <span *ngIf=\"isEdited\" class=\"add-dates\" (click)=\"updateDates(from.value, to.value)\">\n                <i class=\"fas fa-check\"></i>\n              </span>\n            </div>\n            <div class=\"form-group goals-of-month\">\n              <form class=\"add-goals-form goal-of-month-form\" [formGroup]=\"addGoalOfMonthForm\">\n                <input type=\"text\"\n                       class=\"form-input\"\n                       id=\"goal\"\n                       placeholder=\"Enter your goal\" formControlName=\"title\">\n                <button type=\"submit\" class=\"btn btn--indigo\" (click)=\"addGoalOfMonth(addGoalOfMonthForm.value)\">Add\n                </button>\n              </form>\n              <ul *ngIf=\"goalsOfMonth\">\n                <li *ngFor=\"let goal of goalsOfMonth; let i = index\">\n                  <div class=\"form-group__checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"goal.complete\" #complete name=\"remember\" class=\"checkbox\"\n                           id=\"{{goal.title}}\" (click)=\"updateGoal(goal, complete.checked)\">\n                    <label for=\"{{goal.title}}\" class=\"checkbox-label\" [ngClass]=\"{'checked': goal.complete}\">\n                      <span class=\"form-checkbox\"></span>{{ goal.title }}</label>\n                    <span class=\"goal--edit\" (click)=\"editGoal(goal)\"><i class=\"far fa-edit\"></i></span>\n                    <span (click)=\"deleteGoal(i)\" class=\"delete-icon\"><i class=\"far fa-times-circle\"></i></span>\n\n                    <div class=\"form-group edit-goal-list-form form-goal\" *ngIf=\"goal.isEdited\">\n                      <input type=\"text\"\n                             #goalEdited\n                             class=\"form-input\"\n                             id=\"goalEdit\"\n                             value=\"{{goal.title}}\">\n                      <button type=\"button\" class=\"btn btn--indigo\"\n                              (click)=\"updateGoalTitle(goalEdited.value, goal)\">Edit\n                      </button>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <p class=\"pre--paragraph\"></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/goals/goal-of-month/goal-of-month.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/goals/goal-of-month/goal-of-month.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-input {\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n  font-size: 1.5rem;\n  padding: 1.5rem 2rem;\n  color: #212121;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: none;\n  font-family: Lato, sans-serif;\n  border-bottom: 3px solid transparent;\n  display: inline-block;\n  transition: all .3s; }\n  .form-input:focus {\n    outline: none;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n    border-bottom: 3px solid #4776E6; }\n  .form-input:focus:invalid {\n    border-bottom: 3px solid orangered !important; }\n  .form-input::-webkit-input-placeholder {\n    color: #757575; }\n  .pre--paragraph {\n  font-size: 2.6rem;\n  text-align: center;\n  padding: 1rem 20rem;\n  font-style: italic;\n  color: #212121;\n  letter-spacing: 1.5px;\n  line-height: 2;\n  position: relative; }\n  .pre--paragraph:after {\n    content: '';\n    width: 30rem;\n    height: .5rem;\n    background-color: #ff7730;\n    position: absolute;\n    bottom: 0;\n    right: 38%; }\n  .goals-of-month {\n  margin-top: 2rem; }\n  .goal-of-month--edit {\n  color: #ff7730;\n  text-align: center;\n  font-size: 1.5rem;\n  position: relative; }\n  .goal-of-month--edit span {\n    display: none;\n    position: absolute;\n    top: 5px;\n    right: 2%;\n    cursor: pointer; }\n  .goal-of-month--edit:hover span {\n    display: block; }\n  .dates-input {\n  border: none;\n  border-bottom: 3px solid #6F49E7;\n  outline: none;\n  padding-left: 1rem;\n  margin-left: 1rem;\n  width: 18% !important; }\n  .dates-input:focus {\n    outline: none; }\n  .add-dates {\n  color: #4776E6;\n  font-size: 2rem; }\n  .heading-secondary {\n  padding: 1rem;\n  padding-bottom: 0;\n  line-height: 1.5;\n  width: 100%;\n  text-align: center; }\n  .heading-secondary:hover {\n    -webkit-transform: none;\n            transform: none;\n    text-shadow: none; }\n  .heading-secondary span {\n    color: #ff7730; }\n  .goals-content {\n  padding: 2rem; }\n  .goals-content input[type='text'] {\n    width: 60%;\n    margin-right: 2rem; }\n  .goals-content ul {\n    padding: 1rem;\n    list-style: none;\n    color: #000000; }\n  .goals-content ul li {\n      padding: 2rem;\n      position: relative; }\n  .goals-content ul li .goal-title {\n        margin-left: 3rem; }\n  .goals-content .checkbox {\n    display: none; }\n  .goals-content .form-checkbox {\n    height: 3rem;\n    width: 3rem;\n    border: 5px solid rgba(111, 73, 231, 0.7);\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: -.4rem; }\n  .goals-content .form-checkbox::after {\n      content: \"\";\n      display: block;\n      height: 1.3rem;\n      width: 1.3rem;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      background-color: rgba(111, 73, 231, 0.7);\n      opacity: 0;\n      transition: opacity .2s; }\n  .goals-content .checkbox-label {\n    font-size: 1.6rem;\n    cursor: pointer;\n    position: relative;\n    padding-left: 4.5rem; }\n  .goals-content .form-label {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin-left: 2rem;\n    margin-top: .7rem;\n    display: block;\n    transition: all .3s; }\n  .goals-content .checkbox:checked ~ .checkbox-label .form-checkbox::after {\n    opacity: 1; }\n  .goals-content .checked {\n    text-decoration: line-through;\n    color: #6F49E7;\n    opacity: .7; }\n  .goals-content .delete-icon {\n    position: absolute;\n    right: 0;\n    margin-top: 0;\n    color: #4776E6;\n    cursor: pointer;\n    opacity: .7;\n    transition: all .2s ease-out; }\n  .goals-content .delete-icon:hover {\n      -webkit-transform: scale(1.3) rotate(90deg);\n              transform: scale(1.3) rotate(90deg);\n      opacity: 1; }\n  .goals-content .goal--edit {\n    position: absolute;\n    right: 2rem;\n    margin-top: 0;\n    color: #4776E6;\n    cursor: pointer;\n    opacity: .7;\n    transition: all .2s ease-out; }\n  .goals-content .goal--edit:hover {\n      -webkit-transform: scale(1.3) rotate(90deg);\n              transform: scale(1.3) rotate(90deg);\n      opacity: 1; }\n  .edit-goal-list-form {\n  position: absolute;\n  top: -13px;\n  left: 0px;\n  background-color: #ffffff; }\n  .edit-goal-list-form input {\n    padding: 1rem;\n    outline: none;\n    border: none;\n    border-bottom: 3px solid #ff7730; }\n  .edit-goal-list-form button {\n    padding: .5rem 1rem;\n    margin-left: 2rem;\n    font-size: 1.3rem; }\n  .form-goal {\n  top: -1px;\n  left: 0px;\n  width: 100%; }\n  .form-goal input {\n    width: 77%; }\n"

/***/ }),

/***/ "./src/app/goals/goal-of-month/goal-of-month.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/goals/goal-of-month/goal-of-month.component.ts ***!
  \****************************************************************/
/*! exports provided: GoalOfMonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalOfMonthComponent", function() { return GoalOfMonthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoalOfMonthComponent = /** @class */ (function () {
    function GoalOfMonthComponent(userService) {
        this.userService = userService;
        this.isEdited = false;
        this.goalsOfMonth = [];
        this.datesM = [];
    }
    GoalOfMonthComponent.prototype.addDates = function (from, to) {
        var dates = {
            'from': from,
            'to': to
        };
        this.datesM.push(dates);
        this.userService.updateUserDatesMonth(this.user).subscribe(function (user) { return user; });
    };
    GoalOfMonthComponent.prototype.updateDates = function (from, to) {
        this.datesM[0].from = from;
        this.datesM[0].to = to;
        this.user.datesM = this.datesM;
        this.userService.updateUserDatesMonth(this.user).subscribe(function (user) { return user; });
        this.isEdited = false;
    };
    GoalOfMonthComponent.prototype.initForm = function () {
        var title = '';
        this.addGoalOfMonthForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'completed': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            'isEdited': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
        });
    };
    GoalOfMonthComponent.prototype.addGoalOfMonth = function (value) {
        this.goal = {
            'completed': false,
            'isEdited': false,
            'title': value.title
        };
        this.goalsOfMonth.push(this.goal);
        this.user.goals_of_the_month = this.goalsOfMonth;
        this.userService.updateGoalsOfMonth(this.user).subscribe(function (user) { return user; });
        this.addGoalOfMonthForm.reset();
    };
    GoalOfMonthComponent.prototype.updateGoal = function (goal, isChecked) {
        goal.complete = isChecked;
        this.userService.updateGoalsOfMonth(this.user).subscribe(function (user) { return user; });
    };
    GoalOfMonthComponent.prototype.editGoal = function (goal) {
        goal.isEdited = !goal.isEdited;
    };
    GoalOfMonthComponent.prototype.updateGoalTitle = function (value, goal) {
        goal.title = value;
        goal.isEdited = false;
        this.userService.updateGoalsOfMonth(this.user).subscribe(function (user) { return user; });
    };
    GoalOfMonthComponent.prototype.deleteGoal = function (i) {
        this.goalsOfMonth.splice(i, 1);
        this.user.goals_of_the_month = this.goalsOfMonth;
        this.userService.updateGoalsOfMonth(this.user).subscribe(function (user) { return user; });
    };
    GoalOfMonthComponent.prototype.editDate = function (date) {
        this.isEdited = true;
    };
    GoalOfMonthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            users.forEach(function (user) {
                var storedUsername = localStorage.getItem('username');
                if (storedUsername === user.username) {
                    _this.user = user;
                    _this.datesM = _this.user.datesM;
                    _this.goalsOfMonth = _this.user.goals_of_the_month;
                }
            });
        });
        this.initForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GoalOfMonthComponent.prototype, "goalsOfMonth", void 0);
    GoalOfMonthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goal-of-month',
            template: __webpack_require__(/*! ./goal-of-month.component.html */ "./src/app/goals/goal-of-month/goal-of-month.component.html"),
            styles: [__webpack_require__(/*! ./goal-of-month.component.scss */ "./src/app/goals/goal-of-month/goal-of-month.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], GoalOfMonthComponent);
    return GoalOfMonthComponent;
}());



/***/ }),

/***/ "./src/app/goals/goal-of-week/goal-of-week.component.html":
/*!****************************************************************!*\
  !*** ./src/app/goals/goal-of-week/goal-of-week.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"container\">\n      <h2 class=\"heading-secondary\">My Goals For The Next Week</h2>\n      <div class=\"goal-of-week--edit\" *ngIf=\"datesW.length > 0\">\n        <p *ngFor=\"let date of datesW\">({{date.from}} - {{date.to}})\n          <span (click)=\"editDate(datesW)\"><i class=\"far fa-edit\"></i></span>\n        </p>\n      </div>\n      <p class=\"pre--paragraph\"></p>\n      <div class=\"goals-content\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"padding: 0;\">\n            <div *ngIf=\"datesW.length < 1 || isEdited\">\n              <label for=\"from\">From</label>\n              <input type=\"text\" #from id=\"from\" class=\"dates-input\">\n              <label for=\"to\">To</label>\n              <input type=\"text\" #to id=\"to\" class=\"dates-input\">\n              <span *ngIf=\"datesW.length < 1\" class=\"add-dates\" (click)=\"addDates(from.value, to.value)\">\n                <i class=\"fas fa-plus-circle\"></i></span>\n              <span *ngIf=\"isEdited\" class=\"add-dates\" (click)=\"updateDates(from.value, to.value)\">\n                <i class=\"fas fa-check\"></i>\n              </span>\n            </div>\n            <div class=\"form-group goals-of-week\">\n              <form class=\"add-goals-form goal-of-week-form\" [formGroup]=\"addGoalOfWeekForm\">\n                <input type=\"text\"\n                       class=\"form-input\"\n                       id=\"goal\"\n                       placeholder=\"Enter your goal\" formControlName=\"title\">\n                <button type=\"submit\" class=\"btn btn--indigo\" (click)=\"addGoalOfWeek(addGoalOfWeekForm.value)\">Add\n                </button>\n              </form>\n              <ul *ngIf=\"goalsOfWeek\">\n                <li *ngFor=\"let goal of goalsOfWeek; let i = index\">\n                  <div class=\"form-group__checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"goal.complete\" #complete name=\"remember\" class=\"checkbox\"\n                           id=\"{{goal.title}}\" (click)=\"updateGoal(goal, complete.checked)\">\n                    <label for=\"{{goal.title}}\" class=\"checkbox-label\" [ngClass]=\"{'checked': goal.complete}\">\n                      <span class=\"form-checkbox\"></span>{{ goal.title }}</label>\n                    <span class=\"goal--edit\" (click)=\"editGoal(goal)\"><i class=\"far fa-edit\"></i></span>\n                    <span (click)=\"deleteGoal(i)\" class=\"delete-icon\"><i class=\"far fa-times-circle\"></i></span>\n\n                    <div class=\"form-group edit-goal-list-form form-goal\" *ngIf=\"goal.isEdited\">\n                      <input type=\"text\"\n                             #goalEdited\n                             class=\"form-input\"\n                             id=\"goalEdit\"\n                             value=\"{{goal.title}}\">\n                      <button type=\"button\" class=\"btn btn--indigo\"\n                              (click)=\"updateGoalTitle(goalEdited.value, goal)\">Edit\n                      </button>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <p class=\"pre--paragraph\"></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/goals/goal-of-week/goal-of-week.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/goals/goal-of-week/goal-of-week.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-input {\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n  font-size: 1.5rem;\n  padding: 1.5rem 2rem;\n  color: #212121;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: none;\n  font-family: Lato, sans-serif;\n  border-bottom: 3px solid transparent;\n  display: inline-block;\n  transition: all .3s; }\n  .form-input:focus {\n    outline: none;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n    border-bottom: 3px solid #4776E6; }\n  .form-input:focus:invalid {\n    border-bottom: 3px solid orangered !important; }\n  .form-input::-webkit-input-placeholder {\n    color: #757575; }\n  .goals-of-week {\n  margin-top: 2rem; }\n  .pre--paragraph {\n  font-size: 2.6rem;\n  text-align: center;\n  padding: 1rem 20rem;\n  font-style: italic;\n  color: #212121;\n  letter-spacing: 1.5px;\n  line-height: 2;\n  position: relative; }\n  .pre--paragraph:after {\n    content: '';\n    width: 30rem;\n    height: .5rem;\n    background-color: #ff7730;\n    position: absolute;\n    bottom: 0;\n    right: 38%; }\n  .goal-of-week--edit {\n  color: #ff7730;\n  text-align: center;\n  font-size: 1.5rem;\n  position: relative; }\n  .goal-of-week--edit span {\n    display: none;\n    position: absolute;\n    top: 5px;\n    right: 2%;\n    cursor: pointer; }\n  .goal-of-week--edit:hover span {\n    display: block; }\n  .dates-input {\n  border: none;\n  border-bottom: 3px solid #6F49E7;\n  outline: none;\n  padding-left: 1rem;\n  margin-left: 1rem;\n  width: 18% !important; }\n  .dates-input:focus {\n    outline: none; }\n  .add-dates {\n  color: #4776E6;\n  font-size: 2rem; }\n  .heading-secondary {\n  padding: 1rem;\n  padding-bottom: 0;\n  line-height: 1.5;\n  width: 100%;\n  text-align: center; }\n  .heading-secondary:hover {\n    -webkit-transform: none;\n            transform: none;\n    text-shadow: none; }\n  .heading-secondary span {\n    color: #ff7730; }\n  .goals-content {\n  padding: 2rem; }\n  .goals-content input[type='text'] {\n    width: 60%;\n    margin-right: 2rem; }\n  .goals-content ul {\n    padding: 1rem;\n    list-style: none;\n    color: #000000; }\n  .goals-content ul li {\n      padding: 2rem;\n      position: relative; }\n  .goals-content ul li .goal-title {\n        margin-left: 3rem; }\n  .goals-content .checkbox {\n    display: none; }\n  .goals-content .form-checkbox {\n    height: 3rem;\n    width: 3rem;\n    border: 5px solid rgba(111, 73, 231, 0.7);\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: -.4rem; }\n  .goals-content .form-checkbox::after {\n      content: \"\";\n      display: block;\n      height: 1.3rem;\n      width: 1.3rem;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      background-color: rgba(111, 73, 231, 0.7);\n      opacity: 0;\n      transition: opacity .2s; }\n  .goals-content .checkbox-label {\n    font-size: 1.6rem;\n    cursor: pointer;\n    position: relative;\n    padding-left: 4.5rem; }\n  .goals-content .form-label {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin-left: 2rem;\n    margin-top: .7rem;\n    display: block;\n    transition: all .3s; }\n  .goals-content .checkbox:checked ~ .checkbox-label .form-checkbox::after {\n    opacity: 1; }\n  .goals-content .checked {\n    text-decoration: line-through;\n    color: #6F49E7;\n    opacity: .7; }\n  .goals-content .delete-icon {\n    position: absolute;\n    right: 0;\n    margin-top: 0;\n    color: #4776E6;\n    cursor: pointer;\n    opacity: .7;\n    transition: all .2s ease-out; }\n  .goals-content .delete-icon:hover {\n      -webkit-transform: scale(1.3) rotate(90deg);\n              transform: scale(1.3) rotate(90deg);\n      opacity: 1; }\n  .goals-content .goal--edit {\n    position: absolute;\n    right: 2rem;\n    margin-top: 0;\n    color: #4776E6;\n    cursor: pointer;\n    opacity: .7;\n    transition: all .2s ease-out; }\n  .goals-content .goal--edit:hover {\n      -webkit-transform: scale(1.3) rotate(90deg);\n              transform: scale(1.3) rotate(90deg);\n      opacity: 1; }\n  .edit-goal-list-form {\n  position: absolute;\n  top: -13px;\n  left: 0px;\n  background-color: #ffffff; }\n  .edit-goal-list-form input {\n    padding: 1rem;\n    outline: none;\n    border: none;\n    border-bottom: 3px solid #ff7730; }\n  .edit-goal-list-form button {\n    padding: .5rem 1rem;\n    margin-left: 2rem;\n    font-size: 1.3rem; }\n  .form-goal {\n  top: -1px;\n  left: 0px;\n  width: 100%; }\n  .form-goal input {\n    width: 77%; }\n"

/***/ }),

/***/ "./src/app/goals/goal-of-week/goal-of-week.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/goals/goal-of-week/goal-of-week.component.ts ***!
  \**************************************************************/
/*! exports provided: GoalOfWeekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalOfWeekComponent", function() { return GoalOfWeekComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoalOfWeekComponent = /** @class */ (function () {
    function GoalOfWeekComponent(userService) {
        this.userService = userService;
        this.isEdited = false;
        this.goalsOfWeek = [];
        this.datesW = [];
    }
    GoalOfWeekComponent.prototype.addDates = function (from, to) {
        var dates = {
            'from': from,
            'to': to
        };
        this.datesW.push(dates);
        // this.user.datesW = this.datesW;
        this.userService.updateUserDatesWeek(this.user).subscribe(function (user) { return user; });
    };
    GoalOfWeekComponent.prototype.updateDates = function (from, to) {
        this.datesW[0].from = from;
        this.datesW[0].to = to;
        this.user.datesW = this.datesW;
        this.userService.updateUserDatesWeek(this.user).subscribe(function (user) { return user; });
        this.isEdited = false;
    };
    GoalOfWeekComponent.prototype.initForm = function () {
        var title = '';
        this.addGoalOfWeekForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'completed': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            'isEdited': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
        });
    };
    GoalOfWeekComponent.prototype.addGoalOfWeek = function (value) {
        this.goal = {
            'completed': false,
            'isEdited': false,
            'title': value.title
        };
        this.goalsOfWeek.push(this.goal);
        this.user.goals_of_the_week = this.goalsOfWeek;
        this.userService.updateGoalsOfWeek(this.user).subscribe(function (user) { return user; });
        this.addGoalOfWeekForm.reset();
    };
    GoalOfWeekComponent.prototype.updateGoal = function (goal, isChecked) {
        goal.complete = isChecked;
        this.userService.updateGoalsOfWeek(this.user).subscribe(function (user) { return user; });
    };
    GoalOfWeekComponent.prototype.editGoal = function (goal) {
        goal.isEdited = !goal.isEdited;
    };
    GoalOfWeekComponent.prototype.updateGoalTitle = function (value, goal) {
        goal.title = value;
        goal.isEdited = false;
        this.userService.updateGoalsOfWeek(this.user).subscribe(function (user) { return user; });
    };
    GoalOfWeekComponent.prototype.deleteGoal = function (i) {
        this.goalsOfWeek.splice(i, 1);
        this.user.goals_of_the_week = this.goalsOfWeek;
        this.userService.updateGoalsOfWeek(this.user).subscribe(function (user) { return user; });
    };
    GoalOfWeekComponent.prototype.editDate = function (date) {
        this.isEdited = true;
    };
    GoalOfWeekComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            users.forEach(function (user) {
                var storedUsername = localStorage.getItem('username');
                if (storedUsername === user.username) {
                    _this.user = user;
                    _this.datesW = _this.user.datesW;
                    _this.goalsOfWeek = _this.user.goals_of_the_week;
                }
            });
        });
        this.initForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GoalOfWeekComponent.prototype, "goalsOfWeek", void 0);
    GoalOfWeekComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goal-of-week',
            template: __webpack_require__(/*! ./goal-of-week.component.html */ "./src/app/goals/goal-of-week/goal-of-week.component.html"),
            styles: [__webpack_require__(/*! ./goal-of-week.component.scss */ "./src/app/goals/goal-of-week/goal-of-week.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], GoalOfWeekComponent);
    return GoalOfWeekComponent;
}());



/***/ }),

/***/ "./src/app/goals/goal-of-year/goal-of-year.component.html":
/*!****************************************************************!*\
  !*** ./src/app/goals/goal-of-year/goal-of-year.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"container\">\n      <h2 class=\"heading-secondary\">My Goals For The Next Year</h2>\n      <div class=\"goal-of-year--edit\" *ngIf=\"datesY.length > 0\">\n        <p *ngFor=\"let date of datesY\">({{date.from}} - {{date.to}})\n          <span (click)=\"editDate(datesY)\"><i class=\"far fa-edit\"></i></span>\n          </p>\n        </div>\n      <p class=\"pre--paragraph\"></p>\n      <div class=\"goals-content\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"padding: 0;\">\n            <div *ngIf=\"datesY.length < 1 || isEdited\">\n              <label for=\"from\">From</label>\n              <input type=\"text\" #from id=\"from\" class=\"dates-input\">\n              <label for=\"to\">To</label>\n              <input type=\"text\" #to id=\"to\" class=\"dates-input\">\n              <span *ngIf=\"datesY.length < 1\" class=\"add-dates\" (click)=\"addDates(from.value, to.value)\">\n                <i class=\"fas fa-plus-circle\"></i></span>\n              <span *ngIf=\"isEdited\" class=\"add-dates\" (click)=\"updateDates(from.value, to.value)\">\n                <i class=\"fas fa-check\"></i>\n              </span>\n            </div>\n            <div class=\"form-group goals-of-year\">\n              <form class=\"add-goals-form goal-of-year-form\" [formGroup]=\"addGoalOfYearForm\">\n                <input type=\"text\"\n                       class=\"form-input\"\n                       id=\"goal\"\n                       placeholder=\"Enter your goal\" formControlName=\"title\">\n                <button type=\"submit\" class=\"btn btn--indigo\" (click)=\"addGoalOfYear(addGoalOfYearForm.value)\">Add\n                </button>\n              </form>\n              <ul *ngIf=\"goalsOfYear\">\n                <li *ngFor=\"let goal of goalsOfYear; let i = index\">\n                  <div class=\"form-group__checkbox\">\n                    <input type=\"checkbox\" [(ngModel)]=\"goal.complete\" #complete name=\"remember\" class=\"checkbox\"\n                           id=\"{{goal.title}}\" (click)=\"updateGoal(goal, complete.checked)\">\n                    <label for=\"{{goal.title}}\" class=\"checkbox-label\" [ngClass]=\"{'checked': goal.complete}\">\n                      <span class=\"form-checkbox\"></span>{{ goal.title }}</label>\n                    <span class=\"goal--edit\" (click)=\"editGoal(goal)\"><i class=\"far fa-edit\"></i></span>\n                    <span (click)=\"deleteGoal(i)\" class=\"delete-icon\"><i class=\"far fa-times-circle\"></i></span>\n\n                    <div class=\"form-group edit-goal-list-form form-goal\" *ngIf=\"goal.isEdited\">\n                      <input type=\"text\"\n                             #goalEdited\n                             class=\"form-input\"\n                             id=\"goalEdit\"\n                             value=\"{{goal.title}}\">\n                      <button type=\"button\" class=\"btn btn--indigo\"\n                              (click)=\"updateGoalTitle(goalEdited.value, goal)\">Edit\n                      </button>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <p class=\"pre--paragraph\"></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/goals/goal-of-year/goal-of-year.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/goals/goal-of-year/goal-of-year.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-input {\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n  font-size: 1.5rem;\n  padding: 1.5rem 2rem;\n  color: #212121;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: none;\n  font-family: Lato, sans-serif;\n  border-bottom: 3px solid transparent;\n  display: inline-block;\n  transition: all .3s; }\n  .form-input:focus {\n    outline: none;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n    border-bottom: 3px solid #4776E6; }\n  .form-input:focus:invalid {\n    border-bottom: 3px solid orangered !important; }\n  .form-input::-webkit-input-placeholder {\n    color: #757575; }\n  .goals-of-year {\n  margin-top: 2rem; }\n  .pre--paragraph {\n  font-size: 2.6rem;\n  text-align: center;\n  padding: 1rem 20rem;\n  font-style: italic;\n  color: #212121;\n  letter-spacing: 1.5px;\n  line-height: 2;\n  position: relative; }\n  .pre--paragraph:after {\n    content: '';\n    width: 30rem;\n    height: .5rem;\n    background-color: #ff7730;\n    position: absolute;\n    bottom: 0;\n    right: 38%; }\n  .dates-input {\n  border: none;\n  border-bottom: 3px solid #6F49E7;\n  outline: none;\n  padding-left: 1rem;\n  margin-left: 1rem;\n  width: 18% !important; }\n  .dates-input:focus {\n    outline: none; }\n  .add-dates {\n  color: #4776E6;\n  font-size: 2rem; }\n  .heading-secondary {\n  padding: 1rem;\n  padding-bottom: 0;\n  line-height: 1.5;\n  width: 100%;\n  text-align: center; }\n  .heading-secondary:hover {\n    -webkit-transform: none;\n            transform: none;\n    text-shadow: none; }\n  .goal-of-year--edit {\n  color: #ff7730;\n  text-align: center;\n  font-size: 1.5rem;\n  position: relative; }\n  .goal-of-year--edit span {\n    display: none;\n    position: absolute;\n    top: 5px;\n    right: 2%;\n    cursor: pointer; }\n  .goal-of-year--edit:hover span {\n    display: block; }\n  .goals-content {\n  padding: 2rem; }\n  .goals-content input[type='text'] {\n    width: 60%;\n    margin-right: 2rem; }\n  .goals-content ul {\n    padding: 1rem;\n    list-style: none;\n    color: #000000; }\n  .goals-content ul li {\n      padding: 2rem;\n      position: relative; }\n  .goals-content ul li .goal-title {\n        margin-left: 3rem; }\n  .goals-content .checkbox {\n    display: none; }\n  .goals-content .form-checkbox {\n    height: 3rem;\n    width: 3rem;\n    border: 5px solid rgba(111, 73, 231, 0.7);\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: -.4rem; }\n  .goals-content .form-checkbox::after {\n      content: \"\";\n      display: block;\n      height: 1.3rem;\n      width: 1.3rem;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      background-color: rgba(111, 73, 231, 0.7);\n      opacity: 0;\n      transition: opacity .2s; }\n  .goals-content .checkbox-label {\n    font-size: 1.6rem;\n    cursor: pointer;\n    position: relative;\n    padding-left: 4.5rem; }\n  .goals-content .form-label {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin-left: 2rem;\n    margin-top: .7rem;\n    display: block;\n    transition: all .3s; }\n  .goals-content .checkbox:checked ~ .checkbox-label .form-checkbox::after {\n    opacity: 1; }\n  .goals-content .checked {\n    text-decoration: line-through;\n    color: #6F49E7;\n    opacity: .7; }\n  .goals-content .delete-icon {\n    position: absolute;\n    right: 0;\n    margin-top: 0;\n    color: #4776E6;\n    cursor: pointer;\n    opacity: .7;\n    transition: all .2s ease-out; }\n  .goals-content .delete-icon:hover {\n      -webkit-transform: scale(1.3) rotate(90deg);\n              transform: scale(1.3) rotate(90deg);\n      opacity: 1; }\n  .goals-content .goal--edit {\n    position: absolute;\n    right: 2rem;\n    margin-top: 0;\n    color: #4776E6;\n    cursor: pointer;\n    opacity: .7;\n    transition: all .2s ease-out; }\n  .goals-content .goal--edit:hover {\n      -webkit-transform: scale(1.3) rotate(90deg);\n              transform: scale(1.3) rotate(90deg);\n      opacity: 1; }\n  .edit-goal-list-form {\n  position: absolute;\n  top: -13px;\n  left: 0px;\n  background-color: #ffffff; }\n  .edit-goal-list-form input {\n    padding: 1rem;\n    outline: none;\n    border: none;\n    border-bottom: 3px solid #ff7730; }\n  .edit-goal-list-form button {\n    padding: .5rem 1rem;\n    margin-left: 2rem;\n    font-size: 1.3rem; }\n  .form-goal {\n  top: -1px;\n  left: 0px;\n  width: 100%; }\n  .form-goal input {\n    width: 77%; }\n"

/***/ }),

/***/ "./src/app/goals/goal-of-year/goal-of-year.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/goals/goal-of-year/goal-of-year.component.ts ***!
  \**************************************************************/
/*! exports provided: GoalOfYearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalOfYearComponent", function() { return GoalOfYearComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoalOfYearComponent = /** @class */ (function () {
    function GoalOfYearComponent(userService) {
        this.userService = userService;
        this.isEdited = false;
        this.goalsOfYear = [];
        this.datesY = [];
    }
    GoalOfYearComponent.prototype.addDates = function (from, to) {
        var dates = {
            'from': from,
            'to': to
        };
        this.datesY.push(dates);
        this.user.dates = this.datesY;
        this.userService.updateUserDatesYear(this.user).subscribe(function (user) { return user; });
    };
    GoalOfYearComponent.prototype.updateDates = function (from, to) {
        this.datesY[0].from = from;
        this.datesY[0].to = to;
        this.user.datesY = this.datesY;
        this.userService.updateUserDatesYear(this.user).subscribe(function (user) { return user; });
        this.isEdited = false;
    };
    GoalOfYearComponent.prototype.initForm = function () {
        var title = '';
        this.addGoalOfYearForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'completed': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            'isEdited': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
    };
    GoalOfYearComponent.prototype.addGoalOfYear = function (value) {
        this.goal = {
            'completed': false,
            'isEdited': false,
            'title': value.title
        };
        this.goalsOfYear.push(this.goal);
        this.user.goals_of_the_year = this.goalsOfYear;
        this.userService.updateGoalsOfYear(this.user).subscribe(function (user) { return user; });
        this.addGoalOfYearForm.reset();
    };
    GoalOfYearComponent.prototype.updateGoal = function (goal, isChecked) {
        goal.complete = isChecked;
        this.userService.updateGoalsOfYear(this.user).subscribe(function (user) { return user; });
    };
    GoalOfYearComponent.prototype.editGoal = function (goal) {
        goal.isEdited = !goal.isEdited;
    };
    GoalOfYearComponent.prototype.updateGoalTitle = function (value, goal) {
        goal.title = value;
        goal.isEdited = false;
        this.userService.updateGoalsOfYear(this.user).subscribe(function (user) { return user; });
    };
    GoalOfYearComponent.prototype.deleteGoal = function (i) {
        this.goalsOfYear.splice(i, 1);
        this.user.goals_of_the_year = this.goalsOfYear;
        this.userService.updateGoalsOfYear(this.user).subscribe(function (user) { return user; });
    };
    GoalOfYearComponent.prototype.editDate = function (date) {
        this.isEdited = true;
    };
    GoalOfYearComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            users.forEach(function (user) {
                var storedUsername = localStorage.getItem('username');
                if (storedUsername === user.username) {
                    _this.user = user;
                    _this.datesY = _this.user.datesY;
                    _this.goalsOfYear = _this.user.goals_of_the_year;
                }
            });
        });
        this.initForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GoalOfYearComponent.prototype, "goalsOfYear", void 0);
    GoalOfYearComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goal-of-year',
            template: __webpack_require__(/*! ./goal-of-year.component.html */ "./src/app/goals/goal-of-year/goal-of-year.component.html"),
            styles: [__webpack_require__(/*! ./goal-of-year.component.scss */ "./src/app/goals/goal-of-year/goal-of-year.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], GoalOfYearComponent);
    return GoalOfYearComponent;
}());



/***/ }),

/***/ "./src/app/goals/goals.component.html":
/*!********************************************!*\
  !*** ./src/app/goals/goals.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"goals-page__component\">\n    <div class=\"content\">\n      <div class=\"jumbotron jumbotron-fluid\">\n        <div class=\"container text-center\">\n          <div class=\"row\">\n              <h2 class=\"heading-secondary text-center\">Goals</h2>\n              <p class=\"goals__header--paragraph\">\"What you get by achieving your goals is not\n                as important as what you become by achieving your goals\".\n              </p>\n            <p class=\"author\">Henry David Thoreau</p>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <ul class=\"nav nav-tabs\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"'./goal-of-life'\">Main Goal</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"'./goals-of-year'\">Goals of The Year</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"'./goals-of-month'\">Goals of The Month</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"'./goals-of-week'\">Goals of The Week</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/goals/goals.component.scss":
/*!********************************************!*\
  !*** ./src/app/goals/goals.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".goals-page__component {\n  padding-bottom: 5rem;\n  margin-top: -6rem;\n  font-size: 1.5rem; }\n  .goals-page__component h2 {\n    -webkit-animation: moveToRight 1s ease-in;\n            animation: moveToRight 1s ease-in; }\n  .goals-page__component .jumbotron {\n    background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.5), rgba(71, 118, 230, 0.5)), url('michael-coury-70410-unsplash-min.jpg');\n    margin-bottom: 0;\n    background-size: cover;\n    background-attachment: fixed;\n    padding: 20rem 2rem;\n    height: 95vh;\n    -webkit-clip-path: polygon(0 7vh, 100% 0, 100% 75vh, 0 100%);\n            clip-path: polygon(0 7vh, 100% 0, 100% 75vh, 0 100%); }\n  .goals-page__component .heading-secondary {\n    color: #ffffff;\n    -webkit-transform: none;\n            transform: none;\n    width: 100%;\n    margin-top: 2rem; }\n  .goals-page__component .goals__header--paragraph {\n    font-size: 2rem;\n    text-align: left;\n    padding: 2rem 17rem 0;\n    color: #ffffff;\n    letter-spacing: 2px;\n    -webkit-animation: moveToLeft 1s ease-in;\n            animation: moveToLeft 1s ease-in; }\n  .goals-page__component .author {\n    text-align: center;\n    width: 100%;\n    color: #FFDD3A;\n    font-size: 2.8rem;\n    font-family: 'Black And White Picture', sans-serif;\n    -webkit-animation: moveToLeft 1s ease-in;\n            animation: moveToLeft 1s ease-in; }\n  .goals-page__component .nav.nav-tabs {\n    border-bottom: 1px solid transparent;\n    margin-top: 8rem;\n    -webkit-animation: moveInBottom 1s ease-in;\n            animation: moveInBottom 1s ease-in; }\n  .goals-page__component .nav.nav-tabs .active {\n      background-color: transparent;\n      border: 1px solid #ffb900;\n      color: #ffb900 !important; }\n  .goals-page__component .nav.nav-tabs li {\n      font-size: 1.5rem !important;\n      text-transform: uppercase; }\n  .goals-page__component .nav.nav-tabs li a {\n        color: #ffffff; }\n  .goals-page__component .nav.nav-tabs li a:hover {\n          color: #ffb900 !important; }\n  .goals-page__component .nav.nav-tabs li .nav-link:focus, .goals-page__component .nav.nav-tabs li .nav-link:hover {\n        border-color: #ffb900; }\n"

/***/ }),

/***/ "./src/app/goals/goals.component.ts":
/*!******************************************!*\
  !*** ./src/app/goals/goals.component.ts ***!
  \******************************************/
/*! exports provided: GoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsComponent", function() { return GoalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoalsComponent = /** @class */ (function () {
    function GoalsComponent() {
    }
    GoalsComponent.prototype.ngOnInit = function () {
    };
    GoalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goals',
            template: __webpack_require__(/*! ./goals.component.html */ "./src/app/goals/goals.component.html"),
            styles: [__webpack_require__(/*! ./goals.component.scss */ "./src/app/goals/goals.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GoalsComponent);
    return GoalsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <img src=\"../../assets/images/logoShot.png\" alt=\"\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span> <i class=\"ion-navicon-round\"></i></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"'/goals'\"><i class=\"fas fa-trophy\"></i> Goals</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"'/todos'\" ><i class=\"fas fa-tasks\"></i> Todos</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"'/notes'\"><i class=\"fas fa-clipboard-list\"></i>  Notes</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"'/posts'\"><i class=\"fas fa-book-open\"></i> Posts</a>\n      </li>\n    </ul>\n    <form class=\"form-inline\">\n      <p><a [routerLink]=\"'/profile'\"  class=\"user-link\">{{username}}</a></p>\n      <button class=\"btn btn--transparent\" (click)=\"logout()\">Log out</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-image: linear-gradient(to right, #6f49e7, #4776e6);\n  color: #ffffff;\n  font-size: 1.4rem;\n  position: relative;\n  height: 25vh;\n  background-size: cover;\n  background-position: top;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 18vh, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 18vh, 0 100%); }\n  nav .navbar-brand {\n    margin-left: 6rem; }\n  nav .navbar-brand img {\n      height: 4rem; }\n  nav ul {\n    margin-left: 15rem;\n    text-transform: uppercase; }\n  @media (max-width: 75em) {\n      nav ul {\n        margin-left: 0;\n        text-align: center; } }\n  nav ul li {\n      margin-left: 6rem;\n      position: relative;\n      color: #ffffff; }\n  nav ul li:before {\n        content: \"\";\n        position: absolute;\n        width: 2px;\n        height: 3rem;\n        background-color: #ffffff;\n        top: 0;\n        right: -1rem; }\n  @media (max-width: 75em) {\n          nav ul li:before {\n            display: none; } }\n  nav ul li a {\n        transition: all .3s ease-in;\n        color: #ffffff; }\n  nav ul li a:hover {\n          color: #FFDD3A; }\n  @media (max-width: 75em) {\n    nav .form-inline {\n      display: block;\n      text-align: right; } }\n  nav .form-inline p {\n    margin-top: 1rem; }\n  @media (max-width: 75em) {\n      nav .form-inline p {\n        float: left; } }\n  nav .form-inline p .user-link {\n      color: #FFBD3A;\n      padding: 1rem;\n      margin-right: 1rem; }\n  nav .form-inline button {\n    padding: 0.5rem 2rem;\n    font-size: 1.3rem; }\n  nav .form-inline button:hover {\n      color: #ffffff; }\n  .navbar-toggler i {\n  font-size: 3rem;\n  color: #ffffff;\n  cursor: pointer; }\n  .navbar-toggler:focus, .navbar-toggler:active {\n  outline: none;\n  border: none; }\n  .active {\n  color: #FFBD3A !important; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            this.username = storedUsername;
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.router.navigate(['/welcome']);
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "username", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <div class=\"login-page__content\">\n    <div class=\"login-form\">\n      <div class=\"header__logo-box\">\n        <img src=\"../../assets/images/logoShot.png\" alt=\"\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form\">\n            <form #form=\"ngForm\" (ngSubmit)=\"login()\">\n              <div class=\"u-margin-bottom-small\">\n                <h2 class=\"heading-secondary\">Login Page</h2>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\"\n                       class=\"form-input\"\n                       placeholder=\"Username\"\n                       id=\"username\"\n                       name=\"username\" required [(ngModel)]=\"username\">\n                <label class=\"form-label\" for=\"username\">Username</label>\n              </div>\n\n              <div class=\"form-group password-container\">\n                <input type=\"{{type}}\"\n                       class=\"form-input\"\n                       placeholder=\"Password\"\n                       id=\"password\"\n                       name=\"password\" required [(ngModel)]=\"password\"> <span\n                (click)=\"toggleShowHidePassword()\"><i class=\"fas fa-eye\"></i></span>\n                <label class=\"form-label\" for=\"password\">Password</label>\n              </div>\n\n              <div class=\"form-group form-group__checkbox\">\n                <input type=\"checkbox\" [(ngModel)]=\"remember\" name=\"remember\" id=\"remember\">\n                <label for=\"remember\" class=\"checkbox-label\">\n                  <span class=\"form-checkbox\"></span>Remember me</label>\n              </div>\n              <div [hidden]=\"!warning\" class=\"incorrect-data\">\n                Username or password is incorrect!\n              </div>\n              <div class=\"form-group\">\n                <button class=\"btn btn--white\" [disabled]=\"!form.valid\">Login</button>\n                <p>New to site? <a [routerLink]=\"['/register']\">Create an account</a></p>\n              </div>\n            </form>\n            <p class=\"forgot-password\"><a [routerLink]=\"['/forgot-password']\">Forgot password</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  padding: 3rem; }\n\n.login-page__content {\n  position: relative;\n  font-family: Lato, sans-serif;\n  color: #ffffff;\n  height: 95vh;\n  background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.8), rgba(71, 118, 230, 0.8)), url('34943640193_0b537367ac_h-min.jpg');\n  background-size: cover;\n  background-position: top;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 78vh, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 78vh, 0 100%); }\n\n.login-page__content .header__logo-box {\n    position: absolute;\n    top: 4rem;\n    left: 4rem; }\n\n.login-page__content .header__logo-box img {\n      height: 4.5rem; }\n\n.login-form {\n  width: 50%;\n  padding: 5rem 0;\n  position: relative; }\n\n.login-form .form {\n    margin: 0 auto;\n    width: 70%;\n    padding: 3rem; }\n\n.login-form .form .u-margin-bottom-small {\n      text-align: center; }\n\n.login-form .form .u-margin-bottom-small h2 {\n        color: #ffffff;\n        margin-top: 3rem;\n        letter-spacing: 1rem;\n        margin-bottom: 4rem;\n        font-weight: 400;\n        -webkit-animation: moveToRight 1s ease-in;\n                animation: moveToRight 1s ease-in; }\n\n.login-form .form p {\n      display: inline-block;\n      margin-top: 2rem;\n      font-size: 1.6rem;\n      color: #ffffff; }\n\n.login-form .form p a {\n        color: #ffffff;\n        padding-left: 0.5rem; }\n\n.login-form .form p a:hover {\n          text-decoration: underline;\n          color: #FFDD3A; }\n\n.login-form .form p.forgot-password {\n      font-size: 1.2rem;\n      margin-top: 0; }\n\n.login-form .form p.forgot-password a {\n        color: #FFDD3A; }\n\n.login-form .form .form-group {\n      color: #212121;\n      -webkit-animation: moveToLeft 1s ease-in;\n              animation: moveToLeft 1s ease-in; }\n\n.login-form .form .form-group label {\n        color: #ffffff; }\n\n.login-form .form .form-group button {\n        margin-top: 1rem;\n        float: left;\n        margin-right: 3rem;\n        cursor: pointer;\n        color: #4776E6; }\n\n.login-form .form .form-group button:hover {\n          background-color: #ffffff; }\n\n.login-form .form .form-group #remember {\n        display: none; }\n\n.login-form .form .form-group .form-checkbox {\n        height: 3rem;\n        width: 3rem;\n        border: 5px solid rgba(255, 255, 255, 0.7);\n        display: inline-block;\n        position: absolute;\n        left: 0;\n        top: -.4rem; }\n\n.login-form .form .form-group .form-checkbox::after {\n          content: \"\";\n          display: block;\n          height: 1.3rem;\n          width: 1.3rem;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n          background-color: rgba(255, 255, 255, 0.7);\n          opacity: 0;\n          transition: opacity .2s; }\n\n.login-form .form .form-group .checkbox-label {\n        font-size: 1.6rem;\n        cursor: pointer;\n        position: relative;\n        padding-left: 4.5rem; }\n\n.login-form .form .form-input {\n      font-size: 1.5rem;\n      padding: 1rem 2rem;\n      color: inherit;\n      border-radius: 2px;\n      background-color: rgba(255, 255, 255, 0.7);\n      border: none;\n      font-family: Lato, sans-serif;\n      border-bottom: 3px solid transparent;\n      width: 100%;\n      display: block;\n      transition: all .3s; }\n\n.login-form .form .form-input:focus {\n        outline: none;\n        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n        border-bottom: 3px solid #4776E6; }\n\n.login-form .form .form-input:focus:invalid {\n        border-bottom: 3px solid orangered !important; }\n\n.login-form .form .form-input::-webkit-input-placeholder {\n        color: #212121; }\n\n.login-form .form .form-label {\n      font-size: 1.2rem;\n      font-weight: 700;\n      margin-left: 2rem;\n      margin-top: .7rem;\n      display: block;\n      transition: all .3s; }\n\n.login-form .form .form-input:placeholder-shown + .form-label {\n      opacity: 0;\n      visibility: hidden;\n      -webkit-transform: translateY(-4rem);\n              transform: translateY(-4rem); }\n\n.login-form .logo {\n    position: absolute;\n    top: 4.5rem;\n    left: 4.5rem;\n    width: 9rem;\n    z-index: 2; }\n\n.login-form .form-group__checkbox {\n    margin-top: 4rem;\n    margin-bottom: 2.5rem; }\n\n#remember:checked ~ .checkbox-label .form-checkbox::after {\n  opacity: 1; }\n\n.footer {\n  margin-top: -15rem; }\n\n@media (max-width: 75em) {\n    .footer {\n      margin-top: -19rem; } }\n\n.incorrect-data {\n  color: orangered;\n  font-size: 1.5rem; }\n\n.password-container {\n  position: relative; }\n\n.password-container span .fa-eye {\n    position: absolute;\n    top: 12px;\n    font-size: 2rem;\n    right: 1%;\n    color: #4776E6;\n    cursor: pointer; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service, loginService) {
        this.router = router;
        this.service = service;
        this.loginService = loginService;
        this.username = '';
        this.password = '';
        this.remember = false;
        this.warning = false;
        this.type = 'password';
        this.show = false;
    }
    LoginComponent.prototype.sendUser = function () {
        this.loginService.sendUser(this.user.username);
    };
    LoginComponent.prototype.onGetUsers = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (u) {
            _this.users = u;
            _this.users.find(function (user) {
                _this.user = user;
                if (_this.username === _this.user.username && _this.password === _this.user.password && _this.remember === true) {
                    localStorage.setItem('username', _this.username);
                    localStorage.setItem('remember', 'true');
                    _this.router.navigate(['/']);
                    return _this.sendUser();
                }
                else if (_this.username === _this.user.username && _this.password === _this.user.password && _this.remember === false) {
                    localStorage.setItem('username', _this.username);
                    localStorage.setItem('remember', 'true');
                    _this.router.navigate(['/']);
                    return _this.sendUser();
                }
                else {
                    _this.warning = true;
                }
            });
        });
    };
    LoginComponent.prototype.toggleShowHidePassword = function () {
        this.show = !this.show;
        if (this.show) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    LoginComponent.prototype.login = function () {
        this.onGetUsers();
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var storedUsername = localStorage.getItem('username');
        var storedRemember = localStorage.getItem('remember');
        if (storedUsername && storedRemember === 'true') {
            this.username = storedUsername;
            this.service.getUsers().subscribe(function (users) {
                _this.users = users;
                _this.users.find(function (user) {
                    _this.user = user;
                    if (storedUsername === _this.user.username) {
                        _this.password = _this.user.password;
                    }
                });
            });
            this.remember = true;
        }
        else {
            this.username = '';
            this.password = '';
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page__component\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container text-center\">\n      <h2 class=\"heading-secondary text-center\">Welcome to Go2Goal!</h2>\n      <p class=\"todos__header--paragraph\">\"<span>A dream</span> written down with a date becomes a goal.\n        <span>A goal</span> broken down into\n        steps becomes a plan. <span>A plan</span> backed by action makes your dreams come true\".\n      </p>\n    </div>\n  </div>\n  <div class=\"main-page__component--content\">\n    <p class=\"pre--paragraph\">How can you be sure that you're on the right way if you even don't know where you go?</p>\n    <div class=\"main-paragraph\">G2G will help to <span>plan</span> your life and <span>define</span> every step to your\n      final goal achieving which will <span>make you happy</span>.\n      <ul>\n        <li><i class=\"far fa-check-circle\"></i> Here you can define the Main Goal of your life and several steps which\n          will help you to achieve it, goals of the year, goals of the month and goals of the week.\n        </li>\n        <br>\n        <li><i class=\"far fa-check-circle\"></i> Create a list of daily activities, curses you want to buy,\n          books you want to read and cross them off. It will help you to manage your time and be more productive.\n        </li>\n        <br>\n        <li><i class=\"far fa-check-circle\"></i> Leave here any notes, your favorite quotes and expressions, useful resources,\n          links. Everything you don't want to forget or lose.\n        </li>\n        <br>\n        <li><i class=\"far fa-check-circle\"></i> Share your thoughts, goals or some useful information to help another people in their life planning\n          or use their experience.\n        </li>\n      </ul>\n    </div>\n    <div class=\"content\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"card\">\n            <div class=\"card__side card__side--front\">\n              <div class=\"card__picture card__picture--1\">\n                &nbsp;\n              </div>\n              <h4 class=\"card__heading\">\n                <span class=\"card__heading-span card__heading-span--1\">Goals</span>\n              </h4>\n              <div class=\"card__details\">\n                <ul>\n                  <li>Goal of Life</li>\n                  <li>Goals of Year</li>\n                  <li>Goals of Month</li>\n                  <li>Goals of Week</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card__side card__side--back card__side--back-1\">\n              <div class=\"card__cta\">\n                <h4 class=\"card__side--back__header\">My Goals</h4>\n                <div class=\"card__cta--details\">\n                  <ul>\n                    <li>Goal of Life: {{golNumber}}</li>\n                    <li>Goals of Year: {{goyNumber}}</li>\n                    <li>Goals of Month: {{gomNumber}}</li>\n                    <li>Goals of Week: {{gowNumber}}</li>\n                  </ul>\n                </div>\n                <a [routerLink]=\"'/goals'\" class=\"btn btn--white\">Go to Goals!</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\">\n            <div class=\"card__side card__side--front\">\n              <div class=\"card__picture card__picture--2\">\n                &nbsp;\n              </div>\n              <h4 class=\"card__heading\">\n                <span class=\"card__heading-span card__heading-span--2\">Todos</span>\n              </h4>\n              <div class=\"card__details--2\">\n                Lists of todos, curses, books, etc.\n              </div>\n            </div>\n            <div class=\"card__side card__side--back card__side--back-2\">\n              <div class=\"card__cta\">\n                <h4 class=\"card__side--back__header\">My Todos</h4>\n                <div class=\"card__cta--details\">\n                  You have {{todosNumber}} things to do.\n                </div>\n                <a [routerLink]=\"'/todos'\" class=\"btn btn--white\">Go to Todos!</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\">\n            <div class=\"card__side card__side--front\">\n              <div class=\"card__picture card__picture--3\">\n                &nbsp;\n              </div>\n              <h4 class=\"card__heading\">\n                <span class=\"card__heading-span card__heading-span--3\">Notes</span>\n              </h4>\n              <div class=\"card__details--2\">\n                Notes, quotes, links, expressions, etc.\n              </div>\n            </div>\n            <div class=\"card__side card__side--back card__side--back-3\">\n              <div class=\"card__cta\">\n                <h4 class=\"card__side--back__header\">My Notes</h4>\n                <div class=\"card__cta--details\">\n                  You have {{notesNumber}} very important and useful notes.\n                </div>\n                <a [routerLink]=\"'/notes'\" class=\"btn btn--white\">Go to Notes!</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\">\n            <div class=\"card__side card__side--front\">\n              <div class=\"card__picture card__picture--4\">\n                &nbsp;\n              </div>\n              <h4 class=\"card__heading\">\n                <span class=\"card__heading-span card__heading-span--4\">Posts</span>\n              </h4>\n              <div class=\"card__details--4\">\n                Share your impression, opinion about books, places, events. Recommend it to another people. Use someones\n                experience or recommendations.\n              </div>\n            </div>\n            <div class=\"card__side card__side--back card__side--back-4\">\n              <div class=\"card__cta\">\n                <h4 class=\"card__side--back__header\">My Posts</h4>\n                <div class=\"card__cta--details\">\n                  You have {{postsNumber}} published post.\n                </div>\n                <a [routerLink]=\"'/posts'\" class=\"btn btn--white\">Go to Posts!</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <p class=\"pre--paragraph\"></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-page__component {\n  background-color: #f7f7f7;\n  margin-top: -6rem; }\n  .main-page__component h2 {\n    color: #212121;\n    -webkit-animation: moveToLeft 1s ease-in;\n            animation: moveToLeft 1s ease-in;\n    margin-top: 1rem;\n    margin-bottom: 2rem; }\n  .main-page__component .content {\n    margin: 0 auto;\n    width: 90%;\n    padding: 2rem; }\n  .main-page__component .content .card {\n      -webkit-perspective: 150rem;\n              perspective: 150rem;\n      -moz-perspective: 150rem;\n      position: relative;\n      height: 45rem;\n      border: none; }\n  @media (max-width: 56.25em) {\n        .main-page__component .content .card {\n          margin-top: 2rem; } }\n  .main-page__component .content .card__side {\n      height: 45rem;\n      transition: all .8s ease;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n      border-radius: 3px;\n      overflow: hidden;\n      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15); }\n  .main-page__component .content .card__side--back {\n      -webkit-transform: rotateY(180deg);\n              transform: rotateY(180deg); }\n  .main-page__component .content .card__side--back-1 {\n      background-image: linear-gradient(to right bottom, #4776E6, #8E54E9); }\n  .main-page__component .content .card__side--back-2 {\n      background-image: linear-gradient(to right bottom, #7ed56f, #28b485); }\n  .main-page__component .content .card__side--back-3 {\n      background-image: linear-gradient(to right bottom, #ffb900, #ff7730); }\n  .main-page__component .content .card__side--back-4 {\n      background-image: linear-gradient(to right bottom, #2998ff, #5643fa); }\n  .main-page__component .content .card:hover .card__side--front {\n      -webkit-transform: rotateY(-180deg);\n              transform: rotateY(-180deg); }\n  .main-page__component .content .card:hover .card__side--back {\n      -webkit-transform: rotateY(0);\n              transform: rotateY(0); }\n  .main-page__component .content .card__picture {\n      background-size: cover;\n      height: 23rem;\n      background-blend-mode: screen;\n      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n      border-top-left-radius: 3px;\n      border-top-right-radius: 3px; }\n  .main-page__component .content .card__picture--1 {\n      background-image: linear-gradient(to right bottom, #4776E6, #8E54E9), url('goals-min.jpg'); }\n  .main-page__component .content .card__picture--2 {\n      background-image: linear-gradient(to right bottom, #7ed56f, #28b485), url('todos.jpg'); }\n  .main-page__component .content .card__picture--3 {\n      background-image: linear-gradient(to right bottom, #ffb900, #ff7730), url('notes.jpg'); }\n  .main-page__component .content .card__picture--4 {\n      background-image: linear-gradient(to right bottom, #2998ff, #5643fa), url('posts-min.jpg'); }\n  .main-page__component .content .card__heading {\n      font-size: 2.8rem;\n      font-weight: 300;\n      text-transform: uppercase;\n      text-align: right;\n      color: #fff;\n      position: absolute;\n      top: 16.5rem;\n      right: 0rem;\n      width: 75%; }\n  .main-page__component .content .card__heading-span {\n      padding: 1rem 1.5rem;\n      -webkit-box-decoration-break: clone;\n      box-decoration-break: clone; }\n  .main-page__component .content .card__heading-span--1 {\n      background-image: linear-gradient(to right bottom, #4776E6, #8E54E9); }\n  .main-page__component .content .card__heading-span--2 {\n      background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.85), rgba(40, 180, 133, 0.85)); }\n  .main-page__component .content .card__heading-span--3 {\n      background-image: linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85)); }\n  .main-page__component .content .card__heading-span--4 {\n      background-image: linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85)); }\n  .main-page__component .content .card__details {\n      padding: 1rem; }\n  .main-page__component .content .card__details ul {\n        list-style: none;\n        width: 80%;\n        margin: 0 auto; }\n  .main-page__component .content .card__details ul li {\n          text-align: center;\n          font-size: 1.5rem;\n          padding: 1rem; }\n  .main-page__component .content .card__details--2 {\n      padding: 3rem;\n      padding-top: 8rem;\n      text-align: center;\n      font-size: 1.5rem; }\n  .main-page__component .content .card__details--4 {\n      padding: 3rem;\n      padding-top: 4rem;\n      text-align: center;\n      font-size: 1.5rem; }\n  .main-page__component .content .card__details ul li:not(:last-child) {\n      border-bottom: 1px solid #eee; }\n  .main-page__component .content .card__side--back-2 .card__cta {\n      width: 100%;\n      text-align: center;\n      color: #ffffff; }\n  .main-page__component .content .card__side--back-2 .card__cta .card__cta--details {\n        margin: 0 auto;\n        font-size: 1.5rem;\n        text-align: center;\n        margin-top: 8rem;\n        margin-bottom: 10rem; }\n  .main-page__component .content .card__side--back-2 .card__cta .btn--white {\n        margin: 0 auto; }\n  .main-page__component .content .card__side--back-3 .card__cta {\n      width: 100%;\n      text-align: center;\n      color: #ffffff; }\n  .main-page__component .content .card__side--back-3 .card__cta .card__cta--details {\n        margin: 0 auto;\n        font-size: 1.5rem;\n        text-align: center;\n        margin-top: 8rem;\n        margin-bottom: 10rem; }\n  .main-page__component .content .card__side--back-3 .card__cta .btn--white {\n        margin: 0 auto; }\n  .main-page__component .content .card__side--back-4 .card__cta {\n      width: 100%;\n      text-align: center;\n      color: #ffffff; }\n  .main-page__component .content .card__side--back-4 .card__cta .card__cta--details {\n        margin: 0 auto;\n        font-size: 1.5rem;\n        text-align: center;\n        margin-top: 8rem;\n        margin-bottom: 12rem; }\n  .main-page__component .content .card__side--back-4 .card__cta .btn--white {\n        margin: 0 auto; }\n  .main-page__component .content .card__cta {\n      width: 100%;\n      padding: 2rem;\n      text-align: center;\n      color: #ffffff; }\n  .main-page__component .content .card__cta .card__cta--details {\n        margin: 0 auto; }\n  .main-page__component .content .card__cta .card__cta--details ul {\n          list-style: none; }\n  .main-page__component .content .card__cta .card__cta--details ul li {\n            text-align: center;\n            font-size: 1.5rem;\n            padding: 1rem; }\n  .main-page__component .content .card__cta .btn--white {\n        margin: 0 auto; }\n  .main-page__component .content .card__side--back__header {\n      text-align: center;\n      color: #fff;\n      font-size: 1.6rem;\n      text-transform: uppercase;\n      margin-top: 5rem;\n      margin-bottom: 2rem; }\n  .main-page__component .content .row {\n      margin-bottom: 5rem; }\n  .pre--paragraph {\n  font-size: 2.6rem;\n  text-align: center;\n  padding: 3rem 20rem;\n  font-style: italic;\n  margin-bottom: 3rem;\n  color: #212121;\n  letter-spacing: 1.5px;\n  line-height: 2;\n  position: relative; }\n  .pre--paragraph:after {\n    content: '';\n    width: 30rem;\n    height: .5rem;\n    background-color: #ff7730;\n    position: absolute;\n    bottom: 0;\n    right: 37%; }\n  .main-paragraph {\n  font-size: 1.8rem;\n  text-align: center;\n  padding: 0rem 4rem;\n  margin-bottom: 3rem;\n  color: #000000;\n  letter-spacing: 1px; }\n  .main-paragraph span {\n    color: #ff7730;\n    font-size: 2.3rem;\n    font-family: 'Black And White Picture', sans-serif; }\n  .main-paragraph ul {\n    margin: 2rem;\n    border: 2px solid #6F49E7;\n    border-radius: 10px;\n    list-style: none;\n    padding: 3rem;\n    line-height: 1.5;\n    text-align: justify;\n    font-size: 1.8rem; }\n  .main-paragraph ul i {\n      color: #6F49E7; }\n  .jumbotron {\n  background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.5), rgba(71, 118, 230, 0.5)), url('luca-bravo-370128-unsplash-min.jpg');\n  margin-bottom: 0;\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20rem 2rem;\n  height: 95vh;\n  -webkit-clip-path: polygon(0 7vh, 100% 0, 100% 75vh, 0 100%);\n          clip-path: polygon(0 7vh, 100% 0, 100% 75vh, 0 100%); }\n  .jumbotron .heading-secondary {\n    color: #ffffff;\n    -webkit-transform: none;\n            transform: none;\n    width: 100%;\n    margin-top: 2rem; }\n  .todos__header--paragraph {\n  font-size: 2rem;\n  text-align: left;\n  -webkit-animation: moveToRight 1s ease-in;\n          animation: moveToRight 1s ease-in;\n  padding: 2rem 17rem 0;\n  color: #ffffff;\n  letter-spacing: 2px; }\n  .todos__header--paragraph span {\n    color: #FFDD3A;\n    font-size: 2.8rem;\n    font-family: 'Black And White Picture', sans-serif; }\n  .author {\n  font-size: 1.8rem;\n  text-align: center;\n  width: 100%;\n  text-transform: none;\n  color: #FFBD3A; }\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(service) {
        this.service = service;
        this.todos = [];
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var storedUsername = localStorage.getItem('username');
        this.service.getUsers().subscribe(function (users) {
            _this.users = users;
            _this.users.forEach(function (user) {
                _this.user = user;
                if (storedUsername === _this.user.username) {
                    _this.user = user;
                    _this.gomNumber = _this.user.goals_of_the_month.length;
                    _this.golNumber = _this.user.goal_of_live.length;
                    _this.goyNumber = _this.user.goals_of_the_year.length;
                    _this.gomNumber = _this.user.goals_of_the_month.length;
                    _this.gowNumber = _this.user.goals_of_the_week.length;
                    _this.notesNumber = _this.user.notes.length;
                    _this.user.todoLists.forEach(function (todolist) {
                        _this.todos.push(todolist.todos);
                    });
                    _this.todosNumber = _this.todos.length;
                    _this.postsNumber = _this.user.posts.length;
                }
            });
        });
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/main-page/main-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"whole-content\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <div class=\"footer\">\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  margin-top: -3rem; }\n\n.whole-content {\n  padding: 3rem; }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel(_id, username, password, email, todoLists, notes, posts, datesY, datesM, datesW, goal_of_live, first_level_steps, goals_of_the_year, goals_of_the_month, goals_of_the_week) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.todoLists = todoLists;
        this.notes = notes;
        this.posts = posts;
        this.datesY = datesY;
        this.datesM = datesM;
        this.datesW = datesW;
        this.goal_of_live = goal_of_live;
        this.first_level_steps = first_level_steps;
        this.goals_of_the_year = goals_of_the_year;
        this.goals_of_the_month = goals_of_the_month;
        this.goals_of_the_week = goals_of_the_week;
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/notebook/notebook.component.html":
/*!**************************************************!*\
  !*** ./src/app/notebook/notebook.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notebook-page__component\">\n  <div class=\"content\">\n    <div class=\"jumbotron jumbotron-fluid\">\n      <div class=\"container text-center\">\n        <div class=\"row\">\n          <h2 class=\"heading-secondary text-center\">Notes</h2>\n          <p class=\"notebook__header--paragraph\">\"People with goals succeed because they know where they're going\".\n          </p>\n          <p class=\"author\">Earl Nightingale</p>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"notebook-content__area textarea-field\">\n            <form [formGroup]=\"addNoteForm\">\n                  <textarea #note name=\"note\" id=\"note\" placeholder=\"Enter Note Here...\"\n                            formControlName=\"note\"></textarea>\n            </form>\n            <button [disabled]=\"!addNoteForm.valid\" type=\"submit\" (click)=\"addNote(note.value)\">\n              <i class=\"fas fa-plus\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 notebook-content\">\n        <p class=\"pre--paragraph\"></p>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4 class=\"text-center\" *ngIf=\"noNotes\">Your notes will appear here... </h4>\n            <div class=\"notebook-content__area note-content\" *ngFor=\"let note of notes; let index = index\">\n              <span (click)=\"editNote(note)\" class=\"todo--edit\"><i class=\"far fa-edit\"></i></span>\n              <span (click)=\"deleteNote(note, index)\" class=\"delete-icon\"><i class=\"far fa-times-circle\"></i></span>\n              <p>{{note.title}}</p>\n              <div class=\"form-group edit-note-form\" *ngIf=\"note.isEdited\">\n              <textarea type=\"text\"\n                        #noteUpdate\n                        class=\"form-input\"\n                        value=\"{{note.title}}\">\n                 </textarea>\n                <button type=\"button\" class=\"btn edit-button\"\n                        (click)=\"updateNote(noteUpdate.value, note)\"><i class=\"far fa-edit\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"pre--paragraph\"></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notebook/notebook.component.scss":
/*!**************************************************!*\
  !*** ./src/app/notebook/notebook.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notebook-page__component {\n  padding-bottom: 5rem;\n  font-size: 1.5rem;\n  margin-top: -6rem; }\n  .notebook-page__component .jumbotron {\n    background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.5), rgba(71, 118, 230, 0.5)), url('thought-catalog-214785-unsplash-min.jpg');\n    margin-bottom: 0;\n    background-size: cover;\n    background-attachment: fixed;\n    padding: 20rem 2rem;\n    height: 95vh;\n    -webkit-clip-path: polygon(0 7vh, 100% 0, 100% 75vh, 0 100%);\n            clip-path: polygon(0 7vh, 100% 0, 100% 75vh, 0 100%); }\n  .notebook-page__component .heading-secondary {\n    color: #ffffff;\n    -webkit-transform: none;\n            transform: none;\n    width: 100%;\n    margin-top: 2rem;\n    -webkit-animation: moveToLeft 1s ease-in;\n            animation: moveToLeft 1s ease-in; }\n  .notebook-page__component .notebook__header--paragraph {\n    font-size: 1.8rem;\n    text-align: center;\n    text-transform: uppercase;\n    padding: 2rem 17rem 0;\n    color: #ffffff;\n    letter-spacing: 2px;\n    -webkit-animation: moveToRight 1s ease-in;\n            animation: moveToRight 1s ease-in; }\n  .notebook-page__component .author {\n    text-align: center;\n    width: 100%;\n    color: #FFDD3A;\n    font-size: 2.8rem;\n    font-family: 'Black And White Picture', sans-serif;\n    -webkit-animation: moveToRight 1s ease-in;\n            animation: moveToRight 1s ease-in; }\n  .notebook-page__component .notebook-content {\n    background-color: #ffffff;\n    padding: 3rem;\n    font-size: 1.5rem; }\n  .notebook-page__component .notebook-content .pre--paragraph {\n      font-size: 2.6rem;\n      text-align: center;\n      padding: 3rem 20rem;\n      font-style: italic;\n      margin-bottom: 3rem;\n      color: #212121;\n      letter-spacing: 1.5px;\n      line-height: 2;\n      position: relative; }\n  .notebook-page__component .notebook-content .pre--paragraph:last-child {\n        padding: 1rem 20rem; }\n  .notebook-page__component .notebook-content .pre--paragraph:after {\n        content: '';\n        width: 30rem;\n        height: .5rem;\n        background-color: #ff7730;\n        position: absolute;\n        bottom: 0;\n        right: 37%; }\n  .notebook-page__component .notebook-content .main-paragraph {\n      font-size: 1.6rem;\n      text-align: center;\n      padding: 3rem 4rem;\n      margin-bottom: 3rem;\n      color: #212121;\n      letter-spacing: 1px; }\n  .notebook-page__component .notebook-content .note-content {\n      background-image: linear-gradient(to right bottom, rgba(255, 119, 48, 0.5), rgba(255, 185, 0, 0.5));\n      color: #212121;\n      text-align: center;\n      position: relative;\n      transition: all ease-in .5s; }\n  .notebook-page__component .notebook-content .note-content .delete-icon {\n        position: absolute;\n        right: 5px;\n        margin-top: -15px;\n        color: #4776E6;\n        cursor: pointer;\n        opacity: .7;\n        display: none;\n        transition: all .2s ease-out; }\n  .notebook-page__component .notebook-content .note-content .delete-icon:hover {\n          -webkit-transform: scale(1.3) rotate(90deg);\n                  transform: scale(1.3) rotate(90deg);\n          opacity: 1; }\n  .notebook-page__component .notebook-content .note-content .todo--edit {\n        position: absolute;\n        right: 2.5rem;\n        margin-top: -15px;\n        color: #4776E6;\n        cursor: pointer;\n        opacity: .7;\n        display: none;\n        transition: all .2s ease-out; }\n  .notebook-page__component .notebook-content .note-content .todo--edit:hover {\n          -webkit-transform: scale(1.3) rotate(90deg);\n                  transform: scale(1.3) rotate(90deg);\n          opacity: 1; }\n  .notebook-page__component .notebook-content .note-content:hover {\n        -webkit-transform: scale(1.3);\n                transform: scale(1.3);\n        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n        z-index: 2;\n        background-image: linear-gradient(to right bottom, rgba(255, 119, 48, 0.8), rgba(255, 185, 0, 0.8)); }\n  .notebook-page__component .notebook-content .notebook-content__area.note-content:hover > .delete-icon {\n      display: block; }\n  .notebook-page__component .notebook-content .notebook-content__area.note-content:hover > .todo--edit {\n      display: block; }\n  .edit-note-form {\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-top-left-radius: 5px;\n  border: 2px solid #4776E6;\n  padding: 2rem;\n  background-image: linear-gradient(to right bottom, #ff7730, #ffb900);\n  border-top-right-radius: 5px;\n  transition: all ease-in .2s; }\n  .edit-note-form button.edit-button {\n    padding: 0.3rem .8rem !important;\n    background-color: #4776E6 !important; }\n  .edit-note-form button.edit-button:hover {\n      -webkit-transform: rotate(-90deg) !important;\n              transform: rotate(-90deg) !important; }\n  .notebook-content__area {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 1rem;\n  width: 24%;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n  border-radius: 5px; }\n  .notebook-content__area textarea {\n    width: 100%;\n    border: none;\n    border-radius: 5px;\n    padding: .5rem;\n    background: none; }\n  .notebook-content__area textarea:focus {\n      outline: none; }\n  .notebook-content__area p {\n    word-break: break-all; }\n  .notebook-content__area button {\n    padding: 0.4rem 1rem;\n    position: absolute;\n    bottom: -1rem;\n    right: -1rem;\n    background-color: #ff7730;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n    border-radius: 50%;\n    color: #ffffff;\n    cursor: pointer;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    transition: all ease-in .2s; }\n  .notebook-content__area button:focus, .notebook-content__area button:active {\n      outline: none;\n      border: none; }\n  .notebook-content__area button[disabled] {\n    cursor: not-allowed;\n    background-color: #ffb900;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n  .textarea-field {\n  margin-top: 3.5rem;\n  background-color: rgba(255, 255, 255, 0.5); }\n  h4 {\n  padding: 1rem;\n  color: #ff7730;\n  text-transform: uppercase;\n  font-size: 1.8rem; }\n"

/***/ }),

/***/ "./src/app/notebook/notebook.component.ts":
/*!************************************************!*\
  !*** ./src/app/notebook/notebook.component.ts ***!
  \************************************************/
/*! exports provided: NotebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebookComponent", function() { return NotebookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotebookComponent = /** @class */ (function () {
    function NotebookComponent(service) {
        this.service = service;
        this.notes = [];
    }
    NotebookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (users) {
            users.forEach(function (user) {
                var storedUsername = localStorage.getItem('username');
                if (storedUsername === user.username) {
                    _this.user = user;
                    _this.id = _this.user._id;
                    _this.notes = _this.user.notes;
                    if (_this.notes.length > 0) {
                        _this.noNotes = false;
                    }
                    else {
                        _this.noNotes = true;
                    }
                }
            });
        });
        this.initForm();
    };
    NotebookComponent.prototype.addNote = function (value) {
        this.noteObj = {
            title: value,
            isEdited: false,
        };
        this.notes.push(this.noteObj);
        this.service.postNotes(this.noteObj, this.user._id);
        this.addNoteForm.reset();
        this.noNotes = false;
    };
    NotebookComponent.prototype.editNote = function (note) {
        note.isEdited = !note.isEdited;
    };
    NotebookComponent.prototype.updateNote = function (value, note) {
        note.title = value;
        note.isEdited = false;
        this.service.updateNotes(this.user).subscribe(function (user) { return user; });
    };
    NotebookComponent.prototype.deleteNote = function (note, index) {
        this.notes.splice(index, 1);
        this.service.updateNotes(this.user).subscribe(function (user) { return user; });
        if (this.notes.length > 0) {
            this.noNotes = false;
        }
        else {
            this.noNotes = true;
        }
    };
    NotebookComponent.prototype.initForm = function () {
        var note = '';
        this.addNoteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](note, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'edited': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
    };
    NotebookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notebook',
            template: __webpack_require__(/*! ./notebook.component.html */ "./src/app/notebook/notebook.component.html"),
            styles: [__webpack_require__(/*! ./notebook.component.scss */ "./src/app/notebook/notebook.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], NotebookComponent);
    return NotebookComponent;
}());



/***/ }),

/***/ "./src/app/pipes/truncate-pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate-pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-component\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container text-center\">\n      <h2 class=\"heading-secondary text-center\">Posts</h2>\n      <p class=\"posts__header--paragraph\">\"Time is what we want most but what we use worst\".\n      </p>\n      <p class=\"author\">William Penn</p>\n      <div class=\"add-post text-center\">\n        <button class=\"btn btn--white btn--animated add-post-button\" (click)=\"openModal(content)\"><i class=\"fas fa-plus\"></i>\n          Add Post\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"posts-component\">\n    <div class=\"posts-content\">\n      <p class=\"pre--paragraph\"></p>\n      <div class=\"row\">\n        <div class=\"col-md-12 tabs-block\">\n          <mat-tab-group>\n            <mat-tab label=\"All Posts\">\n              <div class=\"row\">\n                <div class=\"col-md-12 filter-post\">\n                  <input type=\"text\" placeholder=\"Search...\" class=\"form-input\" [(ngModel)]=\"term\">\n                </div>\n              </div>\n              <div class=\"outer-blocks\">\n                <div class=\"card post-container\" *ngFor=\"let post of allPosts |filter:term; let i = index\">\n                  <h3>{{post.title}}</h3>\n                  <br>\n                  <p class=\"card-text\">{{post.postText | truncate:[200, '...']}}</p>\n                  <img [src]=\"post.upload\" alt=\"\">\n                  <br>\n                  <div class=\"post-details\">\n                    <span>Date: <span class=\"post-info\">{{post.date}}</span></span> &nbsp;\n                    <span>Author: <span class=\"post-info\">{{post.author}}</span></span> &nbsp;\n                    <span>Category: <span class=\"post-info\">{{post.category}}</span></span> &nbsp;\n                  </div>\n                  <hr>\n                  <div class=\"post-icons\">\n                    <span class=\"like-post\"><i class=\"fas fa-heart\"></i> <span>{{post.likes[0].count}}</span></span>\n                    <!--<span class=\"like-post\"><i class=\"fas fa-star\"></i> <span>{{post.favorites}}</span></span>-->\n                    <span class=\"show-post\" (click)=\"openFullPost(content2)\">Read More <i\n                      class=\"fas fa-angle-double-right\"></i></span>\n                  </div>\n                  <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\">{{post.title}}</h4>\n                      <span class=\"close-popup\" (click)=\"d('Cross click')\"><i class=\"far fa-times-circle\"></i></span>\n                      <hr>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"post-details\">\n                        <span>Date: <span class=\"post-info\">{{post.date}}</span></span> &nbsp;\n                        <span>Author: <span class=\"post-info\">{{post.author}}</span></span> &nbsp;\n                        <span>Category: <span class=\"post-info\">{{post.category}}</span></span> &nbsp;\n                      </div>\n                      <br>\n                      <p class=\"card-text\">{{post.postText}}</p>\n                      <img [src]=\"post.upload\" alt=\"\">\n                    </div>\n                    <div class=\"modal-footer\">\n                      <div class=\"post-icons\">\n                        <span class=\"like-post\" [style.color]=\"isLike ? 'red' : '#ccc'\" (click)=\"onAddPostLike(post)\"><i\n                          class=\"far fa-heart\"></i> <span>{{post.likes[0].count}}</span></span>\n                        <span class=\"like-post\"><i class=\"fas fa-star\"></i> <span>{{post.favorites}}</span></span>\n                      </div>\n                    </div>\n                  </ng-template>\n                </div>\n              </div>\n            </mat-tab>\n            <mat-tab label=\"My Posts\">\n              <h4 class=\"text-center\" *ngIf=\"noPosts\">Your posts will appear here... </h4>\n              <div class=\"card post-container\" *ngFor=\"let post of userPosts; let i = index\">\n                <h3>{{post.title}}</h3>\n                <p class=\"card-text\">{{post.postText | truncate:[200, '...']}}</p>\n                <img [src]=\"post.upload\" alt=\"\">\n                <br>\n                <div class=\"post-details\">\n                  <span>Date: <span class=\"post-info\">{{post.date}}</span></span> &nbsp;\n                  <span>Author: <span class=\"post-info\">{{post.author}}</span></span> &nbsp;\n                  <span>Category: <span class=\"post-info\">{{post.category}}</span></span> &nbsp;\n                </div>\n                <hr>\n                <div class=\"post-icons\">\n                  <span class=\"like-post\"><i class=\"fas fa-heart\"></i> <span>{{post.likes[0].count}}</span></span>\n                  <span class=\"show-post\" (click)=\"editPost(edit)\"><i class=\"fas fa-edit\"></i></span>\n                </div>\n\n\n                <ng-template #edit let-c=\"close\" let-d=\"dismiss\">\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">{{post.title}}</h4>\n                    <span class=\"close-popup\" (click)=\"d('Cross click')\"><i class=\"far fa-times-circle\"></i></span>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"add-post-form-container\">\n                      <form class=\"form-group add-post-form posts-form\" [formGroup]=\"editPostForm\">\n                        <input class=\"form-input\" id=\"titleEdit\" type=\"text\" formControlName=\"title\"\n                               placeholder=\"Post Title\">\n                        <i class=\"fas fa-book\"></i>\n                        <i class=\"far fa-comment-dots textarea-icon\"></i>\n                        <textarea formControlName=\"postText\" class=\"form-input\" id=\"\" cols=\"30\" rows=\"10\"\n                                  placeholder=\"Enter Your Story\"></textarea>\n\n                        <input type=\"text\" class=\"form-input\" (change)=\"uploadFile($event)\" formControlName=\"upload\"\n                               placeholder=\"Add an image url to your post\">\n                        <i class=\"far fa-image\"></i>\n                        <img *ngIf=\"image\" [src]=\"image\" alt=\"\" class=\"preview-image\">\n                        <div class=\"form-group\">\n                          <select class=\"form-input\" id=\"exampleFormControlSelect2\" formControlName=\"category\">\n                            <option value=\"\" disabled selected>Choose a category of your post</option>\n                            <option>Goals</option>\n                            <option>Books</option>\n                            <option>Travel</option>\n                            <option>Movies</option>\n                            <option>Places</option>\n                            <option>Music</option>\n                            <option>Other</option>\n                          </select>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <div class=\"post-button\">\n                      <button\n                        type=\"submit\" (click)=\"onEditPost(post)\"\n                        class=\"btn btn--indigo\"><i class=\"fas fa-plus add-post-icon\"></i> Edit\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"post-icon\">\n                    <i class=\"fas fa-book\"></i>\n                  </div>\n                </ng-template>\n\n\n              </div>\n            </mat-tab>\n          </mat-tab-group>\n          <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">New Post</h4>\n              <span class=\"close-popup\" (click)=\"d('Cross click')\"><i class=\"far fa-times-circle\"></i></span>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"add-post-form-container\">\n                <form class=\"form-group add-post-form posts-form\" [formGroup]=\"addPostForm\">\n                  <input class=\"form-input\" id=\"title\" type=\"text\" formControlName=\"title\" placeholder=\"Post Title\">\n                  <i class=\"fas fa-book\"></i>\n                  <i class=\"far fa-comment-dots textarea-icon\"></i>\n                  <textarea formControlName=\"postText\" class=\"form-input\" id=\"\" cols=\"30\" rows=\"10\"\n                            placeholder=\"Enter Your Story\"></textarea>\n\n                  <input type=\"text\" class=\"form-input\" (change)=\"uploadFile($event)\" formControlName=\"upload\"\n                         placeholder=\"Add an image url to your post\">\n                  <i class=\"far fa-image\"></i>\n                  <img *ngIf=\"image\" [src]=\"image\" alt=\"\" class=\"preview-image\">\n                  <div class=\"form-group\">\n                    <select class=\"form-input\" id=\"exampleFormControlSelect1\" formControlName=\"category\">\n                      <option value=\"\" disabled selected>Choose a category of your post</option>\n                      <option>Goals</option>\n                      <option>Books</option>\n                      <option>Travel</option>\n                      <option>Movies</option>\n                      <option>Places</option>\n                      <option>Music</option>\n                      <option>Other</option>\n                    </select>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"post-button\">\n                <button [disabled]=\"!addPostForm.valid\"\n                        type=\"submit\" (click)=\"addPost()\"\n                        class=\"btn btn--indigo\"><i class=\"fas fa-plus add-post-icon\"></i> Add\n                </button>\n              </div>\n            </div>\n            <div class=\"post-icon\">\n              <i class=\"fas fa-book\"></i>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n      <p class=\"pre--paragraph\"></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-component {\n  background-color: #ffffff;\n  margin-top: -6rem;\n  font-size: 1.5rem; }\n  .post-component .pre--paragraph {\n    font-size: 2.6rem;\n    text-align: center;\n    padding: 0 20rem;\n    font-style: italic;\n    margin-bottom: 3rem;\n    color: #212121;\n    letter-spacing: 1.5px;\n    line-height: 2;\n    position: relative; }\n  .post-component .pre--paragraph:last-child {\n      padding: 2rem 20rem; }\n  .post-component .pre--paragraph:after {\n      content: '';\n      width: 30rem;\n      height: .5rem;\n      background-color: #ff7730;\n      position: absolute;\n      bottom: 0;\n      right: 37%; }\n  .post-component .main-paragraph {\n    font-size: 1.6rem;\n    text-align: center;\n    padding: 0 4rem;\n    margin-bottom: 3rem;\n    color: #212121;\n    letter-spacing: 1px; }\n  .post-component h4 {\n    padding: 1rem;\n    margin-top: 3rem;\n    color: #ff7730;\n    text-transform: uppercase;\n    font-size: 1.8rem; }\n  .jumbotron {\n  background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.5), rgba(71, 118, 230, 0.5)), url('hugues-de-buyer-mimeure-335733-min.jpg');\n  margin-bottom: 0;\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20rem 2rem;\n  height: 95vh;\n  -webkit-clip-path: polygon(0 7vh, 100% 0, 100% 75vh, 0 100%);\n          clip-path: polygon(0 7vh, 100% 0, 100% 75vh, 0 100%); }\n  .jumbotron .heading-secondary {\n    color: #ffffff;\n    -webkit-transform: none;\n            transform: none;\n    width: 100%;\n    margin-top: 2rem;\n    -webkit-animation: moveToRight 1s ease-in;\n            animation: moveToRight 1s ease-in; }\n  .posts__header--paragraph {\n  font-size: 1.8rem;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 2rem 17rem 0;\n  color: #ffffff;\n  letter-spacing: 2px;\n  -webkit-animation: moveToLeft 1s ease-in;\n          animation: moveToLeft 1s ease-in; }\n  .author {\n  text-align: center;\n  width: 100%;\n  color: #FFDD3A;\n  font-size: 2.8rem;\n  font-family: 'Black And White Picture', sans-serif;\n  -webkit-animation: moveToLeft 1s ease-in;\n          animation: moveToLeft 1s ease-in; }\n  .posts-content {\n  margin: 0 auto;\n  width: 90%;\n  padding: 2rem;\n  margin-bottom: 3rem; }\n  .posts-content .posts-container {\n    width: 100%;\n    margin: 0 auto; }\n  .posts-content .posts-container button {\n      padding: 1rem 4rem;\n      margin-left: 3rem; }\n  .posts-content .posts-container button:focus {\n        outline: none; }\n  .mat-tab-header {\n  border: none !important; }\n  .filter-post {\n  padding: 2rem;\n  text-align: right; }\n  .filter-post input {\n    border: none;\n    border-bottom: 3px solid #4776E6;\n    outline: none;\n    box-shadow: none; }\n  .add-post-button {\n  margin-top: 4rem;\n  color: #4776E6; }\n  .post-container {\n  padding: 1.3rem 1.5rem;\n  width: 32%;\n  display: inline-flex;\n  font-size: 1.2rem;\n  background-color: #fff;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0;\n  overflow: hidden;\n  box-shadow: none !important;\n  color: inherit;\n  margin-right: 1%;\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n  .post-container img {\n    width: 100%;\n    max-height: 250px;\n    margin-bottom: 1rem; }\n  h3 {\n  font-size: 2rem;\n  color: #212121;\n  margin-bottom: .5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1; }\n  span {\n  font-size: 1.1rem; }\n  span .post-info {\n    color: #ff7730; }\n  img {\n  width: 100%;\n  margin-bottom: 1rem; }\n  .post-icons {\n  position: relative; }\n  .post-icons .like-post {\n    font-size: 2rem;\n    margin-right: 2rem; }\n  .post-icons .like-post i {\n      margin-right: .5rem; }\n  .post-icons .show-post {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    cursor: pointer;\n    transition: all ease-in .2s; }\n  .post-icons .show-post:hover {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2);\n      color: #4776E6; }\n  .add-post {\n  margin-bottom: 2rem; }\n  .add-post div i {\n    display: block;\n    font-size: 5rem;\n    cursor: pointer;\n    color: #4776E6;\n    padding-right: 2rem; }\n  .add-post-form-container {\n  padding: 2rem;\n  position: relative; }\n  .add-post-form-container .form-input {\n    font-size: 1.5rem;\n    padding: 1.5rem 3.8rem;\n    color: inherit;\n    border-radius: 2px;\n    background-color: rgba(204, 204, 204, 0.1);\n    border: none;\n    font-family: Lato, sans-serif;\n    width: 100%;\n    display: block;\n    transition: all .3s;\n    border: 3px solid #6F49E7; }\n  .add-post-form-container .form-input:focus {\n      outline: none;\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n      border: 3px solid transparent;\n      border-bottom: 3px solid #6F49E7; }\n  .add-post-form-container .form-input:focus:invalid {\n      border-bottom: 3px solid orangered !important; }\n  .add-post-form-container .form-input::-webkit-input-placeholder {\n      color: #212121; }\n  .add-post-form-container button:focus {\n    outline: none; }\n  .add-post-form {\n  margin-left: 2rem; }\n  .add-post-form input {\n    position: relative; }\n  .add-post-form p {\n    padding: 1rem;\n    margin-bottom: 1rem;\n    font-size: 1.4rem;\n    color: #757575; }\n  .add-post-form i {\n    position: absolute;\n    margin-left: 13px;\n    font-size: 1.7rem;\n    color: #cccccc;\n    margin-top: -38px; }\n  .add-post-form .textarea-icon {\n    position: absolute;\n    margin-left: 13px;\n    font-size: 1.7rem;\n    color: #cccccc;\n    margin-top: 40px; }\n  .close-popup {\n  position: absolute;\n  top: .5rem;\n  right: 0;\n  color: #6F49E7;\n  font-size: 1.5rem;\n  margin-right: 1rem;\n  padding: .2rem .7rem;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  transition: all ease-out .2s;\n  cursor: pointer; }\n  .close-popup:hover {\n    -webkit-transform: scale(1.3) rotate(90deg);\n            transform: scale(1.3) rotate(90deg); }\n  .post-icon {\n  position: absolute;\n  left: -10rem;\n  top: 14%;\n  color: #ffffff;\n  background-color: #6F49E7;\n  border-radius: 50%;\n  font-size: 6rem;\n  padding: 1rem 4rem;\n  border: 10px solid rgba(204, 204, 204, 0.5); }\n  .post-icon--post {\n  padding: 1rem 2.5rem; }\n  .add-post-icon {\n  color: #6F49E7;\n  background-color: #fff;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  margin-right: 1rem;\n  padding: .7rem; }\n  .modal-content {\n  border: none;\n  letter-spacing: 1px; }\n  .modal-header {\n  border-bottom: none; }\n  .modal-header h4 {\n    padding: 1rem 4rem;\n    font-size: 2.5rem;\n    color: #6F49E7; }\n  .modal-footer button {\n  background-color: #6F49E7; }\n  .modal-footer button::after {\n    background: #6F49E7; }\n  .modal-footer button:hover {\n    color: #ffffff; }\n  textarea {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  position: relative;\n  color: #cccccc; }\n  textarea::-webkit-input-placeholder {\n    color: #ccc !important; }\n  textarea:-ms-input-placeholder {\n    color: #ccc !important; }\n  textarea::-ms-input-placeholder {\n    color: #ccc !important; }\n  textarea::placeholder {\n    color: #ccc !important; }\n  select {\n  height: 6rem;\n  color: #ccc !important;\n  margin-top: 2rem; }\n  .preview-image {\n  width: 100%;\n  margin-top: 2rem; }\n  .modal-header h4 {\n  width: 100%;\n  color: #212121;\n  padding: 0; }\n  .modal-body {\n  font-size: 1.5rem; }\n  .modal-footer .like-post {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostsComponent = /** @class */ (function () {
    function PostsComponent(modalService, service, postService) {
        this.modalService = modalService;
        this.service = service;
        this.postService = postService;
        this.storedUsername = localStorage.getItem('username');
        this.allPosts = [];
        this.likes = [];
    }
    PostsComponent.prototype.openModal = function (content) {
        this.mr = this.modalService.open(content);
    };
    PostsComponent.prototype.editPost = function (content) {
        if (content) {
            this.editPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](content._parentView.context.$implicit.title),
                'postText': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](content._parentView.context.$implicit.postText),
                'upload': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](content._parentView.context.$implicit.upload),
                'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](content._parentView.context.$implicit.category),
            });
        }
        this.edit = this.modalService.open(content);
    };
    PostsComponent.prototype.openFullPost = function (content) {
        var _this = this;
        if (content._parentView.context.$implicit.likes[0].likers.length < 1) {
            this.isLike = false;
            this.mr2 = this.modalService.open(content);
        }
        else {
            var userLiker = content._parentView.context.$implicit.likes[0].likers.find(function (liker) { return liker.username === _this.storedUsername; });
            if (userLiker) {
                this.isLike = true;
            }
            else {
                this.isLike = false;
            }
            this.mr2 = this.modalService.open(content);
        }
    };
    PostsComponent.prototype.closeModal = function () {
        this.mr.close();
    };
    PostsComponent.prototype.initForm = function () {
        var title = '';
        var postText = '';
        var category = '';
        var upload = null;
        var count = 0;
        var likes = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'count': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](count),
            'isLike': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            'likers': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
        });
        this.addPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'postText': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](postText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'upload': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](upload),
            'edited': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.formatDate(new Date())),
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.username),
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](category, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'likes': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([likes.value])
        });
    };
    PostsComponent.prototype.uploadFile = function (event) {
        this.image = event.target.value;
    };
    PostsComponent.prototype.onAddPostLike = function (post) {
        var _this = this;
        var like, isLiked, postLike;
        post.likes[0].count += (this.isLike) ? -1 : 1;
        this.isLike = !this.isLike;
        isLiked = this.isLike;
        like = post.likes[0].count;
        if (this.isLike) {
            var liker = {
                username: this.user.username,
                isLike: this.isLike
            };
            postLike = liker;
            post.likes[0].likers.push(liker);
        }
        else {
            post.likes[0].likers.find(function (user) {
                if (_this.user.username = user) {
                    post.likes[0].likers.splice(post.likes[0].likers.indexOf(post));
                    _this.isLike = false;
                }
            });
        }
        this.service.getUsers().subscribe(function (users) {
            users.forEach(function (user) {
                if (post.author === user.username) {
                    _this.postAuthor = user;
                    _this.postAuthor.posts.forEach(function (p) {
                        if (post.title === p.title) {
                            p.likes[0].likers = post.likes[0].likers;
                            p.likes[0].count = post.likes[0].count;
                        }
                    });
                    _this.service.updateUserPosts(_this.postAuthor).subscribe(function (postAuthor) { return postAuthor; });
                }
            });
        });
        this.postService.updatePost(post).subscribe(function (pos) { return pos; });
    };
    PostsComponent.prototype.formatDate = function (date) {
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yy = date.getFullYear() + 1;
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        date = dd + '-' + mm + '-' + yy;
        return date;
    };
    PostsComponent.prototype.addPost = function () {
        this.allPosts.push(this.addPostForm.value);
        this.userPosts.push(this.addPostForm.value);
        this.user.posts = this.userPosts;
        this.service.updateUserPosts(this.user).subscribe(function (user) { return user; });
        this.postService.postPost(this.addPostForm.value);
        this.addPostForm.reset();
        this.closeModal();
        this.noPosts = false;
    };
    PostsComponent.prototype.onEditPost = function (post) {
        post.title = this.editPostForm.value.title;
        post.postText = this.editPostForm.value.postText;
        post.upload = this.editPostForm.value.upload;
        post.category = this.editPostForm.value.category;
        this.service.updateUserPosts(this.user).subscribe(function (postAuthor) { return postAuthor; });
        this.postService.updatePost(post).subscribe(function (pos) { return pos; });
        this.edit.close();
    };
    PostsComponent.prototype.onGetUserPosts = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (users) {
            users.forEach(function (user) {
                if (_this.storedUsername === user.username) {
                    _this.user = user;
                    _this.userPosts = _this.user.posts;
                    _this.userPosts.forEach(function (post) {
                        if (!post.likes) {
                            post.likes[0].count = 0;
                        }
                        post.likes[0].likers.forEach(function (liker) {
                            if (liker.username === _this.storedUsername) {
                                liker.isLike = true;
                            }
                            else {
                                liker.isLike = false;
                            }
                        });
                    });
                    if (_this.userPosts.length > 0) {
                        _this.noPosts = false;
                    }
                    else {
                        _this.noPosts = true;
                    }
                    _this.initForm();
                }
            });
        });
    };
    PostsComponent.prototype.onGetAllPosts = function () {
        var _this = this;
        this.postService.getPosts().subscribe(function (posts) {
            _this.allPosts = posts;
            _this.allPosts.forEach(function (post) {
                if (!post.likes) {
                    post.likes[0].count = 0;
                }
            });
        });
    };
    PostsComponent.prototype.ngOnInit = function () {
        this.onGetUserPosts();
        this.onGetAllPosts();
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/register/CustomValidation.ts":
/*!**********************************************!*\
  !*** ./src/app/register/CustomValidation.ts ***!
  \**********************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.emailValidator = function (control) {
        if (!control.value
            .match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return { 'invalidEmailAddress': true };
        }
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\">\n  <div class=\"register-page__content\">\n    <div class=\"register-form\">\n      <div class=\"header__logo-box\">\n        <img src=\"../../assets/images/logoShot.png\" alt=\"\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"register\">\n            <div class=\"form\">\n              <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n                <div class=\"u-margin-bottom-small\">\n                  <h2 class=\"heading-secondary\">Join us right now!</h2>\n                </div>\n                <div class=\"form-group\">\n                  <p *ngIf=\"usernameExist\">This username is already exist!</p>\n                  <input type=\"text\"\n                         class=\"form-input\"\n                         placeholder=\"Username\"\n                         #username\n                         id=\"username\"\n                         formControlName=\"username\">\n                  <label class=\"form-label\" for=\"username\">Username</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <!--<p *ngIf=\"emailExist\">User with this email is already exist!</p>-->\n                  <input type=\"text\"\n                         class=\"form-input\"\n                         placeholder=\"Email\"\n                         id=\"email\"\n                         formControlName=\"email\">\n                  <label class=\"form-label\" for=\"email\">Email</label>\n                </div>\n\n                <div class=\"form-group password-container\">\n                  <input type=\"{{type}}\"\n                         class=\"form-input\"\n                         placeholder=\"Password\"\n                         id=\"password\"\n                         formControlName=\"password\">\n                  <span\n                    (click)=\"toggleShowHidePassword()\"><i class=\"fas fa-eye\"></i></span>\n                  <label class=\"form-label\" for=\"password\">Password</label>\n                </div>\n\n                <div class=\"form-group\">\n                  <button class=\"btn btn--white\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</button>\n                </div>\n              </form>\n              <p>Already have an account? <a [routerLink]=\"'[/login]'\" class=\"\">Login</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <app-footer></app-footer>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-container {\n  padding: 3rem; }\n\n.register-page__content {\n  font-family: Lato, sans-serif;\n  color: #ffffff;\n  height: 95vh;\n  background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.8), rgba(71, 118, 230, 0.8)), url('34943640193_0b537367ac_h-min.jpg');\n  background-size: cover;\n  background-position: top;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 78vh, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 78vh, 0 100%); }\n\n.register-page__content .header__logo-box {\n    position: absolute;\n    top: 4rem;\n    left: 4rem; }\n\n.register-page__content .header__logo-box img {\n      height: 4.5rem; }\n\n.register-form {\n  width: 50%;\n  padding: 5rem 0;\n  position: relative; }\n\n.register-form .register {\n    margin: 0 auto; }\n\n.register-form .register .form {\n      margin: 0 auto;\n      width: 70%;\n      padding: 3rem; }\n\n.register-form .register .form h2 {\n        color: #ffffff;\n        margin-top: 3rem;\n        letter-spacing: 1rem;\n        margin-bottom: 1rem;\n        line-height: 1.5;\n        font-weight: 400; }\n\n.register-form .register .form .u-margin-bottom-small {\n        text-align: center; }\n\n.register-form .register .form p {\n        display: inline-block;\n        margin-top: 2rem;\n        font-size: 1.6rem;\n        color: #ffffff; }\n\n.register-form .register .form p a {\n          color: #ffffff;\n          padding-left: 0.5rem; }\n\n.register-form .register .form p a:hover {\n            text-decoration: underline;\n            color: #FFDD3A; }\n\n.register-form .register .form .form-group {\n        color: #212121; }\n\n.register-form .register .form .form-group label {\n          color: #ffffff; }\n\n.register-form .register .form .form-group button {\n          margin-top: 1rem;\n          float: left;\n          margin-right: 3rem;\n          color: #4776E6;\n          background-color: #ffffff; }\n\n.register-form .register .form .form-group button:hover {\n            background-color: #ffffff; }\n\n.register-form .register .form .form-group p {\n          color: #FFDD3A;\n          margin-bottom: 2rem; }\n\n.register-form .register .form .form-input {\n        font-size: 1.5rem;\n        padding: 1.5rem 2rem;\n        color: inherit;\n        border-radius: 2px;\n        background-color: rgba(255, 255, 255, 0.7);\n        border: none;\n        font-family: Lato, sans-serif;\n        border-bottom: 3px solid transparent;\n        width: 100%;\n        display: block;\n        transition: all .3s; }\n\n.register-form .register .form .form-input:focus {\n          outline: none;\n          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n          border-bottom: 3px solid #4776E6; }\n\n.register-form .register .form .form-input:focus:invalid {\n          border-bottom: 3px solid orangered !important; }\n\n.register-form .register .form .form-input::-webkit-input-placeholder {\n          color: #757575; }\n\n.register-form .register .form .form-label {\n        font-size: 1.2rem;\n        font-weight: 700;\n        margin-left: 2rem;\n        margin-top: .7rem;\n        display: block;\n        transition: all .3s; }\n\n.register-form .register .form .form-input:placeholder-shown + .form-label {\n        opacity: 0;\n        visibility: hidden;\n        -webkit-transform: translateY(-4rem);\n                transform: translateY(-4rem); }\n\n.register-form .register-form__footer {\n    height: 3rem; }\n\n.register-form .register-form__footer img {\n      width: 5rem; }\n\n.register-form .register-form__footer p {\n      color: #ffffff;\n      font-size: 1.4rem; }\n\n.register-form .logo {\n    position: absolute;\n    top: -3.5rem;\n    right: 3.5rem;\n    width: 9rem;\n    z-index: 2; }\n\n.footer {\n  margin-top: -15rem; }\n\n@media (max-width: 75em) {\n    .footer {\n      margin-top: -19rem; } }\n\n.password-container {\n  position: relative; }\n\n.password-container span .fa-eye {\n    position: absolute;\n    top: 17px;\n    font-size: 2rem;\n    right: 1%;\n    color: #4776E6;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _CustomValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomValidation */ "./src/app/register/CustomValidation.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, router, usersService, loginService) {
        this.fb = fb;
        this.router = router;
        this.usersService = usersService;
        this.loginService = loginService;
        this.type = 'password';
        this.show = false;
        this.usernameExist = false;
        this.emailExist = false;
    }
    RegisterComponent.prototype.sendUser = function () {
        this.loginService.sendUser(this.registerForm.value.username);
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    RegisterComponent.prototype.initForm = function () {
        var username = '';
        var email = '';
        var password = '';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](username, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.usernameTaken(this.usersService)]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _CustomValidation__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].emailValidator])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](password, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    };
    RegisterComponent.prototype.usernameTaken = function (httpService) {
        var _this = this;
        return function (control) { return new Promise(function (resolve, reject) {
            httpService.lookupUser(control.value).subscribe(function (data) {
                if (data.length === 1) {
                    resolve({ usernameTaken: true });
                    _this.usernameExist = true;
                }
                else if (data.length === 0) {
                    resolve({ usernameTaken: false });
                    _this.usernameExist = false;
                    control.status = 'VALID';
                }
                else {
                    resolve(null);
                }
            }, function (err) {
                console.log('in error' + err);
                if (err !== '404 - Not Found') {
                    resolve({ usernameTaken: true });
                    _this.usernameExist = true;
                }
                else {
                    resolve(null);
                }
            });
        }); };
    };
    RegisterComponent.prototype.register = function () {
        this.sendUser();
        this.usersService.postUser(this.registerForm.value);
        localStorage.setItem('username', this.registerForm.value.username);
        localStorage.setItem('remember', 'true');
        this.router.navigate(['/']);
    };
    RegisterComponent.prototype.toggleShowHidePassword = function () {
        this.show = !this.show;
        if (this.show) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"])
    ], RegisterComponent.prototype, "user", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reset-password-container\">\n  <div class=\"reset-password-page__content\">\n    <div class=\"header__logo-box\">\n      <img src=\"../../assets/images/logoShot.png\" alt=\"\">\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form [formGroup]=\"updatePasswordForm\" (ngSubmit)=\"updatePassword()\" class=\"reset-password-form\">\n          <div class=\"u-margin-bottom-small\">\n            <h2 class=\"heading-secondary\">Create New Password</h2>\n          </div>\n            <input class=\"form-input\" placeholder=\"New Password\" type=\"password\" formControlName=\"password\">\n\n            <input class=\"form-input\" placeholder=\"Password (Confirm)\" type=\"password\" formControlName=\"passwordConfirm\">\n\n            <button class=\"btn btn--white\" type=\"submit\" [disabled]=\"!updatePasswordForm.valid\">Submit</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <p style=\"text-align: center;\"><a [routerLink]=\"['/login']\">Back to Login</a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reset-password-container {\n  padding: 3rem; }\n\n.reset-password-page__content {\n  position: relative;\n  font-family: Lato, sans-serif;\n  color: #ffffff;\n  height: 95vh;\n  background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.8), rgba(71, 118, 230, 0.8)), url('34943640193_0b537367ac_h-min.jpg');\n  background-size: cover;\n  background-position: top;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 78vh, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 78vh, 0 100%); }\n\n.reset-password-page__content .header__logo-box {\n    position: absolute;\n    top: 4rem;\n    left: 4rem; }\n\n.reset-password-page__content .header__logo-box img {\n      height: 4.5rem; }\n\n.reset-password-page__content p {\n    display: block;\n    text-align: center;\n    margin-top: 2rem;\n    font-size: 1.6rem;\n    color: #ffffff; }\n\n.reset-password-page__content p a {\n      color: #ffffff;\n      padding-left: 0.5rem; }\n\n.reset-password-page__content p a:hover {\n        text-decoration: underline;\n        color: #FFDD3A; }\n\n.reset-password-form {\n  margin: 12rem auto;\n  width: 50%;\n  padding: 3rem; }\n\n.reset-password-form .u-margin-bottom-small {\n    text-align: center; }\n\n.reset-password-form .u-margin-bottom-small h2 {\n      text-align: center;\n      display: block;\n      color: #ffffff;\n      letter-spacing: 1rem;\n      margin-bottom: 4rem;\n      font-weight: 400; }\n\n.reset-password-form button {\n    margin-top: 4rem;\n    cursor: pointer;\n    margin-right: 0;\n    color: #4776E6; }\n\n.reset-password-form button:hover {\n      background-color: #ffffff; }\n\n.reset-password-form .form-input {\n    font-size: 1.5rem;\n    padding: 1rem 2rem;\n    color: #212121;\n    border-radius: 2px;\n    background-color: rgba(255, 255, 255, 0.7);\n    border: none;\n    font-family: Lato, sans-serif;\n    border-bottom: 3px solid transparent;\n    width: 100%;\n    display: block;\n    margin-bottom: 2rem;\n    transition: all .3s; }\n\n.reset-password-form .form-input:focus {\n      outline: none;\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n      border-bottom: 3px solid #4776E6; }\n\n.reset-password-form .form-input:focus:invalid {\n      border-bottom: 3px solid orangered !important; }\n\n.reset-password-form .form-input::-webkit-input-placeholder {\n      color: #212121; }\n\n.footer {\n  margin-top: -15rem; }\n\n@media (max-width: 75em) {\n    .footer {\n      margin-top: -19rem; } }\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(router, loginService, service, route) {
        this.router = router;
        this.loginService = loginService;
        this.service = service;
        this.route = route;
    }
    ResetPasswordComponent.prototype.sendUser = function () {
        this.loginService.sendUser(this.user.username);
    };
    ResetPasswordComponent.prototype.updatePassword = function () {
        var _this = this;
        var paramToken = this.route.snapshot.children[0].params.token;
        this.service.getToken().subscribe(function (tokens) {
            tokens.forEach(function (token) {
                if (paramToken === token.token) {
                    _this.service.getUsers().subscribe(function (users) {
                        users.forEach(function (user) {
                            _this.user = user;
                            if (token.user_id === user._id) {
                                user.password = _this.updatePasswordForm.value.password;
                                console.log(_this.user);
                                _this.service.updateUserPassword(user).subscribe(function (u) { return u; });
                                _this.router.navigate(['/']);
                                return _this.sendUser();
                            }
                        });
                    });
                }
            });
        });
    };
    ResetPasswordComponent.prototype.initForm = function () {
        var password = '';
        var passwordConfirm = '';
        this.updatePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](password, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'passwordConfirm': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passwordConfirm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        }, passwordMatchValidator);
        function passwordMatchValidator(g) {
            return g.get('password').value === g.get('passwordConfirm').value
                ? null : { 'mismatch': true };
        }
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/reviews/reviews.component.html":
/*!************************************************!*\
  !*** ./src/app/reviews/reviews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reviews\">\n  <nav class=\"navbar navbar-expand-lg\">\n    <a class=\"navbar-brand\" routerLink=\"/welcome\">\n      <img src=\"../../assets/images/logoShot.png\" alt=\"\">\n    </a>\n    <div class=\"btns-log\">\n      <a [routerLink]=\"['/login']\">Log in</a>\n      <a [routerLink]=\"['/register']\">Register</a>\n    </div>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"container text-center\">\n        <h2 class=\"heading-secondary\">Reviews</h2>\n      </div>\n      <p class=\"pre--paragraph\"></p>\n      <div class=\"reviews-container\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-right\">\n            <button class=\"btn btn--indigo btn--animated add-review-button\" (click)=\"openModal(content)\">\n              <i class=\"fas fa-plus-circle\"></i> Add Review\n            </button>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Your review is important for us!</h4>\n                <span class=\"close-popup\" (click)=\"d('Cross click')\"><i class=\"far fa-times-circle\"></i></span>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"add-review-form-container\">\n                  <form class=\"form-group add-review-form reviews-form\" [formGroup]=\"addReviewForm\">\n                    <p>Enter review here...</p>\n                    <textarea class=\"form-input\" id=\"title\" type=\"text\" formControlName=\"title\"></textarea>\n                    <i class=\"far fa-comment-alt\"></i>\n                  </form>\n                </div>\n              </div>\n              <div class=\"modal-footer\">\n                <div class=\"todo-button\">\n                  <button [disabled]=\"!addReviewForm.valid\"\n                          type=\"submit\" (click)=\"addReview(addReviewForm.value)\"\n                          class=\"btn btn--indigo\"><i class=\"fas fa-plus-circle add-todolist-icon\"></i> Add\n                  </button>\n                </div>\n              </div>\n              <div class=\"todo-icon\">\n                <i class=\"far fa-comment-alt\"></i>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"cards-review\">\n              <div class=\"card\" *ngFor=\"let review of reviews\">\n                <div class=\"card-header\">\n                  {{review.username}}\n                </div>\n                <div class=\"card-body\">\n                  <p class=\"card-text\">{{review.text}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"pre--paragraph\"></p>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/reviews/reviews.component.scss":
/*!************************************************!*\
  !*** ./src/app/reviews/reviews.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reviews {\n  padding: 3rem;\n  color: #212121; }\n\nnav {\n  background-image: linear-gradient(to right, #6f49e7, #4776e6);\n  color: #ffffff;\n  font-size: 1.4rem;\n  height: 25vh;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 18vh, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 18vh, 0 100%); }\n\nnav .navbar-brand img {\n    height: 4rem; }\n\nnav .btns-log {\n    display: block;\n    position: absolute;\n    right: 1rem; }\n\nnav .btns-log a {\n      color: #ffffff;\n      margin-right: 1rem; }\n\nnav .btns-log a:hover {\n        color: #ffb900; }\n\n.heading-secondary {\n  color: #4776E6;\n  -webkit-transform: none;\n          transform: none;\n  width: 100%;\n  margin-top: 2rem; }\n\n.reviews-container {\n  margin: 0 auto;\n  width: 90%;\n  padding: 0 2rem 3rem; }\n\n.reviews-container .reviews-form {\n    width: 90%;\n    margin: 0 auto;\n    padding: 2rem; }\n\n.reviews-container .reviews-form div {\n      display: inline-block; }\n\n.reviews-container .reviews-form .from-to-value {\n      font-size: 1.4rem;\n      margin-right: 1rem;\n      margin-left: 1rem; }\n\n.reviews-container .reviews-form .from-to-value input {\n        width: 6rem; }\n\n.reviews-container .reviews-form .todo-input {\n      width: 70%;\n      margin-right: 3rem; }\n\n@media (max-width: 37.5em) {\n        .reviews-container .reviews-form .todo-input {\n          width: 90%; } }\n\n@media (max-width: 37.5em) {\n      .reviews-container .reviews-form .todo-button {\n        display: block;\n        text-align: center;\n        margin-top: 2rem; } }\n\n.reviews-container .reviews-form .form-input {\n      padding: 1.5rem 2rem;\n      color: inherit;\n      border-radius: 2px;\n      background-color: #f7f7f7;\n      border: none;\n      font-family: Lato, sans-serif;\n      border-bottom: 3px solid transparent;\n      width: 100%;\n      margin-left: 2rem;\n      display: block;\n      transition: all .3s; }\n\n.reviews-container .reviews-form .form-input:focus {\n        outline: none;\n        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n        border-bottom: 3px solid #4776E6; }\n\n.reviews-container .reviews-form .form-input::-webkit-input-placeholder {\n        color: #212121; }\n\n.reviews-container .reviews-form .btn:hover {\n      color: #ffffff; }\n\n.reviews-container .todos-container {\n    width: 90%;\n    margin: 0 auto; }\n\n.reviews-container .todos-container button {\n      padding: 1rem 4rem;\n      margin-left: 3rem; }\n\n.reviews-container .todos-container button:focus {\n        outline: none; }\n\n.reviews-container .todos-container #todoEdit {\n      width: 50%; }\n\n.reviews-container .todos-container #todoEdit:focus {\n        outline: none;\n        box-shadow: none; }\n\n.add-review-form-container {\n  padding: 2rem;\n  position: relative; }\n\n.add-review-form-container .form-input {\n    font-size: 1.5rem;\n    padding: 1.5rem 3.8rem;\n    color: inherit;\n    border-radius: 2px;\n    background-color: rgba(204, 204, 204, 0.1);\n    border: none;\n    font-family: Lato, sans-serif;\n    width: 100%;\n    display: block;\n    transition: all .3s;\n    border: 3px solid #6F49E7; }\n\n.add-review-form-container .form-input:focus {\n      outline: none;\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n      border: 3px solid transparent;\n      border-bottom: 3px solid #6F49E7; }\n\n.add-review-form-container .form-input:focus:invalid {\n      border-bottom: 3px solid orangered !important; }\n\n.add-review-form-container .form-input::-webkit-input-placeholder {\n      color: #212121; }\n\n.add-review-form-container button:focus {\n    outline: none; }\n\n.add-review-form {\n  margin-left: 2rem; }\n\n.add-review-form input {\n    position: relative; }\n\n.add-review-form p {\n    padding: 1rem;\n    margin-bottom: 1rem;\n    font-size: 1.4rem;\n    color: #757575; }\n\n.add-review-form i {\n    position: absolute;\n    margin-left: 13px;\n    font-size: 1.7rem;\n    color: #cccccc;\n    margin-top: -65px; }\n\n.todo-icon--todo {\n  padding: 1rem 2.5rem; }\n\n.todo-icon {\n  position: absolute;\n  left: -10rem;\n  top: 5%;\n  color: #ffffff;\n  background-color: #6F49E7;\n  border-radius: 50%;\n  font-size: 6rem;\n  padding: 1rem 4rem;\n  border: 10px solid rgba(204, 204, 204, 0.5); }\n\n.modal-content {\n  border: none;\n  letter-spacing: 1px; }\n\n.modal-header {\n  border-bottom: none; }\n\n.modal-header h4 {\n    padding: 1rem 4rem;\n    font-size: 2.5rem;\n    color: #6F49E7; }\n\n.modal-footer button {\n  background-color: #6F49E7; }\n\n.modal-footer button::after {\n    background: #6F49E7; }\n\n.modal-footer button:hover {\n    color: #ffffff; }\n\n.close-popup {\n  position: absolute;\n  top: .5rem;\n  right: 0;\n  color: #6F49E7;\n  font-size: 1.5rem;\n  margin-right: 1rem;\n  padding: .2rem .7rem;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  transition: all ease-out .2s;\n  cursor: pointer; }\n\n.close-popup:hover {\n    -webkit-transform: scale(1.3) rotate(90deg);\n            transform: scale(1.3) rotate(90deg); }\n\n.card {\n  margin-bottom: 2rem; }\n\n.card-header {\n  font-size: 2rem;\n  color: #ff7730;\n  background-color: transparent; }\n\n.card-text {\n  font-size: 1.8rem; }\n\n.pre--paragraph {\n  font-size: 2.6rem;\n  text-align: center;\n  padding: 1rem 20rem;\n  font-style: italic;\n  color: #212121;\n  letter-spacing: 1.5px;\n  line-height: 2;\n  position: relative; }\n\n.pre--paragraph:after {\n    content: '';\n    width: 30rem;\n    height: .5rem;\n    background-color: #ff7730;\n    position: absolute;\n    bottom: 0;\n    right: 38%; }\n\n.cards-review {\n  margin-top: 3rem; }\n"

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/review.service */ "./src/app/services/review.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(modalService, reviewService) {
        this.modalService = modalService;
        this.reviewService = reviewService;
        this.username = localStorage.getItem('username');
        this.reviews = [];
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.reviewService.getReviews().subscribe(function (reviews) {
            _this.reviews = reviews;
        });
    };
    ReviewsComponent.prototype.openModal = function (content) {
        this.mr = this.modalService.open(content);
    };
    ReviewsComponent.prototype.closeModal = function () {
        this.mr.close();
    };
    ReviewsComponent.prototype.initForm = function () {
        var title = '';
        var username = this.username;
        this.addReviewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](username)
        });
    };
    ReviewsComponent.prototype.addReview = function (review) {
        this.revObj = {
            text: review.title,
            username: this.username
        };
        this.reviews.push(this.revObj);
        this.reviewService.postReviews(this.revObj);
        this.addReviewForm.reset();
        this.closeModal();
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.scss */ "./src/app/reviews/reviews.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _services_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService() {
        this.user = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    LoginService.prototype.sendUser = function (username) {
        this.user.next({ username: username });
    };
    LoginService.prototype.getUser = function () {
        return this.user.asObservable();
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(httpClient) {
        this.httpClient = httpClient;
    }
    // POSTS
    PostService.prototype.getPosts = function () {
        return this.httpClient.get('http://localhost:8083/api/posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    PostService.prototype.postPost = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
            .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post('http://localhost:8083/api/posts', JSON.stringify(data), {
            headers: headers
        })
            .subscribe(function (post) {
            return post;
        });
    };
    PostService.prototype.updatePost = function (post) {
        return this.httpClient
            .put("http://localhost:8083/api/posts/" + post._id, post)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    PostService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Error: Unable to complete request.';
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMsg);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/review.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/review.service.ts ***!
  \********************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewService = /** @class */ (function () {
    function ReviewService(httpClient) {
        this.httpClient = httpClient;
    }
    ReviewService.prototype.getReviews = function () {
        return this.httpClient.get('http://localhost:8083/api/reviews')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._handleError));
    };
    ReviewService.prototype.postReviews = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
            .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post('http://localhost:8083/api/reviews', JSON.stringify(data), {
            headers: headers
        })
            .subscribe(function (review) {
            return review;
        });
    };
    ReviewService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Error: Unable to complete request.';
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMsg);
    };
    ReviewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:8083/api';
    }
    // USERS
    UserService.prototype.getUsers = function () {
        return this.httpClient.get(this.url + "/users")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.postUser = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
            .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post('http://localhost:8083/api/users', JSON.stringify(data), {
            headers: headers
        })
            .subscribe(function (user) {
            return user;
        });
    };
    UserService.prototype.postUserEmail = function (data, user_id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .set('Content-Type', 'application/json;charset=utf-8')
            .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
            .set('Access-Control-Allow-Origin', '*')
            .set('Accept', 'text/plain');
        return this.httpClient.post('http://localhost:8083/api/reset-password', { 'email': data, 'id': user_id }, {
            headers: headers
        })
            .subscribe(function (dat) {
            return dat;
        });
    };
    UserService.prototype.getUserById$ = function (id) {
        return this.httpClient
            .get("http://localhost:8083/api/users/" + id + "/todos")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.updateUserPassword = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/newpass", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.updateUser = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.updateUserPosts = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/posts", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    // TODOLISTS
    UserService.prototype.postTodoList = function (data, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
            .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:8083/api/users/" + id + "/todolists", JSON.stringify(data), {
            headers: headers
        })
            .subscribe(function (todo) {
            return todo;
        });
    };
    UserService.prototype.updateUserTodos = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/todolists", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    // GOALS
    UserService.prototype.updateUserDatesYear = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/dates-year", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.updateUserDatesMonth = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/dates-month", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.updateUserDatesWeek = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/dates-week", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.updateGoalOfLife = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/goals/goal-of-life", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.updateFirstLevelSteps = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/goals/first-level-steps", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.updateGoalsOfYear = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/goals/goals-of-year", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.updateGoalsOfMonth = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/goals/goals-of-month", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.updateGoalsOfWeek = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/goals/goals-of-week", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.postNotes = function (data, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
            .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:8083/api/users/" + id + "/notes", JSON.stringify(data), {
            headers: headers
        })
            .subscribe(function (note) {
            return note;
        });
    };
    UserService.prototype.updateNotes = function (user) {
        return this.httpClient
            .put("http://localhost:8083/api/users/" + user._id + "/notes", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.getToken = function () {
        return this.httpClient.get('http://localhost:8083/api/reset-password')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    UserService.prototype.lookupUser = function (username) {
        return this.httpClient.get('http://localhost:8083/api/users/' + username)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    // updateUserPassword(user): Observable<any> {
    //   return this.httpClient
    //     .put(`http://localhost:8083/api/users/${user._id}`, user)
    //     .catch(this._handleError);
    // }
    UserService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Error: Unable to complete request.';
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMsg);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/todos/todos.component.html":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-component\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container text-center\">\n      <h2 class=\"heading-secondary text-center\">Todos</h2>\n      <p class=\"todos__header--paragraph\">\"Time is what we want most but what we use worst\".\n      </p>\n      <p class=\"author\">William Penn</p>\n      <button class=\"btn btn--white btn--animated add-todolist-button\" (click)=\"openModal(content)\"><i\n        class=\"fas fa-plus-circle\"></i> Add Todo List\n      </button>\n    </div>\n  </div>\n  <div class=\"todos-component\">\n    <div class=\"todos-content\">\n      <p class=\"pre--paragraph\"></p>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Todo List</h4>\n              <span class=\"close-popup\" (click)=\"d('Cross click')\"><i class=\"far fa-times-circle\"></i></span>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"add-todolist-form-container\">\n                <form class=\"form-group add-todolist-form todos-form\" [formGroup]=\"addTodoListForm\">\n                  <p>Enter Todo List Title</p>\n                  <input class=\"form-input\" id=\"title\" type=\"text\" formControlName=\"title\">\n                  <i class=\"fas fa-clipboard-list\"></i>\n                </form>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"todo-button\">\n                <button [disabled]=\"!addTodoListForm.valid\"\n                        type=\"submit\" (click)=\"addTodoList(addTodoListForm.value)\"\n                        class=\"btn btn--indigo\"><i class=\"fas fa-plus-circle add-todolist-icon\"></i> Add\n                </button>\n              </div>\n            </div>\n            <div class=\"todo-icon\">\n              <i class=\"fas fa-clipboard-list\"></i>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"noTodos\">\n        <h4 class=\"text-center\">Your todolists will appear here... </h4>\n      </div>\n      <div class=\"todo-list\" *ngFor=\"let todoList of todoLists; let index = index\">\n        <h3>{{todoList.title}}\n          <span class=\"edit-block\">\n                <span (click)=\"openTodoModal(todoContent)\" class=\"add_todo\"><i class=\"fas fa-plus-circle\"></i></span>\n            <span (click)=\"editTodoList(todoList)\" class=\"todo--edit\"><i class=\"far fa-edit\"></i></span>\n            <span (click)=\"deleteTodoList(todoList, index)\" class=\"delete-icon\"><i\n              class=\"far fa-times-circle\"></i></span>\n            </span>\n          <div class=\"form-group edit-todo-list-form\" *ngIf=\"todoList.isEdited\">\n            <input type=\"text\"\n                   #todoListVal\n                   class=\"form-input\"\n                   value=\"{{todoList.title}}\">\n            <button type=\"button\" class=\"btn btn--indigo\"\n                    (click)=\"updateTodoList(todoListVal.value, todoList)\">Edit\n            </button>\n          </div>\n        </h3>\n\n        <ng-template #todoContent let-c=\"close\" let-d=\"dismiss\">\n          <div class=\"modal-header\">\n            <span class=\"close-popup\" (click)=\"d('Cross click')\"><i class=\"far fa-times-circle\"></i></span>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"add-todolist-form-container\">\n              <form class=\"form-group add-todolist-form todos-form\" [formGroup]=\"addTodoForm\">\n                <p>Enter Todo Title</p>\n                <input class=\"form-input\" placeholder=\"Title\" type=\"text\" formControlName=\"todoTitle\">\n                <i class=\"far fa-edit\"></i>\n              </form>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <div class=\"todo-button\">\n              <button [disabled]=\"!addTodoForm.valid\"\n                      type=\"submit\" (click)=\"addTodo(addTodoForm.value, index)\"\n                      class=\"btn btn--indigo\"><i class=\"fas fa-plus-circle add-todolist-icon\"></i> Add\n              </button>\n            </div>\n          </div>\n          <div class=\"todo-icon todo-icon--todo\">\n            <i class=\"far fa-edit\"></i>\n          </div>\n        </ng-template>\n\n        <ul *ngIf=\"todoList.todos\">\n          <li *ngFor=\"let todo of todoLists[index].todos; let i = index\">\n            <div class=\"form-group__checkbox\">\n              <input type=\"checkbox\" [(ngModel)]=\"todo.complete\" #complete name=\"remember\" class=\"checkbox\"\n                     id=\"{{todo.title}}\" (click)=\"updateTodo(todo, complete.checked)\">\n              <label for=\"{{todo.title}}\" class=\"checkbox-label\" [ngClass]=\"{'checked': todo.complete}\">\n                <span class=\"form-checkbox\"></span>{{ todo.title }}</label>\n              <span class=\"todo--edit\" (click)=\"editTodo(todo)\"><i class=\"far fa-edit\"></i></span>\n              <span (click)=\"deleteTodo(todo, i, index)\" class=\"delete-icon\"><i class=\"far fa-times-circle\"></i></span>\n\n              <div class=\"form-group edit-todo-list-form form-todo\" *ngIf=\"todo.isEdited\">\n                <input type=\"text\"\n                       #todoEdited\n                       class=\"form-input\"\n                       id=\"todoEdit\"\n                       value=\"{{todo.title}}\">\n                <button type=\"button\" class=\"btn btn--indigo\" (click)=\"updateTodoTitle(todoEdited.value, todo, i)\">Edit\n                </button>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <p class=\"pre--paragraph\"></p>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/todos/todos.component.scss":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-component {\n  background-color: #ffffff;\n  padding: 2rem 0;\n  font-size: 1.5rem;\n  margin-top: -7.1rem; }\n  .todo-component .pre--paragraph {\n    font-size: 2.6rem;\n    text-align: center;\n    padding: 3rem 20rem;\n    font-style: italic;\n    margin-bottom: 3rem;\n    color: #212121;\n    letter-spacing: 1.5px;\n    line-height: 2;\n    position: relative; }\n  .todo-component .pre--paragraph:last-child {\n      padding: 1rem 20rem; }\n  .todo-component .pre--paragraph:after {\n      content: '';\n      width: 30rem;\n      height: .5rem;\n      background-color: #ff7730;\n      position: absolute;\n      bottom: 0;\n      right: 37%; }\n  .todo-component .main-paragraph {\n    font-size: 1.6rem;\n    text-align: center;\n    padding: 3rem 4rem;\n    margin-bottom: 3rem;\n    color: #212121;\n    letter-spacing: 1px; }\n  .todo-component .todos-content {\n    margin: 0 auto;\n    width: 90%;\n    padding: 0 2rem 3rem; }\n  .todo-component .todos-content .todos-form {\n      width: 90%;\n      margin: 0 auto;\n      padding: 2rem; }\n  .todo-component .todos-content .todos-form div {\n        display: inline-block; }\n  .todo-component .todos-content .todos-form .from-to-value {\n        font-size: 1.4rem;\n        margin-right: 1rem;\n        margin-left: 1rem; }\n  .todo-component .todos-content .todos-form .from-to-value input {\n          width: 6rem; }\n  .todo-component .todos-content .todos-form .todo-input {\n        width: 70%;\n        margin-right: 3rem; }\n  @media (max-width: 37.5em) {\n          .todo-component .todos-content .todos-form .todo-input {\n            width: 90%; } }\n  @media (max-width: 37.5em) {\n        .todo-component .todos-content .todos-form .todo-button {\n          display: block;\n          text-align: center;\n          margin-top: 2rem; } }\n  .todo-component .todos-content .todos-form .form-input {\n        padding: 1.5rem 2rem;\n        color: inherit;\n        border-radius: 2px;\n        background-color: #f7f7f7;\n        border: none;\n        font-family: Lato, sans-serif;\n        border-bottom: 3px solid transparent;\n        width: 100%;\n        margin-left: 2rem;\n        display: block;\n        transition: all .3s; }\n  .todo-component .todos-content .todos-form .form-input:focus {\n          outline: none;\n          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n          border-bottom: 3px solid #4776E6; }\n  .todo-component .todos-content .todos-form .form-input::-webkit-input-placeholder {\n          color: #212121; }\n  .todo-component .todos-content .todos-form .btn:hover {\n        color: #ffffff; }\n  .todo-component .todos-content .todos-container {\n      width: 90%;\n      margin: 0 auto; }\n  .todo-component .todos-content .todos-container button {\n        padding: 1rem 4rem;\n        margin-left: 3rem; }\n  .todo-component .todos-content .todos-container button:focus {\n          outline: none; }\n  .todo-component .todos-content .todos-container #todoEdit {\n        width: 50%; }\n  .todo-component .todos-content .todos-container #todoEdit:focus {\n          outline: none;\n          box-shadow: none; }\n  .todo-component .add-todolist-button {\n    margin-top: 6rem;\n    color: #6F49E7; }\n  .jumbotron {\n  background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.5), rgba(71, 118, 230, 0.5)), url('matteo-paganelli-39971-unsplash-min.jpg');\n  margin-bottom: 0;\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 20rem 2rem;\n  height: 95vh;\n  -webkit-clip-path: polygon(0 7vh, 100% 0, 100% 75vh, 0 100%);\n          clip-path: polygon(0 7vh, 100% 0, 100% 75vh, 0 100%); }\n  .jumbotron .heading-secondary {\n    color: #ffffff;\n    -webkit-transform: none;\n            transform: none;\n    width: 100%;\n    margin-top: 2rem;\n    -webkit-animation: moveToLeft 1s ease-in;\n            animation: moveToLeft 1s ease-in; }\n  .todos__header--paragraph {\n  font-size: 1.8rem;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 2rem 17rem 0;\n  color: #ffffff;\n  letter-spacing: 2px;\n  -webkit-animation: moveToRight 1s ease-in;\n          animation: moveToRight 1s ease-in; }\n  .author {\n  text-align: center;\n  width: 100%;\n  color: #FFDD3A;\n  font-size: 2.8rem;\n  font-family: 'Black And White Picture', sans-serif;\n  -webkit-animation: moveToRight 1s ease-in;\n          animation: moveToRight 1s ease-in; }\n  h4 {\n  padding: 1rem;\n  color: #ff7730;\n  text-transform: uppercase;\n  font-size: 1.8rem; }\n  .add_todo {\n  position: absolute;\n  right: 0;\n  margin-top: 0;\n  color: #4776E6;\n  cursor: pointer;\n  opacity: .7;\n  transition: all .2s ease-out; }\n  .add_todo:hover {\n    -webkit-transform: scale(1.3) rotate(90deg);\n            transform: scale(1.3) rotate(90deg);\n    opacity: 1; }\n  .add-todolist-form-container {\n  padding: 2rem;\n  position: relative; }\n  .add-todolist-form-container .form-input {\n    font-size: 1.5rem;\n    padding: 1.5rem 3.8rem;\n    color: inherit;\n    border-radius: 2px;\n    background-color: rgba(204, 204, 204, 0.1);\n    border: none;\n    font-family: Lato, sans-serif;\n    width: 100%;\n    display: block;\n    transition: all .3s;\n    border: 3px solid #6F49E7; }\n  .add-todolist-form-container .form-input:focus {\n      outline: none;\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n      border: 3px solid transparent;\n      border-bottom: 3px solid #6F49E7; }\n  .add-todolist-form-container .form-input:focus:invalid {\n      border-bottom: 3px solid orangered !important; }\n  .add-todolist-form-container .form-input::-webkit-input-placeholder {\n      color: #212121; }\n  .add-todolist-form-container button:focus {\n    outline: none; }\n  .add-todolist-form {\n  margin-left: 2rem; }\n  .add-todolist-form input {\n    position: relative; }\n  .add-todolist-form p {\n    padding: 1rem;\n    margin-bottom: 1rem;\n    font-size: 1.4rem;\n    color: #757575; }\n  .add-todolist-form i {\n    position: absolute;\n    margin-left: 13px;\n    font-size: 1.7rem;\n    color: #cccccc;\n    margin-top: -35px; }\n  .todo-list {\n  padding: 1px;\n  margin-top: 1rem;\n  width: 47%;\n  display: -ms-inline-grid;\n  display: inline-grid;\n  margin-right: 2rem;\n  position: relative;\n  margin-bottom: 2rem; }\n  .todo-list .add_todo {\n    right: 5rem; }\n  .todo-list h3 {\n    text-transform: uppercase;\n    color: #212121;\n    display: inline;\n    margin-bottom: 1rem; }\n  .todo-list ul {\n    background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.3), rgba(71, 118, 230, 0.3));\n    padding: 1rem;\n    border-radius: 5px;\n    list-style: none;\n    color: #000000; }\n  .todo-list ul li {\n      padding: 2rem;\n      position: relative; }\n  .todo-list ul li .todo-title {\n        margin-left: 3rem; }\n  .todo-list .checkbox {\n    display: none; }\n  .todo-list .form-checkbox {\n    height: 3rem;\n    width: 3rem;\n    border: 5px solid rgba(111, 73, 231, 0.7);\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: -.4rem; }\n  .todo-list .form-checkbox::after {\n      content: \"\";\n      display: block;\n      height: 1.3rem;\n      width: 1.3rem;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      background-color: rgba(111, 73, 231, 0.7);\n      opacity: 0;\n      transition: opacity .2s; }\n  .todo-list .checkbox-label {\n    font-size: 1.6rem;\n    cursor: pointer;\n    position: relative;\n    padding-left: 4.5rem; }\n  .todo-list .form-label {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin-left: 2rem;\n    margin-top: .7rem;\n    display: block;\n    transition: all .3s; }\n  .todo-list .checkbox:checked ~ .checkbox-label .form-checkbox::after {\n    opacity: 1; }\n  .todo-list .checked {\n    text-decoration: line-through;\n    color: #6F49E7;\n    opacity: .7; }\n  .todo-list .delete-icon {\n    position: absolute;\n    right: 0;\n    margin-top: 0;\n    color: #4776E6;\n    cursor: pointer;\n    opacity: .7;\n    transition: all .2s ease-out; }\n  .todo-list .delete-icon:hover {\n      -webkit-transform: scale(1.3) rotate(90deg);\n              transform: scale(1.3) rotate(90deg);\n      opacity: 1; }\n  .todo-list .todo--edit {\n    position: absolute;\n    right: 2rem;\n    margin-top: 0;\n    color: #4776E6;\n    cursor: pointer;\n    opacity: .7;\n    transition: all .2s ease-out; }\n  .todo-list .todo--edit:hover {\n      -webkit-transform: scale(1.3) rotate(90deg);\n              transform: scale(1.3) rotate(90deg);\n      opacity: 1; }\n  .edit-todo-list-form {\n  position: absolute;\n  top: -13px;\n  left: 0px;\n  background-color: #ffffff; }\n  .edit-todo-list-form input {\n    padding: 1rem;\n    outline: none;\n    border: none;\n    border-bottom: 3px solid #4776E6; }\n  .edit-todo-list-form button {\n    padding: .5rem 1rem;\n    margin-left: 2rem;\n    font-size: 1.3rem; }\n  .form-todo {\n  top: -3px;\n  left: 0px;\n  width: 100%; }\n  .form-todo input {\n    width: 77%; }\n  .close-popup {\n  position: absolute;\n  top: .5rem;\n  right: 0;\n  color: #6F49E7;\n  font-size: 1.5rem;\n  margin-right: 1rem;\n  padding: .2rem .7rem;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  transition: all ease-out .2s;\n  cursor: pointer; }\n  .close-popup:hover {\n    -webkit-transform: scale(1.3) rotate(90deg);\n            transform: scale(1.3) rotate(90deg); }\n  .todo-icon {\n  position: absolute;\n  left: -10rem;\n  top: 5%;\n  color: #ffffff;\n  background-color: #6F49E7;\n  border-radius: 50%;\n  font-size: 6rem;\n  padding: 1rem 4rem;\n  border: 10px solid rgba(204, 204, 204, 0.5); }\n  .todo-icon--todo {\n  padding: 1rem 2.5rem; }\n  .add-todolist-icon {\n  color: #6F49E7;\n  background-color: #fff;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  margin-right: 1rem;\n  padding: .2rem; }\n  .modal-content {\n  border: none;\n  letter-spacing: 1px; }\n  .modal-header {\n  border-bottom: none; }\n  .modal-header h4 {\n    padding: 1rem 4rem;\n    font-size: 2.5rem;\n    color: #6F49E7; }\n  .modal-footer button {\n  background-color: #6F49E7; }\n  .modal-footer button::after {\n    background: #6F49E7; }\n  .modal-footer button:hover {\n    color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodosComponent = /** @class */ (function () {
    function TodosComponent(service, modalService) {
        this.service = service;
        this.modalService = modalService;
        this.isEdited = false;
        this.newTodo = '';
        this.complete = false;
        this.todoLists = [];
    }
    TodosComponent.prototype.openModal = function (content) {
        this.mr = this.modalService.open(content);
    };
    TodosComponent.prototype.openTodoModal = function (content) {
        this.mr2 = this.modalService.open(content);
    };
    TodosComponent.prototype.initForm = function () {
        var title = '';
        this.addTodoListForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'edited': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
    };
    TodosComponent.prototype.initTodoForm = function () {
        var todoTitle = '';
        var todoDetails = '';
        this.addTodoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'todoTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](todoTitle),
        });
    };
    TodosComponent.prototype.addTodoList = function (todolist) {
        this.todoObj = {
            title: todolist.title,
            isEdited: false,
            todos: []
        };
        this.todoLists.push(this.todoObj);
        this.service.postTodoList(this.todoObj, this.id);
        this.addTodoListForm.reset();
        this.closeModal();
        this.noTodos = false;
    };
    TodosComponent.prototype.addTodo = function (value, index) {
        this.todoObj = {
            title: value.todoTitle,
            isEdited: false,
            complete: this.complete
        };
        this.todoLists[index].todos.push(this.todoObj);
        this.service.updateUserTodos(this.user).subscribe(function (user) { return user; });
        this.addTodoForm.reset();
        this.closeModal2();
    };
    TodosComponent.prototype.updateTodo = function (todo, isChecked) {
        todo.complete = isChecked;
        this.service.updateUserTodos(this.user).subscribe(function (user) { return user; });
    };
    TodosComponent.prototype.editTodo = function (todo) {
        todo.isEdited = !todo.isEdited;
    };
    TodosComponent.prototype.editTodoList = function (todolist) {
        todolist.isEdited = !todolist.isEdited;
    };
    TodosComponent.prototype.updateTodoTitle = function (value, todo) {
        todo.title = value;
        todo.isEdited = false;
        this.service.updateUserTodos(this.user).subscribe(function (user) { return user; });
    };
    TodosComponent.prototype.updateTodoList = function (value, todolist) {
        todolist.title = value;
        todolist.isEdited = false;
        this.service.updateUserTodos(this.user).subscribe(function (user) { return user; });
    };
    TodosComponent.prototype.deleteTodo = function (todo, index, ind) {
        this.todoLists[ind].todos.splice(index, 1);
        this.service.updateUserTodos(this.user).subscribe(function (user) { return user; });
    };
    TodosComponent.prototype.deleteTodoList = function (todo, index) {
        this.todoLists.splice(index, 1);
        this.service.updateUserTodos(this.user).subscribe(function (user) { return user; });
        if (this.todoLists.length > 0) {
            this.noTodos = false;
        }
        else {
            this.noTodos = true;
        }
    };
    TodosComponent.prototype.closeModal = function () {
        this.mr.close();
    };
    TodosComponent.prototype.closeModal2 = function () {
        this.mr2.close();
    };
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (users) {
            users.forEach(function (user) {
                var storedUsername = localStorage.getItem('username');
                if (storedUsername === user.username) {
                    _this.user = user;
                    _this.id = _this.user._id;
                    _this.todoLists = _this.user.todoLists;
                    if (_this.todoLists.length > 0) {
                        _this.noTodos = false;
                    }
                    else {
                        _this.noTodos = true;
                    }
                }
            });
        });
        this.initForm();
        this.initTodoForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodosComponent.prototype, "todoList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TodosComponent.prototype, "username", void 0);
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.scss */ "./src/app/todos/todos.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-component\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"container text-center\">\n        <h2 class=\"heading-secondary text-center\">My profile</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 profile-component\">\n      <div class=\"profile-content\">\n        <div class=\"form-group\">\n          <input type=\"text\"\n                 class=\"form-input\"\n                 placeholder=\"Username\"\n                 id=\"username\"\n                 name=\"username\" required [(ngModel)]=\"username\">\n          <label class=\"form-label\" for=\"username\">Username</label>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\"\n                 class=\"form-input\"\n                 placeholder=\"Email\"\n                 id=\"email\"\n                 name=\"email\" required [(ngModel)]=\"email\">\n          <label class=\"form-label\" for=\"username\">Email</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 profile-component\">\n      <div class=\"profile-content\">\n        <span *ngIf=\"wrongPassword\" class=\"incorrect-data\">You entered wrong current password!</span>\n        <div class=\"form-group\">\n          <input type=\"password\"\n                 class=\"form-input\"\n                 placeholder=\"Old Password\"\n                 id=\"oldPassword\"\n                 name=\"oldPassword\" required [(ngModel)]=\"oldPassword\">\n          <label class=\"form-label\" for=\"oldPassword\">Old Password</label>\n        </div>\n\n        <div class=\"form-group \">\n          <input type=\"password\"\n                 class=\"form-input\"\n                 placeholder=\"New Password\"\n                 id=\"newPassword\"\n                 name=\"newPassword\" required [(ngModel)]=\"newPassword\">\n          <label class=\"form-label\" for=\"newPassword\">New Password</label>\n        </div>\n        <button  class=\"btn btn--indigo\" type=\"submit\" (click)=\"onChangePassword(oldPassword, newPassword)\">Change Password</button>\n        <button  class=\"btn btn--indigo\" type=\"submit\" (click)=\"updateProfile(username, email)\">Update Profile</button>\n        <p *ngIf=\"changed\" class=\"success\">Your password was successfully changed!</p>\n        <p *ngIf=\"updated\" class=\"success\">Your profile was successfully changed!</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-component {\n  background-color: #ffffff;\n  font-size: 1.5rem; }\n  .post-component .profile--paragraph {\n    position: relative;\n    font-size: 1.6rem;\n    text-align: center;\n    padding: 2rem;\n    color: #212121;\n    letter-spacing: 1px; }\n  .post-component .profile--paragraph:after {\n      content: '';\n      width: 30rem;\n      height: .5rem;\n      background-color: #ff7730;\n      position: absolute;\n      bottom: 0;\n      right: 37%;\n      opacity: .3; }\n  .post-component .profile--paragraph:before {\n      content: '';\n      width: 48rem;\n      height: .5rem;\n      background-color: #ff7730;\n      position: absolute;\n      top: 0;\n      right: 29%;\n      opacity: .3; }\n  .heading-secondary {\n  color: #4776E6;\n  -webkit-transform: none;\n          transform: none;\n  width: 100%;\n  margin-top: 2rem; }\n  .profile-content {\n  margin: 3rem auto;\n  width: 90%;\n  padding: 2rem; }\n  .profile-content .profile-container {\n    width: 100%;\n    margin: 0 auto; }\n  .profile-content .profile-container button {\n      padding: 1rem 4rem;\n      margin-left: 3rem; }\n  .profile-content .profile-container button:focus {\n        outline: none; }\n  .profile-content .form-input {\n    font-size: 1.5rem;\n    padding: 1rem 2rem;\n    color: inherit;\n    border-radius: 2px;\n    background-color: rgba(255, 255, 255, 0.7);\n    border: none;\n    font-family: Lato, sans-serif;\n    border-bottom: 3px solid transparent;\n    width: 90%;\n    background-color: #f7f7f7;\n    display: block;\n    transition: all .3s; }\n  .profile-content .form-input:focus {\n      outline: none;\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n      border-bottom: 3px solid #4776E6; }\n  .profile-content .form-input:focus:invalid {\n      border-bottom: 3px solid orangered !important; }\n  .profile-content .form-input::-webkit-input-placeholder {\n      color: #212121; }\n  .incorrect-data {\n  color: orangered;\n  font-size: 1.5rem; }\n  .success {\n  color: #ff7730;\n  font-size: 2rem; }\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(service, loginService) {
        this.service = service;
        this.loginService = loginService;
        this.storedUsername = localStorage.getItem('username');
        this.password = '';
        this.changed = false;
        this.updated = false;
        this.wrongPassword = false;
    }
    UserProfileComponent.prototype.onChangePassword = function (oldPass, newPass) {
        if (oldPass === this.password) {
            this.user.password = newPass;
            this.service.updateUserPassword(this.user).subscribe(function (user) { return user; });
            this.changed = true;
        }
        else {
            this.wrongPassword = true;
        }
    };
    UserProfileComponent.prototype.updateProfile = function (username, email) {
        this.user.username = username;
        this.user.email = email;
        this.updated = true;
        this.service.updateUser(this.user).subscribe(function (user) { return user; });
        localStorage.setItem('username', this.user.username);
        console.log(this.user);
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (users) {
            users.forEach(function (user) {
                if (_this.storedUsername === user.username) {
                    _this.user = user;
                    _this.password = _this.user.password;
                    _this.username = user.username;
                    _this.email = user.email;
                }
            });
        });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"user\">\n<ol>\n  <li>{{user.username}}</li>\n  <li>{{user.email}}</li>\n  <li>{{user.password}}</li>\n  <li>{{user.todos}}</li>\n</ol>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.todos = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this._getUser();
        });
    };
    UserComponent.prototype._getUser = function () {
        var _this = this;
        this.userSub = this.userService
            .getUserById$(this.id)
            .subscribe(function (res) {
            _this.user = res;
            console.log(_this.user);
        }, function (err) {
            console.error(err);
        });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.userSub.unsubscribe();
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/welcome-page/welcome-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome-page__content\">\n  <header class=\"header\">\n    <div class=\"header__logo-box\">\n      <img src=\"../../assets/images/logoShot.png\" alt=\"\">\n    </div>\n\n    <div class=\"header__text-box\">\n      <h1 class=\"heading-primary\">\n        <span class=\"heading-primary--main\">Go2Goal</span>\n        <span class=\"heading-primary--sub\">is where wishes come true</span>\n      </h1>\n      <div class=\"header__btns\">\n        <a [routerLink]=\"['/login']\" class=\"btn btn--white btn--animated\">Log in</a>\n        <a [routerLink]=\"['/register']\" class=\"btn btn--transparent btn--appeared\">Register</a>\n      </div>\n    </div>\n  </header>\n  <div class=\"about-section\">\n    <div class=\"text-center u-margin-bottom-big\">\n      <h2 class=\"heading-secondary\">What do we suggest?</h2>\n    </div>\n    <div class=\"container row\">\n      <div class=\"col-md-6\">\n        <h3 class=\"heading-tertiary u-margin-bottom-small\">Goals setting.</h3>\n        <p class=\"paragraph\">Setting goals with G2G will help to define the main goal of your life achieving which you'll be able confidently\n          say that you didn't waste your life and to plan precise steps for achieving it.</p>\n\n        <h3 class=\"heading-tertiary u-margin-bottom-small\">Creating several todolists.</h3>\n        <p class=\"paragraph\">With G2G you can create infinite count of lists for daily activities, reading, cooking, watching or shopping.</p>\n\n        <h3 class=\"heading-tertiary u-margin-bottom-small\">Saving notes.</h3>\n        <p class=\"paragraph\">Here you can save your favorite quotes, expressions, useful links, resources or just anything you don't want to lose.</p>\n\n        <h3 class=\"heading-tertiary u-margin-bottom-small\">Sharing posts.</h3>\n        <p class=\"paragraph\">Share your thoughts, goals, impressions or opinion. Recommend something you like to another people.</p>\n        <a [routerLink]=\"['/register']\" class=\"btn-text\">Get started &rarr;</a>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"composition\">\n          <img src=\"../../assets/images/hero-min.jpg\" alt=\"\" class=\"composition__photo composition__photo--p1\">\n          <img src=\"../../assets/images/nat-2-large-min.jpg\" alt=\"\" class=\"composition__photo composition__photo--p2\">\n          <img src=\"../../assets/images/nat-3-large-min.jpg\" alt=\"\" class=\"composition__photo composition__photo--p3\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"features-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"feature-box\">\n            <i class=\"fas fa-trophy feature-box__icon\"></i>\n            <h3 class=\"heading-tertiary u-margin-bottom-small\">Goals</h3>\n            <p class=\"feature-box__text\">Goal of life and 5 levels of goals to achieve it; goals of the year,\n              month and week.</p>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"feature-box\">\n            <i class=\"fas fa-tasks feature-box__icon\"></i>\n            <h3 class=\"heading-tertiary u-margin-bottom-small\">Todos</h3>\n            <p class=\"feature-box__text\">Lists of todos, curses, books, etc.</p>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"feature-box\">\n            <i class=\"fas fa-clipboard-list feature-box__icon\"></i>\n            <h3 class=\"heading-tertiary u-margin-bottom-small\">Notes</h3>\n            <p class=\"feature-box__text\">Notes, quotes, links, expressions, thoughts.</p>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"feature-box\">\n            <i class=\"fas fa-book-open feature-box__icon\"></i>\n            <h3 class=\"heading-tertiary u-margin-bottom-small\">Posts</h3>\n            <p class=\"feature-box__text\"> Recommendation, impression, opinion about books, places, events or goals.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"reviews-section\">\n    <div class=\"bg-video\">\n      <video class=\"bg-video__content\" autoplay loop muted>\n        <source src=\"../../assets/images/Sunset-Lapse.mp4\">\n        <source src=\"../../assets/images/Sunset-Lapse.ogv\">\n        <source src=\"../../assets/images/Sunset-Lapse.webm\">\n      </video>\n    </div>\n    <div class=\"text-center u-margin-bottom-big\">\n      <h2 class=\"heading-secondary\">People say about us...</h2>\n    </div>\n    <div class=\"row u-margin-bottom-big\">\n      <div class=\"col-md-12\">\n        <div class=\"story\">\n          <figure class=\"story__shape\">\n            <img src=\"../../assets/images/user1.jpeg\" alt=\"\">\n            <figcaption class=\"story__caption\">Coffeewoman</figcaption>\n          </figure>\n          <div class=\"story__text\">\n            <h3 class=\"heading-tertiary\">Прекрасный ресурс для тех, кто реально хочет понять, чего хочет в жизни.</h3>\n            <p class=\"paragraph\">Очень рада, что нашла этот сайт! Особенно благодарна за раздел с целями. Пришлось уделить немало времени,\n              чтобы определить, что же является моей главной целью. Но как только определила, сразу стало понятнее, что нужно для этого делать.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row  u-margin-bottom-big\">\n      <div class=\"col-md-12\">\n        <div class=\"story\">\n          <figure class=\"story__shape\">\n            <img src=\"../../assets/images/user2.jpeg\" alt=\"\">\n            <figcaption class=\"story__caption\">Nika_85</figcaption>\n          </figure>\n          <div class=\"story__text\">\n            <h3 class=\"heading-tertiary\">I like it!</h3>\n            <br>\n            <p class=\"paragraph\">Indeed the place where you have everything that you need in your daily life. I'm looking forward to\n          mobile app.</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\">\n        <a [routerLink]=\"['/reviews']\" class=\"btn-text\">See all reviews &rarr;</a>\n      </div>\n    </div>\n  </div>\n <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome-page/welcome-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-page__content {\n  padding: 3rem; }\n\n.header {\n  position: relative;\n  height: 95vh;\n  background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.8), rgba(71, 118, 230, 0.8)), url('bg2-min.jpg');\n  background-size: cover;\n  background-position: top;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%); }\n\n.header .header__logo-box {\n    position: absolute;\n    top: 4rem;\n    left: 4rem; }\n\n.header .header__logo-box img {\n      height: 4.5rem; }\n\n.header .header__text-box {\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n.header .header__text-box .header__btns {\n      text-align: center;\n      margin-top: 7rem; }\n\n.header .header__text-box .header__btns .btn--transparent.btn--appeared:hover {\n        color: #ffffff; }\n\n.about-section {\n  background-color: #f7f7f7;\n  padding: 25rem 0;\n  margin-top: -25vh; }\n\n@media (min-width: 75em) {\n    .about-section .container {\n      max-width: 2500px; } }\n\n@media (max-width: 56.25em) {\n    .about-section .container .btn-text {\n      margin-bottom: 2rem; } }\n\n.about-section .container .col-md-6 {\n    padding: 0 8rem; }\n\n.about-section .composition {\n    position: relative; }\n\n.about-section .composition__photo {\n      width: 55%;\n      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);\n      border-radius: 2px;\n      position: absolute;\n      z-index: 10;\n      outline-offset: 2rem;\n      transition: all .2s; }\n\n.about-section .composition__photo--p1 {\n        left: 0;\n        top: -2rem; }\n\n.about-section .composition__photo--p2 {\n        right: 0;\n        top: 2rem; }\n\n.about-section .composition__photo--p3 {\n        left: 20%;\n        top: 10rem; }\n\n.about-section .composition__photo:hover {\n        outline: 1.5rem solid #4776E6;\n        -webkit-transform: scale(1.05) translateY(-0.5rem);\n                transform: scale(1.05) translateY(-0.5rem);\n        box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);\n        z-index: 20; }\n\n.about-section .composition:hover .composition__photo:not(:hover) {\n      -webkit-transform: scale(0.95);\n              transform: scale(0.95); }\n\n.features-section {\n  padding: 20rem 0;\n  background-image: linear-gradient(to right bottom, rgba(111, 73, 231, 0.8), rgba(71, 118, 230, 0.8)), url('bottle-min.jpg');\n  background-size: cover;\n  margin-top: -10rem;\n  -webkit-transform: skewY(-7deg);\n          transform: skewY(-7deg); }\n\n.features-section > * {\n    -webkit-transform: skewY(7deg);\n            transform: skewY(7deg); }\n\n.features-section .col-md-3 {\n    padding-left: 5rem; }\n\n.features-section .feature-box {\n    background-color: rgba(255, 255, 255, 0.8);\n    font-size: 1.5rem;\n    padding: 2.5rem;\n    text-align: center;\n    min-height: 30rem;\n    border-radius: 3px;\n    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: all .3s; }\n\n@media (max-width: 56.25em) {\n      .features-section .feature-box {\n        margin-bottom: 2rem; } }\n\n.features-section .feature-box .feature-box__icon {\n      font-size: 6rem;\n      margin-bottom: 3rem;\n      display: inline-block;\n      color: #4776E6;\n      opacity: .7; }\n\n.features-section .feature-box:hover {\n      -webkit-transform: translateY(-1.5rem) scale(1.03);\n              transform: translateY(-1.5rem) scale(1.03); }\n\n.reviews-section {\n  padding: 20rem 0 10rem 0;\n  margin-top: -7.5rem;\n  position: relative; }\n\n.reviews-section .story {\n    width: 75%;\n    margin: 0 auto;\n    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);\n    background-color: rgba(255, 255, 255, 0.6);\n    border-radius: 3px;\n    padding: 6rem;\n    padding-left: 9rem;\n    font-size: 1.6rem;\n    -webkit-transform: skewX(-12deg);\n            transform: skewX(-12deg); }\n\n@media (max-width: 37.5em) {\n      .reviews-section .story {\n        -webkit-transform: none;\n                transform: none; } }\n\n.reviews-section .story__shape {\n      width: 15rem;\n      height: 15rem;\n      float: left;\n      shape-outside: circle(50% at 50% 50%);\n      -webkit-clip-path: circle(50% at 50% 50%);\n      clip-path: circle(50% at 50% 50%);\n      -webkit-transform: translateX(-3rem) skewX(12deg);\n              transform: translateX(-3rem) skewX(12deg);\n      position: relative;\n      overflow: hidden;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n\n@media (max-width: 37.5em) {\n        .reviews-section .story__shape {\n          -webkit-transform: none;\n                  transform: none; } }\n\n.reviews-section .story__shape img {\n        height: 100%;\n        -webkit-transform: translateX(1rem) scale(1.4);\n                transform: translateX(1rem) scale(1.4);\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        transition: all .5s; }\n\n.reviews-section .story__text {\n      -webkit-transform: skewX(12deg);\n              transform: skewX(12deg); }\n\n@media (max-width: 37.5em) {\n        .reviews-section .story__text {\n          -webkit-transform: none;\n                  transform: none; } }\n\n.reviews-section .story__caption {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, 20%);\n              transform: translate(-50%, 20%);\n      color: #ffffff;\n      font-size: 1.7rem;\n      text-transform: uppercase;\n      text-align: center;\n      opacity: 0;\n      transition: all .5s;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n\n.reviews-section .story:hover .story__caption {\n      opacity: 1;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n\n.reviews-section .story:hover .story__shape img {\n      -webkit-transform: translateX(0rem) scale(1);\n              transform: translateX(0rem) scale(1);\n      -webkit-filter: blur(3px) brightness(80%);\n              filter: blur(3px) brightness(80%);\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n\n.reviews-section .bg-video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    opacity: .15;\n    overflow: hidden; }\n\n.reviews-section .bg-video__content {\n      height: 100%;\n      width: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n"

/***/ }),

/***/ "./src/app/welcome-page/welcome-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomePageComponent = /** @class */ (function () {
    function WelcomePageComponent() {
    }
    WelcomePageComponent.prototype.ngOnInit = function () {
    };
    WelcomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome-page',
            template: __webpack_require__(/*! ./welcome-page.component.html */ "./src/app/welcome-page/welcome-page.component.html"),
            styles: [__webpack_require__(/*! ./welcome-page.component.scss */ "./src/app/welcome-page/welcome-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomePageComponent);
    return WelcomePageComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anndvorkina/WebstormProjects/go2goal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map