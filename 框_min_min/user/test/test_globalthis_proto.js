// 测试 globalThis 的 setPrototypeOf 和 instanceof
function Window() {}
Object.setPrototypeOf(globalThis, Window.prototype);
console.log('globalThis.__proto__ === Window.prototype:', globalThis.__proto__ === Window.prototype);
console.log('globalThis instanceof Window:', globalThis instanceof Window);

// 测试通过代理访问时的 receiver
const handler = {
    get(target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
    }
};
const proxy = new Proxy(globalThis, handler);

Object.defineProperty(globalThis, 'test', {
    get: function() {
        //console.log(this)
        console.log('getter this === globalThis:', this === globalThis);
        console.log('getter this === proxy:', this === proxy);
        console.log('getter this instanceof Window:', this instanceof Window);
        return 42;
    }
});

console.log('--- proxy.test ---');
console.log(proxy.test);
