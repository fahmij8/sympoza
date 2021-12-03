function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/******/
(function () {
  // webpackBootstrap

  /******/
  var __webpack_modules__ = {
    /***/
    "./node_modules/@yaireo/tagify/dist/tagify.min.js":
    /*!********************************************************!*\
      !*** ./node_modules/@yaireo/tagify/dist/tagify.min.js ***!
      \********************************************************/

    /***/
    function node_modulesYaireoTagifyDistTagifyMinJs(module) {
      /**
       * Tagify (v 4.9.2) - tags input component
       * By Yair Even-Or
       * Don't sell this code. (c)
       * https://github.com/yairEO/tagify
       */
      !function (t, e) {
        true ? module.exports = e() : 0;
      }(this, function () {
        "use strict";

        function t(t, e) {
          var i = Object.keys(t);

          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), i.push.apply(i, s);
          }

          return i;
        }

        function e(e) {
          for (var s = 1; s < arguments.length; s++) {
            var a = null != arguments[s] ? arguments[s] : {};
            s % 2 ? t(Object(a), !0).forEach(function (t) {
              i(e, t, a[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
            });
          }

          return e;
        }

        function i(t, e, i) {
          return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = i, t;
        }

        var s = function s(t, e, i, _s) {
          return t = "" + t, e = "" + e, _s && (t = t.trim(), e = e.trim()), i ? t == e : t.toLowerCase() == e.toLowerCase();
        };

        function a(t, e) {
          var i,
              s = {};

          for (i in t) {
            e.indexOf(i) < 0 && (s[i] = t[i]);
          }

          return s;
        }

        function n(t) {
          var e = document.createElement("div");
          return t.replace(/\&#?[0-9a-z]+;/gi, function (t) {
            return e.innerHTML = t, e.innerText;
          });
        }

        function o(t, e) {
          for (e = e || "previous"; t = t[e + "Sibling"];) {
            if (3 == t.nodeType) return t;
          }
        }

        function r(t) {
          return "string" == typeof t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/`|'/g, "&#039;") : t;
        }

        function l(t) {
          var e = Object.prototype.toString.call(t).split(" ")[1].slice(0, -1);
          return t === Object(t) && "Array" != e && "Function" != e && "RegExp" != e && "HTMLUnknownElement" != e;
        }

        function d(t, e, i) {
          function s(t, e) {
            for (var i in e) {
              if (e.hasOwnProperty(i)) {
                if (l(e[i])) {
                  l(t[i]) ? s(t[i], e[i]) : t[i] = Object.assign({}, e[i]);
                  continue;
                }

                if (Array.isArray(e[i])) {
                  t[i] = Object.assign([], e[i]);
                  continue;
                }

                t[i] = e[i];
              }
            }
          }

          return t instanceof Object || (t = {}), s(t, e), i && s(t, i), t;
        }

        function h(t) {
          return String.prototype.normalize ? "string" == typeof t ? t.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : void 0 : t;
        }

        var g = function g() {
          return /(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);
        };

        function c(t) {
          return t && t.classList && t.classList.contains(this.settings.classNames.tag);
        }

        var p = {
          delimiters: ",",
          pattern: null,
          tagTextProp: "value",
          maxTags: 1 / 0,
          callbacks: {},
          addTagOnBlur: !0,
          duplicates: !1,
          whitelist: [],
          blacklist: [],
          enforceWhitelist: !1,
          userInput: !0,
          keepInvalidTags: !1,
          mixTagsAllowedAfter: /,|\.|\:|\s/,
          mixTagsInterpolator: ["[[", "]]"],
          backspace: !0,
          skipInvalid: !1,
          pasteAsTags: !0,
          editTags: {
            clicks: 2,
            keepInvalid: !0
          },
          transformTag: function transformTag() {},
          trim: !0,
          a11y: {
            focusableTags: !1
          },
          mixMode: {
            insertAfterTag: " "
          },
          autoComplete: {
            enabled: !0,
            rightKey: !1
          },
          classNames: {
            namespace: "tagify",
            mixMode: "tagify--mix",
            selectMode: "tagify--select",
            input: "tagify__input",
            focus: "tagify--focus",
            tag: "tagify__tag",
            tagNoAnimation: "tagify--noAnim",
            tagInvalid: "tagify--invalid",
            tagNotAllowed: "tagify--notAllowed",
            inputInvalid: "tagify__input--invalid",
            tagX: "tagify__tag__removeBtn",
            tagText: "tagify__tag-text",
            dropdown: "tagify__dropdown",
            dropdownWrapper: "tagify__dropdown__wrapper",
            dropdownItem: "tagify__dropdown__item",
            dropdownItemActive: "tagify__dropdown__item--active",
            dropdownInital: "tagify__dropdown--initial",
            scopeLoading: "tagify--loading",
            tagLoading: "tagify__tag--loading",
            tagEditing: "tagify__tag--editable",
            tagFlash: "tagify__tag--flash",
            tagHide: "tagify__tag--hide",
            hasMaxTags: "tagify--hasMaxTags",
            hasNoTags: "tagify--noTags",
            empty: "tagify--empty"
          },
          dropdown: {
            classname: "",
            enabled: 2,
            maxItems: 10,
            searchKeys: ["value", "searchBy"],
            fuzzySearch: !0,
            caseSensitive: !1,
            accentedSearch: !0,
            highlightFirst: !1,
            closeOnSelect: !0,
            clearOnSelect: !0,
            position: "all",
            appendTarget: null
          },
          hooks: {
            beforeRemoveTag: function beforeRemoveTag() {
              return Promise.resolve();
            },
            beforePaste: function beforePaste() {
              return Promise.resolve();
            },
            suggestionClick: function suggestionClick() {
              return Promise.resolve();
            }
          }
        };

        function u() {
          this.dropdown = {};

          for (var _t in this._dropdown) {
            this.dropdown[_t] = "function" == typeof this._dropdown[_t] ? this._dropdown[_t].bind(this) : this._dropdown[_t];
          }

          this.settings.dropdown.enabled >= 0 && this.dropdown.init();
        }

        var m = {
          init: function init() {
            this.DOM.dropdown = this.parseTemplate("dropdown", [this.settings]), this.DOM.dropdown.content = this.DOM.dropdown.querySelector(this.settings.classNames.dropdownWrapperSelector);
          },
          show: function show(t) {
            var _this8 = this;

            var e,
                i,
                a,
                n = this.settings,
                o = "mix" == n.mode && !n.enforceWhitelist,
                r = !n.whitelist || !n.whitelist.length,
                d = "manual" == n.dropdown.position;

            if (t = void 0 === t ? this.state.inputText : t, (!r || o || n.templates.dropdownItemNoMatch) && !1 !== n.dropdown.enable && !this.state.isLoading) {
              if (clearTimeout(this.dropdownHide__bindEventsTimeout), this.suggestedListItems = this.dropdown.filterListItems(t), t && !this.suggestedListItems.length && (this.trigger("dropdown:noMatch", t), n.templates.dropdownItemNoMatch && (a = n.templates.dropdownItemNoMatch.call(this, {
                value: t
              }))), !a) {
                if (this.suggestedListItems.length) t && o && !this.state.editing.scope && !s(this.suggestedListItems[0].value, t) && this.suggestedListItems.unshift({
                  value: t
                });else {
                  if (!t || !o || this.state.editing.scope) return this.input.autocomplete.suggest.call(this), void this.dropdown.hide();
                  this.suggestedListItems = [{
                    value: t
                  }];
                }
                i = "" + (l(e = this.suggestedListItems[0]) ? e.value : e), n.autoComplete && i && 0 == i.indexOf(t) && this.input.autocomplete.suggest.call(this, e);
              }

              this.dropdown.fill(a), n.dropdown.highlightFirst && this.dropdown.highlightOption(this.DOM.dropdown.content.children[0]), this.state.dropdown.visible || setTimeout(this.dropdown.events.binding.bind(this)), this.state.dropdown.visible = t || !0, this.state.dropdown.query = t, this.setStateSelection(), d || setTimeout(function () {
                _this8.dropdown.position(), _this8.dropdown.render();
              }), setTimeout(function () {
                _this8.trigger("dropdown:show", _this8.DOM.dropdown);
              });
            }
          },
          hide: function hide(t) {
            var _this9 = this;

            var e = this.DOM,
                i = e.scope,
                s = e.dropdown,
                a = "manual" == this.settings.dropdown.position && !t;
            if (s && document.body.contains(s) && !a) return window.removeEventListener("resize", this.dropdown.position), this.dropdown.events.binding.call(this, !1), i.setAttribute("aria-expanded", !1), s.parentNode.removeChild(s), setTimeout(function () {
              _this9.state.dropdown.visible = !1;
            }, 100), this.state.dropdown.query = this.state.ddItemData = this.state.ddItemElm = this.state.selection = null, this.state.tag && this.state.tag.value.length && (this.state.flaggedTags[this.state.tag.baseOffset] = this.state.tag), this.trigger("dropdown:hide", s), this;
          },
          toggle: function toggle(t) {
            this.dropdown[this.state.dropdown.visible && !t ? "hide" : "show"]();
          },
          render: function render() {
            var _this10 = this;

            var t,
                e,
                i,
                s = (t = this.DOM.dropdown, (i = t.cloneNode(!0)).style.cssText = "position:fixed; top:-9999px; opacity:0", document.body.appendChild(i), e = i.clientHeight, i.parentNode.removeChild(i), e),
                a = this.settings;
            return this.DOM.scope.setAttribute("aria-expanded", !0), document.body.contains(this.DOM.dropdown) || (this.DOM.dropdown.classList.add(a.classNames.dropdownInital), this.dropdown.position(s), a.dropdown.appendTarget.appendChild(this.DOM.dropdown), setTimeout(function () {
              return _this10.DOM.dropdown.classList.remove(a.classNames.dropdownInital);
            })), this;
          },
          fill: function fill(t) {
            var e;
            t = "string" == typeof t ? t : this.dropdown.createListHTML(t || this.suggestedListItems), this.DOM.dropdown.content.innerHTML = (e = t) ? e.replace(/\>[\r\n ]+\</g, "><").replace(/(<.*?>)|\s+/g, function (t, e) {
              return e || " ";
            }) : "";
          },
          refilter: function refilter(t) {
            t = t || this.state.dropdown.query || "", this.suggestedListItems = this.dropdown.filterListItems(t), this.dropdown.fill(), this.suggestedListItems.length || this.dropdown.hide(), this.trigger("dropdown:updated", this.DOM.dropdown);
          },
          position: function position(t) {
            var e = this.settings.dropdown;

            if ("manual" != e.position) {
              var i,
                  s,
                  a,
                  n,
                  o,
                  r,
                  l = this.DOM.dropdown,
                  d = e.placeAbove,
                  h = document.documentElement.clientHeight,
                  g = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 480 ? e.position : "all",
                  c = this.DOM["input" == g ? "input" : "scope"];
              t = t || l.clientHeight, this.state.dropdown.visible && ("text" == g ? (a = (i = this.getCaretGlobalPosition()).bottom, s = i.top, n = i.left, o = "auto") : (r = function (t) {
                for (var e = 0, i = 0; t;) {
                  e += t.offsetLeft || 0, i += t.offsetTop || 0, t = t.parentNode;
                }

                return {
                  left: e,
                  top: i
                };
              }(this.settings.dropdown.appendTarget), s = (i = c.getBoundingClientRect()).top - r.top, a = i.bottom - 1 - r.top, n = i.left - r.left, o = i.width + "px"), s = Math.floor(s), a = Math.ceil(a), d = void 0 === d ? h - i.bottom < t : d, l.style.cssText = "left:" + (n + window.pageXOffset) + "px; width:" + o + ";" + (d ? "top: " + (s + window.pageYOffset) + "px" : "top: " + (a + window.pageYOffset) + "px"), l.setAttribute("placement", d ? "top" : "bottom"), l.setAttribute("position", g));
            }
          },
          events: {
            binding: function binding() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
              var e = this.dropdown.events.callbacks,
                  i = this.listeners.dropdown = this.listeners.dropdown || {
                position: this.dropdown.position.bind(this),
                onKeyDown: e.onKeyDown.bind(this),
                onMouseOver: e.onMouseOver.bind(this),
                onMouseLeave: e.onMouseLeave.bind(this),
                onClick: e.onClick.bind(this),
                onScroll: e.onScroll.bind(this)
              },
                  s = t ? "addEventListener" : "removeEventListener";
              "manual" != this.settings.dropdown.position && (window[s]("resize", i.position), window[s]("keydown", i.onKeyDown)), this.DOM.dropdown[s]("mouseover", i.onMouseOver), this.DOM.dropdown[s]("mouseleave", i.onMouseLeave), this.DOM.dropdown[s]("mousedown", i.onClick), this.DOM.dropdown.content[s]("scroll", i.onScroll);
            },
            callbacks: {
              onKeyDown: function onKeyDown(t) {
                var _this11 = this;

                var e = this.DOM.dropdown.querySelector(this.settings.classNames.dropdownItemActiveSelector),
                    i = this.dropdown.getSuggestionDataByNode(e);

                switch (t.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                  case "Down":
                  case "Up":
                    var s;
                    t.preventDefault(), e && (e = e[("ArrowUp" == t.key || "Up" == t.key ? "previous" : "next") + "ElementSibling"]), e || (s = this.DOM.dropdown.content.children, e = s["ArrowUp" == t.key || "Up" == t.key ? s.length - 1 : 0]), i = this.dropdown.getSuggestionDataByNode(e), this.dropdown.highlightOption(e, !0);
                    break;

                  case "Escape":
                  case "Esc":
                    this.dropdown.hide();
                    break;

                  case "ArrowRight":
                    if (this.state.actions.ArrowLeft) return;

                  case "Tab":
                    if ("mix" != this.settings.mode && e && !this.settings.autoComplete.rightKey && !this.state.editing) {
                      t.preventDefault();
                      var a = this.dropdown.getMappedValue(i);
                      return this.input.autocomplete.set.call(this, a), !1;
                    }

                    return !0;

                  case "Enter":
                    t.preventDefault(), this.settings.hooks.suggestionClick(t, {
                      tagify: this,
                      tagData: i,
                      suggestionElm: e
                    }).then(function () {
                      if (e) return _this11.dropdown.selectOption(e);
                      _this11.dropdown.hide(), "mix" != _this11.settings.mode && _this11.addTags(_this11.state.inputText.trim(), !0);
                    })["catch"](function (t) {
                      return t;
                    });
                    break;

                  case "Backspace":
                    {
                      if ("mix" == this.settings.mode || this.state.editing.scope) return;

                      var _t2 = this.input.raw.call(this);

                      "" != _t2 && 8203 != _t2.charCodeAt(0) || (!0 === this.settings.backspace ? this.removeTags() : "edit" == this.settings.backspace && setTimeout(this.editTag.bind(this), 0));
                    }
                }
              },
              onMouseOver: function onMouseOver(t) {
                var e = t.target.closest(this.settings.classNames.dropdownItemSelector);
                e && this.dropdown.highlightOption(e);
              },
              onMouseLeave: function onMouseLeave(t) {
                this.dropdown.highlightOption();
              },
              onClick: function onClick(t) {
                var _this12 = this;

                if (0 == t.button && t.target != this.DOM.dropdown && t.target != this.DOM.dropdown.content) {
                  var e = t.target.closest(this.settings.classNames.dropdownItemSelector),
                      i = this.dropdown.getSuggestionDataByNode(e);
                  this.state.actions.selectOption = !0, setTimeout(function () {
                    return _this12.state.actions.selectOption = !1;
                  }, 50), this.settings.hooks.suggestionClick(t, {
                    tagify: this,
                    tagData: i,
                    suggestionElm: e
                  }).then(function () {
                    e ? _this12.dropdown.selectOption(e) : _this12.dropdown.hide();
                  })["catch"](function (t) {
                    return console.warn(t);
                  });
                }
              },
              onScroll: function onScroll(t) {
                var e = t.target,
                    i = e.scrollTop / (e.scrollHeight - e.parentNode.clientHeight) * 100;
                this.trigger("dropdown:scroll", {
                  percentage: Math.round(i)
                });
              }
            }
          },
          getSuggestionDataByNode: function getSuggestionDataByNode(t) {
            var e = t ? +t.getAttribute("tagifySuggestionIdx") : -1;
            return this.suggestedListItems[e] || null;
          },
          highlightOption: function highlightOption(t, e) {
            var i,
                s = this.settings.classNames.dropdownItemActive;
            if (this.state.ddItemElm && (this.state.ddItemElm.classList.remove(s), this.state.ddItemElm.removeAttribute("aria-selected")), !t) return this.state.ddItemData = null, this.state.ddItemElm = null, void this.input.autocomplete.suggest.call(this);
            i = this.suggestedListItems[this.getNodeIndex(t)], this.state.ddItemData = i, this.state.ddItemElm = t, t.classList.add(s), t.setAttribute("aria-selected", !0), e && (t.parentNode.scrollTop = t.clientHeight + t.offsetTop - t.parentNode.clientHeight), this.settings.autoComplete && (this.input.autocomplete.suggest.call(this, i), this.dropdown.position());
          },
          selectOption: function selectOption(t) {
            var _this13 = this;

            var e,
                i = this.settings.dropdown,
                s = i.clearOnSelect,
                a = i.closeOnSelect;
            if (!t) return e = this.addTags(this.state.inputText, !0), void (a && this.dropdown.hide());
            var n = t.getAttribute("tagifySuggestionIdx"),
                o = this.suggestedListItems[+n];
            this.trigger("dropdown:select", {
              data: o,
              elm: t
            }), n && o ? (this.state.editing ? this.onEditTagDone(null, d({
              __isValid: !0
            }, this.normalizeTags(o)[0])) : e = this["mix" == this.settings.mode ? "addMixTags" : "addTags"]([o], s), this.DOM.input.parentNode && (setTimeout(function () {
              _this13.DOM.input.focus(), _this13.toggleFocusClass(!0), _this13.placeCaretAfterNode(e);
            }), a ? setTimeout(this.dropdown.hide.bind(this)) : this.dropdown.refilter())) : this.dropdown.hide();
          },
          selectAll: function selectAll() {
            return this.suggestedListItems.length = 0, this.dropdown.hide(), this.addTags(this.dropdown.filterListItems(""), !0), this;
          },
          filterListItems: function filterListItems(t, e) {
            var _this14 = this;

            var i,
                s,
                a,
                n,
                o,
                r = this.settings,
                d = r.dropdown,
                g = (e = e || {}, t = "select" == r.mode && this.value.length && this.value[0][r.tagTextProp] == t ? "" : t, []),
                c = [],
                p = r.whitelist,
                u = d.maxItems || 1 / 0,
                m = d.searchKeys,
                v = 0;
            if (!t || !m.length) return (r.duplicates ? p : p.filter(function (t) {
              return !_this14.isTagDuplicate(l(t) ? t.value : t);
            })).slice(0, u);

            function f(t, e) {
              return e.toLowerCase().split(" ").every(function (e) {
                return t.includes(e.toLowerCase());
              });
            }

            for (o = d.caseSensitive ? "" + t : ("" + t).toLowerCase(); v < p.length; v++) {
              var _t3 = void 0,
                  _u = void 0;

              i = p[v] instanceof Object ? p[v] : {
                value: p[v]
              };

              var _T = !Object.keys(i).some(function (t) {
                return m.includes(t);
              }) ? ["value"] : m;

              d.fuzzySearch && !e.exact ? (a = _T.reduce(function (t, e) {
                return t + " " + (i[e] || "");
              }, "").toLowerCase().trim(), d.accentedSearch && (a = h(a), o = h(o)), _t3 = 0 == a.indexOf(o), _u = a === o, s = f(a, o)) : (_t3 = !0, s = _T.some(function (t) {
                var s = "" + (i[t] || "");
                return d.accentedSearch && (s = h(s), o = h(o)), d.caseSensitive || (s = s.toLowerCase()), _u = s === o, e.exact ? s === o : 0 == s.indexOf(o);
              })), n = !r.duplicates && this.isTagDuplicate(l(i) ? i.value : i), s && !n && (_u && _t3 ? c.push(i) : "startsWith" == d.sortby && _t3 ? g.unshift(i) : g.push(i));
            }

            return "function" == typeof d.sortby ? d.sortby(c.concat(g), o) : c.concat(g).slice(0, u);
          },
          getMappedValue: function getMappedValue(t) {
            var e = this.settings.dropdown.mapValueTo;
            return e ? "function" == typeof e ? e(t) : t[e] || t.value : t.value;
          },
          createListHTML: function createListHTML(t) {
            var _this15 = this;

            return d([], t).map(function (t, e) {
              "string" != typeof t && "number" != typeof t || (t = {
                value: t
              });

              var i = _this15.dropdown.getMappedValue(t);

              t.value = i && "string" == typeof i ? r(i) : i;

              var s = _this15.settings.templates.dropdownItem.apply(_this15, [t, _this15]);

              return s = s.replace(/\s*tagifySuggestionIdx=(["'])(.*?)\1/gim, "").replace(">", " tagifySuggestionIdx=\"".concat(e, "\">"));
            }).join("");
          }
        };
        var v = "@yaireo/tagify/";
        var f,
            T = {
          empty: "empty",
          exceed: "number of tags exceeded",
          pattern: "pattern mismatch",
          duplicate: "already exists",
          notAllowed: "not allowed"
        },
            w = {
          wrapper: function wrapper(t, e) {
            return "<tags class=\"".concat(e.classNames.namespace, " ").concat(e.mode ? "".concat(e.classNames[e.mode + "Mode"]) : "", " ").concat(t.className, "\"\n                    ").concat(e.readonly ? "readonly" : "", "\n                    ").concat(e.disabled ? "disabled" : "", "\n                    ").concat(e.required ? "required" : "", "\n                    tabIndex=\"-1\">\n            <span ").concat(!e.readonly && e.userInput ? "contenteditable" : "", " tabIndex=\"0\" data-placeholder=\"").concat(e.placeholder || "&#8203;", "\" aria-placeholder=\"").concat(e.placeholder || "", "\"\n                class=\"").concat(e.classNames.input, "\"\n                role=\"textbox\"\n                aria-autocomplete=\"both\"\n                aria-multiline=\"").concat("mix" == e.mode, "\"></span>\n        </tags>");
          },
          tag: function tag(t, e) {
            var i = this.settings;
            return "<tag title=\"".concat(t.title || t.value, "\"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex=\"").concat(i.a11y.focusableTags ? 0 : -1, "\"\n                    class=\"").concat(i.classNames.tag, " ").concat(t["class"] || "", "\"\n                    ").concat(this.getAttributes(t), ">\n            <x title='' class=\"").concat(i.classNames.tagX, "\" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class=\"").concat(i.classNames.tagText, "\">").concat(t[i.tagTextProp] || t.value, "</span>\n            </div>\n        </tag>");
          },
          dropdown: function dropdown(t) {
            var e = t.dropdown,
                i = "manual" == e.position,
                s = "".concat(t.classNames.dropdown);
            return "<div class=\"".concat(i ? "" : s, " ").concat(e.classname, "\" role=\"listbox\" aria-labelledby=\"dropdown\">\n                    <div class=\"").concat(t.classNames.dropdownWrapper, "\"></div>\n                </div>");
          },
          dropdownItem: function dropdownItem(t, e) {
            return "<div ".concat(this.getAttributes(t), "\n                    class='").concat(this.settings.classNames.dropdownItem, " ").concat(t["class"] ? t["class"] : "", "'\n                    tabindex=\"0\"\n                    role=\"option\">").concat(t.value, "</div>");
          },
          dropdownItemNoMatch: null
        };
        var b = {
          customBinding: function customBinding() {
            var _this16 = this;

            this.customEventsList.forEach(function (t) {
              _this16.on(t, _this16.settings.callbacks[t]);
            });
          },
          binding: function binding() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            var e,
                i = this.events.callbacks,
                s = t ? "addEventListener" : "removeEventListener";

            if (!this.state.mainEvents || !t) {
              for (var a in this.state.mainEvents = t, t && !this.listeners.main && (this.events.bindGlobal.call(this), this.settings.isJQueryPlugin && jQuery(this.DOM.originalInput).on("tagify.removeAllTags", this.removeAllTags.bind(this))), e = this.listeners.main = this.listeners.main || {
                focus: ["input", i.onFocusBlur.bind(this)],
                keydown: ["input", i.onKeydown.bind(this)],
                click: ["scope", i.onClickScope.bind(this)],
                dblclick: ["scope", i.onDoubleClickScope.bind(this)],
                paste: ["input", i.onPaste.bind(this)],
                drop: ["input", i.onDrop.bind(this)]
              }) {
                this.DOM[e[a][0]][s](a, e[a][1]);
              }

              clearInterval(this.listeners.main.originalInputValueObserverInterval), this.listeners.main.originalInputValueObserverInterval = setInterval(i.observeOriginalInputValue.bind(this), 500);
              var n = this.listeners.main.inputMutationObserver || new MutationObserver(i.onInputDOMChange.bind(this));
              n && n.disconnect(), "mix" == this.settings.mode && n.observe(this.DOM.input, {
                childList: !0
              });
            }
          },
          bindGlobal: function bindGlobal(t) {
            var e,
                i = this.events.callbacks,
                s = t ? "removeEventListener" : "addEventListener";

            if (t || !this.listeners.global) {
              var _iterator = _createForOfIteratorHelper((this.listeners.global = this.listeners && this.listeners.global || [{
                type: this.isIE ? "keydown" : "input",
                target: this.DOM.input,
                cb: i[this.isIE ? "onInputIE" : "onInput"].bind(this)
              }, {
                type: "keydown",
                target: window,
                cb: i.onWindowKeyDown.bind(this)
              }, {
                type: "blur",
                target: this.DOM.input,
                cb: i.onFocusBlur.bind(this)
              }], this.listeners.global)),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  e = _step.value;
                  e.target[s](e.type, e.cb);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          },
          unbindGlobal: function unbindGlobal() {
            this.events.bindGlobal.call(this, !0);
          },
          callbacks: {
            onFocusBlur: function onFocusBlur(t) {
              var e = t.target ? this.trim(t.target.textContent) : "",
                  i = this.settings,
                  s = t.type,
                  a = i.dropdown.enabled >= 0,
                  n = {
                relatedTarget: t.relatedTarget
              },
                  o = this.state.actions.selectOption && (a || !i.dropdown.closeOnSelect),
                  r = this.state.actions.addNew && a,
                  l = t.relatedTarget && c.call(this, t.relatedTarget) && this.DOM.scope.contains(t.relatedTarget);

              if ("blur" == s) {
                if (t.relatedTarget === this.DOM.scope) return this.dropdown.hide(), void this.DOM.input.focus();
                this.postUpdate(), this.triggerChangeEvent();
              }

              if (!o && !r) if (this.state.hasFocus = "focus" == s && +new Date(), this.toggleFocusClass(this.state.hasFocus), "mix" != i.mode) {
                if ("focus" == s) return this.trigger("focus", n), void (0 !== i.dropdown.enabled && i.userInput || this.dropdown.show(this.value.length ? "" : void 0));
                "blur" == s && (this.trigger("blur", n), this.loading(!1), "select" == this.settings.mode && l && (e = ""), ("select" == this.settings.mode && e ? !this.value.length || this.value[0].value != e : e && !this.state.actions.selectOption && i.addTagOnBlur) && this.addTags(e, !0), "select" != this.settings.mode || e || this.removeTags()), this.DOM.input.removeAttribute("style"), this.dropdown.hide();
              } else "focus" == s ? this.trigger("focus", n) : "blur" == t.type && (this.trigger("blur", n), this.loading(!1), this.dropdown.hide(), this.state.dropdown.visible = void 0, this.setStateSelection());
            },
            onWindowKeyDown: function onWindowKeyDown(t) {
              var e,
                  i = document.activeElement;
              if (c.call(this, i) && this.DOM.scope.contains(document.activeElement)) switch (e = i.nextElementSibling, t.key) {
                case "Backspace":
                  this.removeTags(i), (e || this.DOM.input).focus();
                  break;

                case "Enter":
                  setTimeout(this.editTag.bind(this), 0, i);
              }
            },
            onKeydown: function onKeydown(t) {
              var _this17 = this;

              var e = this.settings;
              "select" == e.mode && e.enforceWhitelist && this.value.length && "Tab" != t.key && t.preventDefault();
              var i = this.trim(t.target.textContent);

              if (this.trigger("keydown", {
                originalEvent: this.cloneEvent(t)
              }), "mix" == e.mode) {
                switch (t.key) {
                  case "Left":
                  case "ArrowLeft":
                    this.state.actions.ArrowLeft = !0;
                    break;

                  case "Delete":
                  case "Backspace":
                    if (this.state.editing) return;
                    var s,
                        a,
                        r,
                        l = document.getSelection(),
                        d = "Delete" == t.key && l.anchorOffset == (l.anchorNode.length || 0),
                        h = l.anchorNode.previousSibling,
                        p = 1 == l.anchorNode.nodeType || !l.anchorOffset && h && 1 == h.nodeType && l.anchorNode.previousSibling,
                        u = n(this.DOM.input.innerHTML),
                        m = this.getTagElms();
                    if ("edit" == e.backspace && p) return s = 1 == l.anchorNode.nodeType ? null : l.anchorNode.previousElementSibling, setTimeout(this.editTag.bind(this), 0, s), void t.preventDefault();
                    if (g() && p) return r = o(p), p.hasAttribute("readonly") || p.remove(), this.DOM.input.focus(), void setTimeout(function () {
                      _this17.placeCaretAfterNode(r), _this17.DOM.input.click();
                    });
                    if ("BR" == l.anchorNode.nodeName) return;
                    if ((d || p) && 1 == l.anchorNode.nodeType ? a = 0 == l.anchorOffset ? d ? m[0] : null : m[l.anchorOffset - 1] : d ? a = l.anchorNode.nextElementSibling : p && (a = p), 3 == l.anchorNode.nodeType && !l.anchorNode.nodeValue && l.anchorNode.previousElementSibling && t.preventDefault(), (p || d) && !e.backspace) return void t.preventDefault();
                    if ("Range" != l.type && !l.anchorOffset && l.anchorNode == this.DOM.input && "Delete" != t.key) return void t.preventDefault();
                    if ("Range" != l.type && a && a.hasAttribute("readonly")) return void this.placeCaretAfterNode(o(a));
                    clearTimeout(f), f = setTimeout(function () {
                      var t = document.getSelection(),
                          e = n(_this17.DOM.input.innerHTML),
                          i = !d && t.anchorNode.previousSibling;
                      if (e.length >= u.length && i) if (c.call(_this17, i) && !i.hasAttribute("readonly")) {
                        if (_this17.removeTags(i), _this17.fixFirefoxLastTagNoCaret(), 2 == _this17.DOM.input.children.length && "BR" == _this17.DOM.input.children[1].tagName) return _this17.DOM.input.innerHTML = "", _this17.value.length = 0, !0;
                      } else i.remove();
                      _this17.value = [].map.call(m, function (t, e) {
                        var i = _this17.tagData(t);

                        if (t.parentNode || i.readonly) return i;

                        _this17.trigger("remove", {
                          tag: t,
                          index: e,
                          data: i
                        });
                      }).filter(function (t) {
                        return t;
                      });
                    }, 20);
                }

                return !0;
              }

              switch (t.key) {
                case "Backspace":
                  "select" == e.mode && e.enforceWhitelist && this.value.length ? this.removeTags() : this.state.dropdown.visible && "manual" != e.dropdown.position || "" != i && 8203 != i.charCodeAt(0) || (!0 === e.backspace ? this.removeTags() : "edit" == e.backspace && setTimeout(this.editTag.bind(this), 0));
                  break;

                case "Esc":
                case "Escape":
                  if (this.state.dropdown.visible) return;
                  t.target.blur();
                  break;

                case "Down":
                case "ArrowDown":
                  this.state.dropdown.visible || this.dropdown.show();
                  break;

                case "ArrowRight":
                  {
                    var _t4 = this.state.inputSuggestion || this.state.ddItemData;

                    if (_t4 && e.autoComplete.rightKey) return void this.addTags([_t4], !0);
                    break;
                  }

                case "Tab":
                  {
                    var _s2 = "select" == e.mode;

                    if (!i || _s2) return !0;
                    t.preventDefault();
                  }

                case "Enter":
                  if (this.state.dropdown.visible || 229 == t.keyCode) return;
                  t.preventDefault(), setTimeout(function () {
                    _this17.state.actions.selectOption || _this17.addTags(i, !0);
                  });
              }
            },
            onInput: function onInput(t) {
              if (this.postUpdate(), "mix" == this.settings.mode) return this.events.callbacks.onMixTagsInput.call(this, t);
              var e = this.input.normalize.call(this),
                  i = e.length >= this.settings.dropdown.enabled,
                  s = {
                value: e,
                inputElm: this.DOM.input
              };
              s.isValid = this.validateTag({
                value: e
              }), this.state.inputText != e && (this.input.set.call(this, e, !1), -1 != e.search(this.settings.delimiters) ? this.addTags(e) && this.input.set.call(this) : this.settings.dropdown.enabled >= 0 && this.dropdown[i ? "show" : "hide"](e), this.trigger("input", s));
            },
            onMixTagsInput: function onMixTagsInput(t) {
              var _this18 = this;

              var e,
                  i,
                  s,
                  a,
                  n,
                  o,
                  r,
                  l,
                  h = this.settings,
                  c = this.value.length,
                  p = this.getTagElms(),
                  u = document.createDocumentFragment(),
                  m = window.getSelection().getRangeAt(0),
                  v = [].map.call(p, function (t) {
                return _this18.tagData(t).value;
              });
              if ("deleteContentBackward" == t.inputType && g() && this.events.callbacks.onKeydown.call(this, {
                target: t.target,
                key: "Backspace"
              }), this.value.slice().forEach(function (t) {
                t.readonly && !v.includes(t.value) && u.appendChild(_this18.createTagElem(t));
              }), u.childNodes.length && (m.insertNode(u), this.setRangeAtStartEnd(!1, u.lastChild)), p.length != c) return this.value = [].map.call(this.getTagElms(), function (t) {
                return _this18.tagData(t);
              }), void this.update({
                withoutChangeEvent: !0
              });
              if (this.hasMaxTags()) return !0;

              if (window.getSelection && (o = window.getSelection()).rangeCount > 0 && 3 == o.anchorNode.nodeType) {
                if ((m = o.getRangeAt(0).cloneRange()).collapse(!0), m.setStart(o.focusNode, 0), s = (e = m.toString().slice(0, m.endOffset)).split(h.pattern).length - 1, (i = e.match(h.pattern)) && (a = e.slice(e.lastIndexOf(i[i.length - 1]))), a) {
                  if (this.state.actions.ArrowLeft = !1, this.state.tag = {
                    prefix: a.match(h.pattern)[0],
                    value: a.replace(h.pattern, "")
                  }, this.state.tag.baseOffset = o.baseOffset - this.state.tag.value.length, l = this.state.tag.value.match(h.delimiters)) return this.state.tag.value = this.state.tag.value.replace(h.delimiters, ""), this.state.tag.delimiters = l[0], this.addTags(this.state.tag.value, h.dropdown.clearOnSelect), void this.dropdown.hide();
                  n = this.state.tag.value.length >= h.dropdown.enabled;

                  try {
                    r = (r = this.state.flaggedTags[this.state.tag.baseOffset]).prefix == this.state.tag.prefix && r.value[0] == this.state.tag.value[0], this.state.flaggedTags[this.state.tag.baseOffset] && !this.state.tag.value && delete this.state.flaggedTags[this.state.tag.baseOffset];
                  } catch (t) {}

                  (r || s < this.state.mixMode.matchedPatternCount) && (n = !1);
                } else this.state.flaggedTags = {};

                this.state.mixMode.matchedPatternCount = s;
              }

              setTimeout(function () {
                _this18.update({
                  withoutChangeEvent: !0
                }), _this18.trigger("input", d({}, _this18.state.tag, {
                  textContent: _this18.DOM.input.textContent
                })), _this18.state.tag && _this18.dropdown[n ? "show" : "hide"](_this18.state.tag.value);
              }, 10);
            },
            onInputIE: function onInputIE(t) {
              var e = this;
              setTimeout(function () {
                e.events.callbacks.onInput.call(e, t);
              });
            },
            observeOriginalInputValue: function observeOriginalInputValue() {
              this.DOM.originalInput.value != this.DOM.originalInput.tagifyValue && this.loadOriginalValues();
            },
            onClickScope: function onClickScope(t) {
              var e = this.settings,
                  i = t.target.closest("." + e.classNames.tag),
                  s = +new Date() - this.state.hasFocus;

              if (t.target != this.DOM.scope) {
                if (!t.target.classList.contains(e.classNames.tagX)) return i ? (this.trigger("click", {
                  tag: i,
                  index: this.getNodeIndex(i),
                  data: this.tagData(i),
                  originalEvent: this.cloneEvent(t)
                }), void (1 !== e.editTags && 1 !== e.editTags.clicks || this.events.callbacks.onDoubleClickScope.call(this, t))) : void (t.target == this.DOM.input && ("mix" == e.mode && this.fixFirefoxLastTagNoCaret(), s > 500) ? this.state.dropdown.visible ? this.dropdown.hide() : 0 === e.dropdown.enabled && "mix" != e.mode && this.dropdown.show(this.value.length ? "" : void 0) : "select" == e.mode && !this.state.dropdown.visible && this.dropdown.show());
                this.removeTags(t.target.parentNode);
              } else this.state.hasFocus || this.DOM.input.focus();
            },
            onPaste: function onPaste(t) {
              var _this19 = this;

              t.preventDefault();
              var e,
                  i,
                  s = this.settings;
              if ("select" == s.mode && s.enforceWhitelist || !s.userInput) return !1;
              s.readonly || (e = t.clipboardData || window.clipboardData, i = e.getData("Text"), s.hooks.beforePaste(t, {
                tagify: this,
                pastedText: i,
                clipboardData: e
              }).then(function (e) {
                void 0 === e && (e = i), e && (_this19.injectAtCaret(e, window.getSelection().getRangeAt(0)), "mix" == _this19.settings.mode ? _this19.events.callbacks.onMixTagsInput.call(_this19, t) : _this19.settings.pasteAsTags ? _this19.addTags(_this19.state.inputText + e, !0) : _this19.state.inputText = e);
              })["catch"](function (t) {
                return t;
              }));
            },
            onDrop: function onDrop(t) {
              t.preventDefault();
            },
            onEditTagInput: function onEditTagInput(t, e) {
              var i = t.closest("." + this.settings.classNames.tag),
                  s = this.getNodeIndex(i),
                  a = this.tagData(i),
                  n = this.input.normalize.call(this, t),
                  o = i.innerHTML != i.__tagifyTagData.__originalHTML,
                  r = this.validateTag(_defineProperty({}, this.settings.tagTextProp, n));
              o || !0 !== t.originalIsValid || (r = !0), i.classList.toggle(this.settings.classNames.tagInvalid, !0 !== r), a.__isValid = r, i.title = !0 === r ? a.title || a.value : r, n.length >= this.settings.dropdown.enabled && (this.state.editing && (this.state.editing.value = n), this.dropdown.show(n)), this.trigger("edit:input", {
                tag: i,
                index: s,
                data: d({}, this.value[s], {
                  newValue: n
                }),
                originalEvent: this.cloneEvent(e)
              });
            },
            onEditTagFocus: function onEditTagFocus(t) {
              this.state.editing = {
                scope: t,
                input: t.querySelector("[contenteditable]")
              };
            },
            onEditTagBlur: function onEditTagBlur(t) {
              if (this.state.hasFocus || this.toggleFocusClass(), this.DOM.scope.contains(t)) {
                var e,
                    i,
                    s = this.settings,
                    a = t.closest("." + s.classNames.tag),
                    n = this.input.normalize.call(this, t),
                    o = this.tagData(a).__originalData,
                    r = a.innerHTML != a.__tagifyTagData.__originalHTML,
                    l = this.validateTag(_defineProperty({}, s.tagTextProp, n));

                if (n) {
                  if (r) {
                    var _d;

                    if (e = this.hasMaxTags(), i = this.getWhitelistItem(n) || d({}, o, (_d = {}, _defineProperty(_d, s.tagTextProp, n), _defineProperty(_d, "value", n), _defineProperty(_d, "__isValid", l), _d)), s.transformTag.call(this, i, o), !0 !== (l = !e && this.validateTag(_defineProperty({}, s.tagTextProp, i[s.tagTextProp])))) {
                      if (this.trigger("invalid", {
                        data: i,
                        tag: a,
                        message: l
                      }), s.editTags.keepInvalid) return;
                      s.keepInvalidTags ? i.__isValid = l : i = o;
                    } else s.keepInvalidTags && (delete i.title, delete i["aria-invalid"], delete i["class"]);

                    this.onEditTagDone(a, i);
                  } else this.onEditTagDone(a, o);
                } else this.onEditTagDone(a);
              }
            },
            onEditTagkeydown: function onEditTagkeydown(t, e) {
              switch (this.trigger("edit:keydown", {
                originalEvent: this.cloneEvent(t)
              }), t.key) {
                case "Esc":
                case "Escape":
                  e.innerHTML = e.__tagifyTagData.__originalHTML;

                case "Enter":
                case "Tab":
                  t.preventDefault(), t.target.blur();
              }
            },
            onDoubleClickScope: function onDoubleClickScope(t) {
              var e,
                  i,
                  s = t.target.closest("." + this.settings.classNames.tag),
                  a = this.settings;
              s && a.userInput && (e = s.classList.contains(this.settings.classNames.tagEditing), i = s.hasAttribute("readonly"), "select" == a.mode || a.readonly || e || i || !this.settings.editTags || this.editTag(s), this.toggleFocusClass(!0), this.trigger("dblclick", {
                tag: s,
                index: this.getNodeIndex(s),
                data: this.tagData(s)
              }));
            },
            onInputDOMChange: function onInputDOMChange(t) {
              var _this20 = this;

              t.forEach(function (t) {
                t.addedNodes.forEach(function (t) {
                  if (t) if ("<div><br></div>" == t.outerHTML) t.replaceWith(document.createElement("br"));else if (1 == t.nodeType && t.querySelector(_this20.settings.classNames.tagSelector)) {
                    var _e = document.createTextNode("");

                    3 == t.childNodes[0].nodeType && "BR" != t.previousSibling.nodeName && (_e = document.createTextNode("\n")), t.replaceWith.apply(t, [_e].concat(_toConsumableArray(_toConsumableArray(t.childNodes).slice(0, -1)))), _this20.placeCaretAfterNode(_e.previousSibling);
                  } else c.call(_this20, t) && t.previousSibling && "BR" == t.previousSibling.nodeName && (t.previousSibling.replaceWith("\n​"), _this20.placeCaretAfterNode(t.previousSibling.previousSibling));
                }), t.removedNodes.forEach(function (t) {
                  t && "BR" == t.nodeName && c.call(_this20, e) && (_this20.removeTags(e), _this20.fixFirefoxLastTagNoCaret());
                });
              });
              var e = this.DOM.input.lastChild;
              e && "" == e.nodeValue && e.remove(), e && "BR" == e.nodeName || this.DOM.input.appendChild(document.createElement("br"));
            }
          }
        };

        function y(t, e) {
          return t ? t.previousElementSibling && t.previousElementSibling.classList.contains("tagify") ? (console.warn("Tagify: ", "input element is already Tagified", t), this) : (d(this, function (t) {
            var e = document.createTextNode("");

            function i(t, i, s) {
              s && i.split(/\s+/g).forEach(function (i) {
                return e[t + "EventListener"].call(e, i, s);
              });
            }

            return {
              off: function off(t, e) {
                return i("remove", t, e), this;
              },
              on: function on(t, e) {
                return e && "function" == typeof e && i("add", t, e), this;
              },
              trigger: function trigger(i, s, a) {
                var n;
                if (a = a || {
                  cloneData: !0
                }, i) if (t.settings.isJQueryPlugin) "remove" == i && (i = "removeTag"), jQuery(t.DOM.originalInput).triggerHandler(i, [s]);else {
                  try {
                    var o = "object" == _typeof(s) ? s : {
                      value: s
                    };
                    if ((o = a.cloneData ? d({}, o) : o).tagify = this, s instanceof Object) for (var r in s) {
                      s[r] instanceof HTMLElement && (o[r] = s[r]);
                    }
                    n = new CustomEvent(i, {
                      detail: o
                    });
                  } catch (t) {
                    console.warn(t);
                  }

                  e.dispatchEvent(n);
                }
              }
            };
          }(this)), this.isFirefox = "undefined" != typeof InstallTrigger, this.isIE = window.document.documentMode, e = e || {}, this.getPersistedData = (i = e.id, function (t) {
            var e,
                s = "/" + t;
            if (1 == localStorage.getItem(v + i + "/v", 1)) try {
              e = JSON.parse(localStorage[v + i + s]);
            } catch (t) {}
            return e;
          }), this.setPersistedData = function (t) {
            return t ? (localStorage.setItem(v + t + "/v", 1), function (e, i) {
              var s = "/" + i,
                  a = JSON.stringify(e);
              e && i && (localStorage.setItem(v + t + s, a), dispatchEvent(new Event("storage")));
            }) : function () {};
          }(e.id), this.clearPersistedData = function (t) {
            return function (e) {
              var i = v + "/" + t + "/";
              if (e) localStorage.removeItem(i + e);else for (var _t5 in localStorage) {
                _t5.includes(i) && localStorage.removeItem(_t5);
              }
            };
          }(e.id), this.applySettings(t, e), this.state = {
            inputText: "",
            editing: !1,
            actions: {},
            mixMode: {},
            dropdown: {},
            flaggedTags: {}
          }, this.value = [], this.listeners = {}, this.DOM = {}, this.build(t), u.call(this), this.getCSSVars(), this.loadOriginalValues(), this.events.customBinding.call(this), this.events.binding.call(this), void (t.autofocus && this.DOM.input.focus())) : (console.warn("Tagify: ", "input element not found", t), this);
          var i;
        }

        return y.prototype = {
          _dropdown: m,
          customEventsList: ["change", "add", "remove", "invalid", "input", "click", "keydown", "focus", "blur", "edit:input", "edit:beforeUpdate", "edit:updated", "edit:start", "edit:keydown", "dropdown:show", "dropdown:hide", "dropdown:select", "dropdown:updated", "dropdown:noMatch", "dropdown:scroll"],
          dataProps: ["__isValid", "__removed", "__originalData", "__originalHTML", "__tagId"],
          trim: function trim(t) {
            return this.settings.trim && t && "string" == typeof t ? t.trim() : t;
          },
          parseHTML: function parseHTML(t) {
            return new DOMParser().parseFromString(t.trim(), "text/html").body.firstElementChild;
          },
          templates: w,
          parseTemplate: function parseTemplate(t, e) {
            return t = this.settings.templates[t] || t, this.parseHTML(t.apply(this, e));
          },

          set whitelist(t) {
            var e = t && Array.isArray(t);
            this.settings.whitelist = e ? t : [], this.setPersistedData(e ? t : [], "whitelist");
          },

          get whitelist() {
            return this.settings.whitelist;
          },

          applySettings: function applySettings(t, i) {
            p.templates = this.templates;
            var s = this.settings = d({}, p, i);
            s.disabled = t.hasAttribute("disabled"), s.readonly = t.hasAttribute("readonly"), s.placeholder = t.getAttribute("placeholder") || s.placeholder || "", s.required = t.hasAttribute("required");

            var _loop = function _loop(_t6) {
              Object.defineProperty(s.classNames, _t6 + "Selector", {
                get: function get() {
                  return "." + this[_t6].split(" ")[0];
                }
              });
            };

            for (var _t6 in s.classNames) {
              _loop(_t6);
            }

            if (this.isIE && (s.autoComplete = !1), ["whitelist", "blacklist"].forEach(function (e) {
              var i = t.getAttribute("data-" + e);
              i && (i = i.split(s.delimiters)) instanceof Array && (s[e] = i);
            }), "autoComplete" in i && !l(i.autoComplete) && (s.autoComplete = p.autoComplete, s.autoComplete.enabled = i.autoComplete), "mix" == s.mode && (s.autoComplete.rightKey = !0, s.delimiters = i.delimiters || null, s.tagTextProp && !s.dropdown.searchKeys.includes(s.tagTextProp) && s.dropdown.searchKeys.push(s.tagTextProp)), t.pattern) try {
              s.pattern = new RegExp(t.pattern);
            } catch (t) {}
            if (this.settings.delimiters) try {
              s.delimiters = new RegExp(this.settings.delimiters, "g");
            } catch (t) {}
            s.disabled && (s.userInput = !1), this.TEXTS = e(e({}, T), s.texts || {}), "select" != s.mode && s.userInput || (s.dropdown.enabled = 0), s.dropdown.appendTarget = i.dropdown && i.dropdown.appendTarget ? i.dropdown.appendTarget : document.body;
            var a = this.getPersistedData("whitelist");
            Array.isArray(a) && (this.whitelist = Array.isArray(s.whitelist) ? function () {
              var t = [],
                  e = {};

              var _iterator2 = _createForOfIteratorHelper(arguments),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _i2 = _step2.value;

                  var _iterator3 = _createForOfIteratorHelper(_i2),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var _s3 = _step3.value;
                      l(_s3) ? e[_s3.value] || (t.push(_s3), e[_s3.value] = 1) : t.includes(_s3) || t.push(_s3);
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              return t;
            }(s.whitelist, a) : a);
          },
          getAttributes: function getAttributes(t) {
            var e,
                i = this.getCustomAttributes(t),
                s = "";

            for (e in i) {
              s += " " + e + (void 0 !== t[e] ? "=\"".concat(i[e], "\"") : "");
            }

            return s;
          },
          getCustomAttributes: function getCustomAttributes(t) {
            if (!l(t)) return "";
            var e,
                i = {};

            for (e in t) {
              "__" != e.slice(0, 2) && "class" != e && t.hasOwnProperty(e) && void 0 !== t[e] && (i[e] = r(t[e]));
            }

            return i;
          },
          setStateSelection: function setStateSelection() {
            var t = window.getSelection(),
                e = {
              anchorOffset: t.anchorOffset,
              anchorNode: t.anchorNode,
              range: t.getRangeAt && t.rangeCount && t.getRangeAt(0)
            };
            return this.state.selection = e, e;
          },
          getCaretGlobalPosition: function getCaretGlobalPosition() {
            var t = document.getSelection();

            if (t.rangeCount) {
              var _e2 = t.getRangeAt(0),
                  _i3 = _e2.startContainer,
                  _s4 = _e2.startOffset;

              var _a, _n;

              if (_s4 > 0) return _n = document.createRange(), _n.setStart(_i3, _s4 - 1), _n.setEnd(_i3, _s4), _a = _n.getBoundingClientRect(), {
                left: _a.right,
                top: _a.top,
                bottom: _a.bottom
              };
              if (_i3.getBoundingClientRect) return _i3.getBoundingClientRect();
            }

            return {
              left: -9999,
              top: -9999
            };
          },
          getCSSVars: function getCSSVars() {
            var t = getComputedStyle(this.DOM.scope, null);
            var e;
            this.CSSVars = {
              tagHideTransition: function (_ref) {
                var t = _ref.value,
                    e = _ref.unit;
                return "s" == e ? 1e3 * t : t;
              }(function (t) {
                if (!t) return {};
                var e = (t = t.trim().split(" ")[0]).split(/\d+/g).filter(function (t) {
                  return t;
                }).pop().trim();
                return {
                  value: +t.split(e).filter(function (t) {
                    return t;
                  })[0].trim(),
                  unit: e
                };
              }((e = "tag-hide-transition", t.getPropertyValue("--" + e))))
            };
          },
          build: function build(t) {
            var e = this.DOM;
            this.settings.mixMode.integrated ? (e.originalInput = null, e.scope = t, e.input = t) : (e.originalInput = t, e.scope = this.parseTemplate("wrapper", [t, this.settings]), e.input = e.scope.querySelector(this.settings.classNames.inputSelector), t.parentNode.insertBefore(e.scope, t));
          },
          destroy: function destroy() {
            this.events.unbindGlobal.call(this), this.DOM.scope.parentNode.removeChild(this.DOM.scope), this.dropdown.hide(!0), clearTimeout(this.dropdownHide__bindEventsTimeout);
          },
          loadOriginalValues: function loadOriginalValues(t) {
            var e,
                i = this.settings;

            if (void 0 === t) {
              var _e3 = this.getPersistedData("value");

              t = _e3 && !this.DOM.originalInput.value ? _e3 : i.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value;
            }

            if (this.removeAllTags({
              withoutChangeEvent: !0
            }), t) {
              if ("mix" == i.mode) this.parseMixTags(t.trim()), (e = this.DOM.input.lastChild) && "BR" == e.tagName || this.DOM.input.insertAdjacentHTML("beforeend", "<br>");else {
                try {
                  JSON.parse(t) instanceof Array && (t = JSON.parse(t));
                } catch (t) {}

                this.addTags(t).forEach(function (t) {
                  return t && t.classList.add(i.classNames.tagNoAnimation);
                });
              }
            } else this.postUpdate();
            this.state.lastOriginalValueReported = i.mixMode.integrated ? "" : this.DOM.originalInput.value, this.state.loadedOriginalValues = !0;
          },
          cloneEvent: function cloneEvent(t) {
            var e = {};

            for (var i in t) {
              e[i] = t[i];
            }

            return e;
          },
          loading: function loading(t) {
            return this.state.isLoading = t, this.DOM.scope.classList[t ? "add" : "remove"](this.settings.classNames.scopeLoading), this;
          },
          tagLoading: function tagLoading(t, e) {
            return t && t.classList[e ? "add" : "remove"](this.settings.classNames.tagLoading), this;
          },
          toggleClass: function toggleClass(t, e) {
            "string" == typeof t && this.DOM.scope.classList.toggle(t, e);
          },
          toggleFocusClass: function toggleFocusClass(t) {
            this.toggleClass(this.settings.classNames.focus, !!t);
          },
          triggerChangeEvent: function triggerChangeEvent() {
            if (!this.settings.mixMode.integrated) {
              var t = this.DOM.originalInput,
                  e = this.state.lastOriginalValueReported !== t.value,
                  i = new CustomEvent("change", {
                bubbles: !0
              });
              e && (this.state.lastOriginalValueReported = t.value, i.simulated = !0, t._valueTracker && t._valueTracker.setValue(Math.random()), t.dispatchEvent(i), this.trigger("change", this.state.lastOriginalValueReported), t.value = this.state.lastOriginalValueReported);
            }
          },
          events: b,
          fixFirefoxLastTagNoCaret: function fixFirefoxLastTagNoCaret() {},
          placeCaretAfterNode: function placeCaretAfterNode(t) {
            if (t && t.parentNode) {
              var e = t.nextSibling,
                  i = window.getSelection(),
                  s = i.getRangeAt(0);
              i.rangeCount && (s.setStartAfter(e || t), s.collapse(!0), i.removeAllRanges(), i.addRange(s));
            }
          },
          insertAfterTag: function insertAfterTag(t, e) {
            if (e = e || this.settings.mixMode.insertAfterTag, t && t.parentNode && e) return e = "string" == typeof e ? document.createTextNode(e) : e, t.parentNode.insertBefore(e, t.nextSibling), e;
          },
          editTag: function editTag(t, e) {
            var _this21 = this;

            t = t || this.getLastTag(), e = e || {}, this.dropdown.hide();
            var i = this.settings;

            function s() {
              return t.querySelector(i.classNames.tagTextSelector);
            }

            var a = s(),
                n = this.getNodeIndex(t),
                o = this.tagData(t),
                r = this.events.callbacks,
                l = this,
                h = !0;

            if (a) {
              if (!(o instanceof Object && "editable" in o) || o.editable) return a.setAttribute("contenteditable", !0), t.classList.add(i.classNames.tagEditing), this.tagData(t, {
                __originalData: d({}, o),
                __originalHTML: t.innerHTML
              }), a.addEventListener("focus", r.onEditTagFocus.bind(this, t)), a.addEventListener("blur", function () {
                setTimeout(function () {
                  return r.onEditTagBlur.call(l, s());
                });
              }), a.addEventListener("input", r.onEditTagInput.bind(this, a)), a.addEventListener("keydown", function (e) {
                return r.onEditTagkeydown.call(_this21, e, t);
              }), a.focus(), this.setRangeAtStartEnd(!1, a), e.skipValidation || (h = this.editTagToggleValidity(t)), a.originalIsValid = h, this.trigger("edit:start", {
                tag: t,
                index: n,
                data: o,
                isValid: h
              }), this;
            } else console.warn("Cannot find element in Tag template: .", i.classNames.tagTextSelector);
          },
          editTagToggleValidity: function editTagToggleValidity(t, e) {
            var i;
            if (e = e || this.tagData(t)) return (i = !("__isValid" in e) || !0 === e.__isValid) || this.removeTagsFromValue(t), this.update(), t.classList.toggle(this.settings.classNames.tagNotAllowed, !i), e.__isValid;
            console.warn("tag has no data: ", t, e);
          },
          onEditTagDone: function onEditTagDone(t, e) {
            e = e || {};
            var i = {
              tag: t = t || this.state.editing.scope,
              index: this.getNodeIndex(t),
              previousData: this.tagData(t),
              data: e
            };
            this.trigger("edit:beforeUpdate", i, {
              cloneData: !1
            }), this.state.editing = !1, delete e.__originalData, delete e.__originalHTML, t && e[this.settings.tagTextProp] ? (t = this.replaceTag(t, e), this.editTagToggleValidity(t, e), this.settings.a11y.focusableTags && t.focus()) : t && this.removeTags(t), this.trigger("edit:updated", i), this.dropdown.hide(), this.settings.keepInvalidTags && this.reCheckInvalidTags();
          },
          replaceTag: function replaceTag(t, e) {
            e && e.value || (e = t.__tagifyTagData), e.__isValid && 1 != e.__isValid && d(e, this.getInvalidTagAttrs(e, e.__isValid));
            var i = this.createTagElem(e);
            return t.parentNode.replaceChild(i, t), this.updateValueByDOMTags(), i;
          },
          updateValueByDOMTags: function updateValueByDOMTags() {
            var _this22 = this;

            this.value.length = 0, [].forEach.call(this.getTagElms(), function (t) {
              t.classList.contains(_this22.settings.classNames.tagNotAllowed.split(" ")[0]) || _this22.value.push(_this22.tagData(t));
            }), this.update();
          },
          setRangeAtStartEnd: function setRangeAtStartEnd(t, e) {
            t = "number" == typeof t ? t : !!t, e = (e = e || this.DOM.input).lastChild || e;
            var i = document.getSelection();

            try {
              i.rangeCount >= 1 && ["Start", "End"].forEach(function (s) {
                return i.getRangeAt(0)["set" + s](e, t || e.length);
              });
            } catch (t) {}
          },
          injectAtCaret: function injectAtCaret(t, e) {
            if (e = e || this.state.selection.range) return "string" == typeof t && (t = document.createTextNode(t)), e.deleteContents(), e.insertNode(t), this.setRangeAtStartEnd(!1, t), this.updateValueByDOMTags(), this.update(), this;
          },
          input: {
            set: function set() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
              var i = this.settings.dropdown.closeOnSelect;
              this.state.inputText = t, e && (this.DOM.input.innerHTML = r("" + t)), !t && i && this.dropdown.hide.bind(this), this.input.autocomplete.suggest.call(this), this.input.validate.call(this);
            },
            raw: function raw() {
              return this.DOM.input.textContent;
            },
            validate: function validate() {
              var t = !this.state.inputText || !0 === this.validateTag({
                value: this.state.inputText
              });
              return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid, !t), t;
            },
            normalize: function normalize(t) {
              var e = t || this.DOM.input,
                  i = [];
              e.childNodes.forEach(function (t) {
                return 3 == t.nodeType && i.push(t.nodeValue);
              }), i = i.join("\n");

              try {
                i = i.replace(/(?:\r\n|\r|\n)/g, this.settings.delimiters.source.charAt(0));
              } catch (t) {}

              return i = i.replace(/\s/g, " "), this.settings.trim && (i = i.replace(/^\s+/, "")), i;
            },
            autocomplete: {
              suggest: function suggest(t) {
                if (this.settings.autoComplete.enabled) {
                  "string" == typeof (t = t || {}) && (t = {
                    value: t
                  });
                  var e = t.value ? "" + t.value : "",
                      i = e.substr(0, this.state.inputText.length).toLowerCase(),
                      s = e.substring(this.state.inputText.length);
                  e && this.state.inputText && i == this.state.inputText.toLowerCase() ? (this.DOM.input.setAttribute("data-suggest", s), this.state.inputSuggestion = t) : (this.DOM.input.removeAttribute("data-suggest"), delete this.state.inputSuggestion);
                }
              },
              set: function set(t) {
                var e = this.DOM.input.getAttribute("data-suggest"),
                    i = t || (e ? this.state.inputText + e : null);
                return !!i && ("mix" == this.settings.mode ? this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix + i)) : (this.input.set.call(this, i), this.setRangeAtStartEnd()), this.input.autocomplete.suggest.call(this), this.dropdown.hide(), !0);
              }
            }
          },
          getTagIdx: function getTagIdx(t) {
            return this.value.findIndex(function (e) {
              return e.__tagId == (t || {}).__tagId;
            });
          },
          getNodeIndex: function getNodeIndex(t) {
            var e = 0;
            if (t) for (; t = t.previousElementSibling;) {
              e++;
            }
            return e;
          },
          getTagElms: function getTagElms() {
            for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
              t[_key] = arguments[_key];
            }

            var e = "." + [].concat(_toConsumableArray(this.settings.classNames.tag.split(" ")), t).join(".");
            return [].slice.call(this.DOM.scope.querySelectorAll(e));
          },
          getLastTag: function getLastTag() {
            var t = this.DOM.scope.querySelectorAll("".concat(this.settings.classNames.tagSelector, ":not(.").concat(this.settings.classNames.tagHide, "):not([readonly])"));
            return t[t.length - 1];
          },
          tagData: function tagData(t, e, i) {
            return t ? (e && (t.__tagifyTagData = i ? e : d({}, t.__tagifyTagData || {}, e)), t.__tagifyTagData) : (console.warn("tag elment doesn't exist", t, e), e);
          },
          isTagDuplicate: function isTagDuplicate(t, e) {
            var _this23 = this;

            var i = this.settings;
            return "select" != i.mode && this.value.reduce(function (a, n) {
              return s(_this23.trim("" + t), n.value, e || i.dropdown.caseSensitive) ? a + 1 : a;
            }, 0);
          },
          getTagIndexByValue: function getTagIndexByValue(t) {
            var _this24 = this;

            var e = [];
            return this.getTagElms().forEach(function (i, a) {
              s(_this24.trim(i.textContent), t, _this24.settings.dropdown.caseSensitive) && e.push(a);
            }), e;
          },
          getTagElmByValue: function getTagElmByValue(t) {
            var e = this.getTagIndexByValue(t)[0];
            return this.getTagElms()[e];
          },
          flashTag: function flashTag(t) {
            var _this25 = this;

            t && (t.classList.add(this.settings.classNames.tagFlash), setTimeout(function () {
              t.classList.remove(_this25.settings.classNames.tagFlash);
            }, 100));
          },
          isTagBlacklisted: function isTagBlacklisted(t) {
            return t = this.trim(t.toLowerCase()), this.settings.blacklist.filter(function (e) {
              return ("" + e).toLowerCase() == t;
            }).length;
          },
          isTagWhitelisted: function isTagWhitelisted(t) {
            return !!this.getWhitelistItem(t);
          },
          getWhitelistItem: function getWhitelistItem(t, e, i) {
            e = e || "value";
            var a,
                n = this.settings;
            return (i = i || n.whitelist).some(function (i) {
              var o = "string" == typeof i ? i : i[e] || i.value;
              if (s(o, t, n.dropdown.caseSensitive, n.trim)) return a = "string" == typeof i ? {
                value: i
              } : i, !0;
            }), a || "value" != e || "value" == n.tagTextProp || (a = this.getWhitelistItem(t, n.tagTextProp, i)), a;
          },
          validateTag: function validateTag(t) {
            var e = this.settings,
                i = "value" in t ? "value" : e.tagTextProp,
                s = this.trim(t[i] + "");
            return (t[i] + "").trim() ? e.pattern && e.pattern instanceof RegExp && !e.pattern.test(s) ? this.TEXTS.pattern : !e.duplicates && this.isTagDuplicate(s, this.state.editing) ? this.TEXTS.duplicate : this.isTagBlacklisted(s) || e.enforceWhitelist && !this.isTagWhitelisted(s) ? this.TEXTS.notAllowed : !e.validate || e.validate(t) : this.TEXTS.empty;
          },
          getInvalidTagAttrs: function getInvalidTagAttrs(t, e) {
            return {
              "aria-invalid": !0,
              "class": "".concat(t["class"] || "", " ").concat(this.settings.classNames.tagNotAllowed).trim(),
              title: e
            };
          },
          hasMaxTags: function hasMaxTags() {
            return this.value.length >= this.settings.maxTags && this.TEXTS.exceed;
          },
          setReadonly: function setReadonly(t, e) {
            var i = this.settings;
            document.activeElement.blur(), i[e || "readonly"] = t, this.DOM.scope[(t ? "set" : "remove") + "Attribute"](e || "readonly", !0), "mix" == i.mode && (this.DOM.input.contentEditable = !t);
          },
          setDisabled: function setDisabled(t) {
            this.setReadonly(t, "disabled");
          },
          normalizeTags: function normalizeTags(t) {
            var _this26 = this,
                _ref3;

            var e = this.settings,
                i = e.whitelist,
                s = e.delimiters,
                a = e.mode,
                n = e.tagTextProp;
            e.enforceWhitelist;

            var o = [],
                r = !!i && i[0] instanceof Object,
                l = t instanceof Array,
                d = function d(t) {
              return (t + "").split(s).filter(function (t) {
                return t;
              }).map(function (t) {
                var _ref2;

                return _ref2 = {}, _defineProperty(_ref2, n, _this26.trim(t)), _defineProperty(_ref2, "value", _this26.trim(t)), _ref2;
              });
            };

            if ("number" == typeof t && (t = t.toString()), "string" == typeof t) {
              if (!t.trim()) return [];
              t = d(t);
            } else l && (t = (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.map(function (t) {
              return t.value ? t : d(t);
            }))));

            return r && (t.forEach(function (t) {
              var e = o.map(function (t) {
                return t.value;
              }),
                  i = _this26.dropdown.filterListItems.call(_this26, t[n], {
                exact: !0
              });

              _this26.settings.duplicates || (i = i.filter(function (t) {
                return !e.includes(t.value);
              }));
              var s = i.length > 1 ? _this26.getWhitelistItem(t[n], n, i) : i[0];
              s && s instanceof Object ? o.push(s) : "mix" != a && (null == t.value && (t.value = t[n]), o.push(t));
            }), o.length && (t = o)), t;
          },
          parseMixTags: function parseMixTags(t) {
            var _this27 = this;

            var e = this.settings,
                i = e.mixTagsInterpolator,
                s = e.duplicates,
                a = e.transformTag,
                n = e.enforceWhitelist,
                o = e.maxTags,
                r = e.tagTextProp,
                l = [];
            return t = t.split(i[0]).map(function (t, e) {
              var d,
                  h,
                  g,
                  c = t.split(i[1]),
                  p = c[0],
                  u = l.length == o;

              try {
                if (p == +p) throw Error;
                h = JSON.parse(p);
              } catch (t) {
                h = _this27.normalizeTags(p)[0] || {
                  value: p
                };
              }

              if (a.call(_this27, h), u || !(c.length > 1) || n && !_this27.isTagWhitelisted(h.value) || !s && _this27.isTagDuplicate(h.value)) {
                if (t) return e ? i[0] + t : t;
              } else h[d = h[r] ? r : "value"] = _this27.trim(h[d]), g = _this27.createTagElem(h), l.push(h), g.classList.add(_this27.settings.classNames.tagNoAnimation), c[0] = g.outerHTML, _this27.value.push(h);

              return c.join("");
            }).join(""), this.DOM.input.innerHTML = t, this.DOM.input.appendChild(document.createTextNode("")), this.DOM.input.normalize(), this.getTagElms().forEach(function (t, e) {
              return _this27.tagData(t, l[e]);
            }), this.update({
              withoutChangeEvent: !0
            }), t;
          },
          replaceTextWithNode: function replaceTextWithNode(t, e) {
            if (this.state.tag || e) {
              e = e || this.state.tag.prefix + this.state.tag.value;
              var i,
                  s,
                  a = window.getSelection(),
                  n = a.anchorNode,
                  o = this.state.tag.delimiters ? this.state.tag.delimiters.length : 0;
              return n.splitText(a.anchorOffset - o), -1 == (i = n.nodeValue.lastIndexOf(e)) ? !0 : (s = n.splitText(i), t && n.parentNode.replaceChild(t, s), !0);
            }
          },
          selectTag: function selectTag(t, e) {
            var i = this.settings;

            if (!i.enforceWhitelist || this.isTagWhitelisted(e.value)) {
              this.input.set.call(this, e[i.tagTextProp] || e.value, !0), this.state.actions.selectOption && setTimeout(this.setRangeAtStartEnd.bind(this));
              var s = this.getLastTag();
              return s ? this.replaceTag(s, e) : this.appendTag(t), i.enforceWhitelist && this.DOM.input.removeAttribute("contenteditable"), this.value[0] = e, this.update(), this.trigger("add", {
                tag: t,
                data: e
              }), [t];
            }
          },
          addEmptyTag: function addEmptyTag(t) {
            var e = d({
              value: ""
            }, t || {}),
                i = this.createTagElem(e);
            this.tagData(i, e), this.appendTag(i), this.editTag(i, {
              skipValidation: !0
            });
          },
          addTags: function addTags(t, e, i) {
            var _this28 = this;

            var s = [],
                a = this.settings,
                n = document.createDocumentFragment();
            return i = i || a.skipInvalid, t && 0 != t.length ? (t = this.normalizeTags(t), "mix" == a.mode ? this.addMixTags(t) : ("select" == a.mode && (e = !1), this.DOM.input.removeAttribute("style"), t.forEach(function (t) {
              var e,
                  o = {},
                  r = Object.assign({}, t, {
                value: t.value + ""
              });

              if (t = Object.assign({}, r), a.transformTag.call(_this28, t), t.__isValid = _this28.hasMaxTags() || _this28.validateTag(t), !0 !== t.__isValid) {
                if (i) return;
                d(o, _this28.getInvalidTagAttrs(t, t.__isValid), {
                  __preInvalidData: r
                }), t.__isValid == _this28.TEXTS.duplicate && _this28.flashTag(_this28.getTagElmByValue(t.value));
              }

              if ("readonly" in t && (t.readonly ? o["aria-readonly"] = !0 : delete t.readonly), e = _this28.createTagElem(t, o), s.push(e), "select" == a.mode) return _this28.selectTag(e, t);
              n.appendChild(e), t.__isValid && !0 === t.__isValid ? (_this28.value.push(t), _this28.trigger("add", {
                tag: e,
                index: _this28.value.length - 1,
                data: t
              })) : (_this28.trigger("invalid", {
                data: t,
                index: _this28.value.length,
                tag: e,
                message: t.__isValid
              }), a.keepInvalidTags || setTimeout(function () {
                return _this28.removeTags(e, !0);
              }, 1e3)), _this28.dropdown.position();
            }), this.appendTag(n), this.update(), t.length && e && this.input.set.call(this), this.dropdown.refilter(), s)) : ("select" == a.mode && this.removeAllTags(), s);
          },
          addMixTags: function addMixTags(t) {
            var _this29 = this;

            if ((t = this.normalizeTags(t))[0].prefix || this.state.tag) return this.prefixedTextToTag(t[0]);
            "string" == typeof t && (t = [{
              value: t
            }]);
            var e = !!this.state.selection,
                i = document.createDocumentFragment();
            return t.forEach(function (t) {
              var e = _this29.createTagElem(t);

              i.appendChild(e), _this29.insertAfterTag(e);
            }), e ? this.injectAtCaret(i) : (this.DOM.input.focus(), (e = this.setStateSelection()).range.setStart(this.DOM.input, e.range.endOffset), e.range.setEnd(this.DOM.input, e.range.endOffset), this.DOM.input.appendChild(i), this.updateValueByDOMTags(), this.update()), i;
          },
          prefixedTextToTag: function prefixedTextToTag(t) {
            var _this30 = this;

            var e,
                i = this.settings,
                s = this.state.tag.delimiters;

            if (i.transformTag.call(this, t), t.prefix = t.prefix || this.state.tag ? this.state.tag.prefix : (i.pattern.source || i.pattern)[0], e = this.createTagElem(t), this.replaceTextWithNode(e) || this.DOM.input.appendChild(e), setTimeout(function () {
              return e.classList.add(_this30.settings.classNames.tagNoAnimation);
            }, 300), this.value.push(t), this.update(), !s) {
              var a = this.insertAfterTag(e) || e;
              this.placeCaretAfterNode(a);
            }

            return this.state.tag = null, this.trigger("add", d({}, {
              tag: e
            }, {
              data: t
            })), e;
          },
          appendTag: function appendTag(t) {
            var e = this.DOM,
                i = e.scope.lastElementChild;
            i === e.input ? e.scope.insertBefore(t, i) : e.scope.appendChild(t);
          },
          createTagElem: function createTagElem(t, i) {
            t.__tagId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (t) {
              return (t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16);
            });
            var s,
                a = d({}, t, e({
              value: r(t.value + "")
            }, i));
            return function (t) {
              for (var e, i = document.createNodeIterator(t, NodeFilter.SHOW_TEXT, null, !1); e = i.nextNode();) {
                e.textContent.trim() || e.parentNode.removeChild(e);
              }
            }(s = this.parseTemplate("tag", [a])), this.tagData(s, t), s;
          },
          reCheckInvalidTags: function reCheckInvalidTags() {
            var _this31 = this;

            var t = this.settings;
            this.getTagElms(t.classNames.tagNotAllowed).forEach(function (t, e) {
              var i = _this31.tagData(t),
                  s = _this31.hasMaxTags(),
                  a = _this31.validateTag(i);

              if (!0 === a && !s) return i = i.__preInvalidData ? i.__preInvalidData : {
                value: i.value
              }, _this31.replaceTag(t, i);
              t.title = s || a;
            });
          },
          removeTags: function removeTags(t, e, i) {
            var _this32 = this;

            var s;
            t = t && t instanceof HTMLElement ? [t] : t instanceof Array ? t : t ? [t] : [this.getLastTag()], s = t.reduce(function (t, e) {
              e && "string" == typeof e && (e = _this32.getTagElmByValue(e));

              var i = _this32.tagData(e);

              return e && i && !i.readonly && t.push({
                node: e,
                idx: _this32.getTagIdx(i),
                data: _this32.tagData(e, {
                  __removed: !0
                })
              }), t;
            }, []), i = "number" == typeof i ? i : this.CSSVars.tagHideTransition, "select" == this.settings.mode && (i = 0, this.input.set.call(this)), 1 == s.length && s[0].node.classList.contains(this.settings.classNames.tagNotAllowed) && (e = !0), s.length && this.settings.hooks.beforeRemoveTag(s, {
              tagify: this
            }).then(function () {
              function t(t) {
                t.node.parentNode && (t.node.parentNode.removeChild(t.node), e ? this.settings.keepInvalidTags && this.trigger("remove", {
                  tag: t.node,
                  index: t.idx
                }) : (this.trigger("remove", {
                  tag: t.node,
                  index: t.idx,
                  data: t.data
                }), this.dropdown.refilter(), this.dropdown.position(), this.DOM.input.normalize(), this.settings.keepInvalidTags && this.reCheckInvalidTags()));
              }

              i && i > 10 && 1 == s.length ? function (e) {
                e.node.style.width = parseFloat(window.getComputedStyle(e.node).width) + "px", document.body.clientTop, e.node.classList.add(this.settings.classNames.tagHide), setTimeout(t.bind(this), i, e);
              }.call(_this32, s[0]) : s.forEach(t.bind(_this32)), e || (_this32.removeTagsFromValue(s.map(function (t) {
                return t.node;
              })), _this32.update(), "select" == _this32.settings.mode && _this32.DOM.input.setAttribute("contenteditable", !0));
            })["catch"](function (t) {});
          },
          removeTagsFromDOM: function removeTagsFromDOM() {
            [].slice.call(this.getTagElms()).forEach(function (t) {
              return t.parentNode.removeChild(t);
            });
          },
          removeTagsFromValue: function removeTagsFromValue(t) {
            var _this33 = this;

            (t = Array.isArray(t) ? t : [t]).forEach(function (t) {
              var e = _this33.tagData(t),
                  i = _this33.getTagIdx(e);

              i > -1 && _this33.value.splice(i, 1);
            });
          },
          removeAllTags: function removeAllTags(t) {
            t = t || {}, this.value = [], "mix" == this.settings.mode ? this.DOM.input.innerHTML = "" : this.removeTagsFromDOM(), this.dropdown.position(), "select" == this.settings.mode && this.input.set.call(this), this.update(t);
          },
          postUpdate: function postUpdate() {
            var t = this.settings.classNames,
                e = "mix" == this.settings.mode ? this.settings.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value.trim() : this.value.length + this.input.raw.call(this).length;
            this.toggleClass(t.hasMaxTags, this.value.length >= this.settings.maxTags), this.toggleClass(t.hasNoTags, !this.value.length), this.toggleClass(t.empty, !e);
          },
          setOriginalInputValue: function setOriginalInputValue(t) {
            var e = this.DOM.originalInput;
            this.settings.mixMode.integrated || (e.value = t, e.tagifyValue = e.value, this.setPersistedData(t, "value"));
          },
          update: function update(t) {
            var e = this.getInputValue();
            this.setOriginalInputValue(e), this.postUpdate(), !(t || {}).withoutChangeEvent && this.state.loadedOriginalValues && this.triggerChangeEvent();
          },
          getInputValue: function getInputValue() {
            var t = this.getCleanValue();
            return "mix" == this.settings.mode ? this.getMixedTagsAsString(t) : t.length ? this.settings.originalInputValueFormat ? this.settings.originalInputValueFormat(t) : JSON.stringify(t) : "";
          },
          getCleanValue: function getCleanValue(t) {
            return e = t || this.value, i = this.dataProps, e && Array.isArray(e) && e.map(function (t) {
              return a(t, i);
            });
            var e, i;
          },
          getMixedTagsAsString: function getMixedTagsAsString() {
            var t = "",
                e = this,
                i = this.settings.mixTagsInterpolator;
            return function s(n) {
              n.childNodes.forEach(function (n) {
                if (1 == n.nodeType) {
                  var _o = e.tagData(n);

                  if ("BR" == n.tagName && (t += "\r\n"), "DIV" == n.tagName || "P" == n.tagName) t += "\r\n", s(n);else if (c.call(e, n) && _o) {
                    if (_o.__removed) return;
                    t += i[0] + JSON.stringify(a(_o, e.dataProps)) + i[1];
                  }
                } else t += n.textContent;
              });
            }(this.DOM.input), t;
          }
        }, y.prototype.removeTag = y.prototype.removeTags, y;
      });
      /***/
    },

    /***/
    "./resources/js/app.js":
    /*!*****************************!*\
      !*** ./resources/js/app.js ***!
      \*****************************/

    /***/
    function resourcesJsAppJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var bs_stepper_dist_css_bs_stepper_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! bs-stepper/dist/css/bs-stepper.min.css */
      "./node_modules/bs-stepper/dist/css/bs-stepper.min.css");
      /* harmony import */


      var _yaireo_tagify_dist_tagify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @yaireo/tagify/dist/tagify.css */
      "./node_modules/@yaireo/tagify/dist/tagify.css");
      /* harmony import */


      var bs_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bs-stepper */
      "./node_modules/bs-stepper/dist/js/bs-stepper.js");
      /* harmony import */


      var bs_stepper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs_stepper__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _yaireo_tagify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @yaireo/tagify */
      "./node_modules/@yaireo/tagify/dist/tagify.min.js");
      /* harmony import */


      var _yaireo_tagify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yaireo_tagify__WEBPACK_IMPORTED_MODULE_3__); // Function Helper


      var initAddPaper = function initAddPaper() {
        console.log("initAddPaper");
        var stepper = new (bs_stepper__WEBPACK_IMPORTED_MODULE_2___default())($(".bs-stepper")[0]);
        var pageStepper = 1;
        $(".stepper-next").on("click", function () {
          pageStepper += 1;
          stepper.to(pageStepper);
        });
        $(".stepper-prev").on("click", function () {
          pageStepper -= 1;
          stepper.to(pageStepper);
        });
        new (_yaireo_tagify__WEBPACK_IMPORTED_MODULE_3___default())(document.querySelector("#keywords"), {
          maxTags: 4
        });
      }; // window.addEventListener("popstate", function (event) {
      //     window.location.reload();
      // });
      // Emit handler


      document.addEventListener("livewire:load", function () {
        console.log("livewire:load");
        Livewire.on("action", function (actions) {
          if (actions === "show-add-paper") {
            window.history.pushState(null, null, "/author/submission/add");
            initAddPaper();
          }
        });
      }); // Pathname handler

      var pathName = window.location.pathname;

      if (pathName === "/author/submission/add") {
        initAddPaper();
      }
      /***/

    },

    /***/
    "./node_modules/bs-stepper/dist/js/bs-stepper.js":
    /*!*******************************************************!*\
      !*** ./node_modules/bs-stepper/dist/js/bs-stepper.js ***!
      \*******************************************************/

    /***/
    function node_modulesBsStepperDistJsBsStepperJs(module) {
      /*!
       * bsStepper v1.7.0 (https://github.com/Johann-S/bs-stepper)
       * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
       * Licensed under MIT (https://github.com/Johann-S/bs-stepper/blob/master/LICENSE)
       */
      (function (global, factory) {
        true ? module.exports = factory() : 0;
      })(this, function () {
        'use strict';

        function _extends() {
          _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];

              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }

            return target;
          };

          return _extends.apply(this, arguments);
        }

        var matches = window.Element.prototype.matches;

        var closest = function closest(element, selector) {
          return element.closest(selector);
        };

        var WinEvent = function WinEvent(inType, params) {
          return new window.Event(inType, params);
        };

        var createCustomEvent = function createCustomEvent(eventName, params) {
          var cEvent = new window.CustomEvent(eventName, params);
          return cEvent;
        };
        /* istanbul ignore next */


        function polyfill() {
          if (!window.Element.prototype.matches) {
            matches = window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
          }

          if (!window.Element.prototype.closest) {
            closest = function closest(element, selector) {
              if (!document.documentElement.contains(element)) {
                return null;
              }

              do {
                if (matches.call(element, selector)) {
                  return element;
                }

                element = element.parentElement || element.parentNode;
              } while (element !== null && element.nodeType === 1);

              return null;
            };
          }

          if (!window.Event || typeof window.Event !== 'function') {
            WinEvent = function WinEvent(inType, params) {
              params = params || {};
              var e = document.createEvent('Event');
              e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
              return e;
            };
          }

          if (typeof window.CustomEvent !== 'function') {
            var originPreventDefault = window.Event.prototype.preventDefault;

            createCustomEvent = function createCustomEvent(eventName, params) {
              var evt = document.createEvent('CustomEvent');
              params = params || {
                bubbles: false,
                cancelable: false,
                detail: null
              };
              evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);

              evt.preventDefault = function () {
                if (!this.cancelable) {
                  return;
                }

                originPreventDefault.call(this);
                Object.defineProperty(this, 'defaultPrevented', {
                  get: function get() {
                    return true;
                  }
                });
              };

              return evt;
            };
          }
        }

        polyfill();
        var MILLISECONDS_MULTIPLIER = 1000;
        var ClassName = {
          ACTIVE: 'active',
          LINEAR: 'linear',
          BLOCK: 'dstepper-block',
          NONE: 'dstepper-none',
          FADE: 'fade',
          VERTICAL: 'vertical'
        };
        var transitionEndEvent = 'transitionend';
        var customProperty = 'bsStepper';

        var show = function show(stepperNode, indexStep, options, done) {
          var stepper = stepperNode[customProperty];

          if (stepper._steps[indexStep].classList.contains(ClassName.ACTIVE) || stepper._stepsContents[indexStep].classList.contains(ClassName.ACTIVE)) {
            return;
          }

          var showEvent = createCustomEvent('show.bs-stepper', {
            cancelable: true,
            detail: {
              from: stepper._currentIndex,
              to: indexStep,
              indexStep: indexStep
            }
          });
          stepperNode.dispatchEvent(showEvent);

          var activeStep = stepper._steps.filter(function (step) {
            return step.classList.contains(ClassName.ACTIVE);
          });

          var activeContent = stepper._stepsContents.filter(function (content) {
            return content.classList.contains(ClassName.ACTIVE);
          });

          if (showEvent.defaultPrevented) {
            return;
          }

          if (activeStep.length) {
            activeStep[0].classList.remove(ClassName.ACTIVE);
          }

          if (activeContent.length) {
            activeContent[0].classList.remove(ClassName.ACTIVE);

            if (!stepperNode.classList.contains(ClassName.VERTICAL) && !stepper.options.animation) {
              activeContent[0].classList.remove(ClassName.BLOCK);
            }
          }

          showStep(stepperNode, stepper._steps[indexStep], stepper._steps, options);
          showContent(stepperNode, stepper._stepsContents[indexStep], stepper._stepsContents, activeContent, done);
        };

        var showStep = function showStep(stepperNode, step, stepList, options) {
          stepList.forEach(function (step) {
            var trigger = step.querySelector(options.selectors.trigger);
            trigger.setAttribute('aria-selected', 'false'); // if stepper is in linear mode, set disabled attribute on the trigger

            if (stepperNode.classList.contains(ClassName.LINEAR)) {
              trigger.setAttribute('disabled', 'disabled');
            }
          });
          step.classList.add(ClassName.ACTIVE);
          var currentTrigger = step.querySelector(options.selectors.trigger);
          currentTrigger.setAttribute('aria-selected', 'true'); // if stepper is in linear mode, remove disabled attribute on current

          if (stepperNode.classList.contains(ClassName.LINEAR)) {
            currentTrigger.removeAttribute('disabled');
          }
        };

        var showContent = function showContent(stepperNode, content, contentList, activeContent, done) {
          var stepper = stepperNode[customProperty];
          var toIndex = contentList.indexOf(content);
          var shownEvent = createCustomEvent('shown.bs-stepper', {
            cancelable: true,
            detail: {
              from: stepper._currentIndex,
              to: toIndex,
              indexStep: toIndex
            }
          });

          function complete() {
            content.classList.add(ClassName.BLOCK);
            content.removeEventListener(transitionEndEvent, complete);
            stepperNode.dispatchEvent(shownEvent);
            done();
          }

          if (content.classList.contains(ClassName.FADE)) {
            content.classList.remove(ClassName.NONE);
            var duration = getTransitionDurationFromElement(content);
            content.addEventListener(transitionEndEvent, complete);

            if (activeContent.length) {
              activeContent[0].classList.add(ClassName.NONE);
            }

            content.classList.add(ClassName.ACTIVE);
            emulateTransitionEnd(content, duration);
          } else {
            content.classList.add(ClassName.ACTIVE);
            content.classList.add(ClassName.BLOCK);
            stepperNode.dispatchEvent(shownEvent);
            done();
          }
        };

        var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
          if (!element) {
            return 0;
          } // Get transition-duration of the element


          var transitionDuration = window.getComputedStyle(element).transitionDuration;
          var floatTransitionDuration = parseFloat(transitionDuration); // Return 0 if element or transition duration is not found

          if (!floatTransitionDuration) {
            return 0;
          } // If multiple durations are defined, take the first


          transitionDuration = transitionDuration.split(',')[0];
          return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
        };

        var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
          var called = false;
          var durationPadding = 5;
          var emulatedDuration = duration + durationPadding;

          function listener() {
            called = true;
            element.removeEventListener(transitionEndEvent, listener);
          }

          element.addEventListener(transitionEndEvent, listener);
          window.setTimeout(function () {
            if (!called) {
              element.dispatchEvent(WinEvent(transitionEndEvent));
            }

            element.removeEventListener(transitionEndEvent, listener);
          }, emulatedDuration);
        };

        var detectAnimation = function detectAnimation(contentList, options) {
          if (options.animation) {
            contentList.forEach(function (content) {
              content.classList.add(ClassName.FADE);
              content.classList.add(ClassName.NONE);
            });
          }
        };

        var buildClickStepLinearListener = function buildClickStepLinearListener() {
          return function clickStepLinearListener(event) {
            event.preventDefault();
          };
        };

        var buildClickStepNonLinearListener = function buildClickStepNonLinearListener(options) {
          return function clickStepNonLinearListener(event) {
            event.preventDefault();
            var step = closest(event.target, options.selectors.steps);
            var stepperNode = closest(step, options.selectors.stepper);
            var stepper = stepperNode[customProperty];

            var stepIndex = stepper._steps.indexOf(step);

            show(stepperNode, stepIndex, options, function () {
              stepper._currentIndex = stepIndex;
            });
          };
        };

        var DEFAULT_OPTIONS = {
          linear: true,
          animation: false,
          selectors: {
            steps: '.step',
            trigger: '.step-trigger',
            stepper: '.bs-stepper'
          }
        };

        var Stepper = /*#__PURE__*/function () {
          function Stepper(element, _options) {
            var _this = this;

            if (_options === void 0) {
              _options = {};
            }

            this._element = element;
            this._currentIndex = 0;
            this._stepsContents = [];
            this.options = _extends({}, DEFAULT_OPTIONS, {}, _options);
            this.options.selectors = _extends({}, DEFAULT_OPTIONS.selectors, {}, this.options.selectors);

            if (this.options.linear) {
              this._element.classList.add(ClassName.LINEAR);
            }

            this._steps = [].slice.call(this._element.querySelectorAll(this.options.selectors.steps));

            this._steps.filter(function (step) {
              return step.hasAttribute('data-target');
            }).forEach(function (step) {
              _this._stepsContents.push(_this._element.querySelector(step.getAttribute('data-target')));
            });

            detectAnimation(this._stepsContents, this.options);

            this._setLinkListeners();

            Object.defineProperty(this._element, customProperty, {
              value: this,
              writable: true
            });

            if (this._steps.length) {
              show(this._element, this._currentIndex, this.options, function () {});
            }
          } // Private


          var _proto = Stepper.prototype;

          _proto._setLinkListeners = function _setLinkListeners() {
            var _this2 = this;

            this._steps.forEach(function (step) {
              var trigger = step.querySelector(_this2.options.selectors.trigger);

              if (_this2.options.linear) {
                _this2._clickStepLinearListener = buildClickStepLinearListener(_this2.options);
                trigger.addEventListener('click', _this2._clickStepLinearListener);
              } else {
                _this2._clickStepNonLinearListener = buildClickStepNonLinearListener(_this2.options);
                trigger.addEventListener('click', _this2._clickStepNonLinearListener);
              }
            });
          } // Public
          ;

          _proto.next = function next() {
            var _this3 = this;

            var nextStep = this._currentIndex + 1 <= this._steps.length - 1 ? this._currentIndex + 1 : this._steps.length - 1;
            show(this._element, nextStep, this.options, function () {
              _this3._currentIndex = nextStep;
            });
          };

          _proto.previous = function previous() {
            var _this4 = this;

            var previousStep = this._currentIndex - 1 >= 0 ? this._currentIndex - 1 : 0;
            show(this._element, previousStep, this.options, function () {
              _this4._currentIndex = previousStep;
            });
          };

          _proto.to = function to(stepNumber) {
            var _this5 = this;

            var tempIndex = stepNumber - 1;
            var nextStep = tempIndex >= 0 && tempIndex < this._steps.length ? tempIndex : 0;
            show(this._element, nextStep, this.options, function () {
              _this5._currentIndex = nextStep;
            });
          };

          _proto.reset = function reset() {
            var _this6 = this;

            show(this._element, 0, this.options, function () {
              _this6._currentIndex = 0;
            });
          };

          _proto.destroy = function destroy() {
            var _this7 = this;

            this._steps.forEach(function (step) {
              var trigger = step.querySelector(_this7.options.selectors.trigger);

              if (_this7.options.linear) {
                trigger.removeEventListener('click', _this7._clickStepLinearListener);
              } else {
                trigger.removeEventListener('click', _this7._clickStepNonLinearListener);
              }
            });

            this._element[customProperty] = undefined;
            this._element = undefined;
            this._currentIndex = undefined;
            this._steps = undefined;
            this._stepsContents = undefined;
            this._clickStepLinearListener = undefined;
            this._clickStepNonLinearListener = undefined;
          };

          return Stepper;
        }();

        return Stepper;
      });
      /***/

    },

    /***/
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/@yaireo/tagify/dist/tagify.css":
    /*!***************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/@yaireo/tagify/dist/tagify.css ***!
      \***************************************************************************************************************************************************************************************************************/

    /***/
    function node_modulesCssLoaderDistCjsJsRuleSet1Rules6OneOf1Use1Node_modulesPostcssLoaderDistCjsJsRuleSet1Rules6OneOf1Use2Node_modulesYaireoTagifyDistTagifyCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../css-loader/dist/runtime/api.js */
      "./node_modules/css-loader/dist/runtime/api.js");
      /* harmony import */


      var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__); // Imports


      var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function (i) {
        return i[1];
      }); // Module


      ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";:root{--tagify-dd-color-primary:rgb(53,149,246);--tagify-dd-bg-color:white}.tagify{--tags-disabled-bg:#F1F1F1;--tags-border-color:#DDD;--tags-hover-border-color:#CCC;--tags-focus-border-color:#3595f6;--tag-bg:#E5E5E5;--tag-hover:#D3E2E2;--tag-text-color:black;--tag-text-color--edit:black;--tag-pad:0.3em 0.5em;--tag-inset-shadow-size:1.1em;--tag-invalid-color:#D39494;--tag-invalid-bg:rgba(211, 148, 148, 0.5);--tag-remove-bg:rgba(211, 148, 148, 0.3);--tag-remove-btn-color:black;--tag-remove-btn-bg:none;--tag-remove-btn-bg--hover:#c77777;--input-color:inherit;--tag--min-width:1ch;--tag--max-width:auto;--tag-hide-transition:0.3s;--placeholder-color:rgba(0, 0, 0, 0.4);--placeholder-color-focus:rgba(0, 0, 0, 0.25);--loader-size:.8em;display:flex;align-items:flex-start;flex-wrap:wrap;border:1px solid #ddd;border:1px solid var(--tags-border-color);padding:0;line-height:normal;cursor:text;outline:0;position:relative;box-sizing:border-box;transition:.1s}@keyframes tags--bump{30%{transform:scale(1.2)}}@keyframes rotateLoader{to{transform:rotate(1turn)}}.tagify:hover{border-color:#ccc;border-color:var(--tags-hover-border-color)}.tagify.tagify--focus{transition:0s;border-color:#3595f6;border-color:var(--tags-focus-border-color)}.tagify[disabled]{background:var(--tags-disabled-bg);filter:saturate(0);opacity:.5;pointer-events:none}.tagify[readonly].tagify--select{pointer-events:none}.tagify[readonly]:not(.tagify--mix):not(.tagify--select){cursor:default}.tagify[readonly]:not(.tagify--mix):not(.tagify--select)>.tagify__input{visibility:hidden;width:0;margin:5px 0}.tagify[readonly]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div{padding:.3em .5em;padding:var(--tag-pad)}.tagify[readonly]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div::before{background:linear-gradient(45deg,var(--tag-bg) 25%,transparent 25%,transparent 50%,var(--tag-bg) 50%,var(--tag-bg) 75%,transparent 75%,transparent) 0/5px 5px;box-shadow:none;filter:brightness(.95)}.tagify[readonly] .tagify__tag__removeBtn{display:none}.tagify--loading .tagify__input>br:last-child{display:none}.tagify--loading .tagify__input::before{content:none}.tagify--loading .tagify__input::after{content:\"\";vertical-align:middle;opacity:1;width:.7em;height:.7em;width:var(--loader-size);height:var(--loader-size);border:3px solid;border-color:#eee #bbb #888 transparent;border-radius:50%;animation:rotateLoader .4s infinite linear;content:\"\"!important;margin:-2px 0 -2px .5em}.tagify--loading .tagify__input:empty::after{margin-left:0}.tagify+input,.tagify+textarea{position:absolute!important;left:-9999em!important;transform:scale(0)!important}.tagify__tag{display:inline-flex;align-items:center;margin:5px 0 5px 5px;position:relative;z-index:1;outline:0;cursor:default;transition:.13s ease-out}.tagify__tag>div{vertical-align:top;box-sizing:border-box;max-width:100%;padding:.3em .5em;padding:var(--tag-pad,.3em .5em);color:#000;color:var(--tag-text-color,#000);line-height:inherit;border-radius:3px;white-space:nowrap;transition:.13s ease-out}.tagify__tag>div>*{white-space:pre-wrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;vertical-align:top;min-width:1ch;max-width:auto;min-width:var(--tag--min-width,1ch);max-width:var(--tag--max-width,auto);transition:.8s ease,.1s color}.tagify__tag>div>[contenteditable]{outline:0;-webkit-user-select:text;user-select:text;cursor:text;margin:-2px;padding:2px;max-width:350px}.tagify__tag>div::before{content:\"\";position:absolute;border-radius:inherit;left:0;top:0;right:0;bottom:0;z-index:-1;pointer-events:none;transition:120ms ease;animation:tags--bump .3s ease-out 1;box-shadow:0 0 0 1.1em #e5e5e5 inset;box-shadow:0 0 0 var(--tag-inset-shadow-size,1.1em) var(--tag-bg,#e5e5e5) inset}.tagify__tag:focus div::before,.tagify__tag:hover:not([readonly]) div::before{top:-2px;right:-2px;bottom:-2px;left:-2px;box-shadow:0 0 0 1.1em #d3e2e2 inset;box-shadow:0 0 0 var(--tag-inset-shadow-size,1.1em) var(--tag-hover,#d3e2e2) inset}.tagify__tag--loading{pointer-events:none}.tagify__tag--loading .tagify__tag__removeBtn{display:none}.tagify__tag--loading::after{--loader-size:.4em;content:\"\";vertical-align:middle;opacity:1;width:.7em;height:.7em;width:var(--loader-size);height:var(--loader-size);border:3px solid;border-color:#eee #bbb #888 transparent;border-radius:50%;animation:rotateLoader .4s infinite linear;margin:0 .5em 0 -.1em}.tagify__tag--flash div::before{animation:none}.tagify__tag--hide{width:0!important;padding-left:0;padding-right:0;margin-left:0;margin-right:0;opacity:0;transform:scale(0);transition:.3s;transition:var(--tag-hide-transition,.3s);pointer-events:none}.tagify__tag--hide>div>*{white-space:nowrap}.tagify__tag.tagify--noAnim>div::before{animation:none}.tagify__tag.tagify--notAllowed:not(.tagify__tag--editable) div>span{opacity:.5}.tagify__tag.tagify--notAllowed:not(.tagify__tag--editable) div::before{box-shadow:0 0 0 1.1em rgba(211,148,148,.5) inset!important;box-shadow:0 0 0 var(--tag-inset-shadow-size,1.1em) var(--tag-invalid-bg,rgba(211,148,148,.5)) inset!important;transition:.2s}.tagify__tag[readonly] .tagify__tag__removeBtn{display:none}.tagify__tag[readonly]>div::before{background:linear-gradient(45deg,var(--tag-bg) 25%,transparent 25%,transparent 50%,var(--tag-bg) 50%,var(--tag-bg) 75%,transparent 75%,transparent) 0/5px 5px;box-shadow:none;filter:brightness(.95)}.tagify__tag--editable>div{color:#000;color:var(--tag-text-color--edit,#000)}.tagify__tag--editable>div::before{box-shadow:0 0 0 2px #d3e2e2 inset!important;box-shadow:0 0 0 2px var(--tag-hover,#d3e2e2) inset!important}.tagify__tag--editable>.tagify__tag__removeBtn{pointer-events:none}.tagify__tag--editable>.tagify__tag__removeBtn::after{opacity:0;transform:translateX(100%) translateX(5px)}.tagify__tag--editable.tagify--invalid>div::before{box-shadow:0 0 0 2px #d39494 inset!important;box-shadow:0 0 0 2px var(--tag-invalid-color,#d39494) inset!important}.tagify__tag__removeBtn{order:5;display:inline-flex;align-items:center;justify-content:center;border-radius:50px;cursor:pointer;font:14px/1 Arial;background:0 0;background:var(--tag-remove-btn-bg,none);color:#000;color:var(--tag-remove-btn-color,#000);width:14px;height:14px;margin-right:4.6666666667px;margin-left:auto;overflow:hidden;transition:.2s ease-out}.tagify__tag__removeBtn::after{content:\"×\";transition:.3s,color 0s}.tagify__tag__removeBtn:hover{color:#fff;background:#c77777;background:var(--tag-remove-btn-bg--hover,#c77777)}.tagify__tag__removeBtn:hover+div>span{opacity:.5}.tagify__tag__removeBtn:hover+div::before{box-shadow:0 0 0 1.1em rgba(211,148,148,.3) inset!important;box-shadow:0 0 0 var(--tag-inset-shadow-size,1.1em) var(--tag-remove-bg,rgba(211,148,148,.3)) inset!important;transition:box-shadow .2s}.tagify:not(.tagify--mix) .tagify__input br{display:none}.tagify:not(.tagify--mix) .tagify__input *{display:inline;white-space:nowrap}.tagify__input{flex-grow:1;display:inline-block;min-width:110px;margin:5px;padding:.3em .5em;padding:var(--tag-pad,.3em .5em);line-height:inherit;position:relative;white-space:pre-wrap;color:inherit;color:var(--input-color,inherit);box-sizing:inherit}.tagify__input:focus{outline:0}.tagify__input:focus::before{transition:.2s ease-out;opacity:0;transform:translatex(6px)}@supports (-ms-ime-align:auto){.tagify__input:focus::before{display:none}}.tagify__input:focus:empty::before{transition:.2s ease-out;opacity:1;transform:none;color:rgba(0,0,0,.25);color:var(--placeholder-color-focus)}@-moz-document url-prefix(){.tagify__input:focus:empty::after{display:none}}.tagify__input::before{content:attr(data-placeholder);height:1em;line-height:1em;margin:auto 0;z-index:1;color:rgba(0,0,0,.4);color:var(--placeholder-color);white-space:nowrap;pointer-events:none;opacity:0;position:absolute}.tagify__input::after{content:attr(data-suggest);display:inline-block;white-space:pre;color:#000;opacity:.3;pointer-events:none;max-width:100px}.tagify__input .tagify__tag{margin:0 1px}.tagify__input .tagify__tag>div{padding-top:0;padding-bottom:0}.tagify--mix{display:block}.tagify--mix .tagify__input{padding:5px;margin:0;width:100%;height:100%;line-height:1.5;display:block}.tagify--mix .tagify__input::before{height:auto;display:none;line-height:inherit}.tagify--mix .tagify__input::after{content:none}.tagify--select::after{content:\">\";opacity:.5;position:absolute;top:50%;right:0;bottom:0;font:16px monospace;line-height:8px;height:8px;pointer-events:none;transform:translate(-150%,-50%) scaleX(1.2) rotate(90deg);transition:.2s ease-in-out}.tagify--select[aria-expanded=true]::after{transform:translate(-150%,-50%) rotate(270deg) scaleY(1.2)}.tagify--select .tagify__tag{position:absolute;top:0;right:1.8em;bottom:0}.tagify--select .tagify__tag div{display:none}.tagify--select .tagify__input{width:100%}.tagify--empty .tagify__input::before{transition:.2s ease-out;opacity:1;transform:none;display:inline-block;width:auto}.tagify--mix .tagify--empty .tagify__input::before{display:inline-block}.tagify--invalid{--tags-border-color:#D39494}.tagify__dropdown{position:absolute;z-index:9999;transform:translateY(1px);overflow:hidden}.tagify__dropdown[placement=top]{margin-top:0;transform:translateY(-100%)}.tagify__dropdown[placement=top] .tagify__dropdown__wrapper{border-top-width:1.1px;border-bottom-width:0}.tagify__dropdown[position=text]{box-shadow:0 0 0 3px rgba(var(--tagify-dd-color-primary),.1);font-size:.9em}.tagify__dropdown[position=text] .tagify__dropdown__wrapper{border-width:1px}.tagify__dropdown__wrapper{max-height:300px;overflow:auto;background:#fff;background:var(--tagify-dd-bg-color);border:1px solid #3595f6;border-color:var(--tagify-dd-color-primary);border-bottom-width:1.33px;border-top-width:0;box-shadow:0 2px 4px -2px rgba(0,0,0,.2);transition:.25s cubic-bezier(0,1,.5,1)}.tagify__dropdown--initial .tagify__dropdown__wrapper{max-height:20px;transform:translateY(-1em)}.tagify__dropdown--initial[placement=top] .tagify__dropdown__wrapper{transform:translateY(2em)}.tagify__dropdown__item{box-sizing:inherit;padding:.3em .5em;margin:1px;cursor:pointer;border-radius:2px;position:relative;outline:0}.tagify__dropdown__item--active{background:#3595f6;background:var(--tagify-dd-color-primary);color:#fff}.tagify__dropdown__item:active{filter:brightness(105%)}", ""]); // Exports

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      /***/
    },

    /***/
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/bs-stepper/dist/css/bs-stepper.min.css":
    /*!***********************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/bs-stepper/dist/css/bs-stepper.min.css ***!
      \***********************************************************************************************************************************************************************************************************************/

    /***/
    function node_modulesCssLoaderDistCjsJsRuleSet1Rules6OneOf1Use1Node_modulesPostcssLoaderDistCjsJsRuleSet1Rules6OneOf1Use2Node_modulesBsStepperDistCssBsStepperMinCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../css-loader/dist/runtime/api.js */
      "./node_modules/css-loader/dist/runtime/api.js");
      /* harmony import */


      var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__); // Imports


      var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function (i) {
        return i[1];
      }); // Module


      ___CSS_LOADER_EXPORT___.push([module.id, "/*!\r\n * bsStepper v1.7.0 (https://github.com/Johann-S/bs-stepper)\r\n * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>\r\n * Licensed under MIT (https://github.com/Johann-S/bs-stepper/blob/master/LICENSE)\r\n */.bs-stepper .step-trigger{display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:20px;font-size:1rem;font-weight:700;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:none;border-radius:.25rem;transition:background-color .15s ease-out,color .15s ease-out}.bs-stepper .step-trigger:not(:disabled):not(.disabled){cursor:pointer}.bs-stepper .step-trigger.disabled,.bs-stepper .step-trigger:disabled{pointer-events:none;opacity:.65}.bs-stepper .step-trigger:focus{color:#007bff;outline:0}.bs-stepper .step-trigger:hover{text-decoration:none;background-color:rgba(0,0,0,.06)}@media (max-width:520px){.bs-stepper .step-trigger{flex-direction:column;padding:10px}}.bs-stepper-label{display:inline-block;margin:.25rem}.bs-stepper-header{display:flex;align-items:center}@media (max-width:520px){.bs-stepper-header{margin:0 -10px;text-align:center}}.bs-stepper .line,.bs-stepper-line{flex:1 0 32px;min-width:1px;min-height:1px;margin:auto;background-color:rgba(0,0,0,.12)}@media (max-width:400px){.bs-stepper .line,.bs-stepper-line{flex-basis:20px}}.bs-stepper-circle{display:inline-flex;align-content:center;justify-content:center;width:2em;height:2em;padding:.5em 0;margin:.25rem;line-height:1em;color:#fff;background-color:#6c757d;border-radius:1em}.active .bs-stepper-circle{background-color:#007bff}.bs-stepper-content{padding:0 20px 20px}@media (max-width:520px){.bs-stepper-content{padding:0}}.bs-stepper.vertical{display:flex}.bs-stepper.vertical .bs-stepper-header{flex-direction:column;align-items:stretch;margin:0}.bs-stepper.vertical .bs-stepper-pane,.bs-stepper.vertical .content{display:block}.bs-stepper.vertical .bs-stepper-pane:not(.fade),.bs-stepper.vertical .content:not(.fade){display:block;visibility:hidden}.bs-stepper .content:not(.fade),.bs-stepper-pane:not(.fade){display:none}.bs-stepper .content.fade,.bs-stepper-pane.fade{visibility:hidden;transition-duration:.3s;transition-property:opacity}.bs-stepper .content.fade.active,.bs-stepper-pane.fade.active{visibility:visible;opacity:1}.bs-stepper .content.active:not(.fade),.bs-stepper-pane.active:not(.fade){display:block;visibility:visible}.bs-stepper .content.dstepper-block,.bs-stepper-pane.dstepper-block{display:block}.bs-stepper:not(.vertical) .bs-stepper-pane.dstepper-none,.bs-stepper:not(.vertical) .content.dstepper-none{display:none}.vertical .bs-stepper-pane.fade.dstepper-none,.vertical .content.fade.dstepper-none{visibility:hidden}", ""]); // Exports

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      /***/
    },

    /***/
    "./node_modules/css-loader/dist/runtime/api.js":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/

    /***/
    function node_modulesCssLoaderDistRuntimeApiJs(module) {
      "use strict";
      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names

      module.exports = function (cssWithMappingToString) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join("");
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === "string") {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, ""]];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };
      /***/

    },

    /***/
    "./resources/sass/app.scss":
    /*!*********************************!*\
      !*** ./resources/sass/app.scss ***!
      \*********************************/

    /***/
    function resourcesSassAppScss(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); // extracted by mini-css-extract-plugin

      /***/

    },

    /***/
    "./node_modules/@yaireo/tagify/dist/tagify.css":
    /*!*****************************************************!*\
      !*** ./node_modules/@yaireo/tagify/dist/tagify.css ***!
      \*****************************************************/

    /***/
    function node_modulesYaireoTagifyDistTagifyCss(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
      /* harmony import */


      var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_tagify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! !!../../../css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./tagify.css */
      "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/@yaireo/tagify/dist/tagify.css");

      var options = {};
      options.insert = "head";
      options.singleton = false;

      var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_tagify_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_tagify_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
      /***/

    },

    /***/
    "./node_modules/bs-stepper/dist/css/bs-stepper.min.css":
    /*!*************************************************************!*\
      !*** ./node_modules/bs-stepper/dist/css/bs-stepper.min.css ***!
      \*************************************************************/

    /***/
    function node_modulesBsStepperDistCssBsStepperMinCss(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
      /* harmony import */


      var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_bs_stepper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! !!../../../css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./bs-stepper.min.css */
      "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/bs-stepper/dist/css/bs-stepper.min.css");

      var options = {};
      options.insert = "head";
      options.singleton = false;

      var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_bs_stepper_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_bs_stepper_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
      /***/

    },

    /***/
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/

    /***/
    function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var isOldIE = function isOldIE() {
        var memo;
        return function memorize() {
          if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
          }

          return memo;
        };
      }();

      var getTarget = function getTarget() {
        var memo = {};
        return function memorize(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      }();

      var stylesInDom = [];

      function getIndexByIdentifier(identifier) {
        var result = -1;

        for (var i = 0; i < stylesInDom.length; i++) {
          if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var index = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
          };

          if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
          } else {
            stylesInDom.push({
              identifier: identifier,
              updater: addStyle(obj, options),
              references: 1
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function insertStyleElement(options) {
        var style = document.createElement('style');
        var attributes = options.attributes || {};

        if (typeof attributes.nonce === 'undefined') {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            attributes.nonce = nonce;
          }
        }

        Object.keys(attributes).forEach(function (key) {
          style.setAttribute(key, attributes[key]);
        });

        if (typeof options.insert === 'function') {
          options.insert(style);
        } else {
          var target = getTarget(options.insert || 'head');

          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }

          target.appendChild(style);
        }

        return style;
      }

      function removeStyleElement(style) {
        // istanbul ignore if
        if (style.parentNode === null) {
          return false;
        }

        style.parentNode.removeChild(style);
      }
      /* istanbul ignore next  */


      var replaceText = function replaceText() {
        var textStore = [];
        return function replace(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) {
            style.removeChild(childNodes[index]);
          }

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, options, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          style.setAttribute('media', media);
        } else {
          style.removeAttribute('media');
        }

        if (sourceMap && typeof btoa !== 'undefined') {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        } // For old IE

        /* istanbul ignore if  */


        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      var singleton = null;
      var singletonCounter = 0;

      function addStyle(obj, options) {
        var style;
        var update;
        var remove;

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = insertStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else {
          style = insertStyleElement(options);
          update = applyToTag.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      module.exports = function (list, options) {
        options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== 'boolean') {
          options.singleton = isOldIE();
        }

        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
          }

          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
          }

          var newLastIdentifiers = modulesToDom(newList, options);

          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];

            var _index = getIndexByIdentifier(_identifier);

            if (stylesInDom[_index].references === 0) {
              stylesInDom[_index].updater();

              stylesInDom.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/

    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      id: moduleId,

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = __webpack_modules__;
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/chunk loaded */

  /******/

  (function () {
    /******/
    var deferred = [];
    /******/

    __webpack_require__.O = function (result, chunkIds, fn, priority) {
      /******/
      if (chunkIds) {
        /******/
        priority = priority || 0;
        /******/

        for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) {
          deferred[i] = deferred[i - 1];
        }
        /******/


        deferred[i] = [chunkIds, fn, priority];
        /******/

        return;
        /******/
      }
      /******/


      var notFulfilled = Infinity;
      /******/

      for (var i = 0; i < deferred.length; i++) {
        /******/
        var _deferred$i = _slicedToArray(deferred[i], 3),
            chunkIds = _deferred$i[0],
            fn = _deferred$i[1],
            priority = _deferred$i[2];
        /******/


        var fulfilled = true;
        /******/

        for (var j = 0; j < chunkIds.length; j++) {
          /******/
          if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function (key) {
            return __webpack_require__.O[key](chunkIds[j]);
          })) {
            /******/
            chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/
            fulfilled = false;
            /******/

            if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/

        }
        /******/


        if (fulfilled) {
          /******/
          deferred.splice(i--, 1);
          /******/

          var r = fn();
          /******/

          if (r !== undefined) result = r;
          /******/
        }
        /******/

      }
      /******/


      return result;
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/compat get default export */

  /******/


  (function () {
    /******/
    // getDefaultExport function for compatibility with non-harmony modules

    /******/
    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
      /******/
      function () {
        return module['default'];
      } :
      /******/
      function () {
        return module;
      };
      /******/

      __webpack_require__.d(getter, {
        a: getter
      });
      /******/


      return getter;
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/jsonp chunk loading */

  /******/


  (function () {
    /******/
    // no baseURI

    /******/

    /******/
    // object to store loaded and loading chunks

    /******/
    // undefined = chunk not loaded, null = chunk preloaded/prefetched

    /******/
    // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded

    /******/
    var installedChunks = {
      /******/
      "/js/app": 0,

      /******/
      "css/app": 0
      /******/

    };
    /******/

    /******/
    // no chunk on demand loading

    /******/

    /******/
    // no prefetching

    /******/

    /******/
    // no preloaded

    /******/

    /******/
    // no HMR

    /******/

    /******/
    // no HMR manifest

    /******/

    /******/

    __webpack_require__.O.j = function (chunkId) {
      return installedChunks[chunkId] === 0;
    };
    /******/

    /******/
    // install a JSONP callback for chunk loading

    /******/


    var webpackJsonpCallback = function webpackJsonpCallback(parentChunkLoadingFunction, data) {
      /******/
      var _data = _slicedToArray(data, 3),
          chunkIds = _data[0],
          moreModules = _data[1],
          runtime = _data[2];
      /******/
      // add "moreModules" to the modules object,

      /******/
      // then flag all "chunkIds" as loaded and fire callback

      /******/


      var moduleId,
          chunkId,
          i = 0;
      /******/

      if (chunkIds.some(function (id) {
        return installedChunks[id] !== 0;
      })) {
        /******/
        for (moduleId in moreModules) {
          /******/
          if (__webpack_require__.o(moreModules, moduleId)) {
            /******/
            __webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/

        }
        /******/


        if (runtime) var result = runtime(__webpack_require__);
        /******/
      }
      /******/


      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/

      for (; i < chunkIds.length; i++) {
        /******/
        chunkId = chunkIds[i];
        /******/

        if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/
          installedChunks[chunkId][0]();
          /******/
        }
        /******/


        installedChunks[chunkIds[i]] = 0;
        /******/
      }
      /******/


      return __webpack_require__.O(result);
      /******/
    };
    /******/

    /******/


    var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
    /******/

    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/

    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/
  })();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module depends on other loaded chunks and execution need to be delayed

  /******/


  __webpack_require__.O(undefined, ["css/app"], function () {
    return __webpack_require__("./resources/js/app.js");
  });
  /******/


  var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], function () {
    return __webpack_require__("./resources/sass/app.scss");
  });
  /******/


  __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/

  /******/
})();