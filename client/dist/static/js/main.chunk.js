(this["webpackJsonpsw-cloud-client"] = this["webpackJsonpsw-cloud-client"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n\n =========================================================\n * Light Bootstrap Dashboard React - v2.0.0\n =========================================================\n\n * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard-react\n * Copyright 2020 Creative Tim (http://www.creative-tim.com)\n * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)\n\n =========================================================\n\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n */\n/*      light colors         */\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n/*           Font Smoothing      */\nbody,\nh1, .h1,\nh2, .h2,\nh3, .h3,\nh4, .h4,\nh5, .h5,\nh6, .h6,\np,\n.navbar,\n.brand,\n.btn-simple,\n.alert,\na,\n.td-name,\ntd,\nbutton.close {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Roboto\",\"Helvetica Neue\",Arial,sans-serif;\n  font-weight: 400; }\n\nh1, .h1, h2, .h2, h3, .h3, h4, .h4 {\n  font-weight: 300;\n  margin: 30px 0 15px; }\n\nh1, .h1 {\n  font-size: 52px; }\n\nh2, .h2 {\n  font-size: 36px; }\n\nh3, .h3 {\n  font-size: 28px;\n  margin: 20px 0 10px; }\n\nh4, .h4 {\n  font-size: 22px;\n  line-height: 30px; }\n\nh5, .h5 {\n  font-size: 16px;\n  margin-bottom: 15px; }\n\nh6, .h6 {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase; }\n\np {\n  font-size: 16px;\n  line-height: 1.5; }\n\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small {\n  color: #9A9A9A;\n  font-weight: 300;\n  line-height: 1.5; }\n\nh1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small {\n  font-size: 60%; }\n\nh1 .subtitle {\n  display: block;\n  margin: 0 0 30px; }\n\n.text-muted {\n  color: #9A9A9A; }\n\n.text-primary, .text-primary:hover {\n  color: #1D62F0 !important; }\n\n.text-info, .text-info:hover {\n  color: #1DC7EA !important; }\n\n.text-success, .text-success:hover {\n  color: #87CB16 !important; }\n\n.text-warning, .text-warning:hover {\n  color: #FF9500 !important; }\n\n.text-danger, .text-danger:hover {\n  color: #FF4A55 !important; }\n\n/*     General overwrite     */\nbody,\n.wrapper {\n  min-height: 100vh;\n  position: relative; }\n\na {\n  color: #1DC7EA; }\n  a:hover, a:focus {\n    color: #42d0ed;\n    text-decoration: none; }\n\na:focus, a:active,\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n  outline: 0; }\n\n.ui-slider-handle:focus,\n.navbar-toggle,\ninput:focus {\n  outline: 0 !important; }\n\n/*           Animations              */\n.form-control,\n.input-group-addon,\n.tagsinput,\n.navbar,\n.navbar .alert {\n  transition: all 300ms linear; }\n\n.sidebar .nav a,\n.table > tbody > tr .td-actions .btn {\n  transition: all 150ms ease-in; }\n\n.btn {\n  transition: all 100ms ease-in; }\n\n.fa, .fas, .far, .fal, .fad, .fab {\n  width: 18px;\n  text-align: center; }\n\n.margin-top {\n  margin-top: 50px; }\n\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh; }\n\n.page-header .page-header-image {\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n  width: 100%;\n  z-index: 1; }\n\n.page-header .title-container {\n  color: #fff;\n  position: relative;\n  top: 250px;\n  z-index: 3; }\n\n.page-header .filter:after {\n  background: rgba(0, 0, 0, 0) linear-gradient(to bottom, #9368e9 0%, #943bea 100%) repeat scroll 0 0/150% 150%;\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: 0;\n  opacity: 0.77;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 2; }\n\n.documentation .page-header,\n.documentation .page-header-image,\n.documentation .page-header-image .filter:after {\n  height: 100vh; }\n\n.documentation .footer {\n  z-index: 3; }\n\n.documentation .wrapper {\n  margin-top: -61px;\n  height: 100vh; }\n\n.documentation .navbar {\n  z-index: 21; }\n\n.sidebar,\nbody > .navbar-collapse {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 260px;\n  display: block;\n  z-index: 1;\n  color: #fff;\n  font-weight: 200;\n  background-size: cover;\n  background-position: center center; }\n  .sidebar .sidebar-wrapper,\n  body > .navbar-collapse .sidebar-wrapper {\n    position: relative;\n    max-height: calc(100vh - 75px);\n    min-height: 100%;\n    overflow: auto;\n    width: 260px;\n    z-index: 4;\n    padding-bottom: 100px; }\n  .sidebar .sidebar-background,\n  body > .navbar-collapse .sidebar-background {\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center center; }\n  .sidebar .logo,\n  body > .navbar-collapse .logo {\n    padding: 10px 15px 9px 15px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    position: relative;\n    z-index: 4; }\n    .sidebar .logo p,\n    body > .navbar-collapse .logo p {\n      float: left;\n      font-size: 20px;\n      margin: 10px 10px;\n      color: #FFFFFF;\n      line-height: 20px;\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n    .sidebar .logo .simple-text,\n    body > .navbar-collapse .logo .simple-text {\n      text-transform: uppercase;\n      padding: 5px 0px;\n      display: block;\n      font-size: 18px;\n      color: #FFFFFF;\n      text-align: center;\n      font-weight: 400;\n      line-height: 30px; }\n  .sidebar .logo-tim,\n  body > .navbar-collapse .logo-tim {\n    border-radius: 50%;\n    border: 1px solid #333;\n    display: block;\n    height: 61px;\n    width: 61px;\n    float: left;\n    overflow: hidden; }\n    .sidebar .logo-tim img,\n    body > .navbar-collapse .logo-tim img {\n      width: 60px;\n      height: 60px; }\n  .sidebar .nav,\n  body > .navbar-collapse .nav {\n    margin-top: 20px;\n    float: none;\n    display: block; }\n    .sidebar .nav li .nav-link,\n    body > .navbar-collapse .nav li .nav-link {\n      color: #FFFFFF;\n      margin: 5px 15px;\n      opacity: .86;\n      border-radius: 4px;\n      display: block;\n      padding: 10px 15px; }\n      .sidebar .nav li .nav-link:hover,\n      body > .navbar-collapse .nav li .nav-link:hover {\n        background: rgba(255, 255, 255, 0.13);\n        opacity: 1; }\n      .sidebar .nav li .nav-link p,\n      body > .navbar-collapse .nav li .nav-link p {\n        margin: 0;\n        line-height: 31px;\n        font-size: 12px;\n        font-weight: 600;\n        text-transform: uppercase;\n        display: inline-flex; }\n      .sidebar .nav li .nav-link i,\n      body > .navbar-collapse .nav li .nav-link i {\n        font-size: 28px;\n        margin-right: 15px;\n        width: 30px;\n        text-align: center;\n        vertical-align: middle;\n        float: left; }\n    .sidebar .nav li:hover .nav-link,\n    body > .navbar-collapse .nav li:hover .nav-link {\n      background: rgba(255, 255, 255, 0.13);\n      opacity: 1; }\n    .sidebar .nav li.active .nav-link,\n    body > .navbar-collapse .nav li.active .nav-link {\n      color: #FFFFFF;\n      opacity: 1;\n      background: rgba(255, 255, 255, 0.23); }\n    .sidebar .nav li.separator,\n    body > .navbar-collapse .nav li.separator {\n      margin: 15px 0;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n      .sidebar .nav li.separator + .nav-item,\n      body > .navbar-collapse .nav li.separator + .nav-item {\n        margin-top: 31px; }\n    .sidebar .nav .caret,\n    body > .navbar-collapse .nav .caret {\n      margin-top: 13px;\n      position: absolute;\n      right: 30px; }\n    .sidebar .nav .active-pro,\n    body > .navbar-collapse .nav .active-pro {\n      position: absolute;\n      width: 100%;\n      bottom: 10px; }\n      .sidebar .nav .active-pro a,\n      body > .navbar-collapse .nav .active-pro a {\n        color: #FFFFFF !important; }\n    .sidebar .nav .nav-link,\n    body > .navbar-collapse .nav .nav-link {\n      color: #FFFFFF;\n      margin: 5px 15px;\n      opacity: .86;\n      border-radius: 4px;\n      text-transform: uppercase;\n      line-height: 30px;\n      font-size: 12px;\n      font-weight: 600; }\n  .sidebar .logo,\n  body > .navbar-collapse .logo {\n    padding: 10px 15px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n    .sidebar .logo p,\n    body > .navbar-collapse .logo p {\n      float: left;\n      font-size: 20px;\n      margin: 10px 10px;\n      color: #FFFFFF;\n      line-height: 20px;\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n    .sidebar .logo .simple-text,\n    body > .navbar-collapse .logo .simple-text {\n      text-transform: uppercase;\n      padding: 5px 0px;\n      display: block;\n      font-size: 18px;\n      color: #FFFFFF;\n      text-align: center;\n      font-weight: 400;\n      line-height: 30px; }\n  .sidebar .logo-tim,\n  body > .navbar-collapse .logo-tim {\n    border-radius: 50%;\n    border: 1px solid #333;\n    display: block;\n    height: 61px;\n    width: 61px;\n    float: left;\n    overflow: hidden; }\n    .sidebar .logo-tim img,\n    body > .navbar-collapse .logo-tim img {\n      width: 60px;\n      height: 60px; }\n  .sidebar:after, .sidebar:before,\n  body > .navbar-collapse:after,\n  body > .navbar-collapse:before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 2; }\n  .sidebar:before,\n  body > .navbar-collapse:before {\n    opacity: .33;\n    background: #000000; }\n  .sidebar:after,\n  body > .navbar-collapse:after {\n    background: #9368E9;\n    background: linear-gradient(to bottom, #9368E9 0%, #943bea 100%);\n    background-size: 150% 150%;\n    z-index: 3;\n    opacity: 1; }\n  .sidebar[data-image]:after, .sidebar.has-image:after,\n  body > .navbar-collapse[data-image]:after,\n  body > .navbar-collapse.has-image:after {\n    opacity: .77; }\n  .sidebar[data-color=\"black\"]:after,\n  body > .navbar-collapse[data-color=\"black\"]:after {\n    background: #777777;\n    background: linear-gradient(to bottom, #777777 0%, #777777 100%);\n    background-size: 150% 150%; }\n  .sidebar[data-color=\"blue\"]:after,\n  body > .navbar-collapse[data-color=\"blue\"]:after {\n    background: #1F77D0;\n    background: linear-gradient(to bottom, #1F77D0 0%, #533ce1 100%);\n    background-size: 150% 150%; }\n  .sidebar[data-color=\"azure\"]:after,\n  body > .navbar-collapse[data-color=\"azure\"]:after {\n    background: #1DC7EA;\n    background: linear-gradient(to bottom, #1DC7EA 0%, #4091ff 100%);\n    background-size: 150% 150%; }\n  .sidebar[data-color=\"green\"]:after,\n  body > .navbar-collapse[data-color=\"green\"]:after {\n    background: #87CB16;\n    background: linear-gradient(to bottom, #87CB16 0%, #6dc030 100%);\n    background-size: 150% 150%; }\n  .sidebar[data-color=\"orange\"]:after,\n  body > .navbar-collapse[data-color=\"orange\"]:after {\n    background: #FFA534;\n    background: linear-gradient(to bottom, #FFA534 0%, #ff5221 100%);\n    background-size: 150% 150%; }\n  .sidebar[data-color=\"red\"]:after,\n  body > .navbar-collapse[data-color=\"red\"]:after {\n    background: #FB404B;\n    background: linear-gradient(to bottom, #FB404B 0%, #bb0502 100%);\n    background-size: 150% 150%; }\n  .sidebar[data-color=\"purple\"]:after,\n  body > .navbar-collapse[data-color=\"purple\"]:after {\n    background: #9368E9;\n    background: linear-gradient(to bottom, #9368E9 0%, #943bea 100%);\n    background-size: 150% 150%; }\n\n.main-panel {\n  background: rgba(203, 203, 210, 0.15);\n  position: relative;\n  float: right;\n  width: calc(100% - 260px);\n  min-height: 100%; }\n  .main-panel > .content {\n    padding: 30px 15px;\n    min-height: calc(100% - 123px); }\n  .main-panel > .footer {\n    border-top: 1px solid #e7e7e7; }\n  .main-panel .navbar {\n    margin-bottom: 0; }\n\n.sidebar,\n.main-panel {\n  overflow: auto;\n  max-height: 100%;\n  height: 100%;\n  transition-property: top,bottom;\n  transition-duration: .2s,.2s;\n  transition-timing-function: linear,linear;\n  -webkit-overflow-scrolling: touch; }\n\n.fixed-plugin .dropdown .dropdown-menu {\n  transform: translate3d(0, -5%, 0) !important;\n  border-radius: 10px; }\n  .fixed-plugin .dropdown .dropdown-menu li.adjustments-line {\n    border-bottom: 1px solid #ddd; }\n  .fixed-plugin .dropdown .dropdown-menu li {\n    padding: 5px 2px !important; }\n  .fixed-plugin .dropdown .dropdown-menu .button-container a {\n    font-size: 14px; }\n  .fixed-plugin .dropdown .dropdown-menu .button-container.show {\n    transform: translate3d(0, 0%, 0) !important;\n    transform-origin: 0 0;\n    left: -303px !important; }\n\n.fixed-plugin .dropdown .dropdown-menu {\n  transform: translate3d(0, -5%, 0) !important;\n  top: -40px !important;\n  opacity: 0;\n  left: -303px !important;\n  transform-origin: 0 0; }\n\n.fixed-plugin .dropdown.show .dropdown-menu {\n  opacity: 1;\n  transform: translate3d(0, 0%, 0) !important;\n  transform-origin: 0 0;\n  left: -303px !important; }\n\n.fixed-plugin .dropdown-menu:before,\n.fixed-plugin .dropdown-menu:after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  top: 65px;\n  width: 16px;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%); }\n\n.fixed-plugin .dropdown-menu:before {\n  border-bottom: 16px solid rgba(0, 0, 0, 0);\n  border-left: 16px solid rgba(0, 0, 0, 0.2);\n  border-top: 16px solid rgba(0, 0, 0, 0);\n  right: -16px; }\n\n.fixed-plugin .dropdown-menu:after {\n  border-bottom: 16px solid rgba(0, 0, 0, 0);\n  border-left: 16px solid #fff;\n  border-top: 16px solid rgba(0, 0, 0, 0);\n  right: -15px; }\n\n.modal.show .modal-dialog {\n  transform: translate(0, 30%); }\n\n.modal.modal-mini .modal-dialog {\n  max-width: 255px;\n  margin: 0 auto; }\n\n.modal .modal-content .modal-header {\n  border-bottom: none;\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-bottom: 0;\n  padding-left: 24px; }\n  .modal .modal-content .modal-header .modal-profile {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 5.7;\n    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3); }\n    .modal .modal-content .modal-header .modal-profile i {\n      font-size: 32px;\n      padding-top: 24px; }\n\n.modal .modal-content .modal-body {\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-bottom: 16px;\n  padding-left: 24px;\n  line-height: 1.9; }\n\n.modal .modal-content .modal-body + .modal-footer {\n  padding-top: 0; }\n\n.modal .modal-content .modal-footer {\n  border-top: none;\n  padding-right: 24px;\n  padding-bottom: 16px;\n  padding-left: 24px;\n  justify-content: space-between; }\n  .modal .modal-content .modal-footer .btn {\n    margin: 0;\n    padding-left: 16px;\n    padding-right: 16px;\n    width: auto; }\n    .modal .modal-content .modal-footer .btn:hover, .modal .modal-content .modal-footer .btnfocus {\n      text-decoration: none; }\n\n.btn {\n  border-width: 2px;\n  background-color: transparent;\n  font-weight: 400;\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n  padding: 8px 16px;\n  border-color: #888888;\n  color: #888888; }\n  .btn:hover, .btn:focus, .btn:active, .btn.active,\n  .open > .btn.dropdown-toggle {\n    background-color: transparent;\n    color: #777777;\n    border-color: #777777; }\n  .btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active,\n  fieldset[disabled] .btn,\n  fieldset[disabled] .btn:hover,\n  fieldset[disabled] .btn:focus,\n  fieldset[disabled] .btn.focus,\n  fieldset[disabled] .btn:active,\n  fieldset[disabled] .btn.active {\n    background-color: transparent;\n    border-color: #888888; }\n  .btn.btn-fill {\n    color: #FFFFFF;\n    background-color: #888888;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn.btn-fill:hover, .btn.btn-fill:focus, .btn.btn-fill:active, .btn.btn-fill.active,\n    .open > .btn.btn-fill.dropdown-toggle {\n      background-color: #777777;\n      color: #FFFFFF; }\n    .btn.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn .caret {\n    border-top-color: #888888; }\n  .btn:hover, .btn:focus {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    outline: 0 !important;\n    box-shadow: none; }\n  .btn:active, .btn.active,\n  .open > .btn.dropdown-toggle {\n    box-shadow: none;\n    outline: 0 !important; }\n  .btn.btn-icon {\n    padding: 8px; }\n\n.btn-primary {\n  border-color: #3472F7;\n  color: #3472F7; }\n  .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-color: transparent;\n    color: #1D62F0;\n    border-color: #1D62F0; }\n  .btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary:disabled, .btn-primary:disabled:hover, .btn-primary:disabled:focus, .btn-primary:disabled.focus, .btn-primary:disabled:active, .btn-primary:disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled].active,\n  fieldset[disabled] .btn-primary,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus,\n  fieldset[disabled] .btn-primary:active,\n  fieldset[disabled] .btn-primary.active {\n    background-color: transparent;\n    border-color: #3472F7; }\n  .btn-primary.btn-fill {\n    color: #FFFFFF;\n    background-color: #3472F7;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-primary.btn-fill:hover, .btn-primary.btn-fill:focus, .btn-primary.btn-fill:active, .btn-primary.btn-fill.active,\n    .open > .btn-primary.btn-fill.dropdown-toggle {\n      background-color: #1D62F0;\n      color: #FFFFFF; }\n    .btn-primary.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-primary .caret {\n    border-top-color: #3472F7; }\n\n.btn-success {\n  border-color: #87CB16;\n  color: #87CB16; }\n  .btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-color: transparent;\n    color: #049F0C;\n    border-color: #049F0C; }\n  .btn-success.disabled, .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success.disabled:active, .btn-success.disabled.active, .btn-success:disabled, .btn-success:disabled:hover, .btn-success:disabled:focus, .btn-success:disabled.focus, .btn-success:disabled:active, .btn-success:disabled.active, .btn-success[disabled], .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus, .btn-success[disabled]:active, .btn-success[disabled].active,\n  fieldset[disabled] .btn-success,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus,\n  fieldset[disabled] .btn-success:active,\n  fieldset[disabled] .btn-success.active {\n    background-color: transparent;\n    border-color: #87CB16; }\n  .btn-success.btn-fill {\n    color: #FFFFFF;\n    background-color: #87CB16;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-success.btn-fill:hover, .btn-success.btn-fill:focus, .btn-success.btn-fill:active, .btn-success.btn-fill.active,\n    .open > .btn-success.btn-fill.dropdown-toggle {\n      background-color: #049F0C;\n      color: #FFFFFF; }\n    .btn-success.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-success .caret {\n    border-top-color: #87CB16; }\n\n.btn-info {\n  border-color: #1DC7EA;\n  color: #1DC7EA; }\n  .btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-color: transparent;\n    color: #42d0ed;\n    border-color: #42d0ed; }\n  .btn-info.disabled, .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info.disabled:active, .btn-info.disabled.active, .btn-info:disabled, .btn-info:disabled:hover, .btn-info:disabled:focus, .btn-info:disabled.focus, .btn-info:disabled:active, .btn-info:disabled.active, .btn-info[disabled], .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus, .btn-info[disabled]:active, .btn-info[disabled].active,\n  fieldset[disabled] .btn-info,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus,\n  fieldset[disabled] .btn-info:active,\n  fieldset[disabled] .btn-info.active {\n    background-color: transparent;\n    border-color: #1DC7EA; }\n  .btn-info.btn-fill {\n    color: #FFFFFF;\n    background-color: #1DC7EA;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-info.btn-fill:hover, .btn-info.btn-fill:focus, .btn-info.btn-fill:active, .btn-info.btn-fill.active,\n    .open > .btn-info.btn-fill.dropdown-toggle {\n      background-color: #42d0ed;\n      color: #FFFFFF; }\n    .btn-info.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-info .caret {\n    border-top-color: #1DC7EA; }\n\n.btn-warning {\n  border-color: #FF9500;\n  color: #FF9500; }\n  .btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-color: transparent;\n    color: #ED8D00;\n    border-color: #ED8D00; }\n  .btn-warning.disabled, .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning.disabled:active, .btn-warning.disabled.active, .btn-warning:disabled, .btn-warning:disabled:hover, .btn-warning:disabled:focus, .btn-warning:disabled.focus, .btn-warning:disabled:active, .btn-warning:disabled.active, .btn-warning[disabled], .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus, .btn-warning[disabled]:active, .btn-warning[disabled].active,\n  fieldset[disabled] .btn-warning,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus,\n  fieldset[disabled] .btn-warning:active,\n  fieldset[disabled] .btn-warning.active {\n    background-color: transparent;\n    border-color: #FF9500; }\n  .btn-warning.btn-fill {\n    color: #FFFFFF;\n    background-color: #FF9500;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-warning.btn-fill:hover, .btn-warning.btn-fill:focus, .btn-warning.btn-fill:active, .btn-warning.btn-fill.active,\n    .open > .btn-warning.btn-fill.dropdown-toggle {\n      background-color: #ED8D00;\n      color: #FFFFFF; }\n    .btn-warning.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-warning .caret {\n    border-top-color: #FF9500; }\n\n.btn-danger {\n  border-color: #FF4A55;\n  color: #FF4A55; }\n  .btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-color: transparent;\n    color: #EE2D20;\n    border-color: #EE2D20; }\n  .btn-danger.disabled, .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger.disabled:active, .btn-danger.disabled.active, .btn-danger:disabled, .btn-danger:disabled:hover, .btn-danger:disabled:focus, .btn-danger:disabled.focus, .btn-danger:disabled:active, .btn-danger:disabled.active, .btn-danger[disabled], .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus, .btn-danger[disabled]:active, .btn-danger[disabled].active,\n  fieldset[disabled] .btn-danger,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus,\n  fieldset[disabled] .btn-danger:active,\n  fieldset[disabled] .btn-danger.active {\n    background-color: transparent;\n    border-color: #FF4A55; }\n  .btn-danger.btn-fill {\n    color: #FFFFFF;\n    background-color: #FF4A55;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-danger.btn-fill:hover, .btn-danger.btn-fill:focus, .btn-danger.btn-fill:active, .btn-danger.btn-fill.active,\n    .open > .btn-danger.btn-fill.dropdown-toggle {\n      background-color: #EE2D20;\n      color: #FFFFFF; }\n    .btn-danger.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-danger .caret {\n    border-top-color: #FF4A55; }\n\n.btn-neutral {\n  border-color: #FFFFFF;\n  color: #FFFFFF; }\n  .btn-neutral:hover, .btn-neutral:focus, .btn-neutral:active, .btn-neutral.active,\n  .open > .btn-neutral.dropdown-toggle {\n    background-color: transparent;\n    color: #FFFFFF;\n    border-color: #FFFFFF; }\n  .btn-neutral.disabled, .btn-neutral.disabled:hover, .btn-neutral.disabled:focus, .btn-neutral.disabled.focus, .btn-neutral.disabled:active, .btn-neutral.disabled.active, .btn-neutral:disabled, .btn-neutral:disabled:hover, .btn-neutral:disabled:focus, .btn-neutral:disabled.focus, .btn-neutral:disabled:active, .btn-neutral:disabled.active, .btn-neutral[disabled], .btn-neutral[disabled]:hover, .btn-neutral[disabled]:focus, .btn-neutral[disabled].focus, .btn-neutral[disabled]:active, .btn-neutral[disabled].active,\n  fieldset[disabled] .btn-neutral,\n  fieldset[disabled] .btn-neutral:hover,\n  fieldset[disabled] .btn-neutral:focus,\n  fieldset[disabled] .btn-neutral.focus,\n  fieldset[disabled] .btn-neutral:active,\n  fieldset[disabled] .btn-neutral.active {\n    background-color: transparent;\n    border-color: #FFFFFF; }\n  .btn-neutral.btn-fill {\n    color: #FFFFFF;\n    background-color: #FFFFFF;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n    .btn-neutral.btn-fill:hover, .btn-neutral.btn-fill:focus, .btn-neutral.btn-fill:active, .btn-neutral.btn-fill.active,\n    .open > .btn-neutral.btn-fill.dropdown-toggle {\n      background-color: #FFFFFF;\n      color: #FFFFFF; }\n    .btn-neutral.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n  .btn-neutral .caret {\n    border-top-color: #FFFFFF; }\n  .btn-neutral:active, .btn-neutral.active,\n  .open > .btn-neutral.dropdown-toggle {\n    background-color: #FFFFFF;\n    color: #888888; }\n  .btn-neutral.btn-fill, .btn-neutral.btn-fill:hover, .btn-neutral.btn-fill:focus {\n    color: #888888; }\n  .btn-neutral.btn-simple:active, .btn-neutral.btn-simple.active {\n    background-color: transparent; }\n\n.btn:disabled, .btn[disabled], .btn.disabled {\n  opacity: 0.5;\n  filter: alpha(opacity=50); }\n\n.btn-round {\n  border-width: 1px;\n  border-radius: 30px !important;\n  padding: 9px 18px; }\n  .btn-round.btn-icon {\n    padding: 9px; }\n\n.btn-simple {\n  border: 0;\n  font-size: 16px;\n  padding: 8px 16px; }\n  .btn-simple.btn-icon {\n    padding: 8px; }\n\n.btn-lg {\n  font-size: 18px;\n  border-radius: 6px;\n  padding: 14px 30px;\n  font-weight: 400; }\n  .btn-lg.btn-round {\n    padding: 15px 30px; }\n  .btn-lg.btn-simple {\n    padding: 16px 30px; }\n\n.btn-sm {\n  font-size: 12px;\n  border-radius: 3px;\n  padding: 5px 10px; }\n  .btn-sm.btn-round {\n    padding: 6px 10px; }\n  .btn-sm.btn-simple {\n    padding: 7px 10px; }\n\n.btn-xs {\n  font-size: 12px;\n  border-radius: 3px;\n  padding: 1px 5px; }\n  .btn-xs.btn-round {\n    padding: 2px 5px; }\n  .btn-xs.btn-simple {\n    padding: 3px 5px; }\n\n.btn-wd {\n  min-width: 140px; }\n\n.btn-group.select {\n  width: 100%; }\n\n.btn-group.select .btn {\n  text-align: left; }\n\n.btn-group.select .caret {\n  position: absolute;\n  top: 50%;\n  margin-top: -1px;\n  right: 8px; }\n\n.btn-social {\n  opacity: 0.85; }\n\n.btn-twitter {\n  border-color: #55acee;\n  color: #55acee; }\n  .btn-twitter:hover {\n    opacity: 1 !important;\n    border-color: #55acee;\n    color: #55acee; }\n\n.btn-facebook {\n  border-color: #3b5998;\n  color: #3b5998; }\n  .btn-facebook:hover {\n    opacity: 1 !important;\n    border-color: #3b5998;\n    color: #3b5998; }\n\n.form-control::-moz-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.form-control:-moz-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.form-control::-webkit-input-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.form-control:-ms-input-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.form-control {\n  background-color: #FFFFFF;\n  border: 1px solid #E3E3E3;\n  border-radius: 4px;\n  color: #565656;\n  padding: 8px 12px;\n  height: 40px;\n  box-shadow: none; }\n  .form-control:focus {\n    background-color: #FFFFFF;\n    border: 1px solid #AAAAAA;\n    box-shadow: none;\n    outline: 0 !important;\n    color: #333333; }\n  .has-success .form-control,\n  .has-error .form-control,\n  .has-success .form-control:focus,\n  .has-error .form-control:focus {\n    border-color: #E3E3E3;\n    box-shadow: none; }\n  .has-success .form-control {\n    color: #87CB16; }\n  .has-success .form-control:focus {\n    border-color: #87CB16; }\n  .has-error .form-control {\n    color: #FF4A55; }\n  .has-error .form-control:focus {\n    border-color: #FF4A55; }\n  .form-control + .form-control-feedback {\n    border-radius: 6px;\n    font-size: 14px;\n    margin-top: -7px;\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    vertical-align: middle; }\n  .open .form-control {\n    border-radius: 4px 4px 0 0;\n    border-bottom-color: transparent; }\n\n.input-lg {\n  height: 55px;\n  padding: 14px 30px; }\n\n.has-error .form-control-feedback {\n  color: #FF4A55; }\n\n.has-success .form-control-feedback {\n  color: #87CB16; }\n\n.input-group-addon {\n  background-color: #FFFFFF;\n  border: 1px solid #E3E3E3;\n  border-radius: 4px; }\n  .has-success .input-group-addon,\n  .has-error .input-group-addon {\n    background-color: #FFFFFF;\n    border: 1px solid #E3E3E3; }\n  .has-error .form-control:focus + .input-group-addon {\n    border-color: #FF4A55;\n    color: #FF4A55; }\n  .has-success .form-control:focus + .input-group-addon {\n    border-color: #87CB16;\n    color: #87CB16; }\n  .form-control:focus + .input-group-addon,\n  .form-control:focus ~ .input-group-addon {\n    background-color: #FFFFFF;\n    border-color: #9A9A9A; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n  border-right: 0 none; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child) {\n  border-left: 0 none; }\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  background-color: #F5F5F5;\n  color: #888888;\n  cursor: not-allowed; }\n\n.input-group-btn .btn {\n  border-width: 1px;\n  padding: 9px 16px; }\n\n.input-group-btn .btn-default:not(.btn-fill) {\n  border-color: #DDDDDD; }\n\n.input-group-btn:last-child > .btn {\n  margin-left: 0; }\n\n.input-group-focus .input-group-addon {\n  border-color: #9A9A9A; }\n\n.alert {\n  border: 0;\n  border-radius: 0;\n  color: #FFFFFF;\n  padding: 10px 15px;\n  font-size: 14px; }\n  .container .alert {\n    border-radius: 4px; }\n  .navbar .alert {\n    border-radius: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 85px;\n    width: 100%;\n    z-index: 3; }\n  .navbar:not(.navbar-transparent) .alert {\n    top: 70px; }\n  .alert span[data-notify=\"icon\"] {\n    font-size: 30px;\n    display: block;\n    left: 15px;\n    position: absolute;\n    top: 50%;\n    margin-top: -15px; }\n  .alert i.nc-simple-remove {\n    font-size: 12px !important;\n    font: bold normal normal 14px/1 'nucleo-icons'; }\n  .alert button.close {\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    margin-top: -13px;\n    z-index: 1033;\n    background-color: #FFFFFF;\n    display: block;\n    border-radius: 50%;\n    opacity: .4;\n    line-height: 9px;\n    width: 25px;\n    height: 25px;\n    outline: 0 !important;\n    text-align: center;\n    padding: 3px;\n    font-weight: 300; }\n    .alert button.close:hover {\n      opacity: .55; }\n  .alert .close ~ span {\n    display: block;\n    max-width: 89%; }\n  .alert[data-notify=\"container\"] {\n    padding: 10px 10px 10px 20px;\n    border-radius: 4px; }\n  .alert.alert-with-icon {\n    padding-left: 65px; }\n\n.alert-primary {\n  background-color: #4091e2; }\n\n.alert-info {\n  background-color: #63d8f1; }\n\n.alert-success {\n  background-color: #a1e82c; }\n\n.alert-warning {\n  background-color: #ffbc67; }\n\n.alert-danger {\n  background-color: #fc727a; }\n\n.table .radio,\n.table .checkbox {\n  position: relative;\n  height: 20px;\n  display: block;\n  width: 20px;\n  padding: 0px 0px;\n  margin: 0px 5px;\n  text-align: center; }\n  .table .radio .icons,\n  .table .checkbox .icons {\n    left: 5px; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 12px 8px;\n  vertical-align: middle; }\n\n.table > thead > tr > th {\n  border-bottom-width: 1px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #9A9A9A;\n  font-weight: 400;\n  padding-bottom: 5px;\n  border-top: none !important;\n  border-bottom: none;\n  text-align: left !important; }\n\n.table .td-actions .btn {\n  opacity: 0.36;\n  filter: alpha(opacity=36); }\n  .table .td-actions .btn.btn-xs {\n    padding-left: 3px;\n    padding-right: 3px; }\n\n.table .td-actions {\n  min-width: 90px; }\n\n.table > tbody > tr {\n  position: relative; }\n  .table > tbody > tr:hover .td-actions .btn {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n\n.table .btn:focus {\n  box-shadow: none !important; }\n\n.table-upgrade .table tr td {\n  width: 100%; }\n\n.table .form-check .form-check-sign, .table .form-check .form-check-sign:after, .table .form-check .form-check-sign:before {\n  margin-top: -16px; }\n\n.from-check,\n.form-check-radio {\n  margin-bottom: 12px;\n  position: relative; }\n\n.form-check .form-check-label {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  padding-left: 0px;\n  line-height: 26px;\n  margin-bottom: 0;\n  text-transform: capitalize; }\n\n.form-check .form-check-sign::before,\n.form-check .form-check-sign::after {\n  font-family: \"Font Awesome 5 Free\";\n  content: \"\\f0c8\";\n  color: #888888;\n  display: inline-block;\n  position: absolute;\n  width: 19px;\n  height: 19px;\n  margin-left: -23px;\n  font-size: 18px;\n  cursor: pointer;\n  transition: opacity 0.3s linear; }\n\n.form-check .form-check-sign::after {\n  font-family: \"Font Awesome 5 Free\";\n  content: \"\\f14a\";\n  text-align: center;\n  opacity: 0;\n  color: #1DC7EA;\n  border: 0;\n  background-color: inherit;\n  margin-left: -23px;\n  font-weight: bold; }\n\n.form-check .form-check-sign::before {\n  margin-left: -22px; }\n\n.form-check.disabled .form-check-label {\n  color: #9A9A9A;\n  opacity: .5;\n  cursor: not-allowed; }\n\n#RegisterValidation .card .form-check .form-check-sign:before {\n  margin-left: -27px; }\n\n.form-check .form-check-input:disabled + .form-check-sign:before,\n.form-check .form-check-input:disabled + .form-check-sign:after,\n.radio input[type=\"radio\"]:disabled + label,\n.form-check .form-check-input:disabled:checked + .form-check-sign::after {\n  color: #ddd;\n  pointer-events: none; }\n\n.form-check.disabled .form-check-label {\n  cursor: not-allowed; }\n\n.form-check input[type=\"checkbox\"],\n.form-check-radio input[type=\"radio\"] {\n  opacity: 0;\n  position: absolute;\n  visibility: hidden; }\n\n.form-check input[type=\"checkbox\"]:checked + .form-check-sign::after {\n  opacity: 1; }\n\n.form-check input[type=\"checkbox\"]:checked + .form-check-sign::before {\n  opacity: 0; }\n\n.form-control input[type=\"checkbox\"]:disabled + .form-check-sign::before,\n.checkbox input[type=\"checkbox\"]:disabled + .form-check-sign::after {\n  cursor: not-allowed; }\n\n.form-check .form-check-label input[type=\"checkbox\"]:disabled + .form-check-sign,\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign {\n  pointer-events: none !important; }\n\n.form-check.checkbox-inline {\n  display: inline-block; }\n\n.form-check-radio .form-check-label {\n  padding-left: 2.2rem; }\n\n.form-check-radio.disabled .form-check-label {\n  color: #9A9A9A;\n  opacity: .5;\n  cursor: not-allowed; }\n\n.form-check-radio .form-check-sign::before {\n  font-family: 'FontAwesome';\n  content: \"\\f10c\";\n  font-size: 18px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: inline-block;\n  position: absolute;\n  opacity: .50;\n  left: 34px; }\n\n.form-check-radio input[type=\"radio\"] + .form-check-sign:after,\n.form-check-radio input[type=\"radio\"] {\n  opacity: 0;\n  transition: opacity 0.3s linear;\n  content: \" \";\n  display: block;\n  margin-left: 5px;\n  font-size: 18px; }\n\n.form-check-radio input[type=\"radio\"]:checked + .form-check-sign::after {\n  font-family: 'FontAwesome';\n  content: \"\\f192\";\n  position: absolute;\n  left: 5.3px;\n  opacity: 1; }\n\n.form-check-radio input[type=\"radio\"]:checked + .form-check-sign::after {\n  opacity: 1;\n  transition: opacity 0.3s linear; }\n\n.form-check input[type=\"radio\"]:checked + .form-check-sign::before {\n  opacity: 0;\n  transition: opacity 0.3s linear; }\n\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign::before,\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign::after {\n  color: #9A9A9A; }\n\n.card.stacked-form .form-check .form-check-label, .card.horizontal-form .form-check .form-check-label {\n  padding-left: 22px !important; }\n\n.nav .nav-item .nav-link:hover,\n.nav .nav-item .nav-link:focus {\n  background-color: transparent; }\n\n.navbar {\n  border: 0;\n  font-size: 16px;\n  border-radius: 0;\n  min-height: 50px;\n  background-color: rgba(255, 255, 255, 0.96);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  .navbar .navbar-brand {\n    font-weight: 400;\n    margin: 5px 0px;\n    font-size: 20px;\n    color: #888888; }\n    .navbar .navbar-brand:hover {\n      color: #5e5e5e; }\n  .navbar .navbar-toggler {\n    vertical-align: middle;\n    outline: 0;\n    cursor: pointer; }\n    .navbar .navbar-toggler.navbar-toggler-left {\n      position: relative;\n      left: 0;\n      padding-left: 0; }\n    .navbar .navbar-toggler.navbar-toggler-right {\n      padding-right: 0;\n      top: 18px; }\n    .navbar .navbar-toggler .navbar-toggler-bar {\n      width: 3px;\n      height: 3px;\n      border-radius: 50%;\n      margin: 0 auto; }\n    .navbar .navbar-toggler .burger-lines {\n      display: block;\n      position: relative;\n      background-color: #888;\n      width: 24px;\n      height: 2px;\n      border-radius: 1px;\n      margin: 4px auto; }\n  .navbar .navbar-nav .nav-item .nav-link {\n    color: #888888;\n    padding: 10px 15px;\n    margin: 10px 3px;\n    position: relative;\n    display: inline-flex;\n    line-height: 40px; }\n    .navbar .navbar-nav .nav-item .nav-link.btn {\n      margin: 15px 3px;\n      padding: 8px 16px; }\n    .navbar .navbar-nav .nav-item .nav-link.btn-round {\n      margin: 16px 3px; }\n    .navbar .navbar-nav .nav-item .nav-link[class^=\"fa\"], .navbar .navbar-nav .nav-item .nav-link[class^=\"fas\"], .navbar .navbar-nav .nav-item .nav-link[class^=\"far\"], .navbar .navbar-nav .nav-item .nav-link[class^=\"fal\"], .navbar .navbar-nav .nav-item .nav-link[class^=\"fad\"], .navbar .navbar-nav .nav-item .nav-link[class^=\"fab\"] {\n      font-size: 19px;\n      position: relative;\n      line-height: 40px;\n      top: 1px; }\n    .navbar .navbar-nav .nav-item .nav-link:hover {\n      color: #1DC7EA; }\n  .navbar .navbar-nav .nav-item .dropdown-menu {\n    border-radius: 10px;\n    margin-top: -5px; }\n    .navbar .navbar-nav .nav-item .dropdown-menu .dropdown-item:first-child {\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px; }\n    .navbar .navbar-nav .nav-item .dropdown-menu .dropdown-item:last-child {\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px; }\n    .navbar .navbar-nav .nav-item .dropdown-menu .divider {\n      height: 1px;\n      margin: 5px 0;\n      overflow: hidden;\n      background-color: #e5e5e5; }\n  .navbar .navbar-nav .notification {\n    position: absolute;\n    background-color: #FB404B;\n    text-align: center;\n    border-radius: 10px;\n    min-width: 18px;\n    padding: 0 5px;\n    height: 18px;\n    font-size: 12px;\n    color: #FFFFFF;\n    font-weight: bold;\n    line-height: 18px;\n    top: 10px;\n    left: 7px; }\n  .navbar .navbar-nav .dropdown-toggle:after {\n    display: inline-block;\n    width: 0;\n    height: 0;\n    margin-left: 5px;\n    margin-top: 20px;\n    vertical-align: middle;\n    border-top: 4px dashed;\n    border-top: 4px solid\\9;\n    border-right: 4px solid transparent;\n    border-left: 4px solid transparent; }\n  .navbar .btn {\n    margin: 15px 3px;\n    font-size: 14px; }\n  .navbar .btn-simple {\n    font-size: 16px; }\n  .navbar.fixed {\n    width: calc(100% - calc(100% - 260px));\n    right: 0;\n    left: auto;\n    border-radius: 0; }\n  .navbar .nc-icon {\n    font-weight: 700;\n    margin-top: 10px; }\n\n.navbar-transparent .navbar-brand, [class*=\"navbar-ct\"] .navbar-brand {\n  color: #FFFFFF;\n  opacity: 0.9;\n  filter: alpha(opacity=90); }\n  .navbar-transparent .navbar-brand:focus, .navbar-transparent .navbar-brand:hover, [class*=\"navbar-ct\"] .navbar-brand:focus, [class*=\"navbar-ct\"] .navbar-brand:hover {\n    background-color: transparent;\n    opacity: 1;\n    filter: alpha(opacity=100);\n    color: #FFFFFF; }\n\n.navbar-transparent .navbar-nav .nav-item .nav-link:not(.btn), [class*=\"navbar-ct\"] .navbar-nav .nav-item .nav-link:not(.btn) {\n  color: #FFFFFF;\n  border-color: #FFFFFF;\n  opacity: 0.8;\n  filter: alpha(opacity=80); }\n\n.navbar-transparent .navbar-nav .active .nav-link:not(.btn),\n.navbar-transparent .navbar-nav .active .nav-link:hover:not(.btn),\n.navbar-transparent .navbar-nav .active .nav-link:focus:not(.btn),\n.navbar-transparent .navbar-nav .nav-item .nav-link:not(.btn),\n.navbar-transparent .navbar-nav .nav-item .nav-link:hover:not(.btn),\n.navbar-transparent .navbar-nav .nav-item .nav-link:focus:not(.btn), [class*=\"navbar-ct\"] .navbar-nav .active .nav-link:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav .active .nav-link:hover:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav .active .nav-link:focus:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav .nav-item .nav-link:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav .nav-item .nav-link:hover:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav .nav-item .nav-link:focus:not(.btn) {\n  background-color: transparent;\n  border-radius: 3px;\n  color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.navbar-transparent .navbar-nav .nav .nav-item .nav-link.btn:hover, [class*=\"navbar-ct\"] .navbar-nav .nav .nav-item .nav-link.btn:hover {\n  background-color: transparent; }\n\n.navbar-transparent .navbar-nav .show .nav-link,\n.navbar-transparent .navbar-nav .show .nav-link:hover,\n.navbar-transparent .navbar-nav .show .nav-link:focus, [class*=\"navbar-ct\"] .navbar-nav .show .nav-link,\n[class*=\"navbar-ct\"] .navbar-nav .show .nav-link:hover,\n[class*=\"navbar-ct\"] .navbar-nav .show .nav-link:focus {\n  background-color: transparent;\n  color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.navbar-transparent .btn-default, [class*=\"navbar-ct\"] .btn-default {\n  color: #FFFFFF;\n  border-color: #FFFFFF; }\n\n.navbar-transparent .btn-default.btn-fill, [class*=\"navbar-ct\"] .btn-default.btn-fill {\n  color: #9A9A9A;\n  background-color: #FFFFFF;\n  opacity: 0.9;\n  filter: alpha(opacity=90); }\n\n.navbar-transparent .btn-default.btn-fill:hover,\n.navbar-transparent .btn-default.btn-fill:focus,\n.navbar-transparent .btn-default.btn-fill:active,\n.navbar-transparent .btn-default.btn-fill.active,\n.navbar-transparent .show .dropdown-toggle.btn-fill.btn-default, [class*=\"navbar-ct\"] .btn-default.btn-fill:hover,\n[class*=\"navbar-ct\"] .btn-default.btn-fill:focus,\n[class*=\"navbar-ct\"] .btn-default.btn-fill:active,\n[class*=\"navbar-ct\"] .btn-default.btn-fill.active,\n[class*=\"navbar-ct\"] .show .dropdown-toggle.btn-fill.btn-default {\n  border-color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n\n.navbar-transparent .dropdown-menu .divider {\n  background-color: rgba(255, 255, 255, 0.2); }\n\n.navbar-default {\n  background-color: rgba(255, 255, 255, 0.96);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  .navbar-default .navbar-nav .nav-item .nav-link:not(.btn) {\n    color: #9A9A9A; }\n  .navbar-default .navbar-nav .active .nav-link,\n  .navbar-default .navbar-nav .active .nav-link:not(.btn):hover,\n  .navbar-default .navbar-nav .active .nav-link:not(.btn):focus,\n  .navbar-default .navbar-nav .nav-item .nav-link:not(.btn):hover,\n  .navbar-default .navbar-nav .nav-item .nav-link:not(.btn):focus {\n    background-color: transparent;\n    border-radius: 3px;\n    color: #1DC7EA;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n  .navbar-default .navbar-nav .show .nav-link,\n  .navbar-default .navbar-nav .show .nav-link:hover,\n  .navbar-default .navbar-nav .show .nav-link:focus {\n    background-color: transparent;\n    color: #1DC7EA; }\n  .navbar-default .navbar-nav .navbar-toggle:hover, .navbar-default .navbar-nav .navbar-toggle:focus {\n    background-color: transparent; }\n  .navbar-default:not(.navbar-transparent) .btn-default:hover {\n    color: #1DC7EA;\n    border-color: #1DC7EA; }\n  .navbar-default:not(.navbar-transparent) .btn-neutral,\n  .navbar-default:not(.navbar-transparent) .btn-neutral:hover,\n  .navbar-default:not(.navbar-transparent) .btn-neutral:active {\n    color: #9A9A9A; }\n\n/*      Navbar with icons            */\n.navbar-icons.navbar .navbar-brand {\n  margin-top: 12px;\n  margin-bottom: 12px; }\n\n.navbar-icons .navbar-nav .nav-item .nav-link {\n  text-align: center;\n  padding: 6px 15px;\n  margin: 6px 3px; }\n\n.navbar-icons .navbar-nav [class^=\"pe\"] {\n  font-size: 30px;\n  position: relative; }\n\n.navbar-icons .navbar-nav p {\n  margin: 3px 0 0; }\n\n.navbar-form {\n  box-shadow: none; }\n  .navbar-form .form-control {\n    border-radius: 0;\n    border: 0;\n    padding: 0;\n    background-color: transparent;\n    height: 22px;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #E3E3E3; }\n  .navbar-transparent .navbar-form .form-control,\n  [class*=\"navbar-ct\"] .navbar-form .form-control {\n    color: #FFFFFF;\n    border: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.6); }\n\n.navbar-ct-blue {\n  background-color: #4091e2; }\n\n.navbar-ct-azure {\n  background-color: #63d8f1; }\n\n.navbar-ct-green {\n  background-color: #a1e82c; }\n\n.navbar-ct-orange {\n  background-color: #ffbc67; }\n\n.navbar-ct-red {\n  background-color: #fc727a; }\n\n.navbar-transparent {\n  padding-top: 15px;\n  background-color: transparent;\n  border-bottom: 1px solid transparent; }\n\n.navbar-toggle {\n  margin-top: 19px;\n  margin-bottom: 19px;\n  border: 0; }\n  .navbar-toggle .icon-bar {\n    background-color: #FFFFFF; }\n  .navbar-toggle .navbar-collapse,\n  .navbar-toggle .navbar-form {\n    border-color: transparent; }\n  .navbar-toggle.navbar-default .navbar-toggle:hover,\n  .navbar-toggle.navbar-default .navbar-toggle:focus {\n    background-color: transparent; }\n\n.footer {\n  background-color: #FFFFFF; }\n  .footer .footer-menu {\n    height: 41px; }\n  .footer nav > ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-weight: normal; }\n    .footer nav > ul a:not(.btn) {\n      color: #9A9A9A;\n      display: block;\n      margin-bottom: 3px; }\n      .footer nav > ul a:not(.btn):hover, .footer nav > ul a:not(.btn):focus {\n        color: #777777; }\n  .footer .social-area {\n    padding: 15px 0; }\n    .footer .social-area h5 {\n      padding-bottom: 15px; }\n  .footer .social-area > a:not(.btn) {\n    color: #9A9A9A;\n    display: inline-block;\n    vertical-align: top;\n    padding: 10px 5px;\n    font-size: 20px;\n    font-weight: normal;\n    line-height: 20px;\n    text-align: center; }\n    .footer .social-area > a:not(.btn):hover, .footer .social-area > a:not(.btn):focus {\n      color: #777777; }\n  .footer .copyright {\n    color: #777777;\n    padding: 10px 15px;\n    margin: 10px 3px;\n    line-height: 20px;\n    font-size: 14px; }\n  .footer hr {\n    border-color: #DDDDDD; }\n  .footer .title {\n    color: #777777; }\n\n.footer-default {\n  background-color: #F5F5F5; }\n\n.footer:not(.footer-big) nav > ul {\n  font-size: 14px; }\n  .footer:not(.footer-big) nav > ul li {\n    margin-left: 20px;\n    float: left; }\n  .footer:not(.footer-big) nav > ul a {\n    padding: 10px 0px;\n    margin: 10px 10px 10px 0px; }\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2015 Daniel Eden\n*/\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both; }\n\n.animated.infinite {\n  animation-iteration-count: infinite; }\n\n.animated.hinge {\n  animation-duration: 2s; }\n\n.animated.bounceIn,\n.animated.bounceOut {\n  animation-duration: .75s; }\n\n.animated.flipOutX,\n.animated.flipOutY {\n  animation-duration: .75s; }\n\n@keyframes shake {\n  from, to {\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    transform: translate3d(10px, 0, 0); } }\n\n.shake {\n  animation-name: shake; }\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0); }\n  to {\n    opacity: 1;\n    transform: none; } }\n\n.fadeInDown {\n  animation-name: fadeInDown; }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.fadeOut {\n  animation-name: fadeOut; }\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0); } }\n\n.fadeOutDown {\n  animation-name: fadeOutDown; }\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0); } }\n\n.fadeOutUp {\n  animation-name: fadeOutUp; }\n\n.dropdown-menu {\n  visibility: hidden;\n  margin: 0;\n  padding: 0;\n  border-radius: 10px;\n  display: block;\n  z-index: 9000;\n  position: absolute;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.125); }\n  .show .dropdown-menu {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    visibility: visible; }\n  .select .dropdown-menu {\n    border-radius: 0 0 10px 10px;\n    box-shadow: none;\n    transform-origin: 50% -40px;\n    transform: scale(1);\n    transition: all 150ms linear;\n    margin-top: -20px; }\n  .select.show .dropdown-menu {\n    margin-top: -1px; }\n  .dropdown-menu .dropdown-item {\n    padding: 8px 16px;\n    color: #333333; }\n    .dropdown-menu .dropdown-item img {\n      margin-top: -3px; }\n  .dropdown-menu .dropdown-item:focus {\n    outline: 0 !important; }\n  .btn-group.select .dropdown-menu {\n    min-width: 100%; }\n  .dropdown-menu > li:first-child > a {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px; }\n  .dropdown-menu > li:last-child > a {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px; }\n  .select .dropdown-menu > li:first-child > a {\n    border-radius: 0;\n    border-bottom: 0 none; }\n  .dropdown-menu .dropdown-item:hover,\n  .dropdown-menu .dropdown-item:focus {\n    background-color: #F5F5F5;\n    color: #333333;\n    opacity: 1;\n    text-decoration: none; }\n  .dropdown-menu.dropdown-blue > li > a:hover,\n  .dropdown-menu.dropdown-blue > li > a:focus {\n    background-color: rgba(52, 114, 247, 0.2); }\n  .dropdown-menu.dropdown-azure > li > a:hover,\n  .dropdown-menu.dropdown-azure > li > a:focus {\n    background-color: rgba(29, 199, 234, 0.2); }\n  .dropdown-menu.ct-green > li > a:hover,\n  .dropdown-menu.ct-green > li > a:focus {\n    background-color: rgba(135, 203, 22, 0.2); }\n  .dropdown-menu.dropdown-orange > li > a:hover,\n  .dropdown-menu.dropdown-orange > li > a:focus {\n    background-color: rgba(255, 149, 0, 0.2); }\n  .dropdown-menu.dropdown-red > li > a:hover,\n  .dropdown-menu.dropdown-red > li > a:focus {\n    background-color: rgba(255, 74, 85, 0.2); }\n  .dropdown-menu .dropdown-item i[class*=\"nc-icon\"] {\n    font-size: 18px;\n    text-align: center;\n    line-height: 25px;\n    float: left;\n    padding-right: 10px; }\n  .dropdown-menu.dropdown-menu-right:before, .dropdown-menu.dropdown-menu-right:after {\n    right: 12px !important;\n    left: auto !important; }\n\n.dropdown-with-icons > li > a {\n  padding-left: 0px;\n  line-height: 28px; }\n\n.dropdown-with-icons i {\n  text-align: center;\n  line-height: 28px;\n  float: left; }\n  .dropdown-with-icons i[class^=\"pe-\"] {\n    font-size: 24px;\n    width: 46px; }\n  .dropdown-with-icons i[class^=\"fa\"], .dropdown-with-icons i[class^=\"fas\"], .dropdown-with-icons i[class^=\"far\"], .dropdown-with-icons i[class^=\"fal\"], .dropdown-with-icons i[class^=\"fad\"], .dropdown-with-icons i[class^=\"fab\"] {\n    font-size: 14px;\n    width: 38px; }\n\n.btn-group.select {\n  overflow: hidden; }\n\n.btn-group.select.show {\n  overflow: visible; }\n\n.card {\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  margin-bottom: 30px; }\n  .card .card-image {\n    width: 100%;\n    overflow: hidden;\n    height: 260px;\n    border-radius: 4px 4px 0 0;\n    position: relative;\n    transform-style: preserve-3d; }\n    .card .card-image img {\n      width: 100%; }\n  .card .filter {\n    position: absolute;\n    z-index: 2;\n    background-color: rgba(0, 0, 0, 0.68);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    opacity: 0;\n    filter: alpha(opacity=0); }\n    .card .filter .btn {\n      position: relative;\n      top: 50%;\n      transform: translateY(-50%); }\n  .card:hover .filter {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n  .card .btn-hover {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .card:hover .btn-hover {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n  .card .card-body {\n    padding: 15px 15px 10px 15px; }\n  .card .card-header {\n    padding: 15px 15px 0;\n    background-color: #FFFFFF;\n    border-bottom: none !important; }\n  .card .card-category,\n  .card label {\n    font-size: 14px;\n    font-weight: 400;\n    color: #9A9A9A;\n    margin-bottom: 0px; }\n    .card .card-category i,\n    .card label i {\n      font-size: 16px; }\n  .card label {\n    font-size: 12px;\n    margin-bottom: 5px;\n    text-transform: uppercase; }\n  .card .card-title {\n    margin: 0;\n    color: #333333;\n    font-weight: 300; }\n  .card .avatar {\n    width: 30px;\n    height: 30px;\n    overflow: hidden;\n    border-radius: 50%;\n    margin-right: 5px; }\n  .card .description {\n    font-size: 14px;\n    color: #333; }\n  .card .card-footer {\n    padding-top: 0;\n    background-color: transparent;\n    line-height: 30px;\n    border-top: none !important;\n    font-size: 14px; }\n    .card .card-footer .legend {\n      padding: 5px 0; }\n    .card .card-footer hr {\n      margin-top: 5px;\n      margin-bottom: 5px; }\n  .card .stats {\n    color: #a9a9a9; }\n  .card .card-footer div {\n    display: inline-block; }\n  .card .author {\n    font-size: 12px;\n    font-weight: 600;\n    text-transform: uppercase; }\n  .card .author i {\n    font-size: 14px; }\n  .card h6 {\n    font-size: 12px;\n    margin: 0; }\n  .card.card-separator:after {\n    height: 100%;\n    right: -15px;\n    top: 0;\n    width: 1px;\n    background-color: #DDDDDD;\n    card-body: \"\";\n    position: absolute; }\n  .card .ct-chart {\n    margin: 30px 0 30px;\n    height: 245px; }\n  .card .ct-label {\n    font-size: 1rem !important; }\n  .card .table tbody td:first-child,\n  .card .table thead th:first-child {\n    padding-left: 15px; }\n  .card .table tbody td:last-child,\n  .card .table thead th:last-child {\n    padding-right: 15px; }\n  .card .alert {\n    border-radius: 4px;\n    position: relative; }\n    .card .alert.alert-with-icon {\n      padding-left: 65px; }\n\n.card-stats .card-body {\n  padding: 15px 15px 0px; }\n  .card-stats .card-body .numbers {\n    font-size: 1.8rem;\n    text-align: right; }\n    .card-stats .card-body .numbers p {\n      margin-bottom: 0; }\n\n.card-stats .card-footer {\n  padding: 0px 15px 10px 15px; }\n\n.card-stats .icon-big {\n  font-size: 3em;\n  min-height: 64px; }\n  .card-stats .icon-big i {\n    font-weight: 700;\n    line-height: 59px; }\n\n.card-user .card-image {\n  height: 110px; }\n\n.card-user .card-image-plain {\n  height: 0;\n  margin-top: 110px; }\n\n.card-user .author {\n  text-align: center;\n  text-transform: none;\n  margin-top: -70px; }\n\n.card-user .avatar {\n  width: 124px;\n  height: 124px;\n  border: 5px solid #FFFFFF;\n  position: relative;\n  margin-bottom: 15px; }\n  .card-user .avatar.border-gray {\n    border-color: #EEEEEE; }\n\n.card-user .title {\n  line-height: 24px; }\n\n.card-user .card-body {\n  min-height: 240px; }\n\n.card-user .card-footer,\n.card-price .card-footer {\n  padding: 5px 15px 10px; }\n\n.card-user hr,\n.card-price hr {\n  margin: 5px 15px; }\n\n.card-plain {\n  background-color: transparent;\n  box-shadow: none;\n  border-radius: 0; }\n  .card-plain .card-image {\n    border-radius: 4px; }\n\n.card.card-plain {\n  border: none !important; }\n  .card.card-plain .card-header {\n    background-color: transparent !important; }\n\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 1.3rem;\n  line-height: 1; }\n\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: flex; }\n\n.ct-label.ct-horizontal.ct-start {\n  align-items: flex-end;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-label.ct-horizontal.ct-end {\n  align-items: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-label.ct-vertical.ct-start {\n  align-items: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n\n.ct-label.ct-vertical.ct-end {\n  align-items: flex-end;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  align-items: flex-end;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  align-items: flex-start;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  align-items: flex-end;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  align-items: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  align-items: center;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  align-items: center;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end; }\n\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px; }\n\n.ct-point {\n  stroke-width: 8px;\n  stroke-linecap: round; }\n\n.ct-line {\n  fill: none;\n  stroke-width: 3px; }\n\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.8; }\n\n.ct-bar {\n  fill: none;\n  stroke-width: 10px; }\n\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px; }\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #1DC7EA; }\n\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #1DC7EA; }\n\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #FB404B; }\n\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #FB404B; }\n\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #FFA534; }\n\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #FFA534; }\n\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #9368E9; }\n\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #9368E9; }\n\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #87CB16; }\n\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #87CB16; }\n\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #1F77D0; }\n\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: #1F77D0; }\n\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #5e5e5e; }\n\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: #5e5e5e; }\n\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #dd4b39; }\n\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: #dd4b39; }\n\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #35465c; }\n\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: #35465c; }\n\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #e52d27; }\n\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: #e52d27; }\n\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #55acee; }\n\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: #55acee; }\n\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #cc2127; }\n\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: #cc2127; }\n\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #1769ff; }\n\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: #1769ff; }\n\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2; }\n\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: #6188e2; }\n\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca; }\n\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: #a748ca; }\n\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-square:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 100%; }\n  .ct-square:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-square > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 93.75%; }\n  .ct-minor-second:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 88.88889%; }\n  .ct-major-second:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 83.33333%; }\n  .ct-minor-third:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 80%; }\n  .ct-major-third:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-perfect-fourth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 75%; }\n  .ct-perfect-fourth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-perfect-fourth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-perfect-fifth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 66.66667%; }\n  .ct-perfect-fifth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-perfect-fifth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 62.5%; }\n  .ct-minor-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-golden-section:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 61.8047%; }\n  .ct-golden-section:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-golden-section > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 60%; }\n  .ct-major-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 56.25%; }\n  .ct-minor-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 53.33333%; }\n  .ct-major-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 50%; }\n  .ct-octave:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-tenth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 40%; }\n  .ct-major-tenth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-tenth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-eleventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 37.5%; }\n  .ct-major-eleventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-eleventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-twelfth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 33.33333%; }\n  .ct-major-twelfth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-twelfth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-double-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 25%; }\n  .ct-double-octave:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-double-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n@media (min-width: 992px) {\n  .navbar-form {\n    margin-top: 21px;\n    margin-bottom: 21px;\n    padding-left: 5px;\n    padding-right: 5px; }\n  .navbar-nav .nav-item .dropdown-menu, .dropdown .dropdown-menu {\n    transform: scale(0);\n    transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1); }\n  .navbar-nav .nav-item.show .dropdown-menu, .dropdown.show .dropdown-menu {\n    transform: scale(1);\n    transform-origin: 29px -50px; }\n  .footer {\n    height: 60px; }\n    .footer .footer-menu {\n      float: left; }\n    .footer .copyright {\n      float: right; }\n  .navbar-nav .nav-item .dropdown-menu:before {\n    border-bottom: 11px solid rgba(0, 0, 0, 0.2);\n    border-left: 11px solid rgba(0, 0, 0, 0);\n    border-right: 11px solid rgba(0, 0, 0, 0);\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    left: 12px;\n    top: -11px; }\n  .navbar-nav .nav-item .dropdown-menu:after {\n    border-bottom: 11px solid #FFFFFF;\n    border-left: 11px solid rgba(0, 0, 0, 0);\n    border-right: 11px solid rgba(0, 0, 0, 0);\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    left: 12px;\n    top: -10px; }\n  .navbar-nav.navbar-right .nav-item .dropdown-menu:before {\n    left: auto;\n    right: 12px; }\n  .navbar-nav.navbar-right .nav-item .dropdown-menu:after {\n    left: auto;\n    right: 12px; }\n  .footer:not(.footer-big) nav > ul li:first-child {\n    margin-left: 0; }\n  .card form [class*=\"col-\"] {\n    padding: 6px; }\n  .card form [class*=\"col-\"]:first-child {\n    padding-left: 15px; }\n  .card form [class*=\"col-\"]:last-child {\n    padding-right: 15px; } }\n\n/*          Changes for small display      */\n@media (max-width: 991px) {\n  .sidebar {\n    right: 0 !important;\n    left: auto;\n    position: absolute;\n    transform: translate3d(262px, 0, 0) !important;\n    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n  .nav-open .main-panel {\n    position: absolute;\n    left: 0;\n    transform: translate3d(-250px, 0, 0) !important;\n    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n  .nav-open .sidebar {\n    transform: translate3d(10px, 0, 0) !important;\n    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n  .main-panel {\n    transform: translate3d(0px, 0, 0) !important;\n    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n  .nav-item.active-pro {\n    position: relative !important; }\n  .nav-mobile-menu {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    margin-bottom: 15px;\n    padding-bottom: 15px;\n    padding-top: 5px; }\n    .nav-mobile-menu .dropdown .dropdown-menu {\n      position: static !important;\n      float: none;\n      width: auto;\n      color: #FFFFFF;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none;\n      transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n      .nav-mobile-menu .dropdown .dropdown-menu .dropdown-item {\n        margin: 5px 15px 0px 40px;\n        border-radius: 4px;\n        color: #FFFFFF;\n        opacity: .86;\n        padding: 8px 50px; }\n        .nav-mobile-menu .dropdown .dropdown-menu .dropdown-item:hover {\n          background-color: rgba(255, 255, 255, 0.23); }\n    .nav-mobile-menu .nav-item .nav-link span {\n      display: inline-block !important; }\n    .nav-mobile-menu .nav-item .nav-link .no-icon {\n      padding-left: 50px; }\n  .main-panel {\n    width: 100%; }\n  .navbar-brand {\n    padding: 15px 15px; }\n  .navbar-transparent {\n    padding-top: 15px;\n    background-color: rgba(0, 0, 0, 0.45); }\n  body {\n    position: relative; }\n  .wrapper {\n    left: 0;\n    background-color: white; }\n  .navbar .container {\n    left: 15px;\n    width: 100%;\n    position: relative;\n    top: -10px; }\n  .navbar-nav .nav-item {\n    float: none;\n    position: relative;\n    display: block; }\n  body > .navbar-collapse {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100%;\n    right: 0;\n    left: auto;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #999;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    padding: 0;\n    transform: translate3d(260px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n    body > .navbar-collapse > ul {\n      position: relative;\n      z-index: 4;\n      overflow-y: scroll;\n      height: calc(100vh - 61px);\n      width: 100%; }\n    body > .navbar-collapse::before {\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      background-color: #282828;\n      display: block;\n      content: \"\";\n      z-index: 1; }\n    body > .navbar-collapse .logo {\n      position: relative;\n      z-index: 4; }\n    body > .navbar-collapse .nav li > a {\n      padding: 10px 15px; }\n  .nav-show .navbar-collapse {\n    transform: translate3d(0px, 0, 0); }\n  .nav-show .navbar .container {\n    left: -250px; }\n  .nav-show .wrapper {\n    left: 0;\n    transform: translate3d(-260px, 0, 0); }\n  .navbar-toggle .icon-bar {\n    display: block;\n    position: relative;\n    background: #fff;\n    width: 24px;\n    height: 2px;\n    border-radius: 1px;\n    margin: 0 auto; }\n  .navbar-header .navbar-toggle {\n    margin: 10px 15px 10px 0;\n    width: 40px;\n    height: 40px; }\n  .bar1,\n  .bar2,\n  .bar3 {\n    outline: 1px solid transparent; }\n  .bar1 {\n    top: 0px;\n    animation: topbar-back 500ms 0s;\n    animation-fill-mode: forwards; }\n  .bar2 {\n    opacity: 1; }\n  .bar3 {\n    bottom: 0px;\n    animation: bottombar-back 500ms 0s;\n    animation-fill-mode: forwards; }\n  .toggled .bar1 {\n    top: 6px;\n    animation: topbar-x 500ms 0s;\n    animation-fill-mode: forwards; }\n  .toggled .bar2 {\n    opacity: 0; }\n  .toggled .bar3 {\n    bottom: 6px;\n    animation: bottombar-x 500ms 0s;\n    animation-fill-mode: forwards; }\n  @keyframes topbar-x {\n    0% {\n      top: 0px;\n      transform: rotate(0deg); }\n    45% {\n      top: 6px;\n      transform: rotate(145deg); }\n    75% {\n      transform: rotate(130deg); }\n    100% {\n      transform: rotate(135deg); } }\n  @keyframes topbar-back {\n    0% {\n      top: 6px;\n      transform: rotate(135deg); }\n    45% {\n      transform: rotate(-10deg); }\n    75% {\n      transform: rotate(5deg); }\n    100% {\n      top: 0px;\n      transform: rotate(0); } }\n  @keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      transform: rotate(0deg); }\n    45% {\n      bottom: 6px;\n      transform: rotate(-145deg); }\n    75% {\n      transform: rotate(-130deg); }\n    100% {\n      transform: rotate(-135deg); } }\n  @keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      transform: rotate(-135deg); }\n    45% {\n      transform: rotate(10deg); }\n    75% {\n      transform: rotate(-5deg); }\n    100% {\n      bottom: 0px;\n      transform: rotate(0); } }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  .dropdown-menu .divider {\n    background-color: rgba(229, 229, 229, 0.15); }\n  .navbar-nav {\n    margin: 1px 0; }\n    .navbar-nav .show .dropdown-menu .nav-item .nav-link {\n      padding: 10px 15px 10px 60px; }\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .active > a,\n  [class*=\"navbar-\"] .navbar-nav .active > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .active > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .show .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .show .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .show .dropdown-menu > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .show .dropdown-menu > li > a:active {\n    color: white; }\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus {\n    opacity: .7;\n    background-color: transparent;\n    outline: none; }\n  [class*=\"navbar-\"] .navbar-nav .show .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .show .dropdown-menu > li > a:focus {\n    background-color: rgba(255, 255, 255, 0.1); }\n  [class*=\"navbar-\"] .navbar-nav.navbar-nav .show .dropdown-menu > li > a:active {\n    opacity: 1; }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:hover .caret {\n    border-bottom-color: #fff;\n    border-top-color: #fff; }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:active .caret {\n    border-bottom-color: white;\n    border-top-color: white; }\n  .dropdown-menu {\n    display: none; }\n  .navbar-fixed-top {\n    -webkit-backface-visibility: hidden; }\n  #bodyClick {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: auto;\n    right: 250px;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden; }\n  .social-line .btn {\n    margin: 0 0 10px 0; }\n  .subscribe-line .form-control {\n    margin: 0 0 10px 0; }\n  .social-line.pull-right {\n    float: none; }\n  .social-area.pull-right {\n    float: none !important; }\n  .form-control + .form-control-feedback {\n    margin-top: -8px; }\n  .navbar-toggle:hover, .navbar-toggle:focus {\n    background-color: transparent !important; }\n  .btn.dropdown-toggle {\n    margin-bottom: 0; }\n  .media-post .author {\n    width: 20%;\n    float: none !important;\n    display: block;\n    margin: 0 auto 10px; }\n  .media-post .media-body {\n    width: 100%; }\n  .navbar-collapse.collapse.in {\n    display: block; }\n  .navbar-header .collapse, .navbar-toggle {\n    display: block !important; }\n  .navbar-header {\n    float: none; }\n  .navbar-nav .show .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none; }\n  .navbar-collapse .navbar-nav p {\n    line-height: 40px !important;\n    margin: 0; }\n  .navbar-collapse [class^=\"pe-7s-\"] {\n    float: left;\n    font-size: 20px;\n    margin-right: 10px; } }\n\n@media (min-width: 992px) {\n  .table-responsive {\n    overflow: visible; } }\n\n@media (max-width: 991px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    -webkit-overflow-scrolling: touch; } }\n\n.bootstrap-switch {\n  display: inline-block;\n  direction: ltr;\n  cursor: pointer;\n  border-radius: 30px;\n  border: 0;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n  margin-bottom: 5px;\n  margin-left: 66px;\n  line-height: 8px;\n  width: 61px !important;\n  height: 26px;\n  outline: none;\n  z-index: 0;\n  margin-right: 1px;\n  -webkit-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\n.bootstrap-switch .bootstrap-switch-container {\n  display: inline-flex;\n  top: 0;\n  height: 26px;\n  border-radius: 4px;\n  transform: translate3d(0, 0, 0);\n  width: 100px !important; }\n\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off,\n.bootstrap-switch .bootstrap-switch-label {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block !important;\n  height: 100%;\n  color: #fff;\n  padding: 6px 10px;\n  font-size: 11px;\n  text-indent: -5px;\n  line-height: 15px;\n  transition: 0.25s ease-out; }\n  .bootstrap-switch .bootstrap-switch-handle-on i,\n  .bootstrap-switch .bootstrap-switch-handle-off i,\n  .bootstrap-switch .bootstrap-switch-label i {\n    font-size: 12px;\n    line-height: 14px; }\n\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off {\n  text-align: center;\n  z-index: 1;\n  float: left;\n  width: 50% !important;\n  background-color: #1DC7EA; }\n\n.bootstrap-switch .bootstrap-switch-label {\n  text-align: center;\n  z-index: 100;\n  color: #333333;\n  background: #ffffff;\n  width: 22px !important;\n  height: 22px;\n  margin: 2px -11px;\n  border-radius: 12px;\n  position: relative;\n  float: left;\n  padding: 0;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 1px #FFFFFF inset, 0 1px 1px rgba(0, 0, 0, 0.25); }\n\n.bootstrap-switch .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.bootstrap-switch .bootstrap-switch-handle-off {\n  text-indent: 6px; }\n\n.bootstrap-switch input[type='radio'],\n.bootstrap-switch input[type='checkbox'] {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: -1; }\n\n.bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {\n  transition: margin-left 0.5s; }\n\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-container {\n  margin-left: -2px !important; }\n\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-container {\n  margin-left: -37px !important; }\n\n.bootstrap-switch.bootstrap-switch-on:hover .bootstrap-switch-label {\n  width: 26px !important;\n  margin: 2px -15px; }\n\n.bootstrap-switch.bootstrap-switch-off:hover .bootstrap-switch-label {\n  width: 26px !important;\n  margin: 2px -15px -13px -11px; }\n\n/*--------------------------------\n\nnucleo-icons Web Font - built using nucleoapp.com\nLicense - nucleoapp.com/license/\n\n-------------------------------- */\n@font-face {\n  font-family: 'nucleo-icons';\n  font-weight: normal;\n  font-style: normal; }\n\n/*------------------------\n\tbase class definition\n-------------------------*/\n.nc-icon {\n  display: inline-block;\n  font: normal normal normal 14px/1 'nucleo-icons';\n  font-size: inherit;\n  speak: none;\n  text-transform: none;\n  /* Better Font Rendering */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/*------------------------\n  change icon size\n-------------------------*/\n.nc-icon.lg {\n  font-size: 1.33333333em;\n  vertical-align: -16%; }\n\n.nc-icon.x2 {\n  font-size: 2em; }\n\n.nc-icon.x3 {\n  font-size: 3em; }\n\n/*----------------------------------\n  add a square/circle background\n-----------------------------------*/\n.nc-icon.square,\n.nc-icon.circle {\n  padding: 0.33333333em;\n  vertical-align: -16%;\n  background-color: #eee; }\n\n.nc-icon.circle {\n  border-radius: 50%; }\n\n/*------------------------\n  list icons\n-------------------------*/\n.nc-icon-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none; }\n\n.nc-icon-ul > li {\n  position: relative; }\n\n.nc-icon-ul > li > .nc-icon {\n  position: absolute;\n  left: -1.57142857em;\n  top: 0.14285714em;\n  text-align: center; }\n\n.nc-icon-ul > li > .nc-icon.lg {\n  top: 0;\n  left: -1.35714286em; }\n\n.nc-icon-ul > li > .nc-icon.circle,\n.nc-icon-ul > li > .nc-icon.square {\n  top: -0.19047619em;\n  left: -1.9047619em; }\n\n.all-icons .font-icon-list .font-icon-detail i {\n  font-size: 32px; }\n\n/*------------------------\n  spinning icons\n-------------------------*/\n.nc-icon.spin {\n  animation: nc-icon-spin 2s infinite linear; }\n\n@keyframes nc-icon-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n/*------------------------\n  rotated/flipped icons\n-------------------------*/\n.nc-icon.rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  transform: rotate(90deg); }\n\n.nc-icon.rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  transform: rotate(180deg); }\n\n.nc-icon.rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  transform: rotate(270deg); }\n\n.nc-icon.flip-y {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);\n  transform: scale(-1, 1); }\n\n.nc-icon.flip-x {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  transform: scale(1, -1); }\n\n/*------------------------\n\tfont icons\n-------------------------*/\n.nc-air-baloon::before {\n  content: \"\\ea01\"; }\n\n.nc-album-2::before {\n  content: \"\\ea02\"; }\n\n.nc-alien-33::before {\n  content: \"\\ea03\"; }\n\n.nc-align-center::before {\n  content: \"\\ea04\"; }\n\n.nc-align-left-2::before {\n  content: \"\\ea05\"; }\n\n.nc-ambulance::before {\n  content: \"\\ea06\"; }\n\n.nc-android::before {\n  content: \"\\ea07\"; }\n\n.nc-app::before {\n  content: \"\\ea08\"; }\n\n.nc-apple::before {\n  content: \"\\ea09\"; }\n\n.nc-atom::before {\n  content: \"\\ea0a\"; }\n\n.nc-attach-87::before {\n  content: \"\\ea0b\"; }\n\n.nc-audio-92::before {\n  content: \"\\ea0c\"; }\n\n.nc-backpack::before {\n  content: \"\\ea0d\"; }\n\n.nc-badge::before {\n  content: \"\\ea0e\"; }\n\n.nc-bag::before {\n  content: \"\\ea0f\"; }\n\n.nc-bank::before {\n  content: \"\\ea10\"; }\n\n.nc-battery-81::before {\n  content: \"\\ea11\"; }\n\n.nc-bell-55::before {\n  content: \"\\ea12\"; }\n\n.nc-bold::before {\n  content: \"\\ea13\"; }\n\n.nc-bulb-63::before {\n  content: \"\\ea14\"; }\n\n.nc-bullet-list-67::before {\n  content: \"\\ea15\"; }\n\n.nc-bus-front-12::before {\n  content: \"\\ea16\"; }\n\n.nc-button-pause::before {\n  content: \"\\ea17\"; }\n\n.nc-button-play::before {\n  content: \"\\ea18\"; }\n\n.nc-button-power::before {\n  content: \"\\ea19\"; }\n\n.nc-camera-20::before {\n  content: \"\\ea1a\"; }\n\n.nc-caps-small::before {\n  content: \"\\ea1b\"; }\n\n.nc-cart-simple::before {\n  content: \"\\ea1c\"; }\n\n.nc-cctv::before {\n  content: \"\\ea1d\"; }\n\n.nc-chart-bar-32::before {\n  content: \"\\ea1e\"; }\n\n.nc-chart-pie-35::before {\n  content: \"\\ea1f\"; }\n\n.nc-chart-pie-36::before {\n  content: \"\\ea20\"; }\n\n.nc-chart::before {\n  content: \"\\ea21\"; }\n\n.nc-chat-round::before {\n  content: \"\\ea22\"; }\n\n.nc-check-2::before {\n  content: \"\\ea23\"; }\n\n.nc-circle-09::before {\n  content: \"\\ea24\"; }\n\n.nc-circle::before {\n  content: \"\\ea25\"; }\n\n.nc-cloud-download-93::before {\n  content: \"\\ea26\"; }\n\n.nc-cloud-upload-94::before {\n  content: \"\\ea27\"; }\n\n.nc-compass-05::before {\n  content: \"\\ea28\"; }\n\n.nc-controller-modern::before {\n  content: \"\\ea29\"; }\n\n.nc-credit-card::before {\n  content: \"\\ea2a\"; }\n\n.nc-delivery-fast::before {\n  content: \"\\ea2b\"; }\n\n.nc-email-83::before {\n  content: \"\\ea2c\"; }\n\n.nc-email-85::before {\n  content: \"\\ea2d\"; }\n\n.nc-explore-2::before {\n  content: \"\\ea2e\"; }\n\n.nc-fav-remove::before {\n  content: \"\\ea2f\"; }\n\n.nc-favourite-28::before {\n  content: \"\\ea30\"; }\n\n.nc-globe-2::before {\n  content: \"\\ea31\"; }\n\n.nc-grid-45::before {\n  content: \"\\ea32\"; }\n\n.nc-headphones-2::before {\n  content: \"\\ea33\"; }\n\n.nc-html5::before {\n  content: \"\\ea34\"; }\n\n.nc-istanbul::before {\n  content: \"\\ea35\"; }\n\n.nc-key-25::before {\n  content: \"\\ea36\"; }\n\n.nc-layers-3::before {\n  content: \"\\ea37\"; }\n\n.nc-light-3::before {\n  content: \"\\ea38\"; }\n\n.nc-lock-circle-open::before {\n  content: \"\\ea39\"; }\n\n.nc-map-big::before {\n  content: \"\\ea3a\"; }\n\n.nc-mobile::before {\n  content: \"\\ea3c\"; }\n\n.nc-money-coins::before {\n  content: \"\\ea3b\"; }\n\n.nc-note-03::before {\n  content: \"\\ea3d\"; }\n\n.nc-notes::before {\n  content: \"\\ea3e\"; }\n\n.nc-notification-70::before {\n  content: \"\\ea3f\"; }\n\n.nc-palette::before {\n  content: \"\\ea40\"; }\n\n.nc-paper-2::before {\n  content: \"\\ea41\"; }\n\n.nc-pin-3::before {\n  content: \"\\ea42\"; }\n\n.nc-planet::before {\n  content: \"\\ea43\"; }\n\n.nc-preferences-circle-rotate::before {\n  content: \"\\ea44\"; }\n\n.nc-puzzle-10::before {\n  content: \"\\ea45\"; }\n\n.nc-quote::before {\n  content: \"\\ea46\"; }\n\n.nc-refresh-02::before {\n  content: \"\\ea47\"; }\n\n.nc-ruler-pencil::before {\n  content: \"\\ea48\"; }\n\n.nc-satisfied::before {\n  content: \"\\ea49\"; }\n\n.nc-scissors::before {\n  content: \"\\ea4a\"; }\n\n.nc-send::before {\n  content: \"\\ea4b\"; }\n\n.nc-settings-90::before {\n  content: \"\\ea4c\"; }\n\n.nc-settings-gear-64::before {\n  content: \"\\ea4d\"; }\n\n.nc-settings-tool-66::before {\n  content: \"\\ea4e\"; }\n\n.nc-simple-add::before {\n  content: \"\\ea4f\"; }\n\n.nc-simple-delete::before {\n  content: \"\\ea50\"; }\n\n.nc-simple-remove::before {\n  content: \"\\ea51\"; }\n\n.nc-single-02::before {\n  content: \"\\ea52\"; }\n\n.nc-single-copy-04::before {\n  content: \"\\ea53\"; }\n\n.nc-spaceship::before {\n  content: \"\\ea54\"; }\n\n.nc-square-pin::before {\n  content: \"\\ea55\"; }\n\n.nc-stre-down::before {\n  content: \"\\ea56\"; }\n\n.nc-stre-left::before {\n  content: \"\\ea57\"; }\n\n.nc-stre-right::before {\n  content: \"\\ea58\"; }\n\n.nc-stre-up::before {\n  content: \"\\ea59\"; }\n\n.nc-sun-fog-29::before {\n  content: \"\\ea5a\"; }\n\n.nc-support-17::before {\n  content: \"\\ea5b\"; }\n\n.nc-tablet-2::before {\n  content: \"\\ea5c\"; }\n\n.nc-tag-content::before {\n  content: \"\\ea5d\"; }\n\n.nc-tap-01::before {\n  content: \"\\ea5e\"; }\n\n.nc-time-alarm::before {\n  content: \"\\ea5f\"; }\n\n.nc-tv-2::before {\n  content: \"\\ea60\"; }\n\n.nc-umbrella-13::before {\n  content: \"\\ea61\"; }\n\n.nc-vector::before {\n  content: \"\\ea62\"; }\n\n.nc-watch-time::before {\n  content: \"\\ea63\"; }\n\n.nc-zoom-split::before {\n  content: \"\\ea64\"; }\n\n/* all icon font classes list here */\n.rna-container .alert {\n  border-radius: 4px; }\n  .rna-container .alert button.close {\n    color: #000;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .rna-container .alert button.close span {\n      margin-top: -4px; }\n\n.sidebar[data-color=\"black\"]:after {\n  background: #282828;\n  background: linear-gradient(to bottom, #282828 0%, rgba(17, 17, 17, 0.7) 100%);\n  background-size: 150% 150%; }\n\n.sidebar .logo-img img {\n  max-width: 40px;\n  max-height: 40px; }\n\n@media (max-width: 991px) {\n  .sidebar .nav > li.active.active-pro {\n    position: relative;\n    bottom: unset; } }\n\n#bodyClick {\n  position: absolute; }\n", "",{"version":3,"sources":["webpack://src/assets/scss/light-bootstrap-dashboard-react.scss","webpack://src/assets/scss/lbd/_variables.scss","webpack://src/assets/scss/lbd/mixins/_morphing-buttons.scss","webpack://src/assets/scss/lbd/_typography.scss","webpack://src/assets/scss/lbd/_misc.scss","webpack://src/assets/scss/lbd/mixins/_vendor-prefixes.scss","webpack://src/assets/scss/lbd/_sidebar-and-main-panel.scss","webpack://src/assets/scss/lbd/_buttons.scss","webpack://src/assets/scss/lbd/mixins/_transparency.scss","webpack://src/assets/scss/lbd/mixins/_buttons.scss","webpack://src/assets/scss/lbd/_inputs.scss","webpack://src/assets/scss/lbd/mixins/_inputs.scss","webpack://src/assets/scss/lbd/_alerts.scss","webpack://src/assets/scss/lbd/_tables.scss","webpack://src/assets/scss/lbd/_checkbox-radio-switch.scss","webpack://src/assets/scss/lbd/_navbars.scss","webpack://src/assets/scss/lbd/mixins/_navbars.scss","webpack://src/assets/scss/lbd/_footers.scss","webpack://src/assets/scss/lbd/plugins/_animate.scss","webpack://src/assets/scss/lbd/_dropdown.scss","webpack://src/assets/scss/lbd/_cards.scss","webpack://src/assets/scss/lbd/_chartist.scss","webpack://src/assets/scss/lbd/mixins/_chartist.scss","webpack://src/assets/scss/lbd/_responsive.scss","webpack://src/assets/scss/lbd/_bootstrap-switch.scss","webpack://src/assets/scss/lbd/_partial-nucleo-icons.scss","webpack://src/assets/scss/lbdr/plugins/_react-notification-alert.scss","webpack://src/assets/scss/lbdr/_sidebar-and-main-panel.scss"],"names":[],"mappings":"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BlC,cR8BkC,EAAA;EQ5BlC;;IAKE,6BRaoC;IQZpC,cRwBgC;IQvBhC,qBRuBgC,EAAA;EQhBhC;;;;;;;IAME,6BRFkC;IQG9B,qBRO0B,EAAA;EQFlC;IACE,cRxBgC;IQyBhC,yBRAgC;IO9BlC,UC+BoB;ID5BpB,0BAAQ,EAAA;IC8BN;;MAKI,yBRN4B;MQO5B,cRlC4B,EAAA;IQqChC;MACI,yBRtC4B,EAAA;EQ0ClC;IACI,yBRlB8B,EAAA;;AMApC;EE/BE,qBRmCkC;EQlClC,cRkCkC,EAAA;EQhClC;;IAKE,6BRaoC;IQZpC,cR4BiD;IQ3BjD,qBR2BiD,EAAA;EQpBjD;;;;;;;IAME,6BRFkC;IQG9B,qBRW0B,EAAA;EQNlC;IACE,cRxBgC;IQyBhC,yBRIgC;IOlClC,UC+BoB;ID5BpB,0BAAQ,EAAA;IC8BN;;MAKI,yBRF6C;MQG7C,cRlC4B,EAAA;IQqChC;MACI,yBRtC4B,EAAA;EQ0ClC;IACI,yBRd8B,EAAA;;AMHpC;EEhCE,qBRuCkC;EQtClC,cRsCkC,EAAA;EQpClC;;IAKE,6BRaoC;IQZpC,cRgCgC;IQ/BhC,qBR+BgC,EAAA;EQxBhC;;;;;;;IAME,6BRFkC;IQG9B,qBRe0B,EAAA;EQVlC;IACE,cRxBgC;IQyBhC,yBRQgC;IOtClC,UC+BoB;ID5BpB,0BAAQ,EAAA;IC8BN;;MAKI,yBRE4B;MQD5B,cRlC4B,EAAA;IQqChC;MACI,yBRtC4B,EAAA;EQ0ClC;IACI,yBRV8B,EAAA;;AMNpC;EEjCE,qBR4CkC;EQ3ClC,cR2CkC,EAAA;EQzClC;;IAKE,6BRaoC;IQZpC,cRqCgC;IQpChC,qBRoCgC,EAAA;EQ7BhC;;;;;;;IAME,6BRFkC;IQG9B,qBRoB0B,EAAA;EQflC;IACE,cRxBgC;IQyBhC,yBRagC;IO3ClC,UC+BoB;ID5BpB,0BAAQ,EAAA;IC8BN;;MAKI,yBRO4B;MQN5B,cRlC4B,EAAA;IQqChC;MACI,yBRtC4B,EAAA;EQ0ClC;IACI,yBRL8B,EAAA;;AMVpC;EElCE,qBRMkC;EQLlC,cRKkC,EAAA;EQHlC;;IAKE,6BRaoC;IQZpC,cRHgC;IQIhC,qBRJgC,EAAA;EQWhC;;;;;;;IAME,6BRFkC;IQG9B,qBRlB0B,EAAA;EQuBlC;IACE,cRxBgC;IQyBhC,yBRzBgC;IOLlC,UC+BoB;ID5BpB,0BAAQ,EAAA;IC8BN;;MAKI,yBRjC4B;MQkC5B,cRlC4B,EAAA;IQqChC;MACI,yBRtC4B,EAAA;EQ0ClC;IACI,yBR3C8B,EAAA;EM4BpC;;IAMS,yBNlC2B;IMmC3B,cNlB2B,EAAA;EMWpC;IAaQ,cNxB4B,EAAA;EMWpC;IAkBQ,6BAA6B,EAAA;;AAIrC;ECvDE,YD2DyB;ECxDzB,yBAAQ,EAAA;;AD2DV;EACI,iBN7D4B;EM8D5B,8BAA2C;EAC3C,iBNE+B,EAAA;EMLnC;IAMQ,YNF2B,EAAA;;AMKnC;EACI,SNvE0B;EMwE1B,eN+B+B;EM9B/B,iBNV+B,EAAA;EMOnC;IAMQ,YNd2B,EAAA;;AMiBnC;EE1BG,eRmDgC;EQlDhC,kBRqCgC;EQpChC,kBRiBgC;EMShC,gBNqC6B,EAAA;EQ7D7B;IACI,kBRc4B,EAAA;EQXhC;IACI,kBRU4B,EAAA;;AMWnC;EE9BG,eRiDgC;EQhDhC,kBRmCgC;EQlChC,iBRoBgC,EAAA;EQlBhC;IACI,iBRiB4B,EAAA;EQdhC;IACI,iBRa4B,EAAA;;AMWnC;EEjCG,eRiDgC;EQhDhC,kBRmCgC;EQlChC,gBRuBgC,EAAA;EQrBhC;IACI,gBRoB4B,EAAA;EQjBhC;IACI,gBRgB4B,EAAA;;AMWnC;EACI,gBAAgB,EAAA;;AAGpB;EACI,WAAW,EAAA;;AAEf;EACI,gBAAgB,EAAA;;AAEpB;EACI,kBAAkB;EAClB,QAAQ;EACR,gBAAgB;EAChB,UAAU,EAAA;;AAEd;EACI,aAAa,EAAA;;AAGjB;EACI,qBN4GuB;EM3GvB,cN2GuB,EAAA;EM7G3B;IAIQ,qBAAqB;IACrB,qBNwGmB;IMvGnB,cNuGmB,EAAA;;AMpG3B;EACI,qBNkGwB;EMjGxB,cNiGwB,EAAA;EMnG5B;IAKQ,qBAAqB;IACrB,qBN6FoB;IM5FpB,cN4FoB,EAAA;;AS7N5B;ECMG,cVaiC;EOhBlC,UGImB;EHDnB,0BAAQ,EAAA;;AEHV;ECGG,cVaiC;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B,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAGpB;EACI,gBAAgB,EAAA;;AAIpB,oCAAA;AC7jBA;EAEI,kBAAkB,EAAA;EAFtB;IAIM,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB,EAAA;IAPzB;MASQ,gBAAgB,EAAA;;ACTxB;EtBgFI,mBsB9EkC;EtBoFlC,8EAAyE;EACzE,0BAA0B,EAAA;;AsBvF9B;EAKM,eAAe;EACf,gBAAgB,EAAA;;AAItB;EACE;IACE,kBAAkB;IAClB,aAAa,EAAA,EACd;;AAGH;EACE,kBAAkB,EAAA","sourcesContent":["/*!\n\n =========================================================\n * Light Bootstrap Dashboard React - v2.0.0\n =========================================================\n\n * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard-react\n * Copyright 2020 Creative Tim (http://www.creative-tim.com)\n * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)\n\n =========================================================\n\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n */\n\n@import \"lbd/variables\";\n@import \"lbd/mixins\";\n\n@import \"lbd/typography\";\n\n// Core CSS\n@import \"lbd/misc\";\n@import \"lbd/sidebar-and-main-panel\";\n@import \"lbd/buttons\";\n@import \"lbd/inputs\";\n\n@import \"lbd/alerts\";\n@import \"lbd/tables\";\n\n@import \"lbd/checkbox-radio-switch\";\n@import \"lbd/navbars\";\n@import \"lbd/footers\";\n\n// Fancy Stuff\n@import \"lbd/plugins/animate\";\n@import \"lbd/dropdown\";\n@import \"lbd/cards\";\n@import \"lbd/chartist\";\n@import \"lbd/responsive\";\n@import \"lbd/bootstrap-switch\";\n\n// Nucleo Icons\n@import \"lbd/partial-nucleo-icons\";\n\n// React Differences\n@import \"lbdr/react-differences\";\n","//== Buttons\n//\n//## For each of Bootstrap's buttons, define text, background and border color.\n\n$none:                       0   !default;\n$border-thin:                1px !default;\n$border-thick:               2px !default;\n\n$white-color:                #FFFFFF !default;\n$white-bg:                   #FFFFFF !default;\n\n$smoke-bg:                   #F5F5F5 !default;\n\n$black-bg:                   rgba(30,30,30,.97) !default;\n\n$black-color:                #333333 !default;\n$black-hr:                   #444444 !default;\n\n$light-gray:                 #E3E3E3 !default;\n$medium-gray:                #DDDDDD !default;\n$medium-dark-gray:           #AAAAAA !default;\n$dark-gray:                  #9A9A9A !default;\n\n$transparent-bg:             transparent !default;\n\n$default-color:              #888888 !default;\n$default-bg:                 #888888 !default;\n$default-states-color:       #777777 !default;\n\n$primary-color:              #3472F7 !default;\n$primary-bg:                 #3472F7 !default;\n$primary-states-color:       #1D62F0 !default;\n\n$success-color:              #87CB16 !default;\n$success-bg:                 #87CB16 !default;\n$success-states-color:       #049F0C !default;\n\n$info-color:                 #1DC7EA !default;\n$info-bg:                    #1DC7EA !default;\n$info-states-color:          lighten($info-color, 8%) !default;\n\n$warning-color:              #FF9500 !default;\n$warning-bg:                 #FF9500 !default;\n$warning-states-color:       #ED8D00 !default;\n\n\n$danger-color:               #FF4A55 !default;\n$danger-bg:                  #FF4A55 !default;\n$danger-states-color:        #EE2D20 !default;\n\n\n\n$link-disabled-color:        #666666 !default;\n\n\n/*      light colors         */\n$light-blue:                 rgba($primary-color, .2);\n$light-azure:                rgba($info-color, .2);\n$light-green:                rgba($success-color, .2);\n$light-orange:               rgba($warning-color, .2);\n$light-red:                  rgba($danger-color, .2);\n\n\n//== Components\n//\n\n$padding-base-vertical:         8px !default;\n$padding-base-horizontal:      16px !default;\n\n$padding-round-vertical:        9px !default;\n$padding-round-horizontal:     18px !default;\n\n$padding-simple-vertical:      10px !default;\n$padding-simple-horizontal:    18px !default;\n\n$padding-large-vertical:       14px !default;\n$padding-large-horizontal:     30px !default;\n\n$padding-small-vertical:        5px !default;\n$padding-small-horizontal:     10px !default;\n\n$padding-xs-vertical:           1px !default;\n$padding-xs-horizontal:         5px !default;\n\n$padding-label-vertical:        2px !default;\n$padding-label-horizontal:     12px !default;\n\n$margin-large-vertical:        30px !default;\n$margin-base-vertical:         15px !default;\n\n$padding-zero:                   0px !default;\n\n$margin-bottom:                0 0 10px 0 !default;\n$border-radius-small:           3px !default;\n$border-radius-base:            4px !default;\n$border-radius-large:           6px !default;\n$border-radius-extreme:        10px !default;\n\n$border-radius-large-top:      $border-radius-large $border-radius-large 0 0 !default;\n$border-radius-large-bottom:   0 0 $border-radius-large $border-radius-large !default;\n\n$btn-round-radius:             30px !default;\n\n$height-base:                  40px !default;\n\n$font-size-base:               14px !default;\n$font-size-small:              12px !default;\n$font-size-medium:             16px !default;\n$font-size-large:              18px !default;\n$font-size-large-navbar:       20px !default;\n\n$font-size-h1:                 52px !default;\n$font-size-h2:                 36px !default;\n$font-size-h3:                 28px !default;\n$font-size-h4:                 22px !default;\n$font-size-h5:                 16px !default;\n$font-size-h6:                 14px !default;\n$font-paragraph:               16px !default;\n$font-size-navbar:             16px !default;\n$font-size-small:              12px !default;\n\n$font-weight-light:          300 !default;\n$font-weight-normal:         400 !default;\n$font-weight-semi:           500 !default;\n$font-weight-bold:           600 !default;\n\n$line-height-general:          1.5 !default;\n$line-height:                 20px !default;\n$line-height-lg:              54px !default;\n\n$sidebar-width:               calc(100% - 260px) !default;\n\n\n$border-radius-top:        10px 10px 0 0 !default;\n$border-radius-bottom:     0 0 10px 10px !default;\n\n$dropdown-shadow:          1px 2px 3px rgba(0, 0, 0, 0.125);\n\n$general-transition-time:  300ms !default;\n\n$slow-transition-time:           370ms !default;\n$dropdown-coordinates:      29px -50px !default;\n\n$fast-transition-time:           150ms !default;\n\n$ultra-fast-transition-time:     100ms  !default;\n\n$select-coordinates:         50% -40px !default;\n\n$transition-linear:                                   linear !default;\n$transition-bezier:         cubic-bezier(0.34, 1.61, 0.7, 1) !default;\n$transition-ease:           ease 0s;\n$transition-ease-in:              ease-in !default;\n$transition-ease-out:             ease-out !default;\n\n\n$navbar-padding-a:               10px 15px;\n$navbar-margin-a:                10px  3px;\n\n$padding-social-a:               10px  5px;\n\n$navbar-margin-a-btn:            15px 3px;\n$navbar-margin-a-btn-round:      16px 3px;\n\n$navbar-padding-a-icons:         6px 15px;\n$navbar-margin-a-icons:          6px  3px;\n\n$navbar-padding-brand:           15px 15px;\n$navbar-margin-brand:             5px  0px;\n\n$navbar-margin-brand-icons:      12px auto;\n\n$navbar-margin-btn:              15px  3px;\n\n$height-icon:\t\t\t\t\t 64px !default;\n$width-icon:\t\t\t\t\t 64px !default;\n$padding-icon:\t\t\t\t\t 12px !default;\n$border-radius-icon:\t\t     15px !default;\n\n$size-icon: \t\t\t\t\t 64px;\n$size-icon-sm: \t\t\t\t\t 32px;\n\n\n$height-icon-sm:\t\t\t\t 32px;\n$width-icon-sm:\t\t\t\t\t 32px;\n$padding-icon-sm:\t\t\t     4px;\n$border-radius-icon-sm:\t\t\t 7px;\n\n$height-icon-message:\t\t\t 40px;\n$width-icon-message:\t\t\t 40px;\n\n$height-icon-message-sm: \t\t 20px;\n$width-icon-message-sm:\t\t\t 20px;\n\n$default-color-top:\t#d9d9d9 !default;\n$default-color-bottom: #909297 !default;\n\n$blue-color-top: \t\t            #4087ea;\n$blue-color-bottom: \t            #533ce1;\n\n$azure-color-top:   \t            #45c0fd;\n$azure-color-bottom:            \t#4091ff;\n\n$green-color-top: \t                #a1eb3a;\n$green-color-bottom: \t            #6dc030;\n\n$orange-color-top: \t                #ffb33b;\n$orange-color-bottom: \t            #ff5221;\n\n$red-color-top: \t                #ff3b30;\n$red-color-bottom: \t                #bb0502;\n\n$purple-color-top: \t                #df55e1;\n$purple-color-bottom: \t            #943bea;\n\n$pink-color-top: \t\t            #ff2a63;\n$pink-color-bottom: \t            #ff2e2e;\n\n$black-color-top:\t \t            #787878;\n$black-color-bottom: \t            #343434;\n\n$social-facebook: \t\t\t#3b5998;\n$social-twitter: \t\t\t#55acee;\n$social-pinterest: \t\t\t#cc2127;\n$social-google: \t\t\t#dd4b39;\n$social-linkedin: \t\t\t#0976b4;\n$social-dribbble: \t\t\t#ea4c89;\n$social-github: \t\t\t#333333;\n$social-youtube: \t\t\t#e52d27;\n$social-stumbleupon: \t\t#eb4924;\n$social-reddit: \t\t\t#ff4500;\n$social-tumblr: \t\t\t#35465c;\n$social-behance: \t\t\t#1769ff;\n\n\n$filter-blue:         darken($primary-color, 10%);\n$filter-azure:        darken($info-color, 10%);\n$filter-green:        darken($success-color, 10%);\n$filter-orange:       darken($warning-color, 10%);\n$filter-red:          darken($danger-color, 10%);\n\n\n$new-blue:            #1DC7EA;\n$new-purple:          #9368E9;\n$new-red:             #FB404B;\n$new-green:           #87CB16;\n$new-orange:          #FFA534;\n$new-dark-blue:       #1F77D0;\n$new-black:           #5e5e5e;\n\n\n$topbar-x:             topbar-x !default;\n$topbar-back:          topbar-back !default;\n$bottombar-x:          bottombar-x !default;\n$bottombar-back:       bottombar-back !default;\n\n\n$white-navbar:              rgba(#FFFFFF, .96);\n$blue-navbar:               lighten($new-dark-blue, 10%);\n$azure-navbar:              lighten($new-blue, 15%);\n$green-navbar:              lighten($new-green, 10%);\n$orange-navbar:             lighten($new-orange, 10%);\n$red-navbar:                lighten($new-red, 10%);\n","$prefixes: ('', '-moz-', '-webkit-', '-ms-') !default;\n\n@mixin circle-animation(){\n   @for $i from 0 to length($prefixes) {\n        @include circle-animation-details(nth($prefixes, $i + 1));\n   }  \n}\n\n@mixin circle-animation-details($name){\n    #{$name}animation-name: spin;\n    #{$name}animation-duration: 1250ms;\n    #{$name}animation-iteration-count: infinite;\n    #{$name}animation-timing-function: linear;\n\n}\n@keyframes spin {\n    from { transform:rotate(0deg); }\n    to { transform:rotate(360deg); }\n}\n\n@-webkit-keyframes spin {\n    from { -webkit-transform: rotate(0deg); }\n    to { -webkit-transform: rotate(360deg); }\n}\n\n@-moz-keyframes spin {\n    from { -moz-transform: rotate(0deg); }\n    to { -moz-transform: rotate(360deg); }\n}\n\n@-ms-keyframes spin {\n    from { -ms-transform: rotate(0deg); }\n    to { -ms-transform: rotate(360deg); }\n}","/*           Font Smoothing      */\nbody,\nh1, .h1, \nh2, .h2, \nh3, .h3, \nh4, .h4, \nh5, .h5, \nh6, .h6, \np, \n.navbar, \n.brand, \n.btn-simple,\n.alert, \na, \n.td-name, \ntd,\nbutton.close{\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-family: \"Roboto\",\"Helvetica Neue\",Arial,sans-serif;\n    font-weight: $font-weight-normal;\n}\n\nh1, .h1, h2, .h2, h3, .h3, h4, .h4{\n    font-weight: $font-weight-light;\n    margin: $margin-large-vertical 0 $margin-base-vertical;\n}\n\nh1, .h1 {\n    font-size: $font-size-h1;\n}\nh2, .h2{\n    font-size: $font-size-h2;\n}\nh3, .h3{\n    font-size: $font-size-h3;\n    margin: 20px 0 10px;\n}\nh4, .h4{\n    font-size: $font-size-h4;\n    line-height: 30px;\n}\nh5, .h5 {\n    font-size: $font-size-h5;\n    margin-bottom: 15px;\n}\nh6, .h6{\n    font-size: $font-size-h6;\n    font-weight: $font-weight-bold;\n    text-transform: uppercase;\n}\np{\n    font-size: $font-paragraph;\n    line-height: $line-height-general;\n}\n\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small {\n    color: $dark-gray;\n    font-weight: $font-weight-light;\n    line-height: $line-height-general;\n}\n\nh1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small {\n    font-size: 60%;\n}\n\nh1 .subtitle{\n    display: block;\n    margin: 0 0 $margin-large-vertical;   \n}\n\n.text-muted{\n    color: #9A9A9A;\n}\n.text-primary, .text-primary:hover{\n    color: #1D62F0 !important;\n}\n.text-info, .text-info:hover{\n    color: $info-color !important;\n}\n.text-success, .text-success:hover{\n    color: $success-color !important;\n}\n.text-warning, .text-warning:hover{\n    color: $warning-color !important;\n}\n.text-danger, .text-danger:hover{\n    color: $danger-color !important;\n}\n\n","/*     General overwrite     */\nbody,\n.wrapper{\n    min-height: 100vh;\n    position: relative;\n}\na{\n  color: $info-color;\n\n  &:hover, &:focus{\n     color: $info-states-color;\n     text-decoration: none;\n  }\n}\n\na:focus, a:active,\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner{\n    outline:0;\n}\n.ui-slider-handle:focus,\n.navbar-toggle,\ninput:focus {\n    outline : 0 !important;\n}\n\n/*           Animations              */\n.form-control,\n.input-group-addon,\n.tagsinput,\n.navbar,\n.navbar .alert{\n    @include transition($general-transition-time, $transition-linear);\n}\n\n.sidebar .nav a,\n.table > tbody > tr .td-actions .btn{\n    @include transition($fast-transition-time, $transition-ease-in);\n}\n\n.btn{\n    @include transition($ultra-fast-transition-time, $transition-ease-in);\n}\n.fa,.fas,.far,.fal,.fad,.fab{\n    width: 18px;\n    text-align: center;\n}\n.margin-top{\n    margin-top: 50px;\n}\n\n.wrapper{\n    position: relative;\n    top: 0;\n    height: 100vh;\n}\n\n// documentation\n\n.page-header{\n    .page-header-image{\n        background-position: center center;\n        background-size: cover;\n        overflow: hidden;\n        width: 100%;\n        z-index: 1;\n    }\n    .title-container{\n        color: #fff;\n        position: relative;\n        top: 250px;\n        z-index: 3;\n    }\n    .filter:after{\n        background: rgba(0, 0, 0, 0) linear-gradient(to bottom, #9368e9 0%, #943bea 100%) repeat scroll 0 0 / 150% 150%;\n        content: \"\";\n        display: block;\n        height: 100%;\n        left: 0;\n        opacity: 0.77;\n        position: absolute;\n        top: 0;\n        width: 100%;\n        z-index: 2;\n    }\n}\n\n.documentation .page-header,\n.documentation .page-header-image,\n.documentation .page-header-image .filter:after{\n    height: 100vh;\n}\n\n.documentation .footer{\n    z-index: 3;\n}\n.documentation .wrapper{\n    margin-top: -61px;\n    height: 100vh;\n}\n.documentation .navbar{\n    z-index: 21;\n}\n","// User select\n// For selecting text on the page\n\n@mixin user-select($select) {\n  -webkit-user-select: $select;\n     -moz-user-select: $select;\n      -ms-user-select: $select; // IE10+\n          user-select: $select;\n}\n\n@mixin box-shadow($shadow...) {\n  -webkit-box-shadow: $shadow; // iOS <4.3 & Android <4.1\n          box-shadow: $shadow;\n}\n\n// Box sizing\n@mixin box-sizing($boxmodel) {\n  -webkit-box-sizing: $boxmodel;\n     -moz-box-sizing: $boxmodel;\n          box-sizing: $boxmodel;\n}\n\n\n@mixin transition($time, $type){\n    -webkit-transition: all $time $type;\n    -moz-transition: all $time $type;\n    -o-transition: all $time $type;\n    -ms-transition: all $time $type;\n    transition: all $time $type;\n}\n\n@mixin transform-scale($value){\n     -webkit-transform: scale($value);\n        -moz-transform: scale($value);\n        -o-transform: scale($value);\n        -ms-transform: scale($value);\n        transform: scale($value);\n}\n\n@mixin transform-translate-x($value){\n     -webkit-transform:  translate3d($value, 0, 0);\n        -moz-transform: translate3d($value, 0, 0);\n        -o-transform: translate3d($value, 0, 0);\n        -ms-transform: translate3d($value, 0, 0);\n        transform: translate3d($value, 0, 0);\n}\n\n@mixin transform-translate-3d($value){\n    -webkit-transform: translate3d($value, 0, 0);\n    -moz-transform: translate3d($value, 0, 0);\n    -o-transform: translate3d($value, 0, 0);\n    -ms-transform: translate3d($value, 0, 0);\n    transform: translate3d($value, 0, 0) !important;\n}\n\n@mixin transform-translate-y-dropdown($value){\n     -webkit-transform:  translate3d(0, $value, 0) !important;\n        -moz-transform: translate3d(0, $value, 0) !important;\n        -o-transform: translate3d(0, $value, 0) !important;\n        -ms-transform: translate3d(0, $value, 0) !important;\n        transform: translate3d(0, $value, 0) !important;\n}\n\n@mixin transform-translate-3d-0($value){\n    -webkit-transform: translate3d(0, $value, 0) !important;\n    -moz-transform: translate3d(0, $value, 0) !important;\n    -o-transform: translate3d(0, $value, 0) !important;\n    -ms-transform: translate3d(0, $value, 0) !important;\n    transform: translate3d(0, $value, 0) !important;\n}\n\n@mixin transform-origin($coordinates){\n      -webkit-transform-origin: $coordinates;\n        -moz-transform-origin: $coordinates;\n        -o-transform-origin: $coordinates;\n        -ms-transform-origin: $coordinates;\n        transform-origin: $coordinates;\n}\n\n@mixin icon-gradient ($top-color, $bottom-color){\n    background: $top-color;\n    background: -moz-linear-gradient(top,  $top-color 0%, $bottom-color 100%);\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,$top-color), color-stop(100%,$bottom-color));\n    background: -webkit-linear-gradient(top,  $top-color 0%,$bottom-color 100%);\n    background: -o-linear-gradient(top,  $top-color 0%,$bottom-color 100%);\n    background: -ms-linear-gradient(top,  $top-color 0%,$bottom-color 100%);\n    background: linear-gradient(to bottom,  $top-color 0%,$bottom-color 100%);\n    background-size: 150% 150%;\n}\n\n@mixin radial-gradient($extern-color, $center-color){\n    background: $extern-color;\n    background: -moz-radial-gradient(center, ellipse cover, $center-color 0%, $extern-color 100%); /* FF3.6+ */\n    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,$center-color), color-stop(100%,$extern-color)); /* Chrome,Safari4+ */\n    background: -webkit-radial-gradient(center, ellipse cover, $center-color 0%,$extern-color 100%); /* Chrome10+,Safari5.1+ */\n    background: -o-radial-gradient(center, ellipse cover, $center-color 0%,$extern-color 100%); /* Opera 12+ */\n    background: -ms-radial-gradient(center, ellipse cover, $center-color 0%,$extern-color 100%); /* IE10+ */\n    background: radial-gradient(ellipse at center, $center-color 0%,$extern-color 100%); /* W3C */\n    background-size: 550% 450%;\n}\n\n@mixin vertical-align {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n@mixin rotate-180(){\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n    -webkit-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n\n@mixin bar-animation($type){\n     -webkit-animation: $type 500ms linear 0s;\n     -moz-animation: $type 500ms linear 0s;\n     animation: $type 500ms 0s;\n     -webkit-animation-fill-mode: forwards;\n     -moz-animation-fill-mode: forwards;\n     animation-fill-mode: forwards;\n}\n\n@mixin topbar-x-rotation(){\n    @keyframes topbar-x {\n      0% {top: 0px; transform: rotate(0deg); }\n      45% {top: 6px; transform: rotate(145deg); }\n      75% {transform: rotate(130deg); }\n      100% {transform: rotate(135deg); }\n    }\n    @-webkit-keyframes topbar-x {\n      0% {top: 0px; -webkit-transform: rotate(0deg); }\n      45% {top: 6px; -webkit-transform: rotate(145deg); }\n      75% {-webkit-transform: rotate(130deg); }\n      100% { -webkit-transform: rotate(135deg); }\n    }\n    @-moz-keyframes topbar-x {\n      0% {top: 0px; -moz-transform: rotate(0deg); }\n      45% {top: 6px; -moz-transform: rotate(145deg); }\n      75% {-moz-transform: rotate(130deg); }\n      100% { -moz-transform: rotate(135deg); }\n    }\n}\n\n@mixin topbar-back-rotation(){\n    @keyframes topbar-back {\n      0% { top: 6px; transform: rotate(135deg); }\n      45% { transform: rotate(-10deg); }\n      75% { transform: rotate(5deg); }\n      100% { top: 0px; transform: rotate(0); }\n    }\n\n    @-webkit-keyframes topbar-back {\n      0% { top: 6px; -webkit-transform: rotate(135deg); }\n      45% { -webkit-transform: rotate(-10deg); }\n      75% { -webkit-transform: rotate(5deg); }\n      100% { top: 0px; -webkit-transform: rotate(0); }\n    }\n\n    @-moz-keyframes topbar-back {\n      0% { top: 6px; -moz-transform: rotate(135deg); }\n      45% { -moz-transform: rotate(-10deg); }\n      75% { -moz-transform: rotate(5deg); }\n      100% { top: 0px; -moz-transform: rotate(0); }\n    }\n}\n\n@mixin bottombar-x-rotation(){\n    @keyframes bottombar-x {\n      0% {bottom: 0px; transform: rotate(0deg);}\n      45% {bottom: 6px; transform: rotate(-145deg);}\n      75% {transform: rotate(-130deg);}\n      100% {transform: rotate(-135deg);}\n    }\n    @-webkit-keyframes bottombar-x {\n      0% {bottom: 0px; -webkit-transform: rotate(0deg);}\n      45% {bottom: 6px; -webkit-transform: rotate(-145deg);}\n      75% {-webkit-transform: rotate(-130deg);}\n      100% {-webkit-transform: rotate(-135deg);}\n    }\n    @-moz-keyframes bottombar-x {\n      0% {bottom: 0px; -moz-transform: rotate(0deg);}\n      45% {bottom: 6px; -moz-transform: rotate(-145deg);}\n      75% {-moz-transform: rotate(-130deg);}\n      100% {-moz-transform: rotate(-135deg);}\n    }\n}\n\n@mixin bottombar-back-rotation{\n    @keyframes bottombar-back {\n      0% { bottom: 6px;transform: rotate(-135deg);}\n      45% { transform: rotate(10deg);}\n      75% { transform: rotate(-5deg);}\n      100% { bottom: 0px;transform: rotate(0);}\n    }\n    @-webkit-keyframes bottombar-back {\n      0% {bottom: 6px;-webkit-transform: rotate(-135deg);}\n      45% {-webkit-transform: rotate(10deg);}\n      75% {-webkit-transform: rotate(-5deg);}\n      100% {bottom: 0px;-webkit-transform: rotate(0);}\n    }\n    @-moz-keyframes bottombar-back {\n      0% {bottom: 6px;-moz-transform: rotate(-135deg);}\n      45% {-moz-transform: rotate(10deg);}\n      75% {-moz-transform: rotate(-5deg);}\n      100% {bottom: 0px;-moz-transform: rotate(0);}\n    }\n\n}\n",".sidebar,\nbody > .navbar-collapse{\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 260px;\n    display: block;\n    z-index: 1;\n    color: #fff;\n    font-weight: 200;\n    background-size: cover;\n    background-position: center center;\n\n    .sidebar-wrapper{\n        position: relative;\n        max-height: calc(100vh - 75px);\n        min-height: 100%;\n        overflow: auto;\n        width: 260px;\n        z-index: 4;\n        padding-bottom: 100px;\n    }\n\n    .sidebar-background{\n        position: absolute;\n        z-index: 1;\n        height: 100%;\n        width: 100%;\n        display: block;\n        top: 0;\n        left: 0;\n        background-size: cover;\n        background-position: center center;\n    }\n\n    .logo{\n        padding: 10px 15px 9px 15px;\n        border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n        position: relative;\n        z-index: 4;\n\n        p{\n            float: left;\n            font-size: 20px;\n            margin: 10px 10px;\n            color: $white-color;\n            line-height: 20px;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        }\n\n        .simple-text{\n            text-transform: uppercase;\n            padding: $padding-small-vertical $padding-zero;\n            display: block;\n            font-size: $font-size-large;\n            color: $white-color;\n            text-align: center;\n            font-weight: $font-weight-normal;\n            line-height: 30px;\n        }\n    }\n\n    .logo-tim{\n        border-radius: 50%;\n        border: 1px solid #333;\n        display: block;\n        height: 61px;\n        width: 61px;\n        float: left;\n        overflow: hidden;\n\n        img{\n            width: 60px;\n            height: 60px;\n        }\n    }\n\n    .nav{\n        margin-top: 20px;\n        float: none;\n        display: block;\n\n        li{\n            .nav-link{\n                color: $white-color;\n                margin: 5px 15px;\n                opacity: .86;\n                border-radius: 4px;\n                display: block;\n                padding: 10px 15px;\n\n                &:hover{\n                    background: rgba(255, 255, 255, 0.13);\n                    opacity: 1;\n                }\n\n                p{\n                    margin: 0;\n                    line-height: 31px;\n                    font-size: 12px;\n                    font-weight: 600;\n                    text-transform: uppercase;\n                    display: inline-flex;\n                }\n\n                i{\n                    font-size: 28px;\n                    margin-right: 15px;\n                    width: 30px;\n                    text-align: center;\n                    vertical-align: middle;\n                    float: left;\n                }\n            }\n\n            &:hover .nav-link{\n                background: rgba(255,255,255,0.13);\n                opacity: 1;\n            }\n\n            &.active .nav-link{\n                color: $white-color;\n                opacity: 1;\n                background: rgba(255,255,255,0.23);\n\n            }\n\n            &.separator{\n                margin: 15px 0;\n                border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n\n                & + .nav-item {\n                    margin-top: 31px;\n                }\n            }\n\n        }\n\n\n\n        .caret{\n            margin-top: 13px;\n            position: absolute;\n            right: 30px;\n        }\n\n        .active-pro{\n            position: absolute;\n            width: 100%;\n            bottom: 10px;\n\n            a{\n                color: $white-color !important;\n\n            }\n        }\n\n        .nav-link{\n            color: $white-color;\n            margin: 5px 15px;\n            opacity: .86;\n            border-radius: 4px;\n            text-transform: uppercase;\n            line-height: 30px;\n            font-size: 12px;\n            font-weight: 600;\n        }\n    }\n\n    .logo{\n        padding: $navbar-padding-a;\n        border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n\n        p{\n            float: left;\n            font-size: 20px;\n            margin: 10px 10px;\n            color: $white-color;\n            line-height: 20px;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        }\n\n        .simple-text{\n            text-transform: uppercase;\n            padding: $padding-small-vertical $padding-zero;\n            display: block;\n            font-size: $font-size-large;\n            color: $white-color;\n            text-align: center;\n            font-weight: $font-weight-normal;\n            line-height: 30px;\n        }\n    }\n\n    .logo-tim{\n        border-radius: 50%;\n        border: 1px solid #333;\n        display: block;\n        height: 61px;\n        width: 61px;\n        float: left;\n        overflow: hidden;\n\n        img{\n            width: 60px;\n            height: 60px;\n        }\n    }\n\n    &:after,\n    &:before{\n        display: block;\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 2;\n    }\n\n    &:before{\n        opacity: .33;\n        background: #000000;\n    }\n\n    &:after{\n       @include icon-gradient($new-purple, $purple-color-bottom);\n       z-index: 3;\n       opacity: 1;\n    }\n\n    &[data-image]:after,\n    &.has-image:after{\n        opacity: .77;\n    }\n\n    &[data-color=\"black\"]:after{\n        @include icon-gradient($default-states-color, $default-states-color);\n    }\n    &[data-color=\"blue\"]:after{\n        @include icon-gradient($new-dark-blue, $blue-color-bottom);\n    }\n    &[data-color=\"azure\"]:after{\n        @include icon-gradient($new-blue, $azure-color-bottom);\n    }\n    &[data-color=\"green\"]:after{\n        @include icon-gradient($new-green, $green-color-bottom);\n    }\n    &[data-color=\"orange\"]:after{\n        @include icon-gradient($new-orange, $orange-color-bottom);\n    }\n    &[data-color=\"red\"]:after{\n        @include icon-gradient($new-red, $red-color-bottom);\n    }\n    &[data-color=\"purple\"]:after{\n        @include icon-gradient($new-purple, $purple-color-bottom);\n    }\n}\n\n\n.main-panel{\n    background: rgba(203,203,210,.15);\n    position: relative;\n    float: right;\n    width: $sidebar-width;\n    min-height: 100%;\n\n    > .content{\n        padding: 30px 15px;\n        min-height: calc(100% - 123px);\n    }\n\n    > .footer{\n        border-top: 1px solid #e7e7e7;\n    }\n\n    .navbar{\n        margin-bottom: 0;\n    }\n}\n\n.sidebar,\n.main-panel{\n    overflow: auto;\n    max-height: 100%;\n    height: 100%;\n    -webkit-transition-property: top,bottom;\n    transition-property: top,bottom;\n    -webkit-transition-duration: .2s,.2s;\n    transition-duration: .2s,.2s;\n    -webkit-transition-timing-function: linear,linear;\n    transition-timing-function: linear,linear;\n    -webkit-overflow-scrolling: touch;\n}\n\n\n.fixed-plugin{\n\n    .dropdown{\n        .dropdown-menu{\n            @include transform-translate-3d-0(-5%);\n            border-radius: 10px;\n            li.adjustments-line{\n                border-bottom: 1px solid #ddd;\n            }\n            li{\n                padding: 5px 2px !important;\n            }\n            .button-container{\n                a{\n                    font-size: 14px;\n                }\n            &.show{\n                @include transform-translate-3d-0(0%);\n                transform-origin: 0 0;\n                left: -303px !important;\n            }\n            }\n\n        }\n    }\n\n}\n\n.fixed-plugin .dropdown .dropdown-menu{\n    @include transform-translate-y-dropdown(-5%);\n    top: -40px !important;\n    opacity: 0;\n    left: -303px !important;\n    transform-origin: 0 0;\n}\n.fixed-plugin .dropdown.show .dropdown-menu{\n    opacity: 1;\n    @include transform-translate-y-dropdown(0%);\n    transform-origin: 0 0;\n    left: -303px !important;\n}\n\n.fixed-plugin .dropdown-menu:before,\n.fixed-plugin .dropdown-menu:after{\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top: 65px;\n    width: 16px;\n    transform: translateY(-50%);\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n\n}\n.fixed-plugin .dropdown-menu:before{\n    border-bottom: 16px solid rgba(0, 0, 0, 0);\n    border-left: 16px solid rgba(0,0,0,0.2);\n    border-top: 16px solid rgba(0,0,0,0);\n    right: -16px;\n}\n\n.fixed-plugin .dropdown-menu:after{\n    border-bottom: 16px solid rgba(0, 0, 0, 0);\n    border-left: 16px solid #fff;\n    border-top: 16px solid rgba(0,0,0,0);\n    right: -15px;\n}\n\n.modal{\n    &.show{\n        .modal-dialog{\n            -webkit-transform: translate(0, 30%);\n            -o-transform: translate(0, 30%);\n            transform: translate(0, 30%);\n        }\n    }\n    &.modal-mini{\n        .modal-dialog{\n            max-width: 255px;\n            margin: 0 auto;\n        }\n    }\n    .modal-content{\n        .modal-header{\n            border-bottom: none;\n            padding-top: 24px;\n            padding-right: 24px;\n            padding-bottom: 0;\n            padding-left: 24px;\n\n            .modal-profile{\n                width: 80px;\n                height: 80px;\n                border-radius: 50%;\n                text-align: center;\n                line-height: 5.7;\n                box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3);\n\n                i{\n                    font-size: 32px;\n                    padding-top: 24px;\n                }\n            }\n        }\n\n        .modal-body{\n            padding-top: 24px;\n            padding-right: 24px;\n            padding-bottom: 16px;\n            padding-left: 24px;\n            line-height: 1.9;\n        }\n\n        .modal-body + .modal-footer{\n            padding-top: 0;\n        }\n\n        .modal-footer{\n            border-top: none;\n            padding-right: 24px;\n            padding-bottom: 16px;\n            padding-left: 24px;\n            -webkit-justify-content: space-between;\n            justify-content: space-between;\n\n            .btn{\n                margin: 0;\n                padding-left: 16px;\n                padding-right: 16px;\n                width: auto;\n\n                &:hover,\n                &focus{\n                    text-decoration: none;\n                }\n            }\n        }\n    }\n}\n",".btn{\n    border-width: $border-thick;\n    background-color: $transparent-bg;\n    font-weight: $font-weight-normal;\n\n    @include opacity(.8);\n    padding: $padding-base-vertical $padding-base-horizontal;\n\n    @include btn-styles($default-color, $default-states-color);\n\n    &:hover,\n    &:focus{\n        @include opacity(1);\n        outline: 0 !important;\n        box-shadow: none;\n    }\n    &:active,\n    &.active,\n    .open > &.dropdown-toggle {\n         @include box-shadow(none);\n         outline: 0 !important;\n    }\n\n    &.btn-icon{\n        padding: $padding-base-vertical;\n    }\n\n}\n\n// Apply the mixin to the buttons\n//.btn-default { @include btn-styles($default-color, $default-states-color); }\n.btn-primary { @include btn-styles($primary-color, $primary-states-color); }\n.btn-success { @include btn-styles($success-color, $success-states-color); }\n.btn-info    { @include btn-styles($info-color, $info-states-color); }\n.btn-warning { @include btn-styles($warning-color, $warning-states-color); }\n.btn-danger  { @include btn-styles($danger-color, $danger-states-color); }\n.btn-neutral {\n    @include btn-styles($white-color, $white-color);\n\n    &:active,\n    &.active,\n    .open > &.dropdown-toggle{\n         background-color: $white-color;\n         color: $default-color;\n    }\n\n    &.btn-fill,\n    &.btn-fill:hover,\n    &.btn-fill:focus{\n        color: $default-color;\n    }\n\n    &.btn-simple:active,\n    &.btn-simple.active{\n        background-color: transparent;\n    }\n}\n\n.btn{\n     &:disabled,\n     &[disabled],\n     &.disabled{\n        @include opacity(.5);\n    }\n}\n.btn-round{\n    border-width: $border-thin;\n    border-radius: $btn-round-radius !important;\n    padding: $padding-round-vertical $padding-round-horizontal;\n\n    &.btn-icon{\n        padding: $padding-round-vertical;\n    }\n}\n.btn-simple{\n    border: $none;\n    font-size: $font-size-medium;\n    padding: $padding-base-vertical $padding-base-horizontal;\n\n    &.btn-icon{\n        padding: $padding-base-vertical;\n    }\n}\n.btn-lg{\n   @include btn-size($padding-large-vertical, $padding-large-horizontal, $font-size-large, $border-radius-large);\n   font-weight: $font-weight-normal;\n}\n.btn-sm{\n    @include btn-size($padding-small-vertical, $padding-small-horizontal, $font-size-small, $border-radius-small);\n}\n.btn-xs {\n    @include btn-size($padding-xs-vertical, $padding-xs-horizontal, $font-size-small, $border-radius-small);\n}\n.btn-wd {\n    min-width: 140px;\n}\n\n.btn-group.select{\n    width: 100%;\n}\n.btn-group.select .btn{\n    text-align: left;\n}\n.btn-group.select .caret{\n    position: absolute;\n    top: 50%;\n    margin-top: -1px;\n    right: 8px;\n}\n.btn-social{\n    opacity: 0.85;\n}\n\n.btn-twitter{\n    border-color: $social-twitter;\n    color: $social-twitter;\n    &:hover{\n        opacity: 1 !important;\n        border-color: $social-twitter;\n        color: $social-twitter;\n    }\n}\n.btn-facebook{\n    border-color: $social-facebook;\n    color: $social-facebook;\n\n    &:hover{\n        opacity: 1 !important;\n        border-color: $social-facebook;\n        color: $social-facebook;\n    }\n}\n","// Opacity\n\n@mixin opacity($opacity) {\n  opacity: $opacity;\n  // IE8 filter\n  $opacity-ie: ($opacity * 100);\n  filter: #{alpha(opacity=$opacity-ie)};\n}\n\n@mixin black-filter($opacity){\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background-color: rgba(17,17,17,$opacity);\n    display: block;\n    content: \"\";\n    z-index: 1; \n}","// Mixin for generating new styles\n@mixin btn-styles($btn-color, $btn-states-color) {\n  border-color: $btn-color;\n  color: $btn-color;\n  \n  &:hover,\n  &:focus,\n  &:active,\n  &.active,\n  .open > &.dropdown-toggle {\n    background-color: $transparent-bg;\n    color: $btn-states-color;\n    border-color: $btn-states-color;\n  }\n  \n  &.disabled,\n  &:disabled,\n  &[disabled],\n  fieldset[disabled] & {\n    &,\n    &:hover,\n    &:focus,\n    &.focus,\n    &:active,\n    &.active {\n      background-color: $transparent-bg;\n          border-color: $btn-color;\n    }\n  }\n  \n\n  &.btn-fill {\n    color: $white-color;\n    background-color: $btn-color;\n    @include opacity(1);  \n\n    &:hover,\n    &:focus,\n    &:active,\n    &.active,\n    .open > &.dropdown-toggle{\n        background-color: $btn-states-color;\n        color: $white-color;\n    }\n    \n    .caret{\n        border-top-color: $white-color;\n    }\n  }\n  \n  .caret{\n      border-top-color: $btn-color;\n  }\n}\n\n\n@mixin btn-size($padding-vertical, $padding-horizontal, $font-size, $border){\n   font-size: $font-size;\n   border-radius: $border;\n   padding: $padding-vertical $padding-horizontal;\n    \n   &.btn-round{\n       padding: $padding-vertical + 1 $padding-horizontal;\n   }\n   \n   &.btn-simple{\n       padding: $padding-vertical + 2 $padding-horizontal; \n   }\n    \n}",".form-control::-moz-placeholder{\n   @include placeholder($medium-gray,1);\n}\n.form-control:-moz-placeholder{\n   @include placeholder($medium-gray,1);\n}  \n.form-control::-webkit-input-placeholder{\n   @include placeholder($medium-gray,1); \n} \n.form-control:-ms-input-placeholder{\n   @include placeholder($medium-gray,1);\n}\n\n.form-control {\n    background-color: $white-bg;\n    border: 1px solid $light-gray;\n    border-radius: $border-radius-base;\n    color: #565656;\n    @include input-size($padding-base-vertical, $padding-base-horizontal - 4, $height-base);\n    @include box-shadow(none);\n    \n    &:focus{\n           background-color: $white-bg;\n           border: 1px solid $medium-dark-gray;\n           @include box-shadow(none);\n           outline: 0 !important;    \n           color: #333333;   \n    }\n    \n    .has-success &,\n    .has-error &,\n    .has-success &:focus,\n    .has-error &:focus{\n        border-color: $light-gray;\n        @include box-shadow(none);\n    }\n    \n    .has-success &{\n        color: $success-color;\n    }\n    .has-success &:focus{\n        border-color: $success-color;\n    }\n    .has-error &{\n        color: $danger-color;\n    }\n    .has-error &:focus{\n        border-color: $danger-color;\n    }\n    \n    & + .form-control-feedback{\n        border-radius: $border-radius-large;\n        font-size: $font-size-base;\n        margin-top: -7px;\n        position: absolute;\n        right: 10px;\n        top: 50%;\n        vertical-align: middle;\n    }\n    \n    .open &{\n        border-radius: $border-radius-base $border-radius-base 0 0;\n        border-bottom-color: transparent;\n    }\n}\n\n.input-lg{\n    height: 55px;\n    padding: $padding-large-vertical $padding-large-horizontal;\n}\n\n.has-error{\n    .form-control-feedback{\n        color: $danger-color;\n    }\n}\n.has-success{\n    .form-control-feedback{\n        color: $success-color\n    }\n}\n\n\n.input-group-addon {\n    background-color: $white-color;\n    border: 1px solid $light-gray;\n    border-radius: $border-radius-base;\n    \n    .has-success &,\n    .has-error &{\n        background-color: $white-color;\n        border: 1px solid $light-gray;\n    }\n    .has-error .form-control:focus + &{\n        border-color: $danger-color;\n        color: $danger-color;\n    }\n    .has-success .form-control:focus + &{\n        border-color: $success-color;\n        color: $success-color;\n    }\n    .form-control:focus + &,\n    .form-control:focus ~ &{\n        background-color: $white-color;\n        border-color: $dark-gray;\n    }\n}\n\n.input-group .form-control:first-child, \n.input-group-addon:first-child,  \n.input-group-btn:first-child > .dropdown-toggle, \n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n    border-right: 0 none;\n}\n.input-group .form-control:last-child, \n.input-group-addon:last-child,  \n.input-group-btn:last-child > .dropdown-toggle, \n.input-group-btn:first-child > .btn:not(:first-child) {\n    border-left: 0 none;\n}\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n    background-color: $smoke-bg;\n    color: $default-color;\n    cursor: not-allowed;\n}\n\n.input-group-btn .btn{\n    border-width: $border-thin;\n    padding: $padding-round-vertical $padding-base-horizontal;\n}\n.input-group-btn .btn-default:not(.btn-fill){\n    border-color: $medium-gray;\n}\n\n.input-group-btn:last-child > .btn{\n    margin-left: 0;\n}\n\n.input-group-focus .input-group-addon{\n    border-color: $dark-gray;\n}\n","@mixin input-size($padding-vertical, $padding-horizontal, $height){\n    padding: $padding-vertical $padding-horizontal;\n    height: $height;\n}\n\n@mixin placeholder($color, $opacity){\n   color: $color;\n   @include opacity(1);\n}\n\n@mixin light-form(){\n    border-radius: 0;\n    border:0;\n    padding: 0;\n    background-color: transparent;\n\n}",".alert{\n    border: 0;\n    border-radius: 0;\n    color: #FFFFFF;\n    padding: 10px 15px;\n    font-size: 14px;\n\n    .container &{\n        border-radius: 4px;\n\n    }\n    .navbar &{\n        border-radius: 0;\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 85px;\n        width: 100%;\n        z-index: 3;\n    }\n    .navbar:not(.navbar-transparent) &{\n        top: 70px;\n    }\n\n    span[data-notify=\"icon\"]{\n        font-size: 30px;\n        display: block;\n        left: 15px;\n        position: absolute;\n        top: 50%;\n        margin-top: -15px;\n    }\n\n    i.nc-simple-remove{\n        font-size: 12px !important;\n        font: bold normal normal 14px/1 'nucleo-icons';\n    }\n\n    button.close{\n        position: absolute;\n        right: 10px;\n        top: 50%;\n        margin-top: -13px;\n        z-index: 1033;\n        background-color: #FFFFFF;\n        display: block;\n        border-radius: 50%;\n        opacity: .4;\n        line-height: 9px;\n        width: 25px;\n        height: 25px;\n        outline: 0 !important;\n        text-align: center;\n        padding: 3px;\n        font-weight: 300;\n\n        &:hover{\n            opacity: .55;\n        }\n    }\n\n    .close ~ span{\n        display: block;\n        max-width: 89%;\n    }\n\n    &[data-notify=\"container\"]{\n        padding: 10px 10px 10px 20px;\n        border-radius: $border-radius-base;\n    }\n\n    &.alert-with-icon{\n        padding-left: 65px;\n    }\n}\n.alert-primary{\n    background-color: $blue-navbar;\n}\n.alert-info{\n     background-color: $azure-navbar;\n}\n.alert-success {\n    background-color: $green-navbar;\n}\n.alert-warning {\n     background-color: $orange-navbar;\n}\n.alert-danger {\n     background-color: $red-navbar;\n}\n",".table{\n\n   .radio,\n   .checkbox{\n        position: relative;\n        height: 20px;\n        display: block;\n        width: 20px;\n        padding: 0px 0px;\n        margin: 0px 5px;\n        text-align: center;\n\n        .icons{\n            left: 5px;\n        }\n   }\n   > thead > tr > th,\n   > tbody > tr > th,\n   > tfoot > tr > th,\n   > thead > tr > td,\n   > tbody > tr > td,\n   > tfoot > tr > td{\n       padding: 12px 8px;\n       vertical-align: middle;\n   }\n\n    > thead > tr > th{\n        border-bottom-width: 1px;\n        font-size: $font-size-small;\n        text-transform: uppercase;\n        color: $dark-gray;\n        font-weight: $font-weight-normal;\n        padding-bottom: 5px;\n        border-top: none !important;\n        border-bottom: none;\n        text-align: left !important;\n    }\n\n   .td-actions .btn{\n        @include opacity(0.36);\n\n        &.btn-xs{\n            padding-left: 3px;\n            padding-right: 3px;\n        }\n    }\n    .td-actions{\n        min-width: 90px;\n    }\n\n    > tbody > tr{\n        position: relative;\n\n        &:hover{\n            .td-actions .btn{\n                @include opacity(1);\n            }\n        }\n    }\n\n    .btn:focus{\n        box-shadow: none !important;\n    }\n}\n.table-upgrade{\n    .table{\n        tr{\n            td{\n                width: 100%\n            }\n        }\n    }\n}\n\n.table .form-check .form-check-sign, .table .form-check .form-check-sign:after, .table .form-check .form-check-sign:before {\n    margin-top: -16px;\n}\n",".from-check,\n.form-check-radio {\n    margin-bottom: 12px;\n    position: relative;\n}\n\n.form-check{\n    .form-check-label{\n        display: inline-block;\n        position: relative;\n        cursor: pointer;\n        padding-left: 0px;\n        line-height: 26px;\n        margin-bottom: 0;\n        text-transform: capitalize;\n    }\n\n    .form-check-sign::before,\n    .form-check-sign::after{\n        font-family: \"Font Awesome 5 Free\";\n        content: \"\\f0c8\";\n        color: $default-color;\n        display: inline-block;\n        position: absolute;\n        width: 19px;\n        height: 19px;\n        margin-left: -23px;\n        font-size: 18px;\n        cursor: pointer;\n        transition: opacity 0.3s linear;\n    }\n    .form-check-sign::after{\n        font-family: \"Font Awesome 5 Free\";\n        content: \"\\f14a\";\n        text-align: center;\n        opacity: 0;\n        color: $info-color;\n        border: 0;\n        background-color: inherit;\n        margin-left: -23px;\n        font-weight: bold;\n    }\n    .form-check-sign::before{\n        margin-left: -22px;\n    }\n    &.disabled{\n        .form-check-label{\n            color: $dark-gray;\n            opacity: .5;\n            cursor: not-allowed;\n        }\n    }\n\n}\n\n#RegisterValidation .card{\n    .form-check{\n        .form-check-sign:before{\n            margin-left: -27px;\n        }\n    }\n}\n\n.form-check .form-check-input:disabled + .form-check-sign:before,\n.form-check .form-check-input:disabled + .form-check-sign:after,\n.radio input[type=\"radio\"]:disabled + label,\n.form-check .form-check-input:disabled:checked + .form-check-sign::after{\n    color: #ddd;\n    pointer-events: none\n}\n\n.form-check.disabled .form-check-label{\n    cursor: not-allowed;\n}\n\n.form-check input[type=\"checkbox\"],\n.form-check-radio input[type=\"radio\"]{\n    opacity: 0;\n    position: absolute;\n    visibility: hidden;\n}\n.form-check input[type=\"checkbox\"]:checked + .form-check-sign::after{\n    opacity: 1;\n}\n\n.form-check input[type=\"checkbox\"]:checked + .form-check-sign::before{\n    opacity: 0;\n}\n\n.form-control input[type=\"checkbox\"]:disabled + .form-check-sign::before,\n.checkbox input[type=\"checkbox\"]:disabled + .form-check-sign::after{\n    cursor: not-allowed;\n}\n\n.form-check .form-check-label input[type=\"checkbox\"]:disabled + .form-check-sign,\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign{\n    pointer-events: none !important;\n}\n\n.form-check.checkbox-inline{\n    display: inline-block;\n}\n\n\n.form-check-radio{\n    .form-check-label{\n        padding-left: 2.2rem;\n    }\n    &.disabled{\n        .form-check-label{\n            color: $dark-gray;\n            opacity: .5;\n            cursor: not-allowed;\n        }\n    }\n}\n\n.form-check-radio .form-check-sign::before{\n    font-family: 'FontAwesome';\n    content: \"\\f10c\";\n    font-size: 18px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    display: inline-block;\n    position: absolute;\n    opacity: .50;\n    left: 34px;\n}\n\n.form-check-radio input[type=\"radio\"] + .form-check-sign:after,\n.form-check-radio input[type=\"radio\"] {\n    opacity: 0;\n    transition: opacity 0.3s linear;\n    content:\" \";\n    display: block;\n    margin-left: 5px;\n    font-size: 18px;\n}\n\n.form-check-radio input[type=\"radio\"]:checked + .form-check-sign::after {\n    font-family: 'FontAwesome';\n    content: \"\\f192\";\n    position: absolute;\n    left: 5.3px;\n    opacity: 1;\n}\n\n.form-check-radio input[type=\"radio\"]:checked + .form-check-sign::after{\n    opacity: 1;\n    transition: opacity 0.3s linear;\n}\n\n.form-check input[type=\"radio\"]:checked + .form-check-sign::before{\n    opacity: 0;\n    transition: opacity 0.3s linear;\n}\n\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign::before,\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign::after {\n    color: $dark-gray;\n}\n\n.card{\n    &.stacked-form,\n    &.horizontal-form{\n        .form-check{\n            .form-check-label{\n                padding-left: 22px !important;\n            }\n        }\n    }\n}\n",".nav {\n    .nav-item{\n        .nav-link:hover,\n        .nav-link:focus{\n            background-color: transparent;\n        }\n    }\n\n}\n.navbar{\n    border: $none;\n    font-size: $font-size-navbar;\n    border-radius: 0;\n    min-height: 50px;\n    background-color: $white-navbar;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n\n    .navbar-brand {\n        font-weight: 400;\n        margin: 5px 0px;\n        font-size: 20px;\n        color: $default-color;\n\n        &:hover{\n            color: #5e5e5e;\n        }\n    }\n    .navbar-toggler{\n        vertical-align: middle;\n        outline: 0;\n        cursor: pointer;\n\n        &.navbar-toggler-left{\n            position: relative;\n            left: 0;\n            padding-left: 0;\n        }\n\n        &.navbar-toggler-right{\n            padding-right: 0;\n            top: 18px;\n        }\n\n        & .navbar-toggler-bar{\n            width: 3px;\n            height: 3px;\n            border-radius: 50%;\n            margin: 0 auto;\n        }\n        .burger-lines{\n            display: block;\n            position: relative;\n            background-color: #888;\n            width: 24px;\n            height: 2px;\n            border-radius: 1px;\n            margin: 4px auto;\n        }\n    }\n\n\n    .navbar-nav{\n        .nav-item{\n            .nav-link{\n                color: $default-color;\n                padding: $navbar-padding-a;\n                margin: $navbar-margin-a;\n                position: relative;\n                display: inline-flex;\n                line-height: 40px;\n\n                &.btn{\n                    margin: $navbar-margin-a-btn;\n                    padding: $padding-base-vertical $padding-base-horizontal;\n                }\n\n                &.btn-round{\n                    margin: $navbar-margin-a-btn-round;\n                }\n\n                &[class^=\"fa\"],\n                &[class^=\"fas\"],\n                &[class^=\"far\"],\n                &[class^=\"fal\"],\n                &[class^=\"fad\"],\n                &[class^=\"fab\"]{\n                    font-size: $font-size-large + 1;\n                    position: relative;\n                    line-height: 40px;\n                    top: 1px;\n                }\n\n                &:hover{\n                    color: $info-color;\n                }\n            }\n\n            .dropdown-menu{\n                border-radius: $border-radius-extreme;\n                margin-top: -5px;\n\n                .dropdown-item{\n                    &:first-child{\n                        border-top-left-radius: 10px;\n                        border-top-right-radius: 10px;\n                    }\n                    &:last-child{\n                        border-bottom-left-radius: 10px;\n                        border-bottom-right-radius: 10px;\n                    }\n                }\n\n                .divider{\n                    height: 1px;\n                    margin: 5px 0;\n                    overflow: hidden;\n                    background-color: #e5e5e5;\n                }\n            }\n        }\n\n        .notification{\n            position: absolute;\n            background-color: #FB404B;\n            text-align: center;\n            border-radius: 10px;\n            min-width: 18px;\n            padding: 0 5px;\n            height: 18px;\n            font-size: 12px;\n            color: $white-color;\n            font-weight: bold;\n            line-height: 18px;\n            top: 10px;\n            left: 7px;\n        }\n\n        .dropdown-toggle:after{\n            display: inline-block;\n            width: 0;\n            height: 0;\n            margin-left: 5px;\n            margin-top: 20px;\n            vertical-align: middle;\n            border-top: 4px dashed;\n            border-top: 4px solid\\9;\n            border-right: 4px solid transparent;\n            border-left: 4px solid transparent;\n        }\n    }\n    .btn{\n       margin: $navbar-margin-btn;\n       font-size: $font-size-base;\n    }\n    .btn-simple{\n        font-size: $font-size-medium;\n    }\n\n    &.fixed{\n        width: calc(100% - #{$sidebar-width});\n        right: 0;\n        left: auto;\n        border-radius: 0;\n    }\n\n    .nc-icon{\n        font-weight: 700;\n        margin-top: 10px;\n    }\n}\n\n.navbar-transparent, [class*=\"navbar-ct\"]{\n    .navbar-brand{\n        color: $white-color;\n        @include opacity(.9);\n\n        &:focus,\n        &:hover{\n            background-color: transparent;\n            @include opacity(1);\n            color: $white-color;\n        }\n    }\n\n    .navbar-nav{\n        .nav-item{\n            .nav-link:not(.btn){\n                color: $white-color;\n                border-color: $white-color;\n                @include opacity(0.8);\n            }\n        }\n\n        .active,\n        .nav-item{\n            .nav-link:not(.btn),\n            .nav-link:hover:not(.btn),\n            .nav-link:focus:not(.btn),{\n                background-color: transparent;\n                border-radius: 3px;\n                color: $white-color;\n                @include opacity(1);\n            }\n        }\n\n        .nav .nav-item .nav-link.btn:hover{\n            background-color: transparent;\n        }\n\n        .show{\n            .nav-link,\n            .nav-link:hover,\n            .nav-link:focus{\n                background-color: transparent;\n                color: $white-color;\n                @include opacity(1);\n            }\n        }\n    }\n\n    .btn-default{\n        color: $white-color;\n        border-color: $white-color;\n    }\n    .btn-default.btn-fill{\n        color: $dark-gray;\n        background-color: $white-color;\n        @include opacity(.9);\n    }\n    .btn-default.btn-fill:hover,\n    .btn-default.btn-fill:focus,\n    .btn-default.btn-fill:active,\n    .btn-default.btn-fill.active,\n    .show .dropdown-toggle.btn-fill.btn-default{\n        border-color: $white-color;\n        @include opacity(1);\n    }\n\n}\n.navbar-transparent{\n    .dropdown-menu .divider{\n        background-color: rgba($white-color,.2);\n    }\n}\n\n\n.navbar-default {\n    background-color: $white-navbar;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n\n    .navbar-nav{\n        .nav-item{\n            .nav-link:not(.btn){\n                color: $dark-gray;\n            }\n        }\n\n        .active .nav-link,\n        .active .nav-link:not(.btn):hover,\n        .active .nav-link:not(.btn):focus,\n        .nav-item .nav-link:not(.btn):hover,\n        .nav-item .nav-link:not(.btn):focus{\n            background-color: transparent;\n            border-radius: 3px;\n            color: $info-color;\n            @include opacity(1);\n        }\n\n        .show{\n            .nav-link,\n            .nav-link:hover,\n            .nav-link:focus{\n                background-color: transparent;\n                color: $info-color;\n            }\n        }\n\n\n        .navbar-toggle:hover,.navbar-toggle:focus {\n            background-color: transparent;\n        }\n\n    }\n\n    &:not(.navbar-transparent) .btn-default:hover{\n        color: $info-color;\n        border-color: $info-color;\n    }\n    &:not(.navbar-transparent) .btn-neutral,\n    &:not(.navbar-transparent) .btn-neutral:hover,\n    &:not(.navbar-transparent) .btn-neutral:active{\n            color: $dark-gray;\n        }\n}\n\n/*      Navbar with icons            */\n\n.navbar-icons{\n    &.navbar .navbar-brand{\n        margin-top: 12px;\n        margin-bottom: 12px;\n    }\n    .navbar-nav{\n        .nav-item{\n            .nav-link{\n                text-align: center;\n                padding: $navbar-padding-a-icons;\n                margin: $navbar-margin-a-icons;\n            }\n        }\n\n        [class^=\"pe\"] {\n            font-size: 30px;\n            position: relative;\n        }\n        p {\n            margin: 3px 0 0;\n        }\n    }\n}\n\n.navbar-form{\n   @include box-shadow(none);\n   .form-control{\n        @include light-form();\n        height: 22px;\n        font-size: $font-size-navbar;\n        line-height: $line-height-general;\n        color: $light-gray;\n    }\n    .navbar-transparent & .form-control,\n    [class*=\"navbar-ct\"] & .form-control{\n        color: $white-color;\n        border: $none;\n        border-bottom: 1px solid rgba($white-color,.6);\n    }\n\n}\n\n.navbar-ct-blue{\n    @include navbar-color($blue-navbar);\n}\n.navbar-ct-azure{\n    @include navbar-color($azure-navbar);\n}\n.navbar-ct-green{\n    @include navbar-color($green-navbar);\n}\n.navbar-ct-orange{\n    @include navbar-color($orange-navbar);\n}\n.navbar-ct-red{\n    @include navbar-color($red-navbar);\n}\n\n.navbar-transparent{\n    padding-top: 15px;\n    background-color: transparent;\n    border-bottom: 1px solid transparent;\n}\n\n.navbar-toggle{\n    margin-top: 19px;\n    margin-bottom: 19px;\n    border: $none;\n\n    .icon-bar {\n        background-color: $white-color;\n    }\n     .navbar-collapse,\n     .navbar-form {\n        border-color: transparent;\n    }\n\n    &.navbar-default .navbar-toggle:hover,\n    &.navbar-default .navbar-toggle:focus {\n        background-color: transparent;\n    }\n}\n","@mixin navbar-color($color){\n    background-color: $color;\n}\n\n@mixin center-item(){\n    left: 0;\n    right: 0;\n    margin-right: auto;\n    margin-left: auto;\n    position: absolute;\n}",".footer{\n    background-color: $white-color;\n\n    .footer-menu{\n        height: 41px;\n    }\n\n    nav > ul{\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        font-weight: normal;\n\n        a:not(.btn){\n            color: $dark-gray;\n            display: block;\n            margin-bottom: 3px;\n            &:hover,\n            &:focus{\n                color: $default-states-color;\n            }\n        }\n    }\n    .social-area{\n        padding: 15px 0;\n        h5{\n            padding-bottom: 15px;\n        }\n    }\n    .social-area > a:not(.btn){\n       color: $dark-gray;\n       display: inline-block;\n       vertical-align: top;\n       padding: $padding-social-a;\n       font-size: $font-size-large-navbar;\n       font-weight: normal;\n       line-height: $line-height;\n       text-align: center;\n       &:hover,\n       &:focus{\n           color: $default-states-color;\n       }\n    }\n    .copyright{\n        color: $default-states-color;\n        padding: 10px 15px;\n        margin: 10px 3px;\n        line-height: 20px;\n        font-size: $font-size-base;\n    }\n    hr{\n        border-color: $medium-gray;\n    }\n    .title{\n        color: $default-states-color;\n    }\n}\n\n.footer-default{\n    background-color: $smoke-bg;\n}\n\n.footer:not(.footer-big){\n    nav > ul{\n       font-size: $font-size-base;\n       li{\n            margin-left: 20px;\n            float: left;\n        }\n        a{\n            padding: 10px 0px;\n            margin: 10px 10px 10px 0px;\n        }\n    }\n}\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// This file was modified by Creative Tim to keep only the animation that we need for Bootstrap Notify\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@charset \"UTF-8\";\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2015 Daniel Eden\n*/\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n.animated.flipOutX,\n.animated.flipOutY {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n",".dropdown-menu{\n    visibility: hidden;\n    margin: 0;\n    padding: 0;\n    border-radius: $border-radius-extreme;\n    display: block;\n    z-index: 9000;\n    position: absolute;\n\n    @include opacity(0);\n    @include box-shadow($dropdown-shadow);\n\n    .show &{\n        @include opacity(1);\n        visibility: visible;\n    }\n    .select &{\n       border-radius: $border-radius-bottom;\n       @include box-shadow(none);\n       @include transform-origin($select-coordinates);\n       @include transform-scale(1);\n       @include transition($fast-transition-time, $transition-linear);\n       margin-top: -20px;\n    }\n    .select.show &{\n        margin-top: -1px;\n    }\n\n    .dropdown-item {\n       padding: $padding-base-vertical $padding-base-horizontal;\n       color: #333333;\n\n       img{\n           margin-top: -3px;\n       }\n    }\n    .dropdown-item:focus{\n        outline: 0 !important;\n    }\n\n    .btn-group.select &{\n        min-width: 100%;\n    }\n\n    > li:first-child > a{\n       border-top-left-radius: $border-radius-extreme;\n       border-top-right-radius: $border-radius-extreme;\n    }\n\n    > li:last-child > a{\n        border-bottom-left-radius: $border-radius-extreme;\n        border-bottom-right-radius: $border-radius-extreme;\n    }\n\n    .select & > li:first-child > a{\n        border-radius: 0;\n        border-bottom: 0 none;\n    }\n\n    .dropdown-item:hover,\n    .dropdown-item:focus {\n        background-color: $smoke-bg;\n        color: #333333;\n        opacity: 1;\n        text-decoration: none;\n    }\n\n    &.dropdown-blue > li > a:hover,\n    &.dropdown-blue > li > a:focus{\n        background-color: $light-blue;\n    }\n    &.dropdown-azure > li > a:hover,\n    &.dropdown-azure > li > a:focus{\n        background-color: $light-azure;\n    }\n    &.ct-green > li > a:hover,\n    &.ct-green > li > a:focus{\n        background-color: $light-green;\n    }\n    &.dropdown-orange > li > a:hover,\n    &.dropdown-orange > li > a:focus{\n        background-color: $light-orange;\n    }\n    &.dropdown-red > li > a:hover,\n    &.dropdown-red > li > a:focus{\n        background-color: $light-red;\n    }\n\n    .dropdown-item{\n        i[class*=\"nc-icon\"]{\n            font-size: 18px;\n            text-align: center;\n            line-height: 25px;\n            float: left;\n            padding-right: 10px;\n        }\n    }\n\n    &.dropdown-menu-right{\n        &:before,\n        &:after{\n            right: 12px !important;\n            left: auto !important;\n        }\n    }\n\n}\n\n.dropdown-with-icons{\n    > li > a{\n        padding-left: 0px;\n        line-height: 28px;\n    }\n    i{\n        text-align: center;\n        line-height: 28px;\n        float: left;\n\n        &[class^=\"pe-\"]{\n             font-size: 24px;\n             width: 46px;\n        }\n        &[class^=\"fa\"],\n        &[class^=\"fas\"],\n        &[class^=\"far\"],\n        &[class^=\"fal\"],\n        &[class^=\"fad\"],\n        &[class^=\"fab\"]\n        {\n            font-size: 14px;\n            width: 38px;\n        }\n    }\n}\n\n//fix bug for the select items in btn-group\n.btn-group.select{\n    overflow: hidden;\n}\n.btn-group.select.show{\n    overflow: visible;\n}\n",".card{\n    border-radius: $border-radius-base;\n    background-color: $white-color;\n    margin-bottom: 30px;\n\n    .card-image{\n        width: 100%;\n        overflow: hidden;\n        height: 260px;\n        border-radius: $border-radius-base $border-radius-base 0 0;\n        position: relative;\n        -webkit-transform-style: preserve-3d;\n        -moz-transform-style: preserve-3d;\n        transform-style: preserve-3d;\n\n        img {\n            width: 100%;\n        }\n    }\n    .filter{\n        position: absolute;\n        z-index: 2;\n        background-color: rgba(0,0,0,.68);\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        text-align: center;\n\n        @include opacity(0);\n\n        .btn{\n            @include vertical-align();\n        }\n    }\n    &:hover .filter{\n        @include opacity(1);\n    }\n    .btn-hover{\n        @include opacity(0);\n    }\n    &:hover .btn-hover{\n        @include opacity(1);\n    }\n    .card-body{\n        padding: 15px 15px 10px 15px;\n    }\n    .card-header{\n        padding: 15px 15px 0;\n        background-color: $white-color;\n        border-bottom: none !important;\n\n    }\n    .card-category,\n    label{\n        font-size: $font-size-base;\n        font-weight: $font-weight-normal;\n        color: $dark-gray;\n        margin-bottom: 0px;\n\n        i{\n            font-size: $font-paragraph;\n        }\n    }\n\n    label{\n        font-size: $font-size-small;\n        margin-bottom: 5px;\n        text-transform: uppercase;\n    }\n\n    .card-title{\n        margin: $none;\n        color: $black-color;\n        font-weight: $font-weight-light;\n    }\n    .avatar{\n        width: 30px;\n        height: 30px;\n        overflow: hidden;\n        border-radius: 50%;\n        margin-right: 5px;\n    }\n    .description{\n        font-size: $font-size-base;\n        color: #333;\n    }\n    .card-footer{\n        padding-top: 0;\n        background-color: $transparent-bg;\n        line-height: 30px;\n        border-top: none !important;\n        font-size: 14px;\n\n        .legend{\n            padding: 5px 0;\n        }\n\n        hr{\n            margin-top: 5px;\n            margin-bottom: 5px;\n        }\n    }\n    .stats{\n        color: #a9a9a9;\n    }\n    .card-footer div{\n        display: inline-block;\n    }\n\n    .author{\n        font-size: $font-size-small;\n        font-weight: $font-weight-bold;\n        text-transform: uppercase;\n    }\n    .author i{\n        font-size: $font-size-base;\n    }\n    h6{\n        font-size: $font-size-small;\n        margin: 0;\n    }\n    &.card-separator:after{\n        height: 100%;\n        right: -15px;\n        top: 0;\n        width: 1px;\n        background-color: $medium-gray;\n        card-body: \"\";\n        position: absolute;\n    }\n\n    .ct-chart{\n        margin: 30px 0 30px;\n        height: 245px;\n    }\n\n    .ct-label{\n        font-size: 1rem !important;\n    }\n\n    .table{\n        tbody td:first-child,\n        thead th:first-child{\n            padding-left: 15px;\n        }\n\n        tbody td:last-child,\n        thead th:last-child{\n            padding-right: 15px;\n        }\n    }\n\n    .alert{\n        border-radius: $border-radius-base;\n        position: relative;\n\n        &.alert-with-icon{\n            padding-left: 65px;\n        }\n    }\n}\n\n\n\n.card-stats{\n    .card-body{\n        padding: 15px 15px 0px;\n\n        .numbers{\n            font-size: 1.8rem;\n            text-align: right;\n\n            p{\n                margin-bottom: 0;\n            }\n        }\n    }\n    .card-footer{\n        padding: 0px 15px 10px 15px;\n\n\n    }\n    .icon-big {\n        font-size: 3em;\n        min-height: 64px;\n\n        i{\n            font-weight: 700;\n            line-height: 59px;\n        }\n    }\n\n\n}\n\n.card-user{\n    .card-image{\n        height: 110px;\n    }\n    .card-image-plain{\n        height: 0;\n        margin-top: 110px;\n    }\n    .author{\n        text-align: center;\n        text-transform: none;\n        margin-top: -70px;\n    }\n    .avatar{\n        width: 124px;\n        height: 124px;\n        border: 5px solid #FFFFFF;\n        position: relative;\n        margin-bottom: 15px;\n\n        &.border-gray{\n            border-color: #EEEEEE;\n        }\n    }\n    .title{\n        line-height: 24px;\n    }\n    .card-body{\n        min-height: 240px;\n    }\n}\n\n.card-user,\n.card-price{\n    .card-footer{\n        padding: 5px 15px 10px;\n    }\n    hr{\n        margin: 5px 15px;\n    }\n}\n.card-plain{\n    background-color: transparent;\n    box-shadow: none;\n    border-radius: 0;\n\n    .card-image{\n        border-radius: 4px;\n    }\n}\n\n.card.card-plain{\n    border: none !important;\n\n    .card-header{\n        background-color: transparent !important;\n    }\n}\n","@mixin ct-responsive-svg-container($width: 100%, $ratio: $ct-container-ratio) {\n  display: block;\n  position: relative;\n  width: $width;\n\n  &:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: $ratio * 100%;\n  }\n\n  &:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n\n  > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n}\n\n@mixin ct-align-justify($ct-text-align: $ct-text-align, $ct-text-justify: $ct-text-justify) {\n  -webkit-box-align: $ct-text-align;\n  -webkit-align-items: $ct-text-align;\n  -ms-flex-align: $ct-text-align;\n  align-items: $ct-text-align;\n  -webkit-box-pack: $ct-text-justify;\n  -webkit-justify-content: $ct-text-justify;\n  -ms-flex-pack: $ct-text-justify;\n  justify-content: $ct-text-justify;\n  // Fallback to text-align for non-flex browsers\n  @if($ct-text-justify == 'flex-start') {\n    text-align: left;\n  } @else if ($ct-text-justify == 'flex-end') {\n    text-align: right;\n  } @else {\n    text-align: center;\n  }\n}\n\n@mixin ct-flex() {\n  // Fallback to block\n  display: block;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n\n@mixin ct-chart-label($ct-text-color: $ct-text-color, $ct-text-size: $ct-text-size, $ct-text-line-height: $ct-text-line-height) {\n  fill: $ct-text-color;\n  color: $ct-text-color;\n  font-size: $ct-text-size;\n  line-height: $ct-text-line-height;\n}\n\n@mixin ct-chart-grid($ct-grid-color: $ct-grid-color, $ct-grid-width: $ct-grid-width, $ct-grid-dasharray: $ct-grid-dasharray) {\n  stroke: $ct-grid-color;\n  stroke-width: $ct-grid-width;\n\n  @if ($ct-grid-dasharray) {\n    stroke-dasharray: $ct-grid-dasharray;\n  }\n}\n\n@mixin ct-chart-point($ct-point-size: $ct-point-size, $ct-point-shape: $ct-point-shape) {\n  stroke-width: $ct-point-size;\n  stroke-linecap: $ct-point-shape;\n}\n\n@mixin ct-chart-line($ct-line-width: $ct-line-width, $ct-line-dasharray: $ct-line-dasharray) {\n  fill: none;\n  stroke-width: $ct-line-width;\n\n  @if ($ct-line-dasharray) {\n    stroke-dasharray: $ct-line-dasharray;\n  }\n}\n\n@mixin ct-chart-area($ct-area-opacity: $ct-area-opacity) {\n  stroke: none;\n  fill-opacity: $ct-area-opacity;\n}\n\n@mixin ct-chart-bar($ct-bar-width: $ct-bar-width) {\n  fill: none;\n  stroke-width: $ct-bar-width;\n}\n\n@mixin ct-chart-donut($ct-donut-width: $ct-donut-width) {\n  fill: none;\n  stroke-width: $ct-donut-width;\n}\n\n@mixin ct-chart-series-color($color) {\n  .#{$ct-class-point}, .#{$ct-class-line}, .#{$ct-class-bar}, .#{$ct-class-slice-donut} {\n    stroke: $color;\n  }\n\n  .#{$ct-class-slice-pie}, .#{$ct-class-area} {\n    fill: $color;\n  }\n}\n\n@mixin ct-chart($ct-container-ratio: $ct-container-ratio, $ct-text-color: $ct-text-color, $ct-text-size: $ct-text-size, $ct-grid-color: $ct-grid-color, $ct-grid-width: $ct-grid-width, $ct-grid-dasharray: $ct-grid-dasharray, $ct-point-size: $ct-point-size, $ct-point-shape: $ct-point-shape, $ct-line-width: $ct-line-width, $ct-bar-width: $ct-bar-width, $ct-donut-width: $ct-donut-width, $ct-series-names: $ct-series-names, $ct-series-colors: $ct-series-colors) {\n\n  .#{$ct-class-label} {\n    @include ct-chart-label($ct-text-color, $ct-text-size);\n  }\n\n  .#{$ct-class-chart-line} .#{$ct-class-label},\n  .#{$ct-class-chart-bar} .#{$ct-class-label} {\n    @include ct-flex();\n  }\n\n  .#{$ct-class-label}.#{$ct-class-horizontal}.#{$ct-class-start} {\n    @include ct-align-justify(flex-end, flex-start);\n    // Fallback for browsers that don't support foreignObjects\n    text-anchor: start;\n  }\n\n  .#{$ct-class-label}.#{$ct-class-horizontal}.#{$ct-class-end} {\n    @include ct-align-justify(flex-start, flex-start);\n    // Fallback for browsers that don't support foreignObjects\n    text-anchor: start;\n  }\n\n  .#{$ct-class-label}.#{$ct-class-vertical}.#{$ct-class-start} {\n    @include ct-align-justify(flex-end, flex-end);\n    // Fallback for browsers that don't support foreignObjects\n    text-anchor: end;\n  }\n\n  .#{$ct-class-label}.#{$ct-class-vertical}.#{$ct-class-end} {\n    @include ct-align-justify(flex-end, flex-start);\n    // Fallback for browsers that don't support foreignObjects\n    text-anchor: start;\n  }\n\n  .#{$ct-class-chart-bar} .#{$ct-class-label}.#{$ct-class-horizontal}.#{$ct-class-start} {\n    @include ct-align-justify(flex-end, center);\n    // Fallback for browsers that don't support foreignObjects\n    text-anchor: start;\n  }\n\n  .#{$ct-class-chart-bar} .#{$ct-class-label}.#{$ct-class-horizontal}.#{$ct-class-end} {\n    @include ct-align-justify(flex-start, center);\n    // Fallback for browsers that don't support foreignObjects\n    text-anchor: start;\n  }\n\n  .#{$ct-class-chart-bar}.#{$ct-class-horizontal-bars} .#{$ct-class-label}.#{$ct-class-horizontal}.#{$ct-class-start} {\n    @include ct-align-justify(flex-end, flex-start);\n    // Fallback for browsers that don't support foreignObjects\n    text-anchor: start;\n  }\n\n  .#{$ct-class-chart-bar}.#{$ct-class-horizontal-bars} .#{$ct-class-label}.#{$ct-class-horizontal}.#{$ct-class-end} {\n    @include ct-align-justify(flex-start, flex-start);\n    // Fallback for browsers that don't support foreignObjects\n    text-anchor: start;\n  }\n\n  .#{$ct-class-chart-bar}.#{$ct-class-horizontal-bars} .#{$ct-class-label}.#{$ct-class-vertical}.#{$ct-class-start} {\n    //@include ct-chart-label($ct-text-color, $ct-text-size, center, $ct-vertical-text-justify);\n    @include ct-align-justify(center, flex-end);\n    // Fallback for browsers that don't support foreignObjects\n    text-anchor: end;\n  }\n\n  .#{$ct-class-chart-bar}.#{$ct-class-horizontal-bars} .#{$ct-class-label}.#{$ct-class-vertical}.#{$ct-class-end} {\n    @include ct-align-justify(center, flex-start);\n    // Fallback for browsers that don't support foreignObjects\n    text-anchor: end;\n  }\n\n  .#{$ct-class-grid} {\n    @include ct-chart-grid($ct-grid-color, $ct-grid-width, $ct-grid-dasharray);\n  }\n\n  .#{$ct-class-point} {\n    @include ct-chart-point($ct-point-size, $ct-point-shape);\n  }\n\n  .#{$ct-class-line} {\n    @include ct-chart-line($ct-line-width);\n  }\n\n  .#{$ct-class-area} {\n    @include ct-chart-area();\n  }\n\n  .#{$ct-class-bar} {\n    @include ct-chart-bar($ct-bar-width);\n  }\n\n  .#{$ct-class-slice-donut} {\n    @include ct-chart-donut($ct-donut-width);\n  }\n\n  @if $ct-include-colored-series {\n    @for $i from 0 to length($ct-series-names) {\n      .#{$ct-class-series}-#{nth($ct-series-names, $i + 1)} {\n        $color: nth($ct-series-colors, $i + 1);\n\n        @include ct-chart-series-color($color);\n      }\n    }\n  }\n}\n\n@if $ct-include-classes {\n  @include ct-chart();\n\n  @if $ct-include-alternative-responsive-containers {\n    @for $i from 0 to length($ct-scales-names) {\n      .#{nth($ct-scales-names, $i + 1)} {\n        @include ct-responsive-svg-container($ratio: nth($ct-scales, $i + 1));\n      }\n    }\n  }\n}","// Scales for responsive SVG containers\n$ct-scales: ((1), (15/16), (8/9), (5/6), (4/5), (3/4), (2/3), (5/8), (1/1.618), (3/5), (9/16), (8/15), (1/2), (2/5), (3/8), (1/3), (1/4)) !default;\n$ct-scales-names: (ct-square, ct-minor-second, ct-major-second, ct-minor-third, ct-major-third, ct-perfect-fourth, ct-perfect-fifth, ct-minor-sixth, ct-golden-section, ct-major-sixth, ct-minor-seventh, ct-major-seventh, ct-octave, ct-major-tenth, ct-major-eleventh, ct-major-twelfth, ct-double-octave) !default;\n\n// Class names to be used when generating CSS\n$ct-class-chart: ct-chart !default;\n$ct-class-chart-line: ct-chart-line !default;\n$ct-class-chart-bar: ct-chart-bar !default;\n$ct-class-horizontal-bars: ct-horizontal-bars !default;\n$ct-class-chart-pie: ct-chart-pie !default;\n$ct-class-chart-donut: ct-chart-donut !default;\n$ct-class-label: ct-label !default;\n$ct-class-series: ct-series !default;\n$ct-class-line: ct-line !default;\n$ct-class-point: ct-point !default;\n$ct-class-area: ct-area !default;\n$ct-class-bar: ct-bar !default;\n$ct-class-slice-pie: ct-slice-pie !default;\n$ct-class-slice-donut: ct-slice-donut !default;\n$ct-class-grid: ct-grid !default;\n$ct-class-vertical: ct-vertical !default;\n$ct-class-horizontal: ct-horizontal !default;\n$ct-class-start: ct-start !default;\n$ct-class-end: ct-end !default;\n\n// Container ratio\n$ct-container-ratio: (1/1.618) !default;\n\n// Text styles for labels\n$ct-text-color: rgba(0, 0, 0, 0.4) !default;\n$ct-text-size: 1.3rem !default;\n$ct-text-align: flex-start !default;\n$ct-text-justify: flex-start !default;\n$ct-text-line-height: 1;\n\n// Grid styles\n$ct-grid-color: rgba(0, 0, 0, 0.2) !default;\n$ct-grid-dasharray: 2px !default;\n$ct-grid-width: 1px !default;\n\n// Line chart properties\n$ct-line-width: 3px !default;\n$ct-line-dasharray: false !default;\n$ct-point-size: 8px !default;\n// Line chart point, can be either round or square\n$ct-point-shape: round !default;\n// Area fill transparency between 0 and 1\n$ct-area-opacity: 0.8 !default;\n\n// Bar chart bar width\n$ct-bar-width: 10px !default;\n\n// Donut width (If donut width is to big it can cause issues where the shape gets distorted)\n$ct-donut-width: 60px !default;\n\n// If set to true it will include the default classes and generate CSS output. If you're planning to use the mixins you\n// should set this property to false\n$ct-include-classes: true !default;\n\n// If this is set to true the CSS will contain colored series. You can extend or change the color with the\n// properties below\n$ct-include-colored-series: $ct-include-classes !default;\n\n// If set to true this will include all responsive container variations using the scales defined at the top of the script\n$ct-include-alternative-responsive-containers: $ct-include-classes !default;\n\n// Series names and colors. This can be extended or customized as desired. Just add more series and colors.\n$ct-series-names: (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) !default;\n$ct-series-colors: (\n  $new-blue,\n  $new-red,\n  $new-orange,\n  $new-purple,\n  $new-green,\n  $new-dark-blue,\n  $new-black,\n  $social-google,\n  $social-tumblr,\n  $social-youtube,\n  $social-twitter,\n  $social-pinterest,\n  $social-behance,\n  #6188e2,\n  #a748ca\n) !default;\n","@media (min-width: 992px){\n    .navbar-form {\n        margin-top: 21px;\n        margin-bottom: 21px;\n        padding-left: 5px;\n        padding-right: 5px;\n    }\n    .navbar-nav .nav-item .dropdown-menu, .dropdown .dropdown-menu{\n        @include transform-scale(0);\n        @include transition($slow-transition-time, $transition-bezier);\n    }\n    .navbar-nav .nav-item.show .dropdown-menu, .dropdown.show .dropdown-menu{\n        @include transform-scale(1);\n        @include transform-origin($dropdown-coordinates);\n\n    }\n\n    .footer{\n        height: 60px;\n        .footer-menu{\n            float: left;\n        }\n        .copyright{\n            float: right;\n        }\n    }\n    .navbar-nav .nav-item .dropdown-menu:before{\n        border-bottom: 11px solid rgba(0, 0, 0, 0.2);\n        border-left: 11px solid rgba(0, 0, 0, 0);\n        border-right: 11px solid rgba(0, 0, 0, 0);\n        content: \"\";\n        display: inline-block;\n        position: absolute;\n        left: 12px;\n        top: -11px;\n    }\n    .navbar-nav .nav-item .dropdown-menu:after {\n        border-bottom: 11px solid #FFFFFF;\n        border-left: 11px solid rgba(0, 0, 0, 0);\n        border-right: 11px solid rgba(0, 0, 0, 0);\n        content: \"\";\n        display: inline-block;\n        position: absolute;\n        left: 12px;\n        top: -10px;\n    }\n\n    .navbar-nav.navbar-right .nav-item .dropdown-menu:before{\n        left: auto;\n        right: 12px;\n    }\n\n    .navbar-nav.navbar-right .nav-item .dropdown-menu:after{\n        left: auto;\n        right: 12px;\n    }\n\n    .footer:not(.footer-big){\n        nav > ul{\n           li:first-child{\n             margin-left: 0;\n           }\n        }\n    }\n\n    .card{\n        form{\n            [class*=\"col-\"]{\n                padding: 6px;\n            }\n            [class*=\"col-\"]:first-child{\n                padding-left: 15px;\n            }\n            [class*=\"col-\"]:last-child{\n                padding-right: 15px;\n            }\n        }\n    }\n}\n\n/*          Changes for small display      */\n\n@media (max-width: 991px){\n\n    .sidebar{\n        right: 0 !important;\n        left: auto;\n        position: absolute;\n        @include transform-translate-3d(262px);\n        @include transition (0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1));\n    }\n\n    .nav-open{\n        .main-panel{\n            position: absolute;\n            left: 0;\n            @include transform-translate-3d(-250px);\n            @include transition (0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1));\n        }\n\n        .sidebar{\n            @include transform-translate-3d(10px);\n            @include transition (0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1));\n        }\n    }\n\n    .main-panel{\n        @include transform-translate-3d(0px);\n        @include transition (0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1));\n    }\n\n\n    .nav-item.active-pro{\n        position: relative !important;\n    }\n\n    .nav-mobile-menu{\n        border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n        margin-bottom: 15px;\n        padding-bottom: 15px;\n        padding-top: 5px;\n\n        .dropdown{\n            .dropdown-menu{\n                position: static !important;\n                float: none;\n                width: auto;\n                color: $white-color;\n                margin-top: 0;\n                background-color: transparent;\n                border: 0;\n                -webkit-box-shadow: none;\n                box-shadow: none;\n                @include transition (0.5s, cubic-bezier(0.685, 0.0473, 0.346, 1));\n\n                .dropdown-item{\n                    margin: 5px 15px 0px 40px;\n                    border-radius: 4px;\n                    color: $white-color;\n                    opacity: .86;\n                    padding: 8px 50px;\n                    &:hover{\n                        background-color: rgba(255, 255, 255, 0.23)\n                    }\n                }\n            }\n\n        }\n        .nav-item{\n            .nav-link{\n                span{\n                    display: inline-block !important;\n                }\n                .no-icon{\n                    padding-left: 50px;\n                }\n            }\n        }\n    }\n    .main-panel{\n        width: 100%;\n    }\n\n    .navbar-brand{\n        padding: 15px 15px;\n    }\n    .navbar-transparent{\n        padding-top: 15px;\n        background-color: rgba(0, 0, 0, 0.45);\n    }\n    body {\n         position: relative;\n    }\n    .wrapper{\n       left: 0;\n       background-color: white;\n    }\n    .navbar .container{\n        left: 15px;\n        width: 100%;\n        position: relative;\n        top: -10px;\n    }\n\n    .navbar-nav{\n        .nav-item{\n            float: none;\n            position: relative;\n            display: block;\n        }\n    }\n\n    body > .navbar-collapse {\n        position: fixed;\n        display: block;\n        top: 0;\n        height: 100%;\n        right: 0;\n        left: auto;\n        z-index: 1032;\n        visibility: visible;\n        background-color: #999;\n        overflow-y: visible;\n        border-top: none;\n        text-align: left;\n        padding: 0;\n\n        @include transform-translate-x(260px);\n        @include transition (0.33s, cubic-bezier(0.685, 0.0473, 0.346, 1));\n        > ul {\n            position: relative;\n            z-index: 4;\n            overflow-y:scroll;\n            height: calc(100vh - 61px);\n            width: 100%;\n        }\n\n        &::before{\n            top: 0;\n            left: 0;\n            height: 100%;\n            width: 100%;\n            position: absolute;\n            background-color: #282828;\n            display: block;\n            content: \"\";\n            z-index: 1;\n        }\n\n        .logo{\n            position: relative;\n            z-index: 4;\n        }\n\n        .nav li > a{\n            padding: 10px 15px;\n        }\n    }\n    .nav-show .navbar-collapse{\n        @include transform-translate-x(0px);\n    }\n    .nav-show .navbar .container{\n        left: -250px;\n    }\n    .nav-show .wrapper{\n        left: 0;\n        @include transform-translate-x(-260px);\n    }\n    .navbar-toggle .icon-bar {\n          display: block;\n          position: relative;\n          background: #fff;\n          width: 24px;\n          height: 2px;\n          border-radius: 1px;\n          margin: 0 auto;\n    }\n\n    .navbar-header .navbar-toggle {\n        margin: 10px 15px 10px 0;\n        width: 40px;\n        height: 40px;\n    }\n    .bar1,\n    .bar2,\n    .bar3 {\n      outline: 1px solid transparent;\n    }\n    .bar1 {\n      top: 0px;\n      @include bar-animation($topbar-back);\n    }\n    .bar2 {\n      opacity: 1;\n    }\n    .bar3 {\n      bottom: 0px;\n      @include bar-animation($bottombar-back);\n    }\n    .toggled .bar1 {\n      top: 6px;\n      @include bar-animation($topbar-x);\n    }\n    .toggled .bar2 {\n      opacity: 0;\n    }\n    .toggled .bar3 {\n      bottom: 6px;\n      @include bar-animation($bottombar-x);\n    }\n\n    @include topbar-x-rotation();\n    @include topbar-back-rotation();\n    @include bottombar-x-rotation();\n    @include bottombar-back-rotation();\n\n    @-webkit-keyframes fadeIn {\n      0% {opacity: 0;}\n      100% {opacity: 1;}\n    }\n    @-moz-keyframes fadeIn {\n      0% {opacity: 0;}\n      100% {opacity: 1;}\n    }\n    @keyframes fadeIn {\n      0% {opacity: 0;}\n      100% {opacity: 1;}\n    }\n\n    .dropdown-menu .divider{\n        background-color: rgba(229, 229, 229, 0.15);\n    }\n\n    .navbar-nav {\n        margin: 1px 0;\n\n        .show .dropdown-menu .nav-item{\n            .nav-link{\n                padding: 10px 15px 10px 60px;\n            }\n        }\n    }\n\n    [class*=\"navbar-\"] .navbar-nav {\n        & > li > a,\n        > li > a:hover,\n        > li > a:focus,\n        .active > a,\n        .active > a:hover,\n        .active > a:focus,\n        .show .dropdown-menu > li > a,\n        .show .dropdown-menu > li > a:hover,\n        .show .dropdown-menu > li > a:focus,\n        .show .dropdown-menu > li > a:active {\n            color: white;\n        }\n\n        & > li > a,\n        > li > a:hover,\n        > li > a:focus{\n            opacity: .7;\n            background-color: transparent;\n            outline: none;\n        }\n\n        .show .dropdown-menu > li > a:hover,\n        .show .dropdown-menu > li > a:focus{\n            background-color: rgba(255,255,255, .1);\n        }\n\n\n\n        &.navbar-nav .show .dropdown-menu > li > a:active {\n            opacity: 1;\n        }\n\n        & .dropdown > a{\n            &:hover .caret {\n                border-bottom-color: #fff;\n                border-top-color: #fff;\n            }\n            &:active .caret {\n                border-bottom-color: white;\n                border-top-color: white;\n            }\n        }\n\n    }\n\n    .dropdown-menu {\n        display: none;\n    }\n    .navbar-fixed-top {\n        -webkit-backface-visibility: hidden;\n    }\n    #bodyClick {\n        height: 100%;\n        width: 100%;\n        position: fixed;\n        opacity: 0;\n        top: 0;\n        left: auto;\n        right: 250px;\n        content: \"\";\n        z-index: 9999;\n        overflow-x: hidden;\n    }\n\n    .social-line .btn{\n        margin: $margin-bottom;\n    }\n    .subscribe-line .form-control{\n        margin: $margin-bottom;\n    }\n    .social-line.pull-right{\n        float: none;\n    }\n    .social-area.pull-right{\n        float: none !important;\n    }\n    .form-control + .form-control-feedback{\n        margin-top: -8px;\n    }\n    .navbar-toggle:hover,.navbar-toggle:focus {\n        background-color: transparent !important;\n    }\n    .btn.dropdown-toggle{\n        margin-bottom: 0;\n    }\n    .media-post .author{\n        width: 20%;\n        float: none !important;\n        display: block;\n        margin: 0 auto 10px;\n    }\n    .media-post .media-body{\n        width: 100%;\n    }\n\n    .navbar-collapse.collapse.in {\n        display: block;\n    }\n    .navbar-header .collapse, .navbar-toggle {\n        display:block !important;\n    }\n    .navbar-header {\n        float:none;\n    }\n    .navbar-nav .show .dropdown-menu {\n        position: static;\n        float: none;\n        width: auto;\n        margin-top: 0;\n        background-color: transparent;\n        border: 0;\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n    .navbar-collapse{\n        .navbar-nav p{\n            line-height: 40px !important;\n            margin: 0;\n        }\n\n        [class^=\"pe-7s-\"]{\n            float: left;\n            font-size: 20px;\n            margin-right: 10px;\n        }\n    }\n}\n\n//overwrite table responsive for 768px screens\n\n@media (min-width: 992px){\n    .table-responsive{\n        overflow: visible;\n    }\n\n}\n\n@media (max-width: 991px){\n    .table-responsive {\n        width: 100%;\n        margin-bottom: 15px;\n        overflow-x: scroll;\n        overflow-y: hidden;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        -webkit-overflow-scrolling: touch;\n    }\n\n}\n",".bootstrap-switch {\n  display: inline-block;\n  direction: ltr;\n  cursor: pointer;\n  border-radius: 30px;\n  border: 0;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n  margin-bottom: 5px;\n  margin-left: 66px;\n  line-height: 8px;\n  width: 61px !important;\n  height: 26px;\n  outline: none;\n  z-index: 0;\n  margin-right: 1px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n\n.bootstrap-switch .bootstrap-switch-container {\n  display: inline-flex;\n  top: 0;\n  height: 26px;\n  border-radius: 4px;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  width: 100px !important;\n}\n\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off,\n.bootstrap-switch .bootstrap-switch-label {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    cursor: pointer;\n    display: inline-block !important;\n    height: 100%;\n    color: #fff;\n    padding: 6px 10px;\n    font-size: 11px;\n    text-indent: -5px;\n    line-height: 15px;\n    -webkit-transition: 0.25s ease-out;\n    transition: 0.25s ease-out;\n\n    i{\n        font-size: 12px;\n        line-height: 14px;\n  }\n}\n\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off {\n  text-align: center;\n  z-index: 1;\n  float: left;\n  width: 50% !important;\n  background-color: $info-color;\n}\n\n\n.bootstrap-switch .bootstrap-switch-label {\n  text-align: center;\n  z-index: 100;\n  color: #333333;\n  background: #ffffff;\n  width: 22px !important;\n  height: 22px;\n  margin: 2px -11px;\n  border-radius: 12px;\n  position: relative;\n  float: left;\n  padding: 0;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 1px #FFFFFF inset, 0 1px 1px rgba(0, 0, 0, 0.25);\n}\n\n.bootstrap-switch .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.bootstrap-switch .bootstrap-switch-handle-off {\n  text-indent: 6px;\n}\n\n.bootstrap-switch input[type='radio'],\n.bootstrap-switch input[type='checkbox'] {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: -1;\n}\n\n\n.bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {\n  -webkit-transition: margin-left 0.5s;\n  transition: margin-left 0.5s;\n}\n\n\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-container {\n  margin-left: -2px !important;\n}\n\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-container {\n  margin-left: -37px !important;\n}\n\n.bootstrap-switch.bootstrap-switch-on:hover .bootstrap-switch-label {\n  width: 26px !important;\n  margin: 2px -15px;\n}\n\n.bootstrap-switch.bootstrap-switch-off:hover .bootstrap-switch-label {\n  width: 26px !important;\n  margin: 2px -15px -13px -11px;\n}\n","/*--------------------------------\n\nnucleo-icons Web Font - built using nucleoapp.com\nLicense - nucleoapp.com/license/\n\n-------------------------------- */\n@font-face {\n  font-family: 'nucleo-icons';\n//   src: url('../../assets/fonts/nucleo-icons.eot');\n//   src: url('../../assets/fonts/nucleo-icons.eot') format('embedded-opentype'), url('../../assets/fonts/nucleo-icons.woff2') format('woff2'), url('../../assets/fonts/nucleo-icons.woff') format('woff'), url('../../assets/fonts/nucleo-icons.ttf') format('truetype'), url('../../assets/fonts/nucleo-icons.svg') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/*------------------------\n\tbase class definition\n-------------------------*/\n.nc-icon {\n  display: inline-block;\n  font: normal normal normal 14px/1 'nucleo-icons';\n  font-size: inherit;\n  speak: none;\n  text-transform: none;\n  /* Better Font Rendering */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/*------------------------\n  change icon size\n-------------------------*/\n.nc-icon.lg {\n  font-size: 1.33333333em;\n  vertical-align: -16%;\n}\n.nc-icon.x2 {\n  font-size: 2em;\n}\n.nc-icon.x3 {\n  font-size: 3em;\n}\n/*----------------------------------\n  add a square/circle background\n-----------------------------------*/\n.nc-icon.square,\n.nc-icon.circle {\n  padding: 0.33333333em;\n  vertical-align: -16%;\n  background-color: #eee;\n}\n.nc-icon.circle {\n  border-radius: 50%;\n}\n/*------------------------\n  list icons\n-------------------------*/\n.nc-icon-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.nc-icon-ul > li {\n  position: relative;\n}\n.nc-icon-ul > li > .nc-icon {\n  position: absolute;\n  left: -1.57142857em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.nc-icon-ul > li > .nc-icon.lg {\n  top: 0;\n  left: -1.35714286em;\n}\n.nc-icon-ul > li > .nc-icon.circle,\n.nc-icon-ul > li > .nc-icon.square {\n  top: -0.19047619em;\n  left: -1.9047619em;\n}\n\n.all-icons{\n    .font-icon-list{\n        .font-icon-detail i{\n            font-size: 32px;\n        }\n    }\n}\n/*------------------------\n  spinning icons\n-------------------------*/\n.nc-icon.spin {\n  -webkit-animation: nc-icon-spin 2s infinite linear;\n  -moz-animation: nc-icon-spin 2s infinite linear;\n  animation: nc-icon-spin 2s infinite linear;\n}\n@-webkit-keyframes nc-icon-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@-moz-keyframes nc-icon-spin {\n  0% {\n    -moz-transform: rotate(0deg);\n  }\n  100% {\n    -moz-transform: rotate(360deg);\n  }\n}\n@keyframes nc-icon-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n/*------------------------\n  rotated/flipped icons\n-------------------------*/\n.nc-icon.rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.nc-icon.rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.nc-icon.rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  -o-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.nc-icon.flip-y {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  -o-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.nc-icon.flip-x {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: scale(1, -1);\n  -moz-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  -o-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n/*------------------------\n\tfont icons\n-------------------------*/\n\n.nc-air-baloon::before {\n    content: \"\\ea01\";\n}\n\n.nc-album-2::before {\n    content: \"\\ea02\";\n}\n\n.nc-alien-33::before {\n    content: \"\\ea03\";\n}\n\n.nc-align-center::before {\n    content: \"\\ea04\";\n}\n\n.nc-align-left-2::before {\n    content: \"\\ea05\";\n}\n\n.nc-ambulance::before {\n    content: \"\\ea06\";\n}\n\n.nc-android::before {\n    content: \"\\ea07\";\n}\n\n.nc-app::before {\n    content: \"\\ea08\";\n}\n\n.nc-apple::before {\n    content: \"\\ea09\";\n}\n\n.nc-atom::before {\n    content: \"\\ea0a\";\n}\n\n.nc-attach-87::before {\n    content: \"\\ea0b\";\n}\n\n.nc-audio-92::before {\n    content: \"\\ea0c\";\n}\n\n.nc-backpack::before {\n    content: \"\\ea0d\";\n}\n\n.nc-badge::before {\n    content: \"\\ea0e\";\n}\n\n.nc-bag::before {\n    content: \"\\ea0f\";\n}\n\n.nc-bank::before {\n    content: \"\\ea10\";\n}\n\n.nc-battery-81::before {\n    content: \"\\ea11\";\n}\n\n.nc-bell-55::before {\n    content: \"\\ea12\";\n}\n\n.nc-bold::before {\n    content: \"\\ea13\";\n}\n\n.nc-bulb-63::before {\n    content: \"\\ea14\";\n}\n\n.nc-bullet-list-67::before {\n    content: \"\\ea15\";\n}\n\n.nc-bus-front-12::before {\n    content: \"\\ea16\";\n}\n\n.nc-button-pause::before {\n    content: \"\\ea17\";\n}\n\n.nc-button-play::before {\n    content: \"\\ea18\";\n}\n\n.nc-button-power::before {\n    content: \"\\ea19\";\n}\n\n.nc-camera-20::before {\n    content: \"\\ea1a\";\n}\n\n.nc-caps-small::before {\n    content: \"\\ea1b\";\n}\n\n.nc-cart-simple::before {\n    content: \"\\ea1c\";\n}\n\n.nc-cctv::before {\n    content: \"\\ea1d\";\n}\n\n.nc-chart-bar-32::before {\n    content: \"\\ea1e\";\n}\n\n.nc-chart-pie-35::before {\n    content: \"\\ea1f\";\n}\n\n.nc-chart-pie-36::before {\n    content: \"\\ea20\";\n}\n\n.nc-chart::before {\n    content: \"\\ea21\";\n}\n\n.nc-chat-round::before {\n    content: \"\\ea22\";\n}\n\n.nc-check-2::before {\n    content: \"\\ea23\";\n}\n\n.nc-circle-09::before {\n    content: \"\\ea24\";\n}\n\n.nc-circle::before {\n    content: \"\\ea25\";\n}\n\n.nc-cloud-download-93::before {\n    content: \"\\ea26\";\n}\n\n.nc-cloud-upload-94::before {\n    content: \"\\ea27\";\n}\n\n.nc-compass-05::before {\n    content: \"\\ea28\";\n}\n\n.nc-controller-modern::before {\n    content: \"\\ea29\";\n}\n\n.nc-credit-card::before {\n    content: \"\\ea2a\";\n}\n\n.nc-delivery-fast::before {\n    content: \"\\ea2b\";\n}\n\n.nc-email-83::before {\n    content: \"\\ea2c\";\n}\n\n.nc-email-85::before {\n    content: \"\\ea2d\";\n}\n\n.nc-explore-2::before {\n    content: \"\\ea2e\";\n}\n\n.nc-fav-remove::before {\n    content: \"\\ea2f\";\n}\n\n.nc-favourite-28::before {\n    content: \"\\ea30\";\n}\n\n.nc-globe-2::before {\n    content: \"\\ea31\";\n}\n\n.nc-grid-45::before {\n    content: \"\\ea32\";\n}\n\n.nc-headphones-2::before {\n    content: \"\\ea33\";\n}\n\n.nc-html5::before {\n    content: \"\\ea34\";\n}\n\n.nc-istanbul::before {\n    content: \"\\ea35\";\n}\n\n.nc-key-25::before {\n    content: \"\\ea36\";\n}\n\n.nc-layers-3::before {\n    content: \"\\ea37\";\n}\n\n.nc-light-3::before {\n    content: \"\\ea38\";\n}\n\n.nc-lock-circle-open::before {\n    content: \"\\ea39\";\n}\n\n.nc-map-big::before {\n    content: \"\\ea3a\";\n}\n\n.nc-mobile::before {\n    content: \"\\ea3c\";\n}\n\n.nc-money-coins::before {\n    content: \"\\ea3b\";\n}\n\n.nc-note-03::before {\n    content: \"\\ea3d\";\n}\n\n.nc-notes::before {\n    content: \"\\ea3e\";\n}\n\n.nc-notification-70::before {\n    content: \"\\ea3f\";\n}\n\n.nc-palette::before {\n    content: \"\\ea40\";\n}\n\n.nc-paper-2::before {\n    content: \"\\ea41\";\n}\n\n.nc-pin-3::before {\n    content: \"\\ea42\";\n}\n\n.nc-planet::before {\n    content: \"\\ea43\";\n}\n\n.nc-preferences-circle-rotate::before {\n    content: \"\\ea44\";\n}\n\n.nc-puzzle-10::before {\n    content: \"\\ea45\";\n}\n\n.nc-quote::before {\n    content: \"\\ea46\";\n}\n\n.nc-refresh-02::before {\n    content: \"\\ea47\";\n}\n\n.nc-ruler-pencil::before {\n    content: \"\\ea48\";\n}\n\n.nc-satisfied::before {\n    content: \"\\ea49\";\n}\n\n.nc-scissors::before {\n    content: \"\\ea4a\";\n}\n\n.nc-send::before {\n    content: \"\\ea4b\";\n}\n\n.nc-settings-90::before {\n    content: \"\\ea4c\";\n}\n\n.nc-settings-gear-64::before {\n    content: \"\\ea4d\";\n}\n\n.nc-settings-tool-66::before {\n    content: \"\\ea4e\";\n}\n\n.nc-simple-add::before {\n    content: \"\\ea4f\";\n}\n\n.nc-simple-delete::before {\n    content: \"\\ea50\";\n}\n\n.nc-simple-remove::before {\n    content: \"\\ea51\";\n}\n\n.nc-single-02::before {\n    content: \"\\ea52\";\n}\n\n.nc-single-copy-04::before {\n    content: \"\\ea53\";\n}\n\n.nc-spaceship::before {\n    content: \"\\ea54\";\n}\n\n.nc-square-pin::before {\n    content: \"\\ea55\";\n}\n\n.nc-stre-down::before {\n    content: \"\\ea56\";\n}\n\n.nc-stre-left::before {\n    content: \"\\ea57\";\n}\n\n.nc-stre-right::before {\n    content: \"\\ea58\";\n}\n\n.nc-stre-up::before {\n    content: \"\\ea59\";\n}\n\n.nc-sun-fog-29::before {\n    content: \"\\ea5a\";\n}\n\n.nc-support-17::before {\n    content: \"\\ea5b\";\n}\n\n.nc-tablet-2::before {\n    content: \"\\ea5c\";\n}\n\n.nc-tag-content::before {\n    content: \"\\ea5d\";\n}\n\n.nc-tap-01::before {\n    content: \"\\ea5e\";\n}\n\n.nc-time-alarm::before {\n    content: \"\\ea5f\";\n}\n\n.nc-tv-2::before {\n    content: \"\\ea60\";\n}\n\n.nc-umbrella-13::before {\n    content: \"\\ea61\";\n}\n\n.nc-vector::before {\n    content: \"\\ea62\";\n}\n\n.nc-watch-time::before {\n    content: \"\\ea63\";\n}\n\n.nc-zoom-split::before {\n    content: \"\\ea64\";\n}\n\n\n/* all icon font classes list here */\n",".rna-container{\n  .alert {\n    border-radius: 4px;\n    button.close{\n      color: #000;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      span {\n        margin-top: -4px;\n      }\n    }\n  }\n}\n",".sidebar{\n    &[data-color=\"black\"]:after{\n        @include icon-gradient(#282828, rgba(#111,.7));\n    }\n    .logo-img img {\n      max-width: 40px;\n      max-height: 40px;\n    }\n}\n\n@media (max-width: 991px){\n  .sidebar .nav > li.active.active-pro {\n    position: relative;\n    bottom: unset;\n  }\n}\n\n#bodyClick {\n  position: absolute;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/animate.min.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/animate.min.css ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2015 Daniel Eden\n*/.animated{animation-duration:1s;animation-fill-mode:both}.animated.infinite{animation-iteration-count:infinite}.animated.hinge{animation-duration:2s}.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{animation-duration:.75s}@keyframes bounce{100%,20%,53%,80%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1);transform:translate3d(0,0,0)}40%,43%{animation-timing-function:cubic-bezier(0.755,.050,.855,.060);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(0.755,.050,.855,.060);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}.bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{100%,50%,from{opacity:1}25%,75%{opacity:0}}.flash{animation-name:flash}@keyframes pulse{from{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}100%{transform:scale3d(1,1,1)}}.pulse{animation-name:pulse}@keyframes rubberBand{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(0.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}100%{transform:scale3d(1,1,1)}}.rubberBand{animation-name:rubberBand}@keyframes shake{100%,from{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}.shake{animation-name:shake}@keyframes swing{20%{transform:rotate3d(0,0,1,15deg)}40%{transform:rotate3d(0,0,1,-10deg)}60%{transform:rotate3d(0,0,1,5deg)}80%{transform:rotate3d(0,0,1,-5deg)}100%{transform:rotate3d(0,0,1,0deg)}}.swing{transform-origin:top center;animation-name:swing}@keyframes tada{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}100%{transform:scale3d(1,1,1)}}.tada{animation-name:tada}@keyframes wobble{from{transform:none}15%{transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}100%{transform:none}}.wobble{animation-name:wobble}@keyframes jello{100%,11.1%,from{transform:none}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello{animation-name:jello;transform-origin:center}@keyframes bounceIn{100%,20%,40%,60%,80%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}100%{opacity:1;transform:scale3d(1,1,1)}}.bounceIn{animation-name:bounceIn}@keyframes bounceInDown{100%,60%,75%,90%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}100%{transform:none}}.bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{100%,60%,75%,90%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}100%{transform:none}}.bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{100%,60%,75%,90%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}100%{transform:none}}.bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{100%,60%,75%,90%,from{animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}100%{transform:translate3d(0,0,0)}}.bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}100%{opacity:0;transform:scale3d(.3,.3,.3)}}.bounceOut{animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}100%{opacity:0;transform:translate3d(0,2000px,0)}}.bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}100%{opacity:0;transform:translate3d(-2000px,0,0)}}.bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}100%{opacity:0;transform:translate3d(2000px,0,0)}}.bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}100%{opacity:0;transform:translate3d(0,-2000px,0)}}.bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{from{opacity:0}100%{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0,-100%,0)}100%{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{from{opacity:0;transform:translate3d(0,-2000px,0)}100%{opacity:1;transform:none}}.fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{from{opacity:0;transform:translate3d(-100%,0,0)}100%{opacity:1;transform:none}}.fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{from{opacity:0;transform:translate3d(-2000px,0,0)}100%{opacity:1;transform:none}}.fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{from{opacity:0;transform:translate3d(100%,0,0)}100%{opacity:1;transform:none}}.fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{from{opacity:0;transform:translate3d(2000px,0,0)}100%{opacity:1;transform:none}}.fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0,100%,0)}100%{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{from{opacity:0;transform:translate3d(0,2000px,0)}100%{opacity:1;transform:none}}.fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeOut{from{opacity:1}100%{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{from{opacity:1}100%{opacity:0;transform:translate3d(0,100%,0)}}.fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{from{opacity:1}100%{opacity:0;transform:translate3d(0,2000px,0)}}.fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{from{opacity:1}100%{opacity:0;transform:translate3d(-100%,0,0)}}.fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{from{opacity:1}100%{opacity:0;transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{from{opacity:1}100%{opacity:0;transform:translate3d(100%,0,0)}}.fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{from{opacity:1}100%{opacity:0;transform:translate3d(2000px,0,0)}}.fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{from{opacity:1}100%{opacity:0;transform:translate3d(0,-100%,0)}}.fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{from{opacity:1}100%{opacity:0;transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes flip{from{transform:perspective(400px) rotate3d(0,1,0,-360deg);animation-timing-function:ease-out}40%{transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95);animation-timing-function:ease-in}100%{transform:perspective(400px);animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;animation-name:flip}@keyframes flipInX{from{transform:perspective(400px) rotate3d(1,0,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(1,0,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(1,0,0,-5deg)}100%{transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInX}@keyframes flipInY{from{transform:perspective(400px) rotate3d(0,1,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(0,1,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(0,1,0,-5deg)}100%{transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInY}@keyframes flipOutX{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}100%{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}.flipOutX{animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@keyframes flipOutY{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}100%{transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipOutY}@keyframes lightSpeedIn{from{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg);opacity:1}100%{transform:none;opacity:1}}.lightSpeedIn{animation-name:lightSpeedIn;animation-timing-function:ease-out}@keyframes lightSpeedOut{from{opacity:1}100%{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{animation-name:lightSpeedOut;animation-timing-function:ease-in}@keyframes rotateIn{from{transform-origin:center;transform:rotate3d(0,0,1,-200deg);opacity:0}100%{transform-origin:center;transform:none;opacity:1}}.rotateIn{animation-name:rotateIn}@keyframes rotateInDownLeft{from{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}100%{transform-origin:left bottom;transform:none;opacity:1}}.rotateInDownLeft{animation-name:rotateInDownLeft}@keyframes rotateInDownRight{from{transform-origin:right bottom;transform:rotate3d(0,0,1,45deg);opacity:0}100%{transform-origin:right bottom;transform:none;opacity:1}}.rotateInDownRight{animation-name:rotateInDownRight}@keyframes rotateInUpLeft{from{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}100%{transform-origin:left bottom;transform:none;opacity:1}}.rotateInUpLeft{animation-name:rotateInUpLeft}@keyframes rotateInUpRight{from{transform-origin:right bottom;transform:rotate3d(0,0,1,-90deg);opacity:0}100%{transform-origin:right bottom;transform:none;opacity:1}}.rotateInUpRight{animation-name:rotateInUpRight}@keyframes rotateOut{from{transform-origin:center;opacity:1}100%{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}.rotateOut{animation-name:rotateOut}@keyframes rotateOutDownLeft{from{transform-origin:left bottom;opacity:1}100%{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}.rotateOutDownLeft{animation-name:rotateOutDownLeft}@keyframes rotateOutDownRight{from{transform-origin:right bottom;opacity:1}100%{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}.rotateOutDownRight{animation-name:rotateOutDownRight}@keyframes rotateOutUpLeft{from{transform-origin:left bottom;opacity:1}100%{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}.rotateOutUpLeft{animation-name:rotateOutUpLeft}@keyframes rotateOutUpRight{from{transform-origin:right bottom;opacity:1}100%{transform-origin:right bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}.rotateOutUpRight{animation-name:rotateOutUpRight}@keyframes hinge{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate3d(0,0,1,80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate3d(0,0,1,60deg);transform-origin:top left;animation-timing-function:ease-in-out;opacity:1}100%{transform:translate3d(0,700px,0);opacity:0}}.hinge{animation-name:hinge}@keyframes rollIn{from{opacity:0;transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}100%{opacity:1;transform:none}}.rollIn{animation-name:rollIn}@keyframes rollOut{from{opacity:1}100%{opacity:0;transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}.rollOut{animation-name:rollOut}@keyframes zoomIn{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{animation-name:zoomIn}@keyframes zoomInDown{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}100%{opacity:0}}.zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}100%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomOutDown{animation-name:zoomOutDown}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}100%{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}.zoomOutLeft{animation-name:zoomOutLeft}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}100%{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}.zoomOutRight{animation-name:zoomOutRight}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}100%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomOutUp{animation-name:zoomOutUp}@keyframes slideInDown{from{transform:translate3d(0,-100%,0);visibility:visible}100%{transform:translate3d(0,0,0)}}.slideInDown{animation-name:slideInDown}@keyframes slideInLeft{from{transform:translate3d(-100%,0,0);visibility:visible}100%{transform:translate3d(0,0,0)}}.slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{from{transform:translate3d(100%,0,0);visibility:visible}100%{transform:translate3d(0,0,0)}}.slideInRight{animation-name:slideInRight}@keyframes slideInUp{from{transform:translate3d(0,100%,0);visibility:visible}100%{transform:translate3d(0,0,0)}}.slideInUp{animation-name:slideInUp}@keyframes slideOutDown{from{transform:translate3d(0,0,0)}100%{visibility:hidden;transform:translate3d(0,100%,0)}}.slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{from{transform:translate3d(0,0,0)}100%{visibility:hidden;transform:translate3d(-100%,0,0)}}.slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{from{transform:translate3d(0,0,0)}100%{visibility:hidden;transform:translate3d(100%,0,0)}}.slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{from{transform:translate3d(0,0,0)}100%{visibility:hidden;transform:translate3d(0,-100%,0)}}.slideOutUp{animation-name:slideOutUp}", "",{"version":3,"sources":["webpack://src/assets/css/animate.min.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2015 Daniel Eden\n*/.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animated.hinge{-webkit-animation-duration:2s;animation-duration:2s}.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s}@-webkit-keyframes bounce{100%,20%,53%,80%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(0.755,.050,.855,.060);animation-timing-function:cubic-bezier(0.755,.050,.855,.060);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(0.755,.050,.855,.060);animation-timing-function:cubic-bezier(0.755,.050,.855,.060);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes bounce{100%,20%,53%,80%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(0.755,.050,.855,.060);animation-timing-function:cubic-bezier(0.755,.050,.855,.060);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(0.755,.050,.855,.060);animation-timing-function:cubic-bezier(0.755,.050,.855,.060);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes flash{100%,50%,from{opacity:1}25%,75%{opacity:0}}@keyframes flash{100%,50%,from{opacity:1}25%,75%{opacity:0}}.flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes pulse{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.pulse{-webkit-animation-name:pulse;animation-name:pulse}@-webkit-keyframes rubberBand{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(0.75,1.25,1);transform:scale3d(0.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes rubberBand{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(0.75,1.25,1);transform:scale3d(0.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shake{100%,from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shake{100%,from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.shake{-webkit-animation-name:shake;animation-name:shake}@-webkit-keyframes swing{20%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}40%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}100%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}@keyframes swing{20%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}40%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}100%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}@-webkit-keyframes tada{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes tada{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{from{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg);transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg);transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}100%{-webkit-transform:none;transform:none}}@keyframes wobble{from{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg);transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg);transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}100%{-webkit-transform:none;transform:none}}.wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes jello{100%,11.1%,from{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{100%,11.1%,from{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes bounceIn{100%,20%,40%,60%,80%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes bounceIn{100%,20%,40%,60%,80%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{100%,60%,75%,90%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}100%{-webkit-transform:none;transform:none}}@keyframes bounceInDown{100%,60%,75%,90%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}100%{-webkit-transform:none;transform:none}}.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{100%,60%,75%,90%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}100%{-webkit-transform:none;transform:none}}@keyframes bounceInLeft{100%,60%,75%,90%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}100%{-webkit-transform:none;transform:none}}.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{100%,60%,75%,90%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}100%{-webkit-transform:none;transform:none}}@keyframes bounceInRight{100%,60%,75%,90%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}100%{-webkit-transform:none;transform:none}}.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{100%,60%,75%,90%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{100%,60%,75%,90%,from{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}100%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}100%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}100%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}100%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}100%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}100%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}100%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}100%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}100%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}100%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{from{opacity:0}100%{opacity:1}}@keyframes fadeIn{from{opacity:0}100%{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{from{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDownBig{from{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}100%{opacity:1;-webkit-transform:none;transform:none}}.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{from{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeft{from{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{from{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeftBig{from{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{from{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRight{from{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{from{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRightBig{from{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}100%{opacity:1;-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{from{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUpBig{from{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}100%{opacity:1;-webkit-transform:none;transform:none}}.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeOut{from{opacity:1}100%{opacity:0}}@keyframes fadeOut{from{opacity:1}100%{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes flip{from{-webkit-transform:perspective(400px) rotate3d(0,1,0,-360deg);transform:perspective(400px) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{from{-webkit-transform:perspective(400px) rotate3d(0,1,0,-360deg);transform:perspective(400px) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip}@-webkit-keyframes flipInX{from{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}100%{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{from{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}100%{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX}@-webkit-keyframes flipInY{from{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-20deg);transform:perspective(400px) rotate3d(0,1,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(0,1,0,10deg);transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-5deg);transform:perspective(400px) rotate3d(0,1,0,-5deg)}100%{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{from{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-20deg);transform:perspective(400px) rotate3d(0,1,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(0,1,0,10deg);transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-5deg);transform:perspective(400px) rotate3d(0,1,0,-5deg)}100%{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY}@-webkit-keyframes flipOutX{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}100%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@keyframes flipOutX{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}100%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}.flipOutX{-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-15deg);transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}100%{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}@keyframes flipOutY{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-15deg);transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}100%{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY}@-webkit-keyframes lightSpeedIn{from{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1}100%{-webkit-transform:none;transform:none;opacity:1}}@keyframes lightSpeedIn{from{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1}100%{-webkit-transform:none;transform:none;opacity:1}}.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOut{from{opacity:1}100%{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}@keyframes lightSpeedOut{from{opacity:1}100%{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{from{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,-200deg);transform:rotate3d(0,0,1,-200deg);opacity:0}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateIn{from{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,-200deg);transform:rotate3d(0,0,1,-200deg);opacity:0}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn}@-webkit-keyframes rotateInDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft}@-webkit-keyframes rotateInDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight}@-webkit-keyframes rotateInUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft}@-webkit-keyframes rotateInUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-90deg);transform:rotate3d(0,0,1,-90deg);opacity:0}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-90deg);transform:rotate3d(0,0,1,-90deg);opacity:0}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight}@-webkit-keyframes rotateOut{from{-webkit-transform-origin:center;transform-origin:center;opacity:1}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,200deg);transform:rotate3d(0,0,1,200deg);opacity:0}}@keyframes rotateOut{from{-webkit-transform-origin:center;transform-origin:center;opacity:1}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,200deg);transform:rotate3d(0,0,1,200deg);opacity:0}}.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut}@-webkit-keyframes rotateOutDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}}@keyframes rotateOutDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}}.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft}@-webkit-keyframes rotateOutDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}}@keyframes rotateOutDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}}.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight}@-webkit-keyframes rotateOutUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}}@keyframes rotateOutUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}}.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft}@-webkit-keyframes rotateOutUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,90deg);transform:rotate3d(0,0,1,90deg);opacity:0}}@keyframes rotateOutUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,90deg);transform:rotate3d(0,0,1,90deg);opacity:0}}.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight}@-webkit-keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate3d(0,0,1,80deg);transform:rotate3d(0,0,1,80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate3d(0,0,1,60deg);transform:rotate3d(0,0,1,60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}100%{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}@keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate3d(0,0,1,80deg);transform:rotate3d(0,0,1,80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate3d(0,0,1,60deg);transform:rotate3d(0,0,1,60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}100%{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}.hinge{-webkit-animation-name:hinge;animation-name:hinge}@-webkit-keyframes rollIn{from{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg);transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes rollIn{from{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg);transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}100%{opacity:1;-webkit-transform:none;transform:none}}.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg);transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}@keyframes rollOut{from{opacity:1}100%{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg);transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}@keyframes zoomInDown{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}@keyframes zoomInLeft{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}@keyframes zoomInRight{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}@keyframes zoomInUp{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{from{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}100%{opacity:0}}@keyframes zoomOut{from{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}100%{opacity:0}}.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}100%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}100%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}100%{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}100%{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}100%{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}100%{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}100%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(0.55,.055,.675,.19);animation-timing-function:cubic-bezier(0.55,.055,.675,.19)}100%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175,.885,.32,1);animation-timing-function:cubic-bezier(0.175,.885,.32,1)}}.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp}@-webkit-keyframes slideInDown{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes slideInDown{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes slideInLeft{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes slideInRight{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideInUp{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes slideInUp{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes slideOutDown{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes slideOutLeft{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes slideOutRight{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes slideOutUp{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/demo.css ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n\n=========================================================\n* Light Bootstrap Dashboard React - v2.0.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react\n* Copyright 2020 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n*/\n.fixed-plugin .button-container .github-btn{\n    display: inline-block;\n    font-size: 14px;\n}\n/*.fixed-plugin .button-container .github-btn .gh-btn,\n.fixed-plugin .button-container .github-btn .gh-count{\n    padding: 5px 7px 5px 7px;\n}*/\n.fixed-plugin .SocialMediaShareButton{\n    display: inline-block;\n    margin: 0 2px;\n}\n.fixed-plugin li > a,\n.fixed-plugin .badge{\n    transition: all .34s;\n    -webkit-transition: all .34s;\n    -moz-transition: all .34s;\n}\n\n.all-icons [class*=\"pe-\"]{\n    font-size: 40px;\n}\n.all-icons input{\n    border: 0;\n}\n.all-icons .font-icon-detail{\n    text-align: center;\n    padding: 45px 0px 30px;\n    border: 1px solid #e5e5e5;\n    border-radius: 6px;\n    margin: 15px 0;\n}\n.all-icons .font-icon-detail input{\n    margin: 25px auto 0;\n    width: 100%;\n    text-align: center;\n    display: block;\n    color: #aaa;\n    font-size: 13px;\n}\n\n#map{\n    position:relative;\n    width:100%;\n    height: 100%;\n}\n\n.map-container {\n    width: 100%;\n    height: 100vh;\n    max-height: 100vh;\n}\n\n.places-buttons .btn{\n    margin-bottom: 30px\n}\n.sidebar .nav > li.active-pro{\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n}\n.sidebar .nav > li.active-pro a{\n    background: rgba(255, 255, 255, 0.14);\n    opacity: 1;\n    color: #FFFFFF;\n}\n\n.table-upgrade td:nth-child(2),\n.table-upgrade td:nth-child(3){\n    text-align: center;\n}\n\n.fixed-plugin{\n    position: absolute;\n    top: 180px;\n    right: 0;\n    width: 64px;\n    background: rgba(0,0,0,.3);\n    z-index: 1031;\n    border-radius: 8px 0 0 8px;\n    text-align: center;\n}\n.fixed-plugin .fa-cog{\n    color: #FFFFFF;\n    padding: 10px;\n    border-radius: 0 0 6px 6px;\n    width: auto;\n}\n.fixed-plugin .dropdown-menu{\n    right: 80px;\n    left: auto;\n    width: 290px;\n    border-radius: 10px;\n    padding: 0 10px;\n}\n.fixed-plugin .dropdown-menu:after, .fixed-plugin .dropdown-menu:before{\n    right: 10px;\n    margin-left: auto;\n    left: auto;\n}\n.fixed-plugin .fa-circle-thin{\n    color: #FFFFFF;\n}\n.fixed-plugin .active .fa-circle-thin{\n    color: #00bbff;\n}\n\n.footer-dropdown{\n\ttop: -120px !important;\n}\n\n.footer-dropdown:before, .footer-dropdown:after{\n\ttop: 300px !important;\n}\n\n.fixed-plugin .dropdown-menu > .active > a,\n.fixed-plugin .dropdown-menu > .active > a:hover,\n.fixed-plugin .dropdown-menu > .active > a:focus{\n    color: #777777;\n    text-align: center;\n}\n\n.fixed-plugin img{\n    border-radius: 0;\n    width: 100%;\n    max-height: 175px;\n    margin: 0 auto;\n}\n\n.fixed-plugin .badge{\n    border: 3px solid #FFFFFF;\n    border-radius: 50%;\n    cursor: pointer;\n    display: inline-block;\n    height: 23px;\n    margin-right: 5px;\n    position: relative;\n    width: 23px;\n}\n.fixed-plugin .badge.active,\n.fixed-plugin .badge:hover{\n    border-color: #00bbff;\n}\n\n.fixed-plugin .badge-white{\n    background-color: #FFFFFF;\n}\n.fixed-plugin .badge-black{\n    background-color: #1DC7EA;\n}\n.fixed-plugin .badge-azure{\n    background-color: #1DC7EA;\n}\n.fixed-plugin .badge-green{\n    background-color: #87CB16;\n}\n.fixed-plugin .badge-orange{\n    background-color: #FFA534;\n}\n.fixed-plugin .badge-purple{\n    background-color: #9368E9;\n}\n.fixed-plugin .badge-red{\n    background-color: #FB404B;\n}\n.fixed-plugin h5{\n    font-size: 14px;\n    margin: 10px;\n}\n.fixed-plugin .dropdown-menu li{\n    display: block;\n    padding: 5px 2px;\n    width: 25%;\n    float: left;\n}\n\n.fixed-plugin li.adjustments-line,\n.fixed-plugin li.header-title,\n.fixed-plugin li.button-container{\n    width: 100%;\n    height: 50px;\n    min-height: inherit;\n    text-align: center;\n}\n.fixed-plugin .pro-title{\n    margin: 10px 0 5px 0;\n    text-align: center;\n}\n\n.fixed-plugin #sharrreTitle{\n    text-align: center;\n    padding: 10px 0;\n    height: 50px;\n}\n\n.fixed-plugin li.header-title{\n    height: 30px;\n    line-height: 40px;\n    font-size: 12px;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.fixed-plugin .adjustments-line p{\n    float: left;\n    display: inline-block;\n    margin-bottom: 0;\n    font-size: 1em;\n}\n.fixed-plugin .adjustments-line .switch{\n    float: right;\n}\n.fixed-plugin .dropdown-menu > li.adjustments-line > a{\n      padding-right: 0;\n      padding-left: 0;\n      border-bottom: 1px solid #ddd;\n      margin: 0;\n}\n.fixed-plugin .dropdown-menu > li > a.img-holder{\n      font-size: 16px;\n      text-align: center;\n      border-radius: 10px;\n      background-color: #FFF;\n      border: 3px solid #FFF;\n      padding-left: 0;\n      padding-right: 0;\n      opacity: 1;\n      cursor: pointer;\n      max-height: 86px;\n      overflow: hidden;\n      padding: 0;\n}\n\n.fixed-plugin .dropdown-menu > li > a.switch-trigger:hover,\n.fixed-plugin .dropdown-menu > li > a.switch-trigger:focus{\n    background-color: transparent;\n}\n.fixed-plugin .dropdown-menu > li:hover > a.img-holder,\n.fixed-plugin .dropdown-menu > li:focus > a.img-holder{\n    border-color: rgba(0, 187, 255, 0.53);;\n}\n.fixed-plugin .dropdown-menu > .active > a.img-holder,\n.fixed-plugin .dropdown-menu > .active > a.img-holder{\n    border-color: #00bbff;\n    background-color: #FFFFFF;\n}\n\n.fixed-plugin .dropdown-menu > li > a img{\n    margin-top: auto;\n}\n\n.fixed-plugin .btn-social{\n    width: 50%;\n    display: block;\n    width: 48%;\n    float: left;\n    font-weight: 600;\n}\n.fixed-plugin .btn-social i{\n    margin-right: 5px;\n}\n.fixed-plugin .btn-social:first-child{\n    margin-right: 2%;\n}\n\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus{\n    opacity: 1;\n}\n\n\n@media (min-width: 992px){\n    .fixed-plugin .dropdown .dropdown-menu{\n         transform: translateY(-50%);\n         top: 27px;\n         opacity: 0;\n\n         transform-origin: 0 0;\n    }\n    .fixed-plugin .dropdown.open .dropdown-menu{\n         opacity: 1;\n         transform: translateY(-50%);\n\n         transform-origin: 0 0;\n    }\n\n    .fixed-plugin .dropdown-menu:before,\n    .fixed-plugin .dropdown-menu:after{\n        content: \"\";\n        display: inline-block;\n        position: absolute;\n        top: 50%;\n        width: 16px;\n        transform: translateY(-50%);\n        -webkit-transform: translateY(-50%);\n        -moz-transform: translateY(-50%);\n\n    }\n    .fixed-plugin .dropdown-menu:before{\n        border-bottom: 16px solid rgba(0, 0, 0, 0);\n        border-left: 16px solid rgba(0,0,0,0.2);\n        border-top: 16px solid rgba(0,0,0,0);\n        right: -16px;\n    }\n\n    .fixed-plugin .dropdown-menu:after{\n        border-bottom: 16px solid rgba(0, 0, 0, 0);\n        border-left: 16px solid #FFFFFF;\n        border-top: 16px solid rgba(0,0,0,0);\n        right: -15px;\n    }\n\n    .typo-line{\n        padding-left: 140px;\n        margin-bottom: 40px;\n        position: relative;\n    }\n\n    .typo-line .category{\n        transform: translateY(-50%);\n        top: 50%;\n        left: 0px;\n        position: absolute;\n    }\n\n    .fixed-plugin{\n        top: 300px;\n    }\n\n}\n\n@media (max-width: 991px){\n    .fixed-plugin .dropdown-menu{\n        right: 60px;\n        width: 220px;\n    }\n    .fixed-plugin .dropdown-menu li{\n        width: 50%;\n    }\n\n    .fixed-plugin li.adjustments-line,\n    .fixed-plugin li.header-title,\n    .fixed-plugin li.button-container{\n        width: 100%;\n        height: 55px;\n        min-height: inherit;\n    }\n\n    .fixed-plugin .adjustments-line .switch{\n        float: right;\n        margin: 0 0px;\n    }\n\n    .fixed-plugin li.header-title{\n        height: 40px;\n    }\n    .fixed-plugin .dropdown .dropdown-menu{\n        top: -170px;\n    }\n}\n\n.btn-social {\n  opacity: 0.85;\n  padding: 8px 9px;\n}\n.btn-social .fa {\n  font-size: 18px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.btn-social.btn-round {\n  padding: 9px 10px;\n}\n.btn-social.btn-simple {\n  padding: 9px 5px;\n  font-size: 16px;\n}\n.btn-social.btn-simple .fa {\n  font-size: 20px;\n  position: relative;\n  top: -2px;\n  width: 24px;\n}\n\n.btn-facebook {\n  border-color: #3b5998;\n  color: #3b5998;\n}\n.btn-facebook:hover,\n.btn-facebook:focus,\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .btn-facebook.dropdown-toggle {\n  background-color: transparent;\n  color: #3b5998;\n  border-color: #3b5998;\n  opacity: 1;\n}\n.btn-facebook:disabled,\n.btn-facebook[disabled],\n.btn-facebook.disabled {\n  background-color: transparent;\n  border-color: #3b5998;\n}\n.btn-facebook.btn-fill {\n  color: #ffffff;\n  background-color: #3b5998;\n  opacity: 0.9;\n}\n.btn-facebook.btn-fill:hover,\n.btn-facebook.btn-fill:focus,\n.btn-facebook.btn-fill:active,\n.btn-facebook.btn-fill.active,\n.open > .btn-facebook.btn-fill.dropdown-toggle {\n  background-color: #3b5998;\n  color: #ffffff;\n  opacity: 1;\n}\n.btn-twitter {\n  border-color: #55acee;\n  color: #55acee;\n}\n.btn-twitter:hover,\n.btn-twitter:focus,\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .btn-twitter.dropdown-toggle {\n  background-color: transparent;\n  color: #55acee;\n  border-color: #55acee;\n  opacity: 1;\n}\n.btn-twitter:disabled,\n.btn-twitter[disabled],\n.btn-twitter.disabled {\n  background-color: transparent;\n  border-color: #55acee;\n}\n.btn-twitter.btn-fill {\n  color: #ffffff;\n  background-color: #55acee;\n  opacity: 0.9;\n}\n.btn-twitter.btn-fill:hover,\n.btn-twitter.btn-fill:focus,\n.btn-twitter.btn-fill:active,\n.btn-twitter.btn-fill.active,\n.open > .btn-twitter.btn-fill.dropdown-toggle {\n  background-color: #55acee;\n  color: #ffffff;\n  opacity: 1;\n}\n\n@media (min-width: 992px){\n    .typo-line{\n        padding-left: 140px;\n        margin-bottom: 40px;\n        position: relative;\n    }\n\n    .typo-line .category{\n        transform: translateY(-50%);\n        top: 50%;\n        left: 0px;\n        position: absolute;\n    }\n}\n\n.all-icons [class*=\"pe-\"]{\n    font-size: 40px;\n}\n.all-icons input{\n    border: 0;\n}\n.all-icons .font-icon-detail{\n    text-align: center;\n    padding: 45px 0px 30px;\n    border: 1px solid #e5e5e5;\n    border-radius: 6px;\n    margin: 15px 0;\n}\n.all-icons .font-icon-detail input{\n    margin: 25px auto 0;\n    width: 100%;\n    text-align: center;\n    display: block;\n    color: #aaa;\n    font-size: 13px;\n}\n\n.places-buttons .btn{\n    margin-bottom: 30px\n}\n.sidebar .nav > li.active-pro{\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n}\n.sidebar .nav > li.active-pro a{\n    background: rgba(255, 255, 255, 0.14);\n    opacity: 1;\n    color: #FFFFFF;\n}\n\n.table-upgrade td:nth-child(2),\n.table-upgrade td:nth-child(3){\n    text-align: center;\n}\n.react-toggle {\n  touch-action: pan-x;\n\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.react-toggle-screenreader-only {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.react-toggle--disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n  transition: opacity 0.25s;\n}\n\n.react-toggle-track {\n  width: 50px;\n  height: 24px;\n  padding: 0;\n  border-radius: 30px;\n  background-color: #4D4D4D;\n  transition: all 0.2s ease;\n}\n\n.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #5d5d5d;\n}\n\n.react-toggle--checked .react-toggle-track {\n  background-color: #1fc6ea;\n}\n\n.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #1fc6ea;\n}\n\n.react-toggle-track-check {\n  position: absolute;\n  width: 14px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  left: 8px;\n  opacity: 0;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-track-check {\n  opacity: 1;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle-track-x {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  right: 10px;\n  opacity: 1;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-track-x {\n  opacity: 0;\n}\n\n.react-toggle-thumb {\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #4D4D4D;\n  border-radius: 50%;\n  background-color: #FAFAFA;\n  box-sizing: border-box;\n  transition: all 0.25s ease;\n\n  outline: 0;\n}\n\n.react-toggle--checked .react-toggle-thumb {\n  left: 27px;\n  border-color: #1fc6ea;\n}\n\n.github-btn {\n  font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  height: 20px;\n  overflow: hidden;\n}\n.gh-btn,\n.gh-count,\n.gh-ico {\n  float: left;\n}\n.gh-btn,\n.gh-count {\n  padding: 2px 5px 2px 4px;\n  color: #333;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.gh-btn {\n  background-color: #eee;\n  background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee', GradientType=0);\n  background-repeat: no-repeat;\n  border: 1px solid #d5d5d5;\n}\n.gh-btn:hover,\n.gh-btn:focus {\n  text-decoration: none;\n  background-color: #ddd;\n  background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd', GradientType=0);\n  border-color: #ccc;\n}\n.gh-btn:active {\n  background-image: none;\n  background-color: #dcdcdc;\n  border-color: #b5b5b5;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);\n}\n.gh-ico {\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n.gh-count {\n  position: relative;\n  display: none; /* hidden to start */\n  margin-left: 4px;\n  background-color: #fafafa;\n  border: 1px solid #d4d4d4;\n}\n.gh-count:hover,\n.gh-count:focus {\n  color: #4183C4;\n}\n.gh-count:before,\n.gh-count:after {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.gh-count:before {\n  top: 50%;\n  left: -3px;\n  margin-top: -4px;\n  border-width: 4px 4px 4px 0;\n  border-right-color: #fafafa;\n}\n.gh-count:after {\n  top: 50%;\n  left: -4px;\n  z-index: -1;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #d4d4d4;\n}\n.github-btn-large {\n  height: 30px;\n}\n.github-btn-large .gh-btn,\n.github-btn-large .gh-count {\n  padding: 3px 10px 3px 8px;\n  font-size: 16px;\n  line-height: 22px;\n  border-radius: 4px;\n}\n.github-btn-large .gh-ico {\n  width: 20px;\n  height: 20px;\n}\n.github-btn-large .gh-count {\n  margin-left: 6px;\n}\n.github-btn-large .gh-count:before {\n  left: -5px;\n  margin-top: -6px;\n  border-width: 6px 6px 6px 0;\n}\n.github-btn-large .gh-count:after {\n  left: -6px;\n  margin-top: -7px;\n  border-width: 7px 7px 7px 0;\n}\n.typography-line span {\n    bottom: 10px;\n    color: #9A9A9A;\n    display: block;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 13px;\n    left: 5px;\n    position: absolute;\n    width: 260px;\n    text-transform: none;\n}\n.typography-line {\n    padding-left: 15%;\n    margin-bottom: 35px;\n    position: relative;\n    display: block;\n    width: 100%;\n}\n", "",{"version":3,"sources":["webpack://src/assets/css/demo.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;CAgBC;AACD;IACI,qBAAqB;IACrB,eAAe;AACnB;AACA;;;EAGE;AACF;IACI,qBAAqB;IACrB,aAAa;AACjB;AACA;;IAEI,oBAAoB;IACpB,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;AACA;IACI,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI;AACJ;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;AACA;IACI,qCAAqC;IACrC,UAAU;IACV,cAAc;AAClB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,WAAW;IACX,0BAA0B;IAC1B,aAAa;IACb,0BAA0B;IAC1B,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,aAAa;IACb,0BAA0B;IAC1B,WAAW;AACf;AACA;IACI,WAAW;IACX,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,UAAU;AACd;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;;;IAGI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;AACf;AACA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,cAAc;IACd,gBAAgB;IAChB,UAAU;IACV,WAAW;AACf;;AAEA;;;IAGI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,YAAY;AAChB;AACA;MACM,gBAAgB;MAChB,eAAe;MACf,6BAA6B;MAC7B,SAAS;AACf;AACA;MACM,eAAe;MACf,kBAAkB;MAClB,mBAAmB;MACnB,sBAAsB;MACtB,sBAAsB;MACtB,eAAe;MACf,gBAAgB;MAChB,UAAU;MACV,eAAe;MACf,gBAAgB;MAChB,gBAAgB;MAChB,UAAU;AAChB;;AAEA;;IAEI,6BAA6B;AACjC;AACA;;IAEI,qCAAqC;AACzC;AACA;;IAEI,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,UAAU;IACV,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,UAAU;AACd;;;AAGA;IACI;SAKK,2BAA2B;SAC3B,SAAS;SACT,UAAU;;SAEV,qBAAqB;IAC1B;IACA;SACK,UAAU;SAMV,2BAA2B;;SAE3B,qBAAqB;IAC1B;;IAEA;;QAEI,WAAW;QACX,qBAAqB;QACrB,kBAAkB;QAClB,QAAQ;QACR,WAAW;QACX,2BAA2B;QAC3B,mCAAmC;QACnC,gCAAgC;;IAEpC;IACA;QACI,0CAA0C;QAC1C,uCAAuC;QACvC,oCAAoC;QACpC,YAAY;IAChB;;IAEA;QACI,0CAA0C;QAC1C,+BAA+B;QAC/B,oCAAoC;QACpC,YAAY;IAChB;;IAEA;QACI,mBAAmB;QACnB,mBAAmB;QACnB,kBAAkB;IACtB;;IAEA;QACI,2BAA2B;QAC3B,QAAQ;QACR,SAAS;QACT,kBAAkB;IACtB;;IAEA;QACI,UAAU;IACd;;AAEJ;;AAEA;IACI;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,UAAU;IACd;;IAEA;;;QAGI,WAAW;QACX,YAAY;QACZ,mBAAmB;IACvB;;IAEA;QACI,YAAY;QACZ,aAAa;IACjB;;IAEA;QACI,YAAY;IAChB;IACA;QACI,WAAW;IACf;AACJ;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,sBAAsB;EACtB,qBAAqB;AACvB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;;;;;EAKE,6BAA6B;EAC7B,cAAc;EACd,qBAAqB;EACrB,UAAU;AACZ;AACA;;;EAGE,6BAA6B;EAC7B,qBAAqB;AACvB;AACA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;AACd;AACA;;;;;EAKE,yBAAyB;EACzB,cAAc;EACd,UAAU;AACZ;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;;;;;EAKE,6BAA6B;EAC7B,cAAc;EACd,qBAAqB;EACrB,UAAU;AACZ;AACA;;;EAGE,6BAA6B;EAC7B,qBAAqB;AACvB;AACA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;AACd;AACA;;;;;EAKE,yBAAyB;EACzB,cAAc;EACd,UAAU;AACZ;;AAEA;IACI;QACI,mBAAmB;QACnB,mBAAmB;QACnB,kBAAkB;IACtB;;IAEA;QACI,2BAA2B;QAC3B,QAAQ;QACR,SAAS;QACT,kBAAkB;IACtB;AACJ;;AAEA;IACI,eAAe;AACnB;AACA;IACI,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,eAAe;AACnB;;AAEA;IACI;AACJ;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;AACA;IACI,qCAAqC;IACrC,UAAU;IACV,cAAc;AAClB;;AAEA;;IAEI,kBAAkB;AACtB;AACA;EACE,mBAAmB;;EAEnB,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,6BAA6B;EAC7B,SAAS;EACT,UAAU;;EAEV,2BAA2B;EAC3B,yBAAyB;EAIzB,iBAAiB;;EAEjB,0CAA0C;EAC1C,wCAAwC;AAC1C;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,YAAY;EAEZ,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,yBAAyB;EAGzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,SAAS;EACT,UAAU;EAGV,8BAA8B;AAChC;;AAEA;EACE,UAAU;EAGV,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,UAAU;EAGV,8BAA8B;AAChC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,uDAAuD;EACvD,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EAIzB,sBAAsB;EAItB,0BAA0B;;EAE1B,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,mEAAmE;EACnE,YAAY;EACZ,gBAAgB;AAClB;AACA;;;EAGE,WAAW;AACb;AACA;;EAEE,wBAAwB;EACxB,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,sBAAsB;EAMtB,kEAAkE;EAClE,kHAAkH;EAClH,4BAA4B;EAC5B,yBAAyB;AAC3B;AACA;;EAEE,qBAAqB;EACrB,sBAAsB;EAMtB,+DAA+D;EAC/D,kHAAkH;EAClH,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,qBAAqB;EACrB,+CAA+C;AACjD;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,moCAAmoC;EACnoC,0BAA0B;EAC1B,4BAA4B;AAC9B;AACA;EACE,kBAAkB;EAClB,aAAa,EAAE,oBAAoB;EACnC,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;;EAEE,cAAc;AAChB;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,QAAQ;EACR,SAAS;EACT,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,QAAQ;EACR,UAAU;EACV,gBAAgB;EAChB,2BAA2B;EAC3B,2BAA2B;AAC7B;AACA;EACE,QAAQ;EACR,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,2BAA2B;EAC3B,2BAA2B;AAC7B;AACA;EACE,YAAY;AACd;AACA;;EAEE,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,2BAA2B;AAC7B;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,2BAA2B;AAC7B;AACA;IACI,YAAY;IACZ,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,WAAW;AACf","sourcesContent":["/*!\n\n=========================================================\n* Light Bootstrap Dashboard React - v2.0.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react\n* Copyright 2020 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n*/\n.fixed-plugin .button-container .github-btn{\n    display: inline-block;\n    font-size: 14px;\n}\n/*.fixed-plugin .button-container .github-btn .gh-btn,\n.fixed-plugin .button-container .github-btn .gh-count{\n    padding: 5px 7px 5px 7px;\n}*/\n.fixed-plugin .SocialMediaShareButton{\n    display: inline-block;\n    margin: 0 2px;\n}\n.fixed-plugin li > a,\n.fixed-plugin .badge{\n    transition: all .34s;\n    -webkit-transition: all .34s;\n    -moz-transition: all .34s;\n}\n\n.all-icons [class*=\"pe-\"]{\n    font-size: 40px;\n}\n.all-icons input{\n    border: 0;\n}\n.all-icons .font-icon-detail{\n    text-align: center;\n    padding: 45px 0px 30px;\n    border: 1px solid #e5e5e5;\n    border-radius: 6px;\n    margin: 15px 0;\n}\n.all-icons .font-icon-detail input{\n    margin: 25px auto 0;\n    width: 100%;\n    text-align: center;\n    display: block;\n    color: #aaa;\n    font-size: 13px;\n}\n\n#map{\n    position:relative;\n    width:100%;\n    height: 100%;\n}\n\n.map-container {\n    width: 100%;\n    height: 100vh;\n    max-height: 100vh;\n}\n\n.places-buttons .btn{\n    margin-bottom: 30px\n}\n.sidebar .nav > li.active-pro{\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n}\n.sidebar .nav > li.active-pro a{\n    background: rgba(255, 255, 255, 0.14);\n    opacity: 1;\n    color: #FFFFFF;\n}\n\n.table-upgrade td:nth-child(2),\n.table-upgrade td:nth-child(3){\n    text-align: center;\n}\n\n.fixed-plugin{\n    position: absolute;\n    top: 180px;\n    right: 0;\n    width: 64px;\n    background: rgba(0,0,0,.3);\n    z-index: 1031;\n    border-radius: 8px 0 0 8px;\n    text-align: center;\n}\n.fixed-plugin .fa-cog{\n    color: #FFFFFF;\n    padding: 10px;\n    border-radius: 0 0 6px 6px;\n    width: auto;\n}\n.fixed-plugin .dropdown-menu{\n    right: 80px;\n    left: auto;\n    width: 290px;\n    border-radius: 10px;\n    padding: 0 10px;\n}\n.fixed-plugin .dropdown-menu:after, .fixed-plugin .dropdown-menu:before{\n    right: 10px;\n    margin-left: auto;\n    left: auto;\n}\n.fixed-plugin .fa-circle-thin{\n    color: #FFFFFF;\n}\n.fixed-plugin .active .fa-circle-thin{\n    color: #00bbff;\n}\n\n.footer-dropdown{\n\ttop: -120px !important;\n}\n\n.footer-dropdown:before, .footer-dropdown:after{\n\ttop: 300px !important;\n}\n\n.fixed-plugin .dropdown-menu > .active > a,\n.fixed-plugin .dropdown-menu > .active > a:hover,\n.fixed-plugin .dropdown-menu > .active > a:focus{\n    color: #777777;\n    text-align: center;\n}\n\n.fixed-plugin img{\n    border-radius: 0;\n    width: 100%;\n    max-height: 175px;\n    margin: 0 auto;\n}\n\n.fixed-plugin .badge{\n    border: 3px solid #FFFFFF;\n    border-radius: 50%;\n    cursor: pointer;\n    display: inline-block;\n    height: 23px;\n    margin-right: 5px;\n    position: relative;\n    width: 23px;\n}\n.fixed-plugin .badge.active,\n.fixed-plugin .badge:hover{\n    border-color: #00bbff;\n}\n\n.fixed-plugin .badge-white{\n    background-color: #FFFFFF;\n}\n.fixed-plugin .badge-black{\n    background-color: #1DC7EA;\n}\n.fixed-plugin .badge-azure{\n    background-color: #1DC7EA;\n}\n.fixed-plugin .badge-green{\n    background-color: #87CB16;\n}\n.fixed-plugin .badge-orange{\n    background-color: #FFA534;\n}\n.fixed-plugin .badge-purple{\n    background-color: #9368E9;\n}\n.fixed-plugin .badge-red{\n    background-color: #FB404B;\n}\n.fixed-plugin h5{\n    font-size: 14px;\n    margin: 10px;\n}\n.fixed-plugin .dropdown-menu li{\n    display: block;\n    padding: 5px 2px;\n    width: 25%;\n    float: left;\n}\n\n.fixed-plugin li.adjustments-line,\n.fixed-plugin li.header-title,\n.fixed-plugin li.button-container{\n    width: 100%;\n    height: 50px;\n    min-height: inherit;\n    text-align: center;\n}\n.fixed-plugin .pro-title{\n    margin: 10px 0 5px 0;\n    text-align: center;\n}\n\n.fixed-plugin #sharrreTitle{\n    text-align: center;\n    padding: 10px 0;\n    height: 50px;\n}\n\n.fixed-plugin li.header-title{\n    height: 30px;\n    line-height: 40px;\n    font-size: 12px;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.fixed-plugin .adjustments-line p{\n    float: left;\n    display: inline-block;\n    margin-bottom: 0;\n    font-size: 1em;\n}\n.fixed-plugin .adjustments-line .switch{\n    float: right;\n}\n.fixed-plugin .dropdown-menu > li.adjustments-line > a{\n      padding-right: 0;\n      padding-left: 0;\n      border-bottom: 1px solid #ddd;\n      margin: 0;\n}\n.fixed-plugin .dropdown-menu > li > a.img-holder{\n      font-size: 16px;\n      text-align: center;\n      border-radius: 10px;\n      background-color: #FFF;\n      border: 3px solid #FFF;\n      padding-left: 0;\n      padding-right: 0;\n      opacity: 1;\n      cursor: pointer;\n      max-height: 86px;\n      overflow: hidden;\n      padding: 0;\n}\n\n.fixed-plugin .dropdown-menu > li > a.switch-trigger:hover,\n.fixed-plugin .dropdown-menu > li > a.switch-trigger:focus{\n    background-color: transparent;\n}\n.fixed-plugin .dropdown-menu > li:hover > a.img-holder,\n.fixed-plugin .dropdown-menu > li:focus > a.img-holder{\n    border-color: rgba(0, 187, 255, 0.53);;\n}\n.fixed-plugin .dropdown-menu > .active > a.img-holder,\n.fixed-plugin .dropdown-menu > .active > a.img-holder{\n    border-color: #00bbff;\n    background-color: #FFFFFF;\n}\n\n.fixed-plugin .dropdown-menu > li > a img{\n    margin-top: auto;\n}\n\n.fixed-plugin .btn-social{\n    width: 50%;\n    display: block;\n    width: 48%;\n    float: left;\n    font-weight: 600;\n}\n.fixed-plugin .btn-social i{\n    margin-right: 5px;\n}\n.fixed-plugin .btn-social:first-child{\n    margin-right: 2%;\n}\n\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus{\n    opacity: 1;\n}\n\n\n@media (min-width: 992px){\n    .fixed-plugin .dropdown .dropdown-menu{\n         -webkit-transform: translateY(-50%);\n         -moz-transform: translateY(-50%);\n         -o-transform: translateY(-50%);\n         -ms-transform: translateY(-50%);\n         transform: translateY(-50%);\n         top: 27px;\n         opacity: 0;\n\n         transform-origin: 0 0;\n    }\n    .fixed-plugin .dropdown.open .dropdown-menu{\n         opacity: 1;\n\n         -webkit-transform: translateY(-50%);\n         -moz-transform: translateY(-50%);\n         -o-transform: translateY(-50%);\n         -ms-transform: translateY(-50%);\n         transform: translateY(-50%);\n\n         transform-origin: 0 0;\n    }\n\n    .fixed-plugin .dropdown-menu:before,\n    .fixed-plugin .dropdown-menu:after{\n        content: \"\";\n        display: inline-block;\n        position: absolute;\n        top: 50%;\n        width: 16px;\n        transform: translateY(-50%);\n        -webkit-transform: translateY(-50%);\n        -moz-transform: translateY(-50%);\n\n    }\n    .fixed-plugin .dropdown-menu:before{\n        border-bottom: 16px solid rgba(0, 0, 0, 0);\n        border-left: 16px solid rgba(0,0,0,0.2);\n        border-top: 16px solid rgba(0,0,0,0);\n        right: -16px;\n    }\n\n    .fixed-plugin .dropdown-menu:after{\n        border-bottom: 16px solid rgba(0, 0, 0, 0);\n        border-left: 16px solid #FFFFFF;\n        border-top: 16px solid rgba(0,0,0,0);\n        right: -15px;\n    }\n\n    .typo-line{\n        padding-left: 140px;\n        margin-bottom: 40px;\n        position: relative;\n    }\n\n    .typo-line .category{\n        transform: translateY(-50%);\n        top: 50%;\n        left: 0px;\n        position: absolute;\n    }\n\n    .fixed-plugin{\n        top: 300px;\n    }\n\n}\n\n@media (max-width: 991px){\n    .fixed-plugin .dropdown-menu{\n        right: 60px;\n        width: 220px;\n    }\n    .fixed-plugin .dropdown-menu li{\n        width: 50%;\n    }\n\n    .fixed-plugin li.adjustments-line,\n    .fixed-plugin li.header-title,\n    .fixed-plugin li.button-container{\n        width: 100%;\n        height: 55px;\n        min-height: inherit;\n    }\n\n    .fixed-plugin .adjustments-line .switch{\n        float: right;\n        margin: 0 0px;\n    }\n\n    .fixed-plugin li.header-title{\n        height: 40px;\n    }\n    .fixed-plugin .dropdown .dropdown-menu{\n        top: -170px;\n    }\n}\n\n.btn-social {\n  opacity: 0.85;\n  padding: 8px 9px;\n}\n.btn-social .fa {\n  font-size: 18px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.btn-social.btn-round {\n  padding: 9px 10px;\n}\n.btn-social.btn-simple {\n  padding: 9px 5px;\n  font-size: 16px;\n}\n.btn-social.btn-simple .fa {\n  font-size: 20px;\n  position: relative;\n  top: -2px;\n  width: 24px;\n}\n\n.btn-facebook {\n  border-color: #3b5998;\n  color: #3b5998;\n}\n.btn-facebook:hover,\n.btn-facebook:focus,\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .btn-facebook.dropdown-toggle {\n  background-color: transparent;\n  color: #3b5998;\n  border-color: #3b5998;\n  opacity: 1;\n}\n.btn-facebook:disabled,\n.btn-facebook[disabled],\n.btn-facebook.disabled {\n  background-color: transparent;\n  border-color: #3b5998;\n}\n.btn-facebook.btn-fill {\n  color: #ffffff;\n  background-color: #3b5998;\n  opacity: 0.9;\n}\n.btn-facebook.btn-fill:hover,\n.btn-facebook.btn-fill:focus,\n.btn-facebook.btn-fill:active,\n.btn-facebook.btn-fill.active,\n.open > .btn-facebook.btn-fill.dropdown-toggle {\n  background-color: #3b5998;\n  color: #ffffff;\n  opacity: 1;\n}\n.btn-twitter {\n  border-color: #55acee;\n  color: #55acee;\n}\n.btn-twitter:hover,\n.btn-twitter:focus,\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .btn-twitter.dropdown-toggle {\n  background-color: transparent;\n  color: #55acee;\n  border-color: #55acee;\n  opacity: 1;\n}\n.btn-twitter:disabled,\n.btn-twitter[disabled],\n.btn-twitter.disabled {\n  background-color: transparent;\n  border-color: #55acee;\n}\n.btn-twitter.btn-fill {\n  color: #ffffff;\n  background-color: #55acee;\n  opacity: 0.9;\n}\n.btn-twitter.btn-fill:hover,\n.btn-twitter.btn-fill:focus,\n.btn-twitter.btn-fill:active,\n.btn-twitter.btn-fill.active,\n.open > .btn-twitter.btn-fill.dropdown-toggle {\n  background-color: #55acee;\n  color: #ffffff;\n  opacity: 1;\n}\n\n@media (min-width: 992px){\n    .typo-line{\n        padding-left: 140px;\n        margin-bottom: 40px;\n        position: relative;\n    }\n\n    .typo-line .category{\n        transform: translateY(-50%);\n        top: 50%;\n        left: 0px;\n        position: absolute;\n    }\n}\n\n.all-icons [class*=\"pe-\"]{\n    font-size: 40px;\n}\n.all-icons input{\n    border: 0;\n}\n.all-icons .font-icon-detail{\n    text-align: center;\n    padding: 45px 0px 30px;\n    border: 1px solid #e5e5e5;\n    border-radius: 6px;\n    margin: 15px 0;\n}\n.all-icons .font-icon-detail input{\n    margin: 25px auto 0;\n    width: 100%;\n    text-align: center;\n    display: block;\n    color: #aaa;\n    font-size: 13px;\n}\n\n.places-buttons .btn{\n    margin-bottom: 30px\n}\n.sidebar .nav > li.active-pro{\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n}\n.sidebar .nav > li.active-pro a{\n    background: rgba(255, 255, 255, 0.14);\n    opacity: 1;\n    color: #FFFFFF;\n}\n\n.table-upgrade td:nth-child(2),\n.table-upgrade td:nth-child(3){\n    text-align: center;\n}\n.react-toggle {\n  touch-action: pan-x;\n\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.react-toggle-screenreader-only {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.react-toggle--disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.25s;\n  transition: opacity 0.25s;\n}\n\n.react-toggle-track {\n  width: 50px;\n  height: 24px;\n  padding: 0;\n  border-radius: 30px;\n  background-color: #4D4D4D;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #5d5d5d;\n}\n\n.react-toggle--checked .react-toggle-track {\n  background-color: #1fc6ea;\n}\n\n.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #1fc6ea;\n}\n\n.react-toggle-track-check {\n  position: absolute;\n  width: 14px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  left: 8px;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-track-check {\n  opacity: 1;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle-track-x {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  right: 10px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-track-x {\n  opacity: 0;\n}\n\n.react-toggle-thumb {\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #4D4D4D;\n  border-radius: 50%;\n  background-color: #FAFAFA;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  -webkit-transition: all 0.25s ease;\n  -moz-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n\n  outline: 0;\n}\n\n.react-toggle--checked .react-toggle-thumb {\n  left: 27px;\n  border-color: #1fc6ea;\n}\n\n.github-btn {\n  font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  height: 20px;\n  overflow: hidden;\n}\n.gh-btn,\n.gh-count,\n.gh-ico {\n  float: left;\n}\n.gh-btn,\n.gh-count {\n  padding: 2px 5px 2px 4px;\n  color: #333;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.gh-btn {\n  background-color: #eee;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fcfcfc), color-stop(100%, #eee));\n  background-image: -webkit-linear-gradient(top, #fcfcfc 0, #eee 100%);\n  background-image: -moz-linear-gradient(top, #fcfcfc 0, #eee 100%);\n  background-image: -ms-linear-gradient(top, #fcfcfc 0, #eee 100%);\n  background-image: -o-linear-gradient(top, #fcfcfc 0, #eee 100%);\n  background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee', GradientType=0);\n  background-repeat: no-repeat;\n  border: 1px solid #d5d5d5;\n}\n.gh-btn:hover,\n.gh-btn:focus {\n  text-decoration: none;\n  background-color: #ddd;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #eee), color-stop(100%, #ddd));\n  background-image: -webkit-linear-gradient(top, #eee 0, #ddd 100%);\n  background-image: -moz-linear-gradient(top, #eee 0, #ddd 100%);\n  background-image: -ms-linear-gradient(top, #eee 0, #ddd 100%);\n  background-image: -o-linear-gradient(top, #eee 0, #ddd 100%);\n  background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd', GradientType=0);\n  border-color: #ccc;\n}\n.gh-btn:active {\n  background-image: none;\n  background-color: #dcdcdc;\n  border-color: #b5b5b5;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);\n}\n.gh-ico {\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n.gh-count {\n  position: relative;\n  display: none; /* hidden to start */\n  margin-left: 4px;\n  background-color: #fafafa;\n  border: 1px solid #d4d4d4;\n}\n.gh-count:hover,\n.gh-count:focus {\n  color: #4183C4;\n}\n.gh-count:before,\n.gh-count:after {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.gh-count:before {\n  top: 50%;\n  left: -3px;\n  margin-top: -4px;\n  border-width: 4px 4px 4px 0;\n  border-right-color: #fafafa;\n}\n.gh-count:after {\n  top: 50%;\n  left: -4px;\n  z-index: -1;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #d4d4d4;\n}\n.github-btn-large {\n  height: 30px;\n}\n.github-btn-large .gh-btn,\n.github-btn-large .gh-count {\n  padding: 3px 10px 3px 8px;\n  font-size: 16px;\n  line-height: 22px;\n  border-radius: 4px;\n}\n.github-btn-large .gh-ico {\n  width: 20px;\n  height: 20px;\n}\n.github-btn-large .gh-count {\n  margin-left: 6px;\n}\n.github-btn-large .gh-count:before {\n  left: -5px;\n  margin-top: -6px;\n  border-width: 6px 6px 6px 0;\n}\n.github-btn-large .gh-count:after {\n  left: -6px;\n  margin-top: -7px;\n  border-width: 7px 7px 7px 0;\n}\n.typography-line span {\n    bottom: 10px;\n    color: #9A9A9A;\n    display: block;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 13px;\n    left: 5px;\n    position: absolute;\n    width: 260px;\n    text-transform: none;\n}\n.typography-line {\n    padding-left: 15%;\n    margin-bottom: 35px;\n    position: relative;\n    display: block;\n    width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/animate.min.css":
/*!****************************************!*\
  !*** ./src/assets/css/animate.min.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./animate.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/animate.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./animate.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/animate.min.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./animate.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/animate.min.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/css/demo.css":
/*!*********************************!*\
  !*** ./src/assets/css/demo.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./demo.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./demo.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./demo.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/img/farm.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/farm.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/farm.95e8b97c.jpg");

/***/ }),

/***/ "./src/assets/img/fish5.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/fish5.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fish5.8378a0d3.jpg");

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAgMAAACWT1tcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURZ66zLbV4VVSc36Npa4QPNYAABhKSURBVHja7N0/juPIFcfxkmQlCgQH1iV0BAULYrHRBAN6lpoGHMwB5ggTddKpM+c9gAfQSD1AG3AnhoNeG3uEvYSijR15+L+KLLIpiWq+Kn4Vjdh2S/3B7z0+kkWu2vLq/FIQgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAXWaLH+9NNPfwarwysKVPaarMBqp1L66w9gtbxCVXnNwWr8wPprAlZnq+8vsF5sV85pKQG5cqYSlQgrR7ReEytowXJin6iEWCm1AqtDc3enyb/eV3zJyoG2pYQUoRNtS0kpQhcKUUkpQhcK8ZWwwk5Y0veISlCwxBeikhQs6T3+VbAipbyI1qt8u6A71nz0WEr5ES0lK1iyd4hKWLBEz1pKWLBER0sJC5boaF0fKzwRS3C0lLRgSZ4ero4VnYylxosVKH+ipcRVoeBoXfuLhedgrUaKdY6V2OnhyljRWVhqnFjBeVjzUWKdZyW1DpXEKpTa4pXEKpRah0piFUqtw6tihWdjyaxDJbIKhdahElmFQuvwmljRBVgi61DJrEKZdahkVqHMOlRCq1Dk8eEVv1N4GdZqVFiXWUmsQyW1CseFdWEVSqzD62EFl2LNR4R1qZXAOlRSW5bE4UGJbVkCm5YS27IENi0ltmUJbFpKbhXKa1qisVYjwerDSlzTEo01GQdW1AuWGgdW2A/WahRYgfKxaSnBLUtc01KSW5a0pqUktyxpTUtJblnSmpaS3LLAcrjDXwWrt/4urMNf5duE/WGtvMcKlJ9NS4luWcKalpLdsvzH6rFlyerw4rFWnmMFfWLNPcfq00pU07oCVgTWUFjKb6ywX6yV11hBv1hzr7EUWINhTXzG6rm/S+rw/X+VEKwBsVYeYwXK2w7fP5YCa0Csib9Yve8MBXX43r9JCNagWCtvsQLlb4cHa0is/q3k7A77xorAGhZL+YoVXgNrBRZYwTWw5p5iKbAGxpr4iRWBNTSW8hMrvA7WCqyxYwVgDY419xLrOlZSdodgDYYVgTU8lvIRKwRLANYKrHFjBdfCmnuIpcASgDUBa9RYEVgSsJR/WCFYIrBWYI0ZKwBLBNYcrDFjXc9KxqAF1kBYEVgysBRYI8YKwRKCtQJrvFgBWEKw5mCNF0uBJQRrAhZYYA18tAOWa8c7YA2DFYIFlotYK7DAAmvY42iwXDuSBgss8VgKLDFYE7BIFskCq0esCCywnMRSYIEFFlg9YoVggeUm1gossMACC6xBsAKwwALLe6w5WCSLZIEFFlhgeYSlwCJZJItkkSySRbLAIlluJmtCskgWySJZJItkkSySRbJIFslyCGtCGZIskkXPIlkki2SBRbJIFskiWSRLOlZIskgWySJZJMvPZIUki2SRLJIFlp/JikiWICySRbJIFskiWcNgbV8nWR/3+x3J6pistRdYJEsS1hysU5NFGY4vWQE9Sw6WV3tDkiUuWZ5ghewN5WCRrLH2rJC9obRkeXKKJnqVZIFFskjWgEfSE7BIFskiWX1iBSRLDBbJGm2ywtlxr71+z//KH/St/063rffmK9m8+P6P21In3v5cvJt9f/dNP5CO/qf9/w+/5t/C/DS5WBvj7z9kf+XSZHm0YiWbF8WPcx3Nbvr93Wf9QPqT+WmrdOvP5q+9k4r1897GUnXZ2bF2Geu9oaPZxT/8oiXrpvILnrb5WQnj10rF+kvl6x/KgOivZytWvDnmeTB0NLtFClJgvd3bWKqE+9+EYq2tLEtbwVmw7lPXnaGj2cVv/6aVYe03JHX4YW8PnLgD6b2VZVPd+mDH2qUtvcTa7GtvfyuTVf+0u3ojS/cJErHe28Ki1HFvq8461iHFOhQ6633trYZV/7TP8eb6p8nE+mANS61lpdW5tm6O/1QTq3wb/0w7rVz/tK/WvO1XIrHeWMMyrX/9WzvWbbr1WdfR3mYpyZNl+TRr3uI+JxDrY/2L2vp72srW1s0bfbLa17B2GtZHa4bqeeuzw6sr7gyTv3Sxt7aytXWzjjUzhrXk7VetDC2/4Lf69JLOZgKxjtbK2tS3PtixHswRfmpiTbM9W56so7Xg6sWZ9n1xWPvGyuqGtTNH+KW2Ry0H+ALL8ml3lsmh19mhxwW4diy7SsNmfYRfaFNZhvVUlqHt056sneyrRKwbYypKI5VhlQd4yd+8q59+yTbrI/xCP5RM396VybrRjp3j16bE+qXc+qNkrIfK33+fYuksdqxsHJ1p4Bvz3MUmmwI0LL3A3qVVuk6HMb017KRi3Wt//jR9fzTzVntvbtZ01uX4oQ3weRneVPZz7wusXWWn4wTWrEjWrgPWOt2sjfDHvTForbNhXEvWU+XTLVhrwViPFaxHa7J2zVjaCK/P++XRjo71pfLpT25h3VsVdhaVBqxyKp1VTiHmx8Rre7IacFxJVkOS2pO1KX7J1Dh1UQzwTclyEKtDstp7VjnCJzPp0cD6tm3uWd4k69C9DMsRPv7XYV0MGtP8wGXtTbIeOyWrpQzLET7O2G5TYOVHOx4l6+8v96z2ZE0LndjpYVHMXYscx5+e9c9GhY49qxzh4wp8WBZTaX6049He8EunZLWUYTnCJ719Wkyl+dGOR8l6unRvWI7wyYhVXpTOj3Y86llfggvnrGKET5lmxVSaD/Ae7Q2/BS/2rPYGn2Dd5ljPSr+gdthum886OIh1+GOXZLVh5SP8NG3t63yUKM61NJzPcgyrdu7y9zPmrGSvd5/PpCnWTj/aaTpTmi05cgVra73yrCwXFg7208oH7ZShyiasfCqdFlXXdA4+jZntbLUbV3caVoC0YuUj/Ka83JNfffxsYB2t1wfdxdo1JGv3Alb+84fscFo/2ikK62hFcQbrY9dFDW3Jykf47HzDVLtU+w8jWR+tixqcwXpjXdRwYrJUFqVjWsYz7VLtnYH1xrrkyBmsD12v07clKxvhi9Fdu/r4i1GGH6yXnp3BemeN0PEMrOd8Ji3KMf6f/2ok65310rMzWNuuKq1lmI7w0/x0Q9boY7PKPdLWJUfuYK1tS45OTVY6wi/1FYK79GTE3Bwz67/BKay3tt3hqT0rHeGLs37pP5LL+pVkvbUtOXIH68a2Ozx1b5iO8MX55HQqTbDmJtaNbcmRO1j1BT+3pydrmTSp4gA6mUqfk7m++sSQT5bZwSEs426afXFF+qRkpSP8Oj81k06lSdwqyap/2pNTWPErrC85ajvLUHufjvDH/NAyPf2XXE5sfWLIJ/vl+35fvWNFlSVHxxOx0hG+XORQYs3bTrq8cxJrW1ly9MKZ0fr7OFT/LZfPJFNpsgSiNVkNS45cwZq9lKxdM9Z/Sqyk1Sdn5udtWDduYgXt67NeTFYM89dyUVsyRCQHjK3Pz3IUK6yt/DsNK9b5V4mVTKUJlo/JCmvJOq1nLYybOIs7NA7tz89yFCvq2rMasJZ7Y033srCbe1iG29re8Dyse+OulO92PiZre+HecGoujyyxfOxZ+e7w3J41MxfeqiJoPu4N8w5/7t5QmUu684PLR7+SlT8BJbpszqpirfOgmT2r8rwVx7CKRUBRtWedVoZ5lJR5W8qtuTfseNOAZKwvWoc/d2+YRemgzBuens1k2W4acBIraLt352WsjXE3WD5KKLNn2e7dSc86HFzB+qZ1+GV5xc+OtW/AWhj3GWajxKHybOWOd4VJxkqXsoQt9xvqWI9tWPfG83viH9aS9fL9hmKxut/J2noOPq+7R+PJUHFVGj2r+52sbqzParxHeqesmw9G3T0aT7+Iq9I8Nux8j7QjS46a7r4/KOsTDA5G3T2bWPfVp3Z3vvteJlbn5zq8gKUqWJsMy5zgOz/XwZX1WQ1PDNnZN5tY5p3pcVWax4aWT9tanxjiyvqshmfRtGwu6k4bwhZZQZvJ6vwsGlfWZ+3023crKi1Ya/MO/WVWlWbP6vyUI5lYXZ+f1bTW9KDX3YN5G3+MZe4N39sfOnN0dn3WrfXJbOXdAQ1YC/Oe2FnWwl5an3UXb/3k7Pos+zP/0mQt27Eeaw/IqJ7P6vjMP1fWZ+3sT5MslyU3YC0rWNn5w8qZ0o5Pk3RlfZb9OaX6ekg71tR8EG5+lqeSrG7PKXVlfVbDE3D1W8TtWDNjJk3a24Plv7vT6Qm4rqzPsj9buVT5oQ1LP0OxSPt99bphl2crC1+fZV4P46ndJ1wP43nwA2H5m6yIZA3atPxN1hXq0ONkhSRryKblcbK2JGvIpuVzskKSNWDT8jlZvdfhBCySdZU69DpZW5I1XB36nayIZA1Wh34nq+c69DxZIckaqg49T1a/deh7siKSNVAd+p6sXuvQ+2RFJGuYOvQ+WX2OWv4nKyJZg7R4/5PVYx2OIFlbkjVEtMaQrIhkDdDix5Cs3qI1imT1Fa1RJKuvaI0jWT1FaxzJ6mnWGkmy+onWWJK1JVmvPMaPJllbkvW648N4ktVDjx9PsnooxBEl6/JCHFOyLt4jjilZF7etUSXr/+3dTW7bRhjGcX6AGy/oBigvoSMQQeJFD6AC5n18FC2FEdEI6K4NEB3AQO/BLuq1azTll8QhOSONYo8JDv/cJLEXAX545p13yOHwtWVrWcl6pdbCkvW6Ir+0ZL0qW/7isDKSdc31E8l6h8K1xGT9cLr8hWKV18+/vOn1q9NYb79c+gDWNbUOrGsW4glYV8yiCVhX3OIB64r+zAfLPFlWW1fXkmW1bDmXLJsD0b1kWYyWe8myGC0Hk2UvWg4my160XEyWtWi5mCxr0XIyWbai5WSybLXxbibLI1ne1OPQ0WT5JGvqcehosuyUeFeT5ZOsiUu8q8myMg6dTZZPsqadD51Nlo2i5W6yIpI16Th0N1keyZp0HDqcrIhkTTkOHU6WR7Km7LRcTlZEsiZcHrqcLI9kTVi0nE5WRLKmK1pOJ8snWdNVeKeT9dYV3u1kJSRrsunQ7WT5JGt8PT4e3qPCu5Csz6K8voFlkqxPor6+HKxX+PknKxbt9cV6hZ99skJxur6CdSFZqRC7F8+7fS61Dpanw7knKyitDsfSlVuu8HNPVnG0qjP2ANaZZN0K8STB5Xanw5knK5V9QkXVSkiWhicVG6vT4byTFfcHXih2YGmTVQzG3fOoxPsk65SkbfPn939eVElbMNZaMQr3p4X0vonazmbvMOtkFaJtH8SxIU1H8yHJaq9aqF0cbryX+h8bi73DnJMV1GOvXPCIP/4Vm6AOVbEFS5msVDSFa/fU0OWnn1nqHeacrCZFQbs4bJqsYNg8RCSrKVlNfXrqlfth0fJJVjPu+jPfbd02rLZgKZJ1MyxPH+uf7sBSJGuYIXXePJJV16iN8j5z28svHOt+uDB8UGINDROSpRhvx+5rC9YoWfFO/RxxWOFJliJBXeKsdaXzTdZKXd9HtSwiWWUh32v2Pgx+QbL0k+Eocj7JKrF0O5DSHKxBsnSTYTkdbsEaJOtmq8MKdrZa+NkmK811WMMBSrK8dKPdYTpo7UmWvnMof/UA1lovEn4845iQLHms3fY3lA4arWTxyZKreFicnkiryhnJkpfLaf2UVeoqcrDWumaqEKIXrXgLVi9ZEkhcbZV8Ft0Pgq2llfRckxXn0ijc97dqDVr4aPHJkupSs80o7sbhoIUnWd2M126ckfbPgDVIVocVl+Pv058H+TFif71DslZ76QFFXDWl0gPqPpa/+GR1WKvcW5Wdw0PYEfUXhySr81htwmabZHefuY9FsjoP8RCLL/+JnbR+XoGlTlY5+qpdt6mQav5qT7KUNx3KPqHI64c9XesF1iBZh65dbzr4fbcCSsFSJyveNtPgaiNhbUhWD6tbJDZ3a27ybkkI1iBZ3SKxQnqqEgaWOlmhhFUOv3jnBVvpZ2Cpk5VuylmwbB6CXSg095VJVpeiuFrvPOixSFY/WUW5NNx5mmFIsvpYqwqLZF2eDZtheAhIlkmyytmwXBlSs4z6rKp1yOtOnmRd6OCPnXu8pYM3WBs2y51Uu9zxwJKeto4X0tx1WCuTdbxFI/bcz9Ilq5Bu/lUPwQLxkIKlw+ruwde3lZ+FtC0LLC3WPhai2hfCAwsd1kp6FOY1h2DwKEyLtZf2eFe72Q6B7iErWNLje1GdsJLL7xny+F63MaQ69uLzd0+/MQQsectRfn7L0SKxMt1mtubpTlffQ3b+9bF62yS/1gdD6d50IlnSBtxAiN//ks8ojdmA28e6Yms3WHIRrw8532lfGgCrN+Odfx0FrF4vFRa9s+BXYGXZ3ZmXCs/8KgFrpX85U4A1wGoKU2jw2i9Y7QvlN/vLh9GA1TZTqgNp4h1YwxcOlWdHqk58yMCqG61AdSDN8MQHsJo5LxaXD+4Bqz2QINhe7hyWeRbN4KyCVTXa9l64v3DYGFhdHY83FzoHsLoOYXSAj8UjcOeElamO3hwd4DPUi8A6HXVb1vmPvYXP8FBXsDqVspwX8jaj0OKB8LPCulMcVFocyoVzmJ+w4uHBuAlYpyPO/642tpX91rF2Des7WKdH0e3Cp1xVHzfdFjlYihb+uIoOqrecjk8pxt+SycCSTs8vsard3W2POlpag9UWrUN7qFGwPT6iTm1+/2pWWPeqjxQ1b2Ye14hWv6w2Z6xOJsgHfmANu9Lq/ab2b91HbA980UmNFY9yZPfTmbPGGn1WNB7fk08Wi3U3GocPZz87umis9fkP2AbjUbjUj0Fmqm+r9aJUiD1YeqxUzlIsFA97lot1Pz77XTpEUvU5dx+s3lHBT6ePSCu+8RQtFytTfFbgqPUsFMFaNNadKlri2+Pj90KIneLjYQlYnjfcq9zfrwyWcjo8fUdaOQjfdjJ0AKv9QnnvWwNgqafDKltlbf/tRWnlLxkr8667IrDA+uHp8NyVgGV+ZYvGWoP1yulQe/nLxsomrO9gOY11N91kOD+s9XT13W0sf+lY92DZqfDR4rHuJqvvM8RaT1bfZ4h1P1nJchorAsu8aIF1BVYGlvE49MEyx4rAMh+HYF2BlYFlPA59sMyXhxFY5uMwAct8eZiBZVy0fLDMi1YClvk4zMAyHoc+WObjMALLfBxmYBmPQx8s83GYgGU+DjOwjKMVgWW+PkzAMi7xfgaWcbQSsIyjZStYM8bSRysCy7h7sBasOWPpohWBZVy17AVr1ljqaCVgGbfxUQaW6UD0M7CMZ8QMLGOtBCxjLdslcu5YUt3yE7AuarUdxAf7k2/mxPXrh/f4XxzBeqe2DgKwwAILLLDAggAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAgsssMCCACywwAILLLAgAAsssMACCywIwAILLLDAAgsCsMACCyywwIIALLDAAgsssCAACyywwAILLAjAAgsssMACCwKwwAILLLDAggAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAgsssMCCACywwAILLLAgAAsssMACCywIwAILLLDAAgsCsMACCyywwIIALLDAAgsssCAACyywwAILLAjAAgsssMACCwKwwAILLLDAggAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAgsssMCCACywwAILLLAgAAsssMACCywIwAILLLDAAgsCsMACCyywwIIALLDAAgsssCAACyywwAILLAjAAgsssMACCwKwwAILLLDAggAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAgsssMCCACywwAILLLAgAAsssMACCywIwAILLLDAAgsCsMACCyywwIIALLDAAgsssCAACyywwAILLAjAAgsssMACCwKwwJr6+h/gKK3+cDOgyAAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/assets/img/logo_transparent.png":
/*!*********************************************!*\
  !*** ./src/assets/img/logo_transparent.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAgMAAACWT1tcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURWV5mkdwTFhafFVSc9uXCVQAAAADdFJOU0wAm+Qr+rYAABgwSURBVHja7N09juPIGcbxkgQlVqAdwDrFBjqCGGzmYOgZaibowAdwMEeYto05wuR7gz2COunIsfM24AbsyD2AG+gB1JJH/Kwii2qqSYlvFf+KRmysPn546tXLYrFWrXk0figIwAILLLDAAgsCsMACCyywwIIALLDAAgsssCAACyywwAILLAjAAgsssMACCwKwwAILLLDAggAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAgsssMCCACywwAILLLAgAAsssMACCywIwAILLLDAAgsCsMACCyywwIIALLDAAgsssCAACyywwAILLAjAAgsssMACCwKwwAILLLDAggAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAgsssMCCACywwAILLLAgAAsssMACCywIwAILLLDAAgsCsMACCyywwIIALLDAAgsssCAACyywwAILLAjAAgsssMACCwKwwAILLLDAggAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAgsssMCCACywwAILLLAgAAsssMACCywIwAILLLDAAgsCsMACCyywwIIALLDAAgsssCAACyywwAILLAjAAgsssMACCwKwwAILLLDAggAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAgsssMCCACywwAILLLAgAAsssMACCywIwAJrsFi//+WXP4LV4BEFKn2MFmA1pIq5wDryCFXpMQWr9g2rjxFYja1+PMCylSulXNZSAnLlzEhUIqwc0bokVnAEy4nfxAtiheroYwFWg+LuTpG/3Ed8ycqBsnUxrOBFLPllS0kZhC4MRCVlELowEC+EFTbCkv6LqAQFS/xAVJKCJb3GXwQrUsqLaF3k0wXNsaaDx1LKj2gpWcGS/YOohAVLdK91AazwJCzJ0VLCgiU6WkpasCRHS0kLluTu4exY0clYarhYgfInWkrcKBRc4s+NFb4CS2yJV/KCJTdaZ8aKXoWlhokVvA5rOkis11lJHYdK4iiUWuKVxFEodRwqiaNQ6jg8K1b4aiyZ41CJHIVCx6ES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");

/***/ }),

