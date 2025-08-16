import express from 'express'
import { registerUser ,loginUser, getProfile, updateProfile, bookAppointment , listAppointment ,cancelAppointment , paymentRazorPay, verifyRazorpay} from '../controllers/userController.js'
import authUser from '../milddlewares/authUser.js'
import upload from '../milddlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register' , registerUser)
userRouter.post('/login' , loginUser)

userRouter.get('/get-profile', authUser , getProfile)
userRouter.post('/update-profile',authUser,upload.single('image'),updateProfile) // two middlewares , 1- image and 2- authUser
userRouter.post('/book-appointment' ,authUser , bookAppointment ) 
userRouter.get('/appointments' ,authUser , listAppointment ) 
userRouter.post('/cancel-appointment' , authUser , cancelAppointment)
userRouter.post('/payment-razorpay' , authUser , paymentRazorPay )
userRouter.post('/verifyRazorpay' , authUser , verifyRazorpay)


export default userRouter