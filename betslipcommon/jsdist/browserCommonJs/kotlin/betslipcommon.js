(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.betslipcommon = factory(typeof betslipcommon === 'undefined' ? {} : betslipcommon);
}(this, function (_) {
  'use strict';
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var tmp0_inductionVariable = 0;
    var tmp1_last = length - 1 | 0;
    var tmp2_step = 1;
    if (tmp0_inductionVariable <= tmp1_last)
      do {
        var i = tmp0_inductionVariable;
        tmp0_inductionVariable = tmp0_inductionVariable + tmp2_step | 0;
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === tmp1_last));
    return hash;
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp1_elvis_lhs = message;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        var tmp0_safe_receiver = cause;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var tmp2_elvis_lhs = tmp;
      this_.message = tmp2_elvis_lhs == null ? undefined : tmp2_elvis_lhs;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
    captureStack(this_);
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
    return tmp0_unsafeCast_0;
  }
  function captureStack(instance) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, instance.constructor);
    } else {
      instance.stack = (new Error()).stack;
    }
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function Exception() {
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException() {
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException() {
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function Exception_init_$Init$($this) {
    extendThrowable($this, null, null);
    Exception.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    return ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack | rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack & rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function ResponseDataClass(msg, code) {
    this._msg = msg;
    this._code = code;
  }
  ResponseDataClass.prototype._get_msg_ = function () {
    return this._msg;
  };
  ResponseDataClass.prototype._get_code_ = function () {
    return this._code;
  };
  ResponseDataClass.prototype.component1 = function () {
    return this._msg;
  };
  ResponseDataClass.prototype.component2 = function () {
    return this._code;
  };
  ResponseDataClass.prototype.copy = function (msg, code) {
    return new ResponseDataClass(msg, code);
  };
  ResponseDataClass.prototype.copy$default = function (msg, code, $mask0, $handler) {
    var msg_0 = !(($mask0 & 1) === 0) ? this._msg : msg;
    var code_0 = !(($mask0 & 2) === 0) ? this._code : code;
    return this.copy(msg_0, code_0);
  };
  ResponseDataClass.prototype.toString = function () {
    return '' + 'ResponseDataClass(msg=' + this._msg + ', code=' + this._code + ')';
  };
  ResponseDataClass.prototype.hashCode = function () {
    return imul(getStringHashCode(this._msg), 31) + this._code | 0;
  };
  ResponseDataClass.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResponseDataClass))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ResponseDataClass ? other : THROW_CCE();
    if (!(this._msg === tmp0_other_with_cast._msg))
      return false;
    if (!(this._code === tmp0_other_with_cast._code))
      return false;
    return true;
  };
  ResponseDataClass.$metadata$ = {
    simpleName: 'ResponseDataClass',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ResponseDataClass.prototype, 'msg', {
    configurable: true,
    get: ResponseDataClass.prototype._get_msg_
  });
  Object.defineProperty(ResponseDataClass.prototype, 'code', {
    configurable: true,
    get: ResponseDataClass.prototype._get_code_
  });
  function Callback() {
  }
  Callback.$metadata$ = {
    simpleName: 'Callback',
    kind: 'interface',
    interfaces: []
  };
  function commonCode(callback) {
    return new ResponseDataClass(callback.onCall('fromCommon'), 2);
  }
  var $betslipcommon = _.betslipcommon || (_.betslipcommon = {});
  $betslipcommon.ResponseDataClass = ResponseDataClass;
  $betslipcommon.commonCode = commonCode;
  return _;
}));