/***/ "./src/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0":
/*!**********************************************************************!*\
  !*** ./src/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0 ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./light-bootstrap-dashboard-react.scss?v=2.0.0 */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./light-bootstrap-dashboard-react.scss?v=2.0.0 */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./light-bootstrap-dashboard-react.scss?v=2.0.0 */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Channels/frame.js":
/*!******************************************!*\
  !*** ./src/components/Channels/frame.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/components/Channels/frame.js",
    _s = __webpack_require__.$Refresh$.signature();




function Frame(props) {
  _s();

  const [overlay, setOverlay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const n = `${props.sn}/${props.channel}`;
  const src = `/stream/${n}`;

  function handleClick() {
    window.open(src, '_blank').focus();
  }

  function addCss() {
    let css = "img {width: 100%; height: 100%}";
    let style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    let interval = setInterval(() => {
      let iframe = document.getElementById(n);

      if (iframe) {
        iframe.contentWindow.document.head.appendChild(style);
        clearInterval(interval);
      }
    }, 10);
  }

  const frameStyle = {
    width: "100%",
    height: "500px"
  };
  const overlayStyle = {
    display: overlay ? "block" : "none",
    position: "absolute",
    width: "10%",
    height: "50px",
    top: "0",
    left: "0",
    background: "rgba(255,255,255,0.5)"
  };
  const wrapperStyle = {
    display: "inline-block",
    position: "relative",
    width: "49.9%"
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    style: wrapperStyle,
    onMouseEnter: () => setOverlay(true),
    onMouseLeave: () => setOverlay(false),
    onClick: () => handleClick(),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("iframe", {
      title: `device-${props.sn}`,
      src: src,
      style: frameStyle,
      name: n,
      id: n
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), addCss(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: overlayStyle,
      children: "Full Screen"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(Frame, "5Mz2SQg8HpfXzntz9YWLX5WWRcw=");

_c = Frame;
/* harmony default export */ __webpack_exports__["default"] = (Frame);

