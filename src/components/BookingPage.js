import BookingForm from "./BookingForm"
import { useState } from "react"

export default function BookingPage(props) {

    const dates = new Date();

    const [form, setForm] = useState({

        date: "",
        time: "",
        guests: "",
        occasion: "",

    })


    const handleChange = (e) => {

        setForm(prevForm => {
            return {
                ...prevForm,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleDate = e =>{

        setForm(prevForm => {
            return {
                ...prevForm,
                date: e.target.value,
            }
        });

        {props.dispatch({type: "01/31/2023"})}

    }


    const handleForm = (e) => {

        e.preventDefault();
       
    }

    return (

        <>

            <section id="booking-page">

                <div className="title-box">
                    <h2 className="text-center">Reserve A Table </h2>
                </div>

                <BookingForm
                    form={form}
                    handleChange={handleChange}
                    handleForm={handleForm}
                    availableTimes={props.availableTimes}
                    updateTimes={props.updateTimes}
                    dispatch = {props.dispatch}
                    handleDate= {handleDate}
                />

            </section>


        </>
    )
}