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