var _c;

__webpack_require__.$Refresh$.register(_c, "Frame");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Channels/recording.js":
/*!**********************************************!*\
  !*** ./src/components/Channels/recording.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame */ "./src/components/Channels/frame.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/components/Channels/recording.js",
    _s = __webpack_require__.$Refresh$.signature();







function Recording(props) {
  _s();

  const [ch, setch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  function handleClick(ch) {
    setch(ch);
  }

  function renderChannels() {
    let lis = [];

    for (let i = 0; i < props.current.channels; i++) {
      lis.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
        onClick: () => handleClick(i),
        children: i
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 16
      }, this));
    }

    return lis;
  }

  function renderFrames() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_frame__WEBPACK_IMPORTED_MODULE_2__["default"], {
      channel: ch,
      sn: props.current.sn
    }, `Channels-${ch}`, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }, this);
  }

  const styleMain = {
    width: "100%",
    height: "100%",
    textAlign: "center",
    position: "relative"
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: props.current ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        children: "STREAMS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: ["Choose channel:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("ul", {
            children: renderChannels()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          style: styleMain,
          children: renderFrames()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      variant: "danger",
      children: "Please select device first!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }, this)
  }, void 0, false);
}

_s(Recording, "470nSCIXsQxWdd+BGUnn5k2tKGA=");

