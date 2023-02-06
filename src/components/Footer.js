import { BiChevronRight } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export default function Footer() {


    return (

        <footer id="footer">

            <div className='footer-top bg-light'>
                <div className='container '>
                    <div className='row'>

                        <div className=' col-lg-4 col-md-4 text-center text-md-center mb-3'>
                            <h4 >Contact Address</h4>
                            <div className=' d-flex gap-3 justify-content-center justify-content-md-center align-items-center  '>
                                <address>

                                    123 Oak lane<br />
                                    Chicago, 65674,<br />
                                    Illinoir <br />
                                    <strong>Phone:</strong> +123 456 6770<br />
                                    <strong>Email:</strong> info@little-lemon.com

                                </address>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-4 footer-links text-center text-md-center">
                            <h4>Doormant Navigation</h4>

                            <div className='d-flex gap-3 justify-content-center  justify-content-md-center   align-items-center'>

                                <ul>
                                    <li><i><BiChevronRight /></i> <Link to="/" className='nav-link'>Home</Link>  </li>
                                    <li><i><BiChevronRight /></i> <Link to="/" className='nav-link'>About</Link>  </li>
                                    <li><i><BiChevronRight /></i> <Link to="/" className='nav-link'>Menu</Link>  </li>
                                    <li><i><BiChevronRight /></i> <Link to="/booking" className='nav-link'>Reservations</Link>  </li>
                                    <li><i><BiChevronRight /></i> <Link to="/" className='nav-link'>Order Online</Link>  </li>
                                    <li><i><BiChevronRight /></i> <Link to="/" className='nav-link'>Login</Link>  </li>
                                    <li><i><BiChevronRight /></i> <Link to="/feedback" className='nav-link'>Feedback</Link>  </li>
                                </ul>

                            </div>

                        </div>



                        <div className='col-lg-4 col-md-4 text-center  text-md-center  '>

                            <h4>Social Media links</h4>
                            <div className="">



                                <div className="mb-3 social-links d-flex justify-content-center justify-content-md-center gap-3 ">
                                    <a href="#" className="twitter"><i><BsTwitter /></i></a>
                                    <a href="#" className="facebook"><i><BsFacebook /></i></a>
                                    <a href="#" className="instagram"><i><BsInstagram /></i></a>
                                    <a href="#" className="instagram"><i><BsLinkedin /></i></a>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </footer>
    )
}