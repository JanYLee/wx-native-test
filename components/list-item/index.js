(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/list-item/index"],{

/***/ "./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/list-item/index.js?taro&type=script&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/components/list-item?taro&type=script&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2, _initialiseProps;

var _taroWeapp = __webpack_require__(/*! @fish.mobile/taro-weapp */ "./node_modules/@fish.mobile/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _isFunction2 = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = __webpack_require__(/*! ../../common/component */ "./src/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

__webpack_require__(/*! ./index.scss */ "./src/components/list-item/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtListItem = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtListItem, _AtComponent);

  function AtListItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtListItem.__proto__ || Object.getPrototypeOf(AtListItem)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtListItem, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtListItem.prototype.__proto__ || Object.getPrototypeOf(AtListItem.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _classNames;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          thumb = _props.thumb,
          icon = _props.icon,
          renderLabel = _props.renderLabel,
          arrow = _props.arrow,
          align = _props.align,
          multipleLine = _props.multipleLine,
          wrap = _props.wrap,
          disabled = _props.disabled,
          customStyle = _props.customStyle,
          border = _props.border;
      var _props2 = this.__props,
          label = _props2.label,
          brief = _props2.brief;


      label = String(label);
      brief = String(brief);
      var rootClass = (0, _classnames2.default)('at-list__item', (_classNames = {}, _defineProperty(_classNames, "at-list__item--" + align, align), _defineProperty(_classNames, 'at-list__item--wrap', wrap), _defineProperty(_classNames, 'at-list__item--thumb', thumb), _defineProperty(_classNames, 'at-list__item--multiple', multipleLine), _defineProperty(_classNames, 'at-list__item--disabled', disabled), _defineProperty(_classNames, 'at-list__item--no-border', !border), _classNames), this.__props.className);
      var iconClass = (0, _classnames2.default)(icon.prefixClass || 'at-icon', _defineProperty({}, (icon.prefixClass || 'at-icon') + "-" + icon.type, icon.type), icon.className);

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(customStyle);
      var anonymousState__temp2 = icon.type ? (0, _taroWeapp.internal_inline_style)(this.mergeStyle({
        color: icon.color || '',
        fontSize: (icon.size || 24) + "px"
      }, icon.customStyle)) : null;
      _taroWeapp2.default.eventCenter.trigger("renderLabelbhazz");
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        rootClass: rootClass,
        thumb: thumb,
        icon: icon,
        iconClass: iconClass,
        brief: brief,
        arrow: arrow,
        label: label
      });
      return this.__state;
    }
  }]);

  return AtListItem;
}(_component2.default), _class.$$events = ["handleClick"], _class.multipleSlots = true, _class.$$componentPath = "components/list-item/index", _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "rootClass", "thumb", "icon", "iconClass", "brief", "arrow", "label", "disabled", "renderLabel", "align", "multipleLine", "wrap", "customStyle", "border", "className", "children"];

  this.handleClick = function () {
    if ((0, _isFunction3.default)(_this2.props.onClick) && !_this2.props.disabled) {
      var _props3;

      (_props3 = _this2.props).onClick.apply(_props3, arguments);
    }
  };

  this.customComponents = [];
}, _temp2);


AtListItem.defaultProps = {
  thumb: '',
  icon: {},
  label: '',
  renderLabel: function renderLabel() {},
  brief: '',
  align: 'middle',
  multipleLine: false,
  wrap: true,
  disabled: false,
  border: true,
  onClick: function onClick() {}
};

AtListItem.propTypes = {
  thumb: _propTypes2.default.string,
  label: _propTypes2.default.string,
  renderLabel: _propTypes2.default.func,
  brief: _propTypes2.default.string,
  arrow: _propTypes2.default.oneOf(['up', 'down', 'right']),
  align: _propTypes2.default.oneOf(['top', 'middle', 'bottom']),
  multipleLine: _propTypes2.default.bool,
  wrap: _propTypes2.default.bool,
  border: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  icon: _propTypes2.default.shape({
    size: _propTypes2.default.number,
    type: _propTypes2.default.string,
    color: _propTypes2.default.string,
    prefixClass: _propTypes2.default.string,
    customStyle: _propTypes2.default.object,
    className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string])
  })
};
exports.default = AtListItem;

Component(__webpack_require__(/*! @fish.mobile/taro-weapp */ "./node_modules/@fish.mobile/taro-weapp/index.js").default.createComponent(AtListItem));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:\\demo\\taro-official\\fish-miniapp-2\\src!./node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/list-item/index.js?taro&type=template&parse=COMPONENT&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:/demo/taro-official/fish-miniapp-2/src!./node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/components/list-item?taro&type=template&parse=COMPONENT& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/list-item/index.wxml";

/***/ }),

/***/ "./src/components/list-item/index.js":
/*!*******************************************!*\
  !*** ./src/components/list-item/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .?taro&type=template&parse=COMPONENT& */ "./src/components/list-item/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .?taro&type=script&parse=COMPONENT& */ "./src/components/list-item/index.js?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/list-item/index.js?taro&type=script&parse=COMPONENT&":
/*!********************************************************************!*\
  !*** ./src/components/list-item?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!.?taro&type=script&parse=COMPONENT& */ "./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/list-item/index.js?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/list-item/index.js?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************!*\
  !*** ./src/components/list-item?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:/demo/taro-official/fish-miniapp-2/src!../../../node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!.?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:\\demo\\taro-official\\fish-miniapp-2\\src!./node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/list-item/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/list-item/index.scss":
/*!*********************************************!*\
  !*** ./src/components/list-item/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/list-item/index.js","runtime","vendors","common"]]]);