_c = Recording;
/* harmony default export */ __webpack_exports__["default"] = (Recording);

var _c;

__webpack_require__.$Refresh$.register(_c, "Recording");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Configuration/configForm.js":
/*!****************************************************!*\
  !*** ./src/components/Configuration/configForm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules */ "./src/components/Configuration/rules.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/components/Configuration/configForm.js",
    _s = __webpack_require__.$Refresh$.signature();






function ConfigForm(props) {
  _s();

  const [current, setCurrent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCurrent(props.current);
  }, [props.current]);

  function addRule() {
    let rules = [];

    if (current.rules) {
      rules = JSON.parse(current.rules);
    }

    let rule = {
      id: rules.length + 1,
      recurring: 'Hour',
      start: 0,
      duration: 0
    };
    rules.push(rule);
    let rulesString = JSON.stringify(rules);
    setCurrent({ ...current,
      rules: rulesString
    });
  }

  function removeRule(e, ind) {
    let rules = JSON.parse(current.rules);
    rules.splice(ind, 1);
    let rulesString = JSON.stringify(rules);
    setCurrent({ ...current,
      rules: rulesString
    });
  }

  function handleRuleChange(e, i) {
    console.log(i, current.rules[i]);
    let newRules = current.rules.map((rule, ind) => {
      if (ind === i) {
        rule = { ...rule,
          [e.target.name]: e.target.value
        };
      }

      return rule;
    });
    console.log(current.rules, newRules);
    setCurrent({ ...current,
      rules: newRules
    });
  }

  function handleChange(e) {
    let value = e.target.value;

    if (e.target.name === "cleanup") {
      value = e.target.checked.toString();
    }

    setCurrent({ ...current,
      [e.target.name]: value
    });
  }

  function renderRules() {
    if (current.rules) {
      return current.rules.map((rule, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_rules__WEBPACK_IMPORTED_MODULE_2__["default"], {
        rule: rule,
        handleRuleChange: handleRuleChange,
        removeRule: removeRule,
        id: i
      }, `rule-row-${i}`, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this));
    }

    return "";
  }

  function renderForm() {
    if (current === undefined) {
      return;
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: e => props.handleSubmit(e, current),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          children: "Rules"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }, this), renderRules(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-fill pull-right",
        style: {
          marginRight: "10px"
        },
        onClick: addRule,
        children: " + "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btn-fill pull-right",
        type: "submit",
        variant: "info",
        children: "Update Configuration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "clearfix"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
        as: "h4",
        children: "Edit Configuration"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      children: renderForm()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, this);
}

