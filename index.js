const express=require('express')
const app=express()
const port=4000

app.get('/product4',(req,res) => res.send('------------------Cost of Green Bell Pepper is $3.99/lb----------------------'))


app.get('/product5',(req,res) => res.send('Cost of Brocolli is $5.00/ea'))


app.listen(port,() => console.log('App is listening on port 4000'))

