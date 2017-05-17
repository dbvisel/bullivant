/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(27)('wks')
  , uid        = __webpack_require__(30)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(11)
  , createDesc = __webpack_require__(26);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(12);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(2)
  , IE8_DOM_DEFINE = __webpack_require__(46)
  , toPrimitive    = __webpack_require__(67)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f
  , has = __webpack_require__(9)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys')
  , uid    = __webpack_require__(30);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(48)
  , defined = __webpack_require__(13);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(7)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(3)
  , ctx       = __webpack_require__(8)
  , hide      = __webpack_require__(4)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(25)
  , $export        = __webpack_require__(21)
  , redefine       = __webpack_require__(61)
  , hide           = __webpack_require__(4)
  , has            = __webpack_require__(9)
  , Iterators      = __webpack_require__(6)
  , $iterCreate    = __webpack_require__(51)
  , setToStringTag = __webpack_require__(15)
  , getPrototypeOf = __webpack_require__(57)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(8)
  , invoke             = __webpack_require__(47)
  , html               = __webpack_require__(23)
  , cel                = __webpack_require__(14)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(7)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(17)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(19)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(6);
module.exports = __webpack_require__(3).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(64)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(24)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(4)
  , Iterators     = __webpack_require__(6)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bookdata = {
	duration: 4,
	background: {
		filename: "background.jpg",
		color: "#000000",
		opacity: 0.5
	},
	characters: [{
		name: "horace",
		images: [{
			direction: "left",
			filename: 'crocodileleft.gif',
			magnify: 150,
			rotation: 20,
			width: 463,
			height: 1261,
			xoffset: 0,
			yoffset: -80,
			animation: "backandforth",
			text: {
				width: 100,
				xoffset: 20,
				yoffset: 2
			}
		}, {
			direction: "right",
			filename: 'crocodileright.gif',
			magnify: 150,
			rotation: 20,
			width: 463,
			height: 1261,
			xoffset: 0,
			yoffset: -80,
			animation: "backandforth",
			text: {
				width: 100,
				xoffset: 20,
				yoffset: 2
			}
		}],
		style: "horace"
	}, {
		name: "mortimer",
		images: [{
			direction: "left",
			filename: 'humpbackwhaleleft.gif',
			magnify: 110,
			rotation: 10,
			width: 589,
			height: 1802,
			xoffset: 0,
			yoffset: -50,
			animation: "rotator",
			text: {
				width: 150,
				xoffset: -10,
				yoffset: 2
			}
		}, {
			direction: "right",
			filename: 'humpbackwhaleright.gif',
			magnify: 110,
			rotation: -10,
			width: 589,
			height: 1802,
			xoffset: 60,
			yoffset: -50,
			animation: "rotator",
			text: {
				width: 150,
				xoffset: -20,
				yoffset: 2
			}
		}],
		style: "mortimer"
	}, {
		name: "bullivant",
		images: [{
			direction: "left",
			filename: 'sealleft.gif',
			magnify: 66.66,
			rotation: 0,
			width: 352,
			height: 630,
			xoffset: 10,
			yoffset: 0,
			animation: "moveup",
			text: {
				width: 110,
				xoffset: 20,
				yoffset: 4
			}
		}, {
			direction: "right",
			filename: 'sealright.gif',
			magnify: 66.66,
			rotation: 0,
			width: 352,
			height: 630,
			xoffset: 60,
			yoffset: 0,
			animation: "moveup",
			text: {
				width: 110,
				xoffset: -20,
				yoffset: 4
			}
		}],
		style: "bullivant"
	}],
	styles: [{
		name: "mortimer",
		fontSize: 22,
		lineHeight: 28,
		fontFamily: 'sorts_mill_goudyregular',
		textTransform: "uppercase",
		letterSpacing: 3,
		textanimation: 'backandforth'
	}, {
		name: "bullivant",
		fontSize: 26,
		lineHeight: 32,
		fontFamily: 'Valentina',
		textanimation: 'moveuptext'
	}, {
		name: "horace",
		fontSize: 32,
		lineHeight: 34,
		fontFamily: 'AaronScript',
		wordSpacing: 8,
		textanimation: 'backandforth'
	}],
	pages: [{
		folio: 0,
		background: {
			filename: "titlepage.jpg",
			color: "#fff",
			opacity: 0.0000000001
		}
	}, {
		folio: 1,
		background: {
			color: "#ff00ff"
		},
		characters: [{
			name: "horace",
			direction: "left",
			text: {
				content: 'Is that fire smoking?'
			}
		}, {
			name: "mortimer",
			direction: "right",
			text: {
				content: 'Yes, it appears to be,<br /> my dear boy.',
				xoffset: 10
			}
		}]
	}, {
		folio: 2,
		background: {
			color: "#ff0000",
			opacity: 0.25
		},
		characters: [{
			name: "horace",
			direction: "left",
			text: {
				content: "I am not asking what it<br /> appears to be doing.<br /> I asked if it was smoking."
			}
		}, {
			name: "mortimer",
			direction: "right",
			xoffset: 60,
			yoffset: -40,
			text: {
				content: "Appearances are not held to be a clue to the truth. But we have no other.",
				xoffset: 20
			}
		}]
	}, {
		folio: 3,
		background: {
			color: "#00ff00"
		},
		characters: [{
			name: "horace",
			direction: "left",
			xoffset: 5,
			rotation: 12,
			text: {
				content: "Good morning. It does<br /> seem that the fire is smoking.",
				xoffset: -5
			}
		}, {
			name: "mortimer",
			direction: "right",
			xoffset: 65,
			text: {
				content: "It is in the stage when smoke is produced. So it is hard to see what it can do.",
				xoffset: 10
			}
		}]
	}, {
		folio: 4,
		background: {
			color: "#0000ff",
			opacity: 0.75
		},
		characters: [{
			name: "horace",
			direction: "left",
			text: {
				content: "Do you really not <br />understand me?"
			}
		}, {
			name: "mortimer",
			direction: "right",
			xoffset: 55,
			yoffset: -60,
			text: {
				content: "Yes, yes, my dear boy. It is giving out some smoke. We must say that it is.",
				xoffset: 20
			}
		}]
	}, {
		folio: 5,
		background: {
			filename: "later.jpg",
			color: "#fff",
			opacity: 0.0000000001
		}
	}, {
		folio: 6,
		background: {
			color: "#000fff",
			opacity: 0.25
		},
		characters: [{
			name: "horace",
			direction: "left",
			text: {
				content: "Has that fire been<br /> smoking, Bullivant?"
			}
		}, {
			name: "bullivant",
			direction: "right",
			text: {
				content: "Well, sir, not to say smoking. Merely a response to the gusty morning. A periodical spasm in accordance with the wind."
			}
		}]
	}, {
		folio: 7,
		background: {
			color: "#00f00f",
			opacity: 0.5
		},
		characters: [{
			name: "horace",
			direction: "left",
			text: {
				content: "Will it put soot <br />all over the room?"
			}
		}, {
			name: "bullivant",
			direction: "right",
			text: {
				content: "Only the lightest deposit, sir. Nothing to speak about."
			}
		}]
	}, {
		folio: 8,
		background: {
			filename: "later.jpg",
			color: "#fff",
			opacity: 0.0000000001
		}
	}, {
		folio: 9,
		background: {
			color: "#f0ff0f",
			opacity: 0.5
		},
		characters: [{
			name: "bullivant",
			direction: "left",
			text: {
				content: "It is to make them do it, sir, not to do it yourself. <br />I should never call doing things myself the<br /> harder part."
			}
		}, {
			name: "mortimer",
			direction: "right",
			text: {
				content: "Then why don\u2019t you do them yourself? I cannot understand anyone\u2019s choosing the harder part.",
				xoffset: 20
			}
		}]
	}, {
		folio: 10,
		background: {
			color: "#f00fff",
			opacity: 0.5
		},
		characters: [{
			name: "bullivant",
			direction: "left",
			text: {
				content: "Well, sir, we have to think of the future, when our own day will be done."
			}
		}, {
			name: "mortimer",
			direction: "right",
			text: {
				content: "I do not have to. <br />I should not dream of doing such a thing.",
				xoffset: 20
			}
		}]
	}, {
		folio: 11,
		background: {
			color: "#0f0fff",
			opacity: 0.5
		},
		characters: [{
			name: "bullivant",
			direction: "left",
			text: {
				content: "We must not think that the world stops with us, sir, because it stops for us."
			}
		}, {
			name: "mortimer",
			direction: "right",
			text: {
				content: "Bullivant, you did not think I meant you to do things yourself, did you?",
				xoffset: 20
			}
		}]
	}, {
		folio: 12,
		background: {
			filename: "later.jpg",
			color: "#fff",
			opacity: 0.0000000001
		}
	}, {
		folio: 13,
		background: {
			color: "#ffaa00",
			opacity: 0.5
		},
		characters: [{
			name: "horace",
			direction: "left",
			text: {
				content: "Does that chimney<br /> want sweeping?"
			}
		}, {
			name: "bullivant",
			direction: "right",
			text: {
				content: "No, sir, not until<br /> the spring."
			}
		}]
	}, {
		folio: 14,
		background: {
			color: "#ffcc00",
			opacity: 0.5
		},
		characters: [{
			name: "mortimer",
			direction: "left",
			xoffset: 35,
			yoffset: -60,
			text: {
				content: "Might it be<br /> as well to light<br /> the fire earlier?",
				xoffset: 0
			}
		}, {
			name: "bullivant",
			direction: "right",
			xoffset: 70,
			text: {
				content: "Well sir, for one morning like this, there may be a dozen with the grate drawing as sweet\u2014"
			}
		}, {
			name: "horace",
			direction: "left",
			xoffset: -10,
			yoffset: -65
		}]
	}, {
		folio: 15,
		background: {
			color: "#ffaa00",
			opacity: 0.5
		},
		characters: [{
			name: "mortimer",
			direction: "left",
			xoffset: 40
		}, {
			name: "bullivant",
			direction: "right",
			xoffset: 70,
			text: {
				content: "Well, sir, if that is the case, it is not for want of enjoinder. George, ask Mrs. Selden to retard the breakfast. There is a matter that calls for investigation."
			}
		}, {
			name: "horace",
			direction: "left",
			xoffset: -5,
			text: {
				content: "There must be some <br />obstruction in the chimney."
			}
		}]
	}, {
		folio: 16,
		background: {
			filename: "theend.jpg",
			color: "#fff",
			opacity: 0.0000000001
		}
	}]
};

