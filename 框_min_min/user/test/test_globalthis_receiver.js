// 测试 globalThis accessor 的 receiver
const proxy = new Proxy(globalThis, {
    get(target, prop, receiver) {
        console.log('proxy get', prop, 'receiver === proxy:', receiver === proxy);
        return Reflect.get(target, prop, receiver);
    }
});

Object.defineProperty(globalThis, 'testTop', {
    get: function() {
        console.log('getter this === proxy:', this === proxy);
        console.log('getter this === globalThis:', this === globalThis);
        return 42;
    }
});

console.log('--- accessing via proxy ---');
const r = proxy.testTop;
console.log('result:', r);
