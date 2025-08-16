
import { useState } from "react";
import { createContext } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'
// import { changeAvailability } from "../../../backend/controllers/doctorController.js";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken , setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken'):'' ) // if you login once no need to relogin again , because of th token , it is storing the value 
    const backendUrl = import.meta.env.VITE_BACKWARD_URL

    const [doctors , setDoctors]= useState([])
    const [appointments , setAppointments] = useState([])
     const [dashData , setDashData] = useState(false)

    const getAllDoctors = async() => {
        try {

            const {data} = await axios.post(backendUrl + '/api/admin/all-doctors' , {} ,{headers:{aToken}})

            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors)
            } else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }
   const  changeAvailability = async (docId) => {
    try {
        const {data} = await axios.post(backendUrl + '/api/admin/change-availability',{docId} , {headers:{aToken}})

        if(data.success){
            toast.success(data.message)
            getAllDoctors()
        } else {
            toast.error(data.message)
        }

    } catch (error) {
        toast.error(error.message)
    }
   }

   const getAllAppointments = async() => {

    try {

        const{data} = await axios.get(backendUrl + '/api/admin/appointments' , {headers:{aToken}})

        if(data.success){
            setAppointments(data.appointments)
            console.log(data.appointments)
        }else{
            toast.error(data.message)
        }
        
    } catch (error) {
        toast.error(error.message)
    }
   }

   const cancelAppointment = async(appointmentId) => {
    try {
        
        const{ data } = await axios.post(backendUrl + '/api/admin/cancel-appointment' , {appointmentId} ,{headers:{aToken}})

        if(data.success){
            toast.success(data.message)
            getAllAppointments()
        } else{
            toast.error(data.message)
        }

    } catch (error) {
        toast.error(error.message)
    }
   }

   const getDashData = async () => {
    try {
        const { data } = await axios.get(backendUrl + '/api/admin/dashboard',{headers:{aToken}})

        console.log("Full API response:", data)

        if(data.success){
            setDashData(data.dashData)
            console.log(data.dashData)
        }else{
            toast.error(data.message)
        }
        
    } catch (error) {
        toast.error(error.message)
        console.log(error)
    }
   }


    const value = {
        aToken , setAToken,
        backendUrl,doctors,
        getAllDoctors,
        changeAvailability,
        appointments,setAppointments,
        getAllAppointments,
        cancelAppointment,
        dashData, setDashData,
         getDashData
     
    }

    
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider