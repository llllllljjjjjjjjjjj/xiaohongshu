Navigator = function Navigator(){ldvm.toolsFunc.throwError("TypeError", "Failed to construct 'Navigator': Illegal constructor")}
ldvm.toolsFunc.safeProto(Navigator, "Navigator");
ldvm.toolsFunc.defineProperty(Navigator.prototype, "webdriver", {configurable:true, enumerable:true, get: function (){return ldvm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "webdriver_get", arguments)},set:undefined});


Object.setPrototypeOf(Navigator.prototype, Object.prototype);
navigator = {};
Object.setPrototypeOf(navigator, Navigator.prototype); 
