function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports(){ return jsxRuntimeExports; },
  set exports(v){ jsxRuntimeExports = v; },
};

var reactJsxRuntime_production_min = {};

var reactExports = {};
var react = {
  get exports(){ return reactExports; },
  set exports(v){ reactExports = v; },
};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1=Symbol.for("react.element"),n$3=Symbol.for("react.portal"),p$1=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u$2=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$1,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return {$$typeof:l$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$1}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l$1:case n$3:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p$1;
react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$1,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u$2,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.2.0";

(function (module) {

	{
	  module.exports = react_production_min;
	}
} (react));

const React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n$2=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n$2.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

(function (module) {

	{
	  module.exports = reactJsxRuntime_production_min;
	}
} (jsxRuntime));

const jsx = jsxRuntimeExports.jsx;
const jsxs = jsxRuntimeExports.jsxs;

const InputStateContext = reactExports.createContext(void 0);
const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "set.current": {
      if (state.current.length > 3) {
        return state;
      }
      return {
        ...state,
        current: state.current + action.payload?.current,
        ...!state.time ? { time: new Date().getTime() } : {}
      };
    }
    case "set.current.backspace": {
      return { ...state, current: state.current.slice(0, -1) };
    }
    case "set.current.clear": {
      return { ...state, current: "", skip: false, time: void 0 };
    }
    case "set.current.skip": {
      return { ...state, skip: true, ...!state.time ? { time: new Date().getTime() } : {} };
    }
    default:
      return state;
  }
};
const InputStateProvider = ({ children }) => {
  const [state, dispatch] = reactExports.useReducer(inputStateReducer, { current: "" });
  const value = { state, dispatch };
  return /* @__PURE__ */ jsx(InputStateContext.Provider, { value, children });
};
const useInputState = () => {
  const context = reactExports.useContext(InputStateContext);
  if (context === void 0) {
    throw new Error("useInputState must be used within InputStateProvider");
  }
  return context;
};

const a$1 = "あ";
const ka$1 = "か";
const sa$1 = "さ";
const ta$1 = "た";
const na$1 = "な";
const ha$1 = "は";
const ma$1 = "ま";
const ya$1 = "や";
const ra$1 = "ら";
const wa$1 = "わ";
const ga$1 = "が";
const za$1 = "ざ";
const da$1 = "だ";
const ba$1 = "ば";
const pa$1 = "ぱ";
const i$1 = "い";
const ki$1 = "き";
const shi$1 = "し";
const chi$1 = "ち";
const ni$1 = "に";
const hi$1 = "ひ";
const mi$1 = "み";
const ri$1 = "り";
const gi$1 = "ぎ";
const ji$1 = "じ";
const bi$1 = "び";
const pi$1 = "ぴ";
const u$1 = "う";
const ku$1 = "く";
const su$1 = "す";
const tsu$1 = "つ";
const nu$1 = "ぬ";
const fu$1 = "ふ";
const mu$1 = "む";
const yu$1 = "ゆ";
const ru$1 = "る";
const gu$1 = "ぐ";
const zu$1 = "ず";
const bu$1 = "ぶ";
const pu$1 = "ぷ";
const e$1 = "え";
const ke$1 = "け";
const se$1 = "せ";
const te$1 = "て";
const ne$1 = "ね";
const he$1 = "へ";
const me$1 = "め";
const re$1 = "れ";
const ge$1 = "げ";
const ze$1 = "ぜ";
const de$1 = "で";
const be$1 = "べ";
const pe$1 = "ぺ";
const o$1 = "お";
const ko$1 = "こ";
const so$1 = "そ";
const to$1 = "と";
const no$1 = "の";
const ho$1 = "ほ";
const mo$1 = "も";
const yo$1 = "よ";
const ro$1 = "ろ";
const go$1 = "ご";
const zo$1 = "ぞ";
const bo$1 = "ぼ";
const po$1 = "ぽ";
const n$1 = "ん";
const hiragana = {
	a: a$1,
	ka: ka$1,
	sa: sa$1,
	ta: ta$1,
	na: na$1,
	ha: ha$1,
	ma: ma$1,
	ya: ya$1,
	ra: ra$1,
	wa: wa$1,
	ga: ga$1,
	za: za$1,
	da: da$1,
	ba: ba$1,
	pa: pa$1,
	i: i$1,
	ki: ki$1,
	shi: shi$1,
	chi: chi$1,
	ni: ni$1,
	hi: hi$1,
	mi: mi$1,
	ri: ri$1,
	gi: gi$1,
	ji: ji$1,
	bi: bi$1,
	pi: pi$1,
	u: u$1,
	ku: ku$1,
	su: su$1,
	tsu: tsu$1,
	nu: nu$1,
	fu: fu$1,
	mu: mu$1,
	yu: yu$1,
	ru: ru$1,
	gu: gu$1,
	zu: zu$1,
	bu: bu$1,
	pu: pu$1,
	e: e$1,
	ke: ke$1,
	se: se$1,
	te: te$1,
	ne: ne$1,
	he: he$1,
	me: me$1,
	re: re$1,
	ge: ge$1,
	ze: ze$1,
	de: de$1,
	be: be$1,
	pe: pe$1,
	o: o$1,
	ko: ko$1,
	so: so$1,
	to: to$1,
	no: no$1,
	ho: ho$1,
	mo: mo$1,
	yo: yo$1,
	ro: ro$1,
	go: go$1,
	zo: zo$1,
	"do": "ど",
	bo: bo$1,
	po: po$1,
	n: n$1
};

