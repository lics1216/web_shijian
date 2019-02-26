// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname, 'static'));


// 导入controller middleware:
const controller = require('./controller');



// 创建一个Koa对象表示web app本身:
const app = new Koa();


// 在router 注册之前
app.use(bodyParser());

// 使用middleware, controller 返回的是router.routers()
app.use(controller());
app.use(main);

app.listen(3000);
console.log('app started at port 3000...');