module.exports = bookdata;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// dom.js
// @flow
//
// this module is basic dom manipulation



var dom = {
	create: function create(htmlStr) {
		var frag = document.createDocumentFragment();
		var temp = document.createElement('div');
		temp.innerHTML = htmlStr;
		while (temp.firstChild) {
			frag.appendChild(temp.firstChild);
		}
		return frag;
	},
	removebyselector: function removebyselector(selectorstring) {
		var selector = document.querySelector(selectorstring);
		if (selector !== null) {
			if (selector.parentNode && selector.parentNode !== null) {
				selector.parentNode.removeChild(selector);
			}
		}
	},
	addclass: function addclass(selectorstring, myclass) {
		var myelementlist = document.querySelectorAll(selectorstring);
		if (myclass.indexOf(" ") > -1) {
			var classes = myclass.split(" ");
			for (var j = 0; j < classes.length; j++) {
				dom.addclass(selectorstring, classes[j]);
			}
		} else {
			for (var i = 0; i < myelementlist.length; i++) {
				myelementlist[i].classList.add(myclass);
			}
		}
	},
	removeclass: function removeclass(selectorstring, myclass) {
		var myelementlist = document.querySelectorAll(selectorstring);
		if (myclass.indexOf(" ") > -1) {
			var classes = myclass.split(" ");
			for (var j = 0; j < classes.length; j++) {
				dom.removeclass(selectorstring, classes[j]);
			}
		} else {
			for (var i = 0; i < myelementlist.length; i++) {
				myelementlist[i].classList.remove(myclass);
			}
		}
	},
	hasclass: function hasclass(element, classname) {
		return (' ' + element.className + ' ').indexOf(' ' + classname + ' ') > -1;
	},
	getStyle: function getStyle(e, styleName) {
		var styleValue = "";
		if (document.defaultView && document.defaultView.getComputedStyle) {
			styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
		} else if (e.currentStyle) {
			styleName = styleName.replace(/\-(\w)/g, function (strMatch, p1) {
				return p1.toUpperCase();
			});
			styleValue = e.currentStyle[styleName];
		}
		return styleValue;
	}
};

