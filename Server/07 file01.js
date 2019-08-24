const Koa = require("koa");
const Router = require("koa-router");
const mysql = require("promise-mysql");
const fs=require('promise-fs');
const Memorystream = require("memorystream");

let server = new Koa();
let router = new Router();

router.get("", async (ctx, next) => {
	ctx.body = "首页";
});
router.get("/download", async (ctx, next) => {
	ctx.attachment("下载的.html");
	
	// 异步读取文件下载
	// let file = await fs.readFile("errors/download.html");
	// ctx.body = file;
	
	// 流下载文件
//	let stream = new Memorystream();
//	ctx.attachment("流下载文件.txt");
//	ctx.body = stream;
//	stream.write("aaa\n");
//	stream.write("bbb");
//	stream.end();
	
	// 流下载
	ctx.body = await fs.createReadStream("errors/download.html");
});


server.use(router.routes());
server.listen("8080");