_s(ConfigForm, "uvFezLwn+gJf846iuKQF3Fru6BU=");

_c = ConfigForm;
/* harmony default export */ __webpack_exports__["default"] = (ConfigForm);

var _c;

__webpack_require__.$Refresh$.register(_c, "ConfigForm");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Configuration/instructions.js":
/*!******************************************************!*\
  !*** ./src/components/Configuration/instructions.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/components/Configuration/instructions.js";




function Instructions() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: "card-user",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "card-image",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        alt: "...",
        src: __webpack_require__(/*! assets/img/fish5.jpg */ "./src/assets/img/fish5.jpg").default
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Card"].Body, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "author",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          alt: "...",
          className: "avatar border-gray",
          src: __webpack_require__(/*! assets/img/logo.png */ "./src/assets/img/logo.png").default
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          className: "title",
          children: "Instructions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            style: {
              fontWeight: "bold"
            },
            children: "Offset"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, this), " - id of first camera, if there is a webcam on computer use 2 otherwise 0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            style: {
              fontWeight: "bold"
            },
            children: "Type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, this), " - Record Video or Images", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                style: {
                  fontWeight: "bold"
                },
                children: "Video"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 19
              }, this), " - record video according to the rule schedule"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                style: {
                  fontWeight: "bold"
                },
                children: "Image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, this), " - record an image according to the rule schedule"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            style: {
              fontWeight: "bold"
            },
            children: "Recurring"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, this), " - When to record video/image", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                style: {
                  fontWeight: "bold"
                },
                children: "Daily"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, this), " - record every day on the same hour (start) / for image see below"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                style: {
                  fontWeight: "bold"
                },
                children: "Hourly"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 19
              }, this), " - record every hour on the same minute (start) / for image see below"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                style: {
                  fontWeight: "bold"
                },
                children: "By Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 19
              }, this), " - record every minute on same second (start) / for image see below"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            style: {
              fontWeight: "bold"
            },
            children: "Start"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, this), " - specify the Hour / Minute / Second on which to start recording - disabled on image"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            style: {
              fontWeight: "bold"
            },
            children: "Duration"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, this), " - specify the length of recording in seconds"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            style: {
              fontWeight: "bold"
            },
            children: "Duration"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), " - in image node represents number of pictures to capture in time group - if daily is selected the interval between images will a day in milliseconds divided by this value, in if hour an hour in milliseconds divided by this vale etc."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Instructions;
