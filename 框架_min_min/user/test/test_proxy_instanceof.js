// 测试代理对象作为 instanceof 右侧
const target = {a: 1};
const proxy = new Proxy(target, {
    get(t, prop, receiver) {
        console.log('get', prop);
        return Reflect.get(t, prop, receiver);
    }
});

function Foo() {}
Object.setPrototypeOf(target, Foo.prototype);

console.log('target instanceof Foo:', target instanceof Foo);
console.log('proxy instanceof Foo:', proxy instanceof Foo);

// 测试函数被代理后作为 instanceof 右侧
function Bar() {}
const BarProxy = new Proxy(Bar, {
    get(t, prop, receiver) {
        console.log('BarProxy get', prop);
        return Reflect.get(t, prop, receiver);
    }
});

const obj = {};
Object.setPrototypeOf(obj, Bar.prototype);
console.log('obj instanceof Bar:', obj instanceof Bar);
console.log('obj instanceof BarProxy:', obj instanceof BarProxy);
