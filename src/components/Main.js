import HomePage from "./HomePage"
import BookingPage from "./BookingPage"
import { Routes, Route } from "react-router-dom"

export default function Main() {


    return (

        <main id="main" >




           

           

            <Routes>

                <Route path="/" element={<HomePage />}></Route>

                <Route path="/booking" element={<BookingPage />}></Route>



            </Routes>





        </main>
    )
}