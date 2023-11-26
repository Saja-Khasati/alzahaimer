
import DoctorModel from "../../../../DB/model/doctor.model.js"


export const deleteD = async(req,res,next)=>{
    const d = await DoctorModel.findOne({
        where: {
            confirmEmail: false, // search for user who confirm email is false
        }
    });
    if (d) {
        await DoctorModel.destroy({
            where: {
                confirmEmail: false, 
            }
        });
        return res.status(400).json({ message: "Email confirmation failed. Please confirm your email", d });
    } else {
        return res.status(404).json({ message: "User not found with unconfirmed email" });
    }
}

export const updatePassword = async(req,res,next)=>{ 
    const {oldPassword,newPassword}=req.body;
    const doc = await DoctorModel.findByPk()
        .then((user) => { return res.json(doc)});
    

}

export const getDoctor = async(req,res,next)=>{
    const doctor = await DoctorModel.findAll();
    return res.status(200).json({message:"success",doctor});
  }


  export const addPatient = async (req,res,next)=>{
    const {PatientName,email,age,gender,phoneNumber} = req.body;
    const patient = await PatientModel.findOne({
      where:{
          email:email,
      }
  });
  if(patient){
    return res.status(409).json({message:"email is already exists"});
  }
  const addPatient = await PatientModel.create({id:customAlphabet('123456',4),PatientName,email,age,gender,phoneNumber},{new:true})
   return res.status(201).json({message:"success",addPatient})
 }

 export const getPatient = async(req,res,next)=>{
    const patient = await PatientModel.findAll();
    return res.status(200).json({message:"success",patient});
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


  export const updateDoctor = async (req,res,next) => {
    const { id } = req.params;
    const userCount = await DoctorModel.findOne({
      where:{
          id,
      }
  });
  if (userCount){
    const u = await DoctorModel.update(req.body, {
      where: {
          id
      }
  },
  {new:true})
  return res.json({message:"success",u});
  
  }
   return res.json({message:'fail to update user data'});
    
  }