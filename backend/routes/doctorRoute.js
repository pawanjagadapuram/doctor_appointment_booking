import express from 'express';
import { doctorList, loginDoctor, appointmentsDoctor, appointmentComplete, appointmentCancel, doctorDashboard, updateDoctorProfile, doctorProfile } from '../controllers/doctorController.js';
import authDoctor from '../middleware/authDoctor.js';

const doctorRouter = express.Router();

doctorRouter.get('/list', doctorList);
doctorRouter.post('/login', loginDoctor);
doctorRouter.get('/appointments',authDoctor, appointmentsDoctor);
doctorRouter.post('/complete-appointment',authDoctor, appointmentComplete);
doctorRouter.post('/cancel-appointment',authDoctor, appointmentCancel);
doctorRouter.get('/dashboard',authDoctor, doctorDashboard);
doctorRouter.post('/update-profile',authDoctor, updateDoctorProfile);
doctorRouter.get('/profile',authDoctor, doctorProfile);

export default doctorRouter;
