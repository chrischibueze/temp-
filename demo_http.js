
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }

    else if (req.url === '/about') {
        res.end('welcome to our about page')

    }else{
    res.end(`<h1>Oops</h1>
<p>We cant find the page</p>
<a href="/">back to home</a>
 `)
}
})
server.listen(5000)
