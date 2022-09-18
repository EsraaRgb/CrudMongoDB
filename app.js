import express from 'express'
import connectDB from './DB/connection.js'

const app = express()
app.use(express.json())
const port = 5000



connectDB
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})