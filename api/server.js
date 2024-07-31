const express = require('express')
const dotenv = require('dotenv')
const app = express()

const postRouter =require('./routes/postRoute')
dotenv.config()

app.use(express.json()) 

require('./db/db.js')

app.use('/api/v1',postRouter)

const port = process.env.PORT || 4000;

app.listen(port,()=> {   
        console.log(`server is running on port ${port}`)
})