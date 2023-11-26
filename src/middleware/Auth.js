import jwt from 'jsonwebtoken';
import DoctorModel from '../../DB/model/doctor.model.js';
const roles = {
    Doctor:'Doctor',Patient:'Patient'
}


export const auth = ()=>{
    return async (req,res,next)=>{
        const {authorization} = req.headers;
        if(!authorization?.startsWith(process.env.BEARERKEY)){
            return res.status(400).json({message:"Invalid authorization"});
        }
        const token = authorization.split(process.env.BEARERKEY)[1];
       const decoded = jwt.verify(token,process.env.LOGINSECRET);
        if(!decoded){
            return res.status(400).json({message:"Invalid authorization"});
        }
        const doctor = await DoctorModel.findByPk(decoded.exp);
        if(!doctor){
            return res.status(404).json({message:"not registered user"});
        }
        
        req.doctor=doctor;
        
        next();
    }
   
   

    
}