const Koa = require("koa");
const Router = require("koa-router");
const fs = require("promise-fs");

let server = new Koa();
let router = new Router();

let login = false;

router.get("/", async ctx => {
	if (!login){
		ctx.redirect("/login");
	} else {
		ctx.body = "首页";
	}
});

router.get("/login", async ctx => {
	let buffer = await fs.readFile("./page/login.html");
	ctx.body = buffer.toString();
});

router.post("/login", async ctx => {
	login = true;
	ctx.redirect("/");
});

server.use(router.routes());
server.listen(8080);
