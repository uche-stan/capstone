import heroImage from '../assets/icons_assets/restaurantfood.jpg'
import { Link } from 'react-router-dom'


export default function Hero() {

    return (

        <section id="hero">

            <div className='hero-box'>

                <div className='hero-description'>
                    <h1>Little Lemon</h1>

                    <h2>Chicago</h2>

                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

                    <Link to="/booking" ><button className='btn btn-warning book-table-button mt-5'>Reserve a table</button></Link>
                </div>

                <div>
                    <img src={heroImage} alt="hero image" className='' />
                </div>

            </div>


        </section>
    )
}