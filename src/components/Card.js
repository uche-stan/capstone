import greekSalad from '../assets/icons_assets/greek salad.jpg'
import bruchetta from '../assets/icons_assets/bruchetta.svg'
import lemonDessert from '../assets/icons_assets/lemon dessert.jpg'
import deliveryIcon from '../assets/icons_assets/delivery-icon.png'

export default function Card() {


    return (

        <section id='card'>


            <div className='card-box'>

                <div className="kard" >

                    <img src={greekSalad} alt="Greek salad" className='kard-image' />

                    <div className='kard-body'>


                        <div className='card-title-box'>
                            <h5 className="kard-title title-one">Greek Salad</h5>
                            <h5 className="kard-title title-two ">$12:99</h5>


                            <p className="kard-text my-2 mx-2 ">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>

                        </div>
                        <div className='text-center my-3'>
                            <a href="#" type='button' className="btn btn-warning" >Order a delivery <img src={deliveryIcon} className='button-icon' /></a>
                        </div>

                    </div>

                </div>

                <div className="kard" >

                    <img src={bruchetta} alt="Bruchetta" className='kard-image' />

                    <div className='kard-body'>


                        <div className='card-title-box'>
                            <h5 className="kard-title title-one">Bruchetta</h5>
                            <h5 className="kard-title title-two ">$5:99</h5>


                            <p className="kard-text my-2 mx-2 ">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        </div>
                        <div className='text-center my-3'>
                            <a href="#" type='button' className="btn btn-warning" >Order a delivery <img src={deliveryIcon} className='button-icon' /></a>
                        </div>

                    </div>

                </div>

                <div className="kard" >

                    <img src={greekSalad} alt="Lemon desert" className='kard-image ' />

                    <div className='kard-body'>


                        <div className='card-title-box'>
                            <h5 className="kard-title title-one">Lemon Dessert</h5>
                            <h5 className="kard-title title-two ">$5:00</h5>


                            <p className="kard-text my-2 mx-2 ">text to build on the card title and make up the bulk of the card's content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.</p>

                        </div>
                        <div className='text-center my-3'>
                            <a href="#" className="btn btn-warning" >Order a delivery <img src={deliveryIcon} className='button-icon' /></a>
                        </div>

                    </div>

                </div>


            </div>




        </section>

    )
}