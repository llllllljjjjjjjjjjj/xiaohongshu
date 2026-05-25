HTMLDocument = function HTMLDocument() { ldvm.toolsFunc.throwError("TypeError", "Failed to construct 'HTMLDocument': Illegal constructor") }
ldvm.toolsFunc.safeProto(HTMLDocument, "HTMLDocument");
Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype);
document = {};
Object.setPrototypeOf(document, HTMLDocument.prototype);
Object.defineProperty(document, "location", {
    configurable: false,
    enumerable: true,
    get: function () {
        return ldvm.toolsFunc.dispatch(this, document, "document", "location_get", arguments)
    },
    set: function () {
        return ldvm.toolsFunc.dispatch(this, document, "document", "location_get", arguments)
    }
})