const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const generateNewCharacter = (history) => {
  const characterList = Object.keys(hiragana);
  const lastTenCharacters = history.slice(-10).map(({ character }) => character);
  let newCharacter = "";
  while (!newCharacter || lastTenCharacters.includes(newCharacter)) {
    const randomValue = Math.floor(Math.random() * characterList.length);
    newCharacter = characterList[randomValue];
  }
  return newCharacter;
};

const usePressKey = () => {
  const { dispatch } = useInputState();
  const updateCurrentInput = reactExports.useCallback(({ key }) => {
    if (/^[a-z]$/i.test(key)) {
      dispatch({ type: "set.current", payload: { current: key.toLowerCase() } });
    }
    if (key === "Backspace") {
      dispatch({ type: "set.current.backspace" });
    }
    if (key === "Enter") {
      dispatch({ type: "set.current.skip" });
    }
  }, [dispatch]);
  reactExports.useEffect(() => {
    if (!isMobile()) {
      document.addEventListener("keydown", updateCurrentInput);
    }
    return () => {
      document.removeEventListener("keydown", updateCurrentInput);
    };
  }, [updateCurrentInput]);
};

const a = "ア";
const ka = "カ";
const sa = "サ";
const ta = "タ";
const na = "ナ";
const ha = "ハ";
const ma = "マ";
const ya = "ヤ";
const ra = "ラ";
const wa = "ワ";
const ga = "ガ";
const za = "ザ";
const da = "ダ";
const ba = "バ";
const pa = "パ";
const i = "イ";
const ki = "キ";
const shi = "シ";
const chi = "チ";
const ni = "ニ";
const hi = "ヒ";
const mi = "ミ";
const ri = "リ";
const gi = "ギ";
const ji = "ジ";
const bi = "ビ";
const pi = "ピ";
const u = "ウ";
const ku = "ク";
const su = "ス";
const tsu = "ツ";
const nu = "ヌ";
const fu = "フ";
const mu = "ム";
const yu = "ユ";
const ru = "ル";
const gu = "グ";
const zu = "ズ";
const bu = "ブ";
const pu = "プ";
const e = "エ";
const ke = "ケ";
const se = "セ";
const te = "テ";
const ne = "ネ";
const he = "ヘ";
const me = "メ";
const re = "レ";
const ge = "ゲ";
const ze = "ゼ";
const de = "デ";
const be = "ベ";
const pe = "ペ";
const o = "オ";
const ko = "コ";
const so = "ソ";
const to = "ト";
const no = "ノ";
const ho = "ホ";
const mo = "モ";
const yo = "ヨ";
const ro = "ロ";
const go = "ゴ";
const zo = "ゾ";
const bo = "ボ";
const po = "ポ";
const n = "ン";
const katakana = {
	a: a,
	ka: ka,
	sa: sa,
	ta: ta,
	na: na,
	ha: ha,
	ma: ma,
	ya: ya,
	ra: ra,
	wa: wa,
	ga: ga,
	za: za,
	da: da,
	ba: ba,
	pa: pa,
	i: i,
	ki: ki,
	shi: shi,
	chi: chi,
	ni: ni,
	hi: hi,
	mi: mi,
	ri: ri,
	gi: gi,
	ji: ji,
	bi: bi,
	pi: pi,
	u: u,
	ku: ku,
	su: su,
	tsu: tsu,
	nu: nu,
	fu: fu,
	mu: mu,
	yu: yu,
	ru: ru,
	gu: gu,
	zu: zu,
	bu: bu,
	pu: pu,
	e: e,
	ke: ke,
	se: se,
	te: te,
	ne: ne,
	he: he,
	me: me,
	re: re,
	ge: ge,
	ze: ze,
	de: de,
	be: be,
	pe: pe,
	o: o,
	ko: ko,
	so: so,
	to: to,
	no: no,
	ho: ho,
	mo: mo,
	yo: yo,
	ro: ro,
	go: go,
	zo: zo,
	"do": "ド",
	bo: bo,
	po: po,
	n: n
};

const HiddenInput = () => {
  const { dispatch } = useInputState();
  return /* @__PURE__ */ jsx(
    "input",
    {
      onChange: (e) => {
        const key = e.target.value;
        if (/^[a-z]$/i.test(key)) {
          dispatch({ type: "set.current", payload: { current: key.toLowerCase() } });
        }
      },
      onKeyDown: ({ key }) => {
        if (key === "Backspace") {
          dispatch({ type: "set.current.backspace" });
        }
        if (key === "Enter") {
          dispatch({ type: "set.current.skip" });
        }
      },
      value: "",
      className: "opacity-0 absolute h-full w-full cursor-pointer",
      "data-testid": "hiddenInput"
    }
  );
};

