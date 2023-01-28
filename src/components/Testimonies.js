import personOne from '../assets/testimonies/team-1.jpg'
import personTwo from '../assets/testimonies/team-2.jpg'
import personThree from '../assets/testimonies/team-3.jpg'
import personFour from '../assets/testimonies/team-4.jpg'

export default function Testimonies() {

    return (

        <section id="testimonies">
            <h2>Testimonies</h2>

            <div className=''>




                <div className="card" style={{ width: "18rem" }}>

                    <div className="card-body">

                        <h5 className="card-title">Ratings</h5>

                        <div>
                            <img src={personOne} alt="testimony image one " height={200} />

                            <h5 className="card-title">Name</h5>
                        </div>

                        <p className="card-text">Review Text</p>


                    </div>

                </div>

                <div className="card" style={{ width: "18rem" }}>

                    <div className="card-body">

                        <h5 className="card-title">Ratings</h5>

                        <div>
                            <img src={personTwo} alt="testimony image Two " height={200} />

                            <h5 className="card-title">Name</h5>
                        </div>

                        <p className="card-text">Review Text</p>


                    </div>

                </div>

                <div className="card" style={{ width: "18rem" }}>

                    <div className="card-body">

                        <h5 className="card-title">Ratings</h5>

                        <div>
                            <img src={personThree} alt="testimony image Three " height={200} />

                            <h5 className="card-title">Name</h5>
                        </div>

                        <p className="card-text">Review Text</p>


                    </div>

                </div>

                <div className="card" style={{ width: "18rem" }}>

                    <div className="card-body">

                        <h5 className="card-title">Ratings</h5>

                        <div>
                            <img src={personFour} alt="testimony image Four " height={200} />

                            <h5 className="card-title">Name</h5>
                        </div>

                        <p className="card-text">Review Text</p>


                    </div>

                </div>






            </div>



        </section>
    )
}