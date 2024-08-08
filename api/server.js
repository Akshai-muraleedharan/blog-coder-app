const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors =require('cors')
const postRouter =require('./routes/postRoute')
const authRoutes =require('./routes/userRoute')
const cookieParser =require('cookie-parser')
const { checkUser } = require('./middleware/authMiddleware.js')


dotenv.config()

app.use(express.json()) 

// {
//         origin: "https://blog-coder-app.vercel.app/",
//           credentials: true,
//   })
// const allowedOrigin = 'https://blog-coder-app.vercel.app';
const allowedOrigin = 'http://127.0.0.1:5501';
app.use(cors(
        {
                origin: allowedOrigin,
                  credentials: true,
        }
))
app.use(cookieParser());
require('./db/db.js')


 app.get('*',checkUser)

app.use('/api/v1',postRouter)
app.use('/api/v1/user',authRoutes)

const port = process.env.PORT || 4000;
 
app.listen(port,()=> {   
        console.log(`server is running on port ${port}`)
})      