import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';


export const MainContext = createContext()
export default function Context({ children }) {

    const [FBdata, setFBdata] = useState([])
    const ApiUrl = "http://localhost:5000"
    const user_url = "/users"
    const toastNotify = (msg, status) => toast(msg, { type: status == true ? 'success' : 'error' });

    const fetchAllFBdata = () => {
        axios.get(ApiUrl + user_url).then(
            (succes) => {
                setFBdata(succes.data.user)
            }
        ).catch(
            (error) => {
                console.log(error)
                toastNotify("Failed to load data", false)
            }
        )
    }


    useEffect(
        () => {
            fetchAllFBdata()
        }, []
    )

    return (
        <>
        <MainContext.Provider value={{ fetchAllFBdata, FBdata, setFBdata, ApiUrl, user_url, toastNotify}}>
            {children}
        </MainContext.Provider>
        <ToastContainer autoClose = {1000} />

        </>
    )
}
