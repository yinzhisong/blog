const Koa = require("koa");
const Router = require("koa-router");
const fs = require("promise-fs");
const mysql = require("promise-mysql");

var server = new Koa();


(async ()=> {
	let error = {};
	let data = "";
	
	// 404
	data = await fs.readFile("./errors/404.html");
	error["404"] = data.toString();
	
	// 500
	data = await fs.readFile("./errors/500.html");
	error["500"] = data.toString();
	
	
	server.use(async (ctx, next) => {
		try {
			await next();
			if (!ctx.body) {
				ctx.status = 404;
				ctx.body = error["404"];
			}
		} catch (e){
			ctx.status = 500;
			ctx.body = error["500"];
			console.log(e);
		}
	});
	
	
	var router = new Router();
	router.get("/", async ctx => {
		ctx.body = "首页";
	});
	router.get("/logo", async ctx => {
		ctx.body = "登录";
	});
	router.get("/error", ctx => {
		// 不存在的值，会被 catch
		ctx.body = user.name;
	});
	router.get("/upload", async ctx => {
		let data = await fs.readFile("./page/form.html");
		// ctx.body = await fs.readFile("./page/form.html").toString();
		ctx.body = data.toString();
	});
	router.post("/upload", async ctx => {
		console.log(ctx.request)
		ctx.body = "post";
	});
	server.use(router.routes());
})();

server.listen(8080);
