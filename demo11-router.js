let koa2 = require('koa2');
let Router = require('koa-router');
let app = new koa2();

// 父级路由
let router = new Router() 
 
router
.get('/page',async (ctx)=>{
    console.log(1)
    ctx.body = ctx.query
}).get('/todo',(ctx)=>{
    ctx.body = ctx.query
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    n=0
    console.log('demo is started',n++)
})