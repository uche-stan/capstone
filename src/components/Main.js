import HomePage from "./HomePage"
import BookingPage from "./BookingPage"
import { Routes, Route } from "react-router-dom"
import {  useReducer } from "react"

const updateTimes = (availableTimes, action) => {

    

    if (action.type === "01/31/2023") return  ["17:00", "18:00","19:00", "20:00"  ] 

    return availableTimes;
}

export default function Main() {


    const initializeTimes = ()=>{

        return ["17:00", "18:00","19:00", "20:00","21:00", "22:00", ]
    }


    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())



  

    return (

        <main id="main" >



            <Routes>

                <Route path="/" element={<HomePage />}></Route>

                <Route
                    path="/booking"
                    element={<BookingPage
                        availableTimes={availableTimes}
                        updateTimes={updateTimes}
                        dispatch = {dispatch}
                    />}>

                </Route>



            </Routes>





        </main>
    )
}