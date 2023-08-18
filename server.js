const express = require('express');
const { studentRouter } = require('./Routes/StudentRoutes');


const app = express()

app.use(express.json())
app.use('/fee',studentRouter)


app.use((err, req, res, next)=>{
    res.json({error:err})
})


app.listen('4400',()=>{
    console.log('server running on port 4400');
})