module.exports = dom;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var settings = {
	paths: {
		images: "img/" // this is where the images directory is
	},
	showcontrols: true, // set this to false to hide the control buttons
	autoplay: false // set this to true to automatically advanced based on duration
};

module.exports = settings;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// bullivant.js



var _getIterator2 = __webpack_require__(37);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(38);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = __webpack_require__(35);
var bookdata = __webpack_require__(34);
var settings = __webpack_require__(36);

var appdata = {
	page: 0
};

var app = {
	initialize: function initialize() {

		app.preload(); // preload images

		app.render(appdata.page);

		window.onresize = function () {
			app.render(appdata.page); // this could maybe be debounced, but it's okay for now
		};

		// set up controls

		document.querySelector("#controls #left").onclick = app.goleft;
		document.querySelector("#controls #right").onclick = app.goright;
		document.querySelector("#characterlayer").onclick = app.goright;
		app.setupkeys();
	},
	preload: function preload() {
		var imagelist = [];
		if (bookdata.background.filename) {
			imagelist.push(bookdata.background.filename);
		}
		for (var i = 0; i < bookdata.characters.length; i++) {
			for (var j = 0; j < bookdata.characters[i].images.length; j++) {
				if (bookdata.characters[i].images[j].filename) {
					if (imagelist.indexOf(bookdata.characters[i].images[j].filename) < 0) {
						imagelist.push(bookdata.characters[i].images[j].filename);

						// would be good to figure out width and height of these images and put this into bookdata?
					}
				}
			}
		}
		for (var _i = 0; _i < bookdata.pages.length; _i++) {
			if (bookdata.pages[_i].background.filename) {
				if (imagelist.indexOf(bookdata.pages[_i].background.filename) < 0) {
					imagelist.push(bookdata.pages[_i].background.filename);
				}
			}
		}

		function preloadImages(srcs) {
			function loadImage(src) {
				return new _promise2.default(function (resolve, reject) {
					var img = new Image();
					img.onload = function () {
						resolve(img);
					};
					img.onerror = img.onabort = function () {
						reject(src);
					};
					img.src = settings.paths.images + src;
				});
			}
			var promises = [];
			for (var i = 0; i < srcs.length; i++) {
				promises.push(loadImage(srcs[i]));
			}
			return _promise2.default.all(promises);
		}

		preloadImages(imagelist).then(function (imgs) {
			// all images are loaded now and in the array imgs
			console.log(imgs.length + " images have been preloaded.");
		}, function (errImg) {
			console.log("Images failed to preload:");
			console.log(errImg);
		});
	},
	setupkeys: function setupkeys() {
		document.body.onkeydown = function (e) {
			e.preventDefault();
			if ((e.keyCode || e.which) === 37) {
				app.goleft();
			}
			if ((e.keyCode || e.which) === 39) {
				app.goright();
			}
			if ((e.keyCode || e.which) === 36) {
				// home: right now this goes to the first slide
				appdata.page = 0;
				app.render(0);
			}
			if ((e.keyCode || e.which) === 35) {
				// end: right now this goes to the last slide
				appdata.page = bookdata.pages.length - 1;
				app.render(appdata.page);
			}
		};
	},
	goleft: function goleft() {
		if (appdata.page > 0) {
			appdata.page--;
			app.render(appdata.page);
		}
	},
	goright: function goright() {
		if (appdata.page < bookdata.pages.length - 1) {
			appdata.page++;
			app.render(appdata.page);
		}
	},
	render: function render(pagenumber) {

		// would it be better to go to a bookdata.pages[pagenumber] model?

		for (var i = 0; i < bookdata.pages.length; i++) {
			if (bookdata.pages[i].folio == pagenumber) {
				var pagedata = bookdata.pages[i];
				console.log("Rendering page " + pagenumber + ".");

				// render controls

				if (settings.showcontrols) {
					dom.removeclass("#controls #left", "off");
					dom.removeclass("#controls #right", "off");
					if (i == 0) {
						dom.addclass("#controls #left", "off");
					}
				} else {
					dom.addclass("#controls #left", "off");
					dom.addclass("#controls #right", "off");
				}

				if (i == bookdata.pages.length - 1) {
					if (settings.showcontrols) {
						dom.addclass("#controls #right", "off");
					}
				} else {
					// there could be a next page
					if (settings.autoplay) {
						setTimeout(app.goright, (pagedata.duration || bookdata.duration) * 1000);
					}
				}

				// render background

				document.querySelector("#background").style.backgroundImage = "url(\"" + settings.paths.images + (pagedata.background.filename || bookdata.background.filename) + "\")";
				document.querySelector("#scrim").style.backgroundColor = pagedata.background.color || bookdata.background.color;
				document.querySelector("#scrim").style.opacity = pagedata.background.opacity || bookdata.background.opacity;

				// render folio?

				// render loose text?

				// 1 delete current characters
				// make this smarter!

				var bubbles = document.querySelectorAll(".character,.textbubble");
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = (0, _getIterator3.default)(bubbles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var bubble = _step.value;

						dom.removebyselector("#" + bubble.id);
					}

					// 2 loop for characters
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				if (pagedata.characters) {
					for (var j = 0; j < pagedata.characters.length; j++) {
						for (var k = 0; k < bookdata.characters.length; k++) {
							if (pagedata.characters[j].name == bookdata.characters[k].name) {
								var character = pagedata.characters[j];
								var characterdef = bookdata.characters[k];
								for (var l = 0; l < bookdata.characters[k].images.length; l++) {
									if (pagedata.characters[j].direction == bookdata.characters[k].images[l].direction) {

										var newchar = dom.create("<div class=\"character\" id=\"character" + j + "\"></div>");
										document.getElementById("characterlayer").appendChild(newchar);
										var char = document.getElementById("character" + j);
										char.style.backgroundImage = "url(\"" + settings.paths.images + characterdef.images[l].filename + "\")";
										char.style.transform = "rotate(" + (character.rotation || characterdef.images[l].rotation) + "deg)";

										var stageheight = document.getElementById("characterlayer").clientHeight;
										var stagewidth = document.getElementById("characterlayer").clientWidth;

										var resize = (character.magnify || characterdef.images[l].magnify) * stageheight / (characterdef.images[l].height * 100);

										var characterwidth = characterdef.images[l].width * resize;
										var characterheight = characterdef.images[l].height * resize;
										var characterxoffset = (character.xoffset || characterdef.images[l].xoffset) * stagewidth / 100;
										var characteryoffset = (character.yoffset || characterdef.images[l].yoffset) * stageheight / 100;

										char.style.width = characterwidth + "px";
										char.style.height = characterheight + "px";
										char.style.left = characterxoffset + "px";
										char.style.bottom = characteryoffset + "px";

										if (character.animation || characterdef.images[l].animation) {
											char.classList.add("animation_" + (character.animation || characterdef.images[l].animation));
										}

										// deal with text

										if (character.text) {
											if (character.text.content) {

												var newtext = dom.create("<div class=\"textbubble\" id=\"textbubble" + j + "\">" + character.text.content + "</div>");
												document.getElementById("characterlayer").appendChild(newtext);
												var textbubble = document.getElementById("textbubble" + j);

												var textbubblewidth = (character.text.width || characterdef.images[l].text.width) * characterwidth / 100;
												var textbubblexoffset = characterwidth * (character.text.xoffset || characterdef.images[l].text.xoffset) / 100 + characterxoffset - (textbubblewidth - characterwidth) / 2;
												var textbubbleyoffset = characterheight * (character.text.yoffset || characterdef.images[l].text.yoffset) / 100 + characterheight + characteryoffset;

												textbubble.style.width = textbubblewidth + "px";
												textbubble.style.left = textbubblexoffset + "px";
												textbubble.style.bottom = textbubbleyoffset + "px";

												app.styletext(textbubble, character.text.style || characterdef.style);
											}
										}
									}
								}
							}
						}
					}
				} else {
					//	console.log("No characters on this page.");
				}
			}
		}
	},
	styletext: function styletext(elem, style) {
		for (var i = 0; i < bookdata.styles.length; i++) {
			if (bookdata.styles[i].name == style) {
				var mystyle = bookdata.styles[i];
				// console.log(`Style found: ${style}`);
				elem.classList.add("character_" + style);

				var mypx = document.getElementById("characterlayer").clientHeight / 768;
				if (mystyle.fontSize) {
					elem.style.fontSize = mystyle.fontSize * mypx + "px";
				}
				if (mystyle.lineHeight) {
					elem.style.lineHeight = mystyle.lineHeight * mypx + "px";
				}
				if (mystyle.fontFamily) {
					elem.style.fontFamily = mystyle.fontFamily;
				}
				if (mystyle.textTransform) {
					elem.style.textTransform = mystyle.textTransform;
				}
				if (mystyle.textTransform) {
					elem.style.textTransform = mystyle.textTransform;
				}
				if (mystyle.wordSpacing) {
					elem.style.wordSpacing = mystyle.wordSpacing * mypx + "px";
				}
				if (mystyle.letterSpacing) {
					elem.style.letterSpacing = mystyle.letterSpacing * mypx + "px";
				}
				if (mystyle.color) {
					elem.style.color = mystyle.color * mypx + "px";
				}
				if (mystyle.textanimation) {
					elem.classList.add("animation_" + mystyle.textanimation);
				}

				return;
			}
		}
		console.log("Warning: style " + style + " not found!");
	}
};

