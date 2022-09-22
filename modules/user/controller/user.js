import UserModel from '../../../DB/models/User.js'
export const updateUserById =async (req, res) => {
    try {
        const {id} = req.params
    const {firstName,lastName,email,password,age}=req.body
    const updatedUser = await UserModel.findByIdAndUpdate(id,
        {firstName,lastName,email,password,age},{new:true})
        res.json({updatedUser})
    } catch (error) {
        res.json({message:'catch error',error})
    }
};
export const deleteById = async (req, res) => {
    try {
        const {id} = req.params
        const deletedUser = await UserModel.findByIdAndDelete(id)
        if (deletedUser) {
            res.json({message:'Done',deletedUser})

        } else {
            res.json({message:'Cannot Delete User'})
        }
        
    } catch (error) {
        res.json({message:'catch error',error})
        
    }
};

export const getUserById = async (req, res) => {
    try {
        const {id} = req.params
        const user = await UserModel.findById(id)
        if (user) {
            res.json({message:'Done',user})

        } else {
            res.json({message:'Cannot Get User'})
        }
        
    } catch (error) {
        res.json({message:'catch error',error})
        
    }
};

export const updateGroup= async (req, res) => {
    const ubdatedUsers = await UserModel.updateMany({age:null},{age:21},{new:true})
    res.json(ubdatedUsers)

};


export const deleteGroup = async (req, res) => {
    const deletedUsers = await UserModel.deleteMany({age:21})
    res.json(deletedUsers)
};

export const getAllUsersContainLetter = async (req, res) => {
    const {letter} = req.query
    const users = await UserModel.find({
        $or:[
            {firstName:new RegExp(letter)},
            {lastName:new RegExp(letter)}
        ]
    })
    res.json(users)
    
};
export const getAllUsersContainsubstring = async(req, res) => {
    const {substring} = req.query
    const users = await UserModel.find({
        firstName:new RegExp(substring)
    })
    res.json(users)
};
export const getAllUsersFNameEndAgeGreater = async(req, res) => {
    const {letter,age}=req.query
    const users = await UserModel.find({
        $and:[
            {firstName:new RegExp(letter+'$')},
            { age:{$gt:age}}
        ]
    })
    res.json(users)
};
export const getAllUsersFNameStartAgeLess = async (req , res) => {
    const {letter,age}=req.query
    const users = await UserModel.find({
        $and:[
            {firstName:new RegExp('^'+letter)},
            { age:{$lt:age}}
        ]
    })
    res.json(users)

};
