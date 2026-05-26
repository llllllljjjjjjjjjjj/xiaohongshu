Element = function Element() {
  ldvm.toolsFunc.throwError("TypeError", "Failed to construct 'Element': Illegal constructor");
};
ldvm.toolsFunc.safeProto(Element, "Element");
Object.setPrototypeOf(Element.prototype, Node.prototype);
ldvm.toolsFunc.defineProperty(Element.prototype, "getAttribute", {configurable:true, enumerable:true, writable:true, value: function (){return ldvm.toolsFunc.dispatch(this, Element.prototype, "Element", "getAttribute", arguments)}});