/* harmony default export */ __webpack_exports__["default"] = (Instructions);

var _c;

__webpack_require__.$Refresh$.register(_c, "Instructions");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Configuration/rules.js":
/*!***********************************************!*\
  !*** ./src/components/Configuration/rules.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/components/Configuration/rules.js";




function RuleRow(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    className: "align-items-bottom",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      className: "pr-1",
      md: 2,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: "Type"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Check, {
          label: "Video",
          value: "video",
          type: "radio",
          id: `1-type-${props.id}`,
          checked: props.rule.type === "video",
          name: "type",
          onChange: e => props.handleRuleChange(e, props.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Check, {
          label: "Image",
          value: "image",
          type: "radio",
          id: `2-type-${props.id}`,
          checked: props.rule.type === "image",
          name: "type",
          onChange: e => props.handleRuleChange(e, props.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      className: "ruleIdpr-1",
      md: 2,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: "Recurring"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Check, {
          label: "Daily",
          value: "Hour",
          type: "radio",
          id: `1-recurring-${props.id}`,
          checked: props.rule.recurring === "Hour",
          name: "recurring",
          onChange: e => props.handleRuleChange(e, props.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Check, {
          label: "Hourly",
          value: "Minute",
          type: "radio",
          id: `2-recurring-${props.id}`,
          checked: props.rule.recurring === "Minute",
          name: "recurring",
          onChange: e => props.handleRuleChange(e, props.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Check, {
          label: "By Minute",
          value: "Second",
          type: "radio",
          id: `3-recurring-${props.id}`,
          checked: props.rule.recurring === "Second",
          name: "recurring",
          onChange: e => props.handleRuleChange(e, props.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      className: "pr-1",
      md: "3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: ["START ON THE - ", props.rule.recurring]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
          id: "start",
          name: "start",
          readOnly: props.rule.type === "image",
          value: props.rule.start,
          placeholder: "start",
          type: "text",
          onChange: e => props.handleRuleChange(e, props.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      className: "pl-1",
      md: "3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: "Duration (sec)/ #pictures"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
          id: "duration",
          name: "duration",
          value: props.rule.duration,
          placeholder: "duration",
          type: "text",
          onChange: e => props.handleRuleChange(e, props.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      className: "text-center",
      md: "1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          size: "sm",
          className: "btn-fill pull-right",
          onClick: e => props.removeRule(e, props.id),
          children: " - "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, `rule-${props.rule.id}`, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = RuleRow;
/* harmony default export */ __webpack_exports__["default"] = (RuleRow);

