import express from "express";
//import  { User }  from "../models/user.model";
import { getStudents,getCompanies } from "../controllers/admin.controler.js";



const router = express.Router();

router.route("/students").get(getStudents)
//create a route to view comapnies 

router.route("/companies").get(getCompanies)


export default router;