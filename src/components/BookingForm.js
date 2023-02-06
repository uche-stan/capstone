import { useState } from "react"

export default function BookingForm(props) {

   

    const options = props.availableTimes.map((availableTime, index) => <option key={index}>{availableTime.time}</option>)

    const [form, setForm] = useState({

        date: "",
        time: "",
        guests: "",
        occasion: "",
    })

    const handleChange = e => {

        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

        
    }

    const handleDate = e => {

        setForm(prev => ({ ...prev, date: e.target.value }))

        props.dispatch({type: "selected date"})
    }


const onSubmit =(e)=>{

    e.preventDefault();

    alert(`Date: ${form.date}, Time: ${form.time}, Guests: ${form.guests}, Occasion: ${form.occasion} `)

}


    return (

        <>
            <section id="booking-form" >

                <form id="form" onSubmit={onSubmit}>


                    <div className="mb-0">

                        <label htmlFor="res-date" className="form-label">Choose date</label>
                        <input
                            className="form-control"
                            type="date"
                            id="res-date"
                            name="date"
                            value={form.date}
                            onChange={handleDate}

                        />

                    </div>

                    <div className="mb-0">
                        <label htmlFor="res-time" className="form-label">Choose time</label>
                        <select
                            className="form-select"
                            id="res-time "
                            name="time"
                            value={form.time}
                            onChange={handleChange}


                        >

                            {options}

                        </select>


                    </div>

                    <div className="mb-0">
                        <label htmlFor="guests" className="form-label">Number of guests</label>
                        <input
                            className="form-control"
                            type="number"
                            placeholder="1" min="1"
                            max="10"
                            id="guests"
                            name="guests"
                            value={form.guests}
                            onChange={handleChange}


                        />
                    </div>


                    <div className="mb-0">
                        <label htmlFor="occasion" className="form-label">Occasion</label>
                        <select
                            id="occasion"
                            className="form-select"
                            name="occasion"
                            value={form.occasion}
                            onChange={handleChange}

                        >

                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    <input className="btn btn-warning mt-3 book-table-button" type="submit" value="Make Your reservation" />

                </form>

            </section>


        </>
    )
}