var _c;

__webpack_require__.$Refresh$.register(_c, "RuleRow");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/components/Footer/Footer.js";

/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
      className: "footer px-0 px-lg-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        fluid: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("nav", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
            className: "footer-menu",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                href: "#pablo",
                onClick: e => e.preventDefault(),
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                href: "#pablo",
                onClick: e => e.preventDefault(),
                children: "Company"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                href: "#pablo",
                onClick: e => e.preventDefault(),
                children: "Portfolio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                href: "#pablo",
                onClick: e => e.preventDefault(),
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "copyright text-center",
            children: ["\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: "http://www.seawisely.com",
              children: "Seawise"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Navbars/AdminNavbar.js":
/*!***********************************************!*\
  !*** ./src/components/Navbars/AdminNavbar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! routes.js */ "./src/routes.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/components/Navbars/AdminNavbar.js";






function Header() {
  const mobileSidebarToggle = e => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";

    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };

    document.body.appendChild(node);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    bg: "light",
    expand: "lg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      fluid: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "d-flex justify-content-center align-items-center ml-2 ml-lg-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "dark",
          className: "d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2",
          onClick: mobileSidebarToggle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
            className: "fas fa-ellipsis-v"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
        "aria-controls": "basic-navbar-nav",
        className: "mr-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          className: "navbar-toggler-bar burger-lines"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          className: "navbar-toggler-bar burger-lines"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          className: "navbar-toggler-bar burger-lines"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
        id: "basic-navbar-nav",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          className: "nav mr-auto",
          navbar: true,
          children: routes_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(route => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
            to: route.layout + route.path,
            className: "nav-link",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
              className: route.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              children: route.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, this)]
          }, route.name, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          className: "ml-auto",
          navbar: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Sidebar/Sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/Sidebar/Sidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/device/deviceSlice */ "./src/features/device/deviceSlice.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/components/Sidebar/Sidebar.js",
    _s = __webpack_require__.$Refresh$.signature();







