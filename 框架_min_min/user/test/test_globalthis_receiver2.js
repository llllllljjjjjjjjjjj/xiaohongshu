// 更接近 output.js 的测试
const handler = {
    get(target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
    }
};
const proxy = new Proxy(globalThis, handler);

Object.defineProperty(globalThis, 'testTop2', {
    get: function() {
        console.log('getter this === proxy:', this === proxy);
        console.log('getter this === globalThis:', this === globalThis);
        return 42;
    }
});

// 模拟 output.js 中的 window = proxy
const window = proxy;
console.log('--- accessing window.testTop2 ---');
const r = window.testTop2;
console.log('result:', r);

// 再测试通过普通对象
const obj = {};
Object.defineProperty(obj, 'testTop3', {
    get: function() {
        console.log('obj getter this === proxy:', this === proxy);
        console.log('obj getter this === obj:', this === obj);
        return 42;
    }
});
const objProxy = new Proxy(obj, handler);
console.log('--- accessing objProxy.testTop3 ---');
const r2 = objProxy.testTop3;
