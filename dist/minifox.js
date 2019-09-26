'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var createStore = _interopDefault(require('storeon'));
var devtools = _interopDefault(require('storeon/devtools'));
var context = _interopDefault(require('storeon/react/context'));
var React = require('react');
var React__default = _interopDefault(React);
var connect = _interopDefault(require('storeon/react/connect'));
var useStoreon = _interopDefault(require('storeon/react'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Connection =
/*#__PURE__*/
function () {
  function Connection() {
    _classCallCheck(this, Connection);
  }

  _createClass(Connection, [{
    key: "push",
    value: function push() {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, ['push'].concat(args));
    }
  }]);

  return Connection;
}();

var module$1 = function module(store) {
  store.on('@init', function () {
    return {
      moduleMap: {}
    };
  });
  store.on('use-module', function (_ref, _ref2) {
    var moduleMap = _ref.moduleMap;
    var name = _ref2.name,
        config = _ref2.config;
    console.log('use-module', name, config);
    moduleMap[name] = config;
    return {
      moduleMap: moduleMap
    };
  });
};

var store = createStore([module$1, devtools]);
window.$s2 = store; // store.on('@dispatch', (state, [event, data]) => {
//   console.log(`Storeon: ${event} with `, data)
// })

var Connector =
/*#__PURE__*/
function () {
  function Connector(config) {
    _classCallCheck(this, Connector);

    this.moduleMap = {};
    this.__dom = config.dom;
  }

  _createClass(Connector, [{
    key: "use",
    value: function use(moduleName, config) {
      this.moduleMap[moduleName] = config;
      this.init(moduleName);
      store.dispatch('use-module', {
        name: moduleName,
        config: config
      });
      console.log('store.get()', store.get());
      return new Connection();
    }
  }, {
    key: "init",
    value: function init(moduleName) {
      var wrapper = this.__dom.findWrapper(moduleName);

      var root = document.createElement('div');
      var script = document.createElement('script');
      root.id = this.moduleMap[moduleName].root;
      script.src = this.moduleMap[moduleName].publicPath + '/' + this.moduleMap[moduleName].entryPoint;
      wrapper.appendChild(root);
      wrapper.appendChild(script);
    }
  }, {
    key: "log",
    value: function log(what) {
      console.log('log Connector', this[what]);
    }
  }]);

  return Connector;
}();

var DOM =
/*#__PURE__*/
function () {
  function DOM() {
    _classCallCheck(this, DOM);
  }

  _createClass(DOM, [{
    key: "findWrapper",
    value: function findWrapper(moduleName) {
      return document.querySelector("[minifox-module-wrapper=\"".concat(moduleName, "\"]"));
    }
  }]);

  return DOM;
}();

var withConnection = function withConnection(moduleName) {
  return function (T) {
    var D =
    /*#__PURE__*/
    function (_Component) {
      _inherits(D, _Component);

      function D(props) {
        _classCallCheck(this, D);

        return _possibleConstructorReturn(this, _getPrototypeOf(D).call(this, props));
      }

      _createClass(D, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
      }, {
        key: "render",
        value: function render() {
          var rest = _extends({}, this.props);

          return React__default.createElement(T, rest);
        }
      }]);

      return D;
    }(React.Component);

    return connect('moduleMap', D);
  };
};

window.$r2 = React__default;

var dom = new DOM();
var connector = new Connector({
  dom: dom
});

exports.StoreContext = context;
exports.connector = connector;
exports.dom = dom;
exports.store = store;
exports.useMinifox = useStoreon;
exports.withConnection = withConnection;
//# sourceMappingURL=minifox.js.map
