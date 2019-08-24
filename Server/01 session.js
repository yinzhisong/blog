const http = require("http");

let session = {};

let server = http.createServer((req, res) => {
	if (req.url == "/favicon.ico"){
		res.end();
		return;
	}
	
	// 多设置几条 cookie 
	res.setHeader('set-cookie', 'password=123456');
	res.setHeader("set-cookie", "name=blue");
	
	// 1. 查找 cookie 和 sissID
	let sessionId = "";
	
	// 如果存在 cookie
	if (req.headers["cookie"]){
		console.log(req.headers["cookie"]);
		//console.log(req.headers["cookie"].split(";"));
		req.headers["cookie"].split(";").forEach((item, i) => {
			//console.log(item);
			let [name, value] = item.split("=");
			
			// 判断取出来的 cookie 是否存在一个名字为 sessID 的 cookie ，如果存在把他自身的 value 赋值给 sessionId
			if (name == "sessID"){
				sessionId = value;
			}
		});
	}
	
	// 判断 sessionId 是否在上面赋值成功，也就是判断是否是第一次进来
	if (sessionId){
		if (!session[sessionId]){
			session[sessionId] = {};
		}
	} else {
		// 如果没有 sessionId ，也就是在原来的 cookie 中没有找到，那么要在浏览器中种一个 cookie
		sessionId = Math.floor(Math.random() * 1000000);
		res.setHeader("set-cookie", `sessID=${sessionId}`);
		session[sessionId] = {};
	}
	
	// 使用数据
	session[sessionId].view = session[sessionId].view || 0;
	session[sessionId].view ++;
	console.log(session);
	res.write(`
		<!DOCTYPE html>
		<html lang="en" dir="ltr">
		  <head>
		    <meta charset="utf-8">
		    <title></title>
		  </head>
		  <body>
		  	欢迎您第 ${session[sessionId].view} 次访问本站
		  </body>
		</html>
	`);
	res.end();
});
server.listen(3000);