app.initialize();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(32);
module.exports = __webpack_require__(68);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(71);
module.exports = __webpack_require__(3).Promise;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18)
  , toLength  = __webpack_require__(29)
  , toIndex   = __webpack_require__(65);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(8)
  , call        = __webpack_require__(50)
  , isArrayIter = __webpack_require__(49)
  , anObject    = __webpack_require__(2)
  , toLength    = __webpack_require__(29)
  , getIterFn   = __webpack_require__(31)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(22)(function(){
  return Object.defineProperty(__webpack_require__(14)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(7);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(6)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(2);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(55)
  , descriptor     = __webpack_require__(26)
  , setToStringTag = __webpack_require__(15)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(28).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(7)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(2)
  , dPs         = __webpack_require__(56)
  , enumBugKeys = __webpack_require__(20)
  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(14)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(23).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(11)
  , anObject = __webpack_require__(2)
  , getKeys  = __webpack_require__(59);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(9)
  , toObject    = __webpack_require__(66)
  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(9)
  , toIObject    = __webpack_require__(18)
  , arrayIndexOf = __webpack_require__(44)(false)
  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(58)
  , enumBugKeys = __webpack_require__(20);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(4);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(3)
  , dP          = __webpack_require__(11)
  , DESCRIPTORS = __webpack_require__(5)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(2)
  , aFunction = __webpack_require__(12)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17)
  , defined   = __webpack_require__(13);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(13);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2)
  , get      = __webpack_require__(31);
module.exports = __webpack_require__(3).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(42)
  , step             = __webpack_require__(53)
  , Iterators        = __webpack_require__(6)
  , toIObject        = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(24)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 70 */
/***/ (function(module, exports) {



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(25)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(8)
  , classof            = __webpack_require__(19)
  , $export            = __webpack_require__(21)
  , isObject           = __webpack_require__(10)
  , aFunction          = __webpack_require__(12)
  , anInstance         = __webpack_require__(43)
  , forOf              = __webpack_require__(45)
  , speciesConstructor = __webpack_require__(63)
  , task               = __webpack_require__(28).set
  , microtask          = __webpack_require__(54)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(60)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(15)($Promise, PROMISE);
__webpack_require__(62)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(52)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map