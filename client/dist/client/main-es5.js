(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\content\done\video\chat\client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _containers_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./containers/chat/chat.component */
      "czmX");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'client';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat");
          }
        },
        directives: [_containers_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _containers_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers/chat/chat.component */
      "czmX");
      /* harmony import */


      var _components_usernname_usernname_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/usernname/usernname.component */
      "v6WF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _containers_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], _components_usernname_usernname_component__WEBPACK_IMPORTED_MODULE_4__["UsernnameComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "czmX":
    /*!***************************************************!*\
      !*** ./src/app/containers/chat/chat.component.ts ***!
      \***************************************************/

    /*! exports provided: ChatComponent */

    /***/
    function czmX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
      });
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! socket.io-client */
      "jifJ");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_usernname_usernname_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/usernname/usernname.component */
      "v6WF");

      function ChatComponent_app_usernname_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-usernname", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("userNameEvent", function ChatComponent_app_usernname_3_Template_app_usernname_userNameEvent_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.userNameUpdate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ChatComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r5);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          mine: a0
        };
      };

      function ChatComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, msg_r6.mine));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r6.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r6.message);
        }
      }

      var ChatComponent = /*#__PURE__*/function () {
        function ChatComponent() {
          _classCallCheck(this, ChatComponent);

          this.userName = '';
          this.message = '';
          this.messageList = [];
          this.userList = [];
        }

        _createClass(ChatComponent, [{
          key: "userNameUpdate",
          value: function userNameUpdate(name) {
            var _this = this;

            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"]("https://chat-competent-programming.herokuapp.com/?userName=".concat(name));
            this.userName = name;
            this.socket.emit('set-user-name', name);
            this.socket.on('user-list', function (userList) {
              _this.userList = userList;
            });
            this.socket.on('message-broadcast', function (data) {
              if (data) {
                _this.messageList.push({
                  message: data.message,
                  userName: data.userName,
                  mine: false
                });
              }
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            this.socket.emit('message', this.message);
            this.messageList.push({
              message: this.message,
              userName: this.userName,
              mine: true
            });
            this.message = '';
          }
        }]);

        return ChatComponent;
      }();

      ChatComponent.ɵfac = function ChatComponent_Factory(t) {
        return new (t || ChatComponent)();
      };

      ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ChatComponent,
        selectors: [["app-chat"]],
        decls: 15,
        vars: 4,
        consts: [[1, "container"], [3, "userNameEvent", 4, "ngIf"], [1, "chatbox"], [1, "chatbox__user-list"], ["class", "chatbox__user--active", 4, "ngFor", "ngForOf"], [1, "messages_list"], ["class", "chatbox__messages", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "send-message"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], [3, "userNameEvent"], [1, "chatbox__user--active"], [1, "chatbox__messages", 3, "ngClass"], [1, "user-message"], [1, "message-box"], [1, "name"], [1, "message"]],
        template: function ChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Competent programming - Chat App");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatComponent_app_usernname_3_Template, 1, 0, "app-usernname", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "User list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChatComponent_div_8_Template, 3, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ChatComponent_div_10_Template, 8, 5, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.message = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_13_listener() {
              return ctx.sendMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Send");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messageList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _components_usernname_usernname_component__WEBPACK_IMPORTED_MODULE_4__["UsernnameComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.5em auto;\n  color: #FFF;\n  text-align: center;\n}\n.chatbox[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  width: 80%;\n  height: 75%;\n  border-radius: 0.2em;\n  position: relative;\n  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);\n}\n.chatbox[_ngcontent-%COMP%]   .messages_list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 100%;\n}\n.chatbox__messages.mine[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%] {\n  float: right;\n}\n.chatbox__messages[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%] {\n  float: left;\n}\n.chatbox[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 1em 0;\n  height: auto;\n  width: 55%;\n  border-radius: 5px;\n  margin: 2em 1em;\n  overflow: auto;\n}\n.chatbox[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]    > p.name[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 1em;\n}\n.chatbox[_ngcontent-%COMP%]   .message-box[_ngcontent-%COMP%]    > p.message[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 0.7em;\n  margin: 0 2.8em;\n}\n.chatbox__user-list[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  width: 25%;\n  height: 100%;\n  float: right;\n  border-top-right-radius: 0.2em;\n  border-bottom-right-radius: 0.2em;\n}\n.chatbox__user-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9em;\n  padding: 1em;\n  margin: 0;\n  font-weight: 300;\n  text-align: center;\n}\n.chatbox__user[_ngcontent-%COMP%], .chatbox__user--active[_ngcontent-%COMP%] {\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 100%;\n  margin: 1em 0.7em;\n}\n.chatbox__user--active[_ngcontent-%COMP%] {\n  background: rgba(23, 190, 187, 0.8);\n}\n.chatbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  margin: -0.25em 2em;\n  font-size: 0.7em;\n  font-weight: 300;\n  color: #FFF;\n  width: 200px;\n}\n.chatbox[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background: #222;\n}\n.chatbox[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border: none;\n  width: 75%;\n  padding: 1.2em;\n  outline: none;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFDQTtFQUNFLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFFRjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBR0o7QUFBSTtFQUNFLFlBQUE7QUFFTjtBQUFJO0VBQ0UsV0FBQTtBQUVOO0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFFTjtBQUFJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVOO0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUFDSjtBQUFJO0VBQ0UscUNBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRU47QUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFFRSxtQ0FBQTtBQUNOO0FBRUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUU7RUFDRSxnQkFBQTtBQUFKO0FBQ0k7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUNOIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoMSB7XHJcbiAgICBtYXJnaW46IDAuNWVtIGF1dG87XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuLmNoYXRib3gge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDc1JTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAubWVzc2FnZXNfbGlzdCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAmX19tZXNzYWdlcyB7XHJcbiAgICAmLm1pbmUgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tZXNzYWdlLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDJlbSAxZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICYgPiBwLm5hbWUge1xyXG4gICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgICAmID4gcC5tZXNzYWdlIHtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIG1hcmdpbjogMCAyLjhlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fdXNlci1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yZW07XHJcbiAgICBoMSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX3VzZXIge1xyXG4gICAgd2lkdGg6IDAuNWVtO1xyXG4gICAgaGVpZ2h0OiAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDFlbSAwLjdlbTtcclxuICAgICYtLWFjdGl2ZSB7XHJcbiAgICAgIEBleHRlbmQgLmNoYXRib3hfX3VzZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjMsIDE5MCwgMTg3LCAwLjgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogLTAuMjVlbSAyZW07XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIHBhZGRpbmc6IDEuMmVtO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "v6WF":
    /*!*************************************************************!*\
      !*** ./src/app/components/usernname/usernname.component.ts ***!
      \*************************************************************/

    /*! exports provided: UsernnameComponent */

    /***/
    function v6WF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsernnameComponent", function () {
        return UsernnameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var UsernnameComponent = /*#__PURE__*/function () {
        function UsernnameComponent() {
          _classCallCheck(this, UsernnameComponent);

          this.userNameEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.userName = '';
        }

        _createClass(UsernnameComponent, [{
          key: "setUserName",
          value: function setUserName() {
            this.userNameEvent.emit(this.userName);
          }
        }]);

        return UsernnameComponent;
      }();

      UsernnameComponent.ɵfac = function UsernnameComponent_Factory(t) {
        return new (t || UsernnameComponent)();
      };

      UsernnameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UsernnameComponent,
        selectors: [["app-usernname"]],
        outputs: {
          userNameEvent: "userNameEvent"
        },
        decls: 4,
        vars: 1,
        consts: [["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"]],
        template: function UsernnameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsernnameComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.userName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsernnameComponent_Template_button_click_2_listener() {
              return ctx.setUserName();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Set username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vybm5hbWUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map