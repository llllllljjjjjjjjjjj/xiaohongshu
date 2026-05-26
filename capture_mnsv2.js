// 基础环境补齐
global.window = global;
global.self = global;
global.globalThis = global;
global.document = {
    createElement: () => ({}),
    getElementsByTagName: () => [],
    documentElement: {},
    head: {},
    body: {},
    cookie: "",
    location: { href: "https://www.xiaohongshu.com/explore" }
};
global.navigator = {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    language: "zh-CN",
    languages: ["zh-CN", "zh", "en"],
    platform: "Win32",
    vendor: "Google Inc.",
    hardwareConcurrency: 8,
    maxTouchPoints: 0,
    webdriver: false,
    pdfViewerEnabled: true,
    bluetooth: {},
    clipboard: {},
    credentials: {},
    keyboard: {},
    mediaCapabilities: {},
    mediaDevices: {},
    permissions: {},
    presentation: {},
    scheduling: {},
    storage: {},
    wakeLock: {},
    webkitTemporaryStorage: {},
    requestMediaKeySystemAccess: function() {},
    sendBeacon: function() { return true; },
    getGamepads: function() { return []; },
    javaEnabled: function() { return false; },
    registerProtocolHandler: function() {},
    requestMIDIAccess: function() {},
    vibrate: function() { return false; },
    getBattery: function() { return Promise.resolve({}); },
    getUserMedia: function() { return Promise.resolve({}); },
    requestFullscreen: function() { return Promise.resolve(); },
    canShare: function() { return false; },
    share: function() { return Promise.resolve(); },
    clearAppBadge: function() { return Promise.resolve(); },
    setAppBadge: function() { return Promise.resolve(); }
};
global.location = {
    href: "https://www.xiaohongshu.com/explore",
    protocol: "https:",
    host: "www.xiaohongshu.com",
    hostname: "www.xiaohongshu.com",
    port: "",
    pathname: "/explore",
    search: "",
    hash: ""
};
global.localStorage = {
    _data: {},
    getItem: function(k) { return this._data[k] || null; },
    setItem: function(k, v) { this._data[k] = String(v); },
    removeItem: function(k) { delete this._data[k]; },
    clear: function() { this._data = {}; },
    key: function(i) { return Object.keys(this._data)[i] || null; },
    get length() { return Object.keys(this._data).length; }
};
global.sessionStorage = global.localStorage;
global.XMLHttpRequest = function() {};
global.fetch = function() { return Promise.resolve({ json: () => Promise.resolve({}) }); };
global.WebSocket = function() {};
global.indexedDB = {};
global.requestAnimationFrame = function(cb) { return setTimeout(cb, 16); };
global.cancelAnimationFrame = function(id) { clearTimeout(id); };
global.addEventListener = function() {};
global.removeEventListener = function() {};
global.dispatchEvent = function() {};
global.getComputedStyle = function() { return {}; };
global.performance = {
    now: function() { return Date.now(); },
    timing: { navigationStart: Date.now() },
    getEntriesByType: function() { return []; },
    mark: function() {},
    measure: function() {},
    clearMarks: function() {},
    clearMeasures: function() {}
};
global.screen = {
    width: 1920,
    height: 1080,
    availWidth: 1920,
    availHeight: 1040,
    colorDepth: 24,
    pixelDepth: 24,
    availLeft: 0,
    availTop: 0,
    orientation: { angle: 0, type: "landscape-primary" }
};
global.innerWidth = 1920;
global.innerHeight = 969;
global.outerWidth = 1920;
global.outerHeight = 1080;
global.devicePixelRatio = 1;
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;
global.URL = require('url').URL;
global.btoa = function(str) { return Buffer.from(str, 'binary').toString('base64'); };
global.atob = function(str) { return Buffer.from(str, 'base64').toString('binary'); };
global.chrome = { runtime: {}, app: { isInstalled: false }, webstore: { onInstallStageChanged: {}, onDownloadProgress: {} } };

