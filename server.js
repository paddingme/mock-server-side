var jsonServer = require('json-server');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');


// 配置文件
var config = require('./config');

var server = jsonServer.create();

var routes = {};	
routes.users = require('./route/users');

server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

//解决跨域问题
 server.all('*', config.cors);

///
 server.get('/',function(req,res){res.send('Hello! The API is at http://127.0.0.1:3000/api');})

//Login
 server.post('/user/signin', routes.users.signin); 
 
//Logout
server.get('/user/logout', jwt({secret: config.secretToken}), routes.users.logout); 

// 访问静态文件，静态文件放置在public 目录下
// 例如可以直接访问http://127.0.0.1:3000/images/book1.jpg
server.use(jsonServer.defaults());

//api 假数据
var APIRouter = jsonServer.router('db.json');

//路由映射
//db.json 数据访问路径为 http://127.0.0.1:3000/api/catalogs/
server.use(jsonServer.rewriter({'/api/':'/'}));
// 对 api 路径验证是否授权 未授权则无法访问
server.use(jwt({secret: config.secretToken})); 

server.use(APIRouter);

// 启动服务器
server.listen(3000,function(req,res){
	console.log("the mock server is listening at port 3000!")
});






