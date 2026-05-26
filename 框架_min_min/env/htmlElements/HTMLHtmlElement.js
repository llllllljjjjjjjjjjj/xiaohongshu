// HTMLHtmlElement对象
HTMLHtmlElement = function HTMLHtmlElement(){ldvm.toolsFunc.throwError("TypeError", "Failed to construct 'HTMLHtmlElement': Illegal constructor")}
ldvm.toolsFunc.safeProto(HTMLHtmlElement, "HTMLHtmlElement");
Object.setPrototypeOf(HTMLHtmlElement.prototype, HTMLElement.prototype);
ldvm.toolsFunc.defineProperty(HTMLHtmlElement.prototype, "version", {configurable:true, enumerable:true, get: function (){return ldvm.toolsFunc.dispatch(this, HTMLHtmlElement.prototype, "HTMLHtmlElement", "version_get", arguments)},set: function (){return ldvm.toolsFunc.dispatch(this, HTMLHtmlElement.prototype, "HTMLHtmlElement", "version_set", arguments)}});
