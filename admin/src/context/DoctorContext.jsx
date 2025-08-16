
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKWARD_URL
    const [dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '')

    const [appointments, setAppointments] = useState([])
    const [dashData , setDashData] = useState(false)
    const [profileData, setProfileData] = useState(false)

    const getAppointments = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/doctor/appointments', { headers: { dToken }})
     
            if (data.success ) {
                //         const reversedAppointments = [...data.appointments].reverse()
                // setAppointments(reversedAppointments)
                // console.log('Appointments set:', reversedAppointments)
                
                setAppointments(data.appointments)
                console.log(data.appointments)

            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }

    const completeAppointment = async (appointmentId) => {

        try {

            const {data} = await axios.post(backendUrl + '/api/doctor/complete-appointment', { appointmentId }, { headers: { dToken }})

            if (data.success) {
                toast.success(data.message)
                getAppointments()
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }
    
    const cancelAppointment = async (appointmentId) => {
        try {

            const {data} = await axios.post(backendUrl + '/api/doctor/cancel-appointment', { appointmentId }, { headers: { dToken }})

            if (data.success) {
                toast.success(data.message)
                getAppointments()
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }

    const getDashData = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/doctor/dashboard', { headers: { dToken } })

            if (data.success) {
                setDashData(data.dashData)
                console.log('Dashboard data:', data.dashData)
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message);
            console.log(error);
            
        }
    }

    const getProfileData = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/doctor/profile', { headers: { dToken } })
            
            if (data.success) {
                setProfileData(data.profileData)
                console.log('Profile data:', data.profileData)
            } else {
                toast.error(data.message)
            }

            
        } catch (error) {
            toast.error(error.message);
            console.log(error);
            
        }

    }

    const value = {
        dToken, setDToken,
        backendUrl,
        appointments, setAppointments,
        getAppointments,
        completeAppointment,
        cancelAppointment
        , getDashData, dashData, setDashData ,
        profileData, setProfileData,
        getProfileData 
    }


    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider