let koa2 = require('koa2')
let app = new koa2()
app.use(async ctx=>{
    let url = ctx.url
    let request = ctx.request //request请求对象
    //let req_request = request.query //查询字符串 格式化后
    //let req_requeststring = request.querystring //查询字符串 格式化前


    let req_request = ctx.query
    let req_requeststring = ctx.querystring
    console.log(url,request,req_request)

    let body = {
        url,
        request,
        req_request,
        req_requeststring
    }
    ctx.body = body
})
app.listen(3000,()=>{
    console.log('server starting')
})