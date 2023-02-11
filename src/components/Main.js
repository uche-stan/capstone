import HomePage from "./HomePage"
import BookingPage from "./BookingPage"
import { Routes, Route } from "react-router-dom"
import { useReducer, useState } from "react"
import { fetchAPI, submitAPI } from "./api"
import { useNavigate } from "react-router-dom"
import BookingConfirmation from "./BookingConfirmation"



const initializeTimes = () => {

    const date = new Date()

    return fetchAPI(date)
}

const updateTimes = (availableTimes, action) => {

    const date = new Date(Date.parse(action.payload))

    switch (action.type) {

        case "date":

            {
                return fetchAPI(date)
            }

        default:

            return availableTimes;




    }

}
export default function Main() {

  
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

const navigate = useNavigate()
    const submitForm = formData => {

      return submitAPI(formData) ? navigate("/booking-confirmation"): null

    }




    return (

        <main id="main" >



            <Routes>

                <Route path="/" element={<HomePage />}></Route>

                <Route path="/booking" element={<BookingPage
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm}
                />}>

                </Route>


                <Route path="/booking-confirmation" element={<BookingConfirmation />}></Route>





            </Routes>





        </main>
    )
}

