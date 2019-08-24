export function getDate (format){
    let date = new Date();

    // 返回格式化后的年、月、日
    if (format && format == "YMD"){
        let year = date.getFullYear() + "";
        let month = date.getMonth() + 1 + "";
        let day = date.getDate() + "";
        return {year, month, day};
    }
    return date;
}