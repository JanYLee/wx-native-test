(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/button/index"],{

/***/ "./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/button/index.js?taro&type=script&parse=COMPONENT&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/components/button?taro&type=script&parse=COMPONENT& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

__webpack_require__(/*! ./index.scss */ "./src/components/button/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtButton = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtButton, _AtComponent);

  function AtButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtButton.__proto__ || Object.getPrototypeOf(AtButton)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__1568", "$compid__1569", "loading", "icon", "htmlType", "openType", "lang", "ghost", "sessionFrom", "sendMessageTitle", "sendMessagePath", "sendMessageImg", "showMessageCard", "appParameter", "isWEAPP", "disabled", "isALIPAY", "isWEB", "customStyle", "className", "shape", "size", "type", "inline", "children"], _this.customComponents = ["AtLoading", "AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtButton, [{
    key: '_constructor',
    value: function _constructor() {
      _get(AtButton.prototype.__proto__ || Object.getPrototypeOf(AtButton.prototype), '_constructor', this).apply(this, arguments);
      this.state = {
        isWEB: _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEB,
        isWEAPP: _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEAPP,
        isALIPAY: _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.ALIPAY
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'getFormNode',
    value: function getFormNode(node) {
      var parentNode = node.parentNode;
      if (!parentNode || !parentNode.tagName) {
        return { dispatchEvent: function dispatchEvent() {} };
      }
      if (parentNode.tagName.toLowerCase() === 'form') {
        return parentNode;
      }
      return this.getFormNode(parentNode);
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (!this.props.disabled) {
        var _props;

        if (this.state.isWEB) {
          var htmlType = this.props.htmlType;
          htmlType !== 'button' && this.getFormNode(_taroWeapp2.default.findDOMNode(this)).dispatchEvent(new Event(htmlType)); // eslint-disable-line
        }
        this.props.onClick && (_props = this.props).onClick.apply(_props, arguments);
      }
    }
  }, {
    key: 'onGetUserInfo',
    value: function onGetUserInfo() {
      var _props2;

      this.props.onGetUserInfo && (_props2 = this.props).onGetUserInfo.apply(_props2, arguments);
    }
  }, {
    key: 'onContact',
    value: function onContact() {
      var _props3;

      this.props.onContact && (_props3 = this.props).onContact.apply(_props3, arguments);
    }
  }, {
    key: 'onGetPhoneNumber',
    value: function onGetPhoneNumber() {
      var _props4;

      this.props.onGetPhoneNumber && (_props4 = this.props).onGetPhoneNumber.apply(_props4, arguments);
    }
  }, {
    key: 'onError',
    value: function onError() {
      var _props5;

      this.props.onError && (_props5 = this.props).onError.apply(_props5, arguments);
    }
  }, {
    key: 'onOpenSetting',
    value: function onOpenSetting() {
      var _props6;

      this.props.onOpenSetting && (_props6 = this.props).onOpenSetting.apply(_props6, arguments);
    }
  }, {
    key: 'onSumit',
    value: function onSumit() {
      if (this.state.isWEAPP) {
        this.$scope.triggerEvent('submit', arguments[0].detail, {
          bubbles: true,
          composed: true
        });
      }
    }
  }, {
    key: 'onReset',
    value: function onReset() {
      if (this.state.isWEAPP) {
        this.$scope.triggerEvent('reset', arguments[0].detail, {
          bubbles: true,
          composed: true
        });
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _classObject;

      var _$loadingColor, _$loadingSize;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__1568"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__1568 = _genCompid2[0],
          $compid__1568 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1569"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1569 = _genCompid4[0],
          $compid__1569 = _genCompid4[1];

      var _props7 = this.__props,
          customStyle = _props7.customStyle,
          className = _props7.className,
          disabled = _props7.disabled,
          htmlType = _props7.htmlType,
          icon = _props7.icon,
          loading = _props7.loading,
          shape = _props7.shape,
          size = _props7.size,
          type = _props7.type,
          ghost = _props7.ghost,
          inline = _props7.inline,
          openType = _props7.openType,
          lang = _props7.lang,
          sessionFrom = _props7.sessionFrom,
          sendMessageTitle = _props7.sendMessageTitle,
          sendMessagePath = _props7.sendMessagePath,
          sendMessageImg = _props7.sendMessageImg,
          showMessageCard = _props7.showMessageCard,
          appParameter = _props7.appParameter;
      var _state = this.__state,
          isWEAPP = _state.isWEAPP,
          isALIPAY = _state.isALIPAY,
          isWEB = _state.isWEB;

      var rootClassName = ['at-button'];
      var classObject = (_classObject = {}, _defineProperty(_classObject, "at-button--" + size, size), _defineProperty(_classObject, 'at-button--disabled', disabled), _defineProperty(_classObject, "at-button--" + type, type), _defineProperty(_classObject, "at-button--" + shape, shape && !(isWEB && shape === 'circle')), _defineProperty(_classObject, "at-button--circle-h5", isWEB && shape === 'circle'), _defineProperty(_classObject, 'at-button--inline', inline), _defineProperty(_classObject, 'at-button--ghost', ghost), _defineProperty(_classObject, "at-button--" + type + "--ghost", type && ghost), _classObject);
      var component = void 0;
      if (loading) {
        _$loadingColor = type === 'primary' ? '#fff' : '';
        _$loadingSize = size === 'small' ? '30' : 0;

        rootClassName.push('at-button--icon');
        _taroWeapp.propsManager.set({
          "color": _$loadingColor,
          "size": _$loadingSize
        }, $compid__1568, $prevCompid__1568);
      } else if (icon) {
        rootClassName.push('at-button--icon');
        _taroWeapp.propsManager.set({
          "type": icon,
          "size": "inherit"
        }, $compid__1569, $prevCompid__1569);
      }
      var anonymousState__temp = (0, _classnames2.default)(rootClassName, classObject, className);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__1568: $compid__1568,
        $compid__1569: $compid__1569,
        loading: loading,
        icon: icon,
        htmlType: htmlType,
        openType: openType,
        lang: lang,
        ghost: ghost,
        sessionFrom: sessionFrom,
        sendMessageTitle: sendMessageTitle,
        sendMessagePath: sendMessagePath,
        sendMessageImg: sendMessageImg,
        showMessageCard: showMessageCard,
        appParameter: appParameter,
        disabled: disabled
      });
      return this.__state;
    }
  }]);

  return AtButton;
}(_component2.default), _class.$$events = ["onGetUserInfo", "onGetPhoneNumber", "onOpenSetting", "onError", "onContact", "onClick", "onSumit", "onReset"], _class.$$componentPath = "components/button/index", _temp2);


