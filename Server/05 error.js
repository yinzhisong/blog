const Koa = require("koa");
const Router = require("koa-router");

let server = new Koa();

server.use(async (ctx, next)=> {	
	try {
		
		await next();
	} catch (e){
		console.log(e);
		throw e;
	}
});

let login = true;

server.use(async ctx => {
	//ctx.throw(401, "need login", {a: "1", b: "2"});
	
	// 断言测试
	ctx.assert(login, 401, "need login");
});

server.listen(8080);
