
import { connectDB } from'../../DB/connection.js';
import authRouter from './auth/auth.router.js';
import patientRouter from './patient/patient.router.js';
import doctorRouter from './doctor/doctor.router.js';
import { globalErrorHandler } from '../services/errorHandling.js';


const initApp =(app,express)=>{
    app.use(express.json());
    connectDB();
    app.get('/',(req,res)=>{
        return res.status(200).json({message:"Welcome"});
    })

    app.use('/auth',authRouter);
    app.use('/patient',patientRouter);
    app.use('/doctor',doctorRouter);


    app.use('*',(req,res)=>{
        return res.json({message:"Page not found"});
    })
    app.use( (err,req,res,next)=>{
        if(err){
            return res.json({message:err.message});
        }
    })

    app.use(globalErrorHandler);
}

export default initApp;