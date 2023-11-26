import {Router} from 'express';
import * as AuthController from'./controller/auth.controller.js';
import { asyncHandler } from '../../services/errorHandling.js';
const router = Router();
router.post('/signup',asyncHandlercHandler(AuthController.signup));
router.post('/signin',asyncHandler(AuthController.signin));
router.get('/ConfirmEmail/:token',asyncHandler(AuthController.ConfirmEmail));
router.patch('/sendCode',asyncHandler(AuthController.sendCode));
router.patch('/forgetPassword',asyncHandler(AuthController.forgotPassword));
router.delete('/logOut',asyncHandler(AuthController.logOut));

export default router;