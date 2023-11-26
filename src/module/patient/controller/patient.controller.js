import PatientModel from '../../../../DB/model/patient.model.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { sendEmail } from '../../../services/sendEmail.js';
import { customAlphabet } from 'nanoid'

    
  
  export const getSpecificPatient =async(req,res,next)=>{
    const { id } = req.params;
    const p = await PatientModel.findByPk(id);
    if(p){
    return res.json({message:"success",p});
    }
    return res.json({message:"patient not found"});
}


export const updatePatient = async (req,res,next) => {
  const { id } = req.params;
  const userCount = await PatientModel.findOne({
    where:{
        id,
    }
});
if (userCount){
  const u = await PatientModel.update(req.body, {
    where: {
        id
    }
},
{new:true})
return res.json({message:"success",u});

}
 return res.json({message:'fail to update user data'});
  
}
