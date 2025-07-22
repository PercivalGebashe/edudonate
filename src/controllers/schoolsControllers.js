import bcrypt from "bcrypt";
import { signToken } from "../utils/jwt.js";
import User from "../models/User.js";
import School from "../models/School.js";

export async function getSchool(req, res) {

    try{
        const school_name = req.query.schoolName;
    if(school_name){
        
        const schools = await School.findBySchoolName(school_name);
        res.status(200).json({shools: schools});
    }
    else{
        const schools = await School.findAllSchools();
        res.status(200).json({shools: schools});
    }
    }catch(error){
        console.log("error: ", error);
        res.status(500).json({message: "Server error during school search"});
    }
}