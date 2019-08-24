const Koa = require("koa");
const Router = require("koa-router");

let server = new Koa();
let router = new Router();


server.use(router.routes());
server.listen("8080");
