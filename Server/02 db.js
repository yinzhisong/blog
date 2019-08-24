const Koa = require("koa");
const mysql = require("mysql");
const mysqlPro = require("promise-mysql");

let server = new Koa();



server.use(async ctx => {
	if (ctx.url == "/favicon.ico"){return;}
	let db = await mysqlPro.createPool({
		host: "localhost",
		user: "root",
		password: "",
		database: "test02"
	});
	let data = await db.query("SELECT * FROM country");
	console.log(typeof data);
	
	ctx.body = data;
});


server.listen(3000);
