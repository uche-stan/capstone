import BookingForm from "./BookingForm"
import { useState } from "react"

export default function BookingPage(props) {
   
    return (

        <>

            <section id="booking-page">

                <div className="title-box">
                    <h2 className="text-center">Reserve A Table </h2>
                </div>

                <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} />

            </section>


        </>
    )
}