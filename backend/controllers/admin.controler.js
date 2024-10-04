import { User } from "../models/user.model.js"
import { Company } from "../models/company.model.js"



export const getStudents = async (req,res)=>{
    try{
        const students = await User.find({ role: 'student' });
        res.json(students)

    }catch(error){
        console.log("get Controler error", error)
    }
}

export const getCompanies =  async (req, res)=>{
    try {
        const companies = await Company.find();
        if (!companies) {
            return res.status(404).json({
                message: "Companies not found.",
                success: false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
    // try{
    //     const comapnies = await Company.find({});
    //     res.json(comapnies)
    // }catch(error){
    //     console.log("get Controler error", error);
        
    // }
}