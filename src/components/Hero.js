import heroImage from '../assets/icons_assets/restaurantfood.jpg'


export default function Hero() {

    return (

        <section id="hero">

            <div className='hero-box'>

                <div className='hero-description'>
                    <h1>Little Lemon</h1>

                    <h2>Chicago</h2>

                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

                    <button className='btn btn-warning mt-5'>Reserve a table</button>
                </div>

                <div>
                    <img src={heroImage} alt="hero image" className='' />
                </div>

            </div>


        </section>
    )
}