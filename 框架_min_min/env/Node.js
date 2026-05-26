Node = function Node(){ldvm.toolsFunc.throwError("TypeError", "Failed to construct 'Node': Illegal constructor")}
ldvm.toolsFunc.safeProto(Node, "Node");
Object.setPrototypeOf(Node.prototype, EventTarget.prototype);
ldvm.toolsFunc.defineProperty(Node.prototype, "removeChild", {configurable:true, enumerable:true, writable:true, value: function (){return ldvm.toolsFunc.dispatch(this, Node.prototype, "Node", "removeChild", arguments)}});
