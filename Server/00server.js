const Koa = require("koa");
const Router = require("koa-router");
const fs = require("promise-fs");
const mysql = require("promise-mysql");
const static = require("koa-static");

let server = new Koa();
let router = new Router();

server.use(async (ctx, next) => {
	if (ctx.url == "/favicon.ico"){return}
	try {
		await next();
	} catch (e){
		console.log(e);
	}
});

// server.use(static("./dist", {
	// index: 'index.html'
// }));

router.get("/index", async ctx => {
	ctx.body = "来吧，返回去！";
});
router.get("/api", async ctx => {
	ctx.body = {
		name: "api",
		age: "0"
	};
});

server.use(router.routes());
server.listen("8080");
