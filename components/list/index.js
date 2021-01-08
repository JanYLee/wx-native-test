(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/list/index"],{

/***/ "./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/list/index.js?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/components/list?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @fish.mobile/taro-weapp */ "./node_modules/@fish.mobile/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = __webpack_require__(/*! ../../common/component */ "./src/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

__webpack_require__(/*! ./index.scss */ "./src/components/list/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtList = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtList, _AtComponent);

  function AtList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtList.__proto__ || Object.getPrototypeOf(AtList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "rootClass", "customStyle", "className", "renderHeader", "renderFooter", "border", "children"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtList, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtList.prototype.__proto__ || Object.getPrototypeOf(AtList.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          customStyle = _props.customStyle,
          className = _props.className,
          renderHeader = _props.renderHeader,
          renderFooter = _props.renderFooter;

      var rootClass = (0, _classnames2.default)('at-list', {
        'at-list--no-border': !this.__props.border
      }, className);
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(customStyle);
      _taroWeapp2.default.eventCenter.trigger("renderHeaderbhdzz");
      _taroWeapp2.default.eventCenter.trigger("renderFooterbhezz");
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        rootClass: rootClass
      });
      return this.__state;
    }
  }]);

  return AtList;
}(_component2.default), _class.$$events = [], _class.multipleSlots = true, _class.$$componentPath = "components/list/index", _temp2);


AtList.defaultProps = {
  border: true,
  renderHeader: function renderHeader() {},
  renderFooter: function renderFooter() {}
};

AtList.propTypes = {
  border: _propTypes2.default.bool,
  renderHeader: _propTypes2.default.func,
  renderFooter: _propTypes2.default.func
};
exports.default = AtList;

Component(__webpack_require__(/*! @fish.mobile/taro-weapp */ "./node_modules/@fish.mobile/taro-weapp/index.js").default.createComponent(AtList));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:\\demo\\taro-official\\fish-miniapp-2\\src!./node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/list/index.js?taro&type=template&parse=COMPONENT&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:/demo/taro-official/fish-miniapp-2/src!./node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/components/list?taro&type=template&parse=COMPONENT& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/list/index.wxml";

/***/ }),

/***/ "./src/components/list/index.js":
/*!**************************************!*\
  !*** ./src/components/list/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .?taro&type=template&parse=COMPONENT& */ "./src/components/list/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .?taro&type=script&parse=COMPONENT& */ "./src/components/list/index.js?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/list/index.js?taro&type=script&parse=COMPONENT&":
/*!***************************************************************!*\
  !*** ./src/components/list?taro&type=script&parse=COMPONENT& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!.?taro&type=script&parse=COMPONENT& */ "./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/list/index.js?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/list/index.js?taro&type=template&parse=COMPONENT&":
/*!*****************************************************************!*\
  !*** ./src/components/list?taro&type=template&parse=COMPONENT& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:/demo/taro-official/fish-miniapp-2/src!../../../node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!.?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:\\demo\\taro-official\\fish-miniapp-2\\src!./node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/list/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/list/index.scss":
/*!****************************************!*\
  !*** ./src/components/list/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/list/index.js","runtime","vendors","common"]]]);