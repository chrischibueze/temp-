// const amount = 12
// if(amount > 10)
// {
//     console.log('small number')
// }
// else{
//     console.log('hey bigger number')
// }
// console.log('hey its my first cose !!')

//os module
// const os = require('os')
// const user = os.userInfo()
// console.log(user)



// console.log(`the system uptime is : ${os.uptime()} and ${os.freemem()}seconds`)



// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem:os.freemem(),
    
// }
// console.log(currentOS)



//path module
/*const path = require('path')
const { text } = require('stream/consumers')
console.log(path.sep)
const filepath = path.join('/content/','subfolder','text.txt')
console.log(filepath)*/

//synchronous method

// const {readFileSync, writeFileSync} = require('fs')
// const first = readFileSync('./content/first.txt','utf8');
// const second = readFileSync('./content/second.txt','utf8');

// writeFileSync('./content/result-sync.txt',
//  `here is the result : ${first}, ${second}`,{flag:'a'})


 //async method

 /*
 const {readFile, writeFile, read} = require('fs')
readFile(`./content/first.txt`,'utf8',(err,result) =>{
    if(err){
        console.log(err)
        return
    }
const first = result;
readFile(`./content/second.txt`,'utf8', (err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const second = result
    writeFile('./content/result-async.txt', `here is the result : ${first}, ${second}`,(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
     

    })
})
})
*/



const http= require('http')
const server = http.createServer((req,res)=>
{
if(req.url === '/')
{
    res.end('welcome to our home page')
}

if(req.url === '/about')
{
    res.end('welcome to our about page')

}else{
res.end(`
<h1>Oops</h1>
<p>We cant find the page</p>
<a href="/">back to home</a>
 `)}
})
server.listen(5000)











