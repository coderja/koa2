let koa2 = require('koa2');
let Router = require('koa-router');
let app = new koa2();
let router = new Router({
    prefix:'/meetwen' //配置上下文
}) 
app.use(router.routes()).use(router.allowedMethods())

router
    .get('/',async (ctx,next)=>{
        ctx.body = 'hello jeiiy'
        next()
    }).get('/todo',(ctx,next)=>{
        ctx.body = 'hello todo'
        next()
    })

app.listen(3000,()=>{
    console.log('demo is started')
})