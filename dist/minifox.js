(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.minifox = factory());
}(this, function () { 'use strict';

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
        this.log('moduleMap');
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

  var dom = new DOM();
  var connector = new Connector({
    dom: dom
  });

  var minifox = function minifox() {
    return {
      connector: connector
    };
  };

  return minifox;

}));
