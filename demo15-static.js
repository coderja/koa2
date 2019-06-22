let koa2 = require('koa2');
let app = new koa2();
let static = require('koa-static')
let path = require('path')

//加载模板引擎
app.use(static(
    path.join(__dirname,'./view')
))

app.use(async ctx=>{
    let title = 'meetwen'
    await ctx.render('index',{title})
})

app.listen(3000,()=>{
    console.log('demo is started' )
})