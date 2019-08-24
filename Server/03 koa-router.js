const Koa = require("koa");
const Router = require("koa-router");

let server = new Koa();
let router = new Router();

server.use(async (ctx, next) => {
	try {
		await next();
		if (!ctx.body){
			ctx.status = 404;
			ctx.body = "not found";
		}
	} catch (e){
		ctx.status = 500;
		ctx.body = "server Error";
		console.log(e);
	}
});

router.get("/", ctx => {
	ctx.body = "首页";
});
router.get("/logo", ctx => {
	ctx.body = "登录";
});
router.get("/error", ctx => {
	// 不存在的值，会被 catch
	ctx.body = user.name;
});

server.use(router.routes());

server.listen(8090);
//  user is not defined
