import {Router} from 'express';
import * as DoctorController from'./controller/doctor.controller.js';
import {auth} from '../../middleware/Auth.js';
import { asyncHandler } from '../../services/errorHandling.js';
const router = Router();
router.get('/',asyncHandler(DoctorController.getDoctor));
router.delete('/delete',asyncHandler(DoctorController.deleteD));
router.patch('/updatePassword',auth(),asyncHandler(DoctorController.updatePassword));




export default router;