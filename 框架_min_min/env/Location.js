Location = function Location(){ldvm.toolsFunc.throwError("TypeError", "Failed to construct 'Location': Illegal constructor")}
ldvm.toolsFunc.safeProto(Location, "Location");
Object.setPrototypeOf(Location.prototype, Object.prototype);
location = {};
Object.setPrototypeOf(location, Location.prototype); 
ldvm.toolsFunc.defineProperty(location, "host", {configurable:false, enumerable:true, get: function (){return ldvm.toolsFunc.dispatch(this, location, "Location", "host_get", arguments)},set: function (){return ldvm.toolsFunc.dispatch(this, location, "Location", "host_set", arguments)}}); 
