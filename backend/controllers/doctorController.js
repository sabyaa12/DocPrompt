import doctorModel from "../models/doctorModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"
const changeAvailability = async (req, res) => {
  try {

    const { docId } = req.body


    const docData = await doctorModel.findById(docId)
    await doctorModel.findByIdAndUpdate(docId, { available: !docData.available })
    res.json({ success: true, message: 'Availabilty change' })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const doctorList = async (req, res) => {
  try {

    const doctors = await doctorModel.find({}).select(['-password', '-email'])

    res.json({ success: true, doctors })

  } catch (error) {

    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API for doctor login 
const loginDoctor = async (req, res) => {

  try {
    const { email, password } = req.body
    const doctor = await doctorModel.findOne({ email })

    if (!doctor) {
      return res.json({ success: false, message: 'Invalid Credentials' })
    }

    const isMatch = await bcrypt.compare(password, doctor.password)

    if (isMatch) {

      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET)
      res.json({ success: true, token })

    } else {
      return res.json({ success: false, message: 'Invalid Credentials' })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
// API to get doctor appointments for doctor pannel 
const appointmentsDoctor = async (req, res) => {
  try {

    const docId = req.docId
    const appointments = await appointmentModel.find({ docId })

    res.json({ success: true, appointments })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}


// API to make appointment completed for doctor pannel

const appointmentcomplete = async (req, res) => {
  try {
    const docId = req.docId
    const { appointmentId } = req.body

    const appointmentData = await appointmentModel.findById(appointmentId)

    if (appointmentData && appointmentData.docId === docId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
      res.json({ success: true, message: 'Appointment completed' })
    } else {
      return res.json({ success: false, message: 'Mark failed' })
    }

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to cancel appointment completed for doctor pannel

const appointmentCancel = async (req, res) => {
  try {
    const docId = req.docId
    const { appointmentId } = req.body

    const appointmentData = await appointmentModel.findById(appointmentId)

    if (appointmentData && appointmentData.docId === docId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
      res.json({ success: true, message: 'Appointment cancelled' })
    } else {
      return res.json({ success: false, message: 'cancellation failed' })
    }

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get dashboard data for doctor pannel 

const doctorDashboard = async (req, res) => {
  try {
    const docId = req.docId
    const appointments = await appointmentModel.find({ docId })

    let earnings = 0

    appointments.map((item) => {
      if (item.isCompleted || item.payment) {
        earnings += item.amount
      }
    })

    let patients = []

    appointments.map((item) => {
      if (!patients.includes(item.userId)) {
        patients.push(item.userId)
      }
    })

    const dashData = {
      earnings,
      appointments: appointments.length,
      patients: patients.length,
      latestAppointments: appointments.reverse().slice(0, 5)
    }
    res.json({ success: true, dashData })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get doctor profile for doctor panel 

const doctorprofile = async (req, res) => {

  try {

    const docId = req.docId
    const profileData = await doctorModel.findById(docId).select(['-password'])
    if (profileData) {
      res.json({ success: true, profileData })
    } else {
      res.json({ success: false, message: 'Doctor not found' })
    }

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })

  }
}

// API update doctor profile data from Doctor pannel 

const updateDoctorProfile = async (req, res) => {

  try {

    const docId = req.docId
    const { fees, address, available } = req.body

    await doctorModel.findByIdAndUpdate(docId, { fees, address, available })

    res.json({ success: true, message: 'Profile updated successfully' })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })

  }

}

export { changeAvailability, doctorList, loginDoctor, appointmentsDoctor, appointmentCancel, appointmentcomplete, doctorDashboard, doctorprofile, updateDoctorProfile }
