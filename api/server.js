const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors =require('cors')
const postRouter =require('./routes/postRoute')
const authRoutes =require('./routes/userRoute')
const cookieParser =require('cookie-parser')
const { requireAuth, checkUser } = require('./middleware/authMiddleawre');

dotenv.config()

app.use(express.json()) 

// {
//         origin: "https://blog-coder-app.vercel.app/",
//           credentials: true,
//   })

app.use(cors(
        {
                origin: "*",
                          credentials: true,
        }
))
app.use(cookieParser());
require('./db/db.js')

 
app.use(checkUser)
app.get('/someProtectedRoute', requireAuth, (req, res) => {
        res.send(`${res.locals.user.username}`);
      });
app.use('/api/v1',postRouter)
app.use('/api/v1/user',authRoutes)

const port = process.env.PORT || 4000;
 
app.listen(port,()=> {   
        console.log(`server is running on port ${port}`)
})     