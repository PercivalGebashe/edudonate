import bcrypt from "bcrypt";
import { signToken } from "../utils/jwt.js";
import User from "../models/User.js";

const SALT_ROUNDS = 10;

export async function register(req, res) {

    const { full_name, email, phone_number, password, is_admin = false, associated_school_id = null } = req.body;

    try{

        if(!full_name){
            return res.status(400).json({message: "User name cannot be empty."});
        }

        if(!email){
            return res.status(400).json({message: "Email cannot be empt.y"});
        }

        const existingUser = await User.findByEmail(email);
        if(existingUser){
            return res.status(409).json({message: `User with email ${existingUser.email} already exists.`});
        }

        if(!password){
            return res.status(400).json({message: "Password cannot be empty"})
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = await User.create({
            full_name,
            email,
            phone_number,
            is_admin,
            associated_school_id,
            password: hashedPassword
        });

        const {password: _, ...safeUser} = newUser
        res.status(201).json({message: "User registered successfully", user: safeUser});

    } catch(error){
        console.error("Registration error:", error);
        res.status(500).json({message: "Server error during registration."});
    }
};

export async function login(req, res) {
    const {email, password} = req.body;

    try{
        if(!email){
            return res.status(400).json({message: "Email cannot be empty"})
        }

        if(!password){
            return res.status(400).json({message: "Password cannot be empty"})
        }

        const user = await User.findByEmail(email);

        if(!user){
            return res.status(401).json({message: "Invalid email or password"});
        }

        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            return res.status(401).json({message: "Invalid email or password"});
        }

        const token = signToken({userId: user.user_id, isAdmin: user.is_admin});

        const {password: _, ...safeUser} = user;

        res.json({user: safeUser, token});
    }catch(error){
        console.log(`Login error:`, error);
        res.status(500).json({error: "Server error during login"});
    }
}