import express from 'express'
import { doctorList, loginDoctor , appointmentsDoctor, appointmentcomplete, appointmentCancel , doctorDashboard, doctorprofile, updateDoctorProfile} from '../controllers/doctorController.js'
import authDoctor from '../milddlewares/authDoctor.js'

const doctorRouter = express.Router()

doctorRouter.get('/list' , doctorList)

doctorRouter.post('/login' , loginDoctor)
doctorRouter.get('/appointments' , authDoctor , appointmentsDoctor)
doctorRouter.post('/complete-appointment' , authDoctor , appointmentcomplete)
doctorRouter.post('/cancel-appointment' , authDoctor , appointmentCancel)
doctorRouter.get('/dashboard' , authDoctor , doctorDashboard)
doctorRouter.get('/profile', authDoctor,doctorprofile)
doctorRouter.post('/update-profile', authDoctor, updateDoctorProfile)


export default doctorRouter