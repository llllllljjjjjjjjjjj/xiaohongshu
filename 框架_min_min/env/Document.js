Document = function Document(){}
ldvm.toolsFunc.safeProto(Document, "Document");
Object.setPrototypeOf(Document.prototype, Node.prototype);
ldvm.toolsFunc.defineProperty(Document.prototype, "cookie", {configurable:true, enumerable:true, get: function (){return ldvm.toolsFunc.dispatch(this, Document.prototype, "Document", "cookie_get", arguments)},set: function (){return ldvm.toolsFunc.dispatch(this, Document.prototype, "Document", "cookie_set", arguments)}});
