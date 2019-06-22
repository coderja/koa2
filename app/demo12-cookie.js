let koa2 = require('koa2');
let app = new koa2();

app.use(async (ctx)=>{
    if(ctx.url=='/page'){
        ctx.cookies.set('name','jeiiy',{
            domain:'127.0.0.1', // 写cookie所在的域名
            path:'/page',       // 写cookie所在的路径
            maxAge:1000*60*60*24,   // cookie有效时长
            // expires:new Date('2018-12-31'), // cookie失效时间
            httpOnly:false,  // 是否只用于http请求中获取
            overwrite:false  // 是否允许重写
        })
        ctx.body = ctx.cookies.get('name')
    } else {
        if(ctx.cookies.get('name')){
            ctx.body = ctx.cookies.get('name')
        } else {
            ctx.body = 'cookies is none'
        }
    }
})

app.listen(3000,()=>{
    console.log('demo is started' )
})