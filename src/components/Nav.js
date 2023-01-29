import { Link } from "react-router-dom"


export default function Nav() {


    return (

        <nav id="nav">

            <ul>
                <li>

                    <Link to="/" className="nav-link">Home</Link>
                </li>

                <li>

                    <Link to="/" className="nav-link">About</Link>
                </li>

                <li>

                    <Link to="/" className="nav-link">Menu</Link>
                </li>

                <li>

                    <Link to="/booking" className="nav-link">Reservations</Link>
                </li>

                <li>
                    <a href=""></a>
                    <Link to="/" className=""><button type="button" className="btn btn-success order-online-btn">Order Online</button></Link>
                </li>


            </ul>


        </nav>
    )
}