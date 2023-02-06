import HomePage from "./HomePage"
import BookingPage from "./BookingPage"
import { Routes, Route } from "react-router-dom"
import { useReducer, useState } from "react"






const initializeTimes =()=>{

    return [  { time: "17:00" }, { time: "18:00" }, { time: "19:00" },
       { time: "20:00" }, { time: "21:00" }, { time: "22:00" },
    ]
}

const updateTimes =(state, action) =>{

    switch(action.type){

        case "selected date":

         {
            return [  { time: "17:00" }, { time: "18:00" }, { time: "19:00" },
            { time: "20:00" }, { time: "21:00" }, { time: "22:00" }, { time: "30:00" }
         ]
        }

        default:

        return state;




    }

}
export default function Main() {

    // const [availableTimes, setAvailableTimes] = useState([

    //     { time: "17:00" }, { time: "18:00" }, { time: "19:00" },
    //     { time: "20:00" }, { time: "21:00" }, { time: "22:00" },

    // ])

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    return (

        <main id="main" >



            <Routes>

                <Route path="/" element={<HomePage />}></Route>

                <Route path="/booking" element={<BookingPage 
                availableTimes={availableTimes} dispatch={dispatch} />}>

                </Route>

               



            </Routes>





        </main>
    )
}

