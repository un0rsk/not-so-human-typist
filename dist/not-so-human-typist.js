(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Typist = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var Typist = (function (_Component) {
  _inherits(Typist, _Component);

  function Typist(props) {
    _classCallCheck(this, Typist);

    _get(Object.getPrototypeOf(Typist.prototype), 'constructor', this).call(this, props);
    this.state = { typed: '', iterations: 0, typoAt: this.getTypoPosition(this.props.name) };
    this.delay = 150;
  }

  _createClass(Typist, [{
    key: 'getTypoPosition',
    value: function getTypoPosition(toType) {
      var typoIndex = Math.floor(Math.random() * (toType.length - 1 - toType.length / 2) + toType.length / 2);
      return typoIndex;
    }
  }, {
    key: 'charToTypeo',
    value: function charToTypeo(index) {
      if (index === this.state.typoAt) {
        return this.props.name.substr(index + 1, 1);
      } else if (index === this.state.typoAt + 1) {
        return this.props.name.substr(index - 1, 1);
      } else {
        return this.props.name.substr(index, 1);
      }
    }
  }, {
    key: 'printPart',
    value: function printPart() {
      var _this = this;

      if (this.state.iterations <= this.props.name.length) {
        this.setState({
          typed: this.state.typed + this.charToTypeo(this.state.iterations),
          iterations: this.state.iterations + 1
        });
        setTimeout(function () {
          return _this.printPart();
        }, this.delay);
      } else if (this.state.typoAt > 0) {
        this.rollbackToTypo();
      } else {
        this.setState({ disabled: true });
      }
    }
  }, {
    key: 'rollbackToTypo',
    value: function rollbackToTypo() {
      var _this2 = this;

      if (this.state.iterations >= this.state.typoAt) {
        this.setState({
          typed: this.state.typed.substr(0, this.state.iterations),
          iterations: this.state.iterations - 1
        });
        setTimeout(function () {
          return _this2.rollbackToTypo();
        }, this.delay);
      } else {
        this.setState({ typoAt: -1, iterations: this.state.iterations + 1 });
        this.printPart();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.typist.focus();
      this.printPart();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2['default'].createElement(
        'div',
        { className: 'Typist' },
        _react2['default'].createElement('input', { ref: function (i) {
            return _this3.typist = i;
          }, type: 'text', value: this.state.typed, disabled: this.disabled })
      );
    }
  }]);

  return Typist;
})(_react.Component);

exports['default'] = Typist;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});