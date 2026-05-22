// 验证 Reflect.get 的 receiver
const handler = {
    get(target, prop, receiver) {
        console.log('trap receiver === objProxy:', receiver === objProxy);
        return Reflect.get(target, prop, receiver);
    }
};

const obj = {};
Object.defineProperty(obj, 'test', {
    get: function() {
        console.log('getter this:', this);
        console.log('getter this === obj:', this === obj);
        console.log('getter this === objProxy:', this === objProxy);
        return 42;
    }
});
const objProxy = new Proxy(obj, handler);
console.log('--- accessing objProxy.test ---');
const r = objProxy.test;
console.log('result:', r);
