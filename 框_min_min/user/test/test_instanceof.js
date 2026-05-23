// 模拟 output.js 的核心逻辑
EventTarget = function EventTarget(){}
WindowProperties = function WindowProperties(){}
Window = function Window(){}
Object.setPrototypeOf(Window.prototype, WindowProperties.prototype)
delete WindowProperties.prototype.constructor

window = globalThis
Object.setPrototypeOf(window, Window.prototype)

// 测试
console.log('window.__proto__ === Window.prototype:', window.__proto__ === Window.prototype)
console.log('Window.prototype.constructor:', Window.prototype.constructor)
console.log('window.constructor:', window.constructor)
console.log('window instanceof window.constructor:', window instanceof window.constructor)
console.log('window instanceof Object:', window instanceof Object)
console.log('window instanceof Window:', window instanceof Window)
