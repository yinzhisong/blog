import { getStyle } from "./getStyle";

/*
    匀速运动框架：
        参数：
            - obj: 要运动的对象, (div)
            - json: 要运动对象的属性和属性值, {"width": 100}
            - speed: 匀速运动的速度, (20),
            - callback: 回调函数, function (){}
*/
export function unchange (obj, json, speed, callback){
    //console.log("执行动画!");
    clearInterval(obj.timer);
    // 先将最初的 speed 保存下来
    var speedCopy = speed;

    obj.timer = setInterval(function (){
        // 定义一个变量用来存储一个 boolean 值，当多有的属性都执行完以后 变成 true,此时方能关闭定时器
        // 刚开始把这个值放在外面出现，关闭不了定时器的 BUG
        var flag = true;

        // 循环传递过来的属性，以及属性中的值 (target)
        for (var attr in json){
            var oldValue;

            if (attr == "opacity"){
                oldValue = Math.round(parseFloat(getStyle(obj, attr)) * 100) || 0;
            } else {
                oldValue = parseInt(getStyle(obj, attr));
            }

            // 这个地方要小心
            if (oldValue > json[attr]){
                speed = -speed;
            }

            var newValue = oldValue + speed;

            if ((speed < 0 && newValue < json[attr]) || (speed > 0 && newValue > json[attr])){
                newValue = json[attr];
            }

            if (attr == "opacity"){
                obj.style.filter = "alpha(opacity="+ newValue +")";
                obj.style[attr] = newValue / 100;
            } else if (attr == "zIndex"){
                obj.style.zIndex = newValue;
            } else {
                obj.style[attr] = newValue + "px";
            }

            // 关闭定时器用 flag, 只要有一个 没有到 json[attr] (target) 就是没有满足条件，不能关闭定时器
            if ( !(newValue == parseInt(json[attr])) ){
                flag = false;
            }

            // 重置  speed
            speed = speedCopy;
        }

        // 上面的循环都执行好以后才关闭定时器
        console.log(flag);
        if (flag){
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);
}


export function buffer (obj, json, speed, callback){
    clearInterval(obj.timer);
    obj.timer = setInterval( ()=>{
        let flag = true;
        for (let attr in json){
            let oldValue;
            if (attr == "opacity"){
                oldValue = Math.round(parseFloat(getStyle(obj, attr)) * 100) || 0;
            } else {
                oldValue = parseInt(getStyle(obj, attr));
            }

            let newValue = (json[attr] - oldValue) / speed;
            newValue = newValue > 0 ? Math.ceil(newValue) : Math.floor(newValue);
            
            if (attr == "opacity"){
                obj.style.filter = "alpha(opacity="+ (oldValue + newValue) +")";
                obj.style.opacity = (oldValue + newValue) / 100;
            } else if (attr == "zIndex"){
                obj.style.zIndex = oldValue + newValue;
            } else {
                obj.style[attr] = (oldValue + newValue) + "px";
            }

            if (oldValue != json[attr]){
                flag = false;
            }
        }
        if (flag){
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);
}