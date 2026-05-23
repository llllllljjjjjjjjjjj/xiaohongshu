EventTarget = function EventTarget(){}
ldvm.toolsFunc.safeProto(EventTarget, "EventTarget");
Object.setPrototypeOf(EventTarget.prototype, Object.prototype);
ldvm.toolsFunc.defineProperty(EventTarget.prototype, "addEventListener", {configurable:true, enumerable:true, writable:true, value: function (){return ldvm.toolsFunc.dispatch(this, EventTarget.prototype, "EventTarget", "addEventListener", arguments)}});
