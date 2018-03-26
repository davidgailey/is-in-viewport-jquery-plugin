# IsInViewport JQuery Plugin
### JQuery plugin that returns a filtered set of elements that are in the viewport
IsInViewport helps you to easily detect if an element or elements are vertically within the user's current viewport.  
It's the perfect library for you, if you want to ...

* determine if an action should be taken on elements currently in view
* tweak performance by only doing operations the user can see
* throw analytics impressions when a user actually views a particular ad or element
* add callbacks when an element is viewed

## Installation on your page

Include the library in your HTML file:

```html
<script src="jquery.IsInViewport.js"></script>
```
And you're ready to go!  

## Usage

A common use case is when a user scrolls. It is assumed you already have core JQuery and this plugin already included on the page.

Here's a basic example with the scroll event that will output to the console:

```javascript

var $images = $('img');
$(window).on('resize scroll', function(){console.info($images.isInViewport())});
        
```

Here's another example with a lodash debounce for optimized scroll performance:

```javascript
/**
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="debounce,throttle"` https://css-tricks.com/debouncing-throttling-explained-examples/
 */
;(function(){function t(){}function e(t,e,o){function r(e){var n=p,o=s;return p=s=u,g=e,y=t.apply(o,n)}function f(t){var n=t-m;return t-=g,m===u||n>=e||0>n||v&&t>=b}function a(){var t=h();if(f(t))return c(t);var n,o=setTimeout;n=t-g,t=e-(t-m),n=v?O(t,b-n):t,d=o(a,n)}function c(t){return d=u,T&&p?r(t):(p=s=u,y)}function l(){var t=h(),n=f(t);if(p=arguments,s=this,m=t,n){if(d===u)return g=t=m,d=setTimeout(a,e),j?r(t):y;if(v)return d=setTimeout(a,e),r(m)}return d===u&&(d=setTimeout(a,e)),y}var p,s,b,y,d,m,g=0,j=false,v=false,T=true;
if(typeof t!="function")throw new TypeError("Expected a function");return e=i(e)||0,n(o)&&(j=!!o.leading,b=(v="maxWait"in o)?x(i(o.maxWait)||0,e):b,T="trailing"in o?!!o.trailing:T),l.cancel=function(){d!==u&&clearTimeout(d),g=0,p=m=s=d=u},l.flush=function(){return d===u?y:c(h())},l}function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function o(t){return null!=t&&typeof t=="object"}function r(t){var e;if(!(e=typeof t=="symbol")&&(e=o(t))){if(null==t)t=t===u?"[object Undefined]":"[object Null]";else if(v&&v in Object(t)){
e=g.call(t,v);var n=t[v];try{t[v]=u;var r=true}catch(t){}var i=j.call(t);r&&(e?t[v]=n:delete t[v]),t=i}else t=j.call(t);e="[object Symbol]"==t}return e}function i(t){if(typeof t=="number")return t;if(r(t))return f;if(n(t)&&(t=typeof t.valueOf=="function"?t.valueOf():t,t=n(t)?t+"":t),typeof t!="string")return 0===t?t:+t;t=t.replace(a,"");var e=l.test(t);return e||p.test(t)?s(t.slice(2),e?2:8):c.test(t)?f:+t}var u,f=NaN,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,p=/^0o[0-7]+$/i,s=parseInt,b=typeof self=="object"&&self&&self.Object===Object&&self,y=typeof global=="object"&&global&&global.Object===Object&&global||b||Function("return this")(),d=(b=typeof exports=="object"&&exports&&!exports.nodeType&&exports)&&typeof module=="object"&&module&&!module.nodeType&&module,m=Object.prototype,g=m.hasOwnProperty,j=m.toString,v=(m=y.Symbol)?m.toStringTag:u,x=Math.max,O=Math.min,h=function(){
return y.Date.now()};t.debounce=e,t.throttle=function(t,o,r){var i=true,u=true;if(typeof t!="function")throw new TypeError("Expected a function");return n(r)&&(i="leading"in r?!!r.leading:i,u="trailing"in r?!!r.trailing:u),e(t,o,{leading:i,maxWait:o,trailing:u})},t.isObject=n,t.isObjectLike=o,t.isSymbol=r,t.now=h,t.toNumber=i,t.VERSION="4.17.5",typeof define=="function"&&typeof define.amd=="object"&&define.amd?(y._=t, define(function(){return t})):d?((d.exports=t)._=t,b._=t):y._=t}).call(this);

// debounced version of call for scroll and resize throttling
var $images = $('img');
var debouncedImpressionHandle = _.debounce(function(){
  console.info($images.isInViewport({ fuzziness:0.6, viewportTopAdjustment:90 }));
}, 200);
$(window).on('resize scroll', debouncedImpressionHandle);
        
```
           
## Options

- `fuzziness`: (default `1`) Percent of element height that has to be in viewport.  This allows an element to be only partially in the viewport before being considered in the viewport.  Valid values are 0 to 1 where 1 is 100% and 0.5 would be 50%.

- `viewportTopAdjustment`: (default `0`) Adjustment to top of viewport to account for things like a floating header or fixed ads so that only content elements below the ads will be considered within the viewport.

- `viewportBottomAdjustment`: (default `0`) Adjustment to bottom of viewport to account for things like fixed ads.  

- `complete`: (default `null`) Callback to be called for each element within the viewport.


## License

IsInViewport is licensed under the MIT license.  
For more information click [here](https://github.com/davidgailey/is-in-viewport-jquery-plugin/blob/master/LICENSE).
