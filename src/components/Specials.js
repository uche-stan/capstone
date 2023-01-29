import greekSalad from '../assets/icons_assets/greek salad.jpg'
import bruchetta from '../assets/icons_assets/bruchetta.svg'
import lemonDessert from '../assets/icons_assets/lemon dessert.jpg'
import Card from './Card'

export default function Specials() {

    return (

        <section id="specials">


            <div className='specials-description'>

                <h2>This Weeks Specials</h2>

                <button className='btn btn-warning'>Menu</button>
            </div>

            <div className='order d-sm-none'>

                <h2>ORDER FOR DELIVERY!</h2>

                <div className='order-button-box '>
                    <button className='btn btn-light order-button '>Lunch</button>
                    <button className='btn btn-light order-button'>Mains</button>
                    <button className='btn btn-light order-button'>Desserts</button>
                    <button className='btn btn-light order-button'>A La carte</button>
                    <button className='btn btn-light order-button'>Specials</button>
                
                </div>


            </div>

            <Card />

           


        </section>
    )
}


