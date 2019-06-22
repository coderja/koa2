let koa2 = require('koa2');
let app = new koa2();
let fs = require("fs");
app.use(async ctx=>{
     
    let url = ctx.request.url
    let html = await route(url) 
    ctx.body = html

})

function render(page){
    return new Promise((resolve,reject)=>{
        let pageUrl = `./page/${page}`
        fs.readFile(pageUrl,'binary',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        }) 
    })
}

function route(url){
    let page ='404.html'
    switch(url){
        case '/':
        page = 'index.html'
        break
        case '/index':
        page = 'index.html'
        break
        case '/todo':
        page = 'todo.html'
        break
        case '/404':
        page ='404.html'
        default:
        break
    }
    let html = render(page)
    return html
}

app.listen(3000,()=>{
    console.log('demo is started')
})