function getsometing(){
    return 'something'
}
let testAsync = async function(){
    return 'hello'
}
let test = async function(){
   const v1 = await testAsync()
   const v2 = await getsometing()
   console.log(v1,v2)
}
test()
let text = testAsync()
console.log(text) //Promise { 'hello' }


function longtime(){
   return new Promise((resolve)=>{
        setTimeout(()=> resolve('1s') ,2000)
    })
}

async function test1(){
   var v = await longtime()
   console.log(v)
}
test1()
