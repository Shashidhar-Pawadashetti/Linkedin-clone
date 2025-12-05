import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import Profile from "../models/profile.model.js"

export const register = async(req,res) => {
    try{

        const {name, email, password, username} = req.body;

        if(!name || !email || !password || !username){
            return res.status(400).json({message: "All fields are required"})
        }

        const userExists = await User.findOne({email: email});
        if(userExists){
            return res.status(400).json({message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            username
        })

        await user.save();

        const profile = new Profile({
            user: user._id,
        })

        return res.status(201).json({message: "User created successfully"})

    } catch(error){
        return res.status(500).json({message: error.message})
    }
}

