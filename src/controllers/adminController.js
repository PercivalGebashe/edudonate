import { tr } from "zod/v4/locales";
import User from "../models/User.js"

export async function updateRole(req,res) {

    const {contact_email, role} = req.body.userDetails
    try{
        const result = await User.updateRole(contact_email, role);
        
        if(result === 1){
            return res.status(204).json({message: "User role updated successfully"});
        }
    }catch(error){
        console.log("Update error", error);
        res.status(500).json({message: "Server error during update."});
    }
}

export async function updateAssociatedSchoolId(req, res) {
    const {contact_email, associated_school_id} = req.body.userDetails
    
    try {
        const result = await User.updateAssociatedSchoolId(contact_email, associated_school_id);

        if(result === 1){
            return res.status(204).json({message: "Associated school ID updated successfully"});
        }
        
    } catch (error) {
        console.log("Update error", error);
        res.status(500).json({message: "Servicer error duting update"});
    }
}