function Sidebar({
  color,
  image
}) {
  _s();

  const devices = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_3__["selectDevices"]);
  const current = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_3__["selectCurrent"]);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  function handleClick(device) {
    dispatch(Object(_features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_3__["updateCurrent"])(device));
  }

  function handleXCLick(device) {
    dispatch(Object(_features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_3__["restartDeviceAsync"])(device));
  }

  function renderRegistered() {
    const xstyle = {
      display: "box",
      position: "absolute",
      right: "5px",
      top: "2px"
    };

    if (devices === undefined) {
      return "";
    }

    return devices.Registered.map(device => {
      let classname = "";

      if (current && device.sn === current.sn) {
        classname = "active";
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Item, {
        className: classname,
        onClick: () => handleClick(device),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
          className: "nav-link",
          style: {
            cursor: "pointer",
            position: "relative"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            onClick: () => handleXCLick(device),
            style: xstyle,
            children: "x"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, this), device.ip]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, `device-${device.sn}`, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 14
      }, this);
    });
  }

  function renderReported() {
    if (devices === undefined) {
      return;
    }

    return devices.Reported.map(ip => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Item, {
      className: "disabled",
      onClick: () => handleClick(ip),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "nav-link",
        style: {
          cursor: "pointer",
          position: "relative"
        },
        children: ip
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, `device-${ip}`, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "sidebar",
    "data-image": image,
    "data-color": color,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "sidebar-background",
      style: {
        backgroundImage: "url(" + image + ")"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "sidebar-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "logo d-flex align-items-center justify-content-start",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          href: "https://www.creative-tim.com?ref=lbd-sidebar",
          className: "simple-text logo-mini mx-1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "logo-img",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../../assets/img/logo_transparent.png */ "./src/assets/img/logo_transparent.png").default,
              alt: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          className: "simple-text",
          href: "http://www.seawisely.com",
          children: "SeaWise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        children: renderRegistered()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        children: renderReported()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 11
  }, this);
}

_s(Sidebar, "n6pX6KUJCJq4z3jZhHEXv02x2/U=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Sidebar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/features/device/deviceSlice.js":
/*!********************************************!*\
  !*** ./src/features/device/deviceSlice.js ***!
  \********************************************/
/*! exports provided: deviceSlice, getDevicesAsync, getRealtimeAsync, updateDeviceAsync, restartDeviceAsync, updateCurrent, updateDevices, updateRealtime, selectDevices, selectCurrent, selectRealtime, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceSlice", function() { return deviceSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevicesAsync", function() { return getDevicesAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRealtimeAsync", function() { return getRealtimeAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceAsync", function() { return updateDeviceAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartDeviceAsync", function() { return restartDeviceAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrent", function() { return updateCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDevices", function() { return updateDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRealtime", function() { return updateRealtime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDevices", function() { return selectDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrent", function() { return selectCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRealtime", function() { return selectRealtime; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const initialState = {};
const api = "http://localhost:8080";
const deviceSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'device',
  initialState,
  reducers: {
    updateCurrent: (state, action) => {
      state.current = action.payload;
    },
    updateDevices: (state, action) => {
      state.list = action.payload;
    },
    updateRealtime: (state, action) => {
      state.realtime = action.payload;
    },
    default: state => state
  }
});
const getDevicesAsync = () => {
  return async dispatch => {
    try {
      const result = await fetch(`${api}/devices`);
      const json = await result.json();
      dispatch(updateDevices(json));
    } catch (err) {
      console.log(err);
    }
  };
};
const getRealtimeAsync = () => {
  return async (dispatch, getState) => {
    let state = getState();

    if (state.device.current === undefined) {
      return;
    }

    try {
      const result = await fetch(`${api}/api/realtime/${state.device.current}`);
      const realtime = await result.json();
      const device = {
        channels: realtime.channels,
        ip: realtime.ip
      };
      dispatch(updateRealtime(device));
    } catch (err) {
      console.log(err);
    }
  };
};
const updateDeviceAsync = current => {
  return async dispatch => {
    try {
      await fetch(`${api}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(current)
      });
      dispatch(updateCurrent(true));
    } catch (err) {
      console.log(err);
    }
  };
};
const restartDeviceAsync = device => {
  return async () => {
    try {
      console.log(device);
    } catch (err) {
      console.log(err);
    }
  };
};
const {
  updateCurrent,
  updateDevices,
  updateRealtime
} = deviceSlice.actions;
const selectDevices = state => state.device.list;
const selectCurrent = state => state.device.current;
const selectRealtime = state => state.device.realtime;
/* harmony default export */ __webpack_exports__["default"] = (deviceSlice.reducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _layouts_Admin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/Admin.js */ "./src/layouts/Admin.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/css/animate.min.css */ "./src/assets/css/animate.min.css");
/* harmony import */ var _assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_scss_light_bootstrap_dashboard_react_scss_v_2_0_0__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0 */ "./src/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0");
/* harmony import */ var _assets_scss_light_bootstrap_dashboard_react_scss_v_2_0_0__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_light_bootstrap_dashboard_react_scss_v_2_0_0__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_css_demo_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/css/demo.css */ "./src/assets/css/demo.css");
/* harmony import */ var _assets_css_demo_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_demo_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/device/deviceSlice */ "./src/features/device/deviceSlice.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/index.js";













const store = Object(_store__WEBPACK_IMPORTED_MODULE_3__["default"])();
store.dispatch(Object(_features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_11__["getDevicesAsync"])());
let interval = setInterval(() => {
  console.log("getting devices");
  store.dispatch(Object(_features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_11__["getDevicesAsync"])());
}, 5000);

const renderApp = () => Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
        path: "/",
        render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_layouts_Admin_js__WEBPACK_IMPORTED_MODULE_5__["default"], { ...props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 46
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 24,
  columnNumber: 5
}, undefined), document.getElementById('root'));

renderApp();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/layouts/Admin.js":
/*!******************************!*\
  !*** ./src/layouts/Admin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Navbars_AdminNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbars/AdminNavbar */ "./src/components/Navbars/AdminNavbar.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebar/Sidebar */ "./src/components/Sidebar/Sidebar.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes.js */ "./src/routes.js");
/* harmony import */ var _assets_img_farm_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/farm.jpg */ "./src/assets/img/farm.jpg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/layouts/Admin.js",
    _s = __webpack_require__.$Refresh$.signature();

/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/










function Admin() {
  _s();

  const [image] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(_assets_img_farm_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const [color] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("black");
  const [hasImage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  const mainPanel = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "") {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: prop.layout + prop.path,
          render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(prop.component, { ...props
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 32
          }, this)
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this);
      } else {
        return null;
      }
    });
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;

    if (window.innerWidth < 993 && document.documentElement.className.indexOf("nav-open") !== -1) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: color,
        image: hasImage ? image : "",
        routes: _routes_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "main-panel",
        ref: mainPanel,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Navbars_AdminNavbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "content",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
            children: getRoutes(_routes_js__WEBPACK_IMPORTED_MODULE_5__["default"])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Admin, "GFarLef0k7dKL6+S6cUxu2LwFZA=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"]];
});

_c = Admin;
/* harmony default export */ __webpack_exports__["default"] = (Admin);

var _c;

__webpack_require__.$Refresh$.register(_c, "Admin");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var views_Channels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! views/Channels */ "./src/views/Channels.js");
/* harmony import */ var views_Configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! views/Configuration */ "./src/views/Configuration.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// import Config from "views/configuration"


const dashboardRoutes = [{
  path: "/channels",
  name: "Video",
  icon: "nc-icon nc-circle-09",
  component: views_Channels__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: ""
}, {
  path: "/configuration",
  name: "Configuration",
  icon: "nc-icon nc-circle-09",
  component: views_Configuration__WEBPACK_IMPORTED_MODULE_1__["default"],
  layout: ""
}];
/* harmony default export */ __webpack_exports__["default"] = (dashboardRoutes);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureAppStore; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/device/deviceSlice */ "./src/features/device/deviceSlice.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



function configureAppStore(preloadedState) {
  return Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: {
      device: _features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    middleware: [...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["getDefaultMiddleware"])()],
    preloadedState
  }); // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./features/config/', () => store.replaceReducer(rootReducer))
  // }
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/views/Channels.js":
/*!*******************************!*\
  !*** ./src/views/Channels.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/device/deviceSlice */ "./src/features/device/deviceSlice.js");
/* harmony import */ var _components_Channels_recording__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Channels/recording */ "./src/components/Channels/recording.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/views/Channels.js",
    _s = __webpack_require__.$Refresh$.signature();








function Channels() {
  _s();

  const current = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_3__["selectCurrent"]);

  function getRules() {
    // if(config !== undefined){
    // return JSON.parse(config.rules)
    // }
    return [];
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    children: current !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_Channels_recording__WEBPACK_IMPORTED_MODULE_4__["default"], {
      current: current
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 30
    }, this) : ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(Channels, "bgS1ZS3NfXlEeq5UhZA1Hj6Ixw8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Channels;
/* harmony default export */ __webpack_exports__["default"] = (Channels);

var _c;

__webpack_require__.$Refresh$.register(_c, "Channels");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/views/Configuration.js":
/*!************************************!*\
  !*** ./src/views/Configuration.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/device/deviceSlice */ "./src/features/device/deviceSlice.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Configuration_instructions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Configuration/instructions */ "./src/components/Configuration/instructions.js");
/* harmony import */ var _components_Configuration_configForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Configuration/configForm */ "./src/components/Configuration/configForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/amirma/seawise/seawise-video-controller/client/src/views/Configuration.js",
    _s = __webpack_require__.$Refresh$.signature();









function Configuration() {
  _s();

  const current = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_2__["selectCurrent"]);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  function handleSubmit(e, current) {
    console.log(current);
    current.loop = parseInt(current.loop);
    e.preventDefault();
    dispatch(Object(_features_device_deviceSlice__WEBPACK_IMPORTED_MODULE_2__["updateDeviceAsync"])(current));
  }

  function renderDeviceDetails() {
    if (current !== undefined) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroup"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
            children: ["OWNER: ", current.owner]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
            children: ["DEVICE ID - ", current.sn, " (ip: ", current.ip, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
            children: ["CAMERAS CONNECTED: ", current.channels]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 14
      }, this);
    }
  }

  function renderConfiguration() {
    if (!current) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        variant: "danger",
        children: "Please select device first!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 14
      }, this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Configuration_configForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        current: current,
        handleSubmit: handleSubmit
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 14
      }, this);
    }
  } //


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: "8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
          children: renderDeviceDetails()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
          children: renderConfiguration()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: "4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Configuration_instructions__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(Configuration, "v/2Esh3eVPhcTVeyY0FwIrYnyZs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c = Configuration;
/* harmony default export */ __webpack_exports__["default"] = (Configuration);

var _c;

__webpack_require__.$Refresh$.register(_c, "Configuration");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/amirma/seawise/seawise-video-controller/client/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/amirma/seawise/seawise-video-controller/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/amirma/seawise/seawise-video-controller/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map