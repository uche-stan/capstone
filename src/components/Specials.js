import greekSalad from '../assets/icons_assets/greek salad.jpg'
import bruchetta from '../assets/icons_assets/bruchetta.svg'
import lemonDessert from '../assets/icons_assets/lemon dessert.jpg'

export default function Specials() {

    return (

        <section id="specials">


            <div>

                <h2>Specials</h2>

                <button>Menu</button>
            </div>

            <div className="card" style={{ width: "18rem" }}>

                <img src={greekSalad} />

                <div className="card-body">

                    <div>
                        <h5 className="card-title">Greek Salad</h5>
                        <h6 className="card-title">12:99</h6>
                    </div>

                    <p className="card-text">text to build on the card title and make up the bulk of the card's content</p>

                    <a href="#" className="btn" >Order a delivery</a>

                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>

                <img src={bruchetta} />

                <div className="card-body">

                    <div>
                        <h5 className="card-title">Bruchetta</h5>
                        <h6 className="card-title">5:99</h6>
                    </div>

                    <p className="card-text">text to build on the card title and make up the bulk of the card's content</p>

                    <a href="#" className="btn" >Order a delivery</a>

                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>

                <img src={lemonDessert} />

                <div className="card-body">

                    <div>
                        <h5 className="card-title">Lemon Dessert</h5>
                        <h6 className="card-title">5:00</h6>
                    </div>

                    <p className="card-text">text to build on the card title and make up the bulk of the card's content</p>

                    <a href="#" className="btn" >Order a delivery</a>

                </div>
            </div>
        </section>
    )
}