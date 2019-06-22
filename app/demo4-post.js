let koa2 = require('koa2')
let app = new koa2()

app.use(ctx=>{
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
        ctx.body = '登录成功'
    } else{
        ctx.body = `<h1>404</h1>`
    }
})

app.listen(3000,()=>{
    console.log('server starting')
})