//浏览器接口实现
!function () {
    ldvm.envFunc.Window_top_get = function Window_top_get() {
        return window;
    };
    ldvm.envFunc.Window_self_get = function Window_self_get() {
        return window;
    };
    ldvm.envFunc.Window_self_set = function Window_self_set() { 
        return window; 
    };
    ldvm.envFunc.Window_parent_set = function Window_parent_set() {
        return window;
    };
    ldvm.envFunc.Window_top_set = function Window_top_set() {

        return window;
    };
    ldvm.envFunc.Window_parent_get = function Window_parent_get() {
        return window;
    };
    ldvm.envFunc.Performance_now = function Performance_now() {
        return 1090439.5999999046
    }
    ldvm.envFunc.Document_cookie_get = function Document_cookie_get() {
        return 'abRequestId=4222a77c-10b2-5f59-b50a-e01d52c92c8c; a1=19d66558c7dsjg559n648ipqioxw68nif3go29mvj50000338198; webId=13ed1adc9daa427ad356093927d6d34f; gid=yjfKK22jy8idyjfKK22YSqj6WfMVk22jIK4YkhV3UA3lCl28EKYI3J888qqYyjY8S0JSSDKi; ets=1779012627065; xsecappid=xhs-pc-web; webBuild=6.12.1; loadts=1779550621550; websectiga=82e85efc5500b609ac1166aaf086ff8aa4261153a448ef0be5b17417e4512f28; unread={%22ub%22:%226a1041f9000000003701f8e2%22%2C%22ue%22:%2269fec80e000000001b021b41%22%2C%22uc%22:23}'

    }
    
    ldvm.envFunc.Navigator_webdriver_get = function Navigator_webdriver_get () {
        return false
    }
    ldvm.envFunc.Document_createElement = function Document_createElement() {
        let tagName = arguments[0].toLowerCase();
        let options = arguments[1];
        let tag = {}
        switch (tagName){
            case "div":
                tag = ldvm.toolsFunc.createProxyObj(tag, HTMLDivElement, `${tagName}` )
                ldvm.memory.tag.push(tag);
                break;
                default: 
                console.log(`Document_createElement_${tagName}未实现`)
        }
        return tag
    }
    ldvm.envFunc.Location_host_get = function Location_host_get() {
        return 'www.xiaohongshu.com'
    }
    ldvm.envFunc.Document_cookie_get = function Document_cookie_get() {
        let jsonCookie = ldvm.memory.globalVar.jsonCookie;
        let tempCookie = ""
        for (const key in jsonCookie) {
            if (key === "") {
                tempCookie += `${jsonCookie[key]}; `

            }
            else {
                tempCookie += `${key}=${jsonCookie[key]}; `

            }
        }
        return tempCookie
    }
    ldvm.envFunc.Document_cookie_set = function Document_cookie_set() {
        let cookieValue = arguments[0];
        let index = cookieValue.indexOf(";");
        if (index !== -1) {
            cookieValue = cookieValue.substring(0, index)
        }
        if (cookieValue.indexOf("=") === -1) {
            ldvm.memory.globalVar.jsonCookie[""] = cookieValue.trim();
        } else {
            let item = cookieValue.split("=");
            let k = item[0];
            let v = item[1];
            ldvm.memory.globalVar.jsonCookie[k] = v;
        }
    }
    ldvm.envFunc.Document_getElementsByTagName = function Document_getElementsByTagName() {
        let tagName = arguments[0].toLowerCase();
        let collection = []
        switch (tagName) {
            case "div":
                collection = ldvm.toolsFunc.getCollection('[object HTMLDivElement]');
                collection = ldvm.toolsFunc.createProxyObj(collection, HTMLCollection, `Document_getElementsByTagName_${tagName}`)
                break;
            default:
                console.log(`Document_getElementsByTagName_${tagName}未实现`);
                break;
        }
        return collection
    }

}()