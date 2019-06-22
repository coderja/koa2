let koa2 = require('koa2');
let Router = require('koa-router');
let app = new koa2();

// 父级路由
let router = new Router() 
// 子路由
let home = new Router()
home
.get('/home',async (ctx)=>{
    ctx.body = 'home jeiiy'
}).get('/todo',(ctx)=>{
    ctx.body = 'home todo'
})
// 子路由
let page = new Router()
page
.get('/page',async (ctx)=>{
    ctx.body = 'page jeiiy'
}).get('/todo',(ctx)=>{
    ctx.body = 'page todo'
})

router.use('/home',home.routes()).use(home.allowedMethods())
router.use('/page',page.routes()).use(page.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    n=0
    console.log('demo is started',n++)
})