AtButton.defaultProps = {
  customStyle: {},
  disabled: false,
  htmlType: 'button',
  loading: false,
  size: 'large',
  type: 'default',
  ghost: false,
  onClick: function onClick() {},
  inline: false,
  // Button props
  openType: '',
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: '',
  onGetUserInfo: function onGetUserInfo() {},
  onContact: function onContact() {},
  onGetPhoneNumber: function onGetPhoneNumber() {},
  onError: function onError() {},
  onOpenSetting: function onOpenSetting() {}
};

AtButton.propTypes = {
  customStyle: _propTypes2.default.object,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  htmlType: _propTypes2.default.oneOf(['submit', 'button', 'reset']),
  icon: _propTypes2.default.string,
  ghost: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  shape: _propTypes2.default.oneOf(["circle", "round", "full"]),
  size: _propTypes2.default.oneOf(['small', 'large']),
  type: _propTypes2.default.oneOf(['default', 'primary', 'font', 'danger']),
  onClick: _propTypes2.default.func,
  inline: _propTypes2.default.bool,
  full: _propTypes2.default.bool,
  openType: _propTypes2.default.oneOf(['contact', 'share', 'getUserInfo', 'getPhoneNumber', 'launchApp', 'openSetting', 'feedback', 'getRealnameAuthInfo', 'contactShare', 'getAuthorize', '']),
  lang: _propTypes2.default.string,
  sessionFrom: _propTypes2.default.string,
  sendMessageTitle: _propTypes2.default.string,
  sendMessagePath: _propTypes2.default.string,
  sendMessageImg: _propTypes2.default.string,
  showMessageCard: _propTypes2.default.bool,
  appParameter: _propTypes2.default.string,
  onGetUserInfo: _propTypes2.default.func,
  onContact: _propTypes2.default.func,
  onGetPhoneNumber: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onOpenSetting: _propTypes2.default.func
};
exports.default = AtButton;

Component(__webpack_require__(/*! @fish.mobile/taro-weapp */ "./node_modules/@fish.mobile/taro-weapp/index.js").default.createComponent(AtButton));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:\\demo\\taro-official\\fish-miniapp-2\\src!./node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/button/index.js?taro&type=template&parse=COMPONENT&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:/demo/taro-official/fish-miniapp-2/src!./node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/components/button?taro&type=template&parse=COMPONENT& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/button/index.wxml";

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .?taro&type=template&parse=COMPONENT& */ "./src/components/button/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .?taro&type=script&parse=COMPONENT& */ "./src/components/button/index.js?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/button/index.js?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************!*\
  !*** ./src/components/button?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!.?taro&type=script&parse=COMPONENT& */ "./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/button/index.js?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/button/index.js?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************!*\
  !*** ./src/components/button?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:/demo/taro-official/fish-miniapp-2/src!../../../node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!.?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=G:\\demo\\taro-official\\fish-miniapp-2\\src!./node_modules/@fish.mobile/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@fish.mobile/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/button/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_G_demo_taro_official_fish_miniapp_2_src_node_modules_fish_mobile_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_fish_mobile_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/button/index.scss":
/*!******************************************!*\
  !*** ./src/components/button/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/button/index.js","runtime","vendors","common"]]]);