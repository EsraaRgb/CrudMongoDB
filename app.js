import express from 'express'
import connectDB from './DB/connection.js'
import * as indexRouter from './modules/index.router.js'
const app = express()
app.use(express.json())
const port = 5000
const baseUrl = '/api/v1'
app.use(`${baseUrl}/auth`,indexRouter.authRouter)
app.use(`${baseUrl}/user`,indexRouter.userRouter)

connectDB()
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
