(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");







const _c0 = ["stickheader"];
const _c1 = function (a0) { return { "background-image": a0 }; };
class AppComponent {
    constructor(movie) {
        this.movie = movie;
        this.title = 'netflix';
        this.sticky = false;
        this.subs = [];
        this.sliderConfig = {
            //properties from ngx slider carousel
            slidesToShow: 9,
            slidesToScroll: 2,
            arrows: true,
            autoplay: false
        };
    }
    ngOnInit() {
        this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowPlaying = data));
        this.subs.push(this.movie.getTrending().subscribe(data => {
            this.trending = data;
            this.headerBGurl = 'https://image.tmdb.org/t/p/original/' + this.trending.results[2].backdrop_path;
        }));
        this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated = data));
        this.subs.push(this.movie.getPopular().subscribe(data => this.popular = data));
        this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowPlaying = data));
        this.subs.push(this.movie.getOriginals().subscribe(data => this.originals = data));
    }
    ngOnDestroy() {
        this.subs.map(s => s.unsubscribe());
    }
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if (windowScroll >= this.header.nativeElement.offsetHeight) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 59, vars: 15, consts: [[1, "container"], [1, "header"], [1, "header-banner", 3, "ngStyle"], [1, "header-buttons"], [1, "play-button"], [1, "more-button"], ["id", "stickyheader", 1, "header-main"], ["stickheader", ""], [1, "header-left"], ["routerLink", "/"], ["src", "assets/netflix.svg", "alt", "logo"], [1, "active"], ["href", "#"], [1, "header-right"], ["src", "assets/ava.png", "alt", "avatar"], [1, "body", 2, "margin-top", "30rem"], ["title", "Trending", 3, "movies", "sliderConfig"], ["title", "Top Rated", 3, "movies", "sliderConfig"], ["title", "Originals", 3, "movies", "sliderConfig"], ["title", "Now Playing", 3, "movies", "sliderConfig"], ["title", "Popular", 3, "movies", "sliderConfig"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mulan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "More Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "card_giftcard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-slider", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-slider", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-slider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-slider", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.3)), url(" + ctx.headerBGurl + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sticky", ctx.sticky);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx.trending)("sliderConfig", ctx.sliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx.topRated)("sliderConfig", ctx.sliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx.originals)("sliderConfig", ctx.sliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx.nowPlaying)("sliderConfig", ctx.sliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx.popular)("sliderConfig", ctx.sliderConfig);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 6rem;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%] {\n  background-position: top center;\n  background-size: cover;\n  width: 100%;\n  position: absolute;\n  height: 80vh;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  margin-top: 8rem;\n  margin-left: 3rem;\n  margin-bottom: 6rem;\n  color: lightgrey;\n}\n.container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  font-size: 20px;\n  padding: 15px 40px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  margin-left: 50px;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.25);\n}\n.container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   button.play-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n}\n.container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   button.play-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(2.5);\n}\n.container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   button.more-button[_ngcontent-%COMP%] {\n  background-color: rgba(112, 113, 109, 0.7);\n}\n.container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   button.more-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: lightgray;\n}\n.container[_ngcontent-%COMP%]   .header-banner[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   button.more-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px;\n  width: 100%;\n  justify-content: space-between;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  transition: all 0.3s;\n  transition-timing-function: ease-in;\n}\n.container[_ngcontent-%COMP%]   .header-main.sticky[_ngcontent-%COMP%] {\n  background-color: #0d0d0d;\n  z-index: 100;\n}\n.container[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 50px;\n}\n.container[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  height: 100%;\n  width: 100px;\n  margin-top: 5px;\n}\n.container[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 20px;\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n.container[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 40px;\n  height: 100%;\n  width: 30px;\n  margin-top: 5px;\n}\n.container[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: normal;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n}\n.container[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-weight: 600;\n}\n.container[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  overflow-x: scroll;\n  padding: 20px;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-decoration: none;\n  cursor: pointer;\n  color: #a4a4a4;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: \"Netflix Sans\", \"Helvetica Neve\", Helvetica, arial, sans-serif;\n  transition: all 0.2s ease;\n}\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #696969;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEFuZ3VsYXJcXEFuZ3VsYXIgUHJvamVjdHNcXG5ldGZsaXgxL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURFSTtFQUNJLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0FSO0FERVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBREdRO0VBQ0ksYUFBQTtBQ0RaO0FER1k7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RoQjtBREdnQjtFQUNJLHNCQUFBO0FDRHBCO0FES2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDSHBCO0FES2dCO0VBQ0kscUJBQUE7QUNIcEI7QURNWTtFQUNJLDBDQUFBO0FDSmhCO0FES2dCO0VBQ0ksZ0JBQUE7QUNIcEI7QURLZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSHBCO0FEVUk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7QUNSUjtBRFVRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDUlo7QURVUTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDUlo7QURVWTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUmhCO0FEV2dCO0VBQ0ksWUFBQTtBQ1RwQjtBRGFRO0VBQ0ksT0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ1haO0FEYVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1hoQjtBRGNZO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ1poQjtBRGNnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ1pwQjtBRGdCUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNkWjtBRGdCWTtFQUNJLGFBQUE7QUNkaEI7QURtQkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNoQko7QURrQkk7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyRUFBQTtFQUNBLHlCQUFBO0FDaEJSO0FEa0JRO0VBQ0ksY0FBQTtBQ2hCWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWJhbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wbGF5LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uLm1vcmUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEyLCAxMTMsIDEwOSwgMC43KTtcclxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9iYW5uZXIgZW5kc1xyXG5cclxuICAgIC5oZWFkZXItbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG5cclxuICAgICAgICAmLnN0aWNreSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDBkMGQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlci1sZWZ0IHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXItcmlnaHQgdWx7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxpIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAgICAgICAgICAgICA+IG1hdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib2R5e1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxuXHJcbiAgICBhe1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogI2E0YTRhNDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ05ldGZsaXggU2FucycsICdIZWx2ZXRpY2EgTmV2ZScsIEhlbHZldGljYSxhcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjk2OTY5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyLWJhbm5lciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogODB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmhlYWRlci1iYW5uZXIgaDIge1xuICBmb250LXNpemU6IDZyZW07XG4gIG1hcmdpbi10b3A6IDhyZW07XG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuLmNvbnRhaW5lciAuaGVhZGVyLWJhbm5lciAuaGVhZGVyLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciAuaGVhZGVyLWJhbm5lciAuaGVhZGVyLWJ1dHRvbnMgYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5oZWFkZXItYmFubmVyIC5oZWFkZXItYnV0dG9ucyBidXR0b24gbWF0LWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyLWJhbm5lciAuaGVhZGVyLWJ1dHRvbnMgYnV0dG9uLnBsYXktYnV0dG9uIHNwYW4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uY29udGFpbmVyIC5oZWFkZXItYmFubmVyIC5oZWFkZXItYnV0dG9ucyBidXR0b24ucGxheS1idXR0b24gbWF0LWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XG59XG4uY29udGFpbmVyIC5oZWFkZXItYmFubmVyIC5oZWFkZXItYnV0dG9ucyBidXR0b24ubW9yZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExMiwgMTEzLCAxMDksIDAuNyk7XG59XG4uY29udGFpbmVyIC5oZWFkZXItYmFubmVyIC5oZWFkZXItYnV0dG9ucyBidXR0b24ubW9yZS1idXR0b24gbWF0LWljb24ge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuLmNvbnRhaW5lciAuaGVhZGVyLWJhbm5lciAuaGVhZGVyLWJ1dHRvbnMgYnV0dG9uLm1vcmUtYnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmhlYWRlci1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG59XG4uY29udGFpbmVyIC5oZWFkZXItbWFpbi5zdGlja3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZDBkO1xuICB6LWluZGV4OiAxMDA7XG59XG4uY29udGFpbmVyIC5oZWFkZXItbWFpbiAuaGVhZGVyLWxlZnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDUwcHg7XG59XG4uY29udGFpbmVyIC5oZWFkZXItbWFpbiAuaGVhZGVyLWxlZnQgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY29udGFpbmVyIC5oZWFkZXItbWFpbiAuaGVhZGVyLWxlZnQgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5oZWFkZXItbWFpbiAuaGVhZGVyLXJpZ2h0IHVsIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDMwcHg7XG59XG4uY29udGFpbmVyIC5oZWFkZXItbWFpbiAuaGVhZGVyLXJpZ2h0IHVsIGltZyB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmNvbnRhaW5lciAuaGVhZGVyLW1haW4gLmhlYWRlci1yaWdodCB1bCBsaSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyLW1haW4gLmhlYWRlci1yaWdodCB1bCBsaSBhID4gbWF0LWljb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFpbmVyIC5oZWFkZXItbWFpbiAuYm9keSB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5oZWFkZXItbWFpbiAuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cbnVsIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjYTRhNGE0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk5ldGZsaXggU2Fuc1wiLCBcIkhlbHZldGljYSBOZXZlXCIsIEhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG51bCBhOmhvdmVyIHtcbiAgY29sb3I6ICM2OTY5Njk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"] }]; }, { header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stickheader']
        }], handleScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ],
                exports: [
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SliderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w200", m_r1.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", m_r1.title);
} }
class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], inputs: { sliderConfig: "sliderConfig", movies: "movies", title: "title" }, decls: 7, vars: 3, consts: [[1, "movie"], [1, "movie-images"], [1, "thumbnails"], [1, "carousel", 3, "config"], ["class", "slick-item", "ngxSlickItem", "", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slick-item"], [3, "src", "alt"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-slick-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SliderComponent_div_6_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.sliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies == null ? null : ctx.movies.results);
    } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__["SlickItemDirective"]], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: x-large;\n  color: white;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.movie[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.movie[_ngcontent-%COMP%]   .movie-images[_ngcontent-%COMP%]   div.thumbnails[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\n.movie[_ngcontent-%COMP%]   .movie-images[_ngcontent-%COMP%]   div.thumbnails[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slick-item[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n\n.movie[_ngcontent-%COMP%]   .movie-images[_ngcontent-%COMP%]   div.thumbnails[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .slick-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvRDpcXEFuZ3VsYXJcXEFuZ3VsYXIgUHJvamVjdHNcXG5ldGZsaXgxL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzbGlkZXJcXHNsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtBQ0dKOztBRERRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNHWjs7QURGWTtFQUNJLHlCQUFBO0FDSWhCOztBREZZO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FDSWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5tb3ZpZXtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgLm1vdmllLWltYWdlc3tcclxuICAgICAgICBkaXYudGh1bWJuYWlscyAuY2Fyb3VzZWx7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAuc2xpY2staXRlbXtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuM3MgZWFzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zbGljay1pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJoMiB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tb3ZpZSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLm1vdmllIC5tb3ZpZS1pbWFnZXMgZGl2LnRodW1ibmFpbHMgLmNhcm91c2VsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubW92aWUgLm1vdmllLWltYWdlcyBkaXYudGh1bWJuYWlscyAuY2Fyb3VzZWwgLnNsaWNrLWl0ZW0ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLm1vdmllIC5tb3ZpZS1pbWFnZXMgZGl2LnRodW1ibmFpbHMgLmNhcm91c2VsIC5zbGljay1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.scss']
            }]
    }], function () { return []; }, { sliderConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], movies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class MovieService {
    constructor(http) {
        this.http = http;
        this.URL = "https://api.themoviedb.org/3";
        this.api_key = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api;
    }
    getTrending() {
        return this.http.get(`${this.URL}${"/trending/all/week" /* trending */}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
    getTopRated() {
        return this.http.get(`${this.URL}${"/movie/top_rated" /* top_rated */}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
    getPopular() {
        return this.http.get(`${this.URL}${"/movie/popular" /* popular */}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
    getOriginals() {
        return this.http.get(`${this.URL}${"/discover/tv" /* originals */}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
    getNowPlaying() {
        return this.http.get(`${this.URL}${"/movie/now_playing" /* now_playing */}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
}
MovieService.ɵfac = function MovieService_Factory(t) { return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MovieService, factory: MovieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MovieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
const environment = {
    production: false,
    api: '76ecb4c81294b1f34a007dabb80bf4eb'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\Angular Projects\netflix1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map