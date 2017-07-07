'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Typist = function (_Component) {
  _inherits(Typist, _Component);

  function Typist(props) {
    _classCallCheck(this, Typist);

    var _this = _possibleConstructorReturn(this, (Typist.__proto__ || Object.getPrototypeOf(Typist)).call(this, props));

    _this.state = { typed: '', iterations: 0, typoAt: _this.getTypoPosition(_this.props.name) };
    _this.delay = 150;
    return _this;
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
      var _this2 = this;

      if (this.state.iterations <= this.props.name.length) {
        this.setState({
          typed: this.state.typed + this.charToTypeo(this.state.iterations),
          iterations: this.state.iterations + 1
        });
        setTimeout(function () {
          return _this2.printPart();
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
      var _this3 = this;

      if (this.state.iterations >= this.state.typoAt) {
        this.setState({
          typed: this.state.typed.substr(0, this.state.iterations),
          iterations: this.state.iterations - 1
        });
        setTimeout(function () {
          return _this3.rollbackToTypo();
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
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'Typist' },
        _react2.default.createElement('input', { ref: function ref(i) {
            return _this4.typist = i;
          }, type: 'text', value: this.state.typed, disabled: this.disabled })
      );
    }
  }]);

  return Typist;
}(_react.Component);

exports.default = Typist;