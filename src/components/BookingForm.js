import { useState } from "react"

export default function BookingForm(props) {

  


    return (

        <>
            <section id="booking-form" >

                <form id="form" onSubmit={props.submitForm}>


                    <div className="mb-0">

                        <label htmlFor="res-date" className="form-label">Choose date</label>
                        <input
                            className="form-control"
                            type="date"
                            id="res-date"
                            name="date"
                            value={props.form.date}
                            onChange={e => props.setForm(prev => ({
                                ...prev,
                                date: e.target.value
                            }))}

                        />

                    </div>

                    <div className="mb-0">
                        <label htmlFor="res-time" className="form-label">Choose time</label>
                        <select
                            className="form-select"
                            id="res-time "
                            name="time"
                            value={props.form.time}
                            onChange={(e) => props.setForm(prev => ({ ...prev, time: e.target.value }))}



                        >

                            {props.availableTimes.map((availableTime, index) => <option key={index}>{availableTime}</option>)}

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
                            onChange={e => props.setForm(prev => ({
                                ...prev,
                                guests: e.target.value
                            }))}


                        />
                    </div>


                    <div className="mb-0">
                        <label htmlFor="occasion" className="form-label">Occasion</label>
                        <select
                            id="occasion"
                            className="form-select"
                            name="occasion"
                            value={props.form.occasion}
                            onChange={e => props.setForm(prev => ({
                                ...prev,
                                occasion: e.target.value
                            }))}

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