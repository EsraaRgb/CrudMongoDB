import express from 'express'

const app = express()
app.use(express.json())
const port = 5000



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})