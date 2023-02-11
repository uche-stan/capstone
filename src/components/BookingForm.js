import { useState } from "react"

export default function BookingForm(props) {


    const [form, setForm] = useState({

        date: "",
        time: "Select available time",
        guests: "",
        occasion: "Select occasion",
    })

    const isValid = () => {

        return form.date && form.time && form.guests >= 2 && form.occasion != "Select occasion"
    }


    const handleSubmit = e => {

        e.preventDefault();
        props.submitForm(form)

    }

    return (

        <>
            <section id="booking-form" >

                <form id="form" onSubmit={handleSubmit}>


                    <div className="mb-0">

                        <label htmlFor="res-date" className="form-label">Choose date <span style={{color:"red"}}>*</span></label>
                        <input
                            className="form-control"
                            type="date"
                            id="res-date"
                            name="date"
                            value={form.date}
                            onChange={e => {
                                setForm(prev => {
                                    return {
                                        ...prev,
                                        date: e.target.value
                                    }
                                })

                                props.dispatch({ type: "date", payload: e.target.value })
                            }}

                        />

                    </div>

                    <div className="mb-0">
                        <label htmlFor="res-time" className="form-label">Choose time <span style={{color:"red"}}>*</span></label>
                        <select
                            className="form-select"
                            id="res-time "
                            name="time"
                            value={form.time}
                            onChange={(e) => setForm(prev => ({ ...prev, time: e.target.value }))}



                        >

                            {props.availableTimes.map((availableTime, index) => <option key={index}>{availableTime}</option>)}

                        </select>


                    </div>

                    <div className="mb-0">
                        <label htmlFor="guests" className="form-label">Number of guests <span style={{color:"red"}}>*</span></label>
                        <input
                            className="form-control"
                            type="number"
                            placeholder="1" min="1"
                            max="10"
                            id="guests"
                            name="guests"
                            onChange={e => setForm(prev => ({
                                ...prev,
                                guests: e.target.value
                            }))}


                        />
                    </div>


                    <div className="mb-0">
                        <label htmlFor="occasion" className="form-label">Occasion <span style={{color:"red"}}>*</span></label>
                        <select
                            id="occasion"
                            className="form-select"
                            name="occasion"
                            value={form.occasion}
                            onChange={e => setForm(prev => ({
                                ...prev,
                                occasion: e.target.value
                            }))}

                        >
                            <option>Select occasion</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    <input disabled={!isValid()} className="btn btn-warning mt-3 book-table-button" type="submit" value="Make Your reservation" />
                    <p><i>All field marked with red astericks <span style={{color:"red"}}>*</span>  are compulsory</i></p>

                </form>

            </section>


        </>
    )
}