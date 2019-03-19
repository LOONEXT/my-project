require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_50f8889d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(27);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50f8889d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_50f8889d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50f8889d", Component.options)
  } else {
    hotAPI.reload("data-v-50f8889d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      phone: '18513658649',
      msg: '我是一个用户组件',
      list: []
    };
  },

  methods: {
    run: function run() {
      console.log('执行方法');
    },
    mapLocal: function mapLocal() {
      // 地图选择

      wx.openLocation({
        longitude: 116.31,
        latitude: 40.15,
        scale: 5,
        name: '北京市昌平区沙河镇于辛庄村',
        success: function success(res) {
          // success
          console.log(res, "location");
          console.log(res.name);
          console.log(res.latitude);
          console.log(res.longitude);
          that.setData({
            roomname: res.name
          });
        },
        fail: function fail() {
          // fail
        },
        complete: function complete() {
          // complete
        }
      });
    },
    callPhone: function callPhone() {
      wx.makePhoneCall({
        phoneNumber: this.phone
      });
    }
  },
  //生命周期函数
  created: function created() {
    for (var i = 0; i < 10; i++) {
      this.list.push('我是第' + i);
    }
  }
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "clsss": "all"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "dimg"
  }, [_c('image', {
    staticClass: "avatar",
    attrs: {
      "src": "http://www.zch.world/static/chat-images/user.png"
    }
  }), _vm._v(" "), _c('br'), _c('br'), _vm._v("\n      北京蓝天教育有限公司\n    ")], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.mapLocal
    }
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "src": "http://www.zch.world/static/chat-images/pay_wx_order.png"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "pay-text"
  }, [_vm._v("北京市昌平区沙河镇于辛庄")])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.callPhone
    }
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "src": "http://www.zch.world/static/chat-images/pay_wx_order.png"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "pay-text phone"
  }, [_vm._v("18511753008")])])]), _vm._v(" "), _vm._m(2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "src": "http://www.zch.world/static/chat-images/pay_wx_order.png"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "pay-text"
  }, [_vm._v("支持")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "src": "http://www.zch.world/static/chat-images/pay_wx_order.png"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "pay-text"
  }, [_vm._v("10:30-21:00")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "botContent"
  }, [_c('div', {
    staticClass: "feal"
  }, [_c('image', {
    staticClass: "fimg",
    attrs: {
      "src": "http://www.zch.world/static/images/pin.jpg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "feal"
  }, [_c('image', {
    staticClass: "fimg",
    attrs: {
      "src": "http://www.zch.world/static/images/pin.jpg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "feal"
  }, [_c('image', {
    staticClass: "fimg",
    attrs: {
      "src": "http://www.zch.world/static/images/pin.jpg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "feal"
  }, [_c('image', {
    staticClass: "fimg",
    attrs: {
      "src": "http://www.zch.world/static/images/pin.jpg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "feal"
  }, [_c('image', {
    staticClass: "fimg",
    attrs: {
      "src": "http://www.zch.world/static/images/pin.jpg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "feal"
  }, [_c('image', {
    staticClass: "fimg",
    attrs: {
      "src": "http://www.zch.world/static/images/pin.jpg"
    }
  })])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-50f8889d", esExports)
  }
}

/***/ })

},[23]);