const KanaCharacter = ({
  type = "hiragana",
  actual,
  input,
  time = 0,
  hasInput = false
}) => {
  const characterJson = type === "hiragana" ? hiragana : katakana;
  if (hasInput) {
    return /* @__PURE__ */ jsxs("div", { className: "kana-character-block kana-input-field", "data-testid": "inputCharacter", children: [
      /* @__PURE__ */ jsxs("span", { className: "character-list-item-input text-xl leading-normal left-2", "data-testid": "inputCharacterValue", children: [
        input,
        /* @__PURE__ */ jsx("span", { className: "border-b border-black border-solid inline-block w-1 animate-flash" })
      ] }),
      characterJson[actual],
      isMobile() && /* @__PURE__ */ jsx(HiddenInput, {})
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "kana-character-block", "data-testid": "historyCharacter", children: [
    /* @__PURE__ */ jsx("span", { className: "character-list-item-actual", children: actual }),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: `character-list-item-input ${actual === input ? "text-green-600" : "text-red-500"}`,
        "data-testid": "historyCharacterValue",
        children: input
      }
    ),
    /* @__PURE__ */ jsxs("span", { className: "character-list-item-time", children: [
      Math.round(time * 100) / 1e5,
      "s"
    ] }),
    characterJson[actual]
  ] });
};

const KanaCharacterList = ({ history }) => /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsx("section", { className: "kana-character-list", "data-testid": "characterList", children: history.length > 0 ? history.map((item, index) => /* @__PURE__ */ jsx(KanaCharacter, { type: item.type, actual: item.character, input: item.input, time: item.time }, index)).reverse() : /* @__PURE__ */ jsx(
  "div",
  {
    className: "text-base w-full flex items-center bg-gray-200 bg-opacity-90 m-1 rounded px-2 py-4",
    "data-testid": "emptyCardMessage",
    children: "Type the sound of the character. Press ENTER to skip."
  }
) }) });

const AppHeader = ({ currentCharacter, setType, type }) => {
  const { state } = useInputState();
  const selectHiragana = () => setType("hiragana");
  const selectKatakana = () => setType("katakana");
  const saveHistory = () => localStorage.setItem("history", JSON.stringify(history));
  return /* @__PURE__ */ jsxs("section", { className: "flex justify-between mb-1", "data-testid": "appHeader", children: [
    /* @__PURE__ */ jsx(KanaCharacter, { type, hasInput: true, actual: currentCharacter, input: state.current }),
    /* @__PURE__ */ jsxs("section", { className: "pt-1 text-right text-neutral-700 text-base", "data-testid": "characterListConfig", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: selectHiragana,
          onKeyDown: callFunctionWhenSpacePressed(selectHiragana),
          className: `config-button ${type === "hiragana" ? "active" : ""}`,
          children: "Hiragana"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: selectKatakana,
          onKeyDown: callFunctionWhenSpacePressed(selectKatakana),
          className: `config-button ${type === "katakana" ? "active" : ""}`,
          children: "Katakana"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: saveHistory,
          onKeyDown: callFunctionWhenSpacePressed(saveHistory),
          className: "inline-block config-button",
          children: "Save"
        }
      )
    ] })
  ] });
};
const callFunctionWhenSpacePressed = (callback) => (e) => e.code === "Space" && callback();

const Main = () => {
  const { state, dispatch } = useInputState();
  const [history, setHistory] = reactExports.useState([]);
  const [currentCharacter, setCurrentCharacter] = reactExports.useState("");
  const [type, setType] = reactExports.useState("hiragana");
  usePressKey();
  reactExports.useEffect(() => {
    if (!currentCharacter) {
      setCurrentCharacter(generateNewCharacter(history));
    } else if (state.current === currentCharacter || state.skip) {
      dispatch({ type: "set.current.clear" });
      setHistory(
        history.concat({
          character: currentCharacter,
          input: state.current,
          time: state.time ? new Date().getTime() - state.time : 0,
          type
        })
      );
      setCurrentCharacter("");
    }
  }, [currentCharacter, setCurrentCharacter, history, setHistory, state, dispatch, type]);
  reactExports.useEffect(() => {
    const localStorageHistory = JSON.parse(localStorage.getItem("history") || "[]");
    if (localStorageHistory.length > 0) {
      setHistory(localStorageHistory);
    }
  }, [setHistory]);
  return /* @__PURE__ */ jsx("main", { className: "p-2", children: /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsx(AppHeader, { currentCharacter, setType, type }),
    /* @__PURE__ */ jsx(KanaCharacterList, { history })
  ] }) });
};

function App() {
  return /* @__PURE__ */ jsx(InputStateProvider, { children: /* @__PURE__ */ jsx(Main, {}) });
}

export { React as R, App as default, jsx as j, reactExports as r };
