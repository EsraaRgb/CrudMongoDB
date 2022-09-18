import mongoose from "mongoose";

const connectDB = async ()=>{
    return await mongoose.connect('mongodb://localhost:27017/Assignment6')
    .then(()=>{
        console.log('Connected To DB');
    })
    .catch(()=>{
        console.log(`Failed To Connect To DB `);
    })
}

export default connectDB