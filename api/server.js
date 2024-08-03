const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors =require('cors')
const postRouter =require('./routes/postRoute')
const authRoutes =require('./routes/userRoute')
dotenv.config()

app.use(express.json()) 

app.get('/',(req,res)=>{
        res.send('hello world')
})
app.use(cors())
require('./db/db.js')

app.use('/api/v1',postRouter)
app.use('/api/v1/user',authRoutes)

const port = process.env.PORT || 4000;

app.listen(port,()=> {   
        console.log(`server is running on port ${port}`)
})   