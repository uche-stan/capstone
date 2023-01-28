import heroImage from '../assets/icons_assets/restaurantfood.jpg'


export default function Hero() {

    return (

        <section id="hero">

            <div>
                <h1>Little Lemon</h1>

                <h2>Chicago</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                <button>Reserve a table</button>
            </div>

            <div>
                <img src={heroImage}  alt="hero image" height={500} />
            </div>
        </section>
    )
}