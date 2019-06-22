let koa2 = require('koa2');
let app = new koa2();
app.use(async ctx=>{
    ctx.body='hello koa2' //相当于express中res.send()
})
app.listen(3000,()=>{
    console.log('demo is started')
})