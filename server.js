const express = require('express')
const app = new express()

// 允许跨域
app.all('*',function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','*')
  next()
})

app.get('/data', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
