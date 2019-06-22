let koa2 = require('koa2')
let app = new koa2()

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
        let data = await parsedata(ctx)
        ctx.body =  querstringdata(data)
    } else{
        ctx.body = `<h1>404</h1>`
    }
})

function parsedata(ctx){ //post请求
    return new Promise((resolve,reject)=>{
        try{
            let postdata = ''
            ctx.req.on('data',data=>{
                postdata+=data
            })
            ctx.req.on('end',()=>{
                resolve(postdata)
            })
        }catch(e){
            reject(e)
        }
    })
}

function querstringdata(data){ //转为json
    let obj = {

    }
    let arr1 = data.split('&')
    for(var item of arr1){
        var arr2 = item.split('=')
        obj[arr2[0]]=arr2[1]
    }
    return obj
}

app.listen(3000,()=>{
    console.log('server starting')
})