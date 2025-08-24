import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoutes.js'
import  userRouter  from './routes/userRoute.js'

// app config 


const app = express()
const port = process.env.PORT || 4000 
connectDB()
connectCloudinary()
// middlewares 

//app.use(cors()) // allow frontend to connect with the backend


// List of allowed origins
const allowedOrigins = [
    process.env.ALLOWED_ORIGIN1,
    process.env.ALLOWED_ORIGIN2
];

const corsOptions = {
   // origin: process.env.ALLOWED_ORIGIN || '*',
     origin: allowedOrigins , 
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
    allowedHeaders: ['Content-Type', 'Authorization' , 'token' ,  "dtoken"]
};


app.use(cors(corsOptions))
app.use(express.json( ))

app.use('/api/doctor' , doctorRouter)
app.use('/api/user' ,userRouter )

// api endpoints 
app.use('/api/admin',adminRouter)
// localhost:4000/api/admin/add-doctor

app.get('/' , (req,res)=> {
    res.send('API WORKING ')
})

app.listen(port , ()=> 
    console.log("server started" , port)
)