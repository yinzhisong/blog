export function getStyle (obj, name){
    //console.log(obj, name);
    return window.getComputedStyle ? getComputedStyle(obj, null)[name] : obj.currentStyle[name];
}