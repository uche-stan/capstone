import HomePage from "./HomePage"
import BookingPage from "./BookingPage"
import { Routes, Route } from "react-router-dom"
import { useReducer, useState } from "react"
import { fetchAPI } from "./api"



const initializeTimes = () => {

    const date = new Date()

    return fetchAPI(date)
}

const updateTimes = (state, action) => {

    const date = new Date(Date.parse(action.payload))

    switch (action.type) {

        case "date":

            {
                return  fetchAPI(date)
            }

        default:

            return state;




    }

}
export default function Main() {

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '-' + mm + '-' + dd;



    const [form, setForm] = useState({

        date: `${formattedToday}`,
        time: "",
        guests: "",
        occasion: "",
    })


    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())


    const submitForm = (e) => {

        e.preventDefault();

        alert(`Date: ${form.date}, Time: ${form.time}, Guests: ${form.guests}, Occasion: ${form.occasion} `)

    }




    return (

        <main id="main" >



            <Routes>

                <Route path="/" element={<HomePage />}></Route>

                <Route path="/booking" element={<BookingPage
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    form={form}
                    setForm={setForm}
                    submitForm={submitForm}
                />}>

                </Route>





            </Routes>





        </main>
    )
}

