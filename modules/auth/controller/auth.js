import UserModel from "../../../DB/models/User.js";
import bcrypt from 'bcryptjs'


export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password, cPassword } = req.body;
    if (password === cPassword) {
      const user = await UserModel.findOne({ email });
      if (user) {
        res.json({ message: `email exists` });
      } else {
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new UserModel({ firstName, lastName, email, password: hashedPassword });
        const savedUser = await newUser.save();
        res.json({ message: `Done`, savedUserID: savedUser._id });
      }
    } else {
      res.json({ message: `password and Confirmed password doesn't match` });
    }
  } catch (error) {
    res.json({ message: `catch error`, error });
  }
}


export const signIn = async (req, res) => {
try {
  const {email,password}=req.body
  const user = await UserModel.findOne({email})
  if (user) {
    const match = await bcrypt.compare(password,user.password)
    if (match) {
      res.json({message:'Done',user})
      
    } else {
    res.json({ message: `In-valid account password` });
    }
    
  } else {
    res.json({ message: `In-valid account  email ` });

  }
  
} catch (error) {
  res.json({message:'catch error',error})
}  
}