// Hook 全局属性赋值，捕获 mnsv2
const originalDefineProperty = Object.defineProperty;
Object.defineProperty = function(obj, prop, desc) {
    if (prop === 'mnsv2' || (typeof prop === 'string' && prop.includes('mnsv'))) {
        console.log('[HOOK] Object.defineProperty 捕获到 mnsv2:', obj === global.window ? 'window' : obj);
        console.log('[HOOK] descriptor:', JSON.stringify(desc, null, 2));
        if (desc && desc.value) {
            console.log('[HOOK] mnsv2 value type:', typeof desc.value);
            if (typeof desc.value === 'function') {
                global._captured_mnsv2 = desc.value;
                console.log('[HOOK] mnsv2 函数已捕获，参数长度:', desc.value.length);
                console.log('[HOOK] mnsv2 函数源码前500字符:', desc.value.toString().slice(0, 500));
            }
        }
    }
    return originalDefineProperty.call(this, obj, prop, desc);
};

// 同时 Proxy window 的属性赋值
const windowHandler = {
    set(target, prop, value) {
        if (prop === 'mnsv2' || (typeof prop === 'string' && prop.includes('mnsv'))) {
            console.log('[PROXY] window 赋值捕获:', prop);
            console.log('[PROXY] value type:', typeof value);
            if (typeof value === 'function') {
                global._captured_mnsv2 = value;
                console.log('[PROXY] mnsv2 函数已捕获，参数长度:', value.length);
                console.log('[PROXY] mnsv2 函数源码前500字符:', value.toString().slice(0, 500));
            }
        }
        target[prop] = value;
        return true;
    },
    get(target, prop) {
        return target[prop];
    }
};
// 由于 window = global 是同一个对象，我们直接 hook global
const originalGlobalSet = global.__proto__ ? global.__proto__.constructor.prototype : null;

// 更激进：Hook 所有函数调用，看看什么时候出现 mnsv2
let mnsv2Found = false;
const checkForMnsv2 = () => {
    if (!mnsv2Found && global.window.mnsv2) {
        mnsv2Found = true;
        console.log('[CHECK] window.mnsv2 已存在!');
        console.log('[CHECK] 类型:', typeof global.window.mnsv2);
        console.log('[CHECK] 参数长度:', global.window.mnsv2.length);
        console.log('[CHECK] 源码前1000字符:');
        console.log(global.window.mnsv2.toString().slice(0, 1000));
        global._captured_mnsv2 = global.window.mnsv2;
    }
};

// 定期检测
const intervalId = setInterval(checkForMnsv2, 100);

console.log('=== 开始加载 1.js ===');

try {
    require('./1.js');
    console.log('=== 1.js 加载完成 ===');
    checkForMnsv2();

    // 也检查 glb
    if (global._AUuXfEG27Xa3x) {
        console.log('[INFO] _AUuXfEG27Xa3x 已注册');
    }

    clearInterval(intervalId);

    // 最终检查
    console.log('\n=== 最终状态检查 ===');
    console.log('window.mnsv2:', typeof global.window.mnsv2);
    console.log('global._captured_mnsv2:', typeof global._captured_mnsv2);

    if (global._captured_mnsv2) {
        console.log('\n=== 成功捕获 mnsv2 ===');
        console.log('参数长度:', global._captured_mnsv2.length);
        console.log('源码长度:', global._captured_mnsv2.toString().length);

        // 尝试调用
        try {
            const result = global._captured_mnsv2("test", "md5_1", "md5_2");
            console.log('调用结果:', result);
        } catch(e) {
            console.log('调用失败(可能缺少依赖):', e.message);
        }
    } else {
        console.log('\n=== 未能捕获 mnsv2 ===');
        console.log('检查 window 上的可疑属性...');
        const keys = Object.keys(global.window).filter(k => typeof global.window[k] === 'function' && global.window[k].length >= 3);
        console.log('window 上参数>=3的函数:', keys.slice(0, 20));
    }
} catch(e) {
    console.error('加载失败:', e);
    clearInterval(intervalId);
}
