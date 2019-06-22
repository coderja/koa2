let koa2 = require('koa2');
let app = new koa2();
let bodyparse = require('koa-bodyparser')
app.use(bodyparse())
app.use(async ctx=>{
    if(ctx.url=='/'&&ctx.method=='GET'){
        let html = `
        <form action="/" method="POST">
        <input type="text" name='user'>
        <input type="text" name='age'>
        <input type="submit" value="提交">
    </form>
        `
        ctx.body=html
    }else if(ctx.url=='/'&&ctx.method=='POST'){
        console.log(ctx.request.body)
        ctx.body = ctx.request.body
    } else{
        ctx.body = `<h1>404</h1>`
    }
})
app.listen(3000,()=>{
    console.log('demo is started')
})