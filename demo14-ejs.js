let koa2 = require('koa2');
let app = new koa2();
let views = require('koa-views')
let path = require('path')

//加载模板引擎
app.use(views(path.join(__dirname,'./view'),{
    extension:'ejs'
}))

app.use(async ctx=>{
    let title = 'meetwen'
    await ctx.render('index',{title})
})

app.listen(3000,()=>{
    console.log('demo is started' )
})